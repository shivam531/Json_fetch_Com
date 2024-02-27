// fetchdata();
// async function fetchdata(){

//       try{
//          const pokemonName =document.getElementById("pokemonName").value.toLowerCase();
//           const response = await fetch(`https://api.npoint.io/7bbd3a59c401f616bb89`);
//           if(!response.ok)
//           {
//             throw new Error("Could not fetch resource")
//           }
//           const data = await response.json();
//           console.log(data);

//       }
//       catch(error){
//         console.error(error);
//       }
// }

fetch('https://api.npoint.io/7bbd3a59c401f616bb89/')
.then(req =>{ return req.json();})
.then(data => {
       data.forEach(places=> {
        const markup = `<li>${info.name}</li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
       });
})
 .catch(error => console.log(error));
