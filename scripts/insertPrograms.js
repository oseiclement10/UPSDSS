const dB = require('./dbConnector');
const query = 'Insert into knust_colleges(college_name) values ?';


dB.query(query,[programs],(err,rows)=>{
    if(err){
        console.log(err);
        dB.end();
    }else{
        console.log(`data inserted successfully`);
        console.log('rows affected :' + rows.affectedRows);
       
        dB.end();
    }
})