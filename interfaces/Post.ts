interface Post {
  _id: string;
  slug: string;
  emoji: string;
  title: string;
  createdOn: Date;
  updatedOn: Date;
  tags: string[];
  isPublished: boolean;
  preview: string;
  markdown: string;
}

export default Post;
