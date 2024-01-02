import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ isLogin, setIsLogin }) => {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Outlet />
    </div>
  );
};

export default Layout;
