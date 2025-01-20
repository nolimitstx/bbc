import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  const { name, phone, email, twitter, instagram } = await req.json();

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO "Subscribers" ("name", "phone", "email", "twitter", "instagram") VALUES($1, $2, $3, $4, $5) RETURNING *',
      [name, phone, email, twitter, instagram]
    );
    client.release();
    return NextResponse.json({ message: 'Subscription successful', result: result.rows[0] });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
  }
}