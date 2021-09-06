const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".data_container");

class item{

    // create to do

createDiv(){

}


//edit todo

edit(){

}

//remove todo

remove(){

}

}

function check(){
    if(input.value !=' ')
    {

        new item(input.value);
        input.value = " ";
    }
}
addButton.addEventListener('click',check);
