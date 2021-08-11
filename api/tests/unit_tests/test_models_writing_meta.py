from datetime import datetime
from lib.db import delete, fetch_all, save
from lib.models.writing_meta import WritingMeta

import json
import pytest


@pytest.fixture
def writing_meta_fixture():
    # Writing Meta 0
    writing_meta_0_input = {
        "slug": "a-blog-post",
        "title": "A Blog Post",
        "status": "published",
        "reading_time": 20,
        "published_on": datetime(year=2021, month=7, day=3),
        "updated_on": [],
        "likes": 5,
    }
    writing_meta_0 = WritingMeta(**writing_meta_0_input)
    writing_meta_0_json = json.dumps(
        {
            "slug": "a-blog-post",
            "title": "A Blog Post",
            "status": "published",
            "reading_time": 20,
            "published_on": {"$date": 1625270400000},
            "updated_on": [],
            "likes": 5,
        }
    )
    save(writing_meta_0)

    # Writing Meta 1
    writing_meta_1_input = {
        "slug": "another-blog-post",
        "title": "Another Blog Post",
        "status": "draft",
        "reading_time": 40,
        "published_on": datetime(year=2021, month=8, day=3),
        "updated_on": [],
        "likes": 0,
    }
    writing_meta_1 = WritingMeta(**writing_meta_1_input)
    writing_meta_1_json = json.dumps(
        {
            "slug": "another-blog-post",
            "title": "Another Blog Post",
            "status": "draft",
            "reading_time": 40,
            "published_on": {"$date":1627948800000 },
            "updated_on": [],
            "likes": 0,
        }
    )
    save(writing_meta_1)

    yield {
        "writing_meta_0": {
            "obj": writing_meta_0,
            "input": writing_meta_0_input,
            "json": writing_meta_0_json
        },

        "writing_meta_1": {
            "obj": writing_meta_1,
            "input": writing_meta_1_input,
            "json": writing_meta_1_json
        }
    }
    
    delete(writing_meta_0)
    delete(writing_meta_1)
    


def test_to_json(writing_meta_fixture):
    # Given
    writing_meta = writing_meta_fixture["writing_meta_0"]["obj"]
    expected = json.loads(writing_meta_fixture["writing_meta_0"]["json"])

    # When
    actual = json.loads(writing_meta.to_json())

    # Then
    assert expected["slug"] == actual["slug"]
    assert expected["title"] == actual["title"]
    assert expected["status"] == actual["status"]
    assert expected["reading_time"] == actual["reading_time"]
    assert expected["published_on"] == actual["published_on"]
    assert expected["updated_on"] == actual["updated_on"]
    assert expected["likes"] == actual["likes"]


def test_fetch_all(writing_meta_fixture):
    # Given
    expected = [
        writing_meta_fixture["writing_meta_0"]["obj"],
        writing_meta_fixture["writing_meta_1"]["obj"],
    ]

    # When
    actual = fetch_all(WritingMeta)

    # Then
    assert actual[0] == expected[0]
    assert actual[1] == expected[1]
