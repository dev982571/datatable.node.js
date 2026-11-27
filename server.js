const express = require("express");
const dbconnection = require("./src/config/db");
const userRoutes = require("./src/routes/userroutes");

const app = express();

app.use(express.json());
app.use("/api",userRoutes);

const port = 3000;

const startserver = async () => {
    try {
        await dbconnection();

        app.listen(port, () => {
            console.log(`server is running on port ${port}`);
        });

    } catch (error) {
        console.log("server failed to start", error);
    }
};

startserver();
