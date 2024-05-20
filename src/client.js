import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "52cnjlsk",
  dataset: "production",
  useCdn: "true",
  apiVersion: "2024-01-20",
});

export default client;
