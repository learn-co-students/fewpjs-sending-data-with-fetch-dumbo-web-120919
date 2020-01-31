const pageBody = document.body;

function submitData(userName, userEmail) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    pageBody.append(json.id);
  })
  .catch(function(error) {
    pageBody.append(error.message);
  })
};