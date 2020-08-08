const $share = document.querySelector('.usuario');
const $share_dark = document.querySelector('.container__share');

/*      BUTTON      */
const $button_share = document.querySelector('.container__icon');
const $button_shareoff = document.querySelector('.container__icon-dark');

function openShare() {
    $share.style.display= "none";
    $share_dark.style.display = "flex";
}

function closeShare() {
    $share_dark.style.display = "none";
    $share.style.display= "flex";
}

$button_share.addEventListener("click", openShare);
$button_shareoff.addEventListener("click", closeShare);