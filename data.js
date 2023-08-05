
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
    
  ];
  let clutter = ``;
  imagesData.forEach(function(elem){
    clutter += `<div class="card">
    <img src="${elem.img}"
        alt="Gucci Bag 1">
    <p class="price">${elem.price}</p>
    <div class="price">
        <h3>${elem.name}</h3>
  
        <a href="" style="color: black;">Shop Now</a>
    </div>
  </div>`
  });
  document.querySelector(".container-I").innerHTML = clutter;