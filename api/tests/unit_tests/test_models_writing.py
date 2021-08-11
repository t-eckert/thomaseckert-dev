from lib.models.writing import Writing

import pytest


@pytest.mark.parametrize(
    "input,expected",
    [
        [
            {
                "slug": "a-blog-post",
                "markdown": "# A Blog Post",
                "html": "<h1>A Blog Post</h1>",
            },
            {
                "slug": "a-blog-post",
                "markdown": "# A Blog Post",
                "html": "<h1>A Blog Post</h1>",
            },
        ]
    ],
)
def test_to_json(input: dict, expected: dict):
    # Given
    writing = Writing(**input)

    # When
    actual = writing.to_json()

    # Then
    assert expected == actual
