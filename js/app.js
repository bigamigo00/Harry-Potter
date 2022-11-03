const main = document.querySelector("main");
const btns = document.querySelectorAll(".btn");
const input = document.querySelector("input");
const all = document.querySelector(".all");
let data;

const fetchData = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  foo(data);
};

input.addEventListener("change", (e) => {
  const filteredData = data.filter((el) =>
    el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  main.innerHTML = "";
  console.log(filteredData);
  foo(filteredData);
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filteredData = data.filter((el) => el.house === e.target.innerHTML);
    main.innerHTML = "";
    foo(filteredData);
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filteredData = data.filter((el) => el.house === e.target.innerHTML);
    main.innerHTML = "";
    foo(filteredData);
  });
});

all.addEventListener("click", (e) => {
  const filteredData = data;
  main.innerHTML = "";
  foo(filteredData);
});

window.onload = fetchData();

const background = (house) => {
  switch (house) {
    case "Gryffindor":
      return "#ae0001";
    case "Slytherin":
      return " rgb(17, 107, 17)";
    case "Hufflepuff":
      return "#ecb939";
    case "Ravenclaw":
      return "#5d5d5d";

    default:
      return "#fff";
  }
};

const avatar = (image, gendre) => {
  if (image === "") {
    if (gendre === `male`) {
      return "./img/male.webp";
    } else {
      return "./img/femlae.png";
    }
  } else return image;
};

const undefiendCheck = (info) => {
  return info === "" ? "Не Известно" : info;
};

const foo = (data) => {
  data.forEach((el) => {
    // console.log(el);

    const card = document.createElement("div");
    main.append(card);
    card.innerHTML = `<div class="card" class = "${
      el.house
    }" style="background:${background(el.house)};>
  <div class="desc">
    <ul>
    <li><span>Name:</span> ${el.name}</li>
    <li><span>Actor:</span> ${el.actor}</li>
    <li><span>Birth date</span> ${undefiendCheck(el.dateOfBirth)}</li>
    <li><span>Gender:</span> ${el.gender}</li>
    <li><span>Species:</span> ${el.species}</li>
    <li><span>House:</span> ${el.house}</li>
    <li><span>Ancestry:</span> ${undefiendCheck(el.ancestry)}</li>
    <li><span>Patronus:</span> ${undefiendCheck(el.patronus)}</li>
    <li><span>Hair Colour:</span> ${el.hairColour}</li>
    </ul>
    <img src="${avatar(el.image, el.gender)}" alt="">
    </div>


    </div>`;
  });
};
