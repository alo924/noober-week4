async function pageLoaded() {
 let response = await fetch('https://kiei451.com/api/rides.json')
 let json = await response.json()

  // writes the returned JSON to the console
 console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  let passengerName
  let passengerPhone
  let passengerNumberOfPassengers
  let passengerPickupAddressLine1
  let passengerPickupAddressLine2
  let passengerDropoffAddressLine1
  let passengerDropoffAddressLine2
  let levelofService
  let outputElement = document.querySelector ('.rides')

    for (let i=0; i<json.length; i++){
      let ride = json

      if (json[i].length>1)  {
      levelofService = 'Noober Pool'
      outputElement.insertAdjacentHTML('beforeend',`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelofService}</span>
    </h1>`)

        for (let j=0; j<json[i].length;j++){
          passengerName = json[i][j].passengerDetails.first + [" "] + json[i][j].passengerDetails.last
          passengerPhone = json[i][j].passengerDetails.phoneNumber
          passengerNumberOfPassengers = json[i][j].numberOfPassengers
          passengerPickupAddressLine1 = json[i][j].pickupLocation.address
          passengerPickupAddressLine2 = json[i][j].pickupLocation.city + [', '] + json[i][j].pickupLocation.state + [" "] + json[i][j].pickupLocation.zip
          passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
          passengerDropoffAddressLine2 = json[i][j].dropoffLocation.city + [', '] + json[i][j].dropoffLocation.state + [' '] + json[i][j].dropoffLocation.zip

          outputElement.insertAdjacentHTML('beforeend',`

          <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}/p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers}
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p> ${passengerPickupAddressLine1}</p>
              <p> ${passengerPickupAddressLine2} </p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
        </div>
          `)
        }    

      } else if (ride[0].purpleRequested) {
        levelofService = 'Noober Purple'
        outputElement.insertAdjacentHTML('beforeend',`
      
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelofService}</span>
      </h1>`)

        for (let j=0; j<json[i].length;j++){
          passengerName = json[i][j].passengerDetails.first + [" "] + json[i][j].passengerDetails.last
          passengerPhone = json[i][j].passengerDetails.phoneNumber
          passengerNumberOfPassengers = json[i][j].numberOfPassengers
          passengerPickupAddressLine1 = json[i][j].pickupLocation.address
          passengerPickupAddressLine2 = json[i][j].pickupLocation.city + [', '] + json[i][j].pickupLocation.state + [" "] + json[i][j].pickupLocation.zip
          passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
          passengerDropoffAddressLine2 = json[i][j].dropoffLocation.city + [', '] + json[i][j].dropoffLocation.state + [' '] + json[i][j].dropoffLocation.zip
    
        outputElement.insertAdjacentHTML('beforeend',`

          <div class="border-4 border-purple-500 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-purple-600 text-white p-2">
                ${passengerNumberOfPassengers}
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${passengerPickupAddressLine1}</p>
                <p>${passengerPickupAddressLine2}</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>$${passengerDropoffAddressLine1}</p>
                <p>${passengerDropoffAddressLine2}</p>
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
      </h1>`)

      for (let j=0; j<json[i].length;j++){
        passengerName = json[i][j].passengerDetails.first + [" "] + json[i][j].passengerDetails.last
        passengerPhone = json[i][j].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][j].numberOfPassengers
        passengerPickupAddressLine1 = json[i][j].pickupLocation.address
        passengerPickupAddressLine2 = json[i][j].pickupLocation.city + [', '] + json[i][j].pickupLocation.state + [" "] + json[i][j].pickupLocation.zip
        passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
        passengerDropoffAddressLine2 = json[i][j].dropoffLocation.city + [', '] + json[i][j].dropoffLocation.state + [' '] + json[i][j].dropoffLocation.zip
  
      outputElement.insertAdjacentHTML('beforeend',`
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers}
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${passengerPickupAddressLine1}</p>
                <p>${passengerPickupAddressLine2} </p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${passengerDropoffAddressLine1}</p>
                <p>${passengerDropoffAddressLine2}/p>
              </div>
            </div>
          </div>
          `)
  
      } else levelofService = 'Noober X'

      outputElement.insertAdjacentHTML('beforeend',`

      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelofService}</span>
    </h1>`)
    
      for (let j=0; j<json[i].length;j++){
        passengerName = json[i][j].passengerDetails.first + [" "] + json[i][j].passengerDetails.last
        passengerPhone = json[i][j].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][j].numberOfPassengers
        passengerPickupAddressLine1 = json[i][j].pickupLocation.address
        passengerPickupAddressLine2 = json[i][j].pickupLocation.city + [', '] + json[i][j].pickupLocation.state + [" "] + json[i][j].pickupLocation.zip
        passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
        passengerDropoffAddressLine2 = json[i][j].dropoffLocation.city + [', '] + json[i][j].dropoffLocation.state + [' '] + json[i][j].dropoffLocation.zip
      
      outputElement.insertAdjacentHTML('beforeend',`

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers}
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
        </div>
    `)
    }

window.addEventListener('DOMContentLoaded', pageLoaded)