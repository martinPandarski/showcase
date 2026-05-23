import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import clsx from "clsx";
import { useClock } from "../hooks/useClock";

const links = [
  { to: "/", label: "index" },
  { to: "/about", label: "about" },
  { to: "/contacts", label: "contact" },
];

const Nav: React.FC = () => {
  const time = useClock();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className={clsx(
        "fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between mono text-xs uppercase tracking-widest transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300",
        scrolled
          ? "bg-[#E5DFD2]/95 backdrop-blur-md border-b border-line shadow-[0_1px_0_rgba(10,10,11,0.04)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <NavLink to="/" className="text-ink text-base font-medium">
        MP<span className="text-flame">.</span>
      </NavLink>
      <nav className="hidden md:flex items-center gap-8">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className="hover-link"
            data-hover={label}
            end={to === "/"}
          >
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-3 text-muted">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-flame pulse-dot" />
        <span>Sofia · {time}</span>
      </div>
    </motion.header>
  );
};

export default Nav;
