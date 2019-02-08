# Yandex Translate API - Jvascript 

Yandex Translate Api kullanılarak,  
Türkçe - İngilizce çeviri yapan bir Javascript uygulamasıdır. 


- Html sayfasını oluşturulurken Bootstrap v4.2.1 kullandım.

- js dosyalarını birleştirirken webpack kullandum.

### Yöntem
Temel olarak Kullanıcının istediği kelimeyle, Yandex Translate Api'ye
uygun url oluşturulmuş. Çevirisi async await yapısıyla   
Yandex Translate Api'ye get request gönderilmiştir.
Dönen bilgi json verisi verisi olarak işlenmiş DOM Manüplasyonu ile 
html saydasına aktarılmıştır.

Veri Depolama için tarayıcının Local Storage alanı Kullanılmıştır.

4 adet js dosyasını birleştirmek için webpack ile bundle.js oluşturulmuştur.

### Uygulamadan Fotoğraflar

![Imgur1](https://i.imgur.com/9iP6DTU.png?1)


![Imgur2](https://i.imgur.com/tkYgvpd.png?1)

### Çalışma Ağacı - Kısa Açıklamalarla

```bash
.
├── option with babel settings      -->> webpack babel ile kullanılmak
│   ├── package.json                    > istenirse gereken ayar dosyaları
│   └── webpack.config.js
├── static                  -->> statik dosyaların bulunduğu klasör
│   ├── css                 -->> bootstrap css dosyası
│   │   └── bootstrap.min.css
│   ├── icon        -->> tarayıcı için icon dosyası
│   │   └── icon1.ico
│   ├── js
│   │   ├── bs4                 -->> bootstrap gerekli js dosyalı
│   │   │   ├── bootstrap.min.js
│   │   │   ├── jquery-3.3.1.slim.min.js
│   │   │   └── popper.min.js
│   │   └── bundles           -->> webpack ile oluşturulmuştur src klasöründeki  
│   │       └── bundle.js        > dosyalrın birleşmiş hali. index.htmle eklenen
│   └── src                  -->> geliştirme klasörü
│       ├── app.js           -->> temel dosyamız
│       ├── storage.js      -->> LocalStorage işlemleri sınıfını içeren dosya
│       ├── ui.js           -->> dom maniplasyonu yapan sınıfı içeren dosya
│       └── yta.js          -->> yandex tranlate api ile işlemleri yöneten dosya
├── README.md
├── index.html      -->> anasayfa
├── package.json       -->> npm ayar dosyası
└── webpack.config.js   -->> webpack ayar dosyası



```

## Çalıştırma
Uygulama bu haliyle çalışır durumdadır. Aşağıdaki komutla kopyalanıp
index.html'le çalıştırılabilir.

```
git clone https://github.com/demirtaserdem/yandex-translate-api-javascript.git 
```

## Geliştirme - Değiştirme
Geliştirme kısmında 4 dosya kullanılmıştır. webpack ile bundle.js de birleştirilmiştir.
```
src                  -->> geliştirme klasörü
├── app.js           -->> temel dosyamız
├── storage.js      -->> LocalStorage işlemleri sınıfını içeren dosya
├── ui.js           -->> dom maniplasyonu yapan sınıfı içeren dosya
└── yta.js          -->> yandex tranlate api ile işlemleri yöneten dosya
```

Değişiklik yapmak için node.js kurulu olması gerekmektedir

projenin indirilmesi
```
git clone https://github.com/demirtaserdem/yandex-translate-api-javascript.git 
```
package.json kllanıla webpack paketini yüklemek için
```
npm install
```  
webpacki çalıştırmak ve bundle.js dosyasını yeniden oluşturmak için 
```
npm run build
```
Komutları çalıştırılabilir.

### Çalışan uygulama
Aşağıdaki adrestedir
https://app3.erdemdemirtas.net 

### Yayın  ortamı
Amazon Ec2 - Route52 - Ubuntu 18.04 - nginx - letsencrypt kullanılarak hazırlanmıştır.

## Kaynak
[1] : https://tech.yandex.com/translate/

[2] : https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04

