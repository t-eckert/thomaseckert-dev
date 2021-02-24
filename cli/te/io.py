from pathlib import Path
from te.config import ROOT_DIR
from te.models import Document
from typing import Optional


def read(doc_type: Document, slug: str) -> Optional[Document]:
    """Read the Post at /<ROOT_DIR>/<doc_type.directory>/<slug>.md and parse into a subclass object of Document

    Args:
        doc_type (Document):    the document subclass of Document
        slug (str):             the short-form slug of the post

    Returns:
        Optional[Document]:         the document found at the location if it exists
    """

    with open(ROOT_DIR / doc_type.directory / f"{slug}.md", "r") as f:
        if not f.readable():
            return None

        body = f.read()

    return doc_type.from_text(body)


def write(document: Document) -> Path:
    """Write the document as markdown to /<ROOT_DIR>/<document.directory>/<slug>.md and returns the path where the file was written

    Args:
        document (Document):    the document object to be written to disk

    Returns:
        Path:                   the path where the post was written
    """

    path = ROOT_DIR / document.directory / f"{document.slug}.md"

    with open(path, "w+") as f:
        f.write(document.to_markdown())

    return path
