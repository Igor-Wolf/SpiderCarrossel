import { NextResponse } from "next/server";
import fs from 'fs/promises';
import path from 'path';

// O caminho de disco para a pasta public/database/heroes.json
const dataFilePath = path.join(process.cwd(), 'public', 'database', 'heroes.json');

export async function GET() {
    try {
        // 1. Lê o arquivo
        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        
        // 2. Converte o JSON para objeto
        const data = JSON.parse(fileContents);
        
        return NextResponse.json({ data: data });

    } catch (error) {
        // O tratamento de erro é importante aqui
        return NextResponse.json({ error: 'Failed to load public data' }, { status: 500 });
    }
}