var mysql=require('mysql2');
var dbserver={
    host: "localhost",
    user: "root",
    password: "password",
    database: 'customers'
}
var connection=mysql.createConnection(dbserver);
connection.connect(function(err){
    if(err){
        console.log("Connection Unsucessful.."+err)
    }
    else{
        console.log("Connection Sucessful.." )
    }
}); 
app.post('/users', (req, res) => {
    const { name, contact } = req.body;
    const sql = "INSERT INTO users (name, contact) VALUES (?, ?)";
    db.query(sql, [name, contact], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "User added successfully", id: result.insertId });
    });
});