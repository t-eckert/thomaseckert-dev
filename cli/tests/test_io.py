from pathlib import Path
from te import io
from te.models import Post
from tests.fixtures import mock_post

import os


def test_write_then_read_post(mock_post: Post):
    # When
    path = io.write(mock_post)

    # Then
    assert path == Path("/home/t_eck/code/thomaseckert-dev/cli/tests/test-dir/posts/a-test-post.md")

    # When
    post_ = io.read(Post, mock_post.slug)

    # Then
    assert mock_post.slug == post_.slug
    assert mock_post.title == post_.title
    assert mock_post.is_published == post_.is_published
    assert mock_post.preview == post_.preview
    assert mock_post.markdown == post_.markdown

    # Cleanup
    os.remove(path)
