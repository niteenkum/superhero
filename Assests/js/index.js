const hero = document.getElementById('search-super-hero');
const search = document.getElementById('results');
/* The below code is used to get the super hero character from the superher api. */
hero.addEventListener('keyup', (e) => {
    const search = e.target.value;

   /* The above code is used to get the search results from the API. if search value is greater than 1*/
   if(search.length > 1){
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", "https://www.superheroapi.com/api.php/1662238257453184/search/"+search, true);
    xhrRequest.send();
    xhrRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(xhrRequest.responseText);
         const searchResults = response.results;
         if(searchResults == null){ 
            document.getElementById('results').innerHTML = `   <img height="300" width="300" class="favourite" src="./Assests/Images/no_data_found.svg" > NO DATA FOUND`
            return;
        }
         if(searchResults.length > 0){
            document.getElementById('results').innerHTML = ""
         localStorage.setItem("searchResults", JSON.stringify(searchResults));

    /* The above code is used to add the search results to the search results section. */
    for(let i of searchResults){
        document.getElementById('results').innerHTML += `
         
        <div id="id" class="search-result-card d-flex justify-content-between p-3 ms-4">
                
        <a href="./superhero.html?${i.id}"> <img class="search-image" src=${i.image.url} alt=""></a>
        <a href="./superhero.html?${i.id}" class="name w-50">
            <p>Name: ${i.name}</p>
            <p> Speed: ${i.powerstats.speed}</p>
        </a>
    <img height="30" width="30" class="favourite" src="./Assests/Images/favourite.svg" onClick=addHero(${i.id}) >
    </div>
   
     `;

    }
}
        }

        }
    
   }
});

/* This is a function that is used to add the favourite character to the local storage. */
addHero = (id) => {
    let searchResult = JSON.parse(localStorage.getItem("searchResults"));
    let fav = searchResult.find(item => item.id == id)
    let addInFav = [];
    addInFav.push({id:fav.id,speed:fav.powerstats.speed, image:fav.image.url,name:fav.name });

/* This is a ternary operator. It is used to check if the local storage is empty or not. If it is empty
then it will return an empty array. */
    let favs = JSON.parse(localStorage.getItem("favs")) || [];

 /* Adding the favourite character to the local storage. */
    if(favs.length > 0){
        let isFav = favs.find(item => item.id == id)
        if(isFav){
            alert("Already added to favourites")
        }
        else{
            favs.push({id:fav.id,speed:fav.powerstats.speed, image:fav.image.url,name:fav.name });
            localStorage.setItem("favs", JSON.stringify(favs));
            alert("Added to favourites")
        }
    }else{
        localStorage.setItem("favs", JSON.stringify(addInFav));
    }
}


