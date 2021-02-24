from dataclasses import dataclass
from te.models.document import Document
from te.utilities import comma_separated_to_list, format_as_slug

import frontmatter


@dataclass
class Post(Document):
    """Represents a blog post on the site"""

    slug: str
    title: str
    tags: list[str]
    is_published: bool
    preview: str
    markdown: str

    directory: str = "posts"

    def to_markdown(self) -> str:
        """Formats the post as markdown with the correct frontmatter

        Args:
            self (Post):        the post to be formatted

        Returns:
            str:                the post formatted as markdown
        """

        return f"""---
title: {self.title}
tags: {", ".join(self.tags)}
is_published: {self.is_published}
preview: {self.preview}
---

{self.markdown}"""

    def to_json(self) -> dict:
        """Formats the post a JSON for sending to the site API

        Returns:
            dict:               the post represented as JSON
        """

        return {
            "slug": self.slug,
            "title": self.title,
            "tags": self.tags,
            "is_published": self.is_published,
            "preview": self.preview,
            "markdown": self.markdown,
        }

    @staticmethod
    def from_text(body: str) -> "Post":
        """Parses body to a Post object using frontmatter

        Args:
            body (str):         text representing the post

        Returns:
            Post:               the post represented by the body
        """

        post: frontmatter.Post = frontmatter.loads(body)

        title = post["title"]
        slug = format_as_slug(title)
        tags = comma_separated_to_list(post["tags"])
        is_published = post["is_published"]
        preview = post["preview"]

        markdown = post.content

        return Post(slug, title, tags, is_published, preview, markdown)

    @staticmethod
    def from_json(post: dict) -> "Post":
        """Creates a new Post object from JSON

        Args:
            post (dict):        the post represented as JSON

        Returns:
            Post:               the post generated from JSON
        """

        return Post(post["slug"], post["title"], post["tags"], post["is_published"], post["preview"], post["markdown"])
