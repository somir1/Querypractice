var pTag = document.querySelectorAll("p");

function getColor(element){
    console.log(element.value);
    for(var i = 0; i<pTag.length;i++){
        if(i % 2 == 1){
            pTag[i].style.color = element.value;
        }
    }
}