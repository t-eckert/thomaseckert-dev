def format_as_slug(string: str) -> str:
    """Formats a string by changing all characters to lowercase and replacing spaces with `-`

    Args:
        string (str):           the string to be formatted

    Returns:
        str:                    a "slug" formatted string
    """

    return string.lower().replace(" ", "-")


def comma_separated_to_list(comma_separated: str) -> list:
    """Takes a string of comma separated values and parses it to a list of strings

    Args:
        comma_separated (str):  a string of comma separated values

    Returns:
        list:                   a list of strings
    """

    return [value.strip() for value in comma_separated.split(",")]