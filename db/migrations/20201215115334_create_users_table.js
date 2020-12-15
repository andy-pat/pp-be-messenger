exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.text("username");
    users.increments("user_id").primary;
    users.text("avatar_url");
    users.boolean("online_status").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
