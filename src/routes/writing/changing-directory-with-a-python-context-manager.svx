---
slug: changing-directory-with-a-python-context-manager
published: 9-28-21
---

In my latest project, I've added Tailwind and Vue to a Flask app. This requires
an additional build step to compile each using `npm` during deployment. Given
that Python is already present on the server by the time the build step occurs,
I decided to write the build script in Python.

Those who have written build scripts before may be familiar with the pattern of
changing into a directory, executing commands, then returning to the original directory to start the next set of commands. That was exactly what I needed to do here:

1. Change directory to `./tailwind`
   1. Execute `npm install` to install dependencies
   2. Execute `npm run build` to compile the Tailwind CSS
2. Change directory `..`
3. Change directory `./vue`
   1. Execute `npm install` to install dependencies
   2. Execute `npm run build` to compile the Vue application

This seemed like a perfect fit for a Python context manager. Context managers allow for the instatiation of a context using the `with` keyword. The context is disposed when the code is dedented. Using a context manager to change directories here would eliminate the relative path directory change in step 2, once the first step is completed, the directory would be automatically reset to what it was before the context was initiated.

By writing the right context manager `set_directory`, I could implement the build script as

```python
from pathlib import Path

with set_directory(Path(\"./tailwind\")):
    run_npm_install()
    run_npm_build()
with set_directory(Path(\"./vue\")):
    run_npm_install()
    run_npm_build()
```

and I thought that was pretty slick!

Context managers can be written as classes or functions. Given the relative simplicity of this context, I opted to use a function. A context manager function must be decorated with `@contextmanager` which is imported from `contextlib`. It should have a `try` block with a `yield` and a `finally` block. When the context is instantiated using the `with` keyword, the `try` block is run. When the indented code block is left, the `finally` block is run. As an example,

```python
from contextlib import contextmanager

@contextmanager
def friendly_context():
    try:
        print(\"Hello! Welcome to the context!\")
        yield
    finally:
        print(\"Bye now. Thank you for visiting the context. Come again soon.\")

with friendly_context():
    print(\"Oh thank you, it is so nice to be in the context.\")
```

when executed will print

```text
Hello! Welcome to the context!
Oh thank you, it is so nice to be in the context.
Bye now. Thank you for visiting the context. Come again soon.
```

To write my directory changing context manager, I needed to save the original path to a variable, change it in the `try` block to whatever was passed in to the function, then change to the original path in the `finally` block.

```python
from contextlib import contextmanager
from pathlib import Path

import os

@contextmanager
def set_directory(path: Path):
    \"\"\"Sets the cwd within the context

    Args:
        path (Path): The path to the cwd

    Yields:
        None
    \"\"\"

    origin = Path().absolute()
    try:
        os.chdir(path)
        yield
    finally:
        os.chdir(origin)
```

And it works like a charm! Let me know if you found a cool use for context managers or would have solved this problem a different way.