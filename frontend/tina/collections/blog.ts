import type { Collection } from "tinacms";
import { tagsOptions } from "../../utils/tagStack";

export const blogCollection: Collection =
    {
    name: "posts",
    label: "Blog Posts",
    path: "content/posts",
    fields:
    [
        {
            name: "created",
            label: "Published",
            required: true,
            type: "datetime",
            ui: { dateFormat: 'DD-MM-YY'}
        },
        {
            name: "current",
            label: "Updated",
            type: "datetime",
            ui: { dateFormat: 'DD-MM-YY'}
        },
        {
            list: true,
            name: "tags",
            label: "Tags",
            type: "string",
            options: tagsOptions
        },
        {
            name: "title",
            isTitle: true,
            type: "string",
            label: "Title",
            required: true
        },
        {
            required: true,
            name: "ingress",
            label: "Ingress",
            type: "rich-text"
        },
        {
            isBody: true,
            name: "main",
            required: true,
            type: "rich-text",
            label: "Main text"
        },
        {
            isBody: true,
            required: true,
            type: "rich-text",
            name: "star",
            label: "STAR - Modell"
        },
    ],
};