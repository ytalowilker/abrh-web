webpackJsonp([0],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_news_service_news_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_component_helper_component_helper_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_parameter_helper_parameter_helper_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, componentHelperService, parameterHelperService, newsService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.componentHelperService = componentHelperService;
        this.parameterHelperService = parameterHelperService;
        this.newsService = newsService;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl.swipeEnable(true);
    }
    HomePage.prototype.openLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    HomePage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.openLoading();
        this.news = this.newsService.GetFirstNews();
        this.closeLoading();
    };
    HomePage.prototype.moreNotice = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__news_news__["a" /* NewsPage */]);
    };
    HomePage.prototype.showToast = function () {
        this.componentHelperService.presentToast("teste 1001");
    };
    HomePage.prototype.showLoading = function () {
        var loading = this.componentHelperService.presentLoading();
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    HomePage.prototype.showAlert = function () {
        this.componentHelperService.presentAlert("Teste Title", "Teste Subt");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="home detail-bg">\n\n  <img padding class="img" src="../../assets/imgs/marca_congreparh.png" />\n\n  <div class="border-bottom" style="text-align: center; padding: 8px; background-color: rgba(196, 193, 193, 0.459)">\n\n    <span ion-text color="dark" class="bold">ÚLTIMAS NOTÍCIAS</span>\n\n  </div>\n\n  <ion-card class="animated fadeInDown" *ngFor="let notice of news | async">\n\n      <div style="color: rgb(255, 255, 255)" class="padding-sm dark-bg">\n\n          {{ notice.datetime }}h\n\n        </div>\n\n    <img src="{{notice.img}}">\n\n    <ion-card-content>\n\n      <h2 text-justify>\n\n        <b>{{ notice.title }}</b>\n\n      </h2>\n\n      <button start color="info"  (click)="moreNotice()" ion-button small>\n\n        Mais Notícias...\n\n      </button>\n\n\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!--\n\n    <button ion-button block (click)="showToast();">Toast</button>\n\n    <button ion-button block (click)="showLoading();">Loading</button>\n\n    <button ion-button block (click)="showAlert();">Alert</button>\n\n  -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */], __WEBPACK_IMPORTED_MODULE_4__providers_parameter_helper_parameter_helper_service__["a" /* ParameterHelperService */], __WEBPACK_IMPORTED_MODULE_0__providers_news_service_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_news_service_news_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_component_helper_component_helper_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NewsEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsEditPage = /** @class */ (function () {
    function NewsEditPage(navCtrl, navParams, formBuilder, service, componentHelperService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.componentHelperService = componentHelperService;
        this.loadingCtrl = loadingCtrl;
        this.titleEdit = "Ola mundo";
        this.imgs = {
            "0": "https://firebasestorage.googleapis.com/v0/b/abrh-congreparh.appspot.com/o/news%2FwelcomeABRH.jpg?alt=media&token=3b9e2cb4-cb6e-40e4-986a-79375396251a",
            "1": "https://firebasestorage.googleapis.com/v0/b/abrh-congreparh.appspot.com/o/news%2Fevent_1.jpg?alt=media&token=046e4b03-afa9-4e6f-906d-55780a0ff681",
            "2": "https://firebasestorage.googleapis.com/v0/b/abrh-congreparh.appspot.com/o/news%2Fevent_2.jpg?alt=media&token=ee26d7e3-e808-433a-a890-0fb155dc1914",
            "3": "https://firebasestorage.googleapis.com/v0/b/abrh-congreparh.appspot.com/o/news%2Fnoticias1.png?alt=media&token=96da4cb2-4b0a-4d2d-b3ec-a4ca8133cc40",
            "4": "https://firebasestorage.googleapis.com/v0/b/abrh-congreparh.appspot.com/o/news%2Fnoticias2.jpg?alt=media&token=af37ae29-d352-43a8-af5d-cceb48b381b3",
            "5": "https://firebasestorage.googleapis.com/v0/b/abrh-congreparh.appspot.com/o/news%2Fnoticias3.jpeg?alt=media&token=b593aba2-aab1-4ad3-b89d-0943de80bb80",
            "6": "https://firebasestorage.googleapis.com/v0/b/abrh-congreparh.appspot.com/o/news%2Fnoticias5.jpg?alt=media&token=afd5e4b7-f953-4e04-92ef-f15901b122b3",
            "7": "https://firebasestorage.googleapis.com/v0/b/abrh-congreparh.appspot.com/o/news%2Fnoticias6.jpg?alt=media&token=2e1b1e38-287f-4c00-be1c-9c1d1d9a3b32"
        };
        this.notice = navParams.data.notice || {};
        if (this.notice.key != null) {
            this.titleEdit = "Editar notícia";
        }
        else {
            this.titleEdit = "Adicionar nova notícia";
        }
        this.imgSelect = this.imgs["0"];
        this.createForm();
    }
    NewsEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsEditPage');
    };
    NewsEditPage.prototype.openLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    NewsEditPage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    NewsEditPage.prototype.createForm = function () {
        this.openLoading();
        var date = new Date();
        this.form = this.formBuilder.group({
            key: [this.notice.key],
            img: [this.imgSelect],
            title: [this.notice.title, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["f" /* Validators */].required],
            content: [this.notice.content, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["f" /* Validators */].required],
            timestamp: [-(Date.now())],
            datetime: [(date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString() + " - " + date.getHours().toString() + ":" + date.getMinutes().toString())]
        });
        this.closeLoading();
    };
    NewsEditPage.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service.SaveNew(this.form.value);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */]);
            this.componentHelperService.presentToast("Sucesso!");
        }
    };
    NewsEditPage.prototype.noticeRemove = function (key) {
        if (key) {
            this.service.RemoveNew(key);
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */]);
        this.componentHelperService.presentToast("Notícia removida com sucesso!");
    };
    NewsEditPage.prototype.selectImg = function (id) {
        this.imgSelect = this.imgs[id];
        this.form.value.img = this.imgs[id];
    };
    NewsEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-news-edit',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\news-edit\news-edit.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Notícias</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="detail-bg">\n\n  <ion-card>\n\n    <div text-center class="light-bg">\n\n      <ion-title padding>\n\n        {{ titleEdit }}\n\n      </ion-title>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n      <form [formGroup]="form">  \n\n        <ion-segment color="primary">\n\n        <ion-segment-button value="img1" (ionSelect)="selectImg(0)">\n\n          1\n\n        </ion-segment-button>\n\n        <ion-segment-button value="img2" (ionSelect)="selectImg(1)">\n\n          2\n\n        </ion-segment-button>\n\n        <ion-segment-button value="img3" (ionSelect)="selectImg(2)">\n\n          3\n\n        </ion-segment-button>\n\n        <ion-segment-button value="img4" (ionSelect)="selectImg(3)">\n\n          4\n\n        </ion-segment-button>\n\n        <ion-segment-button value="img5" (ionSelect)="selectImg(4)">\n\n          5\n\n        </ion-segment-button>\n\n        <ion-segment-button value="img6" (ionSelect)="selectImg(5)">\n\n          6\n\n        </ion-segment-button>\n\n        <ion-segment-button value="img7" (ionSelect)="selectImg(6)">\n\n          7\n\n        </ion-segment-button>\n\n        <ion-segment-button value="img8" (ionSelect)="selectImg(7)">\n\n          8\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n        <ion-item>\n\n          <ion-label color="dark" floating>Titulo</ion-label>\n\n          <ion-input type="text" formControlName="title"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="dark" floating>Descrição</ion-label>\n\n          <ion-textarea type="text-area" formControlName="content"></ion-textarea>\n\n        </ion-item>\n\n        <div padding>\n\n          <button ion-button color="unique" block type="submit" (click)="onSubmit()">Enviar</button>\n\n        </div>\n\n      </form>\n\n      <img src="{{imgSelect}}">\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\news-edit\news-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__providers_news_service_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_5__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], NewsEditPage);
    return NewsEditPage;
}());

//# sourceMappingURL=news-edit.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgrammingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_parameter_helper_parameter_helper_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_programming_detail_programming__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_component_helper_component_helper_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_event__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProgrammingPage = /** @class */ (function () {
    function ProgrammingPage(navCtrl, navParams, componentHelperService, eventProvider, loadingCtrl, localNotifications, parameterHelperService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.componentHelperService = componentHelperService;
        this.eventProvider = eventProvider;
        this.loadingCtrl = loadingCtrl;
        this.localNotifications = localNotifications;
        this.parameterHelperService = parameterHelperService;
        //Iniciar a page na tela Agenda do Evento
        this.programmings = "agenda_evento";
        this.days = "day1";
        this.my_days = "my_day1";
        this.order = 'id';
        this.esconde19 = false;
        this.my_lista_eventos = new Array();
        this.lista_eventos = new Array();
        this.lista_eventos2 = new Array();
    }
    ProgrammingPage.prototype.escondeDia19 = function (date) {
        if (this.convertDay(date) == '19') {
            this.esconde19 = true;
        }
    };
    ProgrammingPage.prototype.openLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    ProgrammingPage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    ProgrammingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.parameterHelperService.getParameter("my_lista_eventos")
            .then(function (data) {
            if (data) {
                _this.my_lista_eventos = data;
            }
        });
        this.openLoading();
        this.eventProvider.getAllEvent().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista_eventos = objeto_retorno;
            console.log(objeto_retorno);
            _this.closeLoading();
        }, function (error) {
            console.error(error);
            _this.closeLoading();
        });
    };
    ProgrammingPage.prototype.convertDate = function (date) {
        var dateArray = date;
        var newDate = dateArray[11] + dateArray[12] + ':' + dateArray[14] + dateArray[15];
        return newDate;
    };
    ProgrammingPage.prototype.convertDay = function (date) {
        var dateArray = date;
        var newDate = dateArray[0] + dateArray[1];
        return newDate;
    };
    //Vai para página de detalhes enviando o ID
    ProgrammingPage.prototype.goDetails = function (evento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_programming_detail_programming__["a" /* DetailProgrammingPage */], { id: evento.id });
    };
    ProgrammingPage.prototype.removeEvent = function (evento) {
        var _this = this;
        var i = 0;
        this.my_lista_eventos.forEach(function (myEvento) {
            if (myEvento.id == evento.id) {
                _this.my_lista_eventos.splice(i, 1);
                _this.localNotifications.clear(evento.id);
            }
            i++;
        });
        this.parameterHelperService.setParameter("my_lista_eventos", this.my_lista_eventos);
    };
    ProgrammingPage.prototype.eventAddMessage = function (evento) {
        var _this = this;
        var flag = false;
        this.my_lista_eventos.forEach(function (myEvento) {
            if (myEvento.id == evento.id) {
                flag = true;
            }
        });
        if (!flag) {
            this.my_lista_eventos.push(evento);
            this.parameterHelperService.setParameter("my_lista_eventos", this.my_lista_eventos);
            var notifications_1 = [];
            this.localNotifications.getAll()
                .then(function (data) {
                notifications_1 = data;
                var date = new Date(evento.datainicio.split("/")[1] + "/" + evento.datainicio.split("/")[0] + "/" + evento.datainicio.split("/")[2]);
                if (notifications_1.length > 0) {
                    _this.localNotifications.cancelAll();
                    notifications_1.push({ id: evento.id, text: evento.titulo + ' vai começar em 10 minutos', trigger: { at: new Date(date.getTime() - 60000 * 10) } });
                    _this.localNotifications.schedule(notifications_1);
                }
                else {
                    _this.localNotifications.schedule([{
                            id: evento.id, text: evento.titulo + ' vai começar em 10 minutos', trigger: { at: new Date(date.getTime() - 60000 * 10) }
                        }]);
                }
                _this.componentHelperService.presentToast("Adicionado na agenda com sucesso!");
            });
        }
        else {
            this.componentHelperService.presentToast("Evento já está na sua agenda!");
        }
    };
    ProgrammingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-programming',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\programming\programming.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Programação</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="programmings detail-bg">\n\n  <!--<div class="event card" *ngFor="let event of events" tappable margin-bottom>\n\n    <div class="background" [ngStyle]="{\'background-image\': \'url(\' + event.thumb + \')\'}">\n\n      <div class="background-filter rlt">\n\n        <div class="align-bottom" padding-left padding-right>\n\n          <h6 class="pull-left text-white" ion-text>{{ event.name }}</h6>\n\n          <div class="clear"></div>\n\n        </div>\n\n        <ion-fab right top (click)="openGoogleMaps()">\n\n          <button ion-fab mini color="dark">\n\n            <ion-icon name="pin"></ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n      </div>\n\n    </div>\n\n    <div class="padding-sm dark-bg">\n\n      <ion-icon name="time" class="text-white"></ion-icon>\n\n      <span ion-text class="text-white">{{ event.time }}</span>\n\n      <span class="pull-right" ion-text color="light">16/09/2018</span>\n\n    </div>\n\n  </div>-->\n\n  <div>\n\n    <ion-segment color="light" [(ngModel)]="programmings">\n\n      <!--<ion-segment-button style="background-color: rgb(29, 29, 29)" value="minha_agenda">\n\n        Minha Agenda\n\n      </ion-segment-button>-->\n\n      <ion-segment-button style="background-color: rgb(29, 29, 29)" value="agenda_evento">\n\n        Agenda do Evento\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n  <div [ngSwitch]="programmings">\n\n    <!--MINHA AGENDA\n\n    <ion-list *ngSwitchCase="\'minha_agenda\'">\n\n      <div padding>\n\n        <ion-segment color="light" [(ngModel)]="my_days">\n\n          <ion-segment-button style="background-color: rgb(29, 29, 29)" value="my_day1">\n\n            <ion-icon mini name="md-calendar"></ion-icon>\n\n            19 Setembro\n\n          </ion-segment-button>\n\n          <ion-segment-button style="background-color: rgb(29, 29, 29)" value="my_day2">\n\n            <ion-icon mini name="md-calendar"></ion-icon>\n\n            20 Setembro\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n      -->\n\n      <!--MINHA AGENDA DIA 19\n\n      <div [ngSwitch]="my_days">\n\n        <ion-list *ngSwitchCase="\'my_day1\'">\n\n          <div *ngFor="let evento of my_lista_eventos | orderBy: order">\n\n            <div *ngIf="convertDay(evento.datainicio) == 19">\n\n              <ion-card class="animated fadeInDown">\n\n                <ion-card-content color="dark">\n\n                  <ion-row>\n\n                    <ion-col col-10>\n\n                      <h2>\n\n                        <b text-justify>{{evento.titulo}}</b>\n\n                      </h2>\n\n                      <ion-badge color="unique">{{evento.palestrante.nome}}</ion-badge>\n\n                    </ion-col>\n\n                    <ion-col col-2>\n\n                      <button class="btn-details" icon-only (click)="goDetails(evento);" clear ion-button color="dark">\n\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n                      </button>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-card-content>\n\n                <div class="padding-sm dark-bg">\n\n                  <ion-grid style="text-align: center">\n\n                    <ion-row>\n\n                      <ion-col col-5>\n\n                        <span ion-text class="text-dark">\n\n                          <ion-badge color="light">\n\n                            <ion-icon start name="md-time" class="text-dark"></ion-icon>\n\n                            <b>Início:</b> {{convertDate(evento.datainicio)}}h\n\n                          </ion-badge>\n\n                        </span>\n\n                      </ion-col>\n\n                      <ion-col col-5>\n\n                        <span ion-text class="text-dark">\n\n                          <ion-badge color="light">\n\n                            <ion-icon name="md-time" class="text-dark"></ion-icon>\n\n                            <b>Fim:</b> {{convertDate(evento.datafim)}}h\n\n                          </ion-badge>\n\n                        </span>\n\n                      </ion-col>\n\n                      <ion-col col-2>\n\n                        <button small icon-only class="btn-add" (click)="removeEvent(evento);"\n\n                          ion-button color="danger">\n\n                          <ion-icon name="md-remove"></ion-icon>\n\n                        </button>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                  </ion-grid>\n\n                </div>\n\n\n\n              </ion-card>\n\n            </div>\n\n          </div>\n\n        </ion-list>\n\n        -->\n\n        <!--MINHA AGENDA DIA 20\n\n        <ion-list *ngSwitchCase="\'my_day2\'">\n\n          <div *ngFor="let evento of my_lista_eventos | orderBy: order">\n\n            <div *ngIf="convertDay(evento.datainicio) == 20">\n\n              <ion-card class="animated fadeInDown">\n\n\n\n                <ion-card-content color="dark">\n\n                  <ion-row>\n\n                    <ion-col col-10>\n\n                      <h2>\n\n                        <b>{{evento.titulo}}</b>\n\n                      </h2>\n\n                      <ion-badge color="unique">{{evento.palestrante.nome}}</ion-badge>\n\n                    </ion-col>\n\n                    <ion-col col-2>\n\n                      <button class="btn-details" icon-only (click)="goDetails(evento);" clear ion-button color="dark">\n\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n                      </button>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-card-content>\n\n                <div class="padding-sm dark-bg">\n\n                  <ion-grid style="text-align: center">\n\n                    <ion-row>\n\n                      <ion-col col-5>\n\n                        <span ion-text class="text-dark">\n\n                          <ion-badge color="light">\n\n                            <ion-icon start name="md-time" class="text-dark"></ion-icon>\n\n                            <b>Início:</b> {{convertDate(evento.datainicio)}}h\n\n                          </ion-badge>\n\n                        </span>\n\n                      </ion-col>\n\n                      <ion-col col-5>\n\n                        <span ion-text class="text-dark">\n\n                          <ion-badge color="light">\n\n                            <ion-icon name="md-time" class="text-dark"></ion-icon>\n\n                            <b>Fim:</b> {{convertDate(evento.datafim)}}h\n\n                          </ion-badge>\n\n                        </span>\n\n                      </ion-col>\n\n                      <ion-col col-2>\n\n                        <button small icon-only class="btn-add" (click)="removeEvent(evento);"\n\n                          ion-button color="danger">\n\n\n\n                          <ion-icon name="md-remove"></ion-icon>\n\n                        </button>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                  </ion-grid>\n\n                </div>\n\n\n\n              </ion-card>\n\n            </div>\n\n          </div>\n\n        </ion-list>\n\n      </div>\n\n    </ion-list>\n\n    -->\n\n    <!--AGENDA DO EVENTO-->\n\n    <ion-list *ngSwitchCase="\'agenda_evento\'">\n\n      <div padding>\n\n        <ion-segment color="light" [(ngModel)]="days">\n\n          <ion-segment-button style="background-color: rgb(29, 29, 29)" value="day1">\n\n            <ion-icon mini name="md-calendar"></ion-icon>\n\n            19 Setembro\n\n          </ion-segment-button>\n\n          <ion-segment-button style="background-color: rgb(29, 29, 29)" value="day2">\n\n            <ion-icon mini name="md-calendar"></ion-icon>\n\n            20 Setembro\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n      <!-- Dia 19 da AGENDA DE EVENTOS-->\n\n      <div [ngSwitch]="days">\n\n        <ion-list *ngSwitchCase="\'day1\'">\n\n          <div *ngFor="let evento of lista_eventos | orderBy: order">\n\n            <div *ngIf="convertDay(evento.datainicio) == 19">\n\n              <ion-card class="animated fadeInDown">\n\n                <ion-card-content color="dark">\n\n                  <ion-row>\n\n                    <ion-col col-10>\n\n                      <h2>\n\n                        <b text-justify>{{evento.titulo}}</b>\n\n                      </h2>\n\n                      <ion-badge color="unique">{{evento.palestrante.nome}}</ion-badge>\n\n                    </ion-col>\n\n                    <ion-col col-2>\n\n                      <button class="btn-details" icon-only (click)="goDetails(evento);" clear ion-button color="dark">\n\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n                      </button>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-card-content>\n\n                <div class="padding-sm dark-bg">\n\n                  <ion-grid style="text-align: center">\n\n                    <ion-row>\n\n                      <ion-col col-5>\n\n                        <span ion-text class="text-dark">\n\n                          <ion-badge color="light">\n\n                            <ion-icon start name="md-time" class="text-dark"></ion-icon>\n\n                            <b>Início:</b> {{convertDate(evento.datainicio)}}h\n\n                          </ion-badge>\n\n                        </span>\n\n                      </ion-col>\n\n                      <ion-col col-5>\n\n                        <span ion-text class="text-dark">\n\n                          <ion-badge color="light">\n\n                            <ion-icon name="md-time" class="text-dark"></ion-icon>\n\n                            <b>Fim:</b> {{convertDate(evento.datafim)}}h\n\n                          </ion-badge>\n\n                        </span>\n\n                      </ion-col>\n\n                      <!--<ion-col col-2>\n\n                        <button small icon-only class="btn-add" (click)="eventAddMessage(evento);"\n\n                          ion-button color="secondary">\n\n                          <ion-icon name="md-add"></ion-icon>\n\n                        </button>\n\n                      </ion-col>-->\n\n                    </ion-row>\n\n                  </ion-grid>\n\n                </div>\n\n\n\n              </ion-card>\n\n            </div>\n\n          </div>\n\n        </ion-list>\n\n        <!-- Dia 20 da AGENDA DE EVENTOS-->\n\n        <ion-list *ngSwitchCase="\'day2\'">\n\n          <div *ngFor="let evento of lista_eventos | orderBy: order">\n\n            <div *ngIf="convertDay(evento.datainicio) == 20">\n\n              <ion-card class="animated fadeInDown">\n\n\n\n                <ion-card-content color="dark">\n\n                  <ion-row>\n\n                    <ion-col col-10>\n\n                      <h2>\n\n                        <b>{{evento.titulo}}</b>\n\n                      </h2>\n\n                      <ion-badge color="unique">{{evento.palestrante.nome}}</ion-badge>\n\n                    </ion-col>\n\n                    <ion-col col-2>\n\n                      <button class="btn-details" icon-only (click)="goDetails(evento);" clear ion-button color="dark">\n\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n                      </button>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-card-content>\n\n                <div class="padding-sm dark-bg">\n\n                  <ion-grid style="text-align: center">\n\n                    <ion-row>\n\n                      <ion-col col-5>\n\n                        <span ion-text class="text-dark">\n\n                          <ion-badge color="light">\n\n                            <ion-icon start name="md-time" class="text-dark"></ion-icon>\n\n                            <b>Início:</b> {{convertDate(evento.datainicio)}}h\n\n                          </ion-badge>\n\n                        </span>\n\n                      </ion-col>\n\n                      <ion-col col-5>\n\n                        <span ion-text class="text-dark">\n\n                          <ion-badge color="light">\n\n                            <ion-icon name="md-time" class="text-dark"></ion-icon>\n\n                            <b>Fim:</b> {{convertDate(evento.datafim)}}h\n\n                          </ion-badge>\n\n                        </span>\n\n                      </ion-col>\n\n                      <!--<ion-col col-2>\n\n                        <button small icon-only class="btn-add" (click)="eventAddMessage(evento);"\n\n                          ion-button color="secondary">\n\n                          <ion-icon name="md-add"></ion-icon>\n\n                        </button>\n\n                      </ion-col>-->\n\n                    </ion-row>\n\n                  </ion-grid>\n\n                </div>\n\n\n\n              </ion-card>\n\n            </div>\n\n          </div>\n\n        </ion-list>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\programming\programming.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_event_event__["a" /* EventProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_0__providers_parameter_helper_parameter_helper_service__["a" /* ParameterHelperService */]])
    ], ProgrammingPage);
    return ProgrammingPage;
}());

//# sourceMappingURL=programming.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angularfire2_database__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingService = /** @class */ (function () {
    function RatingService(db) {
        this.db = db;
        this.PATH = "/lecture/";
    }
    RatingService.prototype.sendLectureRating = function (value, lectureId) {
        var _this = this;
        this.db.database.ref(this.PATH + lectureId).once("value", function (snapshot) {
            var total;
            var amount;
            var average;
            //Puxa valores
            total = snapshot.child("rating").child("lecture").child("value").val();
            amount = snapshot.child("rating").child("lecture").child("amount").val();
            //Aplicando a logica
            total += value;
            amount++;
            average = total / amount;
            average = average.toFixed(1);
            //Salvando os valores
            _this.db.database.ref(_this.PATH + lectureId + "/rating/lecture").set({
                value: total,
                amount: amount,
                average: average
            });
        });
    };
    RatingService.prototype.sendSpeakerRating = function (value, lectureId) {
        var _this = this;
        this.db.database.ref(this.PATH + lectureId).once("value", function (snapshot) {
            var total;
            var amount;
            var average;
            //Puxa valores
            total = snapshot.child("rating").child("speaker").child("value").val();
            amount = snapshot.child("rating").child("speaker").child("amount").val();
            //Aplicando a logica
            total += value;
            amount++;
            average = total / amount;
            average = average.toFixed(1);
            //Salvando os valores
            _this.db.database.ref(_this.PATH + lectureId + "/rating/speaker").set({
                value: total,
                amount: amount,
                average: average
            });
        });
    };
    //Static
    RatingService.prototype.getLectureRating = function (lectureId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.database.ref(_this.PATH + lectureId + "/rating/lecture/").on("value", function (snapshot) {
                return resolve(snapshot.child("average").val());
            });
        }).then(function (value2) {
            return value2;
        });
    };
    RatingService.prototype.getSpeakerRating = function (lectureId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.database.ref(_this.PATH + lectureId + "/rating/speaker/").on("value", function (snapshot) {
                return resolve(snapshot.child("average").val());
            });
        }).then(function (value) {
            return value;
        });
    };
    //Realtime
    RatingService.prototype.getLectureRatingObservable = function (lectureId) {
        return this.db.object(this.PATH + lectureId + "/rating/lecture/average").valueChanges();
    };
    RatingService.prototype.etSpeakerRatingObservable = function (lectureId) {
        return this.db.object(this.PATH + lectureId + "/rating/speaker/average").valueChanges();
    };
    RatingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RatingService);
    return RatingService;
}());

//# sourceMappingURL=rating.serive.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 239;

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailNoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_edit_news_edit__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_component_helper_component_helper_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_news_service_news_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_parameter_helper_parameter_helper_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DetailNoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailNoticePage = /** @class */ (function () {
    function DetailNoticePage(navCtrl, navParams, loadingCtrl, componentHelperService, service, parameterHelperService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.componentHelperService = componentHelperService;
        this.service = service;
        this.parameterHelperService = parameterHelperService;
        this.esconder = false;
        this.openLoading();
        this.notice = navParams.data.notice || {};
        this.closeLoading();
    }
    DetailNoticePage.prototype.openLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    DetailNoticePage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    DetailNoticePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailNoticePage');
        this.typeUser();
    };
    DetailNoticePage.prototype.goNewsEdit = function (notice) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__news_edit_news_edit__["a" /* NewsEditPage */], { notice: notice });
    };
    DetailNoticePage.prototype.noticeRemove = function (key) {
        if (key) {
            this.service.RemoveNew(key);
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */]);
        this.componentHelperService.presentToast("Notícia removida com sucesso!");
    };
    DetailNoticePage.prototype.typeUser = function () {
        var _this = this;
        var user = this.parameterHelperService.getParameter("user");
        user.then(function (use) {
            console.log(use);
            console.log(use.perfis.length);
            if (use.perfis.length == 1) {
                _this.esconder = false;
            }
            else {
                _this.esconder = true;
            }
        });
    };
    DetailNoticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-notice',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\detail-notice\detail-notice.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Detalhes da Notícia</ion-title>\n\n    <ion-buttons end>\n\n      <div *ngIf="esconder">\n\n        <button ion-button icon-only color="royal" (click)="noticeRemove(notice.key)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="detail-bg">\n\n\n\n  <ion-card>\n\n\n\n    <div style="color: rgb(255, 255, 255)" class="padding-sm dark-bg">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-11>\n\n            {{ notice.datetime }}\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            <div *ngIf="esconder">\n\n              <ion-icon name="md-create" (click)="goNewsEdit(notice)"></ion-icon>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <img src="{{notice.img}}">\n\n    <ion-card-content>\n\n      <h2 text-justify>\n\n        <b>{{ notice.title }}</b>\n\n      </h2>\n\n      <hr>\n\n      <p text-justify> {{ notice.content }} </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\detail-notice\detail-notice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */], __WEBPACK_IMPORTED_MODULE_5__providers_news_service_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_6__providers_parameter_helper_parameter_helper_service__["a" /* ParameterHelperService */]])
    ], DetailNoticePage);
    return DetailNoticePage;
}());

//# sourceMappingURL=detail-notice.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailProgrammingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_parameter_helper_parameter_helper_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_question_service_question_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_component_helper_component_helper_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_event__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rating_rating__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rating_service_rating_serive__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the DetailProgrammingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailProgrammingPage = /** @class */ (function () {
    function DetailProgrammingPage(navCtrl, navParams, componentHelperService, eventProvider, loadingCtrl, alertCtrl, ratingService, questionService, localNotifications, parameterHelperService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.componentHelperService = componentHelperService;
        this.eventProvider = eventProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.ratingService = ratingService;
        this.questionService = questionService;
        this.localNotifications = localNotifications;
        this.parameterHelperService = parameterHelperService;
        this.esconder = false;
        this.esconderBotao = true;
        this.my_lista_eventos = new Array();
    }
    DetailProgrammingPage.prototype.hide = function () {
        this.hideMe = true;
        if (this.hideMe == true) {
            this.esconderBotao = false;
        }
    };
    DetailProgrammingPage.prototype.hideOff = function () {
        this.hideMe = false;
        if (this.hideMe == false) {
            this.esconderBotao = true;
        }
    };
    DetailProgrammingPage.prototype.convertDate = function (date) {
        var dateArray = date;
        var newDate = dateArray[11] + dateArray[12] + ':' + dateArray[14] + dateArray[15];
        return newDate;
    };
    DetailProgrammingPage.prototype.openLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    DetailProgrammingPage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    DetailProgrammingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.parameterHelperService.getParameter("my_lista_eventos")
            .then(function (data) {
            if (data) {
                _this.my_lista_eventos = data;
            }
        });
        this.parameterHelperService.getParameter("user").then(function (user) {
            _this.user = user;
        });
        this.openLoading();
        this.eventoid = this.navParams.get("id");
        this.eventProvider.getEventId(this.eventoid).subscribe(function (data) {
            var retorno = data._body;
            _this.evento = JSON.parse(retorno);
            _this.closeLoading();
        }, function (error) {
            console.log(error);
            _this.closeLoading();
        });
        //Exemplo de pegar a media da avaliação
        this.valueRatingLecture = this.ratingService.getLectureRatingObservable(this.eventoid);
        this.valueRatingSpeaker = this.ratingService.etSpeakerRatingObservable(this.eventoid);
        this.questionList = this.questionService.GetAllQuestion(this.eventoid);
        console.log("Evento id:", this.eventoid);
        this.typeUser();
    };
    DetailProgrammingPage.prototype.removeEvent = function (evento) {
        var _this = this;
        var i = 0;
        this.my_lista_eventos.forEach(function (myEvento) {
            if (myEvento.id == evento.id) {
                _this.my_lista_eventos.splice(i, 1);
                _this.localNotifications.clear(evento.id);
            }
            i++;
        });
        this.parameterHelperService.setParameter("my_lista_eventos", this.my_lista_eventos);
    };
    DetailProgrammingPage.prototype.eventAddMessage = function (evento) {
        var _this = this;
        var flag = false;
        this.my_lista_eventos.forEach(function (myEvento) {
            if (myEvento.id == evento.id) {
                flag = true;
            }
        });
        if (!flag) {
            this.my_lista_eventos.push(evento);
            this.parameterHelperService.setParameter("my_lista_eventos", this.my_lista_eventos);
            var notifications_1 = [];
            this.localNotifications.getAll()
                .then(function (data) {
                notifications_1 = data;
                var date = new Date(evento.datainicio.split("/")[1] + "/" + evento.datainicio.split("/")[0] + "/" + evento.datainicio.split("/")[2]);
                if (notifications_1.length > 0) {
                    _this.localNotifications.cancelAll();
                    notifications_1.push({ id: evento.id, text: evento.titulo + ' vai começar em 10 minutos', trigger: { at: new Date(date.getTime() - 60000 * 10) } });
                    _this.localNotifications.schedule(notifications_1);
                }
                else {
                    _this.localNotifications.schedule([{
                            id: evento.id, text: evento.titulo + ' vai começar em 10 minutos', trigger: { at: new Date(date.getTime() - 60000 * 10) }
                        }]);
                }
                _this.componentHelperService.presentToast("Adicionado na agenda com sucesso!");
            });
        }
        else {
            this.componentHelperService.presentToast("Evento já está na sua agenda!");
        }
    };
    DetailProgrammingPage.prototype.alertComment = function () {
        var _this = this;
        ;
        debugger;
        var prompt = this.alertCtrl.create({
            title: 'PERGUNTAR',
            inputs: [
                {
                    type: 'textarea',
                    name: 'perguntar',
                    placeholder: 'Perguntar'
                }
            ],
            buttons: [
                {
                    text: "Cancelar",
                    handler: function (data) {
                        console.log("Cancelado");
                    }
                },
                {
                    text: "Enviar",
                    handler: function (data) {
                        if (data.perguntar != "") {
                            var date = new Date();
                            var question = {
                                content: data.perguntar,
                                name: _this.user.nome,
                                timestamp: -(Date.now()),
                                datetime: (date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString() + " - " + date.getHours().toString() + ":" + date.getMinutes().toString())
                            };
                            _this.questionService.NewQuestion(question, _this.eventoid);
                            _this.componentHelperService.presentToast("Pergunta enviada com sucesso! Obrigado pela participação.");
                            console.log("Enviado");
                        }
                        else {
                            _this.componentHelperService.presentToast("Campo vazio");
                            console.log("Campo vazio");
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    DetailProgrammingPage.prototype.openRating = function (evento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__rating_rating__["a" /* RatingPage */], { id: evento.id });
    };
    DetailProgrammingPage.prototype.typeUser = function () {
        var _this = this;
        var user = this.parameterHelperService.getParameter("user");
        user.then(function (use) {
            console.log(use);
            console.log(use.perfis.length);
            if (use.perfis.length == 1) {
                _this.esconder = false;
            }
            else {
                _this.esconder = true;
            }
        });
    };
    DetailProgrammingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-detail-programming',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\detail-programming\detail-programming.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n\n\n    <ion-title>Programação</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="detail-bg">\n\n\n\n  <div style="padding: 1%;" text-center class="light-bg">\n\n    <h2 style="color: rgb(37, 37, 37)">Detalhes do Evento</h2>\n\n  </div>\n\n  <div *ngIf="evento">\n\n    <ion-card>\n\n      <ion-card-content color="dark">\n\n        <h2>\n\n          <b>{{evento.titulo}}\n\n            <div *ngIf="esconder">\n\n              <ion-badge color="dark">\n\n                <ion-icon style="color: gold" name="star"> {{valueRatingLecture | async}}\n\n                  <sub ion-text style="color: gold">/5</sub>\n\n                </ion-icon>\n\n              </ion-badge>\n\n            </div>\n\n          </b>\n\n        </h2>\n\n        <ion-badge color="unique">{{evento.palestrante.nome}}</ion-badge>\n\n      </ion-card-content>\n\n      <div class="padding-sm dark-bg">\n\n        <ion-grid style="text-align: center">\n\n          <ion-row>\n\n            <ion-col col-5>\n\n              <span ion-text class="text-dark">\n\n                <ion-badge color="light">\n\n                  <ion-icon start name="md-time" class="text-dark"></ion-icon>\n\n                  <b>Início:</b> {{convertDate(evento.datainicio)}}h</ion-badge>\n\n              </span>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <span ion-text class="text-dark">\n\n                <ion-badge color="light">\n\n                  <ion-icon name="md-time" class="text-dark"></ion-icon>\n\n                  <b>Fim:</b> {{convertDate(evento.datafim)}}h</ion-badge>\n\n              </span>\n\n            </ion-col>\n\n            <!--<ion-col col-2>\n\n              <button small icon-only class="btn-add" (click)="eventAddMessage(evento);" ion-button color="secondary">\n\n                <ion-icon name="md-add"></ion-icon>\n\n              </button>\n\n            </ion-col>-->\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </ion-card>\n\n\n\n    <ion-list>\n\n      <div color="dark">\n\n        <div class="padding-sm light-bg">\n\n          <ion-title>Palestrante</ion-title>\n\n        </div>\n\n\n\n        <ion-item color="light">\n\n          <ion-avatar item-start>\n\n            <img [src]="evento.palestrante.urlImage">\n\n          </ion-avatar>\n\n          <h2>\n\n            <b style="color: rgb(34, 34, 34)">{{evento.palestrante.nome}}\n\n              <div *ngIf="esconder">\n\n                <ion-badge color="dark">\n\n                  <ion-icon style="color: gold" name="star"> {{valueRatingSpeaker | async}}\n\n                    <sub ion-text style="color: gold">/5</sub>\n\n                  </ion-icon>\n\n                </ion-badge>\n\n              </div>\n\n            </b>\n\n          </h2>\n\n          <p text-justify>{{evento.palestrante.descricao}}</p>\n\n          <a target="_blank" href="{{evento.palestrante.social}}">\n\n            <button color="info" outline ion-button icon-start>\n\n              <ion-icon name="logo-linkedin"></ion-icon>\n\n              Perfil no Linkedin\n\n            </button>\n\n          </a>\n\n\n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n    <div color="dark">\n\n      <div *ngIf="evento" color="dark" padding class="padding-sm light-bg">\n\n        <h4 style="color: #424242;">Descrição</h4>\n\n        <p text-justify style="color: black">{{evento.descricao}}</p>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div class="padding-sm dark-bg" text-center>\n\n      <button (click)="openRating(evento)" color="info" ion-button icon-end round>Avaliar\n\n        <ion-icon name="md-ribbon"></ion-icon>\n\n      </button>\n\n      <!--<button (click)="alertComment()" color="info" ion-button icon-end round>Perguntar\n\n        <ion-icon name="md-chatboxes"></ion-icon>\n\n      </button>-->\n\n    </div>\n\n  </div>\n\n  <div *ngIf="esconder">\n\n    <div padding *ngIf="esconderBotao">\n\n      <button block ion-button icon-end color="unique" (click)="hide()">Mostrar Perguntas\n\n        <ion-icon name="ios-arrow-down"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="hideMe" class="animated fadeInDown">\n\n    <div padding>\n\n      <button block ion-button icon-end color="warning" (click)="hideOff()">Ocultar Perguntas\n\n        <ion-icon name="ios-arrow-up"></ion-icon>\n\n      </button>\n\n    </div>\n\n    <div *ngFor="let question of questionList | async">\n\n      <ion-card>\n\n        <div class="padding-sm light-bg">\n\n          <h2 class="teste" text-center>\n\n            {{question.name}} \n\n          </h2>\n\n          <h2 class="teste" text-center>\n\n            {{ question.datetime }}h\n\n          </h2>\n\n\n\n        </div>\n\n        <ion-card-content>\n\n          <p>{{question.content}}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\detail-programming\detail-programming.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_event_event__["a" /* EventProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_rating_service_rating_serive__["a" /* RatingService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_question_service_question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_0__providers_parameter_helper_parameter_helper_service__["a" /* ParameterHelperService */]])
    ], DetailProgrammingPage);
    return DetailProgrammingPage;
}());

//# sourceMappingURL=detail-programming.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_operators__ = __webpack_require__(22);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = /** @class */ (function () {
    function QuestionService(db) {
        this.db = db;
        this.PATH = "lecture/";
    }
    QuestionService.prototype.GetAllQuestion = function (lectureID) {
        return this.db.list(this.PATH + lectureID + "/message", function (ref) { return ref.orderByChild("timestamp"); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    QuestionService.prototype.NewQuestion = function (question, lectureID) {
        this.db.list(this.PATH + lectureID + "/message").push(question);
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], QuestionService);
    return QuestionService;
}());

//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_component_helper_component_helper_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rating_service_rating_serive__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatingPage = /** @class */ (function () {
    function RatingPage(navCtrl, navParams, componentHelperService, eventProvider, loadingCtrl, ratingService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.componentHelperService = componentHelperService;
        this.eventProvider = eventProvider;
        this.loadingCtrl = loadingCtrl;
        this.ratingService = ratingService;
        this.valueRatingLecture = 1; // Valor padrão
        this.valueRatingSpeaker = 1; // Valor padrão  
        this.eventos = new Array();
    }
    RatingPage.prototype.log = function (valor) {
        console.log(valor);
        //Setar os Valores do rating do palestrando e da palestra
    };
    RatingPage.prototype.setRatingLecturevalue = function (value) {
        this.valueRatingLecture = value;
    };
    RatingPage.prototype.setRatingSpeakervalue = function (value) {
        this.valueRatingSpeaker = value;
    };
    RatingPage.prototype.openLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    RatingPage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    RatingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.openLoading();
        this.eventoid = this.navParams.get("id");
        this.eventProvider.getEventId(this.eventoid).subscribe(function (data) {
            var retorno = data._body;
            _this.evento = JSON.parse(retorno);
            console.log(_this.evento);
            _this.closeLoading();
        }, function (error) {
            console.log(error);
            _this.closeLoading();
        });
        console.log("Evento id:", this.eventoid);
    };
    RatingPage.prototype.sendRating = function () {
        this.ratingService.sendLectureRating(this.valueRatingLecture, this.eventoid);
        this.ratingService.sendSpeakerRating(this.valueRatingSpeaker, this.eventoid);
        this.navCtrl.pop();
        this.componentHelperService.presentToast("Avaliação enviada com sucesso! Obrigado pela participação.");
    };
    RatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rating',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\rating\rating.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Avaliar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="detail-bg">\n\n\n\n    \n\n\n\n  <div *ngIf="evento">\n\n    <div padding text-center class="light-bg">\n\n      \n\n      <label style="color: rgb(37, 37, 37)"><b>{{evento.titulo}}</b></label>\n\n    </div>\n\n\n\n    <ion-card>\n\n      <ion-title text-center class="light-bg">Avalie o Palestrante</ion-title>\n\n      <ion-card-content>\n\n        <h2>\n\n          <ion-badge color="unique">{{evento.palestrante.nome}}</ion-badge>\n\n        </h2>\n\n        <p text-justify>{{evento.palestrante.descricao}}</p>\n\n        <hr>\n\n        <ion-rating [leitura]="false" (starClick)="setRatingSpeakervalue($event)">\n\n\n\n        </ion-rating>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-title text-center class="light-bg">Avalie o Conteúdo</ion-title>\n\n      <ion-card-content>\n\n        <h3><b>{{evento.titulo}}</b></h3>\n\n        <p text-justify>{{evento.descricao}}</p>\n\n        <hr>\n\n        <ion-rating [leitura]="false" (starClick)="setRatingLecturevalue($event)">\n\n\n\n        </ion-rating>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <div padding text-center>\n\n      <button block ion-button color="info" round (click)="sendRating()">\n\n        Enviar \n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\rating\rating.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rating_service_rating_serive__["a" /* RatingService */]])
    ], RatingPage);
    return RatingPage;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.returnLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.openTermos = function () {
        var alert = this.alertCtrl.create({
            title: 'Termos',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Voltar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content  class="animated fadeIn register auth-page">\n\n  <ion-card class="detail-card">\n\n    <div class="animated fadeInDown">\n\n  <ion-card-content>\n\n      <ion-title text-center>Cadastro</ion-title>\n\n    <div>\n\n      \n\n      <p text-justify>O cadastro foi realizado pela nossa equipe, verifique o seu email ou navegue até a aba Esqueci a Senha e utilize o seu email informado no cadastro do evento.</p>\n\n    </div>\n\n    \n\n  </ion-card-content>\n\n</div>\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_component_helper_component_helper_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_event__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPassPage = /** @class */ (function () {
    function ForgotPassPage(navCtrl, navParams, componentHelperService, eventProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.componentHelperService = componentHelperService;
        this.eventProvider = eventProvider;
    }
    ForgotPassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPassPage');
    };
    ForgotPassPage.prototype.backLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    //Enviar email
    ForgotPassPage.prototype.sendPass = function (email) {
        var _this = this;
        var p = this.eventProvider.callEmailPost(email);
        p.then(function (data) {
            console.log("Recebido" + JSON.stringify(data.json()));
            _this.componentHelperService.presentToast("Nova senha enviada. Por favor, verifique o email.");
        }, function (error) {
            console.error(error);
            _this.componentHelperService.presentToast("Email inválido.");
        });
    };
    ForgotPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\forgot-pass\forgot-pass.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n      <ion-title>Voltar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="detail-bg">\n\n    \n\n  \n\n  <ion-card class="detail-card">\n\n      <div class="animated fadeInDown">\n\n    <ion-card-content>\n\n      <div>\n\n        <ion-title text-center>Esqueceu sua senha?</ion-title>\n\n        <p text-justify>Sem problemas! Confirme seu e-mail cadastrado e te ajudarei a recuperar sua senha.</p>\n\n      </div>\n\n      <form class="list-form">\n\n        <ion-item>\n\n          <ion-label style="color: black;" floating>\n\n            <ion-icon name="email" item-start></ion-icon>\n\n            E-mail\n\n          </ion-label>\n\n          <ion-input style="text-decoration-color: black" name="email" type="email" [(ngModel)]="email" #ctl="ngModel" clearInput></ion-input>\n\n        </ion-item>\n\n        <hr>\n\n        <div text-center>\n\n          <button ion-button color="unique" (click)="sendPass(email)">Enviar</button>\n\n        </div>\n\n      </form>\n\n    </ion-card-content>\n\n  </div>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\forgot-pass\forgot-pass.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_event_event__["a" /* EventProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */], __WEBPACK_IMPORTED_MODULE_4__providers_event_event__["a" /* EventProvider */]])
    ], ForgotPassPage);
    return ForgotPassPage;
}());

//# sourceMappingURL=forgot-pass.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorsPage = /** @class */ (function () {
    function SponsorsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sponsorsDiamond = [
            {
                "img": "assets/imgs/patrocinadores/neteventos.png",
                "link": "https://www.neteventospb.com/ "
            }
        ];
        this.sponsorsApoio = [
            {
                "img": "assets/imgs/patrocinadores/estacao.png",
                "link": "https://joaopessoa.pb.gov.br/estacaocb/?date=2018-05-21"
            },
            {
                "img": "assets/imgs/patrocinadores/saobraz.png",
                "link": "http://www.saobraz.com.br/"
            },
            {
                "img": "assets/imgs/patrocinadores/armazempb.jpg",
                "link": "http://www.armazempb.com.br/nossas-promocoes/"
            },
            {
                "img": "assets/imgs/patrocinadores/alpargatas.jpg",
                "link": "https://www.institutoalpargatas.com.br/"
            }
        ];
        this.sponsorsExpositores = [
            {
                "img": "assets/imgs/patrocinadores/cooltura.jpg",
                "link": "https://www.cooltura.cc/"
            },
            {
                "img": "assets/imgs/patrocinadores/uniodonto.jpg",
                "link": "https://www.uniodontojp.com.br/"
            },
            {
                "img": "assets/imgs/patrocinadores/tecbioweb.png",
                "link": "https://www.tecbioweb.com.br/"
            },
            {
                "img": "assets/imgs/patrocinadores/dsassociados.jpg",
                "link": "http://dsconsultoresassociados.com.br/"
            },
            {
                "img": "assets/imgs/patrocinadores/MEGAPC.jpg",
                "link": "http://www.megapc.com.br/"
            },
            {
                "img": "assets/imgs/patrocinadores/uninassau.png",
                "link": "https://www.uninassau.edu.br/institucional/joao-pessoa"
            }
        ];
        this.sponsorsSilver = [
            {
                "img": "assets/imgs/patrocinadores/uninassau.png",
                "link": "https://www.uninassau.edu.br/institucional/joao-pessoa"
            },
            {
                "img": "assets/imgs/patrocinadores/energisa.png",
                "link": "https://www.energisa.com.br/casa/segunda-via"
            },
            {
                "img": "assets/imgs/patrocinadores/dsassociados.jpg",
                "link": "http://dsconsultoresassociados.com.br/"
            },
            {
                "img": "assets/imgs/patrocinadores/MEGAPC.jpg",
                "link": "http://www.megapc.com.br/"
            },
            {
                "img": "assets/imgs/patrocinadores/sebrae.jpg",
                "link": "http://www.sebrae.com.br/sites/PortalSebrae/ufs/pb?codUf=16"
            },
            {
                "img": "assets/imgs/patrocinadores/graficajb.jpeg",
                "link": "http://www.grafjb.com.br/"
            }
        ];
    }
    SponsorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SponsorsPage');
    };
    SponsorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsors',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\sponsors\sponsors.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Patrocinadores</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="detail-bg">\n\n\n\n  <ion-card>\n\n    <div style="color: rgb(255, 255, 255)" text-center>\n\n      <div class="padding-sm dark-bg">\n\n        DIAMANTE\n\n        <ion-icon style="color: rgb(85, 206, 247)" name="star"></ion-icon>\n\n        <ion-icon style="color: rgb(85, 206, 247); font-size: 28px;" name="star"></ion-icon>\n\n        <ion-icon style="color: rgb(85, 206, 247)" name="star"></ion-icon>\n\n      </div>\n\n    </div>\n\n    <ion-card-content>\n\n      <ion-slides paginationClickable=true initialSlide=0  #mySlider>\n\n        <ion-slide *ngFor="let item of sponsorsDiamond">\n\n          <img style="display: inline-block;" src="{{item.img}}">\n\n          <ion-fab right top>\n\n            <a href="{{item.link}}" target="_blank">\n\n              <button ion-fab mini color="dark">\n\n                <ion-icon name="navigate"></ion-icon>\n\n              </button>\n\n            </a>\n\n          </ion-fab>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!--<ion-card>\n\n    <div style="color: rgb(255, 255, 255)" text-center>\n\n      <div class="padding-sm dark-bg">\n\n        OURO\n\n        <ion-icon style="color: gold" name="star"></ion-icon>\n\n        <ion-icon style="color: gold" name="star"></ion-icon>\n\n        <ion-icon style="color: gold" name="star"></ion-icon>\n\n      </div>\n\n    </div>\n\n    <ion-card-content>\n\n      <ion-slides paginationClickable=true initialSlide=0 loop=true autoplay=1500 speed=1500 #mySlider>\n\n        <ion-slide *ngFor="let item of sponsorsGold">\n\n          <img style="display: inline-block;" src="{{item.img}}">\n\n          <ion-fab right top>\n\n            <a href="{{item.link}}" target="_blank">\n\n              <button ion-fab mini color="dark">\n\n                <ion-icon name="navigate"></ion-icon>\n\n              </button>\n\n            </a>\n\n          </ion-fab>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-card-content>\n\n  </ion-card>-->\n\n  <ion-card>\n\n    <div style="color: rgb(255, 255, 255)" text-center>\n\n      <div class="padding-sm dark-bg">\n\n        PRATA\n\n        <ion-icon style="color: silver" name="star"></ion-icon>\n\n        <ion-icon style="color: silver" name="star"></ion-icon>\n\n        <ion-icon style="color: silver" name="star"></ion-icon>\n\n      </div>\n\n    </div>\n\n    <ion-card-content>\n\n      <ion-slides paginationClickable=true initialSlide=0 loop=true autoplay=1500 speed=1500 #mySlider>\n\n        <ion-slide *ngFor="let item of sponsorsSilver">\n\n          <img style="display: inline-block;" src="{{item.img}}">\n\n          <ion-fab right top>\n\n            <a href="{{item.link}}" target="_blank">\n\n              <button ion-fab mini color="dark">\n\n                <ion-icon name="navigate"></ion-icon>\n\n              </button>\n\n            </a>\n\n          </ion-fab>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n       \n\n          <div style="color: rgb(255, 255, 255)" text-center>\n\n            <div class="padding-sm dark-bg">\n\n              APOIO\n\n            </div>\n\n          </div>\n\n          <ion-card-content>\n\n            <ion-slides paginationClickable=true initialSlide=0 loop=true autoplay=2000 speed=2000 #mySlider>\n\n              <ion-slide *ngFor="let item of sponsorsApoio" class="teste">\n\n                <img style="display: inline-block;" src="{{item.img}}">\n\n                <ion-fab right top>\n\n                  <a href="{{item.link}}" target="_blank">\n\n                    <button ion-fab mini color="dark">\n\n                      <ion-icon name="navigate"></ion-icon>\n\n                    </button>\n\n                  </a>\n\n                </ion-fab>\n\n              </ion-slide>\n\n            </ion-slides>\n\n          </ion-card-content>\n\n        \n\n      </ion-col>\n\n      <ion-col col-6>\n\n        \n\n          <div style="color: rgb(255, 255, 255)" text-center>\n\n            <div class="padding-sm dark-bg">\n\n              EXPOSITORES\n\n            </div>\n\n          </div>\n\n          <ion-card-content>\n\n            <ion-slides paginationClickable=true initialSlide=0 loop=true autoplay=2000 speed=2000 #mySlider>\n\n              <ion-slide *ngFor="let item of sponsorsExpositores" class="teste">\n\n                <img style="display: inline-block;" src="{{item.img}}">\n\n                <ion-fab right top>\n\n                  <a href="{{item.link}}" target="_blank">\n\n                    <button ion-fab mini color="dark">\n\n                      <ion-icon name="navigate"></ion-icon>\n\n                    </button>\n\n                  </a>\n\n                </ion-fab>\n\n              </ion-slide>\n\n            </ion-slides>\n\n          </ion-card-content>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-card>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\sponsors\sponsors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SponsorsPage);
    return SponsorsPage;
}());

//# sourceMappingURL=sponsors.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutEventPage = /** @class */ (function () {
    function AboutEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutEventPage');
    };
    AboutEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-event',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\about-event\about-event.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sobre o Evento</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="detail-bg">\n\n  <ion-card class="card-bg">\n\n    <div style="color: rgb(255, 255, 255)" text-center>\n\n      <div class="padding-sm dark-bg">\n\n        <strong>CONGREPARH 2018</strong>\n\n      </div>\n\n    </div>\n\n    <ion-card-content>\n\n      <p text-justify style="color: black">O CONGREPARH é o maior Congresso de Gestão de Pessoas da Paraíba e chega à sua\n\n        <b>28ª Edição.</b> Em 2018 o congresso e terá como tema central\n\n        <b>RH TECH</b> - A Tecnologia Integrando\n\n        <b>T</b>alento,\n\n        <b>E</b>ngajamento,\n\n        <b>C</b>onhecimento e\n\n        <b>H</b>umanidade. O congresso acontece nos dias 19 e 20 de setembro de 2018, onde cerca de 500 empresários, gestores\n\n        e estudantes terão a oportunidade de discutir a importância da Tecnologia e as suas influências em diversas camadas\n\n        relacionadas à area de Recursos Humanos e Gestão de Pessoas. Nesta edição, o evento contará com\n\n        <B>Palestras, Expo RH</B> (feira que promoverá exposição de marcas, produtos e serviços) e além disso, acontecerá também\n\n        a entrega do\n\n        <b>Prêmio Ser Humano</b> na ocasião do congresso. Em sua 28ª edição, o CONGREPARH também irá comemorar 40 anos da ABRH-PB.\n\n        Tradicionalmente realizado no mês de junho, o Congresso reúne diversos profissionais e futuros profissionais da área\n\n        para discutir temas relevantes para as empresas. Neste ano, o evento acontecerá no mês de setembro, para celebrar\n\n        o 40º ano da associação, bem como o sucesso das últimas edições. É um momento ímpar, de troca e ganhos mútuos. </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!--<ion-card class="card-bg">\n\n    <div style="color: rgb(255, 255, 255)" text-center>\n\n      <div class="padding-sm dark-bg">\n\n        <strong>PARCEIROS</strong>\n\n      </div>\n\n    </div>\n\n    <ion-card-content>\n\n      <div class="header-banner">\n\n        <ion-slides pager autoplay="2000" loop="true" speed="1000">\n\n          <ion-slide class="slide-img">\n\n            <div class="align-top" padding-left padding-right>\n\n              <h4 class="pull-left text-black" ion-text>Nome do Organizador</h4>\n\n            </div>\n\n          </ion-slide>\n\n          <ion-slide class="slide-img">\n\n            <div class="align-top" padding-left padding-right>\n\n              <h4 class="pull-left text-black" ion-text>Nome do Organizador</h4>\n\n            </div>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>-->\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\about-event\about-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutEventPage);
    return AboutEventPage;
}());

//# sourceMappingURL=about-event.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_parameter_helper_parameter_helper_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, alertCtrl, parameterHelperService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.parameterHelperService = parameterHelperService;
        this.user = {
            "nome": "--",
            "telefone": "--",
            "empresa": "--",
            "email": "--",
        };
    }
    PerfilPage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Atualize seu perfil',
            message: "Aqui você pode atualizar alguns campos do seu perfil.",
            inputs: [
                {
                    name: 'telefone',
                    placeholder: 'Celular'
                },
                {
                    name: 'empresa',
                    placeholder: 'Empresa'
                },
                {
                    name: 'ocupacao',
                    placeholder: 'Ocupação, cargo, etc...'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PerfilPage');
        this.parameterHelperService.getParameter("user").then(function (use) {
            _this.user = use;
        });
    };
    PerfilPage.prototype.returnLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\perfil\perfil.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Meu Perfil</ion-title>\n\n    <!--\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="showPrompt()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    -->\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding class="detail-bg">\n\n  <br>\n\n  <div text-center>\n\n    <img class="circle-pic" style="width: 150px; height: 150px;" src="../../assets/imgs/avatar.png">\n\n\n\n  </div>\n\n\n\n  <ion-card class="card-bg">\n\n      <div style="color: rgb(255, 255, 255)" text-center>\n\n        <div class="padding-sm dark-bg">\n\n          <strong>{{user.nome}}</strong>\n\n        </div>\n\n      </div>\n\n      <ion-card-content>\n\n        <ion-item-group>\n\n          <ion-item-divider color="light">Email</ion-item-divider>\n\n          <ion-item>{{user.email}}</ion-item>\n\n        </ion-item-group>\n\n        <ion-item-group>\n\n            <ion-item-divider color="light">Celular</ion-item-divider>\n\n            <ion-item>{{user.telefone}}</ion-item>\n\n        </ion-item-group>\n\n        <ion-item-group>\n\n            <ion-item-divider color="light">Empresa</ion-item-divider>\n\n            <ion-item>{{user.empresa}}</ion-item>\n\n        </ion-item-group>\n\n      </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_parameter_helper_parameter_helper_service__["a" /* ParameterHelperService */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_component_helper_component_helper_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams, componentHelperService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.componentHelperService = componentHelperService;
        this.items = [
            {
                "titulo": "Certificados",
                "desc": "O seu certificado será emitido através do site do evento em no máximo um mês após o mesmo. Acesse a sua conta em <a target='_blank' href='https://congreparh.vpeventos.com'>www.congreparh.vpeventos.com</a> e faça o download."
            },
            {
                "titulo": "Achados e Perdidos",
                "desc": "Não nos responsabilizamos por nenhuma perda dentro do evento. A responsabilidade de eletrônicos, dinheiro e demais itens é do participante. O que não impede a nossa equipe de guardar todo o material encontrado durante os dias de evento dentro do auditório ou da Expo RH."
            },
            {
                "titulo": "Estacionamento",
                "desc": "A Estação Cabo Branco possui estacionamento gratuito para todos os participantes durante o horário do evento com capacidade para 150 veículos. "
            },
            {
                "titulo": "Horários",
                "desc": "O evento acontece das 08h00m às 18h00m nos dois dias."
            }
        ];
        this.restaurantes = [
            {
                "img": "assets/imgs/food/pizza.png",
                "link": "https://www.instagram.com/euqueropizzafoodtruck",
                "insta": "@euqueropizzafoodtruck",
                "desc": "1° FoodTruck de pizzas artesanal de João Pessoa, massa fininha, levemente crocante e um sabor irresistível de forno a lenha.",
                "phone": "83 98703-1849"
            },
            {
                "img": "assets/imgs/food/mexicano.png",
                "link": "https://www.instagram.com/mexicandotexmex",
                "insta": "@mexicandotexmex",
                "desc": "Todos os dias de janela aberta com o melhor da gastronomia Tex-Mex em João Pessoa/PB.",
                "phone": "83 98757-2570"
            },
            {
                "img": "assets/imgs/food/dindin.png",
                "link": "https://www.instagram.com/mr.gourmetdindin",
                "insta": "@mr.gourmetdindin",
                "desc": "DinDin Gourmet",
                "phone": "83 98636-0002"
            }
        ];
    }
    InformationPage.prototype.itemSelected = function (titulo, desc) {
        this.componentHelperService.presentAlert(titulo, desc);
    };
    InformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationPage');
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\information\information.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Informações Gerais</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="detail-bg">\n\n\n\n    \n\n  <ion-card style="background-color: rgba(240, 248, 255, 0)">\n\n  <ion-list no-lines color="dark" *ngFor="let item of items">\n\n      <button ion-button full color="info" medium  (click)="itemSelected(item.titulo, item.desc)">\n\n        <label color="dark">{{ item.titulo }}</label>     \n\n      </button>  \n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div style="color: rgb(255, 255, 255)" text-center>\n\n      <div class="padding-sm info-bg">\n\n        Foods Trucks\n\n      </div>\n\n    </div>\n\n    <ion-card-content>\n\n      <ion-slides paginationClickable=true initialSlide=0 loop=true autoplay=2500 speed=2500 #mySlider>\n\n        <ion-slide >\n\n          <img style="display: inline-block;" src="assets/imgs/food/final.png">\n\n          \n\n        </ion-slide>\n\n      \n\n      <ion-slide >\n\n          <img class="imgfood" style="display: inline-block;" src="assets/imgs/food/pizza.png">\n\n          <hr>\n\n          <a style="text-decoration: none;" target="_blank" href="https://www.instagram.com/euqueropizzafoodtruck"><ion-icon name="logo-instagram"></ion-icon> @euqueropizzafoodtruck</a>\n\n          <p>1° FoodTruck de pizzas artesanal de João Pessoa, massa fininha, levemente crocante e um sabor irresistível de forno a lenha.</p>\n\n          <p><ion-icon name="call"></ion-icon> 83 98703-1849</p>\n\n        </ion-slide>\n\n      \n\n      <ion-slide >\n\n          <img class="imgfood" style="display: inline-block;" src="assets/imgs/food/mexicano.png">\n\n          <hr>\n\n          <a style="text-decoration: none;" target="_blank" href="https://www.instagram.com/mexicandotexmex"><ion-icon name="logo-instagram"></ion-icon> @mexicandotexmex</a>\n\n          <p>Todos os dias de janela aberta com o melhor da gastronomia Tex-Mex em João Pessoa/PB.</p>\n\n          <p><ion-icon name="call"></ion-icon> 83 98757-2570</p>\n\n        </ion-slide>\n\n      \n\n      <ion-slide >\n\n          <img class="imgfood" style="display: inline-block;" src="assets/imgs/food/dindin.png">\n\n          <hr>\n\n          <a style="text-decoration: none;" target="_blank" href="https://www.instagram.com/mr.gourmetdindin"><ion-icon name="logo-instagram"></ion-icon> @mr.gourmetdindin</a>\n\n          <p>DinDin Gourmet</p>\n\n          <p><ion-icon name="call"></ion-icon> 83 98636-0002</p>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-card-content>\n\n    <p padding text-center>Aproveite ainda a estadia em João Pessoa para provar da culinária tipica do nosso estado.</p>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsPage = /** @class */ (function () {
    function MapsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapsPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapsPage.prototype.loadMap = function () {
        var mapOptions = {
            camera: {
                target: {
                    lat: -7.1481623,
                    lng: -34.7980744
                },
                zoom: 18
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        var marker = this.map.addMarkerSync({
            title: 'ABRH',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: -7.1481623,
                lng: -34.7980744
            }
        });
        marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
            alert('Abrh');
        });
    };
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maps',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\maps\maps.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Google Maps</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div id="map_canvas">\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\maps\maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(431);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentHelperService = /** @class */ (function () {
    function ComponentHelperService(toastCtrl, loadingCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    ComponentHelperService.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    ComponentHelperService.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create();
        loader.present();
        return loader;
    };
    ComponentHelperService.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    ComponentHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ComponentHelperService);
    return ComponentHelperService;
}());

//# sourceMappingURL=component-helper.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParameterHelperService = /** @class */ (function () {
    function ParameterHelperService(storage) {
        this.storage = storage;
    }
    /* --------- Parameter get & set ---------- */
    ParameterHelperService.prototype.setParameter = function (key, value) {
        return this.storage.set("" + key, value);
    };
    ParameterHelperService.prototype.getParameter = function (key) {
        return this.storage.get("" + key);
    };
    ParameterHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], ParameterHelperService);
    return ParameterHelperService;
}());

//# sourceMappingURL=parameter-helper.service.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_event_event__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_programming_programming__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_news_news__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_edit_news_edit__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_maps_maps__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_event_event__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_forgot_pass_forgot_pass__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_event_about_event__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sponsors_sponsors__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_order_pipe__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_component_helper_component_helper_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_parameter_helper_parameter_helper_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_news_service_news_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_rating_service_rating_serive__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_perfil_perfil__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_information_information__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_detail_programming_detail_programming__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__node_modules_angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_detail_notice_detail_notice__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_rating_rating__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angularfire2_storage__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_local_notifications__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_ion_rating_ion_rating__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_question_service_question_service__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { QuestionService } from './../providers/question-service/question.service';




























//import { EventProvider } from '../providers/event/event';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_programming_programming__["a" /* ProgrammingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_edit_news_edit__["a" /* NewsEditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_event_about_event__["a" /* AboutEventPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_detail_programming_detail_programming__["a" /* DetailProgrammingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_detail_notice_detail_notice__["a" /* DetailNoticePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_rating_rating__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_36__components_ion_rating_ion_rating__["a" /* IonRatingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_29__node_modules_angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], { scrollPadding: false, scrollAssist: false }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: '__dynamicbox', storeName: 'parameters', driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage'] }),
                __WEBPACK_IMPORTED_MODULE_32_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyDrCU0cItoYuO74ChsKVLkWuucNm2v51Y8",
                    authDomain: "abrh-congreparh.firebaseapp.com",
                    databaseURL: "https://abrh-congreparh.firebaseio.com",
                    projectId: "abrh-congreparh",
                    storageBucket: "abrh-congreparh.appspot.com",
                    messagingSenderId: "642519542538"
                }),
                __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_34_angularfire2_storage__["b" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_programming_programming__["a" /* ProgrammingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_edit_news_edit__["a" /* NewsEditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_event_about_event__["a" /* AboutEventPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_detail_programming_detail_programming__["a" /* DetailProgrammingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_detail_notice_detail_notice__["a" /* DetailNoticePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_rating_rating__["a" /* RatingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */],
                __WEBPACK_IMPORTED_MODULE_23__providers_parameter_helper_parameter_helper_service__["a" /* ParameterHelperService */],
                __WEBPACK_IMPORTED_MODULE_24__providers_news_service_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_25__providers_rating_service_rating_serive__["a" /* RatingService */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_37__providers_question_service_question_service__["a" /* QuestionService */],
                __WEBPACK_IMPORTED_MODULE_0__providers_event_event__["a" /* EventProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_parameter_helper_parameter_helper_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_programming_programming__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_news_news__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sponsors_sponsors__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_event_about_event__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_perfil_perfil__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_information_information__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_maps_maps__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, parameterHelperService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.parameterHelperService = parameterHelperService;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'md-home' },
            { title: 'Programação', component: __WEBPACK_IMPORTED_MODULE_6__pages_programming_programming__["a" /* ProgrammingPage */], icon: 'md-calendar' },
            { title: 'Notícias', component: __WEBPACK_IMPORTED_MODULE_7__pages_news_news__["a" /* NewsPage */], icon: 'md-paper' },
            { title: 'Sobre o Evento', component: __WEBPACK_IMPORTED_MODULE_10__pages_about_event_about_event__["a" /* AboutEventPage */], icon: 'md-information' },
            { title: 'Informações Gerais', component: __WEBPACK_IMPORTED_MODULE_12__pages_information_information__["a" /* InformationPage */], icon: 'md-information-circle' },
            { title: 'Parceiros', component: __WEBPACK_IMPORTED_MODULE_9__pages_sponsors_sponsors__["a" /* SponsorsPage */], icon: 'md-people' },
            { title: 'Meu Perfil', component: __WEBPACK_IMPORTED_MODULE_11__pages_perfil_perfil__["a" /* PerfilPage */], icon: 'md-person' },
            { title: 'Local', component: __WEBPACK_IMPORTED_MODULE_13__pages_maps_maps__["a" /* MapsPage */], icon: 'md-map' },
            { title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */], icon: 'md-exit' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.userLoggedIn();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.userLoggedIn = function () {
        var _this = this;
        this.parameterHelperService.getParameter("user")
            .then(function (data) {
            if (data && data.email) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_programming_programming__["a" /* ProgrammingPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == "Sair") {
            this.parameterHelperService.setParameter("user", null);
        }
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\app\app.html"*/'<ion-menu [content]="content" color="dark">\n\n  <ion-header>\n\n    <ion-toolbar color="dark">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon item-left [md]="p.icon" [ios]="p.icon" color="dark"></ion-icon>\n\n        <ion-label color="dark">{{p.title}}</ion-label>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__providers_parameter_helper_parameter_helper_service__["a" /* ParameterHelperService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\event\event.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>event</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonRatingComponent = /** @class */ (function () {
    function IonRatingComponent() {
        this.numStar = 5;
        this.value = 3;
        this.leitura = false;
        this.starClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.stars = [];
        this.calc();
    }
    IonRatingComponent.prototype.ngAfterViewInit = function () {
    };
    IonRatingComponent.prototype.calc = function () {
        this.stars = [];
        var tmp = this.value;
        for (var i = 0; i < this.numStar; i++, tmp--) {
            if (tmp >= 1)
                this.stars.push("star");
            else if (tmp > 0 && tmp < 1)
                this.stars.push("star-half");
            else
                this.stars.push("star-outline");
        }
    };
    IonRatingComponent.prototype.starClicked = function (index) {
        if (!this.leitura) {
            this.value = index + 1;
            this.starClick.emit(this.value);
            this.calc();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], IonRatingComponent.prototype, "numStar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], IonRatingComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IonRatingComponent.prototype, "leitura", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], IonRatingComponent.prototype, "starClick", void 0);
    IonRatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-rating',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\components\ion-rating\ion-rating.html"*/'<ion-grid class="ion-rating-container">\n  <ion-row>\n    <ion-col *ngFor="let star of stars; let i = index" tappable (click)="starClicked(i)">\n      <ion-icon [name]="star"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\components\ion-rating\ion-rating.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], IonRatingComponent);
    return IonRatingComponent;
}());

//# sourceMappingURL=ion-rating.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { Platform } from '../../../node_modules/ionic-angular/umd';


var EventProvider = /** @class */ (function () {
    function EventProvider(http, _platform) {
        this.http = http;
        this._platform = _platform;
        this.basepath = "/eventosapi";
        if (this._platform.is("cordova")) {
            this.basepath = "https://apiabrh.herokuapp.com";
        }
    }
    EventProvider.prototype.getAllEvent = function () {
        //let testURL = (this.basepath+"/eventos");
        //let authHeader = "BearereyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJleHAiOjE1MzY2ODQwNzR9.slatcB28VsE9GWn7SI7eDZtDZHnzp3yqkcEhgzct9qEJayXYiLq09gE8s0EM0x-S-K-hpmuP5oBuThDA6t62xQ";
        //let headersObj = new Http();
        //headersObj.append('Authorization', authHeader);
        return this.http.get(this.basepath + "/eventos");
    };
    EventProvider.prototype.getEventId = function (eventoid) {
        return this.http.get(this.basepath + "/eventos/" + ("" + eventoid));
    };
    EventProvider.prototype.login = function (credentials) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.basepath + '/login', credentials)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (err) {
                err.bodyJson = JSON.parse(err._body);
                reject(err);
            });
        });
        return promise;
    };
    //Enviar email esqueci a senha
    EventProvider.prototype.callEmailPost = function (email) {
        console.log("Email = " + email);
        var param = { email: email };
        var url = "https://apiabrh.herokuapp.com/auth/forgot";
        var request = this.http.post(url, param);
        return request.toPromise();
    };
    EventProvider.prototype.getUser = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.basepath + "/usuarios/" + id).toPromise().then(function (res) {
                resolve(res);
            }, function (err) {
                err.bodyJson = JSON.parse(err.body);
                reject(err);
            });
        });
        return promise;
    };
    EventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], EventProvider);
    return EventProvider;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_storage__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_operators__ = __webpack_require__(22);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsService = /** @class */ (function () {
    function NewsService(db, storage) {
        this.db = db;
        this.storage = storage;
        this.PATH = "news/";
    }
    NewsService.prototype.GetFirstNews = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild("timestamp").limitToFirst(1); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    NewsService.prototype.GetAllNews = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild("timestamp"); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    NewsService.prototype.SaveNew = function (news) {
        if (news.key) {
            this.db.list(this.PATH).update(news.key, news);
        }
        else {
            this.db.list(this.PATH).push(news);
        }
    };
    NewsService.prototype.RemoveNew = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_notice_detail_notice__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_edit_news_edit__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_news_service_news_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_parameter_helper_parameter_helper_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, newsService, loadingCtrl, parameterHelperService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsService = newsService;
        this.loadingCtrl = loadingCtrl;
        this.parameterHelperService = parameterHelperService;
        this.esconder = false;
    }
    NewsPage.prototype.openLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    NewsPage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    NewsPage.prototype.ionViewDidLoad = function () {
        this.openLoading();
        console.log('ionViewDidLoad NewsPage');
        this.news = this.newsService.GetAllNews();
        this.closeLoading();
        this.typeUser();
    };
    NewsPage.prototype.goDetailNotice = function (notice) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detail_notice_detail_notice__["a" /* DetailNoticePage */], { notice: notice });
    };
    NewsPage.prototype.goNewsEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__news_edit_news_edit__["a" /* NewsEditPage */]);
    };
    NewsPage.prototype.typeUser = function () {
        var _this = this;
        var user = this.parameterHelperService.getParameter("user");
        user.then(function (use) {
            console.log(use);
            console.log(use.perfis.length);
            if (use.perfis.length == 1) {
                _this.esconder = false;
            }
            else {
                _this.esconder = true;
            }
        });
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\news\news.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Notícias</ion-title>\n\n    <ion-buttons end>\n\n      <div *ngIf="esconder">\n\n        <button ion-button icon-only color="royal" (click)="goNewsEdit()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="news detail-bg">\n\n  <div *ngFor="let notice of news | async">\n\n    <ion-card class="animated fadeInDown">\n\n\n\n      <div style="color: rgb(255, 255, 255)" class="padding-sm dark-bg">\n\n        {{ notice.datetime }}h\n\n      </div>\n\n\n\n      <img src="{{notice.img}}">\n\n      <ion-card-content>\n\n        <h2 text-justify>\n\n          <b>{{ notice.title }}</b>\n\n        </h2>\n\n      </ion-card-content>\n\n      <ion-row>\n\n        <ion-col class="light-bg">\n\n          <button color="info" (click)="goDetailNotice(notice)" style="text-align: right;" ion-button icon-end small>\n\n            Leia Mais...\n\n            <ion-icon name="add"></ion-icon>\n\n\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n    <hr>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_news_service_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_parameter_helper_parameter_helper_service__["a" /* ParameterHelperService */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_component_helper_component_helper_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_event_event__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parameter_helper_parameter_helper_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_pass_forgot_pass__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__programming_programming__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, parameterHelperService, eventProvider, componentHelperService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.parameterHelperService = parameterHelperService;
        this.eventProvider = eventProvider;
        this.componentHelperService = componentHelperService;
        this.user = {
            email: null,
            password: null
        };
        this.menuCtrl.swipeEnable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.componentHelperService.presentLoading();
        this.eventProvider.login(this.user)
            .then(function (data) {
            var user = _this.user;
            if (user.email == "emanuelcmesquita@gmail.com" || user.email == "andrezaadrifer@gmail.com" || user.email == "marcmatiasdev@gmail.com" || user.email == "victor-21-@hotmail.com" || user.email == "gabriellopesveras@gmail.com" || user.email == "jordandossantosoliveira@gmail.com" || user.email == "ytalowilker97@gmail.com" || user.email == "eventos@abrhpb.com.br") {
                user.type = "adminUser";
            }
            else {
                user.type = "simpleUser";
            }
            console.log(data);
            _this.eventProvider.getUser(data.headers.get("id_user")).then(function (value) {
                var userFull = JSON.parse(value._body);
                _this.parameterHelperService.setParameter("user", userFull);
            });
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__programming_programming__["a" /* ProgrammingPage */]);
        }).catch(function (err) {
            if (err && err.bodyJson) {
                _this.componentHelperService.presentToast(err.bodyJson.message);
            }
            else {
                _this.componentHelperService.presentToast("Falha na Operação");
            }
            loading.dismiss();
        });
    };
    LoginPage.prototype.forgotPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_pass_forgot_pass__["a" /* ForgotPassPage */]);
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\login\login.html"*/'<ion-content class="animated fadeIn login auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding-horizontal text-center class="animated fadeInDown">\n\n      <img src="../../assets/imgs/marca congreparh2.png">\n\n      <h2 ion-text class="light" color="light">\n\n        <strong>CONGREPARH</strong>\n\n      </h2>\n\n    </div>\n\n    <form class="list-form">\n\n      <ion-item>\n\n        <ion-label floating style="color: white;">\n\n          <ion-icon name="mail" item-start class="light" color="light"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <!-- <ion-input type="email" clearInput></ion-input> -->\n\n        <ion-input type="email" [(ngModel)]="user.email" name="email" required="required" clearInput></ion-input>\n\n      </ion-item>\n\n    <ion-item>\n\n      <ion-label floating style="color: white;">\n\n        <ion-icon name="lock" item-start class="light" color="light"></ion-icon>\n\n        Senha\n\n      </ion-label>\n\n      <!-- <ion-input type="password"></ion-input> -->\n\n      <ion-input type="password" [(ngModel)]="user.password" name="password" required="required"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <br>\n\n      <!--<p text-right ion-text color="light" tappable (click)="forgotPass()">\n\n        <strong>Esqueceu a Senha?</strong>\n\n      </p>-->\n\n\n\n      <div>\n\n        <button ion-button icon-start block color="light" tappable (click)="login()">\n\n          <ion-icon name="log-in"></ion-icon>\n\n          ENTRAR\n\n        </button>\n\n\n\n      </div>\n\n\n\n      <div text-center margin-top>\n\n        <span ion-text color="light" tappable (click)="register()">\n\n          <strong>Informações de Cadastro</strong>\n\n        </span>\n\n      </div> \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YTALO\Desktop\ABRHAPP\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_parameter_helper_parameter_helper_service__["a" /* ParameterHelperService */], __WEBPACK_IMPORTED_MODULE_1__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_component_helper_component_helper_service__["a" /* ComponentHelperService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map