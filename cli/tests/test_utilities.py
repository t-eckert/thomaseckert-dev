from te.utilities import comma_separated_to_list, format_as_slug

import pytest


@pytest.mark.parametrize("string,expected", [["Winona is a corgi", "winona-is-a-corgi"]])
def test_format_as_slug(string: str, expected: str):
    # When
    actual = format_as_slug(string)

    # Then
    assert expected == actual


@pytest.mark.parametrize("comma_separated,expected", [["value 1, value 2", ["value 1", "value 2"]]])
def test_comma_separated_to_list(comma_separated: str, expected: list):
    # When
    actual = comma_separated_to_list(comma_separated)

    # Then
    assert expected == actual