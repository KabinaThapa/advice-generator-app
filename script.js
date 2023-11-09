function handleClick(){
    fetch('https://api.adviceslip.com/advice')//fetch from the api url
    .then((response)=>response.json())
    .then(data=>{
        console.log(data.slip.advice)
        const advice=data.slip.advice
        document.getElementById('result').textContent= advice


    })

    }

