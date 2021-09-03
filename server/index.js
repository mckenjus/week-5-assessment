const express = require("express");
const cors = require("cors");
const e = require("express");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/fortune", (req,res)=> {
  const fortunes = ["A faithful friend is a strong defense.",
  "Do not be intimidated by the eloquence of others.", 
  "Fear and desire – two sides of the same coin.",
  "Go take a rest; you deserve it."
];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)

});

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
// this doesnt really work...
app.post("/api/compliment", (req, res) => {
  console.log(req.body)
  let newCompliment = req.body
  compliments.push(newCompliment)
  console.log(compliments)
  res.status(200).send(req.body)
  
});
app.get("/api/motivate", (req,res) => {
  const motivate = ['There will be a day when I no longer can do this. THAT DAY IS NOT TODAY.', 
  'You are the creator of your destiny',
  'Be a fighter, not a quitter',
  'Be a Goldfish -Ted Lasso'
];
let randomIndex = Math.floor(Math.random() * motivate.length);
  let randomMotivate = motivate[randomIndex];
  res.status(200).send(randomMotivate);
})


app.listen(4000, () => console.log("Server running on 4000"));
