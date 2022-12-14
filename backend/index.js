// const express = require("express");
// const app = express();
// const cors = require("cors");
// const helmet = require("helmet");
// const port = 5000;
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());
// app.use(helmet());
// require("./database/database");
// const routes = require("./routes/admin.routes");
// app.use("/hospital", routes);
// app.listen(port, () => {
//  console.log(`Server running at http://localhost:${port}`);
// });


const express=require("express");
const app=express();
const port=8081;
const cors=require("cors");
app.use(cors());
const db=require('./src/config/db.config')
db.connect()
app.use(express.json())
const routes=require("./src/route/db.sd.route");
app.use("/student",routes);
const route=require("./src/route/db.address.route");
app.use("/address",route)
const routess=require("./src/route/db.exam.route")
app.use("/exam",routess)
const record=require("./src/route/db.record.route")
app.use("/record",record)
const book=require("./src/route/db.book.route")
app.use("/book",book)
const login=require("./src/route/db.login.route")
app.use("/login",login)

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});