import SidebarLinks from "../components/sidebar/SidebarLinks";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="h-[110px] md:h-screen w-full bg-white flex flex-col justify-center items-center p-10">
      <div className="h-[110px] md:h-screen w-full md:w-[180px] flex flex-row lg:flex-col gap-8 justify-between md:justify-center items-center md:items-start">
        <h3 className="font-prima">Salom</h3>
        <SidebarLinks />
      </div>
    </div>
  );
};

export default Sidebar;
