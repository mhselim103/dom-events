
// way 1

function changeColor() {  // will use mostly 
    // console.log(7);
    document.body.style.backgroundColor = 'red';
    
}
function changeColor1() {
    
    const clickingMethod = document.getElementById('innerText');
    clickingMethod.innerText = 'thanks for changing me'
    
    
}

// way 2 

const blueButton = document.getElementById('make-blue');

blueButton.onclick = changeColor; //only declare function name
// console.log(blueButton);




// way 3

// annonymous function  // nameless function & used for only one object or if no need in future
const greenButton = document.getElementById('green')

greenButton.onclick = function () {

    document.body.style.backgroundColor = 'green';

}


// way 4


function makeGolden() {
    document.body.style.backgroundColor = 'goldenrod'
}
const goldenButton = document.getElementById('golden')
// console.log(goldenButton);
goldenButton.addEventListener('click', makeGolden);



/// way 5

const hotpink = document.getElementById('hot-pink');
console.log(hotpink);
hotpink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink'

});


//shortcut
// most used 
document.getElementById('hot-pink').addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink'

});

// direct system 

document.getElementById('update-name').addEventListener('click', function () {
    const nameField = document.getElementById('namefield');
    const clickingMethod = document.getElementById('clicking-method');
    clickingMethod.innerText = nameField.value;
    nameField.value = '';
    
})