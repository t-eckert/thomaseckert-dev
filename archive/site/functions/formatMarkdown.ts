import remark from "remark";
// @ts-ignore This package lacks a declaration file and is only used here
import html from "remark-html";

const formatMarkdown = (markdown: string): string => {
    let out;

    remark()
        .use(html)
        .process(markdown, (err: any, file: any) => {
            out = String(file);
        });

    return out || "";
};

export default formatMarkdown;
