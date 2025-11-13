"use client";

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState("");

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl("");
      return;
    }

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      toast.error("Imagem muito grande");

      fileInput.value = "";
      setImgUrl("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = "";
        setImgUrl("");
        return;
      }

      toast.success("Imagem enviada");

      setImgUrl(result.url);
    });

    console.log(formData.get("file"));

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button
        type="button"
        className="self-start"
        onClick={handleChooseFile}
        disabled={isUploading}
      >
        <ImageUpIcon /> Enviar uma imagem
      </Button>
      {!!imgUrl && (
        <div className="flex flex-col gap-4">
          <p>
            <b>URL: </b> {imgUrl}
          </p>

          <img className="rounded-lg" src={imgUrl} />
        </div>
      )}
      <input
        ref={fileInputRef}
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}
