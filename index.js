const express = require('express');

const app = express();

const birds = [
    {
        id: 100,
        name: 'Finch',
        color: 'Brown',
    },
    {
        id: 101,
        name: 'Crow',
        color: 'Black',
    },
    {
        id: 102,
        name: 'Bald Eagle',
        color: 'White',
    }
];

app.get('/', (req, res) => {
    res.json(birds);
});

app.get('/:birdId', (req, res) => {
    const birdId = req.params.birdId;
    const bird = birds.find(x => x.id === parseInt(birdId));
    res.json(bird);
});

app.get('/someOtherUrl', (req, res) => {
    res.send('Some other handler!')
});

app.listen(8001, null, (err) => {

    console.log('Listening on port 8001');

});
