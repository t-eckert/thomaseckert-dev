interface Post {
  slug: string;
  emoji: string;
  title: string;
  tags: string[];
  publishDate: Date;
  preview: string;
  markdown: string;
}

export default Post;
