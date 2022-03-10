import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router,ActivatedRoute } from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-makale-edit',
  templateUrl: './makale-edit.page.html',
  styleUrls: ['./makale-edit.page.scss'],
})
export class MakaleEditPage implements OnInit {
makaleListesi=[];
makale = 
{
  ID:-1,
  Mak_Baslik:"",
  Mak_Icerik:"",
  Mak_Tarih: new Date(),
  Mak_Yazar:-1,
  Kat_ID:-1
}
kullaniciListesi = [];
aranan="";
kategoriListesi=[];
editorValueType="";
valueContent="";
htmlEditor1 = true;
  constructor(public router: Router,public activatedRoute: ActivatedRoute, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }


  ngOnInit() {
    this.makalelerMethod();
    this.kategoriListesiGet();
    this.kullaniciListesiGet();
  
    
    
  }

  
  
  kategoriListesiGet()
  {
    
    var formData = new FormData();
    formData.append("kat", this.aranan);
    this.bllOrtak.httpPost(formData, "Kategori", "KategoriAra").then(a => {
      const sonuc = <any>a;
      this.kategoriListesi = sonuc.SonucJSON;

    }) 
  }
  kullaniciListesiGet()
  {
    var formData = new FormData();
    formData.append("user","");
    this.bllOrtak.httpPost(formData, "Kullanici", "KullaniciAra").then(a => {
      const sonuc = <any>a;
      this.kullaniciListesi = sonuc.SonucJSON;

    })
  }
  makalelerMethod() {
    var formData = new FormData();
    formData.append("mak", this.aranan);
    this.bllOrtak.httpPost(formData, "Makale", "MakaleAraView").then(a => {
      var sonuc = <any>a;
      this.makaleListesi = sonuc.SonucJSON;

    }) 
  }
  makaleEkle()
  {
    var formData = new FormData();
    formData.append("mak_json", JSON.stringify(this.makale));

    this.bllOrtak.httpPost(formData, "Makale", "MakaleEkleGuncelle").then(a => {
      var sonuc = <any>a;
      this.makaleListesi = sonuc.SonucJSON;
      const loadingCtrl = this.loadingCtrl.create({
        message:'Lütfen bekleyiniz...',
        duration:750
      }).then(a=>{
        a.present();
      });
      if (sonuc.Sonuc == 1) { 
        setTimeout(() =>{
          this.router.navigate(['makaleler']);
          this.makalelerMethod();
        
        },1000);
        
        notify('Kayıt İşlemi Başarılı !', 'success', 600);
        this.makalelerMethod(); 
      
        
      }
      else if (sonuc.Sonuc == 99) {
        alert("başarısız");
        notify('Bir Hata Oluştu !!!', 'danger', 600);
      }
      else {

      } 
      this.loadingCtrl.dismiss();
    })

  }
  onValueTypeChanged({ addedItems }) {
    this.editorValueType = addedItems[0].text.toLowerCase();
    this.makale.Mak_Icerik = this.editorValueType;
}

valueChange(value) {
    this.valueContent = value;
}



}
