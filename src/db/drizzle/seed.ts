import { postRepository } from "@/repositories/post";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";
import { JsonPostRepository } from "@/repositories/post/json-post-repository";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAllPublic();
  try {
    await drizzleDb.delete(postsTable);
    await drizzleDb.insert(postsTable).values(posts);
  } catch (err) {
    console.log("Ocorreu um erro...");
  }
})();
