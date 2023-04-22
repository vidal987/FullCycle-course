const express = require("express");

const app = express();

const port = 5000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql');

const connection = mysql.createConnection(config);

const people = `create table people(id int auto_increment primary key, name varchar(255))`;
connection.query(people, null, error => { if (error) console.log("Tabela People já existe") });

const sql = `INSERT INTO people(name) values('Wesley')`;
connection.query(sql);

connection.end();

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    connection.query('select * from people', null, (error, result) => {
        let resultado = '<h1>Full Cycle Rocks!</h1>';

        for (i = 0; i < result.length; i++) {
            resultado = resultado.concat(`<h4>${result[i].id} - ${result[i].name}</h4>`);
        }

        res.send(resultado);

        connection.end();
    })
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});