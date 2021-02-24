from dataclasses import dataclass
from te.models.document import Document
from te.utilities import format_as_slug

import frontmatter


@dataclass
class Post(Document):
    slug: str
    title: str
    tags: list[str]
    is_published: bool
    preview: str
    markdown: str

    directory: str = "posts"

    def to_markdown(self) -> str:
        return f"""---
title: {self.title}
tags: {", ".join(self.tags)}
is_published: {self.is_published}
preview: {self.preview}
---

{self.markdown}"""

    def to_json(self) -> dict:
        ...

    @staticmethod
    def from_file(body: str) -> "Post":
        post: frontmatter.Post = frontmatter.loads(body)

        title = post["title"]
        slug = format_as_slug(title)
        tags = post["tags"]
        is_published = post["is_published"]
        preview = post["preview"]

        markdown = post.content

        return Post(slug, title, tags, is_published, preview, markdown)

    @staticmethod
    def from_json(post: dict) -> "Post":

        return Post(id=post["id"])
