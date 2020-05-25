// Average words per minute reading constant
const wordsPerMinute = 200;

/** `calculateReadTime`
 *
 * Given a string of text, splits the text into words and returns string
 * with the read time.
 */
const calculateReadTime = (text: string): string => {
  const wordCount = text.split(" ").length;

  const totalMinutes = Math.ceil(wordCount / wordsPerMinute);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const hourText = hours > 0 ? `${hours} hour` : "";
  const minuteText = minutes > 0 ? `${minutes} minute` : "";

  return (hourText + " " + minuteText).trim();
};

export default calculateReadTime;
