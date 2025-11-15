import LoginForm from "@/components/admin/LoginForm";
import { ErrorMessage } from "@/components/ErrorMessage";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin)
    return <ErrorMessage content="Login não permitido" contentTitle="403" />;
  return <LoginForm />;
}
