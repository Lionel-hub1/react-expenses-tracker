import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <nav>Nav Bar</nav>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
