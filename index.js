const express = require("express")
const app = express()
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.get("/", (req, res) => {
  let pa = [{ img: "/img/0.jpg", name: "Randamoozham", author: "M T Vasudevan", price: "Rs.265/-" }, { img: "/img/1.jpg", name: "Randamoozham", author: "M T Vasudevan", price: "Rs.265/-" },]
  res.render('pages/home', { obj: pa });
})
app.listen(3000, () => {
  console.log("server listening on port 3000")
})