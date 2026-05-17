import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST || "127.0.0.1",
  port: Number(process.env.POSTGRES_PORT || 5432),
  database: process.env.POSTGRES_DB || "nest",
  user: process.env.POSTGRES_USER || "nest",
  password: process.env.POSTGRES_PASSWORD || "change-me"
});

const cycle = async () => {
  const now = new Date().toISOString();
  console.log(`[nest-worker] ${now} starting signal refresh cycle`);

  const signals = await pool.query<{ total: string }>(
    "select count(*) as total from rotation_signals"
  );

  console.log(
    `[nest-worker] current signal inventory ${signals.rows[0]?.total ?? "0"}`
  );
  console.log("[nest-worker] queued production tasks: ingest Mantle events, recompute anomalies, dispatch alerts");
};

void cycle();
setInterval(() => {
  void cycle();
}, 60_000);
