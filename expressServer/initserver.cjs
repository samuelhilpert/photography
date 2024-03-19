// server.js

const express = require('express');
const knex = require('knex');
const cors = require('cors'); // Importiere das cors-Modul

const app = express();
const PORT = process.env.PORT || 3001;
// Aktiviere CORS für alle Anfra
// gen
app.use(cors());

// Konfiguration für die MySQL-Datenbank
const db = knex({
    client: 'mysql2',
    connection: {
        host: 'photographydatabase.mysql.database.azure.com',
        port: 3306,
        user: 'samuel',
        password: 'Mannheim03',
        database: 'photography',
    },
});

app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Hello from express server')
})

app.get('/testneu', async (req, res) => {
    const tags = await db.select('*').from('allganfragen');
    res.json(tags);
})

app.post('/InsertAllgemeineAnfragen', async(req,res) => {
    const { vorname, nachname, tag, wuensche, vorstellungen, mail, anmerkungen } = req.body; // Annahme: Die Werte für front und back kommen im Request Body an
    console.log(req.body);
    console.log(vorname, nachname);
    // try {
    const card = await db.insert({vorname: vorname, nachname: nachname, tag: tag, wuensche: wuensche, vorstellungen: vorstellungen, mail: mail, anmerkungen: anmerkungen}).into('allganfragen');

})

app.post('/InsertIndividuelleAnfragen', async(req,res) => {
    const { vorname, nachname, email, motiv, vorstellung, stunden, bilder, tag} = req.body; // Annahme: Die Werte für front und back kommen im Request Body an
    console.log(req.body);
    // try {
    const card = await db.insert({vorname: vorname, nachname: nachname, email:email, motiv:motiv, vorstellung:vorstellung, stunden:stunden, bilder:bilder, tag: tag}).into('indivanfragen');

})

app.post('/calculatePrice', async(req,res) => {
    const {category,motiv,stunden, bilder} = req.body;
    console.log(req.body);
    if (category === "Tier" && motiv.includes("in Bewegung")) {
        const price = 500 + (stunden * 100) + (bilder * 5);
        console.log(price);
        res.json(price);
    } else if (category === "Tier" && motiv.includes("Portrait")) {
        const price = 300 + (stunden * 100) + (bilder * 5);
        console.log(price);
        res.json(price);

    }
})

//Muss am Schluss sein, da vor dem Starten erstmal alles definiert werden muss
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
