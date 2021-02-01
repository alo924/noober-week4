async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  for (let i=0; i<json.length; i++){
      ride=json[i]
  }

    let outputElement=document.querySelector('.rides')

  for (let n=0; n<ride.length; n++){
      passenger=ride[n]
    if (ride.length>1) {
      levelofService = 'Noober Pool'
    } else if (ride[0].purpleRequested) {
      levelofService = 'Noober Purple'
    } else if (ride[0].numberOfPassengers>3) {
      levelofService = 'Noober XL'
    } else levelofService = 'Noober X'
  }


}

window.addEventListener('DOMContentLoaded', pageLoaded)

