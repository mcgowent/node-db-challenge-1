module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/projects.db3', // Copy and Pasted but forgot to remame...lol recipe data base is now called schemes, oops
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },
};
