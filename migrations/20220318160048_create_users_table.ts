import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("users", function (table) {
		table.increments("id")
		table.string("emailAddress").notNullable().unique()
		table.string("userPassword").notNullable()
		table.boolean("isAdmin").notNullable().defaultTo(false)
		table.timestamp("createdAt").defaultTo(knex.fn.now())
		table.timestamp("updatedAt").defaultTo(knex.fn.now())
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("users")
}
