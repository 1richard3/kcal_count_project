var mysql = require("mysql");

// console.log('hello');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '921113',
    database: "csfood"
});

connection.connect(function(err){
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
})  

//以上是連線資料庫
//以下是測試抓取資料

$query = "SELECT * FROM comm";

connection.query($query, function(err, rows, fields){
    if(err){
        console.log("An error occured with the query");
        return;
    }

    console.log("Query successfully executed", rows);
})

connection.end(function(){
    console.log("Connection closed");
})  