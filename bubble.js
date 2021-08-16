
document.getElementById('second-li').addEventListener('click',function (event) {
    console.log('second item1 clicked');
    event.stopPropagation();  // stops bubble 
})
document.getElementById('second-li').addEventListener('click',function (event) {
    console.log('second item2 clicked');
    event.stopImmediatePropagation();  // stops here 
})
document.getElementById('second-li').addEventListener('click',function (event) {
    console.log('second item3 clicked');
   
})
document.getElementById('second-li').addEventListener('click',function (event) {
    console.log('second item4 clicked');
   
})

// ul 
document.getElementById('list-container').addEventListener('click',function () {
    console.log('ul clicked');
})
document.getElementById('section-container').addEventListener('click',function () {
    console.log('section clicked');
})