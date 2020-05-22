import Bookmark from "./Bookmark";

interface BookmarkCategory {
  name: string;
  slug: string;
  bookmarks: Bookmark[];
}

export default BookmarkCategory;
