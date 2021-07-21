 const weatherform=document.querySelector('form')
    const search=document.querySelector('input')
    const message_one=document.getElementById("message_one")
    const message_two=document.getElementById("message_two")
    
    weatherform.addEventListener('submit',(e)=>{
        e.preventDefault()       
        const location=search.value
        message_one.textContent=""
        message_two.textContent=""

    fetch('http://localhost:3000/weather?address='+ location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                message_one.textContent=data.error
            }else{
                message_one.textContent=data.location
                message_two.textContent=data.forecast
            }
         
        })
    })
})
