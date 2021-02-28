from setuptools import setup

setup(
    name="te",
    version="0.0.1",
    py_modules=["te"],
    install_requires=["Click", "requests"],
    entry_points="""
        [console_scripts]
        te=te:cli
    """,
)
