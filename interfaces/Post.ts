export default interface Post {
  title: string;
  publishDate: Date;
  tags: string[];
  emoji: string;
  isPublished: boolean;
  preview: string;
  content: string;
}
