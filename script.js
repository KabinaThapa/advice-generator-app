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
        const adviceElementId=document.getElementById('id')
        adviceElement.style.display=(adviceElement.style.display==='none')?'block':'none'
        adviceElementId.style.display=(adviceElementId.style.display==='none')?'block':'none'
        const image=document.getElementById('img')
        image.style.display=(image.style.display==='none')?'block':'none'




    })

    }

