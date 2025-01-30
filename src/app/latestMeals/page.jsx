"use client"
import Link from "next/link";

export async function getMeals() {
  const response = await fetch("https://meals-cafe.vercel.app/api/meals");
  const data = await response.json();
  return data;
}

export default async function LatestMeals() {
  const mealsData = await getMeals();
  const meals = mealsData.findMeal;

  return (
    <div className="py-10 lg:w-4/5 w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {meals.map((meal) => (
        <div
          key={meal._id}
          className="p-4 border border-gray-300 rounded-xl hover:scale-105 hover:transition-transform duration-300"
        >
          <figure className="lg:h-60 h-52">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={meal?.mealImage}
              alt={meal?.mealName}
            />
          </figure>

          <div className="space-y-4 pt-3">
            <h2 className="lg:text-2xl text-xl font-bold">{meal?.mealName}</h2>

            <p className="text-gray-400 font-medium">
              {meal?.description?.slice(0, 75)}...
            </p>

            <Link href={`/latestMeals/meal/${meal?._id}`}>
              <button className="mt-5 rounded-md px-6 py-2 bg-teal-500 text-white font-bold">
                See More ↗
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
