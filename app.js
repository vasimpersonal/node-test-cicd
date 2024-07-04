// app.js
const express = require('express');
const app = express();
const port = 3005;
 
app.get('/', (req, res) => {
    res.send('Hello World!');
});
 
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
} else {
    module.exports = app;
}
