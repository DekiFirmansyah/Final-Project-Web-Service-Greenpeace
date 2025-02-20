const express = require("express");
const app = express();
const dotenv = require("dotenv");
const AllRoutes = require("./routes/userRouter");
const routes = require("./routes/adminUserRouter");



// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

const PORT = 3030;

app.use(express.json());
app.use(AllRoutes);
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});