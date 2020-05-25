import calculateReadTime from "~/functions/calculateReadTime";
import each from "jest-each";

describe("calculate read time", () => {
  each([
    [199, "1 minute"],
    [1990, "10 minute"],
    [11999, "1 hour"],
    [12199, "1 hour 1 minute"],
  ]).it("%d words take %s to read", (wordCount: number, expected: string) => {
    // Given
    const text = "word ".repeat(wordCount);

    // When
    const actual = calculateReadTime(text);

    // Then
    expect(actual).toEqual(expected);
  });
});
