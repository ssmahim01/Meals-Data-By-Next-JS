import Link from "next/link";

export const metadata = {
  title: "Home | Meals Cafe",
  description: "Home page of the Cafe",
};

export async function fetchMealsData() {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
  const data = await response.json();
  return data.meals.slice(0, 8);
}

export default async function Home() {
  const meals = await fetchMealsData();

  return (
    <div className="py-10">
      <div className="lg:w-4/5 w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-8">
        {meals.map(meal => (
          <div key={meal.idMeal} className="p-4 border border-gray-300 rounded-xl hover:scale-105 hover:transition-transform duration-300">
            <figure className="lg:h-64 h-52">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={meal?.strMealThumb}
                alt="Image of Meal"
              />
            </figure>

            <div className="space-y-4 pt-3">
              <h2 className="text-2xl font-bold">{meal?.strMeal}</h2>
              <div className="flex justify-between items-center">
                <p className="px-4 py-1 border border-gray-300 rounded-lg font-bold">{meal?.strCategory}</p>

                <p className="px-4 py-1 border border-gray-300 rounded-lg font-bold">{meal?.strArea}</p>
              </div>

              <p className="text-gray-400 font-medium">{meal?.strInstructions.slice(0, 120)}...</p>

              <Link href={`/items/item/${meal?.idMeal}`}>
                <button className="mt-5 rounded-md px-6 py-2 bg-teal-500 text-white font-bold">
                  See More {" "} ↗
                </button></Link>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 block lg:w-1/5 md:w-2/6 w-3/5 mx-auto rounded-md py-2 text-lg bg-purple-600 text-white font-bold">
        <Link href="/items">
          ↪ {" "} See All Meals
        </Link>
      </button>
    </div>
  );
}
