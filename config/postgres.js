const {Client} = require('pg');

const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"postgres",
    password:"sahil",
    port:5432,
});

client
.connect()
.then(()=>  console.log(`Connected to PostgresSQL database`))
.catch((err)=> console.log(`Connection Error ${err}`));

client.query('SELECT * FROM actor', (err,result)=>{
        if(err){
            console.log(`Error executing query  ${err}`);
        }else{
            console.log(`Query Result : ${result.rows}`);
        }
        client.end();
});
// module.exports = client;