const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export async function getData() {
  const response = await fetch("http://localhost:3000/postagens", options);
  return response.json();
}
