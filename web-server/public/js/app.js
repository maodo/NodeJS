
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('.message-1')




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Cool 😄!')
    const loc = search.value
    url = '/weather?address='+loc
    fetch(url).then((response) => {
        if (response.ok) {
    
            response.json().then((data) => {
                if (data.error) {
                    console.log("😠 Do khol lingay def con ",data.error)

                    messageOne.innerHTML = "<p style='color: red;'>😠 Do khol lingay def con</p>"
                    search.value = ''
                }else{
                    console.log(data)
                    messageOne.innerHTML = " <p style='color: green;'> Location : "+data.location+"</p> <p style='color: green;'> Temperature : "+data.temperature+"</p> "
                    search.value = ''
                    console.log('Hi')
                }
            })
        }else {
            console.log('Mauvaise réponse du réseau');
          }
    }).catch((error) =>{
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    })
})