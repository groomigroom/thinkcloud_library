const train = document.querySelectorAll('.culture_hangsa_img>img');
let count = 0;
setInterval(function () {
    count++;
    if (count > 1) {
        count = 0;
    }
    for (let i = 0; i < train.length; i++) {
        train[i].classList.remove('on');
    }
    train[count].classList.add('on');
}, 2500);

const train_two = document.querySelectorAll('.culture_hangsa_img_two>img');
let count_two = 0;
setInterval(function () {
    count_two++;
    if (count_two > 1) {
        count_two = 0;
    }
    for (let i = 0; i < train_two.length; i++) {
        train_two[i].classList.remove('on');
    }
    train_two[count_two].classList.add('on');
}, 2500);

function showPage(page_for_show) {
    document.querySelectorAll('.page_select').forEach(function (pa) {
        pa.style.display = 'none';
        document.getElementById(page_for_show).style.display = 'block';
    });
}
