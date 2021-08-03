/** `Post` interface
 *
 * Expected structure of posts
 *
 * Reflected in `api/models/Post.ts` for db interface
 */
interface Post {
    /** Unique GUID identifying the post */
    _id: string;

    /** Defines the URL path to the post
     *
     * Derived from the title as all lowercase with dashes replacing spaces */
    slug: string;

    /** Title of the post */
    title: string;

    /** Date when the post was created */
    created: Date;

    /** Date when the post was last changed */
    updated: Date;

    /** Tags for categorizing the post (e.g. Python, Programming, Science) */
    tags: string[];

    /** Whether the post is listed on the homepage */
    isPublished: boolean;

    /** Text describing the post */
    preview: string;

    /** Body of the post, formatted in markdown */
    markdown: string;
}

export default Post;
