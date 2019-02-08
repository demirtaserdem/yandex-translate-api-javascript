//Webpack için import dosyaları
import {Storage} from "./storage"
import {Ui} from "./ui"
import {Yta} from "./yta"

//DOM seçimleri
const formArea = document.getElementById("form-1")
const inputWordArea = document.getElementById("input_word")
const outputWordArea = document.getElementById("output_word")
const lastSearchListArea = document.getElementById("lastSearchListArea")
const clearAllSearchedBtn = document.getElementById("btn_clear") 

// class oluşturma
var ui = new Ui(inputWordArea,outputWordArea,lastSearchListArea);
var yta = new Yta();

// Kesici ayarları
eventListeners();

function eventListeners(){
    // Event ayarları ve uygulanacak fonksiyonlar
    formArea.addEventListener("submit",translateWord);
    clearAllSearchedBtn.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearchList);
}

function translateWord(e){
    //kelimeyi alır temizler
    let inputWord = inputWordArea.value.trim()
    if (inputWord){
        //Boşlık kontrolü yapar
        // async fonksiyonunu işletir. Dönen Response objesidir.
        yta.translateWord(inputWord)
        .then((response) =>{
            // giriş alanını temizler
            ui.clearInputWordArea()
            // Çıkış Alanına Kelimeyi çevivrisini yazar
            ui.printOutputWordArea(inputWord,response)
            // Local Storageye ekler
            Storage.addSearchedToStorage(inputWord,response)
            // SOn Arananlar listesini günceller yazar
            ui.printAllSearchListToUi(Storage.getSearchedFromStorage());
        })
        .catch(err => console.log(err))
    }
    //Aramadan sonra giriş alanı temizlenir
    ui.clearInputWordArea()
    //Submit yapılıp sayfanın yenilenmesini engeller
    e.preventDefault();
}

function clearAllSearched(e){
    //Son Arananları Storageden ve arayüzden temizler
    Storage.clearAllSearchedFromStorage()
    ui.clearOutputWordArea();
    ui.printAllSearchListToUi(Storage.getSearchedFromStorage());
    e.preventDefault()
}

function getAllSearchList(e){
    // ilk olarak Sayfa yüklendikten sonra 
    //storagede önceden veri varsa son arananlar listesine yazdırır
    ui.printAllSearchListToUi(Storage.getSearchedFromStorage());
}