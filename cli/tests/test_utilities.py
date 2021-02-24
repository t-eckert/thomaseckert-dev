from te.utilities import format_as_slug

import pytest


@pytest.mark.parametrize("string,expected", [["Winona is a corgi", "winona-is-a-corgi"]])
def test_format_as_slug(string: str, expected: str):
    # When
    actual = format_as_slug(string)

    # Then
    assert expected == actual