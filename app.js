const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const ejs = require("ejs");
var _ = require("lodash");


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let campgrounds = [
     
  {
    name: "Victoria Island ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos57uI3XS5BsRtgPv4jjL-JNcxthWaZgQ-w&usqp=CAU"
  },

  {
    name: "Lekki Villa Park ",
    image: "https://naidrenalin.com.ng/wp-content/uploads/2019/05/IMG_9093-1024x683.jpg"
  },     
  {
    name: "Zuma Rock Park ",
    image: "https://howng.com/wp-content/uploads/2015/10/700_2c706769476960ccc9622e533b668e77.jpg"
  },

  {
    name: "Area1 Palace",
    image: "https://miro.medium.com/max/700/1*ZwsuiM48pU22ugmPQq_5vA.jpeg"
  },
 
  {
    name: " Shiroro Villa Park",
    image: "https://guardian.ng/wp-content/uploads/life/2017/05/travel2.png"
  },

  {
    name: " Calabar Huston Palace",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/0d/fe/d2.jpg"
  },
 
  {
    name: " Naples Height ",
    image: "https://thumbs.dreamstime.com/z/camping-ground-papandayan-camping-ground-papandayan-camping-ground-situated-mount-papandayan-rural-area-near-city-195182212.jpg"
  },

  {
    name: " Beauty Gross Walk ",
    image: "https://cdn.5280.com/2019/08/camping_unsplash-960x720.jpg"
  },

]

 
app.get('/', (req, res) => {
    res.render("landing");
  
  })


  app.get('/campgrounds', (req, res) => {

  res.render("campgrounds", {campgrounds : campgrounds});
  
  })


app.post("/campgrounds", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;

  let newCamp = {
    name: name,
    image:image
  }

  campgrounds.push(newCamp )

  res.redirect("/campgrounds"); 

})  

app.get("/campgrounds/new", (req, res) => {
  res.render("new");

})  

app.get("*", (req, res) => {
  res.send("NAh Wah OOOh");

})

app.listen(3000, function () {
    console.log("Server started on port 3000");
  });
   