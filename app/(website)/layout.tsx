import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/Footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col">
        {children}
      </main>

      <Footer />
    </>
  );
}