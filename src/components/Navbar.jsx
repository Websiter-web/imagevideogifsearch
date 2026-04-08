import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="px-5 py-8 bg-(--c2) flex justify-between items-center">
        <Link to='/' className="text-2xl font-medium">MediaSearch</Link>
        <div className="flex gap-5  items-center">
          <Link
            className=" text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2"
            to="/"
          >
            Search
          </Link>
          <Link
            className=" text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
