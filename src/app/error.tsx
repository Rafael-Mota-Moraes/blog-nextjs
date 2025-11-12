"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { useEffect } from "react";

type ErrorMessagePageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorMessagePage({ error }: ErrorMessagePageProps) {
  useEffect(() => {}, [error]);

  return (
    <ErrorMessage
      content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar, tente novamente mais tarde!"
      contentTitle="501"
      pageTitle="Internal server error"
    />
  );
}
