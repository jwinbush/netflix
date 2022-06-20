const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "796f3c591emsh35bf41833ebfb41p1e91e2jsn0e036cae2664",
  },
};

fetch(
  "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=game%20of%20thrones&country=us",
  options
)
  .then((response) => response.json())
  .then((data) => {
    const list = data.d;

    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const Show = `<li><img src="${poster}"><h2>${name}</h2></li>`;
      document.querySelector(".Shows").innerHTML += Show;
    });
  })
  .catch((err) => {
    console.error(err);
  });
