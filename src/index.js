const app = require('./app');
require('dotenv').config();

const {PORT} = process.env

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);

})