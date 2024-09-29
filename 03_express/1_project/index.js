const express = require("express");
const app = express();
const port = 8000;
const users = require("./MOCK_DATA.json");
const fs = require("fs")

app.use(express.urlencoded({ extended: false }));

// Routes

// api json rendring
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// html rendring
app.get("/users", (req, res) => {
  const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
  res.send(html);
});

// dynamic path parameters
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
    return res.json({status: "panding"})
    // if(error){
    //   console.log(error)
    // }else{

    // }
  })
});

// dimilar route ko aik he dafa handle karna
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .post((req, res) => {
    const body = req.body;
    console.log(body);
  })
  .patch((req, res) => {})
  .delete((req, res) => {});

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
