import dbConnect from "@/mongodb/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const {id} = await params;
    if (!id) {
        return new Response(JSON.stringify({ error: "ID is required" }), { status: 400 });
    }

    try {
        const db = dbConnect("meals");
        const query = { _id: new ObjectId(id) };
        // console.log(query);
        const findResult = await db.findOne(query);

        if (!findResult) {
            return new Response(JSON.stringify({ error: "Meal not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(findResult), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Server error", details: error.message }), { status: 500 });
    }
}