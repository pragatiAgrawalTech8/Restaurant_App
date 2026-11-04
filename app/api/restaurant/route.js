import {NextResponse} from "next/server"
import {connectionStr} from "@/app/lib/db"
import {restaurantSchema} from "@/app/lib/restaurantsModel"
import mongoose from "mongoose"

export async function GET(){
    await mongoose.connect(connectionStr)
    const data = await restaurantSchema.find()
    console.log(data);
    return NextResponse.json({result:true})
}