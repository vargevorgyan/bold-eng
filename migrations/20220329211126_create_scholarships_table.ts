import * as Knex from "knex"

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable("scholarships", function (table) {
		table.increments("id")
		table.string("title").notNullable()
		table.string("funder").notNullable()
		table.string("deadline").notNullable()
		table.integer("amount").defaultTo(0)
		table.string("description")
	})
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable("scholarships")
}
