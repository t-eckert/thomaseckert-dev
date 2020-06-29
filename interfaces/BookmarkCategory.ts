import Bookmark from "./Bookmark";

interface BookmarkCategory {
  _id: string;
  name: string;
  slug: string;
  bookmarks: Bookmark[];
}

export default BookmarkCategory;
