const dB = require('./dbConnector');

const programs_query = `CREATE TABLE KNUST_PROGRAMS(
    id int(100) not null auto_increment,
    program_name varchar(500),
    college_id int(100),
    cutoff int(10),
    primary key(id),
    foreign key (college_id) references knust_colleges (id)
)`

function createProgramsTable(){
    dB.query(programs_query,(err,rows)=>{
        if(err){
            console.log(err);
            dB.end();
        }else{
            dB.end();
            console.log(`Programs table created successfully`);
            
        }
    })
}
createProgramsTable();



