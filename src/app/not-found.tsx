import { ErrorMessage } from "@/components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <>
      <ErrorMessage
        content="Erro 404 - A página que você está acessando não existe neste site."
        contentTitle="404"
        pageTitle="Página não encontrada"
      />
    </>
  );
}
