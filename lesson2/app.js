let usersArray =[
    {name:"Olga", age:25},
    {name:"Petro", age: 28}
]
const express = require('express')
const expHbr = require('express-handlebars')
const path = require('path')

const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.join(process.cwd(),'views')))

app.set('view engine','hbs')
app.engine('.hbs',expHbr({
    defaultLayout:false
}))
app.set('views',path.join(process.cwd(),'views'))

// app.get('/', (req, res) => {
//     res.write('Hello')
//     res.end()
//     res.json({name: "misha", age: 25})
//     res.send('TEST SERVER')
// })

app.get('/users', (req,res)=>{
    res.render('users',{users: usersArray})
})
app.get('/main' ,(req,res)=>{
    res.render('main',{isOk: true, userName:'Ivan'})
})
app.post('/login' ,(req,res)=>{
   const {name,age}=req.body

    usersArray.push({name,age})
    res.redirect('/users')
})

app.listen(5000, () => {
    console.log('App listen 5000');
})