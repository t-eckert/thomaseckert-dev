def format_as_slug(string: str) -> str:
    """Formats a string by changing all characters to lowercase and replacing spaces with `-`

    Args:
        string (str):           the string to be formatted

    Returns:
        str:                    a "slug" formatted string
    """

    return string.lower().replace(" ", "-")