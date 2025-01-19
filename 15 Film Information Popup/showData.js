const movies = {
    luca: {
      description: `A young boy experiences an unforgettable seaside summer
      on the Italian Riviera filled with gelato, pasta and endless scooter rides.
      Luca shares these adventures with his newfound best friend,
      but all the fun is threatened by a deeply-held secret: he is a sea
      monster from another world just below the ocean's surface.`,
      title: "Luca",
      rating: "9.5",
      releaseYear: "June 3, 2021",
      creators: ["Enrico Casarosa", "Andrea Warren", "Jesse Andrews"],
      stars: ["Jacob Tremblay", "Emma Berman", "Peter Sohn", "Sandy Martin"],
      img: "Luca.jpeg",
    },
    car: {
      description: `A hotshot race car named Lightning McQueen gets waylaid
      in Radiator Springs, where he finds the true meaning of friendship and family.`,
      title: "Cars",
      rating: "8.1",
      releaseYear: "June 9, 2006",
      creators: ["John Lasseter", "Joe Ranft", "Jorgen Klubien"],
      stars: ["Owen Wilson", "Bonnie Hunt", "Paul Newman", "Larry the Cable Guy"],
      img: "Car.jpeg",
    },
    frozen: {
      description: `When the newly crowned Queen Elsa accidentally uses her power
      to turn things into ice to curse her home in infinite winter, her sister Anna teams up
      with a mountain man, his playful reindeer, and a snowman to change the weather condition.`,
      title: "Frozen",
      rating: "8.5",
      releaseYear: "November 27, 2013",
      creators: ["Chris Buck", "Jennifer Lee", "Shane Morris"],
      stars: ["Kristen Bell", "Idina Menzel", "Jonathan Groff", "Josh Gad"],
      img: "Frozen.jpeg",
    },
    onward: {
      description: `In a suburban fantasy world, two teenage elf brothers embark on a quest to discover
      if there is still magic out there in order to spend one last day with their father, who died
      when they were too young to remember him.`,
      title: "Onward",
      rating: "8.2",
      releaseYear: "February 21, 2020",
      creators: ["Dan Scanlon", "Jason Headley", "Keith Bunin"],
      stars: ["Tom Holland", "Chris Pratt", "Julia Louis-Dreyfus", "Octavia Spencer"],
      img: "Onward.jpeg",
    },
  };

const descr = document.querySelector(".movie__description");
const date = document.querySelector(".movie__release__date");
const creators = document.querySelector(".creators");
const stars = document.querySelector(".stars");
const img = document.querySelector(".popup__movie__img");
const title = document.querySelector(".popup__movie__title");
const rating = document.querySelector(".popup__movie__rating");

function addData(name){
    const movie = movies[name];
    title.textContent = movie.title;
    rating.textContent = movie.rating;
    img.src = `images/${movie.img}`;
    descr.textContent = movie.description;
    date.textContent =movie.releaseYear;
    creators.textContent = movie.creators.join(",");
    stars.textContent = movie.stars.join(",");
}

document.addEventListener("click",(e)=>{
    const filmName = e.target.closest(".movie").dataset.movie;
    if(filmName) addData(filmName);
});