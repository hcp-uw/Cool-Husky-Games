import Navbar from "./Navbar";

export default function Page404() {
  return (
    <div className="max-w-screen relative min-h-screen overflow-x-hidden bg-[#39275B] text-white">
      <Navbar key={"navbar"} />
      <h1 className="ext-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-5xl">
        Page not found!
      </h1>
    </div>
  );
}
