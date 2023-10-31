export default function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-900"
          >
            <li>
              <a className="hover:bg-yellow-300">Home</a>
            </li>
            <li>
              <a className="hover:bg-yellow-300">Kitchen Companion</a>
              <ul className="p-2 text-gray-800">
                <li>
                  <a className="hover:bg-yellow-300">
                    Discover Recipes by Ingredients
                  </a>
                </li>
                <li>
                  <a className="hover:bg-yellow-300">Smart Shopping List</a>
                </li>
                <li>
                  <a className="hover:bg-yellow-300">Weekly Meal planner</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="hover:bg-yellow-300">About</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">SpiceSleuth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:bg-yellow-300">Home</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:bg-yellow-300">
                Kitchen Companion
              </summary>
              <ul className="p-2 text-gray-900">
                <li>
                  <a className="hover:bg-yellow-300">
                    Discover Recipes by Ingredients
                  </a>
                </li>
                <li>
                  <a className="hover:bg-yellow-300">Smart Shopping List</a>
                </li>
                <li>
                  <a className="hover:bg-yellow-300">Weekly Meal planner</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="hover:bg-yellow-300">About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-yellow-400">Sign in</a>
      </div>
    </div>
  );
}
