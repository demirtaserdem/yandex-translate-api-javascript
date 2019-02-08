export class Ui{
    constructor(inputWordArea,outputWordArea,lastSearchListArea){
        //Kullanılan DOM Seçimleri class'a aktarıldı
        self.inputWordArea = inputWordArea
        self.outputWordArea = outputWordArea
        self.lastSearchListArea = lastSearchListArea
    }
    
    clearInputWordArea(){
        //Giriş Kısmı temizlendi
        self.inputWordArea.value = ""
    }

    clearOutputWordArea(){
        // çıkış kısmını temizler
        self.outputWordArea.value = ""
    }

    printOutputWordArea(inputWord,outputWord){
        // Çıkış Kısmına yazar
        self.outputWordArea.value = `${inputWord} --->>> ${outputWord}`
    }

    printAllSearchListToUi(searchListFromStorage){
        // Tüm aranlanların listesini Aranlanlar listedi bölümüne
        // Yazar
        const searchList = searchListFromStorage
        self.lastSearchListArea.value = ""
        for (let index in searchList){
            self.lastSearchListArea.value += searchList[index] + "\n"
        }

    }
}
