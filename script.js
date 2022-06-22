const button = document.querySelector('button');

button.addEventListener('click', onClick);
function onClick(e){
    console.log('Button clicked!');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}