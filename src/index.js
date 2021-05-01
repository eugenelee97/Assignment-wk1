import express from "express";
import { fetchLondon } from "./userURI.js";
import { calculateMiles } from "./calculateDist.js";

const app = express();
const port = 3000;

app.get("/london", async (req, res) => {
  const userList = await fetchLondon();

  const milesFiltered = userList.filter(
    ({ latitude, longitude }) => calculateMiles(latitude, longitude) <= 50
  );

  res.send(milesFiltered);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
