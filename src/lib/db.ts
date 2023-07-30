import { Surreal } from 'surrealdb.js'

/**
 * Create a new SurrealDB connection
 *
 * @returns {Surreal} The SurrealDB connection
 */
const db = new Surreal('http://127.0.0.1:8000/rpc', {
    // Set the namespace and database for the connection
    ns: 'mizu',
    db: 'db',

    // Set the authentication details for the connection
    auth: {
        user: 'root',
        pass: 'root'
    }
})

export default db
