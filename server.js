const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO

app.get('/musicians/:id', async (req, res) => {
  const musician = await Musician.findByPk(req.params.id);
  if (musician) {
    res.json(musician.toJSON());
  } else {
    res.status(404).send("Musician not found");
  }
});


app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})