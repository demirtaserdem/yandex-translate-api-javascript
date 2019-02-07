export class Yta{
    constructor(){
        this.baseUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate"
        this.apiKey = "trnsl.1.1.20190121T100542Z.4befbb4bba198843.b6081dd6370342a5c61258dbb83fb7b9a58dd523"
        this.lang = "tr-en"

    }
    async translateWord(inputWord){
        this.inputWord = inputWord
        const url = `${this.baseUrl}?key=${this.apiKey}&lang=${this.lang}&text=${this.inputWord}`
        const responseTranslate = await fetch(url);
        const dataTranslate = await responseTranslate.json();
        return dataTranslate.text[0]
    }
}



