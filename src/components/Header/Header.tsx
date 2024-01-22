import { FC, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useIsMobile } from "../../hooks";
import { Sling as HamburgerIcon } from "hamburger-react";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <span>martin pandarski</span>
      {isMobile && (
        <HamburgerIcon
          direction="left"
          toggled={menuOpen}
          onToggle={toggleMenu}
        />
      )}

      {isMobile ? (
        <Sidebar isOpen={menuOpen} children={<Nav onClose={toggleMenu} />} />
      ) : (
        <Nav />
      )}
    </header>
  );
};

export default Header;

interface NavProps {
  onClose?: () => void;
}

const Nav: FC<NavProps> = ({ onClose }) => {
  const navLinkProps =
    typeof onClose === "function" ? { onClick: onClose } : {};
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            {...navLinkProps}
          >
            _hello
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            {...navLinkProps}
          >
            _about-me
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            {...navLinkProps}
          >
            _projects
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            {...navLinkProps}
          >
            _contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
