---
title: "Encryption and Decryption with Python Azure Functions"
slug: "encryption-and-decryption-with-python-azure-functions"
tags: ["Programming", "Python", "Azure"]
---

> Inspired by Section 1.3 of [David Kopec](https://twitter.com/davekopec)'s \"[Classic Computer Science Problems in Python](https://www.manning.com/books/classic-computer-science-problems-in-python)\".  

[Source Code](https://github.com/t-eckert/sample-python-azure-functions/tree/master/encryption_and_decryption) for this article on GitHub.

Let's build two Azure Functions, both HTTP triggers. One to encrypt a message, the other to decrypt it. Fair warning that if you are looking for a secure encryption solution, you would be better served in the hands of people smarter than me, but I think there is something useful to learn in working through this problem.

As noted above, the logic used in these examples comes from a book by David Kopec. I was working through it last night and wanted to take this section a little further. I reimplemented the work in Section 1.3 \"Unbreakable Encryption\" as two Azure Functions. I'll walk you through the process so you can too!

## Gather Your Materials

Before you begin, you will need the following:

- [Python 3.6](https://www.python.org/downloads/)
- [Azure Functions Core Tools](https://docs.microsoft.com/bs-latn-ba/azure/azure-functions/functions-run-local#v2)

## Create a Virtual Environment

Python Azure Functions App requires that you work within a virtual environment. If you are unfamiliar with using `venv`, there is a great primer over at [RealPython](https://realpython.com/python-virtual-environments-a-primer/).

Bash (MacOS or Linux)

``` bash
python3.6 -m venv .env  
source .env/bin/activate
```

PowerShell or Command Prompt (Windows)

``` powershell
py -3.6 -m venv .env
.\\.env\\Scripts\\activate
```

## Initialize Your Azure Function App

Execute the following command to create a new Function App:

``` bash
func init encryption_and_decryption
```

There is now a folder called `encryption_and_decryption` with the boilerplate code for a Python Azure Function App. If you would like, take some time to open the code in your favorite editor and have a look around.

> If you are looking for an editor, I recommend [VS Code](https://code.visualstudio.com/).

## Create the `encrypt` Function

Make sure you are in the `encryption_and_decryption` directory:

``` bash 
cd encryption_and_decryption
```

Create the new function using: 

``` bash
func new
```

At the prompt, choose `HTTP trigger`. Then name the function `encrypt`.  

## Encrypting Input

Open the file `encrypt/__init__.py`. You should see boilerplate code for an HTTP trigger function. This function will take `name` as a parameter and return \"Hello `name`!\". Let's add code at the bottom of this file that will instead encrypt the `name` using a random set of token bytes.

``` python
from secrets import token_bytes

def random_key(length: int) -> int:
    # returns length random bytes
    key: bytes = token_bytes(length)
    # convert key to bit string
    return int.from_bytes(key, \"big\")
```

Next, write a function to use this random key to encrypt `name`:

``` python
from typing import Tuple

def encrypt(name: str) -> Tuple[int, int]:
    # returns (encrypted_name, dummy_key), encrypted by one-time pad
    # encode the name to bytes, then to a bit string
    name_as_bytes: bytes = name.encode()
    name_key: int = int.from_bytes(name_as_bytes, \"big\")

    # generate a dummy key for encryption
    dummy_key: int = random_key(len(name_as_bytes))

    # encrypt by XOR operation
    encrypted_name: int = name_key ^ dummy_key
    
    return encrypted_name, dummy_key
```

Here, you have encoded the name to a number. This is just another way of writing the `name` data. The data can be translated back from this form. \"Thomas\", put though this transform is `92807522771315`. You can see this in the Python REPL:

``` bash
>>> name: str = \"Thomas\"
>>> name_as_bytes: bytes = name.encode()
>>> name_key = int.from_bytes(name_as_bytes, \"big\")
>>> print(f\"name: {name}\
name_as_bytes: {name_as_bytes}\
name_key: {name_key}\")
name: Thomas
name_as_bytes: b'Thomas'
name_key: 92807522771315
```

I can transform it back:

``` bash
>>> name_again = name_key.to_bytes((name_key.bit_length() + 7) // 8, \"big\").decode()
>>> print(name_again)
Thomas
```

You take the `int` representation of the name, called `name_key` and perform an exclusive OR (XOR) operation with the random_key `int`. In Python XOR is done using the `^` character. This operation produces an encrypted form of the input name:

``` text
name_key ^ random_key = encrypted_name
```

Performing the XOR operation again with the `random_key` will undo the encryption:

``` text
encrypted_name ^ random_key = name_key
```

In a sense, the `random_key` locks and unlocks `name`.

## Using `encrypt`

Now that you have the `encrypt` function written, edit the boilerplate code to take the `name` input, encrypt it and return the encrypted name with the key. Altogether, the code in `__init__.py` should like like this: 

``` python 
import logging
from secrets import token_bytes
from typing import Tuple


import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info(\"func: encrypt: request received\")

    name = req.params.get(\"name\")
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get(\"name\")

    if name:
        # encrypt name
        encrypted_name, dummy_key = encrypt(name)

        response = str({\"encrypted_name\": encrypted_name, \"dummy_key\": dummy_key})
        return func.HttpResponse(response)
    else:
        # ask for input if none provided
        return func.HttpResponse(
            \"Please pass a name on the query string or in the request body\",
            status_code=400,
        )


def random_key(length: int) -> int:
    # returns length random bytes
    key: bytes = token_bytes(length)
    # convert key to bit string
    return int.from_bytes(key, \"big\")


def encrypt(name: str) -> Tuple[int, int]:
    # return (encrypted_name, dummy_key); encrypted by one-time pad
    # encode the name to bytes, then to a bit string
    name_as_bytes: bytes = name.encode()
    name_key: int = int.from_bytes(name_as_bytes, \"big\")

    # generate a dummy key for encryption
    dummy_key: int = random_key(len(name_as_bytes))

    # encrypt by XOR operation
    encrypted_name: int = name_key ^ dummy_key

    return encrypted_name, dummy_key
```

## Testing `encrypt`

Make sure you are in the `encryption_and_decryption` directory and run the Function App with the command: 

``` bash
func host start
```

The output of this command includes a link to the HTTP endpoint for this function: `http://localhost:7071/api/encrypt`.

Visiting this URL in a browser will call the Azure Function and you will get the response \"Please pass a name on the query string or in the request body\". Pass the Function a `name` parameter by appending `?name=Sophia` to the URL so that it reads:

``` text
http://localhost:7071/api/encrypt?name=Sophia
```

You will get a response back that resembles JSON with the encrypted name and dummy key:

``` json
{
    \"encrypted_name\": 191667540651033,
    \"dummy_key\": 278440108655992
}
```

Try it out with different names! 

## Create the `decrypt` function

As you did with the `encrypt` function, from the command line, execute: 

``` bash
func new
```

At the prompt, choose `HTTP trigger`. Then name the function `decrypt`. You will pass both the `encrypted_name` and the `dummy_key` to this Azure Function. It will perform the XOR operation that undoes the encryption.

## Decrypting Input

Open the file `decrypt/__init__.py`. At the bottom of this file, add a function to decrypt 

``` python
def decrypt(encrypted_name: int, dummy_key: int) -> str:
    # returns XOR of encrypted_name and dummy_key converted to bytes and decoded
    name_key: int = encrypted_name ^ dummy_key
    return name_key.to_bytes((name_key.bit_length() + 7) // 8, \"big\").decode()
```


As shown above, performing the XOR operation on the `encrypted_name` and `dummy_key` will output the same value as `name_key`. Then, the function undoes the encoding from `int` to `str`.

> Note:
> In Python 3+, the `//` operator divides numerator by denominator and returns the quotient as an `int`, dropping the digits after the decimal. 
>
> e.g. `5 // 2 == 2` 

## Using `decrypt`

Edit the boilerplate code to accept two arguments `encrypted_name` and `dummy_key`. It should look like this: 

``` python
import logging

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info(\"func: decrypt: request received\")

    encrypted_name = req.params.get(\"encrypted_name\")
    dummy_key = req.params.get(\"dummy_key\")
    if not encrypted_name or not dummy_key:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            encrypted_name = req_body.get(\"encrypted_name\")
            dummy_key = req_body.get(\"dummy_key\")

    if encrypted_name and dummy_key:
        name = decrypt(int(encrypted_name), int(dummy_key))

        return func.HttpResponse(f\"Hello {name}!\")
    else:
        return func.HttpResponse(
            \"Please pass a name on the query string or in the request body\",
            status_code=400,
        )


def decrypt(encrypted_name: int, dummy_key: int) -> str:
    # returns XOR of encrypted_name and dummy_key converted to bytes and decoded
    name_key: int = encrypted_name ^ dummy_key
    return name_key.to_bytes((name_key.bit_length() + 7) // 8, \"big\").decode()
```

## Testing `decrypt`

Start the Azure Function App with 

``` bash
func host start
```

Using the output from the `encrypt` Azure Function, test the `decrypt` Function by visiting:

``` text
http://localhost:7071/api/decrypt?encrypted_name=133673440856088&dummy_key=47262719615353
```

This should return \"Hello Sophia!\".

Try it with your own encrypted values by sending a name to the `encrypt` endpoint and replacing the values for `encrypted_name` and `dummy_key` with the values returned by the Azure Function.

## Going Further

Python Azure Functions:

- Blog post: [Taking a closer look at Python support for Azure Functions](https://azure.microsoft.com/en-us/blog/taking-a-closer-look-at-python-support-for-azure-functions/)  
- GitHub Repo: [Azure Functions Python Worker](https://github.com/Azure/azure-functions-python-worker)

The encryption and decryption code comes from [David Kopec](https://twitter.com/davekopec)'s [Classic Computer Science Problems in Python](https://www.manning.com/books/classic-computer-science-problems-in-python) with the permission of the author.