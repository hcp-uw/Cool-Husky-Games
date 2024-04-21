import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-7xl flex-row justify-center gap-x-4 lg:h-[80vh] lg:min-h-0">
      <section className="mx-auto flex h-full flex-col justify-center">
        <h1>Hello from About!</h1>
      </section>
    </div>
  );
}
