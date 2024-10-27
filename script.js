const userInput=document.querySelector("#input")

const mainInfo  =document.querySelector(".mainInfo")
const button=document.querySelector("button")
const bio  =document.querySelector("#bio")
const repo  =document.querySelector("#repo")
const followers  =document.querySelector("#followers")
const following  =document.querySelector("#following")


// const userName=userInput.value;

const searchUserr=(userName)=>{
    console.log(userInput.value);
    
    fetch(`https://api.github.com/users/${userName}`)
    .then((data) => data.json())
    .then((jsonData) => {
        if(jsonData.message==='Not found'){
            alert(" User not found")
        }else{
        console.log(jsonData.name);
        mainInfo.innerHTML = `

        <img src="${jsonData.avatar_url}" alt="avatar" id="profilePic">
        <span class="name" id="name">${jsonData.name}</span>
        <a href="${jsonData.html_url}" id="username">@${jsonData.login}</a>

`

bio.innerHTML = jsonData.bio ? jsonData.bio : 'No bio available.';
repo.innerHTML = jsonData.public_repos;
followers.innerHTML = jsonData.followers;
following.innerHTML = jsonData.following;
}
})
.catch((err) => {
    console.log(`Catch: ${err.message}`);
});
}


const getUser = () => {
    const userName = userInput.value.trim();
  
    if (userName.length === 0) {
      alert('Please enter a valid GitHub username');
    } else {
      searchUserr(userName);
    }
  
    userInput.value = '';
  };

button.addEventListener('click',getUser)
