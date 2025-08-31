import { CartWidget } from "./CartWidget";
import { Route, Routes,Link} from "react-router-dom";

export const NavBar = ({ links }) => {
  const rutas = ["/home","/ecommerce" ]
  return (
    
    <div className="flex justify-between p-5 bg-gray-900 text-amber-50 font-bold uppercase">
      <div>
        <img src="#/" alt="logo" />
      </div>
      <nav className="flex">
        <ul className="flex justify-between gap-10">
          {links.map((link, index) => (
            <li key={index} >
              <Link
                to={rutas}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
};
