require("dotenv").config();
const { drizzle } = require("drizzle-orm/node-postgres");
const { Pool } = require("pg");

async function testConnection() {
    console.log("Using DATABASE_URL from .env...");
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false } // Required for Neon
    });

    try {
        console.log("Connecting...");
        const client = await pool.connect();
        console.log("Connected successfully!");
        const res = await client.query('SELECT NOW()');
        console.log("Database time:", res.rows[0].now);
        client.release();
    } catch (err) {
        console.error("Connection error:", err.message);
    } finally {
        await pool.end();
        process.exit();
    }
}

testConnection();
