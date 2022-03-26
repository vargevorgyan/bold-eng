import knexStringcase from "knex-stringcase"
import * as dotenv from "dotenv"
dotenv.config({path: __dirname + "/.env"})

const dbConfig = {
	client: "pg",
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		port: parseInt(process.env.DB_PORT)
	},
	migrations: {
		directory: "./migrations",
		tableName: "knex_migrations"
	}
}

const options = knexStringcase(dbConfig)
export default options
