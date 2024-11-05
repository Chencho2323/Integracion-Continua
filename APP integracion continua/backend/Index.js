const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

app.use('/node_modules', express.static('node_modules'));

const pool = new Pool({
  host: 'db',         
  user: 'Pruebas',
  password: 'Pruebas4321*',
  database: 'mydatabase',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    await pool.query('SELECT NOW()');  
    const options = { timeZone: 'America/Bogota', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const colombiaTime = new Intl.DateTimeFormat('es-CO', options).format(new Date());
    
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Conexión Establecida</title>
        <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css">
        <style>
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
          }
          .message {
            text-align: center;
            color: #007bff; /* Azul */
          }
          .message i {
            font-size: 3em;
            margin-bottom: 0.5em;
          }
          .message h2 {
            font-size: 2em;
            margin: 0.5em 0;
          }
          .message p {
            font-size: 1.2em;
          }
        </style>
      </head>
      <body>
        <div class="message">
          <i class="fas fa-check-circle"></i>
          <h2>¡Conexión con la base de datos establecida!</h2>
          <p>Hora en Colombia: ${colombiaTime}</p>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Error de conexión:', error);
    res.status(500).send('Error al conectar con la base de datos');
  }
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
