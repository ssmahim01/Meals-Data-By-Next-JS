import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  // console.log(user);
  const authenticatedUser = await isAuthenticated();

  return (
    <div className="border-b border-gray-200 shadow-md">
      <div className="flex justify-between items-center py-4 lg:px-16 md:px-8 px-4">
        <div className="flex gap-1 items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm space-y-4 dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-80 p-4 shadow"
          >
            <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">{user?.given_name} {user?.family_name}</p>
            <p className="font-semibold">{user?.email}</p>
            </div>

            <div className="flex flex-col gap-4 pt-2">
            <Link
              className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold"
              href="/"
            >
              Home
            </Link>
            <Link
              className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold"
              href="/items"
            >
              Items
            </Link>
            <Link
              className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold"
              href={user ? "/addMeal" : "/api/auth/login"}
            >
              Add Meal
            </Link>
            <Link
              className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold"
              href={user ? "/latestMeals" : "/api/auth/login"}
            >
              Latest Meals
            </Link>
            </div>
          </ul>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold">Meals Cafe</h2>
        </div>

        <div className="lg:flex hidden gap-6 items-center">
          <Link
            className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold"
            href="/"
          >
            Home
          </Link>
          <Link
            className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold"
            href="/items"
          >
            Items
          </Link>
          <Link
            className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold"
            href={user ? "/addMeal" : "/api/auth/login"}
          >
            Add Meal
          </Link>
          <Link
            className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold"
            href={user ? "/latestMeals" : "/api/auth/login"}
          >
            Latest Meals
          </Link>
        </div>

        {authenticatedUser ? (
          <div className="flex gap-4 items-center">
            <img
              title={user?.family_name}
              className="w-12 h-12 rounded-full border-4 border-indigo-500"
              src={user?.picture}
              alt={user?.family_name}
            />

            <Link
              className="px-4 py-1 rounded-md bg-rose-500 text-white hover:bg-gray-100 hover:text-gray-800 border-none font-bold"
              href="/api/auth/logout"
            >
              Log Out
            </Link>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link
              className="px-4 py-1 rounded-md bg-emerald-500 text-white hover:bg-gray-100 hover:text-gray-800 font-bold"
              href="/api/auth/login"
            >
              Login
            </Link>
            <Link
              className="px-4 py-1 bg-fuchsia-500 text-white rounded-md hover:bg-gray-100 hover:text-gray-800 font-bold"
              href="/api/auth/register"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
