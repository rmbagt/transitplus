import { getServerAuthSession } from "@/server/auth";
import LoginPageClient from "./page.client";

export default async function LoginPage() {
  const session = await getServerAuthSession();
  return (
    <div className="h-svh">
      <LoginPageClient session={session} />
    </div>
  );
}
