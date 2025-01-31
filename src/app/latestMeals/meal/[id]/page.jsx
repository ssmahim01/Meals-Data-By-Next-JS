import Link from "next/link";

export const metadata = {
  title: "Meal Details | Meals Cafe",
  description: "Information of single meal",
};

export default async function singleMeal({ params }) {
  const { id } = await params;
  // console.log(id);
  const response = await fetch(`https://meals-cafe.vercel.app/api/singleMeal/${id}`);
  const meal = await response.json();
  // console.log(meal);

  return (
    <div className="py-10 lg:w-3/4 w-11/12 mx-auto">
      <div key={meal?._id} className="p-4 border border-gray-300 rounded-xl">
        <figure className="lg:h-96 md:h-72 h-64">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={meal?.mealImage}
            alt="Image of Meal"
          />
        </figure>

        <div className="space-y-4 pt-3">
          <h2 className="lg:text-3xl text-2xl font-bold">
            Meal: {meal?.mealName}
          </h2>

          <p className="font-bold flex gap-2 items-center">
            Category:{" "}
            <span className="px-4 py-1 border border-gray-300 rounded-md">
              {meal?.category}
            </span>
          </p>

          <div className="flex md:flex-row flex-col justify-between md:items-center gap-3">
            <p className="font-bold flex gap-2 items-center">
              User Name:{" "}
              <span className="px-4 py-1 border border-gray-300 rounded-md">
                {meal?.userName}
              </span>
            </p>

            <p className="font-bold flex gap-2 items-center">
              User Email:{" "}
              <span className="px-4 py-1 border border-gray-300 rounded-md">
                {meal?.userEmail}
              </span>
            </p>
          </div>

          <p className="text-gray-400 font-medium pb-6">{meal?.description}</p>

          <Link href="/">
            <button className="rounded-md px-8 py-2 bg-emerald-500 text-white font-bold">
              ↩ Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
