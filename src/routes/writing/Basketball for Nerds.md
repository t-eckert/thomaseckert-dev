---
title: Basketball for Nerds
tags: ["Programming", "Python", "Math"]
slug: "basketball-for-nerds"
---

> Inspired by a question in Gayle Laakmann McDowell's [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=sr_1_1?ie=UTF8).  

Let's say a friend challenges you to choose one of two games on the basketball court:

1. You have one chance to make one shot.
2. You have three chances to make two or more shots.

You want to win and you know the exact probability of making a shot `p`. Which game do you have a better chance of winning?

## Chance of Winning Game One

This game consists of one chance to make one shot. Because the likelihood of making a shot is known to be `p`, the chance of winning is also `p`. Let's write this as

```
s_1(p) = p
```

where `s_1(p)` is the likelihood of winning the first game.

## Chance of Winning Game Two


Here, the math gets trickier. Because you must make _at least_ two of the three shots, there are four ways to win this game:

| First | Second | Third |
| :---: | :----: | :---: |
|   🏀   |   🏀    |       |
|       |   🏀    |   🏀   |
|   🏀   |        |   🏀   |
|   🏀   |   🏀    |   🏀   |

The probability of making all three shots is the probability of making the first shot _times_ making the second shot _times_ making the third shot, `p^3`.

The probability of making two out of three shots is the probability of making two shots, `p^2`, times the probability of not making one shot `1 - p`. There are three chances for this to happen. So combined, this is `3p^2(1 - p)`.

We add the probability of making all shots to the probability of making two of three and get

```
s_2(p) = p^3 + 3p^2(1 - p) = 3p^2 - 2p^3
```

## Playing the Game

Now the time has come to decide which game to play. The chance of winning each game depends upon `p`, which we recall is the likelihood of making a single shot. Let's write some Python to choose which game to play based on what `p` is.

To visualize the function, let's use `matplotlib` and `numpy`. We run `pip install matplotlib` and in our code write

``` python
import matplotlib.pyplot as plt
import numpy as np
```

Next, we need a function to calculate the likelihood of winning the first game (a single shot). This function will just return its input, but writing it down as a function will clairify our intent. We also will be more expressive with our naming convention here calling `p`, `single_shot_probability` and `s_1`, `one_shot_win_probability`.


``` python
def one_shot_probability(single_shot_probability: float) -> float:
    # Calculates the probability of winning with one chance to make one shot.

    return single_shot_probability
```

Similarly, we write a function for calculating `s_2` called `two_of_three_shot_probability`. 

``` python
def two_of_three_shot_probability(single_shot_probability: float) -> float:
    # Calculates the probability of winning with three chances to make at least two shots.

    return 3*single_shot_probability**2 - 2*single_shot_probability**3
```

Now, let's go on a quick tangent about Python. `two_of_three_shot_probability` is a verbose name for a function. Sometimes that's appropriate. I think in a scenario where the intent of these functions is well-known by all programmers in a codebase, this would be _too_ verbose. It is more verbose than I usually write, perhaps in a codebase at a professional arbitrary basketball game probability company the code would look like this:

``` python
def win_2_by_3_prob(p):
    # Win if 2/3 shots made.
    return 3*p**2 - 2*p**3
```

Heck, if you just need the function for one quick thing, you can write it as a lambda:

``` python
win2by3 = lambda p : 3*p**2 - 2*p**3
```

All of three ways to calculate the 2/3 game do the same thing, it's part of the craft of programming to determine how you will write it. 

Now that we have functions to calculate the probability of winning either game, we can plot both functions with respect to the likelihood of making a single shot. Let's vary this likelihood from 0 to 1 in steps of 0.01 and plot using `matplotlib`.

``` python
p_range = np.linspace(0, 1, 100)
one_shot_probs = [one_shot_probability(p) for p in p_range]
two_by_three_shot_probs = [two_of_three_shot_probability(p) for p in p_range]

plt.plot(p_range, one_shot_probs, label=\"One of One to Win\")
plt.plot(p_range, two_by_three_shot_probs, label=\"Two of Three to Win\")
plt.ylabel(\"Probability of Winning Game\")
plt.xlabel(\"Probability of Making a Single Shot\")
plt.legend()
plt.show()
```

Altogether, we get the code

``` python
import matplotlib.pyplot as plt
import numpy as np


def one_shot_probability(single_shot_probability: float) -> float:
    # Calculates the probability of winning with one chance to make one shot.

    return single_shot_probability


def two_of_three_shot_probability(single_shot_probability: float) -> float:
    # Calculates the probability of winning with three chances to make at least two shots.

    return 3*single_shot_probability**2 - 2*single_shot_probability**3


p_range = np.linspace(0, 1, 100)
one_shot_probs = [one_shot_probability(p) for p in p_range]
two_by_three_shot_probs = [two_of_three_shot_probability(p) for p in p_range]

plt.plot(p_range, one_shot_probs, label=\"One of One to Win\")
plt.plot(p_range, two_by_three_shot_probs, label=\"Two of Three to Win\")
plt.ylabel(\"Probability of Winning Game\")
plt.xlabel(\"Probability of Making a Single Shot\")
plt.legend()
plt.show()
```

Running this code gives us the plot

![A plot of the likelihood of winning each game.](https://media.graphcms.com/tINbsEj0RU6kItX6dwxC)

We can see that if the probability of making a single shot is less than `0.5`, game one is the best bet. If that probability is greater than `0.5`, game two is the best. If our probability of making a single shot is exactly `0.5`, we have the same chance of winning either game.

So which game will you play?