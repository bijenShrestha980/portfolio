import SidebarLinks from "../components/sidebar/SidebarLinks";

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 h-[90px] md:h-screen w-full bg-white flex flex-col justify-center items-center p-10 shadow-2xl">
      <div className="h-[110px] md:h-screen w-full md:w-[180px] flex flex-row md:flex-col gap-8 justify-between md:justify-center items-baseline md:items-start">
        <h3 className="font-prima">Salom</h3>
        <SidebarLinks />
      </div>
    </div>
  );
};

export default Sidebar;
