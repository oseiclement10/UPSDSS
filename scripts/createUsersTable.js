const mysql = require('mysql');

const properties = require('./connectionProperties');

const dB = mysql.createConnection({
    host:properties.host,
    user:properties.user,
    password:properties.password,
    database:properties.database
});

const query = `create table Users(
    id int(100) auto_increment not null,
    username varchar(100) not null,
    email varchar(100) not null,
    password varchar (1000) not null,
    shsprogram varchar(500),
    interests varchar(500),
    strengths varchar(200),
    weakness varchar(200),
    primary key(id)
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