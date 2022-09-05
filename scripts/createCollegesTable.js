const dB = require('./dbConnector');

const college_query = `CREATE TABLE KNUST_COLLEGES (
    id int(100) not null auto_increment,
    college_name varchar(500),
    primary key (id)
    )`;

    function createCollegesTable(){
        dB.query(college_query,(err,rows)=>{
            if(err){
                console.log(err);
                dB.end();
            }else{
                dB.end();
                console.log(`Colleges table created successfully`);
                
            }
        })
    }

    createCollegesTable();