const express = require('express');
const app = express();
app.listen(3000, () => console.log('server started on port 3000'))

app.get('/', (req, res) => {
    // console.log(__dirname)
    res.sendFile(__dirname + '/views/index.html')
})


app.get('/detail/:page', (req, res) => {
    // const alias = req.param('slug', 'default')
    const page = req.params.page || 1
    res.send({ page })
})
