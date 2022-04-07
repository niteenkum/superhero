var id = window.location.search;
id = id.replace('?', "");
    /* The above code is fetching the data from the API and displaying it in the browser. */

var xhrRequest = new XMLHttpRequest();
xhrRequest.open("GET", "https://www.superheroapi.com/api.php/1662238257453184//"+id, true);
xhrRequest.send();
xhrRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhrRequest.responseText);
        const biography = response;  
        document.getElementById('super-hero-wiki').innerHTML = `
        <div class="super-hero-card my-4">
        <div class="super-hero-name d-flex align-items-center flex-column">
       <div>${biography.name}</div>  
        </div>
     <div class="image mt-1">
         <img src=${biography.image.url} alt="" height="100%" width="100%">
     </div>
     <div class="publication-information mt-2 ">
            <p class="text-center"> Publication Information</p>
             <div class="publisher-details d-flex align-items-center ">
                 <div class="name">
Publisher
                 </div>
                 <div class="detail">
${biography?.biography?.publisher}
                 </div>
             </div>
             
             <div class="publisher-details d-flex align-items-center ">
                 <div class="name">
                     First appearance
                 </div>
                 <div class="detail">
                     ${biography?.biography?.first_appearance || "unavailable"} 
                 </div>
             </div>
             <div class="publisher-details d-flex align-items-center ">
                 <div class="name">
                 Alignment
                 </div>
                 <div class="detail">
                    ${biography?.biography?.alignment || "unavailable"}
                 </div>
             </div>
             <div class="publisher-details d-flex align-items-center ">
                 <div class="name">
                     Full Name
                 </div>
                 <div class="detail">
                     ${biography?.name}
                 </div>
             </div>

     </div>

     <div class="publication-information mt-2 ">
         <p class="text-center"> Instory Information</p>
          <div class="publisher-details d-flex align-items-center ">
              <div class="name">
                 Intelligence
              </div>
              <div class="detail">
${biography?.powerstats?.intelligence}
              </div>
          </div>
          
          <div class="publisher-details d-flex align-items-center ">
              <div class="name">
                 Strength
              </div>
              <div class="detail">
                  ${biography?.powerstats?.strength}
              </div>
          </div>
          <div class="publisher-details d-flex align-items-center ">
              <div class="name">
                 Speed
              </div>
              <div class="detail">
                 ${biography?.powerstats?.speed}
              </div>
          </div>

          <div class="publisher-details d-flex align-items-center ">
             <div class="name">
                 Durability
             </div>
             <div class="detail">
                 ${biography?.powerstats?.durability}
             </div>
         </div>
         <div class="publisher-details d-flex align-items-center ">
             <div class="name">
                 Power
             </div>
             <div class="detail">
                 ${biography?.powerstats?.power}
             </div>
         </div>
         <div class="publisher-details d-flex align-items-center ">
             <div class="name">
                 Combat
             </div>
             <div class="detail">
                 ${biography?.powerstats?.combat}
             </div>
         </div>

  </div>
    </div>
        `
    }
 
}