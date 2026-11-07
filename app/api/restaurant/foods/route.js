import { connectionStr } from "@/app/lib/db"
import { foodSchema } from "@/app/lib/foodsModel"
import {NextResponse} from "next/server"
import mongoose from "mongoose"

export async function GET() {
    await mongoose.connect(connectionStr)
    const data = await foodSchema.find()
    return NextResponse.json({ result: data, success: true })
}

export async function POST(request){
    const payload = await request.json()
    await mongoose.connect(connectionStr)
    const food = new foodSchema(payload)
    const result = await food.save()
    return NextResponse.json({result,success:true})
}