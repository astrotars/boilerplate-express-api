module.exports = api => {
    api.get('/', (req, res) => {
        res.sendStatus(200);
    });

    api.post('/', (req, res) => {
        res.sendStatus(200);
    });
};
