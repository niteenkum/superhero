
/* The above code is adding the favourite heros to the page if avaialbe else showing svg */
printAllFavHero = () => {
    document.getElementById('fav').innerHTML = "";
    let favs = JSON.parse(localStorage.getItem("favs")) || [];
/* The below code is adding the favourite heros to the page if avaialbe else showing svg */
if(favs.length > 0){
    favs.forEach(fav => {
    document.getElementById('fav').innerHTML += `
         
    <div id="id" class="search-result-card d-flex justify-content-between p-3 ms-4">
            
    <a href="./superhero.html?${fav.id}"> <img class="search-image" src=${fav.image} alt=""></a>
    <a href="./superhero.html?${fav.id}" class="name w-50">
        <p>Name: ${fav.name}</p>
        <p> Speed: ${fav.speed}</p>
    </a>
<img height="30" width="30" class="favourite" src="./Assests/Images/trash-solid.svg" onClick=removeHero(${fav.id}) >
</div>

 `});
}
else{
    document.getElementById('fav').innerHTML += `  <img height="300" width="300" class="favourite" src="./Assests/Images/no_data_found.svg" > No Content Found Please Add Favourite Hero First` 
}

}
printAllFavHero();
/* This is a function that is removing the hero from the favourite list. */
removeHero = (id) => {
    console.log(id);
    let favList = JSON.parse(localStorage.getItem("favs")) || [];
    console.log("favs: ",favList);
    let removeFav = favList.filter(fav => fav.id != id);
    console.log("renovefav: ",removeFav);
    localStorage.setItem("favs", JSON.stringify(removeFav));
    printAllFavHero();
} 


