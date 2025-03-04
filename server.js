const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
app.use(express.json());
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const userRoute = require("./routes/userRoute");
const path = require("path");

if (process.env.NODE_ENV === "production") {

     app.use('/' , express.static('client/build'))

     app.get('*' , (req , res) => {
        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
     })

}

app.use(cors());
app.use(bodyParser.json());
app.use("/api/user/", userRoute);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
