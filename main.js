let url = `https://randomuser.me/api/?results=10`;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
    
    let results = myJson.results;
    const body = document.querySelector('body');
    let profileDiv = document.createElement('div');
    
    for(i=0; i<results.length; i++){
    
        let newImg = document.createElement('img');
        newImg.src = results[i].picture.medium;
        profileDiv.appendChild(newImg);
    
        let personName = document.createElement('p');
        personName.innerText = (results[i].name.first + " " + results[i].name.last);
        profileDiv.appendChild(personName);
    
        let gender = document.createElement('p');
        gender.innerText = (results[i].gender);
        profileDiv.appendChild(gender);
        
        let age = document.createElement('p');
        age.innerText = (results[i].dob.age);
        profileDiv.appendChild(age);
    
        let location = document.createElement('p');
        location.innerText = (results[i].location.country + " " + results[i].location.state + " " + results[i].location.city + " " + results[i].location.street.name + " " + results[i].location.street.number);
        profileDiv.appendChild(location);
    
        let contact = document.createElement('p');
        contact.innerText = (results[i].email);
        profileDiv.appendChild(contact);
    
        let contact2 = document.createElement('p');
        contact2.innerText = (results[i].phone);
        profileDiv.appendChild(contact2);
    
        profileDiv.classList.add('profileDiv');
        body.appendChild(profileDiv);
    }
    // for(const person of results){
    //     let profileDiv = document.createElement('div');
    
    //     let newImg = document.createElement('img');
    //     newImg.src = person.picture.medium;
    //     profileDiv.appendChild(newImg);
    
    //     let personName = document.createElement('h1');
    //     personName.innerText = (person.name.first + " " + person.name.last);
    //     profileDiv.appendChild(personName);
    
    //     let gender = document.createElement('h1');
    //     gender.innerText = (person.gender);
    //     profileDiv.appendChild(gender);
        
    //     let age = document.createElement('h1');
    //     age.innerText = (person.dob.age);
    //     profileDiv.appendChild(age);
    
    //     let location = document.createElement('h1');
    //     location.innerText = (person.location.country + " " + person.location.state + " " + person.location.city + " " + person.location.street.name + " " + person.location.street.number);
    //     profileDiv.appendChild(location);
    
    //     let contact = document.createElement('h1');
    //     contact.innerText = (person.email);
    //     profileDiv.appendChild(contact);
    
    //     let contact2 = document.createElement('h1');
    //     contact2.innerText = (person.phone);
    //     profileDiv.appendChild(contact2);
    
    //     profileDiv.classList.add('profileDiv');
    //     body.appendChild(profileDiv);
    // }
    });

