//мой скрипт
// document.addEventListener("DOMContentLoaded", function () {}
//ButtonBackward.onclick=function(){};//повесила событие onclick

//правая кнопка
var ButtonBackward = document.querySelectorAll('.arrow-backward');//селектор это массив элементов
for (var i = 0; i < ButtonBackward .length; i++) {
    //console.log(ButtonBackward [i]);//циклом выводим html элементы из массива
    console.log("ButtonBackward1",ButtonBackward[i]);

    //при клике выводятся следующие 3 картинки
    ButtonBackward[i].addEventListener('click', function () {
        // querySelectorAll возвращает объект NodeList (НЕ МАССИВ)
        var sliderLis = document.querySelectorAll(".slider li:not(.hidden)");//выбрать li у которых нету класса hidden
console.log("ButtonBackward2",sliderLis.length);
        //мой код
        var exm = sliderLis.length - 3;
        if (exm > 3) {
            exm = 3;
        }
        console.log('ButtonBackward3', exm);
        sliderLis.forEach(function(li, key) {
            if(key < exm){
                li.classList.add('hidden');
            }
        });
    });
}

//левая кнопка
var ButtonForward = document.querySelectorAll('.arrow-forward');
for (var i = 0; i < ButtonForward.length; i++) {
    //console.log(ButtonForward[i]);//циклом выводим html элементы из массива
    console.log('ButtonForward1', ButtonForward[i]);

    //при клике выводятся следующие 3 картинки
    ButtonForward[i].addEventListener('click', function () {
        // querySelectorAll возвращает объект NodeList (НЕ МАССИВ)
        var sliderLis = document.querySelectorAll(".slider li.hidden");//выбрать li у которых есть класс hidden
        console.log('ButtonForward2', sliderLis.length);
        //мой код
        var exm = sliderLis.length-4;
        if(exm > 3){
            exm = 3;
        }

        console.log('ButtonForward3', exm);

        sliderLis.forEach(function(li, key) {
            if(key > exm){
                li.classList.remove('hidden');
            }
        });
    });

}



