document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById("btnMenuHome");
    var sideMenu = document.getElementById("side-menu");

    menuButton.addEventListener("click", function() {
        sideMenu.classList.add("show-menu");
    });
});
let popup_shoulder = document.querySelector(".popup-shoulder");
let isShow_shoulder = true;
function showshoulder(){
    if(isShow_shoulder){
    popup_shoulder.style.display = "block";
    isShow_shoulder = false;
    }
    else{
        popup_shoulder.style.display = "none";
    isShow_shoulder = true;
    }
}
let popup_bicep = document.querySelector(".popup-bicep");
let isShow_biceps = true;
function showbicep(){
    if(isShow_biceps){
    popup_bicep.style.display = "block";
    isShow_biceps = false;
    }
    else{
        popup_bicep.style.display = "none";
    isShow_biceps = true;
    }
}
let popup_Triceps = document.querySelector(".popup-triceps");
let isShow_Triceps = true;

function showTriceps() {
    if (isShow_Triceps) {
        popup_Triceps.style.display = "block";
        isShow_Triceps = false;
    } else {
        popup_Triceps.style.display = "none";
        isShow_Triceps = true;
    }
}

let popup_Forearm = document.querySelector(".popup-forearm");
let isShow_Forearm = true;
function showForearm(){
    if(isShow_Forearm){
    popup_Forearm.style.display = "block";
    isShow_Forearm = false;
    }
    else{
        popup_Forearm.style.display = "none";
    isShow_Forearm = true;
    }
}
let popup_Upperchest = document.querySelector(".popup-upperchest");
let isShow_Upperchest = true;
function showUpperChest(){
    if(isShow_Upperchest){
    popup_Upperchest.style.display = "block";
    isShow_Upperchest = false;
    }
    else{
        popup_Upperchest.style.display = "none";
    isShow_Upperchest = true;
    }
}
let popup_Lowerchest = document.querySelector(".popup-lowerchest");
let isShow_Lowerchest = true;

function showlowerChest() {
    if (isShow_Lowerchest) {
        popup_Lowerchest.style.display = "block";
        isShow_Lowerchest = false;
    } else {
        popup_Lowerchest.style.display = "none";
        isShow_Lowerchest = true;
    }
}

let popup_Innerchest = document.querySelector(".popup-innerchest");
let isShow_Innerchest = true;
function showInnerChest(){
    if(isShow_Innerchest){
    popup_Innerchest.style.display = "block";
    isShow_Innerchest = false;
    }
    else{
        popup_Innerchest.style.display = "none";
    isShow_Innerchest = true;
    }
}
let popup_Middlechest = document.querySelector(".popup-middlechest");
let isShow_Middlechest = true;
function showMiddleChest(){
    if(isShow_Middlechest){
    popup_Middlechest.style.display = "block";
    isShow_Middlechest = false;
    }
    else{
        popup_Middlechest.style.display = "none";
    isShow_Middlechest = true;
    }
}
let popup_Trapezius = document.querySelector(".popup-trapezius");
let isShow_Trapezius = true;
function showTrapezius(){
    if(isShow_Trapezius){
    popup_Trapezius.style.display = "block";
    isShow_Trapezius = false;
    }
    else{
        popup_Trapezius.style.display = "none";
    isShow_Trapezius = true;
    }
}
let popup_Lats= document.querySelector(".popup-lats");
let isShow_Lats = true;
function showLats(){
    if(isShow_Lats){
    popup_Lats.style.display = "block";
    isShow_Lats = false;
    }
    else{
        popup_Lats.style.display = "none";
    isShow_Lats = true;
    }
}
let popup_Rhombodis = document.querySelector(".popup-rhombodis");
let isShow_Rhombodis = true;

function showRhomboids() {
    if (isShow_Rhombodis) {
        popup_Rhombodis.style.display = "block";
        isShow_Rhombodis = false;
    } else {
        popup_Rhombodis.style.display = "none";
        isShow_Rhombodis = true;
    }
}

let popup_Lowerback = document.querySelector(".popup-lowerback");
let isShow_Lowerback = true;
function showLowerBack(){
    if(isShow_Lowerback){
    popup_Lowerback.style.display = "block";
    isShow_Lowerback = false;
    }
    else{
        popup_Lowerback.style.display = "none";
    isShow_Lowerback = true;
    }
}
let popup_Upperabs = document.querySelector(".popup-upperabs");
let isShow_Upperabs = true;
function showUpperAbs(){
    if(isShow_Upperabs){
    popup_Upperabs.style.display = "block";
    isShow_Upperabs = false;
    }
    else{
        popup_Upperabs.style.display = "none";
    isShow_Upperabs = true;
    }
}
let popup_Lowerabs = document.querySelector(".popup-lowerabs");
let isShow_Lowerabs = true;
function showLowerAbs(){
    if(isShow_Lowerabs){
    popup_Lowerabs.style.display = "block";
    isShow_Lowerabs = false;
    }
    else{
        popup_Lowerabs.style.display = "none";
    isShow_Lowerabs = true;
    }
}
let popup_Quads= document.querySelector(".popup-quads");
let isShow_Quads = true;
function showQuads(){
    if(isShow_Quads){
    popup_Quads.style.display = "block";
    isShow_Quads = false;
    }
    else{
        popup_Quads.style.display = "none";
    isShow_Quads = true;
    }
}
let popup_Hamstrings = document.querySelector(".popup-hamstrings");
let isShow_Hamstrings = true;
function showHamstrings(){
    if(isShow_Hamstrings){
    popup_Hamstrings.style.display = "block";
    isShow_Hamstrings = false;
    }
    else{
        popup_Hamstrings.style.display = "none";
    isShow_Hamstrings = true;
    }
}
let popup_Glutes = document.querySelector(".popup-glutes");
let isShow_Glutes = true;
function showGlutes(){
    if(isShow_Glutes){
    popup_Glutes.style.display = "block";
    isShow_Glutes = false;
    }
    else{
        popup_Glutes.style.display = "none";
    isShow_Glutes = true;
    }
}
let popup_Claves = document.querySelector(".popup-claves");
let isShow_Claves = true;
function showClaves(){
    if(isShow_Claves){
    popup_Claves.style.display = "block";
    isShow_Claves = false;
    }
    else{
        popup_Claves.style.display = "none";
    isShow_Claves = true;
    }
}
let available=[
    'shoulders',
    'biceps',
    'triceps',
    'forearm',
    'upper chest',
    'lower Chest',
    'inner chest',
    'middle chest',
    'trapezius',
    'lats',
    'rhomboids',
    'lower back',
    'upper abs',
    'lower abs',
    'quads',
    'hamstrings',
    'glutes',
    'claves',
];

const resultsBox = document.querySelector(".result-box");
const inputBox= document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result=[];
    let input = inputBox.value;
    
    if(input.length){
        result = available.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());

        });
        console.log(result);
    }
    display(result)
    if(!result.length){
        resultsBox.innerHTML='';
    }
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>"

    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
