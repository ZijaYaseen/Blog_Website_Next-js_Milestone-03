export const BlogsSchema = {
    name: "blogs",
    title: "Blogs",
    type: "document",
    fields: [
        {
            name: "id",
            title: "Id",
            type: "string", // Blog Id
        },
        {
            name: "title",
            title: "Title Name",
            type: "string", // Blog ka title
        },
        {
            name: "description",
            title: "Blog Content",
            type: "array", // Dynamic content ke liye array
            of: [
                {
                    type: "block", // Isse headings aur paragraphs ko add kar sakte hain
                    styles: [
                        { title: "Normal", value: "normal" }, // Paragraph ke liye
                        { title: "Heading 1", value: "h1" }, // H1 heading ke liye
                        { title: "Heading 2", value: "h2" }, // H2 heading ke liye
                        { title: "Heading 3", value: "h3" }, // H3 heading ke liye
                    ],
                },
                {
                    type: "image", // Agar image add karni ho
                    title: "Image",
                    fields: [
                        { name: "alt", type: "string", title: "Alt Text" },
                    ],
                },
            ],
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image", // Blog thumbnail ke liye
        },
    ],
};
