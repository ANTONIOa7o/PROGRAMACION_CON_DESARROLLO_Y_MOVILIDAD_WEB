

function inicio() {
    event.style.opacity="0.6";
    
}

function fin() {

    event.target.style.opacity="1";
    
}
function hacia(){
    event.target.style.border="5px solid #aaa";
    event.preventDefault(); 
}

function ir() {
    event.target.style.border="none"; 

}

function aqui() {
    event.target.appendChild(document.getElementById('arrastra'));
    event.target.style.border="none";
}