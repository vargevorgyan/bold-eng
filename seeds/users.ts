import bcrypt from "bcryptjs"

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(async function () {
			// Inserts seed entries
			return knex("users").insert([
				{
					id: 1,
					emailAddress: "test1@email.com",
					userPassword: await bcrypt.hash("test12345", 10),
					isAdmin: true,
					createdAt: knex.fn.now(),
					updatedAt: knex.fn.now()
				},
				{
					id: 2,
					emailAddress: "test2@email.com",
					userPassword: await bcrypt.hash("password1", 10),
					isAdmin: false,
					createdAt: knex.fn.now(),
					updatedAt: knex.fn.now()
				},
				{
					id: 3,
					emailAddress: "test3@email.com",
					userPassword: await bcrypt.hash("password123", 10),
					isAdmin: false,
					createdAt: knex.fn.now(),
					updatedAt: knex.fn.now()
				}
			])
		})
}
