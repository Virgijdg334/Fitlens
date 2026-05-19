import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="dark min-h-screen bg-[#0A0A0A]">
      <div className="mx-auto max-w-md min-h-screen bg-[#0A0A0A]">
        <Outlet />
      </div>
    </div>
  );
}
