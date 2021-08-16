// github like delete confirmation button

document.getElementById('delete-btn').addEventListener('click', function () {
    document.getElementById('secret-info').style.display = 'none'
})
document.getElementById('delete-confirm').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red'
})
document.getElementById('delete-confirm').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white'
})

// key down 

/* document.getElementById('delete-confirm').addEventListener('keydown', function () {
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
}) */

// key press 

/* document.getElementById('delete-confirm').addEventListener('keypress', function () {
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
}) */


// we will always use keyup
// keyup 
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    // console.log(event.target.value);
    if (event.target.value == 'delete') {
        document.getElementById('delete-btn').removeAttribute('disabled');
        
    }
    else {
        document.getElementById('delete-btn').setAttribute('disabled', true);
    }
    
    
})

// change 
document.getElementById('delete-confirm').addEventListener('change', function () {
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
})