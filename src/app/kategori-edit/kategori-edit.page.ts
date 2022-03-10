import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from '../../providers/bll-ortak/bll-ortak';
import notify from 'devextreme/ui/notify';
import { DxTextBoxModule, DxFileUploaderModule, DxButtonModule } from 'devextreme-angular';
@Component({
  selector: 'app-kategori-edit',
  templateUrl: './kategori-edit.page.html',
  styleUrls: ['./kategori-edit.page.scss'],
})
export class KategoriEditPage implements OnInit {
aranan :"";
  kategori = {
    ID: -1,
   Kat_Adi :"",
   Kat_Aciklama:"",
   MedyaYolu :""
  }
  kategoriListesi = [];
  constructor(public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public bllOrtak: BllOrtakProvider,public router: Router) {
     
    
  } 

  ngOnInit() {
  }
  kapat()
  {
    this.router.navigate(['kategoriler']);
  }
  kategorilerMethod()
  {
    var formData = new FormData();
    formData.append("kat", this.aranan);
    this.bllOrtak.httpPost(formData, "Kategori", "KategoriAra").then(a => {
      var sonuc = <any>a;
      this.kategoriListesi = sonuc.SonucJSON;

    }) 
  }
  kategoriEkle() {
    
    var formData = new FormData();
    formData.append("kat", JSON.stringify(this.kategori));

    this.bllOrtak.httpPost(formData, "Kategori", "KategoriEkle").then(a => {
      var sonuc = <any>a;
      this.kategoriListesi = sonuc.SonucJSON;
      const loadingCtrl = this.loadingCtrl.create({
        message:'Lütfen bekleyiniz...',
        duration:750
      }).then(a=>{
        a.present();
      });
      if (sonuc.Sonuc == 1) {  
        setTimeout(() =>{
         
          this.router.navigate(['kategoriler']);
          this.kategorilerMethod();
        
        },1000);
     
        notify('Kayıt İşlemi Başarılı !', 'success', 600);
        this.modalCtrl.dismiss();
       
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




  resimYukle(fu) {
    // var sayfa = this;
    // fu.value.forEach(file => {
    //   var fileReader = new FileReader();
    //   fileReader.readAsDataURL(file);
    //   fileReader.onloadend = function () {
    //     let eklenecekMedya = {
    //       ID: -1,
    //       MedyaBase64: fileReader.result,
    //       UrunID: sayfa.kategori.ID,
        
    //     }
    //     if (sayfa.kategori.ID > 0) {
    //       var formData = new FormData();
    //       formData.append("medyaJson", JSON.stringify(eklenecekMedya));
          
    //       this.bllOrtak.httpPost(formData, "Kategori", "KategoriEkle").then(a => {
    //         const sonuc = a as any;
    //         sayfa.urunBilgisi.UrunMedyalari = sonuc;
    //         fu.value = [];
    //       });
    //     }
    //     else {
    //       sayfa.urunBilgisi.UrunMedyalari.push(eklenecekMedya);
    //       fu.value = [];
    //     }

    //   }


    // });

  }
}
