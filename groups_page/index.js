
document.addEventListener('DOMContentLoaded', ()=>{
    

 document.querySelectorAll('.promise').forEach(promise =>{
    promise.addEventListener('click', () =>{
        window.location.href = './discoverGroups.html'
    })
})


document.querySelector('.left-header').addEventListener('click', () =>{
    window.location.href = './groups.html'

})

document.querySelector('.FacebookHeader').style.color = 'red'


})