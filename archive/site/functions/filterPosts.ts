import { Post } from "~/interfaces";

const filterPosts = (posts: Post[], tag: string): Post[] => {
    return posts.filter(post => post.tags.includes(tag))
}

export default filterPosts;