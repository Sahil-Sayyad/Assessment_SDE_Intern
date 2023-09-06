const {Client} = require('pg');
//node-express-postgresql-api
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

client.query('SELECT * FROM myname', (err,result)=>{
        if(err){
            console.log(`Error executing query  ${err}`);
        }else{
            const rows = result.rows;
            for(const row of rows){
                console.log(`Data: ${row.name}`);
                // console.log(`Column Value: ${row.}`);
            }
        }
        client.end();
});
// module.exports = client;