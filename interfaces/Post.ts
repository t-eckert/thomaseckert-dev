interface Post {
  slug: string;
  emoji: string;
  title: string;
  tags: string[];
  publishDate: Date;
  isPublished: boolean;
  preview: string;
  markdown: string;
}

export default Post;
