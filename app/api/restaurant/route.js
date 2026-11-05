import {NextResponse} from "next/server"
import {connectionStr} from "@/app/lib/db"
import {restaurantSchema} from "@/app/lib/restaurantsModel"
import mongoose from "mongoose"

export async function GET(){
    await mongoose.connect(connectionStr)
    const data = await restaurantSchema.find()
    console.log(data);
    return NextResponse.json({result:data})
}
export async function POST(request){
    let payload = await request.json()
    await mongoose.connect(connectionStr)
    const restaurant = new restaurantSchema(payload) 
    console.log(payload);
    const result = await restaurant.save()
    return NextResponse.json({result,success:true})
}