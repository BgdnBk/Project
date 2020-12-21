const BASE_URL = 'https://callboard-backend.herokuapp.com';

const headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append(
  'Authorization',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
);

function getShortInfoById(userId) {
    
    return fetch(`${BASE_URL}/user/${userId}`,{
  method: 'GET',
  headers: headers,
})
        .then(response => response.json())
        .then(data => {
            let shortInfo = data;
            console.log(shortInfo);
        })
        .catch(error => console.log('Invalid userId. Must be a MongoDB ObjectId', error));
}
/* getShortInfoById(); */




function getInfo() {
    
   return fetch(`${BASE_URL}/user`,{
  method: 'GET',
  headers: headers,
})
        .then(response => response.json())
        .then(data => {
            let allInfo = data;
            console.log(allInfo);
        })
        .catch(error => console.log('No token provided', error));
     
}
/* getInfo(); */

function addToFavorites(callId) {
    
   return fetch(`${BASE_URL}/call/favourite/${callId}`,{
  method: 'POST',
  headers: headers,
})
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('Invalid session', error));
}
/* addToFavorites(4); */
function removeCallToFavorites(callId) {
    
   return fetch(`${BASE_URL}/call/favourite/${callId}`,{
  method: 'DELETE',
  headers: headers,
})
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('Invalid session', error));
}