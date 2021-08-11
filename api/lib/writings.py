from functools import cache
from lib.db import fetch
from lib.models.writing import Writing
from lib.models.writing_meta import WritingMeta
from typing import Optional


@cache
def get_writings_meta() -> list[WritingMeta]:
    """Returns all metadata about writings for the site
    Results are stored in a cache that will live for the lifetime of the Azure Function process

    Returns:
        list[WritingMeta]:      all metadata for existing writings
    """

    return fetch(WritingMeta)


@cache
def get_writing(slug: str) -> Optional[Writing]:
    """Returns data for a writing based on its slug or None if no writing matching the slug exists
    Results are stored in a cache that will live for the lifetime of the Azure Function process

    Returns:
        Optional[Writing]:      writing object or None if no writing object matching the slug exists
    """

    return fetch(WritingMeta, slug=slug)
