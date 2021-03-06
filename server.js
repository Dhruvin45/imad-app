var express = require('express');
var morgan = require('morgan');
var path = require('path');


var articles = {
     articleOne = {
    title: 'Artical 1  ! Dhruvin Soni',
    heading: ' Artical one',
    date: 'February 2, 2018',
    content:`  <p>
                This is the content of my first artical This is the content of my first artical. This is the content of my first artical.
            </p>
            <p>
                 This is the content of my first artical. This is the content of my first artical. This is the content of my first artical.
            </p>
            <p>
                 This is the content of my first artical.
                  This is the content of my first artical.
                   This is the content of my first artical.
            </p>`
},
var articleTwo = {
     title: 'Artical 2  ! Dhruvin Soni',
    heading: ' Artical Two',
    date: 'February 2, 2018',
    content:`  <p>
                This is the content of my first artical This is the content of my first artical. This is the content of my first artical.
            </p>
            <p>
                 This is the content of my first artical. This is the content of my first artical. This is the content of my first artical.
            </p>
            <p>
                 This is the content of my first artical.
                  This is the content of my first artical.
                   This is the content of my first artical.
            </p>`
},
var articleThree = {
     title: 'Artical 3  ! Dhruvin Soni',
    heading: ' Artical Three',
    date: 'February 2, 2018',
    content:`  <p>
                This is the content of my first artical This is the content of my first artical. This is the content of my first artical.
            </p>
            <p>
                 This is the content of my first artical. This is the content of my first artical. This is the content of my first artical.
            </p>
            <p>
                 This is the content of my first artical.
                  This is the content of my first artical.
                   This is the content of my first artical.
            </p>`
},
};
function createTemplate(data){
    
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate = `<html>
<head>
    <title>
       ${title}
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
    <meta name="viewprot" content="width=device-width, initial-scale=1" />
   
</head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
          ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
    
</html>`;
return htmlTemplate;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req, res){
   res.send(createTemplate(articleOne));
});

app.get('/article-two',function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
