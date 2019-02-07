import {Storage} from "./storage"
import {Ui} from "./ui"
import {Yta} from "./yta"

const formArea = document.getElementById("form-1")
const inputWordArea = document.getElementById("input_word")
const outputWordArea = document.getElementById("output_word")
const lastSearchListArea = document.getElementById("lastSearchListArea")
const clearAllSearchedBtn = document.getElementById("btn_clear") 

var ui = new Ui(inputWordArea,outputWordArea,lastSearchListArea);
var yta = new Yta();

eventListeners();

function eventListeners(){
    formArea.addEventListener("submit",translateWord);
    clearAllSearchedBtn.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearchList);
}

function translateWord(e){
    let inputWord = inputWordArea.value.trim()
    if (inputWord){
        yta.translateWord(inputWord)
        .then((response) =>{
            console.log(response)
            ui.clearInputWordArea()
            ui.printOutputWordArea(inputWord,response)
            Storage.addSearchedToStorage(inputWord,response)
            ui.printAllSearchListToUi(Storage.getSearchedFromStorage());
        })
        .catch(err => console.log(err))
    }
    ui.clearInputWordArea()
    e.preventDefault();
}

function clearAllSearched(e){
    Storage.clearAllSearchedFromStorage()
    ui.clearOutputWordArea();
    ui.printAllSearchListToUi(Storage.getSearchedFromStorage());
    e.preventDefault()
}

function getAllSearchList(){
    ui.printAllSearchListToUi(Storage.getSearchedFromStorage());
}