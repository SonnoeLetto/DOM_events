// const $cube = document.querySelector('div');
// let count = 0;
// function changeColor() {
//     let computedStyle = getComputedStyle($cube);
//     // alert(computedStyle.backgroundColor)
//     console.log(computedStyle.backgroundColor)
//     if ((computedStyle.backgroundColor === 'rgb(255, 255, 255)')||(computedStyle.backgroundColor === 'rgb(255, 255, 0)')) {
//         $cube.style.backgroundColor = 'blue'
//     } else if (computedStyle.backgroundColor === 'rgb(0, 0, 255)') {
//         $cube.style.backgroundColor = 'rgb(0, 255, 0)'
//     } else if (computedStyle.backgroundColor === 'rgb(0, 255, 0)') {
//         $cube.style.backgroundColor = 'rgb(255, 255, 0)'
//     }
//     console.log(e.target)
// }
// $cube.addEventListener('click', changeColor)





// ===================================================================================================

function changeColor(e) {
    const $el = e.target
    let computedStyle = getComputedStyle($el);
    const $wrap = document.querySelector('.wrapper')

    if ((computedStyle.backgroundColor === 'rgb(255, 255, 255)')||(computedStyle.backgroundColor === 'rgb(255, 255, 0)')) {
        $el.style.backgroundColor = 'rgb(0, 0, 255)'
        $wrap.append($el)
    } else if (computedStyle.backgroundColor === 'rgb(0, 0, 255)') {
        $el.style.backgroundColor = 'rgb(0, 255, 0)'
        $wrap.append($el)
    } else if (computedStyle.backgroundColor === 'rgb(0, 255, 0)') {
        $el.style.backgroundColor = 'rgb(255, 255, 0)'
        $wrap.append($el)
    }
}
const $cube_items = document.querySelectorAll('.cube');
$cube_items.forEach((el) => el.addEventListener('click', changeColor))

// ===================================================================================================



function toggleClass(element, new_class) {
    const $elem = document.getElementById(element);
    let new_array = $elem.className.split(' ');


    let myIndex = new_array.findIndex((el) => el === new_class);
    console.log(myIndex)
    if (myIndex === -1) {
        new_array.push(new_class)
    } else {
        new_array.splice(myIndex, 1)
    }
    
    let getClass = new_array.join(' ')
    console.log(getClass)
    $elem.className = getClass

}
toggleClass('my_id', 'grisha')

