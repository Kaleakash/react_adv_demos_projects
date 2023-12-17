import { NextResponse } from "next/server"
import { promises as fs } from 'fs';


export async function POST(request){
    let login =  await request.json();
    const file = await fs.readFile("login.json","utf-8");
    let loginDetails = JSON.parse(file);
    let result = loginDetails.find(l=>l.emailid==login.emailid && l.password==login.password);
    console.log(result);
    if(result!=undefined){
        return NextResponse.json({"msg":"Successfully login"})
    }else {
        return NextResponse.json({"msg":"In Valid emailid or password"});
    }
}