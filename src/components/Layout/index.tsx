import { Outlet } from "react-router-dom";
import Header from "./Header";
import pattern from "../../assets/invarch/invarch-gradient-bg.png";
import SideNav from "./SideNav";
import { useState } from "react";

const Layout = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = (bool: boolean) => {
    setNavOpen(bool);
  };

  return (
    <div
      className="bg-invarchOffBlack h-screen overflow-y-hidden flex flex-col justify-start"
      aria-hidden="true"
      style={{
        backgroundImage: `url(${ pattern })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >

      <div className="block md:hidden">
        <Header isNavOpen={navOpen} navOpen={handleNavOpen} />
        <div className={`relative z-[48] transform ${ navOpen ? "translate-x-0" : "-translate-x-full" } transition-transform duration-200 ease-in-out`}>
          <div className="absolute w-screen"><SideNav navOpen={handleNavOpen} /></div>
        </div>
      </div>

      <div className="flex flex-row overflow-y-auto">
        <div className="hidden md:block">
          <SideNav />
        </div>
        <main className="w-full relative text-invarchCream tinker-scrollbar scrollbar scrollbar-thumb-invarchPink overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
