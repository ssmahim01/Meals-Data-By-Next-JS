import dbConnect from "@/mongodb/dbConnect";

export async function GET(){
    const findMeal = await dbConnect("meals").find({}).toArray();
    return Response.json({findMeal});
}

export async function POST(req) {
    const mealData = await req.json();
 const postResult = await dbConnect("meals").insertOne(mealData);
 return Response.json({postResult});
}