export default interface PostMetadata {
  slug: string;
  title: string;
  publishDate: Date;
  tags: string[];
  emoji: string;
  isPublished: boolean;
  preview: string;
}
