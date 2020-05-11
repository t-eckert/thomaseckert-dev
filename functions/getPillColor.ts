const pillColorMap = new Map<string, string>([
  ["Python", "blue"],
  ["Programming", "blue"],
  ["Math", "orange"],
]);

const getPillColor = (text: string): string => pillColorMap.get(text) || "blue";

export default getPillColor;
