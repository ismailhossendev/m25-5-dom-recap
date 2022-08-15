let i = document.getElementsByTagName('h2');

for (let j of i) {
    j.style.color  = 'lightblue'
}
//this is called event handeler
function helloConsole() {
    console.log('hello Console')
}
function DisNone(event){
    event.style.display = 'none'
}


document.getElementById('input').addEventListener('keyup',function (email) {
    const value = email.target.value;
    const button = document.getElementById('submit');

    if (value == 'email') {
        button.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled',true)
    }

})

document.getElementById('main-img').addEventListener('mouseenter', function(imgMain){
    imgMain.target.src = 'demo-img/download.jpg'
})
document.getElementById('bg-cng').addEventListener('dblclick', function (bgCng) {
    bgCng.target.style.background = 'red'
})