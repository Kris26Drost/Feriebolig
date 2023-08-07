export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-orange-50">{children}</div>;
}
