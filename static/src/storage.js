export class Storage{
    static getSearchedFromStorage(){
        // TÜm kullanıcıları al   
        let searchlist;
        if(localStorage.getItem("searchlist")===null){
            searchlist=[];
        }
        else{
            searchlist = JSON.parse(localStorage.getItem("searchlist"))
        }
        return searchlist;
    }

    static addSearchedToStorage(inputWord,outputWord){
        //Kullanıcı ekle
        let searchlist = this.getSearchedFromStorage();
        //indexof
        //önceden aranmış mı kontrol için kullanılabilir.
        // if(search.indexOf(${inputWord} --->>> ${outputWord})===-1){
        //     users.push(${inputWord} --->>> ${outputWord});
        // }
        //listenin başına ekleme yapma için
        searchlist = [`${inputWord} --->>> ${outputWord}`,...searchlist]
        localStorage.setItem("searchlist",JSON.stringify(searchlist));
    }

    static clearAllSearchedFromStorage(){
        localStorage.removeItem("searchlist");
    }
}
