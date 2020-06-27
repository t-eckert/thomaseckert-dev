// Average words per minute reading constant
const wordsPerMinute = 200;

/** `calculateReadTime`
 *
 * Given a string of text, splits the text into words and returns string
 * with the read time.
 */
const calculateReadTime = (text: string): string => {
  const wordCount = text.split(" ").length;

  const minutes = Math.ceil(wordCount / wordsPerMinute);
  const minuteText = minutes > 0 ? `${minutes} min` : "";

  return minuteText;
};

export default calculateReadTime;
