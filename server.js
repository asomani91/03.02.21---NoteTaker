// IMPORT ANYTHING WE NEED //
const express = require('express')

// REQUIRE NOTES //
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// INITIALIZE THE APPLICATION & CREAT MY PORT //
const app = express();
const PORT = process.env.PORT || 3000;

// SETTING UP THE BODY PARSING FOR STATIC & ROUTING MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// BRING IN ROUTES //
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

// START MY SERVER //
app.listen(PORT, () => console.log(`My app is running on PORT: ${PORT}`));