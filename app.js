const auth="563492ad6f917000010000017aa97a8c8674436d8da997ea725c90e6";
const gallery=document.querySelector('.gallery');
const searchInput=document.querySelector('.search-input');
const submitButton= document.querySelector('.submit-btn');
let searchValue;


async function curatedPhotos()
{
  const dataFetch=await fetch("https://api.pexels.com/v1/curated?per_page=15",{

  method:'GET',
  headers:{
    Accept:'application/json',
    Authorization:auth
  }
  })

  const data=await dataFetch.json();
  data.photos.forEach(photo =>{
    const galleryImg=document.createElement('div');
    galleryImg.classList.add('gallery-img');
    galleryImg.innerHTML=`<img src=${photo.src.large}></img>
    <p>${photo.photographer}</p>
    `;
    gallery.appendChild(galleryImg)

  });
}


curatedPhotos();