---
title: "Logging Execution Time in Python"
slug: "logging-execution-time-in-python"
tags: ["Programming", "Python"]
---
Here is a decorator for logging execution time for a Python function:

``` python
from time import time


def print_execution_time(function):
    def timed(*args, **kw):
        time_start = time()
        return_value = function(*args, **kw)
        time_end = time()

        execution_time = time_end - time_start

        arguments = \", \".join(
            [str(arg) for arg in args] + [\"{}={}\".format(k, kw[k]) for k in kw]
        )

        print(
            \"{} ms {}({})\".format(
                str(execution_time * 1000), function.__name__, arguments
            )
        )
        return return_value

    return timed


@print_execution_time
def repeat(number, n_repeats=30000):
    return [number for number in range(30000)]


repeat(9)
repeat(20, 40000)
repeat(1, n_repeats=4000)
```

This will print the execution time in milliseconds and the name of the function run with its arguments:

``` bash
1.001596450805664 ms repeat(9)
1.0008811950683594 ms repeat(20, 40000)
1.0001659393310547 ms repeat(1, n_repeats=4000)
```