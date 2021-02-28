from requests import Response
from te import cli
from te.api import authenticate

import click
import os


@cli.command()
@click.argument("password")
def login(password: str):

    response: Response = authenticate(password)

    if response.status_code != 200:
        click.echo(f"Login failed with {response.status_code} {response.text}.", err=True)

    jwt = response.json()["token"]

    os.environ["TE_JWT"] = jwt