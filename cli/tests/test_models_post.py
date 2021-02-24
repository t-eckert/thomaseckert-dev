from te.models import Post

import pytest
import json


@pytest.mark.parametrize(
    "post,expected",
    [
        [
            {
                "slug": "a-test-post",
                "title": "A Test Post",
                "tags": ["test", "post"],
                "is_published": True,
                "preview": "Preview text.",
                "markdown": "Test markdown.",
            },
            Post("a-test-post", "A Test Post", ["test", "post"], True, "Preview text.", "Test markdown."),
        ],
        [
            {
                "extra": "This is extra cruft.",
                "slug": "a-test-post",
                "title": "A Test Post",
                "tags": ["test", "post"],
                "is_published": True,
                "preview": "Preview text.",
                "markdown": "Test markdown.",
            },
            Post("a-test-post", "A Test Post", ["test", "post"], True, "Preview text.", "Test markdown."),
        ],
        [
            {
                "slug": "a-test-post",
                "title": None,
                "tags": ["test", "post"],
                "is_published": True,
                "preview": "Preview text.",
                "markdown": "Test markdown.",
            },
            Post("a-test-post", None, ["test", "post"], True, "Preview text.", "Test markdown."),
        ],
    ],
)
def test_from_json(post: dict, expected: Post):
    # When
    actual = Post.from_json(post)

    # Then
    assert expected == actual


@pytest.mark.parametrize(
    "post,expected",
    [
        [
            Post("a-test-post", "A Test Post", ["test", "post"], True, "Preview text.", "Test markdown."),
            {
                "slug": "a-test-post",
                "title": "A Test Post",
                "tags": ["test", "post"],
                "is_published": True,
                "preview": "Preview text.",
                "markdown": "Test markdown.",
            },
        ],
    ],
)
def test_from_json(post: Post, expected: dict):
    # When
    actual = post.to_json()

    # Then
    assert expected == actual


@pytest.mark.parametrize(
    "text,expected",
    [
        [
            """---
title: A Test Post
tags: test, post
is_published: true
preview: Preview text.
---
Test markdown.""",
            Post("a-test-post", "A Test Post", ["test", "post"], True, "Preview text.", "Test markdown."),
        ],
        [
            """---
title: A Test Post
tags: test, post
is_published: false
preview: Preview text.
---
Test markdown.""",
            Post("a-test-post", "A Test Post", ["test", "post"], False, "Preview text.", "Test markdown."),
        ],
        [
            """---
title: A Test Post
tags: test, post
is_published: false
preview: Preview text.
extra: extra cruft
---
Test markdown.""",
            Post("a-test-post", "A Test Post", ["test", "post"], False, "Preview text.", "Test markdown."),
        ],
    ],
)
def test_from_text(text: str, expected: Post):
    # When
    actual = Post.from_text(text)

    # Then
    assert expected == actual


@pytest.mark.parametrize(
    "post,expected",
    [
        [
            Post("a-test-post", "A Test Post", ["test", "post"], False, "Preview text.", "Test markdown."),
            """---
title: A Test Post
tags: test, post
is_published: False
preview: Preview text.
---

Test markdown.""",
        ]
    ],
)
def test_to_markdown(post: Post, expected: str):
    # When
    actual = post.to_markdown()

    # Then
    assert expected == actual