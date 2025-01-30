export default async function singleMeal({params}) {
  const {id} = await params;
  // console.log(id);
  const response = await fetch(
    `https://meals-cafe.vercel.app/api/singleMeal/${id}`);
  const data = await response.json();
  console.log(data);

  return <div>SingleMeal: </div>;
}
