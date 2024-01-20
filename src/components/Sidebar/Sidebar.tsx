import { FC } from "react";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  children: React.ReactElement;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, children }) => {
  return <div className={`sidebar ${isOpen ? "open" : ""}`}>{children}</div>;
};

export default Sidebar;
