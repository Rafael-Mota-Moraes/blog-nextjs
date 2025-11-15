"use server";

import { getLoginSession } from "@/lib/login/manage-login";
import { writeFile } from "fs/promises";
import { mkdir } from "fs/promises";
import { extname, resolve } from "path";

type UploadImageActionResult = {
  url: string;
  error: string;
};
const uploadMaxSize =
  Number(process.env.NEXT_PUBLIC_IMAGE_UPLOADER_MAX_SIZE) || 921600;

const imageUploadDirectory =
  String(process.env.IMAGE_UPLOAD_DIRECTORY) || "uploads";

const imageServerUrl =
  String(process.env.IMAGE_SERVER_URL) || "http://localhost:3000";

export async function uploadImageAction(
  formData: FormData
): Promise<UploadImageActionResult> {
  const isAuthenticated = await getLoginSession();

  const makeResult = ({ url = "", error = "" }) => {
    return { url, error };
  };

  if (!isAuthenticated) {
    return makeResult({ error: "Faça login para atualizar um post" });
  }
  if (!(formData instanceof FormData)) {
    return makeResult({ error: "Dados inválidos" });
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return makeResult({ error: "Arquivo inválido" });
  }

  if (file.size > uploadMaxSize) {
    return makeResult({ error: "Arquivo muito grande" });
  }

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Tipo do arquivo inválido" });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadFullPath = resolve(process.cwd(), "public", imageUploadDirectory);

  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);
  const url = `${imageServerUrl}/uploads/${uniqueImageName}`;

  return makeResult({ url });
}
