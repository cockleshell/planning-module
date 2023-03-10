const express = require('express');
const app = express();

app.get('/api/activities', (req,res) => { res.json(
    {
    "data": [
        {
            "title": "Service&maintenance",
            "id": "01",
            "imageUrl":"http://google.com/img.jpg"
        },
        {
            "title": "Support",
            "id": "02",
            "imageUrl":"http://google.com/tst.jpg"
        }
    ]
}) });

app.listen (3000, () => {console.log("Hello")});
