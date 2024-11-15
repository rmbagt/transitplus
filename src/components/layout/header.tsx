import { getServerAuthSession } from "@/server/auth";
import { HeaderClient } from "./header.client";

export default async function Header() {
  const session = await getServerAuthSession();
  return <HeaderClient session={session} />;
}
