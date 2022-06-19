// Add your code here
  function  submitData(name, email) {
    const subData = {
      name: "Steve",
      email: "steve@steve.com",
    };
    
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(subData),
    };
    
     fetch("http://localhost:3000/users", configurationObject)

      .then((response) => {
        return response.json();
      })
     .then((object) => {
      document.body.innerHTML = object["id"]
     })

     .catch( (error) => {
       document.body.innerHTML = error.message
     })
  }