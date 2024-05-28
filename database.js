import mysql from 'mysql2';


//collection of connections
const pool = mysql.createPool({
    host: 'localhost',
    // host: '127.0.0.1',
    user: 'root',
    password: 'Muhumuza@2308',
    database: 'note_app'
}).promise()


export async function getNotes() {
    const [result] = await pool.query("SELECT * FROM notes")
    return result;
}

export async function getNote(id) {
    const [result] = await pool.query(`
    SELECT * 
    FROM notes
    WHERE id = ?
    `, [id]);
    return result[0]

}

export async function createNote(title, contents) {
    const [result] = await pool.query(`
    INSERT INTO notes(title, contents) 
    values (?, ?)
    `, [title, contents]);
    const id = result.insertId
    return getNote(id)
}


const result = await createNote("test", " test");
// console.log(result);