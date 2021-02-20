const pillColorMap = new Map<string, string>([
    ["Python", "blue"],
    ["Programming", "blue"],
    ["Math", "orange"],
    ["History", "green"],
]);

const getPillColor = (text: string): string => pillColorMap.get(text) || "blue";

export default getPillColor;
