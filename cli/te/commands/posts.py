from te.config import URL
from te.models.post import Post
from typing import Optional

import click
import requests


@click.command()
def get_posts(slug: str = None) -> Optional[list[Post]]:

    if not slug:
        response = requests.get(URL + "/posts")
    else:
        response = requests.get(URL + "/posts/" + slug)

    if response.status_code == 200:
        posts = [Post.from_json(post) for post in response.json]
    else:
        click.echo("Host returned " + str(response.status_code), err=True)
        posts = None

    return posts
