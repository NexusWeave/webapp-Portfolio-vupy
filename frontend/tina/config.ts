import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "/media",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "academic",
        label: "Academic Timeline",
        path: "content/academic",
        fields: [
          {
            name: "date",
            label: "Date",
            required: true,
            type: "datetime"
          },
          {
            isTitle: true,
            name: "title",
            required: true,
            label: "Title",
            type: "string",
            description: "Title of the Subject"
          },
          {
            label: "Name",
            type: "string",
            required: true,
            name: "institution",
            description: "Name of the institution"
          },
          {
            name: "tech",
            type: "string",
            required: true,
            label: "Technologies",
            description: "Technologies used in project"
          },
          {
            name: "body",
            isBody: true,
            required: true,
            label: "Summary",
            type: "rich-text"
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            description: "Location of institution"
          },
          {
            name: "link",
            label: "Link",
            type: "string",
            required: true,
            description: "Link to institution"
          },
        ],
      },
      {
        name: "achievements",
        label: "Achievements Timeline",
        path: "content/achievements",
        fields: [
          {
            name: "date",
            label: "Date",
            required: true,
            type: "datetime",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            description: "Title of the Subject",
          },
          {
            name: "tech",
            type: "string",
            required: true,
            label: "Technologies",
            description: "Technologies used in project",
          },
          {
            name: "summary",
            isBody: true,
            required: true,
            label: "Summary",
            type: "rich-text",
          },
          {
            name: "listedSkills",
            required: true,
            type: "rich-text",
            label: "Summary of learning",
          },

          {
            type: "string",
            name: "link",
            label: "Link",
            required: true,
            description: "Link to institution",
          },
        ],
      },
      {
        name: "about",
        label: "About Krigjo25",
        path: "content/about",
        fields: [
          {
            isTitle: true,
            name: "title",
            required: true,
            type: "string",
            label: "Title"
          },
          {
            isBody: true,
            label: "Body",
            required: true,
            type: "rich-text",
            name: "profile_info",
            description: "Profile information about krigjo25"
          },
          {
            isBody: true,
            label: "Body",
            required: true,
            type: "rich-text",
            name: "deeper_info",
            description: "krigjo25 History"
          },
        ],
      },
      {
        name: "dev",
        label: "Dev-profile",
        path: "content/dev",
        fields: [
          {
            name: "title",
            isTitle: true,
            type: "string",
            label: "Title",
            required: true
          },
          {
            isBody: true,
            required: true,
            type: "rich-text",
            name: "backend_profile",
            label: "Backend profile"
          },
          {
            isBody: true,
            required: true,
            type: "rich-text",
            name: "frontend_profile",
            label: "Frontend profile"
          },
        ],
      },
      {
        name: "posts",
        label: "Blog Posts",
        path: "content/blog_posts",
        fields:
        [
          {
            name: "date",
            label: "Date",
            required: true,
            type: "datetime"
          },
          {
            name: "title",
            isTitle: true,
            type: "string",
            label: "Title",
            required: true
          },
          {
            isBody: true,
            required: true,
            type: "rich-text",
            name: "intro",
            label: "Introduction"
          },
          {
            isBody: true,
            required: true,
            type: "rich-text",
            name: "challanges_model",
            label: "STAR-model"
          },
        ],
      }
    ],
  },
});
