exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("users").insert([
				{
					id: 1,
					emailAddress: "test1@email.com",
					userPassword: "test",
					isAdmin: true,
					createdAt: knex.fn.now(),
					updatedAt: knex.fn.now()
				},
				{
					id: 2,
					emailAddress: "test2@email.com",
					userPassword: "password1",
					isAdmin: false,
					createdAt: knex.fn.now(),
					updatedAt: knex.fn.now()
				},
				{
					id: 3,
					emailAddress: "test3@email.com",
					userPassword: "password123",
					isAdmin: false,
					createdAt: knex.fn.now(),
					updatedAt: knex.fn.now()
				}
			])
		})
}
