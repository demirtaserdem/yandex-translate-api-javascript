export class Storage{
    static getSearchedFromStorage(){
        // tüm Arananları alır liste olarak döner  
        let searchlist;
        if(localStorage.getItem("searchlist")===null){
            searchlist=[];
        }
        else{
            searchlist = JSON.parse(localStorage.getItem("searchlist"))
            console.log(localStorage.getItem("searchlist"))
        }
        return searchlist;
    }

    static addSearchedToStorage(inputWord,outputWord){
        //Aranan ekle
        let searchlist = this.getSearchedFromStorage();
        //indexof
        //önceden aranmış mı kontrol için kullanılabilir.
        // if(search.indexOf(${inputWord} --->>> ${outputWord})===-1){
            //     users.push(${inputWord} --->>> ${outputWord});
            // }
        //listenin başına ekleme yapma için
        searchlist = [`${inputWord} --->>> ${outputWord}`,...searchlist]
        //"searchlist" keyli searchlist olarak yazar
        localStorage.setItem("searchlist",JSON.stringify(searchlist));
    }

    static clearAllSearchedFromStorage(){
        //Listayi Storageden Kaldırır
        localStorage.removeItem("searchlist");
    }
}
