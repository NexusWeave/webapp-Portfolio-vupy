import type { Collection } from "tinacms";


export const referenceCollection: Collection =
{
    name: "quotes",
    label: "Reference Quotes",
    path: "content/quotes/references",
    fields:
    [
        { 
            name: "title",
            isTitle: true,
            type: "string",
            required: true,
            label: "Company Name",
            description: "Company Name (e.g. Reference OlaNorman AS )"
        },
        {
            name: "link",
            type: "string",
            required: true,
            label: "Link to reference",
            description: "A link to the reference (if any) (e.g. https://example.com) )"
        },
        {
            name: "quote",
            type: "string",
            label: "Quote",
            required: true,
            description: "The author of the quote"
        }
    ]
};