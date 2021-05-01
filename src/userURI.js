import fetch from "node-fetch";

const USER_URI = "https://bpdts-test-app.herokuapp.com/users";

export const fetchLondon = async () => {
  const response = await fetch(USER_URI);

  if (!response.ok) {
    throw new Error("Error fetching cars");
  }
  return response.json();
};
