import knex from "knex"

const connection = knex({
  client: "postgres",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "nlw"
  },
  useNullAsDefault: true
})

export default connection
