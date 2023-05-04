import express from "express";
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.render('login',{layout:false})
}
)

app.listen(200, () => {
    console.log('Server started on port 200');
  });