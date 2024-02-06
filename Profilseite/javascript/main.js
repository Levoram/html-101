const greeting = "Hallo Welt!";
console.log(greeting);

const cards = [
  {
    title: "Über mich",
    desc: "Mein Name ist Nico Küchler, ich bin 40 Jahre alt, glücklich verheiratet und lebe im schönen München.",
    link: "https://nico-kuechler.de",
    linkdesc: "Mehr sehen",
    classString: "card teal",
  },
  {
    title: "Wie es funktioniert",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,sed!",
    link: "https://nico-kuechler.de/design/ueber-design/",
    linkdesc: "Mehr sehen",
    classString: "card whitelight",
  },
  {
    title: "Kontaktiert mich",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,sed!",
    link: "https://nico-kuechler.de/kontakt/",
    linkdesc: "Mehr sehen",
    classString: "card whitelight",
  },
  {
    title: "Was ich mache",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,sed!",
    link: "https://nico-kuechler.de/ueber-mich/",
    linkdesc: "Mehr sehen",
    classString: "card grayMed",
  },
];

const elm = document.getElementById("CardGroup");

let i = 0;
let row = "";

const clean = (id) => {
  const myNode = document.getElementById(id);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
};

clean(elm.id);

for (var key in cards) {
  console.log("Remainder," + (i % 2));
  console.log(cards[key]);

  const card = document.createElement("div");
  const headline = document.createElement("h2");
  const desc = document.createElement("p");
  const anchor = document.createElement("a");

  card.className = cards[key].classString;
  headline.innerText = cards[key].title;
  desc.innerText = cards[key].desc;
  anchor.href = cards[key].link;
  anchor.textContent = cards[key].linkdesc;

  card.append(headline);
  card.append(desc);
  card.append(anchor);

  if (i % 2 === 0) {
    row = document.createElement("div");
    row.className = "row";
    row.append(card);
    elm.append(row);
  } else {
    row.append(card);
  }
  i++;
}
