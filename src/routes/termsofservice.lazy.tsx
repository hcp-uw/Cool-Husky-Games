import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/termsofservice")({
  component: () => <div>Hello /termsofservice!</div>,
});
