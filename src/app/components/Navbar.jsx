import Link from "next/link"

export default function Navbar() {
  return (
    <div className="border-b border-gray-200 shadow-md">
        <div className="flex justify-between items-center py-4 lg:px-16 px-8">
            <h2 className="md:text-3xl text-xl font-bold">Meals Cafe</h2>

            <div className="flex gap-6 items-center">
                <Link className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold" href="/">Home</Link>
                <Link className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold" href="/items">Items</Link>
                <Link className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold" href="/addMeal">Add Meal</Link>
                <Link className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold" href="/latestMeals">Latest Meals</Link>
               
            </div>
        </div>
    </div>
  )
}