import type Bookmark from "./Bookmark"

type BookmarkCategory = {
	title: string
	priority: number
	bookmarks: Bookmark[]
}

export default BookmarkCategory