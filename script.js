const btnDark = document.getElementById('checkbox');
var darkMode = document.body;

btnDark.addEventListener('click', ()=>{

    if(btnDark.checked == true){

        darkMode.classList.toggle('dark-mode');

        darkMode.classList.remove('light-mode');


    }else if(btnDark.checked == false){

        darkMode.classList.remove('dark-mode');

        darkMode.classList.toggle('light-mode');
    }
});