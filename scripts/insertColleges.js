const dB = require('./dbConnector');
const query = 'Insert into knust_colleges(college_name) values ?';
let colleges = [
    ['College of Health and Allied Sciences'],
    ['College of Science'],
    ['College of Engineering'],
    ['College of Agriculture and Natural Resources'],
    ['College of Art and Built Environment'],
    ['College of Humanities and Social Sciences']
];

dB.query(query,[colleges],(err,rows)=>{
    if(err){
        console.log(err);
        dB.end();
    }else{
        console.log(`data inserted successfully`);
        console.log('rows affected :' + rows.affectedRows);
       
        dB.end();
    }
})