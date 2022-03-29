exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("scholarships").then(() => {
		// Inserts seed entries
		return knex("scholarships").insert([
			{
				id: 1,
				title: "Scholarship for students who lorem ipsum",
				funder: "Matthew J. Bradford",
				description:
					"ESED scholars are exceptional students from developing countries studying in sustainable energy development. Today, the need for globally-oriented practitioners and researchers is ...",
				Deadline: "Dec 20, 2019",
				amount: 3000
			},
			{
				id: 2,
				title: "Scholarship for students who lorem ipsum 2",
				funder: "Matthew J. Bradford",
				description:
					"ESED scholars are exceptional students from developing countries studying in sustainable energy development. Today, the need for globally-oriented practitioners and researchers is ...",
				Deadline: "Dec 20, 2019",
				amount: 3000
			},
			{
				id: 3,
				title: "Scholarship for students who lorem ipsum 3",
				funder: "Matthew J. Bradford",
				description:
					"ESED scholars are exceptional students from developing countries studying in sustainable energy development. Today, the need for globally-oriented practitioners and researchers is ...",
				Deadline: "Dec 20, 2019",
				amount: 3000
			}
		])
	})
}
