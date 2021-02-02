async function pageLoaded() {
 let response = await fetch('https://kiei451.com/api/rides.json')
 let json = await response.json()

  // writes the returned JSON to the console
 console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  for (let i=0; i<json.length; i++){
     ride=json[i]
     
  let outputElement=document.querySelector('.rides')

    for (let n=0; n<ride.length; n++){
      passenger = ride[n]
      if (ride.length>1) {
        levelofService = 'Noober Pool'
      } else if (ride[0].purpleRequested) {
        levelofService = 'Noober Purple'
      } else if (ride[0].numberOfPassengers>3) {
        levelofService = 'Noober XL'
      } else levelofService = 'Noober X'
}

  outputElement.insertAdjacentHTML('beforeend',`
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelofService}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1"> ${ride.passengerDetails.first}</h2>
          <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride.numberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p> ${ride.pickupLocation.address}</p>
          <p> ${ride.pickupLocation.city}, ${ride.pickupLocation.state}, ${ride.pickupLocation.zip} </p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride.dropoffLocation.address}</p>
          <p> ${ride.dropoffLocation.city}, ${ride.dropoffLocation.state}, ${ride.pickupLocation.zip} </p>
        </div>
      </div>
    </div>



 

  
window.addEventListener('DOMContentLoaded', pageLoaded)

