import Link from "next/link";

export const metadata = {
  title: "Meal Details | Meals Cafe",
  description: "Information of single meal",
};

export default async function Item({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  const meal = data?.meals?.[0];
  // console.log(meal);

  return (
    <div className="py-10 lg:w-3/4 w-11/12 mx-auto">
      <div key={meal.idMeal} className="p-4 border border-gray-300 rounded-xl">
        <figure className="lg:h-96 md:h-72 h-64">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={meal?.strMealThumb}
            alt="Image of Meal"
          />
        </figure>

        <div className="space-y-4 pt-3">
          <h2 className="lg:text-3xl text-2xl font-bold">
            Meal: {meal?.strMeal}
          </h2>
          <div className="flex md:flex-row flex-col justify-between md:items-center gap-3">
            <p className="font-bold flex gap-2 items-center">
              Category:{" "}
              <span className="px-4 py-1 border border-gray-300 rounded-md">
                {meal?.strCategory}
              </span>
            </p>

            <p className="font-bold flex gap-2 items-center">
              Area:{" "}
              <span className="px-4 py-1 border border-gray-300 rounded-md">
                {meal?.strArea}
              </span>
            </p>
          </div>

          <p className="text-gray-400 font-medium">{meal?.strInstructions}</p>

          <div className="pt-3 pb-2 flex md:flex-row flex-col gap-4 justify-between md:items-center">
            <Link href={`${meal?.strYoutube}`} target="_blank">
              <button className="rounded-md md:px-6 px-4 py-2 bg-rose-500 text-white font-bold">
              🔗 {" "} Meal on You Tube
              </button>
            </Link>

            <Link href="/">
              <button className="rounded-md px-8 py-2 bg-emerald-500 text-white font-bold">
              ↩ {" "} Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
