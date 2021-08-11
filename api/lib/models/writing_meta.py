from datetime import datetime
from lib.db import use_database
from mongoengine import Document, StringField, DateField, ListField, IntField


class WritingMeta(Document):
    """Represents metadata about a Writing object"""

    slug: StringField = StringField()
    title: StringField = StringField()
    status: StringField = StringField()
    reading_time: IntField = IntField()
    published_on: DateField = DateField()
    updated_on: ListField = ListField(DateField())
    likes: IntField = IntField()

