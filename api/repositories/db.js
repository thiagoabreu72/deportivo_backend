import pg from "pg";
import dotenv from "dotenv/config";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: 'postgres://oowzuhel:v87VsS0tSvJ7RTwiP3Awwo6fK_lyP_oZ@chunee.db.elephantsql.com/oowzuhel' //process.env.DB_POSTGRE,
  });
  global.connection = pool;
  return pool.connect();
}

export default connect;
