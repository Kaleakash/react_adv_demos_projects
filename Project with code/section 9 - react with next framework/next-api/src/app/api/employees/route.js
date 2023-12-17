import { NextResponse } from "next/server"
import { promises as fs } from 'fs';

export async function GET(){
    const file = await fs.readFile("employee.json","utf-8");
    return NextResponse.json(JSON.parse(file));
   
}

export async function POST(request){
    let emp = await request.json();
    const file = await fs.readFile("employee.json","utf-8");
    let employees = JSON.parse(file);
    let result = employees.find(e=>e.id ==emp.id);
    console.log(result);
    if(result!=undefined){
        return NextResponse.json({"msg":"Employee id must be unique"})
    }else {
        employees.push(emp);
        await fs.writeFile("employee.json",JSON.stringify(employees));
        return NextResponse.json({"msg":"Record stored successfully"});
    }
}