app.get('/src/app/componentes/restaurante', (req, res) => {
  const data = {
    message: 'Datos desde el backend Node.js'
  };
  res.json(data);
});
