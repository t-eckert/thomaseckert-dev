from requests import Response
from te import cli
from te.api import get_posts
from te.models import Post
from te.io import write

import click


@cli.group()
def posts():
    ...


@posts.command()
@click.argument("slug", required=False)
def get(slug: str = None):

    response: Response = get_posts(slug)

    if response.status_code != 200:
        click.echo(f"Getting posts failed with {response.status_code} {response.text}.", err=True)

    posts = [Post.from_json(body) for body in response.json()]

    for post in posts:
        write(post)


@posts.command()
@click.argument("title")
def create(title: str):

    post = Post.create(title)

    write(post)