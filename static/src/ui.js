export class Ui{
    constructor(inputWordArea,outputWordArea,lastSearchListArea){
        self.inputWordArea = inputWordArea
        self.outputWordArea = outputWordArea
        self.lastSearchListArea = lastSearchListArea
    }
    
    clearInputWordArea(){
        self.inputWordArea.value = ""
    }

    clearOutputWordArea(){
        self.outputWordArea.value = ""
    }

    printOutputWordArea(inputWord,outputWord){
        self.outputWordArea.value = `${inputWord} --->>> ${outputWord}`
    }

    printAllSearchListToUi(searchListFromStorage){
        const searchList = searchListFromStorage
        self.lastSearchListArea.value = ""
        for (let index in searchList){
            self.lastSearchListArea.value += searchList[index] + "\n"
        }

    }
}
