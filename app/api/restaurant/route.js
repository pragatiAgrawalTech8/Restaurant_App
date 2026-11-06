import { NextResponse } from "next/server"
import { connectionStr } from "@/app/lib/db"
import { restaurantSchema } from "@/app/lib/restaurantsModel"
import mongoose from "mongoose"

export async function GET() {
    await mongoose.connect(connectionStr)
    const data = await restaurantSchema.find()
    console.log(data);
    return NextResponse.json({ result: data })
}
export async function POST(request) {

    await mongoose.connect(connectionStr)
    let payload = await request.json()
    let result
    let success = false
    if (payload.login) {
        result = await restaurantSchema.findOne({ email: payload.email, password: payload.password })
        if (result) {
            success = true
        }
    } else {
        const restaurant = new restaurantSchema(payload)
        console.log(payload);
        result = await restaurant.save()
         if (result) {
            success = true
        }
    }
    return NextResponse.json({ result, success: true })
}