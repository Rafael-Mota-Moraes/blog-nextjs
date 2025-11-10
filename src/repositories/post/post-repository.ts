import { PostModel } from "@/models/post-model";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
