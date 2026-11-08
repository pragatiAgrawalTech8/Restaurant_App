import {NextResponse} from "next/server"
import {connectionStr} from "@/app/lib/db"
import {foodSchema} from "@/app/lib/foodsModel"
import mongoose from "mongoose"

export async function GET(request,{params}){
    const {id} = await params
    let success = false
    await mongoose.connect(connectionStr)
    const result = await foodSchema.find()
    if(result){
        success=true
    }
    return NextResponse.json({result,success:true})
}