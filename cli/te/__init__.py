import click


@click.group()
def cli():
    ...


from te.commands import posts