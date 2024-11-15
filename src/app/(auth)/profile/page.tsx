import { getServerAuthSession } from "@/server/auth";
import ProfilePageClient from "./page.client";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerAuthSession();
  if (!session) redirect("/login");

  return <ProfilePageClient session={session} />;
}
