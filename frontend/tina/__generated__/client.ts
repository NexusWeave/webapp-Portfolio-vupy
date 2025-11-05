import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '9e88ca4413e8a633b696b61afb3f3fd8b7c4b560', queries,  });
export default client;
  