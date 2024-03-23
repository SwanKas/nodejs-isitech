import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  database: "isitech-cours-nodejs",
  user: "root",
  password: "123", 
}); 
// paramètre a changer selon la config local
export default connection;
