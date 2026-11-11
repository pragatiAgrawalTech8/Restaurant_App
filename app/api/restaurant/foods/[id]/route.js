import {NextResponse} from "next/server"
import {connectionStr} from "@/app/lib/db"
import {foodSchema} from "@/app/lib/foodsModel"
import mongoose from "mongoose"

export async function GET(request,{params}){
    const {id} = await params
    let success = false
    await mongoose.connect(connectionStr)
    const result = await foodSchema.find({restro_id:id})
    if(result){
        success=true
    }
    return NextResponse.json({result,success:true})
}

export async function DELETE(request,{params}){
    try {
        
        const {id} = await params
        let success = false
        await mongoose.connect(connectionStr)
        const result = await foodSchema.deleteOne({_id:id})
        if(result.deletedCount){ 
            success = true
        }
        return NextResponse.json({result,success})
    } catch (error) {
         console.log("Delete Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}