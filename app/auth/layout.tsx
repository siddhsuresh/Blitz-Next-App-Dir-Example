import { useAuthenticatedAppSession } from "../../src/blitz-server";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <section>{children}</section>
  )
}
