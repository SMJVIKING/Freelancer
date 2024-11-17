import { NavLink } from "react-router-dom";

function CustomNavlink({ children, to }) {
  const navlinkClass =
    "flex items-center gap-x-2 hover:text-primary-900 hover:bg-primary-100/50 rounded-lg py-1.5 px-2 transition-all duration-300 ";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-primary-100/80 text-primary-900`
            : `${navlinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavlink;
