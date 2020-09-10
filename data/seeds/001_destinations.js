exports.seed = async function (knex) {
  await knex("destinations").truncate();
  await knex("destinations").insert([
    { name: "Hong Kong" },
    { name: "Vienna" },
    { name: "Tokyo" },
    { name: "Venice" },
    { name: "Toronto" },
    { name: "Munich" },
  ]);
};
