/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ d.getMonth()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=6d5c48564cde90c9884a2c9d32cc6b2a&units=metric';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(){
  // User input info
  const zipCode =  document.getElementById('zip').value;
  const userFeelings = document.getElementById('feelings').value;
  weatherMap(baseURL,zipCode, apiKey)
  .then(function (apiData) { // Chain Promise for POST request
    console.log(apiData);
    postData('/add', {date:d, temp:apiData.main.temp, content:userFeelings})
    .then(function () { // Another Chain Promise for UI
      retrieveData();  // Update UI dynamically
    })
  })
}

/* Function to GET Web API Data*/
const weatherMap = async (baseURL, zipCode, apiKey) => { 
  const res = await fetch (baseURL+zipCode+apiKey);
  console.log(res);
  try {
    // Transform into JSON
    const data = await res.json();
    console.log(data);
    return data;
  }
  catch(error) {
    console.log('error', error);
    // appropriately handle the error
  }
};

/* Function to POST data */
const postData = async ( url = '', userData = {})=> {
  const res = await fetch (url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData) // body data type must match "Content-Type" header 
  });
  try {
    // Transform into JSON
    const newPostData = await res.json();
    console.log(newPostData);
    return newPostData;
  }
  catch(error) {
    console.log('error', error);
    // appropriately handle the error
  }
};

/* Function to GET Project Data */
const retrieveData = async () =>{
  const req = await fetch('/all');
  try {
    // Transform into JSON
    const allData = await req.json()
    // Write updated data to DOM elements
    document.getElementById('date').innerHTML = `Date: ${allData.date}`;
    document.getElementById('temp').innerHTML = 'Temperature: ' + Math.round(allData.temp)+ ' degrees';
    document.getElementById('content').innerHTML = `I am feeling ${allData.content}`;
  }
  catch(error) {
    console.log('error', error);
    // appropriately handle the error
  }
};
