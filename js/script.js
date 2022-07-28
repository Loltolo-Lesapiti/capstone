const openbtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const menu = document.querySelector('.curtain');
const links = document.querySelectorAll('.menu-link');
openbtn.addEventListener('click', () => {
  menu.style.height = '100%';
  document.body.style.overflow = 'hidden';
});
closebtn.addEventListener('click', () => {
  menu.style.height = '0';
  document.body.style.overflow = 'visible';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.height = '0';
    document.body.style.overflow = 'visible';
  });
});

// Dynamically adding the featured properties.

const houses=[{
    image:"../images/h1.jpg",
    title:"Luzury",
    discription:"We are buiding luzury houses in Malindi. The first market release will be on as soom as Novermber 2023.",
    author:"Petro Lesapiti"
 
},
{
    image:"../images/h2.jpg",
    title:"Live",
    discription:"We are buiding luzury houses in Malindi. The first market release will be on as soom as Novermber 2023.",
    author:"Petro Lesapiti"
},
{
    image:"../images/h3.jpg",
    title:"Parking",
    discription:"We have ample parking space in all our highend properties in Keleleshwa, Kilimani and Eastlands.",
    author:"Petro Lesapiti"

},
{
    image:"../images/h1.jpg",
    title:"Money",
    discription:"Partnered with all major banks for our customers who are looking to secure morgage facilities.",
    author:"Petro Lesapiti"
},
]
let container=document.querySelector(".grid");
houses.forEach((house)=>{
    let cardDiv=document.createElement("div");
    cardDiv.className="card";
    container.appendChild(cardDiv);
    //4
    let image=document.createElement("img");
    image.className="cardImage";
    image.alt="Feature product"
    image.src=house.image;
    cardDiv.appendChild(image);
     //5
     let bodyDiv=document.createElement("div");
     bodyDiv.className="cardBody"
     cardDiv.appendChild(bodyDiv);
     // 6
     let cardtitle= document.createElement("h4");
     cardtitle.className="cardTitle";
     cardtitle.textContent=house.title;
     bodyDiv.appendChild(cardtitle);
     // 7
     let cardtext=document.createElement("h5");
     cardtext.className="cardText";
     bodyDiv.appendChild(cardtext);
     cardtext.textContent=house.discription;
     //8
     let cardtext2=document.createElement("p");
     cardtext2.className="author";
     bodyDiv.appendChild(cardtext2);
     cardtext2.textContent=house.author;
})

const morehouses=document.querySelectorAll(".card");

morehouses.forEach((house, i) => {
    if (i > 1) {
        house.classList.add('hide');
    }
  });

  const text=(house) => {
    if (house.classList.contains('hide')) {
        document.querySelector(".seeMore").innerHTML = 'MORE <i class="chevron down icon"></i>';
    } else {
        document.querySelector(".seeMore").innerHTML = 'LESS <i class="chevron up icon"></i>';
    }
  };

  document.querySelector(".seeMore").addEventListener('click', () => {
    morehouses.forEach((house, i) => {
      if (i > 1) {
        house.classList.toggle('hide');
        text(house);
      }
    });
  });
  
