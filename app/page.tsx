import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center">
        <h1 className="font-heading text-5xl font-bold">
          ToolNovaAI 🚀
        </h1>
      </main>
    </>
  );
}