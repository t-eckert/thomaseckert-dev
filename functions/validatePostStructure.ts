import Post from "@/interfaces/Post";

export const validatePostStructure = (post: Post): boolean => {
  // todo 2020-04-05 this could be more elegant... finding the keys on the interface
  const expectedKeys = [
    "content",
    "emoji",
    "isPublished",
    "preview",
    "publishDate",
    "slug",
    "tags",
    "title",
  ];

  const keys = Object.keys(post).sort();

  return expectedKeys.toString() === keys.toString();
};
