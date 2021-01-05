import Logo from "../../assets/svgs/puzzle.svg";
import Link from "next/link";
import { texts } from "../../i18n";

export const Nav: React.FC = () => (
  <nav className="flex justify-between items-center my-4 container">
    <Link href="/">
      <a>
        <Logo className="w-8" />
      </a>
    </Link>
    <ul className="flex">
      <li>
        <Link href="#">
          <a className="text-blue-700 mr-2 px-2 py-1 rounded-md">{texts.nav.links}</a>
        </Link>
      </li>
    </ul>
  </nav>
);