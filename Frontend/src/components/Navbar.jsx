import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1 ml-32 pl-32">
        <Link to="/">
          <button className="btn btn-ghost normal-case text-xl">
            Kahverengi Blog
          </button>
        </Link>
      </div>

      {userInfo ? (
        <div className="dropdown dropdown-end mr-36 pr-36">
          <label tabIndex={0} className="btn btn-ghost normal-case text-xl m-1">
            {userInfo.name}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Log Out</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="mr-36 pr-36">
          <div className="">
            <Link to="/about">
              <button className="btn btn-ghost normal-case text-xl">
                About
              </button>
            </Link>
          </div>

          <div className="">
            <Link to="/sign-in">
              <button className="btn btn-ghost normal-case text-xl">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
