// Add your code here
function submitData(userName, userEmail) {

    let formData = {
        name: userName,
        email: userEmail
      };
    
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      }

    return fetch("http://localhost:3000/users", configObj)
            .then(r => r.json())
            .then(data => document.body.innerHTML = data.id)
            .catch(error => document.body.innerHTML = error.message)
            
}