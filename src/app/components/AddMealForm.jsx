"use client"

import { useRouter } from "next/navigation";

export default function AddMealForm() {
    const router = useRouter();

    const handleAddMeal = async(event) => {
        event.preventDefault();
        const form = event.target;
        const mealName = form.meal.value;
        const mealImage = form.mealImage.value;
        const description = form.description.value;
        const category = form.category.value;
        const userName = form.name.value;
        const userEmail = form.email.value;

        const mealData = {
            mealName,
            mealImage,
            description,
            category,
            userName,
            userEmail
        }
        // console.log(mealData);

        const response = await fetch("https://meals-cafe.vercel.app/api/meals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mealData)
        })

        const insertResult = response.json();

        if(insertResult){
            router.push("/items");
        };

        // console.log(insertResult);
    };

  return (
    <div className="hero pt-12 pb-20">
      <div className="lg:w-3/5 w-11/12 mx-auto flex-col">
        <div className="text-center pb-8">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Add New Meal
          </h1>
        </div>

        <div className="bg-base-200 bg-opacity-70 shrink-0 shadow-lg rounded-lg">
          <form onSubmit={handleAddMeal} className="card-body">
            <div className="flex gap-4 md:flex-row flex-col *:w-full">
            <div className="form-control">
                <label className="label">
                  <span className="font-bold">Meal Name</span>
                </label>
                <input
                  type="text"
                  name="meal"
                  pattern="^[A-Za-z\s]*$"
                  placeholder="Type Your Meal Name"
                  className="input input-bordered font-medium"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Meal Image URL</span>
                </label>
                <input
                  type="url"
                  name="mealImage"
                  placeholder="Provide an Image URL"
                  className="input input-bordered font-medium"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 md:flex-row flex-col *:w-full">
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">
                    Meal Description
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Meal Description"
                  className="input input-bordered font-medium"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Category</span>
                </label>
                <select
                  name="category"
                  id="category"
                  className="input input-bordered font-medium *:font-semibold"
                >
                  <option value="">Select A Category</option>
                  <option value="Action">Chicken</option>
                  <option value="RPG">Pizza</option>
                  <option value="Adventure">Burger</option>
                  <option value="Battle">Sandwich</option>
                  <option value="Battle Royale">Curry</option>
                  <option value="Sports">Biryani</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 md:flex-row flex-col *:w-full">
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                //   defaultValue={displayName}
                //   readOnly
                  className="input input-bordered font-medium"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="font-bold">User Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                //   defaultValue={email}
                //   readOnly
                  className="input input-bordered font-medium"
                />
              </div>
            </div>

            <div className="form-control mt-6 lg:w-2/5 md:w-1/2 w-11/12 mx-auto">
              <button className="btn bg-emerald-500 text-white/90 text-lg hover:btn-primary font-bold rounded-full shadow-md">
                ↪ Add Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}