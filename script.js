function handleClick(){
    fetch('https://api.adviceslip.com/advice')//fetch from the api url
    .then((response)=>response.json())
    .then(data=>{
        console.log(data)
        const adviceid=data.slip.id
        const advice=data.slip.advice
        document.getElementById('advice').textContent= advice
        document.getElementById('adviceid').textContent= adviceid
        const adviceElement=  document.getElementById('advice')
        adviceElement.style.display=(adviceElement.style.display==='none')?'block':'none'


    })

    }

