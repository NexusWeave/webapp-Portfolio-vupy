import type { Collection } from "tinacms";
import { techStack } from "../../utils/techStack";

export const academicCollection: Collection =
{
    name: "achievements",
    label: "Presentasjon",
    path: "content/achievements",
    fields:
    [
        {
            name: "created",
            required: true,
            label: "Date",
            
            type: "datetime",
            ui: { dateFormat: 'MM-YY'}
        },
        {
            name: "end",
            type: "datetime",
            label: "Project or school status last update",
            ui: { dateFormat: 'MM-YY'}
        },
        {
            required: true,
            type: "string",
            name: "organization",
            label: "Name of the Organization",
            description: "e.g. University, Company"
        },
        {
            type: "string",
            name: "org_link",
            label: "A link to the organization",
            description: "E.g. https://example.com"
        },
        {
            isTitle: true,
            name: "title",
            required: true,
            label: "Title of the Subject",
            type: "string",
            description: "E.g. Bachelor of Science in Computer Science / organization name"
        },
        {
            type: "string",
            name: "location",
            label: "Location of school",
            description: "(city, county, country) of the School"
        },
        {
            name: "loc_link",
            label: "Location link",
            type: "string",
            description: "a google maps link to the location (if possible)"
        },
        {
            type: "string",
            name: "references",
            label: "References",
            description: "A title of a reference (if any) (e.g. \"Doe, J. (2020). Title of the paper.\")"
        },
        {
            name: "ref_link",
            label: "Reference link",
            type: "string",
            description: "A link to the reference (if any) (e.g. https://example.com)"
        },
        {
            list: true,
            name: "techStack",
            type: "string",
            options: techStack,
            label: "Technologies which were used in project / school",
        },
        {
            name: "body",
            isBody: true,
            required: true,
            label: "Summary",
            type: "rich-text"
        },
    ],
}