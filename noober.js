async function pageLoaded() {
 let response = await fetch('https://kiei451.com/api/rides.json')
 let json = await response.json()

  // writes the returned JSON to the console
 console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  for (let i=0; i<json.length; i++){
  for (n=0; n<json[i].length>1; n++){
    
    if (json[i].length>1)  {
      console.log(json[i][n])
      levelofService = 'Noober Pool'
      let outputElement=document.querySelector('.rides')
      outputElement.insertAdjacentHTML('beforeend',`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelofService}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride[n].passengerDetails.first} ${ride[n].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride[n].passengerDetails.phoneNumber}/p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride[n].numberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p> ${ride[n].pickupLocation.address}</p>
          <p> ${ride[n].pickupLocation.city}, ${ride[n].pickupLocation.state} ${ride[n].pickupLocation.zip} </p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride[n].dropoffLocation.address}</p>
          <p>${ride[n].dropoffLocation.city}, ${ride[n].dropoffLocation.state} ${ride[n].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
      `)
    
    
      } else if (ride[0].purpleRequested) {
        levelofService = 'Noober Purple'
        outputElement.insertAdjacentHTML('beforeend',`
      
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelofService}</span>
      </h1>
  
      <div class="border-4 border-purple-500 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${ride[n].passengerDetails.first} ${ride[n].passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${ride[n].passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-purple-600 text-white p-2">
            ${ride[n].numberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride[n].pickupLocation.address}</p>
            <p>Chicago, IL 60603</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride[n].dropoffLocation.address}</p>
            <p>${ride[n].dropoffLocation.city}, ${ride[n].dropoffLocation.state} ${ride[n].dropoffLocation.zip}</p>
          </div>
        </div>
      </div>
      `)
      
  
      } else if (ride[0].numberOfPassengers>3) {
        levelofService = 'Noober XL'
        outputElement.insertAdjacentHTML('beforeend',`
      
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelofService}</span>
      </h1>
  
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${ride[n].passengerDetails.first} ${ride[n].passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${ride[n].passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride[n].numberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride[n].pickupLocation.address}</p>
            <p>${ride[n].pickupLocation.city}, ${ride[n].pickupLocation.state} ${ride[n].pickupLocation.zip} </p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride[n].dropoffLocation.address}</p>
            <p>${ride[n].dropoffLocation.city}, ${ride[n].dropoffLocation.state} ${ride[n].dropoffLocation.zip}/p>
          </div>
        </div>
      </div>
      `)
  
      } else levelofService = 'Noober X'

      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            2 passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
      </div>
    </div>
`)
}

  
window.addEventListener('DOMContentLoaded', pageLoaded)