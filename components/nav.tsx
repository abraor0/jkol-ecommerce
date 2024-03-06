import CartIcon from "./icons/CartIcon";
import FavoriteIcon from "./icons/FavoriteIcon";
import SearchIcon from "./icons/SearchIcon";
import MenuIcon from "./icons/MenuIcon";
import Logo from "./ui/logo";

export default function Nav() {
  return (
    <header className="flex justify-between py-4 px-3 items-start border-b border-border-strong">
      <div className="flex gap-3">
        <SearchIcon className="text-xl" />
        <FavoriteIcon className="text-xl" />
      </div>
      <Logo />
      <div className="flex gap-3">
        <CartIcon className="text-xl" />
        <MenuIcon className="text-xl" />
      </div>
    </header>
  );
}
