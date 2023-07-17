const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');

// express
const app = express(); 

const dbURI ="mongodb+srv://shriharsha1998hr:yefTdgRbDvpzXCPp@cluster0.vaw8n2z.mongodb.net/"
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
     .then((result)=> app.listen(3000))
     .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware Static file
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res)=>{
//     const blog = new Blog({
//       title: 'new blog',
//       snippet:'about my new blog',
//       body:'more about my new blog'
//     });
//     blog.save()
//        .then((result)=>{
//          res.send(result)
//        })
//        .catch((err) => {
//          console.log(err);
//        });
// });

// app.get('/all-blog', (req,res)=>{
//    Blog.find()
//       .then((result)=>{
//          res.send(result);
//       })
//       .catch((err)=>{
//          console.log(err);
//       });
// });

// app.get('/single-blog',(req,res)=>{
//    Blog.findById()
//    .then((result)=>{
//       res.send(result);
//    })
//    .catch((err)=>{
//       console.log(err);
//    });
// });


// app.use((req,res, next)=>{
//    console.log('new request made');
//    console.log('host:', req.hostname);
//    console.log('path:', req.path);
//    console.log('method:', req.method);
//    next();
// });

// app.use((req, res, next)=>{
//    console.log('in the next middleware');
//    next();
// })

//app.get('/',(req,res)=>{
   //   const blogs =[
//       {title: 'githa finds chacholate', snippet:'lorem ipsum dolor sit amet consectetur'},
//       {title: 'harsha finds Stars', snippet:'lorem ipsum dolor sit amet consectetur'},
//       {title: 'kumari defact browser', snippet: 'lorem ipsum dolor sit amet consectetur'},
// ];
//    //res.send('<p> home page </p>'); 
//    //res.sendFile('./views/index.html',{root: __dirname});
 // res.render('blogs/index',{title:'Home', blogs}); });

// routes
app.get('/',(req,res)=>{
   res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
     res.render('about',{title:'About'});
});





// redirects
// app.get("/aboutme", (req, res)=>{
//    res.redirect('/about');
// });


app.use('/blogs',blogRoutes);


//404 page
app.use((req,res)=>{
   //res.status(404).sendFile('./views/404.html',{root: __dirname});
   res.status(404).render('404', {title:'404'});
})