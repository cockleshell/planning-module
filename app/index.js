const express = require('express');
const app = express();

app.get('/api/activities', (req,res) => { res.json(
    {
    "data": [
        {
            "title": "Service&maintenance",
            "activity_id": 1,
            "imageUrl":"http://google.com/img.jpg"
        },
        {
            "title": "Support",
            "activity_id": 2,
            "imageUrl":"http://google.com/tst.jpg"
        }
    ]
    }) });

app.get('/api/location', (req,res) => { res.json(
    {
        "data": [
            {
                "activity_id": 1,
                "title": "Lviv",
                "location_id": 1,
                "imageUrl":"http://google.com/img.jpg"
            },
            {   "activity_id": 1,
                "title": "Odesa",
                "location_id": 2,
                "imageUrl":"http://google.com/tst.jpg"
            }
        ]
    }) });

app.listen (3000, () => {console.log("Hello 1")});
