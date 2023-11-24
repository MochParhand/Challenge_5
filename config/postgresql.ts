import knex from "knex";

const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "postgres",
    user: "postgres",
    password: "fathulqorib",
    port: 5433
  },
});

export default knexInstance;