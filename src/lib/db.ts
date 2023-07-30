import { Surreal } from 'surrealdb.js'

/**
 * Create a new SurrealDB connection
 *
 * @returns {Surreal} The SurrealDB connection
 */
const db = new Surreal('https://flysdb.fly.dev/rpc', {
    // Set the namespace and database for the connection
    ns: 'mizu',
    db: 'db',

    // Set the authentication details for the connection
    auth: {
        user: 'adminpsda',
        pass: 'adminpsda12345777'
    }
})

export default db
