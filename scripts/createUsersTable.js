const mysql = require('mysql');

const properties = require('./connectionProperties');

const dB = mysql.createConnection({
    host:properties.host,
    user:properties.user,
    password:properties.password,
    database:properties.database
});

const query = `CREATE TABLE USERS (
    id int(100) not null,
    username varchar(100),
    email varchar(100),
    password varchar(1000),
    shsprogram varchar(500),
    examsscores varchar(1000),
    aggregate int(4),
    interests varchar(500),
    strengths varchar(200),
    weakness varchar(200),
    primary key (id)
    )`;

function createUserTable(){
    dB.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            dB.end();
        }else{
            dB.end();
            console.log(`table created successfully`);
            
        }
    })
}


createUserTable();