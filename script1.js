// first target submit or post button

document.getElementById('submit-button').addEventListener('click', function () {

    // target text area #step-1
    const newComment = document.getElementById('new-comment');
    
    // container where comment will appear #step-2
    const commentBox = document.getElementById('comment-container');

    // create element  #step-3
    const createElement = document.createElement('p')
    createElement.innerText = newComment.value;

    // append element  #step-4

    commentBox.appendChild(createElement);

    // empty  text area #step-5

    newComment.value = ''
    
})