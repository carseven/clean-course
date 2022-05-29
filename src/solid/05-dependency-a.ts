import { PostService } from "./05-dependency-b";
import {
  JsonDataBaseService,
  JsonPlaceholderApiService,
  LocalDataBaseService,
} from "./05-dependency-c";

// Main
(async () => {
  const localDataBase = new JsonDataBaseService();
  const postService = new PostService(localDataBase);

  const postsLocal = await postService.getPosts();

  const jsonDataBase = new JsonDataBaseService();
  const postServiceJson = new PostService(jsonDataBase);
  const postsJson = await postServiceJson.getPosts();

  const apiDataBase = new JsonPlaceholderApiService(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const postServiceApi = new PostService(apiDataBase);
  const postApi = await postServiceApi.getPosts();

  console.log({ posts: postsLocal });
  console.log({ postsJson });
  console.log({ postApi });
})();
