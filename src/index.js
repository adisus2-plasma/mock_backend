const express = require('express')
const app = express()

const PORT = process.env.PORT || 9005

app.use(express.json())

app.get('/health', (req, res) => {
    res.send({
        status: 'This service are healthty.'
    })
})

app.listen(PORT, () => {
    console.log('Server are up on port ' + PORT)
})