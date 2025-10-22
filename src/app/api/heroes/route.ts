import { NextResponse } from "next/server";

import DataHeroes from "../../../../public/database/heroes"

export async function GET() {    
    // const res = await fetch(`${process.env.API_URL}`);
    // const data = await res.json();
    return NextResponse.json({ data: DataHeroes });
}
