import { CartWidget } from "./CartWidget";

export const NavBar = ({ links }) => {
  return (
    <div className="flex justify-between p-5">
      <div>
        <img src="#/" alt="logo" />
      </div>
      <nav className="flex ">
        <ul className="flex justify-between gap-10">
          {links.map((link, index) => (
            <li key={index}>
              <a href="">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
};
