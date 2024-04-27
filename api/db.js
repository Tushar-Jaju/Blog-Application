import mysql from "mysql";

export const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DB_KEY,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("connected");
});
