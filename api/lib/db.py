from lib.config import DB_CONN
from mongoengine import connect, disconnect, Document
from typing import Any, Callable, Optional


def use_database(function: Callable) -> Callable:
    """Decorator providing a database connection for the lifetime of a function

    Usage:
    ```python
    @use_database
    def save_document(document: Document):
        document.save()
    ```

    Args:
        function (Callable):    function to be decorated with database access
    Returns:
        Callable:               function, decorated with database access
    """

    def connect_to_database(*args, **kwargs) -> Any:
        """Connects to the database prior to calling the curried function. Disposes connection after call completes.

        Returns:
            Any:                value returned by the decorated function
        """

        connect(host=DB_CONN)
        return_value = function(*args, **kwargs)
        disconnect()

        return return_value

    return connect_to_database


@use_database
def save(document: Document):
    """Saves the given document to the database

    Args:
        document (Document):    MongoDB document to save
    """

    document.save()


@use_database
def fetch(document_class: Any, **kwargs) -> Optional[Document]:

    return document_class.objects(**kwargs)

@use_database
def delete(document: Document):

    document.delete()
