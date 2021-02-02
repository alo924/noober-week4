async function pageLoaded() {
 let response = await fetch('https://kiei451.com/api/rides.json')
 let json = await response.json()

  // writes the returned JSON to the console
 console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
 for (let i=0; i<rides.length; i++){
   let ride=json[i]
    renderRide(ride)
  }

  function renderRide(ride){
    let outputElement=document.querySelector('.rides')
    outputElement.insertAdjacentHTML('beforeend',`)

    ${if (ride.length>1) {
      levelofService = 'Noober Pool'
    } else if (ride[0].purpleRequested) {
      levelofService = 'Noober Purple'
    } else if (ride[0].numberOfPassengers>3) {
      levelofService = 'Noober XL'
    } else levelofService = 'Noober X'
  }

    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>Noober X</span>
</h1>  
    `)

  }
} 
  

  
window.addEventListener('DOMContentLoaded', pageLoaded)

