let characters = document.querySelectorAll('.character__list .list__item')
let characterDescription = document.querySelector('.characters__description article p ');
const description = ['taiju oki', 'yuzuhira', 'tsukasa','lion', 'chrome'];

console.log(characters)
characters.forEach((element) => {

    element.addEventListener('mouseover', function(event) {
    
        for (let i = 0; i < characters.length; i++) {
            
            if (characters[i] === element) {
                characterDescription.innerText = description[i];
            }
        }
    })
    
})

