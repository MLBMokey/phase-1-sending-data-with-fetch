const body = document.querySelector("body")

function submitData(name, email){
    const newUser = {
        name: name,
        email:email
    }
    
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
    },
    body: JSON.stringify(newUser)
})

.then(res => res.json())

.then(function(userObj) {
    const div = document.createElement("div")
    div.textContent = userObj.id
    body.appendChild(div)
})

.catch(function() {
    const li = document.createElement("li")
    li.textContent = "Unauthorized Access"
    body.appendChild(li)
})}

