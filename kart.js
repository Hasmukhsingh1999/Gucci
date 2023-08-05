let imagesData = [
  {
    img: "https://i.pinimg.com/564x/9b/f6/e7/9bf6e79665c05c1aee935a5f27d99116.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/54/cf/06/54cf069bb5191ffd9988d200c0a29fbc.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/14/41/b8/1441b8c06b06e6a71c8b0e76bd5b67fa.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/ba/71/09/ba7109b24abddedf5d8a1d4727c6122a.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/67/5b/e9/675be90b93e599ed9ab43865c35b059a.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/ba/fd/ad/bafdada4665750b65e31a37042f940b0.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/10/79/ba/1079ba4f6fcbb3c4d0703103d5f97299.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/11/85/69/118569be57bdafad213791e748ccfad5.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/cb/24/59/cb245907ce288f0e8fdee967cfe50dca.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/3e/97/b9/3e97b9e0fc10ec18b9a9de10b5c0558b.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/6e/cb/48/6ecb48147bccab52040442811506d300.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/df/8d/fa/df8dfa4659a2c459e9640f14491b4a13.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/1f/b8/5f/1fb85ffc5afc95fef081776a8b6312b9.jpg",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/f8/84/af/f884af9fc64aace883ed66d916f7f897.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/7d/55/7b/7d557b99c218ffca8136916fbbddb1a5.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/16/6f/6b/166f6b8fc79042a4ba988041226d9baa.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/02/a9/60/02a960cbcac65b143917337ca5493063.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/12/24/49/122449dbf04c1aef81664766b40d2bc6.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/564x/85/44/a3/8544a32563656827bd624bd271b08796.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },

  {
    img: "https://i.pinimg.com/564x/3b/75/cc/3b75cce345ae749fb7e7f35251250299.jpg",
    name: "GUCCI SM VALVET",
    price: "$120",
  },
];
var visibleItem = 12;

// 20 12 (0 ,12)
imagesData.slice(0,visibleItem).forEach(function(elem){
  console.log(elem);
  document.querySelector(".container-II").innerHTML += createCard(elem);
});


function createCard(elem) {
  return `<div class="card">
    <img src="${elem.img}"
        alt="Gucci Bag 1">
    <p class="price">${elem.price}</p>
    <div class="price">
        <h3>${elem.name}</h3>
  
        <a href="" style="color: black;" id="a">Shop Now</a>
    </div>
  </div>`;
};


console.log(imagesData.length)

function showNextItem() {
  const endIndex = Math.min(visibleItem + 4, imagesData.length); //12+4,(16,20)
  for (let i = visibleItem; i < endIndex; i++) {
    const elem = imagesData[i];
    console.log("i",elem)
    document.querySelector(".container-II").innerHTML += createCard(elem);

  }
  visibleItem = endIndex;
  if(visibleItem>= imagesData.length){
    document.querySelector(".load-more-button").setAttribute("disable","true");
  }
}




document.querySelector(".load-more-button").addEventListener("click",showNextItem);

document.querySelectorAll(".shop-now-button").forEach(function(elem){
    elem.addEventListener("click",function(event){
        event.preventDefault();
        alert("clicked")
    })
  
})
