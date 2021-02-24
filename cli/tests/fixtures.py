from datetime import datetime
from te.models import Post

import pytest


@pytest.fixture()
def mock_post() -> Post:
    return Post(
        slug="a-test-post",
        title="A Test Post",
        tags=["test", "post"],
        is_published=False,
        preview="Test posts are great for seeing if your code works!",
        markdown="""When I was a young boy, I dreamed of writing posts to test if my code worked.\n\n
> This markdown quote gives a picture of what tests posts are like\n\n
Markdown is an effective way of creating markup for your posts!""",
    )