import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

interface NavbarProps {
  apiLimitCount: number;
}

const Navbar = ({ apiLimitCount }: NavbarProps) => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex justify-end flex-1">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
