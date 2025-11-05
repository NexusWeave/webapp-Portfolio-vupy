import { defineConfig} from "tinacms";

//  Imports of collections
import { blogCollection } from "./collections/blog";
import { profileCollection } from "./collections/profiles";
import { academicCollection } from "./collections/academic";
import { referenceCollection } from "./collections/reference";

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
    publicFolder: "../public",
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
        name: "about",
        label: "About Krigjo25",
        path: "content/about",
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
            isTitle: true,
            name: "title",
            required: true,
            type: "string",
            label: "Title",
            description: "Page Title"
          },
          {
            isBody: true,
            label: "Profile information (Profile info, Deeper insight, Journey, etc.)",
            required: true,
            type: "rich-text",
            name: "profile_info",
            description: "A short but, describeful insight"
          },
        ],
      },
      blogCollection,
      profileCollection,
      academicCollection,
      referenceCollection
    ],
  },
});
