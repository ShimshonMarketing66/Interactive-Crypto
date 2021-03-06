webpackJsonp([33],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackEventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrackEventProvider = /** @class */ (function () {
    function TrackEventProvider(http, platform, ga, authData, firebase) {
        this.http = http;
        this.platform = platform;
        this.ga = ga;
        this.authData = authData;
        this.firebase = firebase;
        this.onSuccess = function (result) {
            console.log("result appsflyer", result);
            if (this.authData.user)
                window['plugins'].appsFlyer.trackEvent("open_app", { "user": this.authData.user });
            // this.firebase.logEvent("open_app", this.authData.user);
        };
        platform.ready().then(function () {
        });
    }
    TrackEventProvider.prototype.appInit = function () {
        var _this = this;
        console.log('TrackEventProvider -> appInit');
        if (!this.platform.is("cordova"))
            return;
        var googleId = this.platform.is("ios") ? 'UA-108137424-1' : 'UA-105800211-1';
        this.ga.startTrackerWithId(googleId)
            .then(function () {
            _this.ga.trackEvent("open_app", "first_event");
            console.log('Google analytics is ready now');
        })
            .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        var options = {
            devKey: 'SmETXRWQwsJVhLhWbBBfn',
            onInstallConversionDataListener: true
        };
        if (this.platform.is('ios')) {
            options["appId"] = "1291765934"; // your ios app id in app store 
        }
        window['plugins'].appsFlyer.initSdk(options, this.onSuccess, this.onError);
        this.trackView('open_app');
    };
    TrackEventProvider.prototype.trackEvent = function (page, action) {
        console.log('TrackEventProvider -> trackEvent', page, action);
        if (!this.platform.is("cordova"))
            return;
        this.ga.trackEvent(page, action);
        console.log(this.authData.user, "a");
        if (this.authData.user)
            window['plugins'].appsFlyer.trackEvent(page, this.authData.user);
        this.firebase.logEvent(page, this.authData.user);
    };
    TrackEventProvider.prototype.trackView = function (page) {
        console.log('TrackEventProvider -> trackView ', page);
        if (!this.platform.is("cordova"))
            return;
        this.ga.trackView(page);
        console.log(this.authData.user, "b");
        //  if(this.authData.user)
        // window['plugins'].appsFlyer.trackEvent(page, {"user": this.authData.user});
        // this.firebase.setScreenName(page);
    };
    TrackEventProvider.prototype.onError = function (err) {
        console.log("result err", err);
    };
    TrackEventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_4__auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__["a" /* Firebase */]])
    ], TrackEventProvider);
    return TrackEventProvider;
}());

//# sourceMappingURL=track-event.js.map

/***/ }),

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../modals/countries/countries.module": [
		480,
		6
	],
	"../pages/About-Us/About-Us.module": [
		481,
		9
	],
	"../pages/alert/alert.module": [
		482,
		32
	],
	"../pages/alerts-dashboard/alerts-dashboard.module": [
		483,
		31
	],
	"../pages/allcoin/allcoin.module": [
		488,
		0
	],
	"../pages/brokers-read-review/brokers-read-review.module": [
		489,
		30
	],
	"../pages/brokers/brokers.module": [
		484,
		29
	],
	"../pages/chart/chart.module": [
		485,
		2
	],
	"../pages/class/class.module": [
		486,
		28
	],
	"../pages/connection/connection.module": [
		487,
		27
	],
	"../pages/crypto-review-read-more/crypto-review-read-more.module": [
		491,
		7
	],
	"../pages/forgot-password/forgot-password.module": [
		493,
		26
	],
	"../pages/list-pairs/list-pairs.module": [
		490,
		5
	],
	"../pages/live-feed/live-feed.module": [
		492,
		25
	],
	"../pages/login/login.module": [
		494,
		24
	],
	"../pages/news/news.module": [
		495,
		23
	],
	"../pages/onboarding/onboarding.module": [
		496,
		22
	],
	"../pages/phone-number-verified/phone-number-verified.module": [
		498,
		21
	],
	"../pages/pop-up-rate-us/pop-up-rate-us.module": [
		497,
		20
	],
	"../pages/popup/popup.module": [
		502,
		19
	],
	"../pages/port-folio-transaction/port-folio-transaction.module": [
		500,
		4
	],
	"../pages/port-folio/port-folio.module": [
		501,
		1
	],
	"../pages/port_folio-historic/port_folio-historic.module": [
		499,
		3
	],
	"../pages/read-review/read-review.module": [
		506,
		8
	],
	"../pages/server-error/server-error.module": [
		503,
		18
	],
	"../pages/settings/settings.module": [
		504,
		17
	],
	"../pages/signup/signup.module": [
		505,
		16
	],
	"../pages/tabs/tabs.module": [
		510,
		15
	],
	"../pages/termAndPrivacy/termAndPrivacy.module": [
		511,
		14
	],
	"../pages/update-version/update-version.module": [
		507,
		13
	],
	"../pages/verify-code/verify-code.module": [
		508,
		12
	],
	"../pages/vip/vip.module": [
		509,
		11
	],
	"../pages/wallet-read-review/wallet-read-review.module": [
		512,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryModel; });
var CountryModel = /** @class */ (function () {
    function CountryModel() {
        this.isRequested = false;
        this.city = "";
        this.country = "";
        this.countryCode = "";
        this.region = "";
        this.regionName = "";
        this.timezone = "";
        this.dial_code = "";
    }
    return CountryModel;
}());

//# sourceMappingURL=country-model.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__country_model__ = __webpack_require__(255);

var Profile = /** @class */ (function () {
    function Profile() {
        this.is_phone_number_verified = false;
        this.countryData = new __WEBPACK_IMPORTED_MODULE_0__country_model__["a" /* CountryModel */]();
    }
    return Profile;
}());

//# sourceMappingURL=profile-model.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_native_app_version__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_track_event_track_event__ = __webpack_require__(147);
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
    function MyApp(oneSignal, platform, translate, statusBar, admobFree, admobFree2, authData, http, trackEvent, appVersion, splashScreen) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.translate = translate;
        this.statusBar = statusBar;
        this.admobFree = admobFree;
        this.admobFree2 = admobFree2;
        this.authData = authData;
        this.http = http;
        this.trackEvent = trackEvent;
        this.appVersion = appVersion;
        this.splashScreen = splashScreen;
        this.isFirsTime = true;
        this.rootPage = "";
        translate.setDefaultLang('en');
        // firebase.auth().onAuthStateChanged(user => {  
        platform.ready().then(function () {
            var plt;
            if (!platform.is("cordova")) {
                _this.initialize();
                return;
            }
            else if (platform.is("ios"))
                plt = "ios";
            else if (platform.is("android"))
                plt = "android";
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.http.get("https://afternoon-mountain-15657.herokuapp.com/api/versionToUpdate/" + plt).toPromise()
                .then(function (version) {
                var compareVersions = __webpack_require__(460);
                appVersion.getVersionNumber().then(function (ver) {
                    var a = compareVersions(ver, (version).toString());
                    if (a == -1) {
                        _this.rootPage = "update-app";
                    }
                    else {
                        _this.initialize();
                    }
                });
            })
                .catch(function (err) {
                console.log(err);
                _this.rootPage = "server-error";
            });
            // });
            if (!_this.platform.is('cordova'))
                return;
            // var options = {
            //   devKey: 'SmETXRWQwsJVhLhWbBBfn'// your AppsFlyer devKey               
            // };
            // if (this.platform.is('ios')) {
            //   options["appId"] = "1291765934";            // your ios app id in app store 
            // }
            // window['plugins'].appsFlyer.initSdk(options);
            _this.oneSignal.startInit('5a9c7a10-76f6-43f0-87c6-7ce90cd2117c', '783700927099');
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            _this.oneSignal.handleNotificationReceived().subscribe(function () {
                // do something when notification is received
            });
            _this.oneSignal.handleNotificationOpened().subscribe(function () {
                // do something when a notification is opened
            });
            _this.oneSignal.endInit();
            //  var x=this.oneSignal.getIds()["__zone_symbol__value"]["userId"]
            //  if(this.authData.user._id && !this.authData.user.notificationId)
            _this.alreadyUser();
        });
    }
    MyApp.prototype.alreadyUser = function () {
        var _this = this;
        if (!this.platform.is('cordova'))
            return;
        var bannerConfig = {
            // add your config here
            // for the sake of this example we will just use the test config
            isTesting: false,
            autoShow: true,
            id: this.platform.is("ios") ? "ca-app-pub-7144298839495795/5755948624" : "ca-app-pub-7144298839495795/5755948624"
        };
        var bannerConfig2 = {
            // add your config here
            // for the sake of this example we will just use the test config
            isTesting: false,
            autoShow: true,
            id: this.platform.is("ios") ? 'ca-app-pub-7144298839495795/9697819798' : 'ca-app-pub-7144298839495795/8900986715'
        };
        if (this.authData.user.state != "approved") {
            this.admobFree.banner.config(bannerConfig);
            this.admobFree2.interstitial.config(bannerConfig2);
            this.admobFree.banner.prepare();
            this.admobFree2.interstitial.prepare().then(function () {
                console.log("aviho");
            })
                .catch(function (e) { return console.log(e); });
            setTimeout(function () {
                if (_this.authData.user.state != 'approved') {
                    // 
                    console.log(".user.state != 'approved");
                    _this.admobFree2.interstitial.show();
                    setTimeout(function () {
                        _this.admobFree.banner.show();
                    }, 10000);
                }
            }, 7500);
        }
    };
    MyApp.prototype.initialize = function () {
        var _this = this;
        this.trackEvent.appInit();
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                if (_this.isFirsTime) {
                    _this.authData.checkIfUserExistAlready(user.uid)
                        .then(function (userFromServer) {
                        if (userFromServer == null)
                            _this.navCtrl.setRoot("onboarding");
                        else {
                            if (userFromServer.is_phone_number_verified) {
                                console.log("tabs");
                                // this.alreadyUser()
                                _this.rootPage = "tabs";
                                _this.isFirsTime = false;
                                if (!userFromServer.notificationId)
                                    _this.authData.updatenotificationId();
                                if (userFromServer.countryData.city)
                                    _this.authData.updatecountryData();
                                if (!_this.platform.is("ios")) {
                                    _this.authData.initializeStore();
                                }
                                if (_this.authData.user["isAlvexo"] == true)
                                    _this.authData.user.state = 'approved';
                            }
                            else {
                                console.log("c");
                                _this.navCtrl.setRoot("phone-number-verified");
                            }
                        }
                    });
                }
            }
            else {
                _this.isFirsTime = false;
                _this.rootPage = "onboarding";
            }
            // this.isFirsTime = false;
        });
        setTimeout(function () {
            if (_this.isFirsTime) {
                _this.navCtrl.setRoot("tabs");
                console.log("d");
            }
        }, 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_11__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_data_auth_data__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CryptoProvider = /** @class */ (function () {
    // private readonly base_url: string = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="
    // private readonly base_url_CONTINUE: string = "&tsyms="
    function CryptoProvider(http, authData) {
        this.http = http;
        this.authData = authData;
        this.mywatchlist = [];
        this.trending = [];
        this.arrAllCrypto = [];
        this.isWatchlistEmpty = true;
        this.first20crypto = [];
        this.getMarketcap();
        this.getlink();
    }
    CryptoProvider.prototype.getAllCrypto = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.arrAllCrypto.length < 1) {
                _this.http.get("https://afternoon-mountain-15657.herokuapp.com/api/getAllCrypto").toPromise()
                    .then(function (data) {
                    _this.arrAllCrypto = data;
                    for (var index = 0; index < _this.arrAllCrypto.length; index++) {
                        if (_this.arrAllCrypto[index].likes > _this.arrAllCrypto[index].unlikes) {
                            _this.arrAllCrypto[index]["Bullish"] = true;
                            _this.arrAllCrypto[index]["progreSbar"] = Number((_this.arrAllCrypto[index].likes / (_this.arrAllCrypto[index].unlikes + _this.arrAllCrypto[index].likes) * 100).toFixed(2));
                        }
                        else
                            _this.arrAllCrypto[index]["progreSbar"] = Number((_this.arrAllCrypto[index].unlikes / (_this.arrAllCrypto[index].unlikes + _this.arrAllCrypto[index].likes) * 100).toFixed(2));
                        var a = parseInt(((index % 6).toString()));
                        if (a > 4)
                            _this.arrAllCrypto[index].isvip = true;
                    }
                    _this.getmyWatchList();
                    _this.gettrending();
                    // let index = 0;
                    // for (const key in data) {
                    //   if (this.cryptocurrencies[data[key]["fromSymbol"]] != undefined) {
                    //     data[key]["name"] = this.cryptocurrencies[data[key]["fromSymbol"]];
                    //     data[key]["shortName"] = data[key]["name"].split(" ")[0];
                    //     data[key]["state"] = "none";
                    //     data[key]["index"] = index;
                    //     data[key]["logo"] = "https://cloud-marketing66.herokuapp.com/logo/" + (data[key]["fromSymbol"]);
                    //     this.arrAllCrypto.push(data);
                    //     index++;
                    //   } 
                    // }
                    resolve(_this.arrAllCrypto);
                });
            }
            else {
                resolve(_this.arrAllCrypto);
            }
        });
    };
    CryptoProvider.prototype.addToWhachList = function (data) {
        this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/addwatchlist", data).toPromise().then(function (data1) {
            console.log(data1);
        });
    };
    CryptoProvider.prototype.deleteToWhachList = function (data) {
        this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/deletewatchlist", data).toPromise().then(function (data1) {
            console.log(data1);
        });
    };
    CryptoProvider.prototype.getmyWatchList = function () {
        if (!this.authData.user._id)
            return;
        this.mywatchlist = [];
        console.log(this.authData.user);
        for (var index = 0; index < this.authData.user.watchlist.length; index++)
            for (var index2 = 0; index2 < this.arrAllCrypto.length; index2++)
                if (this.authData.user.watchlist[index].pair == this.arrAllCrypto[index2].pair) {
                    this.mywatchlist.push(this.arrAllCrypto[index2]);
                    this.arrAllCrypto[index2]["isWatchlist"] = true;
                }
        if (this.mywatchlist.length > 0)
            this.isWatchlistEmpty = false;
    };
    CryptoProvider.prototype.gettrending = function () {
        this.trending = [];
        for (var index = 0; index < this.arrAllCrypto.length; index++)
            if (this.arrAllCrypto[index].change24 > 10 || this.arrAllCrypto[index].change24 < -10) {
                this.trending.push(this.arrAllCrypto[index]);
            }
    };
    CryptoProvider.prototype.getMarketcap = function () {
        var _this = this;
        this.http.get("http://afternoon-mountain-15657.herokuapp.com/api/getMarketcap").toPromise()
            .then(function (Marketcap) {
            _this.globalmarketcap = Marketcap.totalMarketcap;
        }).catch(function (err) {
            console.error(err);
        });
    };
    CryptoProvider.prototype.updateEditInServer = function (watchlist) {
        var _this = this;
        this.buildOrderAray(watchlist).then(function (data) {
            _this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/fixOrderOfWatchList", { _id: _this.authData.user._id, watchlist: data }).toPromise()
                .then(function (text) {
                console.log(text);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    CryptoProvider.prototype.buildOrderAray = function (watchlist) {
        return new Promise(function (resolve, reject) {
            var orderAray = [];
            for (var index = 0; index < watchlist.length; index++)
                orderAray.push({ pair: watchlist[index].pair });
            resolve(orderAray);
        });
    };
    CryptoProvider.prototype.getlink = function () {
        var _this = this;
        this.http.get("http://afternoon-mountain-15657.herokuapp.com/api/getTradelink").toPromise()
            .then(function (text) {
            console.log(text);
            _this.tradeLink = text.link;
        }).catch(function (err) {
            console.error(err);
        });
    };
    CryptoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__auth_data_auth_data__["a" /* AuthDataProvider */]])
    ], CryptoProvider);
    return CryptoProvider;
}());

//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialDataProvider = /** @class */ (function () {
    function SocialDataProvider(http, authData, events) {
        this.http = http;
        this.authData = authData;
        this.events = events;
        console.log('Hello SocialDataProvider Provider');
    }
    SocialDataProvider.prototype.updateLike = function (borasaArry, document_id, type, index, CollectionName) {
        var likeflag = false;
        var unLikeflag = false;
        if (type == "like") {
            for (var i in this.authData.user.likes) {
                // console.log(this.authData.user.likes,"this.authData.user.likes",(this.authData.user.likes).length);
                if (document_id == this.authData.user.likes[i]) {
                    delete this.authData.user.likes[i];
                    this.authData.user.likes.splice(Number(i), 1);
                    borasaArry[index].Like = false;
                    likeflag = true;
                    borasaArry[index].likes -= 1;
                    this.updateServerDeleteEmotion(document_id, type, CollectionName);
                }
            }
            if (!likeflag) {
                for (var i in this.authData.user.unlikes) {
                    if (document_id == this.authData.user.unlikes[i]) {
                        delete this.authData.user.unlikes[i];
                        this.authData.user.unlikes.splice(Number(i), 1);
                        borasaArry[index].unLike = false;
                        unLikeflag = true;
                        borasaArry[index].unlikes -= 1;
                        this.updateServerDeleteEmotion(document_id, "unlike", CollectionName);
                    }
                }
            }
            if (!likeflag) {
                borasaArry[index].Like = true;
                this.authData.user.likes.push(document_id);
                borasaArry[index].likes += 1;
                this.updateServerAddEmotion(document_id, "like", CollectionName);
            }
        }
        else {
            for (var i in this.authData.user.unlikes) {
                if (document_id == this.authData.user.unlikes[i]) {
                    delete this.authData.user.unlikes[i];
                    this.authData.user.unlikes.splice(Number(i), 1);
                    borasaArry[index].unLike = false;
                    unLikeflag = true;
                    borasaArry[index].unlikes -= 1;
                    this.updateServerDeleteEmotion(document_id, type, CollectionName);
                }
            }
            if (!unLikeflag) {
                this.updateServerAddEmotion(document_id, type, CollectionName);
                borasaArry[index].unlikes += 1;
                for (var i in this.authData.user.likes) {
                    if (document_id == this.authData.user.likes[i]) {
                        delete this.authData.user.likes[i];
                        this.authData.user.likes.splice(Number(i), 1);
                        borasaArry[index].Like = false;
                        borasaArry[index].likes -= 1;
                        this.updateServerDeleteEmotion(document_id, "like", CollectionName);
                    }
                }
                borasaArry[index].unLike = true;
                this.authData.user.unlikes.push(document_id);
            }
        }
    };
    SocialDataProvider.prototype.updateServerDeleteEmotion = function (document_id, type, CollectionName) {
        console.log(document_id, type, CollectionName);
        var data = {
            userId: this.authData.user._id,
            product_id: document_id,
            type: type,
            CollectionName: CollectionName
        };
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/deleteEmotion", data)
            .toPromise()
            .then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });
    };
    SocialDataProvider.prototype.updateServerAddEmotion = function (document_id, type, CollectionName) {
        var data = {
            userId: this.authData.user._id,
            product_id: document_id,
            type: type,
            CollectionName: CollectionName
        };
        console.log(data, "data");
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/addEmotion", data)
            .toPromise()
            .then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });
    };
    SocialDataProvider.prototype.checkLike = function (borasaArry) {
        for (var i in this.authData.user.likes)
            if (borasaArry._id == this.authData.user.likes[i])
                borasaArry.Like = true;
    };
    SocialDataProvider.prototype.checkunLike = function (borasaArry) {
        for (var i in this.authData.user.likes)
            if (borasaArry._id == this.authData.user.unlikes[i])
                borasaArry.unLike = true;
    };
    SocialDataProvider.prototype.checkLike2 = function (borasaArry) {
        for (var j in borasaArry) {
            for (var i in this.authData.user.likes) {
                if (borasaArry[j]._id == this.authData.user.likes[i])
                    borasaArry[j].Like = true;
            }
        }
    };
    SocialDataProvider.prototype.checkUnlike2 = function (borasaArry) {
        console.log(borasaArry);
        for (var j in borasaArry) {
            for (var i in this.authData.user.unlikes) {
                console.log(borasaArry[j]._id == this.authData.user.unlikes[i]);
                if (borasaArry[j]._id == this.authData.user.unlikes[i])
                    borasaArry[j].unLike = true;
            }
        }
    };
    SocialDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__auth_data_auth_data__["a" /* AuthDataProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Events */]])
    ], SocialDataProvider);
    return SocialDataProvider;
}());

//# sourceMappingURL=social-data.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product-model.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationReviewService; });
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

var EducationReviewService = /** @class */ (function () {
    function EducationReviewService() {
    }
    EducationReviewService.prototype.getClassReview = function (num, language) {
        if (language == 'fr') {
            switch (num) {
                case 1: {
                    return '\r\n<h1 class=\"title\">Bienvenue \u00E0 l\u2019Acad\u00E9mie\u2026<\/h1><br>\r\n  \r\n  Nous vous proposons ici une s\u00E9rie de cours qui vous permettront de mieux comprendre le monde passionnant des monnaies virtuelles, et de pouvoir par la suite investir ou trader des crypto monnaies.<br>\r\n  \r\n  Pour comprendre les crypto monnaies il faut d\u2019abord comprendre \u00E0 quoi sert la monnaie et voir si les monnaies virtuelles sont bien des monnaies au sens premier du concept.<\/div>\r\n<h1 class=\"title\">Tout d\'abord,\u00E0 quoi sert la monnaie ?\r\n<\/h1>\r\n<div class=\"text\">1- La monnaie est une unit\u00E9 de compte qui permet de mesurer la valeur des biens et des services \u00E9chang\u00E9s.<br>\r\n  \r\n  2- Elle est un instrument d\'\u00E9change.<br>\r\n  \r\n  3- Elle est une r\u00E9serve de valeur permettant de diff\u00E9rer ses achats ou de constituer une \u00E9pargne.<\/div>\r\n<h1 class=\"title\">Qui \u00E9met la monnaie ?\r\n<\/h1>\r\n<div class=\"text\">Pour ce qui est du fonctionnement des monnaies actuelles, elles sont \u00E9mises par les banques centrales des diff\u00E9rents pays, qui les \u00E9mettent en fonction d\u2019imp\u00E9ratifs \u00E9conomiques et politiques.<br>\r\n  \r\n  Ce sont des monnaies dites centralis\u00E9es.<br>\r\n  \r\n  Aujourd\'hui, la plupart des \u00E9changes fait en monnaie traditionnelles se font de fa\u00E7on \u00E9lectronique (virements, CB\u2026),et passent donc par les banques.<br>\r\n  \r\n  La valeur de ces devises d\u00E9pend de la loi de l\u2019offre et de la demande sur les march\u00E9s boursiers.<\/div>\r\n<h1 class=\"title\">Qu\u2019en est il des crypto monnaies ? R\u00E9pondent elles aux m\u00EAmes r\u00E8gles ?\r\n<\/h1>\r\n<div class=\"text\">En ce qui concerne la fonction de la monnaie, les crypto monnaies r\u00E9pondent aux m\u00EAmes principes.<br>\r\n  \r\n  En ce qui concerne leur valeur, l\u00E0 aussi, elle d\u00E9pend des loi de l\u2019offre et de la demande des march\u00E9s.<br>\r\n  \r\n  Par contre en ce qui concerne son fonctionnement, nous ne sommes plus du tout dans les m\u00EAmes technologies ni dans le m\u00EAme syst\u00E8me centralis\u00E9 :<br>\r\n  \r\n   \r\n  \r\n  Premi\u00E8rement, la crypto monnaie n\u2019a pas de support physique (pi\u00E8ces, billets..)<br>\r\n  \r\n  Elle est une monnaie uniquement virtuelle.<br>\r\n  \r\n  De plus les crypto monnaies ne d\u00E9pendent plus des banques ou des \u00C9tats et de leurs int\u00E9r\u00EAts \u00E9conomiques ou politique.<br>\r\n  \r\n  C\u2019est une monnaie d\u00E9centralis\u00E9e.<br>\r\n  \r\n   \r\n  \r\n  Quand \u00E0 sa technologie, elle est tout \u00E0 fait r\u00E9volutionnaire, bas\u00E9e sur des algorithmes math\u00E9matiques, et sur le principe de la blockchain, mise au point par le concepteur de la premi\u00E8re monnaie num\u00E9rique en 2009, Satoshi Nakamoto (nom d\u2019emprunt, le personnage restant inconnu) le Bitcoin.<br>\r\n  \r\n  Ces devises sont en fait cr\u00E9\u00E9es par des \u201C mineurs\u201D, qui sont des milliers d\u2019individus ou d\u2019entreprises qui mettent la puissance de calcul de leurs ordinateurs au services de cette technologie.<br>\r\n  \r\n   \r\n  \r\n  Pour comprendre comment cela fonctionne nous vous conseillons de suivre notre deuxi\u00E8me cours:<br>\r\n  \r\n  Qu\u2019est ce que la Blockchain ?<\/div>\r\n';
                }
                case 2: {
                    return '\r\n<h1 class=\"title\">Blockchain qu\u2019est-ce que c\u2019est ?<\/h1>\r\n<div class=\"text\">Pour comprendre un peu mieux le fonctionnement des monnaies digitales telles que le bitcoin, il est int\u00E9ressant de comprendre ce qu\'est la blockchain, et inversement nous comprendrons davantage la blockchain gr\u00E2ce \u00E0 l\u2019exemple du bitcoin, la technologie de l\u2019un (le blockchain) ayant \u00E9t\u00E9 historiquement cr\u00E9\u00E9e au service de l\u2019autre (le bitcoin).<br><\/div>\r\n<h1 class=\"title\">\r\n  Peut on donner une d\u00E9finition simple de la blockchain ?<\/h1>\r\n<div class=\"text\">La blockchain est en quelques mots une base de donn\u00E9es, s\u00E9curis\u00E9e, fiable, infalsifiable et distribu\u00E9e.<br> C\u2019est la possibilit\u00E9 de faire des transactions en toute confiance, sans se conna\u00EEtre et sans interm\u00E9diaire.<br>  \u00C7a c\u2019est la d\u00E9finition ! Mais que ce cache t\'il derri\u00E8re cette d\u00E9finition ? La blockchain est un protocole informatique, qui va bouleverser le transfert d\u2019argent (mais pas seulement).<br> Il s\'agit en fait d\u2019un grand registre num\u00E9rique ind\u00E9l\u00E9bile, contenant des informations regroup\u00E9es en bloc.<br> Ces informations sont gard\u00E9es sous forme de cryptographies, c\'est \u00E0 dire sous forme de messages cod\u00E9s.<br> En g\u00E9n\u00E9ral lorsqu\u2019on code un message,il nous faut une cl\u00E9.<br><\/div>\r\n<h1 class=\"title\">Qu\u2019est-ce qu\u2019une cl\u00E9 ?<\/h1>\r\n<div class=\"text\">Par exemple on d\u00E9cide d\u2019attribuer un chiffre \u00E0 chaque lettre de l\u2019alphabet.<br> C\u2019est une cl\u00E9.<br>Si vous poss\u00E9dez cette cl\u00E9 vous pourrez d\u00E9chiffrer le message et r\u00E9pondre \u00E0 ce message de la m\u00EAme fa\u00E7on.<br> Mais il existe une forme de cryptage beaucoup plus sophistiqu\u00E9e, c\u2019est la cryptographie asym\u00E9trique, pour laquelle la cl\u00E9 qui a cod\u00E9 le message n\u2019est pas la m\u00EAme que celle qui le d\u00E9code.<br><\/div>\r\n<h1 class=\"title\">Comment est-ce possible ?\r\n  <\/h1>\r\n<div class=\"text\">C\u2019est un peu comme si vous poss\u00E9diez un dictionnaire fran\u00E7ais-chinois, mais que vous n\u2019ayez pas le dictionnaire chinois- fran\u00E7ais.<br> Tous ces codes se trouvant sous forme d\'algorithme extr\u00EAmement compliqu\u00E9s.<br>\r\n  <\/div>\r\n<h1 class=\"title\">Mais concr\u00E8tement que se passe-t-il lorsqu\'on effectue une transaction gr\u00E2ce \u00E0 la technologie blockchain ?<\/h1>\r\n<div class=\"text\">Prenons un exemple: \r\n  \r\n  Monsieur X,  d\u00E9sire transf\u00E9rer 10 bitcoin \u00E0 Monsieur Y.<br> Chacun d\u2019entre eux va utiliser une cl\u00E9 priv\u00E9e, qui pourrait repr\u00E9senter sa signature, et une cl\u00E9 publique, sorte de bo\u00EEte aux lettres.<br> Si X veut donner 10 bitcoin \u00E0 Y, il utilise sa cl\u00E9 priv\u00E9e pour initier la transaction, puis envoie la somme \u00E0 l\u2019adresse publique de Y.<br> \r\n  \r\n  L\u2019ensemble de ces interactions est consign\u00E9 dans un bloc dont tous les utilisateurs du r\u00E9seau peuvent avoir une copie.<br> Cet historique de toutes les transactions effectu\u00E9es, indique la date, le montant, les cl\u00E9s publiques des deux utilisateurs, mais pas leur identit\u00E9 r\u00E9elle.<br> Pour s\u00E9curiser le syst\u00E8me, des particuliers ou des entreprises connectent leurs ordinateurs sur le r\u00E9seau et apportent de la puissance de calcul, on les appelle des \u201Cmineurs\u201D.<br> A l\u2019aide de formules math\u00E9matiques, ils v\u00E9rifient que X poss\u00E8de bien les 10 bitcoin qu\u2019il d\u00E9sire transf\u00E9rer (et ce, en v\u00E9rifiant toutes les transactions faites depuis la gen\u00E8se des bitcoin).<br> Une fois v\u00E9rifi\u00E9e, la transaction est inscrite de fa\u00E7on ind\u00E9l\u00E9bile dans le registre.<br> C\u2019est un bloc qui vient s\'ajouter \u00E0 la cha\u00EEne des blocs, d\u2019o\u00F9 le nom : blockchain.<br> Ainsi gr\u00E2ce \u00E0 ce syst\u00E8me,il est impossible de poss\u00E9der de faux bitcoin, de nier avoir effectu\u00E9 une transaction, ou d\u2019utiliser deux fois le m\u00EAme bitcoin.<br> Les mineurs s\u2019en apercevrait et stopperait imm\u00E9diatement la transaction apr\u00E8s avoir analys\u00E9 l\u2019historique du fraudeur.<br><\/div>\r\n<h1 class=\"title\">Mais pourquoi les \u201Cmineurs\u201D fourniraient il cette puissance de calcul ?\r\n<\/h1>\r\n<div class=\"text\">Quel est leur int\u00E9r\u00EAt dans cette histoire.<br> (D\u2019autant que pour faire ces calculs ils ont besoin d\u2019une \u00E9norme puissance de calcul qui n\u2019est pas donn\u00E9 \u00E0 tout un chacun !) \r\n  \r\n  Leur int\u00E9r\u00EAt c\u2019est qu\u2019ils vont \u00EAtre r\u00E9mun\u00E9r\u00E9 pour ce travail par de nouveaux bitcoin, ainsi que par des frais de transaction.<br> \r\n  \r\n  Cette monnaie est donc imprim\u00E9e au fur et \u00E0 mesure des transactions gr\u00E2ce aux mineurs qui re\u00E7oivent en \u00E9change une partie de cette cr\u00E9ation de valeur.<br> Et c\u2019est ce qui formera la masse mon\u00E9taire du bitcoin (masse mon\u00E9taire qui ne devra pas d\u00E9passer les 21 millions de bitcoin \u00E9mis, c\u2019est la r\u00E8gle qui a \u00E9t\u00E9 fix\u00E9e au d\u00E9part).<br><\/div>\r\n<h1 class=\"title\">Conclusion:<\/h1>\r\n<div class=\"text\">La blockchain permet donc de placer sa confiance non pas dans un interm\u00E9diaire classique, mais dans un r\u00E9seau d\u2019ordinateurs connect\u00E9s les uns aux autres.<br> \r\n  \r\n  Il n\u2019y a plus d\u2019organe central de contr\u00F4le, tel un pays, une banque ou une entreprise qui pourrait avoir la main sur le registre (voir: Aucun organisme ne peut se saisir de vos bitcoin- Pourquoi investir ou acheter du bitcoin).<br>  On peut donc s\u2019\u00E9changer des valeurs de pair \u00E0 pair (peer to peer en anglais) sans interm\u00E9diaire.<br> \r\n  \r\n  Nous comprenons mieux \u00E0 pr\u00E9sent la d\u00E9finition donn\u00E9e au d\u00E9but de cet article : La blockchain est une base de donn\u00E9es s\u00E9curis\u00E9e, fiable, infalsifiable, et distribu\u00E9e.<br> C\u2019est la possibilit\u00E9 de faire des transactions en toute confiance, sans se conna\u00EEtre et sans interm\u00E9diaire.<br><\/div>\r\n\r\n\r\n\r\n';
                }
                case 3: {
                    return '<h1 class=\"title\">Comment sauvegarder ses Bitcoins (ou tout autres monnaies virtuelles)?<\/h1>\r\n<div class=\"text\">Pour sauvegarder vos Bitcoins vous aurez besoin d\u2019un wallet!<\/div>\r\n<h1 class=\"title\">Mais qu\u2019est ce qu\u2019un wallet?<\/h1>\r\n<div class=\"text\">Vous d\u00E9sirez acheter des Bitcoins et donc, soit les conserver \u00E0 des fins d\u2019investissement, soit les d\u00E9penser.<br> Pour cela il vous faut un wallet.<br>\r\n  \r\n  Un wallet est en fait un portefeuille \u00E9lectronique.<br> C\u2019est \u00E0 dire qu\u2019un wallet Bitcoin est un logiciel client que vous devez installer sur votre ordinateur.<br>  Ce logiciel vous permettant de vous connecter au r\u00E9seau Bitcoin de fa\u00E7on automatique pour t\u00E9l\u00E9charger l\'\u00E9tat le plus r\u00E9cent du r\u00E9seau et de conserver vos devises.<br> Il va vous donner la possibilit\u00E9 de garder votre cl\u00E9 priv\u00E9e.<br>\r\n  \r\n  En fait le logiciel vous permettra de cr\u00E9er des adresses Bitcoin pour recevoir ou envoyer vos Bitcoins.<br>\r\n  \r\n  Dans ce sens, il se rapproche de la gestion d\u2019un compte bancaire \u00E9lectronique permettant d\u2019envoyer, de recevoir ou de stocker vos Bitcoins, et d\u2019effectuer un suivi de vos transactions.<br> De fa\u00E7on plus technique, votre wallet va g\u00E9n\u00E9rer et stocker des couples de cl\u00E9s publiques et priv\u00E9es qui vous permettront de faire vos transactions et d\u2019en assurer l\'int\u00E9grit\u00E9.<br> Pour rappel, la cl\u00E9 publique est l\u2019adresse Bitcoin, et la cl\u00E9 priv\u00E9e, votre signature.<br><\/div>\r\n<h1 class=\"title\">Comment choisir son wallet ?<\/h1>\r\n<div class=\"text\">Il existe de nombreux wallet, donc comment le choisir ? Vous devez premi\u00E8rement le choisir en fonction du support que vous allez utiliser.<br><\/div>\r\n<ul>\r\n  <li><span>En ligne, comme \u201DCircle\u201D, par exemple.<br><\/span><\/li>\r\n  <li><span>Ordinateur de bureau, comme \u201CArmory\u201D par exemple.<br>\r\n  <\/span><\/li>\r\n  <li><span>Mobile sur votre smartphone, comme Myc\u00E9lium wallet, par exemple.<br>\r\n  <\/span><\/li>\r\n  <li><span>Ou encore physique, hardware wallet comme Ledger, par exemple, ou paper wallet.<br>\r\n    Ensuite, dans ces cat\u00E9gories, il existe deux sortes de portefeuilles:<br>\r\n    <\/span><\/li>\r\n  <li><span>Les portefeuilles \u201Cfull-nodes\u201D, c\u2019est \u00E0 dire des portefeuilles qui vont stocker l\'int\u00E9gralit\u00E9 de la blockchain sur votre ordinateur et vous permettra d\u2019\u00EAtre un utilisateur actif du r\u00E9seau. L\u2019inconv\u00E9nient \u00E9tant que vous devez avoir un espace disque suffisant pour enregistrer et mettre \u00E0 jour la blockchain.<br>\r\n  <\/span><\/li>\r\n  <li><span>Les portefeuilles l\u00E9gers (light wallet).<br> Qui eux ne stockent pas la blockchain.<br> Ils se basent sur les serveurs tout en v\u00E9rifiant l\'int\u00E9grit\u00E9 des donn\u00E9es.<br>\r\n  <\/span><\/li>\r\n<\/ul>\r\n  <div class=\"text\">Ce sera \u00E0 vous, pour chacun des sites et applications, de v\u00E9rifier si il s\'agit d\'un portefeuille l\u00E9ger ou non.<br>\r\n  <\/div>\r\n  \r\n\r\n<h1 class=\"title\">Portefeuilles en ligne.<br>\r\n<\/h1>\r\n<div class=\"text\">Pour des d\u00E9butants, le wallet en ligne est sans doute le moyen le plus simple.<br> Vous cr\u00E9ez votre wallet directement sur le site de wallet en ligne, en suivant les instructions \u00E9tape par \u00E9tape.<br> L\'int\u00E9r\u00EAt de ce portefeuille \u00E9tant de ne pas avoir \u00E0 t\u00E9l\u00E9charger une application et de pouvoir \u00EAtre accessible de n\u2019importe quel ordinateur.<br> Ainsi si vous avez omis de sauvegarder les donn\u00E9es de votre ordinateur, votre wallet ne pourra pas dispara\u00EEtre en cas de panne informatique.<br> L\u2019inconv\u00E9nient est bien entendu la s\u00E9curit\u00E9, car vous confiez vos Bitcoins \u00E0 un tiers.<br> Il est donc indispensable de s\u2019assurer de la fiabilit\u00E9 du site choisi et de ses mesures de s\u00E9curit\u00E9 avant de se connecter.<br><\/div>\r\n<h1 class=\"title\">Le portefeuille mobile.<br>\r\n<\/h1>\r\n<div class=\"text\">Il s\'agit de t\u00E9l\u00E9charger sur votre t\u00E9l\u00E9phone mobile une application qui prend g\u00E9n\u00E9ralement peu de m\u00E9moire, puis de configurer votre wallet.<br> Tout cela ne prenant que quelques minutes.<br> L\u2019avantage c\u2019est que vous avez vos Bitcoins partout avec vous.<br> De plus, les paiements sont rapides et vous pouvez les effectuer de partout.<br> Vous pouvez payer directement avec votre t\u00E9l\u00E9phone.<br> Au niveau s\u00E9curit\u00E9, il vous faudra absolument verrouiller votre smartphone et l\u2019application, avec un code.<br><\/div>\r\n<h1 class=\"title\">Le portefeuille de bureau (sur ordinateur).<br>\r\n<\/h1>\r\n<div class=\"text\">ci aussi il vous faudra t\u00E9l\u00E9charger une application et suivre les instructions pas \u00E0 pas.<br> C\u2019est sans doute la mani\u00E8re la plus s\u00FBre de garder vos Bitcoins.<br> Mais cela d\u00E9pendra de la fa\u00E7on dont vous vous en servez:  Il vous faudra effectuer des sauvegardes et mettre votre portefeuille sur cl\u00E9 USB.<br><\/div>\r\n<h1 class=\"title\">Le portefeuille physique.<br>\r\n<\/h1>\r\n<div class=\"text\">En plus des ses diff\u00E9rents supports, il est \u00E9galement conseill\u00E9 d\u2019imprimer la cl\u00E9 de chiffrement sur papier et de mettre ce pr\u00E9cieux papier en lieu s\u00FBr, et m\u00EAme \u00E0 plusieurs endroits (c\u2019est un portefeuille papier).<br> Il existe aussi des petits appareils hors ligne ou garder vos cl\u00E9s appel\u00E9s hardware wallets.<br> Il est \u00E9galement possible d\u2019utiliser un ordinateur d\u00E9di\u00E9 uniquement \u00E0 vos Bitcoins et non connect\u00E9 \u00E0 Internet.<br>\r\n  \r\n  <\/div>\r\n  <h1 class=\"title\">Conclusion:<\/h1>\r\n    <div class=\"text\">Cr\u00E9er son portefeuille Bitcoin (ou tout autres monnaies virtuelles) n\u2019est donc pas tr\u00E8s difficile, ce qui l\u2019est davantage c\u2019est de choisir dans quelle sorte de portefeuille les sauvegarder, mais vous avez toujours la possibilit\u00E9 d\u2019opter pour plusieurs sortes de portefeuilles en m\u00EAme temps, ce qui vous permettra de parer \u00E0 toute \u00E9ventualit\u00E9.<br><\/div>\r\n';
                }
                case 4: {
                    return '<h1 class=\"title\">Pourquoi investir ou acheter du bitcoin<\/h1>\r\n<div class=\"text\">Dix bonnes raisons pour acheter ou utiliser du Bitcoin.<br>\r\n  \r\n  Maintenant que nous avons compris dans les grandes lignes ce que sont le bitcoin et les autres monnaies virtuelles, et comment elles fonctionnent, il serait int\u00E9ressant de savoir quel int\u00E9r\u00EAt y a-t-il \u00E0 poss\u00E9der du bitcoin ou \u00E0 l\u2019utiliser.<br> En voici quelques raisons.<br><\/div>\r\n<h1 class=\"title\">1- Le bitcoin c\u2019est plus rapide.<br><\/h1>\r\n<div class=\"text\">Une transaction en bitcoin est extr\u00EAmement rapide: Si vous d\u00E9sirez faire envoyer un ch\u00E8que de votre banque \u00E0 une autre banque, il faudra g\u00E9n\u00E9ralement plusieurs jours pour confirmer l\'op\u00E9ration, car la banque qui re\u00E7oit votre ch\u00E8que devra s\u2019assurer que vous avez bien la somme \u00E9quivalente sur votre compte.<br>\r\n  \r\n  S\'il s\u2019agit d\u2019un virement \u00E0 l\u2019\u00E9tranger, cela prendra \u00E9galement un certain temps.<br>\r\n  \r\n  Si vous d\u00E9sirez acheter une marchandise et que vous d\u00E9cidez  de la payer en bitcoin, la transaction sera instantan\u00E9e si le marchand prend le risque d\u2019accepter la transaction sans qu\u2019elle est \u00E9t\u00E9 valid\u00E9e par la \u201Cblockchain\u201D.<br> Sinon cela prendra environ dix minutes.<br> Mais, me direz vous, avec une carte bancaire c\u2019est aussi instantan\u00E9 non? Oui mais c\u2019est plus cher!<\/div>\r\n<h1 class=\"title\">2- Le bitcoin c\u2019est pas cher.<br><\/h1>\r\n<div class=\"text\">Dans le cas d\'une transaction entre vous et un vendeur, le vendeur devra payer une commission.<br> Et certains vendeurs voudront r\u00E9cup\u00E9rer cette commission en vous la faisant payer dans son prix de vente !\r\n  \r\n  Pour le bitcoin, les frais sont dans beaucoup de cas inexistants ou tr\u00E8s peu \u00E9lev\u00E9s.<br><\/div>\r\n<h1 class=\"title\">3-  Aucun organisme ne peut se saisir de vos bitcoin.<br>\r\n  \r\n  <\/h1>\r\n<div class=\"text\">En  1999  le Franc \u00E9tait remplac\u00E9 par l\u2019Euro, obligeant ainsi tous ceux qui avaient encore des Francs en liquide \u00E0 devoir les \u00E9changer.<br> En Inde le gouvernement d\u00E9cide d\u2019annuler les billets de cinq cents Roupies, ce qui signifie que ceux qui poss\u00E9daient ces billets les ont tout simplement perdus! En mars 2013 la banque  centrale chypriote  d\u00E9cide de r\u00E9cup\u00E9rer les d\u00E9p\u00F4ts non s\u00E9curis\u00E9s de plus d\u2019un million, dans le but de se recapitaliser.<br> Ils d\u00E9sirent pr\u00E9lever un pourcentage des d\u00E9p\u00F4ts inf\u00E9rieurs \u00E0 ce montant, ce qui veut dire qu\u2019ils effectuent une ponction dans les \u00E9conomies des familles Chypriotes !\r\n  \r\n  Avec le bitcoin,cela ne peut pas arriver, car aucune autorit\u00E9 centrale n\u2019a de mainmise sur vos bitcoin, ni \u00E9tat, ni banque.<br> Il n\u2019y a pas d\u2019organe centralis\u00E9 dans ce syst\u00E8me mon\u00E9taire.<br> Nul ne peut vous les saisir !<\/div>\r\n<h1 class=\"title\">4- On ne peut pas annuler une transaction en bitcoin.<br><\/h1>\r\n<div class=\"text\">C\u2019est \u00E0 dire qu\u2019un Bitcoin envoy\u00E9 est un Bitcoin re\u00E7u ! Quand quelqu\'un paie en bitcoin, il ne peut pas les r\u00E9cup\u00E9rer, sauf si bien sur le destinataire est d\u2019accord.<br> \r\n  \r\n  Ce qui repr\u00E9sente un gros avantage pour les vendeurs, car cela emp\u00EAche les fraudeurs d\u2019acheter des produits avec une carte bancaire, puis d\u2019annuler la transaction une fois le produit r\u00E9cup\u00E9r\u00E9.<br><\/div>\r\n<h1 class=\"title\">5- Avec le bitcoin on ne peut pas voler vos coordonn\u00E9es.<br><\/h1>\r\n<div class=\"text\">Combien de fois, pour effectuer un achat ou un paiement, vous demande t-on les coordonn\u00E9es de votre carte bancaire avec tous les d\u00E9tails possibles, y compris le code secret au dos de votre carte ? Et combien de fois ces coordonn\u00E9es sont elles vol\u00E9es et utilis\u00E9es dans un but malhonn\u00EAte ? Quand vous effectuez une transaction en bitcoin, vous ne donnez aucune information, mais vous utilisez deux cl\u00E9s, une priv\u00E9e et une publique, votre cl\u00E9 priv\u00E9e restant totalement secr\u00E8te.<br>\r\n  \r\n  Au moment de votre transaction, vous combinez vos deux cl\u00E9s \u00E0 travers un algorithme qui prouve que c\u2019est vous qui faites la transaction, et donc celle ci est totalement s\u00E9curis\u00E9e.<br><\/div>\r\n\r\n<h1 class=\"title\">6-Le bitcoin ne subit pas l\u2019inflation.<br>\r\n  \r\n  <\/h1>\r\n<div class=\"text\">Un \u00E9tat peut d\u00E9cider \u00E0 tout moment d\u2019imprimer autant de billets qu\u2019il le souhaite (pour payer la dette nationale par exemple) ce qui aura pour cons\u00E9quence directe de baisser la valeur de cette monnaie entra\u00EEnant automatiquement une hausse des prix, et donc une baisse du pouvoir d\u2019achat.<br> Le bitcoin lui, \u00E0 \u00E9t\u00E9 con\u00E7u d\u00E8s le d\u00E9part pour n\'\u00EAtre \u00E9mis qu\u2019\u00E0 21 millions d\u2019unit\u00E9s.<br> Il ne pourra donc pas subir d\u2019inflation !\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">7- Votre transaction en bitcoin reste priv\u00E9e.<br>\r\n  \r\n  <\/h1>\r\n<div class=\"text\">Si vous ne d\u00E9sirez pas que l\u2019on sache que vous \u00EAtes derri\u00E8re une transaction par souci de discr\u00E9tion ou pour toute autre raison, vous pouvez rester totalement anonyme.<br> C\u2019est-\u00E0-dire que tout le monde sait si vous poss\u00E9dez les bitcoin n\u00E9cessaires \u00E0 votre transaction et s\'ils sont bien les v\u00F4tres.<br> Mais personne ne saura qui est le propri\u00E9taire r\u00E9el de ces bitcoin.<br> Ce qui est bien \u00E9videmment totalement impossible avec le syst\u00E8me bancaire actuel.<br> C\u2019est comme si vous aviez un porte monnaie transparent : personne ne conna\u00EEt le propri\u00E9taire du porte monnaie, mais tout le monde voit ce qu\u2019il y a dedans !\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">8- Avec les bitcoin pas besoin de mettre votre confiance dans un tiers.<br>\r\n  \r\n  <\/h1>\r\n<div class=\"text\">Dans le syst\u00E8me actuel, vous devez faire confiance \u00E0 la banque qui va g\u00E9rer votre argent, lui faire confiance \u00E9galement lorsque vous effectuez un paiement en ligne.<br> Mais vous devez aussi faire confiance au vendeur \u00E0 qui vous transmettez toutes vos coordonn\u00E9es personnelles.<br> Avec le bitcoin, vous n\u2019avez plus besoin de leur faire confiance, car vos transactions sont sign\u00E9es gr\u00E2ce \u00E0 votre cl\u00E9 personnelle et v\u00E9rifi\u00E9e par des milliers d\u2019ordinateurs anonymes.<br> Le vendeur lui, n\u2019a pas besoin de savoir qui vous \u00EAtes si vous ne le d\u00E9sirez pas.<br>\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">9-Vous avez la pleine propri\u00E9t\u00E9 de vos bitcoin.<br>\r\n  \r\n  <\/h1>\r\n<div class=\"text\">Aujourd\'hui pour les paiements \u00E9lectroniques votre compte appartient \u00E0 quelqu\'un d\u2019autre que vous.<br> Par exemple: si pour une raison ou une autre la soci\u00E9t\u00E9 de cr\u00E9dit d\u00E9cide de suspendre votre compte, elle peut le faire sans vous pr\u00E9venir, sans vous demander votre avis, sans m\u00EAme vous donner d\'explication.<br> Ce sera alors \u00E0 vous de prouver votre bonne foi pour avoir de nouveau acc\u00E8s \u00E0 vos fonds priv\u00E9s.<br> Avec les bitcoin le propri\u00E9taire des fonds est le seul \u00E0 poss\u00E9der la cl\u00E9 priv\u00E9e et est donc l\u2019unique propri\u00E9taire de ses bitcoin.<br> Personne ne pourra vous les saisir ou vous les bloquer.<br>\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">10- La valeur du bitcoin.<br>\r\n  \r\n  <\/h1>\r\n<div class=\"text\">Aujourd\'hui le nombre de commer\u00E7ants qui acceptent les transactions en bitcoin est en hausse ainsi que le nombre d\u2019utilisateurs.<br> Sur le march\u00E9 des changes le volume des \u00E9changes est lui aussi en hausse, et certains pr\u00E9voient que son prix atteindra un demi million de dollars en 2030!!! C\u2019est \u00E0 dire que si vous achetez pour 100\u20AC de bitcoin au cours actuel, vous obtiendrez en 2030 la somme de 39062.5 \u20AC!!!\r\n  \r\n  <\/div>\r\n\r\n<div class=\"text\">Toutes ces raisons font comme vous l\u2019aurez compris, qu\u2019il est tr\u00E8s int\u00E9ressant d\u2019utiliser ou d\u2019acheter du bitcoin, cette monnaie virtuelle relativement r\u00E9cente, mais qui n\u2019est pas, loin s\u2019en faut, la seule sur le march\u00E9.<br>\r\n  \r\n  Nous en parlerons dans un prochain article.<br><\/div>\r\n\r\n';
                }
                case 5: {
                    return '<h1 class=\"title\">Comment acheter du bitcoin ?\r\n<\/h1>\r\n<div class=\"text\">Maintenant que vous avez compris les avantages des monnaies virtuelles, vous d\u00E9sirez certainement en acqu\u00E9rir, soit pour les stocker, soit pour faire des achats par leur interm\u00E9diaire.<br> Pour cela plusieurs \u00E9tapes sont n\u00E9cessaires que nous allons vous d\u00E9crire.<br> Nous prendrons l\u2019exemple du bitcoin, mais les principes restent les m\u00EAmes pour les autres monnaies.<br>\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Installer un porte-monnaie et une adresse Bitcoin.<br>\r\n<\/h1>\r\n<div class=\"text\">Pour acheter du bitcoin ou faire des transactions gr\u00E2ce \u00E0 cette monnaie virtuelle vous devez utiliser un porte-monnaie et une adresse bitcoin.<br> Pour cela il vous faudra installer un logiciel wallet.<br> Ces logiciels vous permettent de cr\u00E9er et de stocker des adresses bitcoin sur votre ordinateur.<br> Une fois que vous aurez install\u00E9 votre porte-monnaie et cr\u00E9\u00E9 votre premi\u00E8re adresse bitcoin, il vous faudra obtenir les bitcoin, et ce, en \u00E9changeant des Euro o\u00F9 tout autre monnaie de deux mani\u00E8res diff\u00E9rentes : En passant par des plateformes d\'\u00E9change ou  En passant par des sites de vente (broker).<br> (Sachez qu\u2019il est aussi possible d\u2019investir dans un mineur ou de louer de la puissance et ainsi participer \u00E0 la cr\u00E9ation de monnaie gr\u00E2ce au site   <a href=\"https:\/\/www.coinmama.com\/?ref=rinat\">Coinmama<\/a> ou de vendre des objets ou des services contre cette monnaie virtuelle)\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Les plateformes d\'\u00E9change(exchange).<br>\r\n<\/h1>\r\n<div class=\"text\">Sur une plateforme d\'\u00E9change on peut acqu\u00E9rir des bitcoin selon le principe de l\u2019offre et de la demande.<br> Ce sont d\u2019ailleurs ces plateformes qui permettent aujourd\'hui de fixer le cours officiel du bitcoin.<br> Vous allez donc passer sur cette plateforme, un ordre d\u2019achat, avec une limite maximum que vous vous aurez fix\u00E9.<br> Si votre offre est au prix du march\u00E9 vous recevrez imm\u00E9diatement vos bitcoin, sinon il vous faudra attendre que des vendeurs acceptent votre offre.<br> Pour payer les bitcoin achet\u00E9s il vous sera g\u00E9n\u00E9ralement demand\u00E9 d\u2019effectuer un virement SEPA ( l\u2019inconv\u00E9nient \u00E9tant le temps de d\u00E9lai de plusieurs jours).<br>\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Les sites de vente (broker).<br>\r\n<\/h1>\r\n<div class=\"text\">Une fa\u00E7on plus simple de se procurer des bitcoin est de passer par des sites de vente: les brokers.<br> Les brokers sont des soci\u00E9t\u00E9s qui revendent les bitcoin qu\u2019ils ont achet\u00E9 ou mine\u2019,et ce \u00E0 des prix proches des prix du march\u00E9.<br> Ils peuvent proposer le prix qu\u2019ils d\u00E9sirent, car vous leur achetez directement vos bitcoin sans passer par le principe de l\u2019offre et de la demande.<br> Pour ce faire vous devez donc cr\u00E9er un compte.<br> Choisir le montant des bitcoin que vous d\u00E9sirez acheter.<br> Payer vos bitcoin.<br> Et ainsi vous recevrez vos bitcoin sur votre wallet.<br>\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Moyens de paiement pour l\u2019achat de bitcoin.<br>\r\n<\/h1>\r\n<div class=\"text\">La carte bancaire.<br>\r\n  \r\n  \r\n  C\u2019est le moyen le plus simple pour acheter du bitcoin.<br>\r\n  \r\n  Vous pourrez tout simplement \u00E9changer vos euro contre des bitcoin apr\u00E8s une  v\u00E9rification d\u2019identit\u00E9.<br><\/div>\r\n\r\n<div class=\"text\"><h1 class=\"title\">Acheter des bitcoin par virement bancaire SEPA.<br><\/h1><div class=\"text\">\r\n  \r\n  La plupart des plateformes et des sites acceptent les virements SEPA.<br>\r\n  \r\n  Il vous faudra un d\u00E9lai de trois \u00E0 six jours pour recevoir vos bitcoin sur votre compte.<br>\r\n  \r\n  Par ce biais, les frais de transaction des gros montants seront nettement r\u00E9duits.<br>\r\n  \r\n<\/div><h1 class=\"title\">Acheter du bitcoin par carte PayPal.<\/h1><div class=\"text\">\r\n  \r\n  Pour utiliser une carte PayPal, le mieux est de passer par la plateforme   <a href=\"https:\/\/www.coinmama.com\/?ref=rinat\">Coinmama<\/a> qui vous permettra tr\u00E8s rapidement (quelques minutes) de d\u00E9poser de l\u2019argent sur la plateforme gr\u00E2ce \u00E0 votre compte PayPal. Vous d\u00E9poserez vos devises en les \u00E9changeant contre la monnaie du site, les SLL (qui est la monnaie du site \u201Csecond life\u201D),puis \u00E9changerez ces SLL contre du bitcoin.\r\n  \r\n<\/div><h1 class=\"title\">Acheter des bitcoin avec des esp\u00E8ces.<\/h1><div class=\"text\">\r\n  \r\n  Pour acheter des bitcoin avec des esp\u00E8ces, les moyens les plus utilis\u00E9s sont la western Union ou encore le mandat compte de la poste.<br>\r\n  \r\n  Vous pouvez payer dans un guichet et obtenir vos bitcoin en \u00E0 peu pr\u00E8s deux heures.<br>\r\n  \r\n  En fait les fonds seront d\u00E9pos\u00E9s directement sur le compte du broker.<br>\r\n  \r\n<\/div><h1 class=\"title\">Acheter du bitcoin avec paysafecard<\/h1><div class=\"text\">\r\n  \r\n  Pour acheter un montant de bitcoin avec une carte pr\u00E9pay\u00E9e paysafecard, il vous faudra passer par le site   <a href=\"https:\/\/www.coinmama.com\/?ref=rinat\">Coinmama<\/a> ou vous transformerez vos euro en SLL, la monnaie du site \u201Csecond life\u201D, gr\u00E2ce \u00E0 laquelle vous pourrez faire l\'\u00E9change avec du bitcoin.<br>\r\n  \r\n<\/div><h1 class=\"title\">Acheter du bitcoin avec Neteller<\/h1><div class=\"text\"> \r\n  \r\n  Neteller est le porte-monnaie \u00E9lectronique des joueurs de Casino et de poker.<br>\r\n  \r\n  Vous relierez votre compte \u00E0 la plateforme   <a href=\"https:\/\/www.coinmama.com\/?ref=rinat\">Coinmama<\/a> qui vous permettra alors de d\u00E9poser vos fonds et de les convertir en bitcoin.<br>\r\n  \r\n<\/div><h1 class=\"title\">Acheter des bitcoin avec les mandats compte de la poste.<\/h1><div class=\"text\"> \r\n  \r\n  Gr\u00E2ce \u00E0 la poste vous pouvez \u00E9galement acheter vos bitcoin en allant tout simplement dans un guichet et en demandant de payer les brokers par l\u2019interm\u00E9diaire du mandat compte.<br>\r\n  \r\n  Vous recevrez ainsi vos bitcoin sous quelques heures.<br>\r\n  \r\n  Voici de nombreux moyens d\'acheter des bitcoin \u00E0 votre convenance.<br>\r\n  \r\n  Une fois achet\u00E9s, vous pourrez d\u00E9cider de les conserver comme investissement ou de les utiliser pour payer des achats.<br><\/div>\r\n';
                }
                case 6: {
                    return '<h1 class=\"title\">Comment choisir sa monnaie virtuelle ?<\/h1>\r\n<div class=\"text\">Les  meilleures crypto monnaies aujourd\'hui comme vous l\u2019avez devin\u00E9, ne se limitent  pas \u00E0 bitcoin, ethereum, ou litecoin. Il y a un tas de monnaies virtuelles sur le march\u00E9 en ce moment. En fait, il y en a tellement actuellement disponibles qu\'il serait impossible de tous les nommer ici.\r\n  \r\n  Cette liste est donc celle de quelques-unes des plus populaires des  crypto monnaies. Pour une liste compl\u00E8te des Top 100 des crypto monnaies \u00E0 l\'heure actuelle, visitez ici.<\/div>\r\n<h1 class=\"title\">Le Bitcoin<\/h1>\r\n<div class=\"text\">Reconnu comme \u00E9tant la premi\u00E8re monnaie virtuelle, le bitcoin est toujours la monnaie \u00E0 la plus haute valeur. Au moment de l\'\u00E9criture de cet article, une seule pi\u00E8ce de monnaie vaut entre 5000 et 6000 USD. C\u2019est un ph\u00E9nom\u00E8ne mondial que nous sommes encore loin de comprendre.\r\n  \r\n  De plus en plus de commer\u00E7ants dans le monde entier, acceptent les paiements en Bitcoin.\r\n  \r\n  Toutes les autres monnaies depuis  le Bitcoin sont connues sous le nom d\u2019\"altcoins,\u00AB monnaies alternatives \u00E0 bitcoin.<\/div>\r\n<h1 class=\"title\">Ethereum<\/h1>\r\n<div class=\"text\">L\u2019ethereum (ou l\'\u00E9ther, comme il est commun\u00E9ment appel\u00E9) serait la deuxi\u00E8me plus populaires crypto monnaie en ce moment. Il vient en deuxi\u00E8me place apr\u00E8s bitcoin. Au moment de cet article sa valeur se situe entre 250 et 350 USD. M\u00EAme si cela est beaucoup moins que la valeur du bitcoin, certaines personnes pr\u00E9voient que finalement, l\u2019ethereum sera encore plus pr\u00E9cieux que le bitcoin.\r\n  \r\n  Une des raisons de cet pr\u00E9vision est la technologie tr\u00E8s diff\u00E9rente de celle du Bitcoin.\r\n  \r\n  Tandis que le bitcoin peut \u00EAtre utilis\u00E9 pour des achats, l\'\u00E9ther pourrait \u00EAtre plus pratique et plus unique. En effet, il peut \u00EAtre utilis\u00E9 par les grandes institutions gouvernementales, ou pour des contrats appel\u00E9s smart contracts.<\/div>\r\n<h1 class=\"title\">L\u2019 Ethereum classique<\/h1>\r\n<div class=\"text\">L\'histoire de l\u2019ethereum classique est un peu plus compliqu\u00E9. L\u2019Ethereum Classique est entr\u00E9 en fonction en raison d\'une Split au sein de la communaut\u00E9 ethereum. A l\'heure actuelle sa valeur se situe aux environs de 10 USD.<\/div>\r\n<h1 class=\"title\">Litecoin<\/h1>\r\n<div class=\"text\">Le litecoin est la troisi\u00E8me plus populaires crypto monnaie ces derniers temps. Un certain nombre d\'\u00E9v\u00E9nements ont d\u00E9clench\u00E9 sa popularit\u00E9, y compris la plateforme Coinbase qui l\'a ajout\u00E9 \u00E0 son march\u00E9 en ligne avec le bitcoin et l\'\u00E9ther.  Il dispose d\'une technologie similaires \u00E0 bitcoin, mais est \u00ABplus l\u00E9ger\u201D dans le  sens que son traitement des transactions est plus rapide.<\/div>\r\n<h1 class=\"title\">Ripple<\/h1>\r\n<div class=\"text\">Ripple est diff\u00E9rente des cryptos monnaies telles que bitcoin parce que plut\u00F4t que d\'\u00EAtre \u00E9chang\u00E9s via blockchain, il est centralis\u00E9e par une entit\u00E9 priv\u00E9e. Les commer\u00E7ants n\'acceptent pas encore Ripple. Cependant, il est utilis\u00E9 pour des \u00E9changes de fonds entre pays.<\/div>\r\n<h1 class=\"title\">Monero\r\n<\/h1>\r\n<div class=\"text\">Monero est devenu une monnaie virtuelle populaire, en particulier, lorsque darknet market, et alphabay, ont commenc\u00E9 \u00E0 l\u2019utiliser comme une devise pr\u00E9f\u00E9rentielle.<\/div>\r\n<h1 class=\"title\">Dash<\/h1>\r\n<div class=\"text\">Dash a \u00E9t\u00E9 darkcoin dans une vie ant\u00E9rieure. Il a fallu un nouveau nom pour modifier son lien \u00E0  darkNet. Ses fondateurs ont voulu d\u00E9lib\u00E9r\u00E9ment  se d\u00E9marquer d\u2019une monnaie ill\u00E9gale et devenir plus l\u00E9gitime vis \u00E0 vis des utilisateurs. Elle est toujours tout \u00E0 fait anonyme: les transactions sont intra\u00E7ables. Mais le rappel de son sombre pass\u00E9, la rend encore un peu controvers\u00E9e.<\/div>\r\n<h1 class=\"title\">NEM<\/h1>\r\n<div class=\"text\">NEM est une publique\/ priv\u00E9e blockchain de crypto monnaie qui a r\u00E9cemment acquis sa popularit\u00E9. Comme beaucoup d\'autres crypto monnaies, son objectif est la large distribution. Son c\u00F4t\u00E9  Innovant est que la technologie NEM est  caract\u00E9ris\u00E9e entre autres par la \u00ABpreuve d\' importance\".<\/div>\r\n<h1 class=\"title\">Zcash<\/h1>\r\n<div class=\"text\">Ce sont faits pour des  services publics sp\u00E9cifiques, comme les places de march\u00E9, ou la publicit\u00E9. Les devises num\u00E9riques face aux jetons ou tokens . Les devises num\u00E9riques sont  min\u00E9es, tandis que les jetons sont donn\u00E9s au cours d\u2019une vente de monnaie initiale de type ICOs, qui est un financement participatif qui a pour but d\u2019aider une entreprise Blockchain \u00E0 d\u00E9marrer, en mettant en vente un certain nombre de jetons. Voir les articles sur les ICOs.<\/div>\r\n\r\n';
                }
                case 7: {
                    return '<h1 class=\"title\">Comparatif des diff\u00E9rents wallets (portefeuilles bitcoin)<\/h1>\r\n<div class=\"text\">Vous avez d\u00E9cid\u00E9 d\u2019acheter et d\'\u00E9changer des bitcoins. Il vous faut donc, comme nous vous l\u2019avons expliqu\u00E9, un wallet, c\u2019est-\u00E0-dire un portefeuille \u00E9lectronique qui sera soit une application, soit un site web, soit un appareil g\u00E9rant vos cl\u00E9s priv\u00E9es. Vous aurez ainsi en votre possession un compte Bitcoin pour effectuer vos transactions. Voici donc un comparatif de diff\u00E9rents wallet pour Bitcoin (mais pas seulement).<\/div>\r\n<h1 class=\"title\">1-Les portefeuilles mat\u00E9riels: hardware wallets.<\/h1>\r\n<div class=\"text\">Ces portefeuilles sont des appareils \u00E9lectroniques qui vous permettront de stocker vos Bitcoins en toute s\u00E9curit\u00E9, que vous en ayez peu ou beaucoup. C\u2019est un moyen pratique et extr\u00EAmement sur. Le hardware doit \u00EAtre branch\u00E9 \u00E0 votre ordinateur, \u00E0 votre smartphone ou \u00E0 votre tablette, comme une cl\u00E9 USB, avant de pouvoir l\u2019utiliser. Vos cl\u00E9s sont ainsi conserv\u00E9es hors ligne, m\u00EAme lorsqu\'il est connect\u00E9 \u00E0 votre ordinateur. Ces hardware sont bien sur payants. Il est pr\u00E9f\u00E9rable de les choisir avec un \u00E9cran qui vous permet d\'afficher des informations importantes. \r\n  \r\n  Voici quelques uns des meilleurs hardware :<\/div>\r\n  <ul>\r\n    <li><span>TREZOR<\/span><\/li>\r\n    <div class=\"text\">Appareil tr\u00E8s compact. Il a \u00E9t\u00E9 le premier sur le march\u00E9 et il permet d\u2019utiliser ses bitcoins tr\u00E8s facilement. Il existe depuis 2014.<\/div>\r\n    \r\n    <li><span>Ledger Nano S\r\n    <\/span><\/li>\r\n    <div class=\"text\">Il est fabriqu\u00E9 en France. Il poss\u00E8de un \u00E9cran. C\u2019est l\u2019une des soci\u00E9t\u00E9s les plus connues pour la s\u00E9curit\u00E9 des bitcoins et il utilise un microprocesseur certifi\u00E9 contre tous les types d\u2019attaque. Sa technologie est utilis\u00E9e dans le secteur bancaire. Il existe depuis 2016.\r\n      \r\n      <\/div>\r\n    \r\n    <li><span>Ledger HW.1\r\n    <\/span><\/li>\r\n    <div class=\"text\">C\u2019est un hardware sans \u00E9cran, multi signature et bon march\u00E9.\r\n      \r\n      <\/div>\r\n    \r\n    <li><span>KeepKey<\/span><\/li>\r\n    <div class=\"text\">Il pr\u00E9sente un grand \u00E9cran. Il est tr\u00E8s simple d\u2019utilisation gr\u00E2ce \u00E0 des instructions claires et d\u00E9taill\u00E9es. Il existe depuis 2015.\r\n      \r\n      <\/div>\r\n   \r\n  <\/ul>\r\n<h1 class=\"title\">2-Les Hot wallets (wallets pour mobiles)\r\n<\/h1>\r\n<div class=\"text\">Les Hot wallets fonctionnent sur des appareils connect\u00E9s sur Internet, tels que ordinateurs, smartphones ou tablettes. Ils g\u00E9n\u00E8rent vos cl\u00E9s priv\u00E9es. Du fait de leur connection \u00E0 Internet, on ne peut pas les consid\u00E9rer comme 100% s\u00FBrs. Ils ne conviennent donc pas pour stocker de grosses sommes de bitcoins, ils peuvent par contre permettre de stocker de petites quantit\u00E9s afin de faire des paiements r\u00E9guliers, facilement et rapidement. Voici quelques exemples de ce type de portefeuille : Portefeuilles sur Andro\u00EFd Il en existe un grand nombre car au d\u00E9part Apple a refus\u00E9 les portefeuilles Bitcoin.\r\n  \r\n <\/div>\r\n <h1>Parmis eux:<\/h1>\r\n <ul>\r\n  <li><span>Myc\u00E9lium<\/span><\/li>\r\n  <div class=\"text\">Il est le plus connu. Il est tr\u00E8s facile d\u2019utilisation pour effectuer des paiements ou pour r\u00E9ceptionner vos Bitcoins et vous permet aussi de stocker vos devises de fa\u00E7on tr\u00E8s simple gr\u00E2ce \u00E0 ses explications tr\u00E8s claires.\r\n    \r\n    <\/div>\r\n  \r\n  <li><span>Greenbits<\/span><\/li>\r\n  <div class=\"text\">C\u2019est la version Android de Green Adress. Il est \u00E0 double signature et est compatible avec les hardware wallets tels que Ledger ou Tr\u00E9sor.\r\n    \r\n    <\/div>\r\n  \r\n  <li><span>Bitcoin Wallet\r\n  <\/span><\/li>\r\n  <div class=\"text\">Il est le premier \u00E0 avoir fonctionn\u00E9 sur mobile. Il a la particularit\u00E9 de se connecter directement sur le r\u00E9seau et est donc plus s\u00E9curis\u00E9. Il est tr\u00E8s simple d\u2019utilisation pour les d\u00E9butants.\r\n    \r\n    <\/div>\r\n  \r\n  <li><span>Portefeuilles pour iPhone et appareils iOs\r\n  <\/span><\/li>\r\n  <div class=\"text\">Au d\u00E9part Apple avait refus\u00E9 les portefeuilles Bitcoin, mais par la suite il a propos\u00E9 de nombreuses possibilit\u00E9s pour les utilisateurs d\u2019iOs.\r\n    \r\n    <\/div>\r\n  \r\n  <li><span>Breadwallet<\/span><\/li>\r\n  <div class=\"text\">Il est tr\u00E8s simple d\'utilisation pour la r\u00E9ception ou l\u2019envoie de Bitcoin. Il permet un contr\u00F4le total sur les cl\u00E9s priv\u00E9es. Il est sans doute le meilleur portefeuille Bitcoin pour iPhone.\r\n    \r\n   \r\n  \r\n<\/ul>\r\n <h1 class=\"title\">Copay<\/h1>\r\n<div class=\"text\">Il est disponible avec Windows, iOs, Android et toutes les plateformes de bureau. On peut gr\u00E2ce \u00E0 lui ouvrir plusieurs comptes (un personnel et un professionnel par exemple). C\u2019est le portefeuille de BitPay.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Airbitz<\/h1>\r\n<div class=\"text\">Il est lui aussi tr\u00E8s facile d\'utilisation.Il est compatible avec iPhone et Android. Il convient parfaitement \u00E0 des d\u00E9butants et cr\u00E9e \u00E9galement des sauvegardes automatiques.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">3- Portefeuilles de bureau\r\n<\/h1>\r\n<div class=\"text\">Ils se t\u00E9l\u00E9chargent sur votre ordinateur de bureau.\r\n  \r\n  <\/div>\r\n  \r\n<ul>\r\n  <li><span>Electrum<\/span><\/li>\r\n  <div class=\"text\">Il convient aux Mac, Linux et Windows. Il peut prendre en charge les hardware wallet et s\u00E9curise le stockage de vos Bitcoins avec un ordinateur hors ligne. Il est facile d\'utilisation pour les d\u00E9butants.\r\n    \r\n    <\/div>\r\n  \r\n  <li><span>Bitcoin wallet\r\n  <\/span><\/li>\r\n  <div class=\"text\">Il vous permet d\'\u00E9changer vos Bitcoins avec n\u2019importe qui dans le monde. Vous pouvez \u00E9changer vos Bitcoins contre votre monnaie locale. Il est bas\u00E9 sur le portefeuille Copay cr\u00E9\u00E9 par BitPay.\r\n    \r\n    <\/div>\r\n  \r\n  <li><span>Armory<\/span><\/li>\r\n  <div class=\"text\">Il convient d\u2019avantage aux utilisateurs confirm\u00E9s. Il est multifonctions en offrant diff\u00E9rentes possibilit\u00E9s de sauvegarde et de chiffrement et permet un stockage sur des PC d\u00E9connect\u00E9s du r\u00E9seau.\r\n    \r\n    <\/div>\r\n  \r\n  \r\n<\/ul>\r\n<h1 class=\"title\">4- Portefeuille en ligne\r\n<\/h1>\r\n<div class=\"text\">Le portefeuille en ligne stocke vos Bitcoins sur un site web. Ce qui veut dire que vous confiez votre stockage \u00E0 un tiers. Ce n\u2019est donc pas vraiment l\'id\u00E9al, car si le site venait \u00E0 se faire pirater vous risqueriez de perdre vos Bitcoins. Bien sur, ces sites font de vrais efforts en terme de s\u00E9curit\u00E9 et cette solution est extr\u00EAmement pratique.\r\n  \r\n  <\/div>\r\n  <ul>\r\n    <li><span>Coin base\r\n    <\/span><\/li>\r\n    <div class=\"text\">Il est tr\u00E8s facile d\'utilisation. Il propose des outils pour les commer\u00E7ants. Il est disponible en fran\u00E7ais et offre une int\u00E9gration avec les comptes bancaires en Euro et en Dollars pour faire vos transactions en Bitcoin.\r\n      \r\n      <\/div>\r\n    <\/ul>\r\n<h1 class=\"title\">5- Portefeuille papier\r\n<\/h1>\r\n<div class=\"text\">C\u2019est une solution qui devrait \u00EAtre adopt\u00E9e en plus de n\u2019importe quel autre portefeuille que vous aurez choisi.\r\n  \r\n  Parmi eux :<\/div>\r\n  <ul>\r\n    <li><span>Bitadress<\/span><\/li>\r\n    <div class=\"text\">Il est tr\u00E8s rapide. C\u2019est la solution la plus s\u00E9curis\u00E9e si vous ne notez pas l\u2019adresse et la cl\u00E9 priv\u00E9e au m\u00EAme endroit. Il peut garder vos bitcoins pour de longues p\u00E9riodes. Mais pour effectuer un paiement il n\u00E9cessite l\u2019import des cl\u00E9s dans un portefeuille tel que Muitibit, Electrum, ou Bitcoin-QT. <\/div> <\/ul>\r\n\r\n<div class=\"text\">Vous avez donc un aper\u00E7u des diff\u00E9rents wallets qui sont \u00E0 votre disposition pour vos bitcoins. Vous pouvez bien s\u00FBr opter pour plusieurs solutions combin\u00E9es entre elles.<\/div>\r\n\r\n';
                }
                case 8: {
                    return '<h1 class=\"title\">Comment gagner de l\u2019argent avec les crypto-monnaies ?\r\n<\/h1>\r\n<div class=\"text\">Pour gagner de l\u2019argent avec les crypto-monnaies, il n\u2019y a pas de m\u00E9thode sans effort. Mais un travail utile et de qualit\u00E9 peut vous rapporter quand m\u00EAme de l\u2019argent dans les crypto-monnaies !\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">1. BUY LOW, SELL HIGH\r\n<\/h1>\r\n<div class=\"text\">La fa\u00E7on la plus \u00E9vidente de gagner de l\u2019argent avec bitcoin et les crypto-monnaies est l\u2019investissement ou la sp\u00E9culation. Acheter bas puis vendre haut. Le trading de court terme bas\u00E9 par exemple sur l\u2019analyse technique n\u2019apporte rien au projet concern\u00E9 (ceci \u00E9tant \u00E9crit sans jugement moral sur la pratique). L\u2019investissement de long terme demande une implication plus forte dans le projet. L\u2019id\u00E9e \u00E9tant de trouver les crypto-monnaies dont la valeur sur les march\u00E9s d\u2019\u00E9changes va fortement monter \u00E0 l\u2019avenir et cela n\u00E9cessite une \u00E9tude plus pouss\u00E9e. Cette \u00E9tude demande du temps et une compr\u00E9hension des principes techniques et \u00E9conomiques d\u2019un projet de ce type. Ces investisseurs apportent au march\u00E9 leur comp\u00E9tence en faisant monter le prix des projets les plus pertinents. M\u00EAme si cela n\u2019est pas directement utile au projet, la hausse des prix avantage les parties prenantes impliqu\u00E9es d\u00E8s l\u2019origine.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">2. FINANCER LE D\u00C9VELOPPEMENT\r\n<\/h1>\r\n<div class=\"text\">Afin d\u2019avoir la confiance des utilisateurs potentiels, les d\u00E9veloppeurs sont oblig\u00E9s de rendre public le code source du projet. Le code peut \u00E9ventuellement ne pas \u00EAtre publi\u00E9 au d\u00E9but puis plac\u00E9 sous une licence qui n\u2019autorise pas la modification pour apporter un peu de protection au cr\u00E9ateur. Ce besoin de transparence fait que les d\u00E9veloppeurs se retrouvent face \u00E0 la grande question de l\u2019open source : \u00AB Comment gagner de l\u2019argent en publiant librement son logiciel ? \u00BB\r\n<\/div>\r\n<div class=\"text\">Les r\u00E9ponses d\u00E9velopp\u00E9es au fil des ann\u00E9es sont par exemple\r\n<\/div>\r\n\r\n<div class=\"text\">Profiter de la notori\u00E9t\u00E9 acquise pour am\u00E9liorer son salaire,\r\n  Vendre du support en \u00E9tant le mieux plac\u00E9 pour conna\u00EEtre le projet en d\u00E9tail,\r\n  Vendre des services tel que le d\u00E9veloppement de fonctions sp\u00E9cifiques,\r\n  Recevoir des dons ou des bourses\r\n  Ces approches restent valables mais sont compl\u00E9t\u00E9es par d\u2019autres dans le cas d\u2019une crypto-monnaie puisque les \u00AB pi\u00E8ces \u00BB g\u00E9n\u00E9r\u00E9es par le syst\u00E8me auront une valeur si elles trouvent des acheteurs.<\/div>\r\n\r\n<h1 class=\"title\">3. ACQU\u00C9RIR DES PI\u00C8CES D\u00C8S LE D\u00C9BUT: minage\r\n<\/h1>\r\n<div class=\"text\">Les cr\u00E9ateurs sont bien s\u00FBr les mieux plac\u00E9s pour croire \u00E0 leur projet lorsque la valeur des pi\u00E8ces est infime. Ils peuvent donc profiter pour en accumuler et esp\u00E9rer que leur travail pass\u00E9 et futur va en faire monter la valeur. Ceci ne s\u2019applique pas uniquement aux d\u00E9veloppeurs mais \u00E0 toutes les parties prenantes qui peuvent faire avancer le projet.\r\n<\/div>\r\n<div class=\"text\">Cette accumulation peut se faire en particulier en minant. Dans les syst\u00E8mes dits de Proof-of-Work, le minage est toujours plus facile au d\u00E9but puis la difficult\u00E9 augmente avec la puissance globale de calcul allou\u00E9e \u00E0 cette t\u00E2che. On parle d\u2019instamining si un grand nombre de pi\u00E8ces est g\u00E9n\u00E9r\u00E9 d\u00E8s le d\u00E9but et attribu\u00E9 aux membres du projet. Cela peut \u00EAtre vu de fa\u00E7on positive par les futurs investisseurs car cela garantit que les d\u00E9veloppeurs ont une incitation \u00E0 faire r\u00E9ussir le projet. Si cette distribution est disproportionn\u00E9e, cela va nuire \u00E0 l\u2019\u00E9quilibre futur de la monnaie sur les march\u00E9s car les cours peuvent alors \u00EAtre manipul\u00E9s par ceux qui poss\u00E8dent une part notable des jetons.\r\n  \r\n  <\/div>\r\n\r\n<h1 class=\"title\">4. ICO<\/h1>\r\n<div class=\"text\">S\u2019il est difficile de faire payer le logiciel une fois que le code source est public, on peut en d\u00E9duire que le bon moment se situe juste avant. La pratique consistant \u00E0 g\u00E9n\u00E9rer avant une certaine quantit\u00E9 de pi\u00E8ces pour les vendre pendant un laps de temps fixe est nomm\u00E9e ICO (Initial Coin Offering) par analogie avec une IPO (Initial Public Offering) en bourse pour des actions plus classiques.\r\n<\/div>\r\n<div class=\"text\">Cette approche reste sujet \u00E0 d\u00E9bats mais est beaucoup mieux accept\u00E9e depuis peu. Elle pr\u00E9sente l\u2019avantage de permettre au projet d\u2019acqu\u00E9rir le capital visant \u00E0 financer une \u00E9quipe suffisamment nombreuse et qualifi\u00E9e pour se lancer avant des concurrents au concept similaire.\r\n<\/div>\r\n<div class=\"text\">Parmi les ICO notable, citons la premi\u00E8re, Mastercoin\/Omni1 en 2013, Ethereum2, Augur3, Gnosis4 et Tezos. Cette derni\u00E8re vient de se terminer, sur un montant lev\u00E9 record (+200 millions $). Les sommes lev\u00E9es peuvent en effet d\u00E9passer les centaines de millions d\u2019euros.\r\n<\/div>\r\n\r\n<div class=\"text\">Les ICO peuvent \u00EAtre capp\u00E9es ou non-capp\u00E9es, c\u2019est-\u00E0-dire que le nombre de pi\u00E8ces g\u00E9n\u00E9r\u00E9es est connu \u00E0 l\u2019avance, ou non. Le prix peut aussi varier au cours du temps. Dans le cas de Gnosis, il s\u2019agissait d\u2019ench\u00E8res hollandaises avec un prix d\u00E9croissant mais uniquement un nombre fixe de jetons \u00E0 acheter  (ICO capp\u00E9e). Au contraire, pour Tezos (ICO non-capp\u00E9e), un bonus allant jusqu\u2019\u00E0 20% \u00E9tait offert aux premiers arrivants.\r\n  \r\n  <\/div>\r\n  <h1 class=\"title\">5. DES DONS POUR FAIRE GRANDIR LE PROJET\r\n  <\/h1>\r\n  <div class=\"text\">De m\u00EAme que les particuliers ou les entreprises peuvent faire des dons pour aider les projets qui leur sont utiles ou leur tiennent \u00E0 c\u0153ur, les investisseurs peuvent avoir int\u00E9r\u00EAt \u00E0 financer du travail en esp\u00E9rant en r\u00E9colter les fruits plus tard. Il y a certes un probl\u00E8me de passagers clandestins qui vont profiter sans financer mais cela ne pose pas de probl\u00E8me majeur.\r\n  <\/div>\r\n  <div class=\"text\">Cela peut \u00EAtre r\u00E9alis\u00E9 sous la forme d\u2019une campagne de crownfunding (financement participatif).\r\n  <\/div>\r\n\r\n  <div class=\"text\">Un exemple de mise en \u0153uvre r\u00E9ussie de cette approche est le Forum Funding System5 de Monero. Comme son nom l\u2019indique, ce m\u00E9canisme fonctionne sur le forum de discussion du projet. Un porteur de projet pr\u00E9sente une id\u00E9e, la somme qu\u2019il demande pour la r\u00E9aliser (en Monero) et explique en quoi il est la bonne personne. Des jalons sont \u00E9tablis pour \u00E9chelonner les paiements \u00E0 la r\u00E9alisation des \u00E9tapes. Des promesses de dons sont ensuite faites jusqu\u2019\u00E0 arriver \u00E0 la somme pr\u00E9vue. Notons que dans ce cas particulier, si la somme n\u2019est pas r\u00E9unie \u00E0 temps, l\u2019argent vers\u00E9 n\u2019est pas rendu mais utilis\u00E9 lors des sollicitations suivantes.\r\n    \r\n    <\/div>\r\n  \r\n<h1 class=\"title\">6. FINANCER DES SERVEURS\r\n<\/h1>\r\n<div class=\"text\">Dash6 utilise une architecture particuli\u00E8re bas\u00E9e sur ce qu\u2019ils ont nomm\u00E9 des Masternode (litt\u00E9ralement \u00AB N\u0153uds ma\u00EEtres \u00BB). Alors que les participants d\u2019un r\u00E9seau de crypto-monnaie sont g\u00E9n\u00E9ralement les m\u00EAmes, ces Masternodes remplissent des fonctions particuli\u00E8res telles que l\u2019anonymisation des transactions et un syst\u00E8me de gouvernance. Ils doivent donc \u00EAtre en ligne en permanence et tourner sur des serveurs performants. Cela entra\u00EEne un co\u00FBt qui est compens\u00E9 par un paiement lorsqu\u2019un mineur trouve un bloc. On parle alors de Proof-of-Service par analogie avec la Proof-of-Work associ\u00E9e aux mineurs (mineurs et Masternode coexistent dans ce mod\u00E8le). Le propri\u00E9taire du Masternode bloque une somme importante en guise de garantie. Il y a actuelement plus de 4000 Masternodes Dash r\u00E9partis dans le monde.\r\n<\/div>\r\n<div class=\"text\">Factom7, la cha\u00EEne qui vise \u00E0 garantir l\u2019int\u00E9grit\u00E9 d\u2019information, utilise un m\u00E9canisme similaire mais n\u2019a choisi de n\u2019avoir qu\u2019un nombre limit\u00E9 et fixe des serveurs (r\u00E9partis en plusieurs cat\u00E9gories selon leur r\u00F4le).\r\n<\/div>\r\n\r\n<div class=\"text\">On peux citer PIVX8 et CROWN9 parmi les projets bas\u00E9s sur des masternodes.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">7. INT\u00C9GRER LE FINANCEMENT DANS LE PROTOCOLE\r\n<\/h1>\r\n<div class=\"text\">L\u2019int\u00E9gration de certains param\u00E8tres tels que l\u2019inflation dans le protocole, c\u2019est-\u00E0-dire dans les r\u00E8gles de fonctionnement du r\u00E9seau, est maintenant bien connue. Certaines monnaies utilisent un syst\u00E8me similaire pour garantir des revenus aux d\u00E9veloppeurs, on parle alors de \u00AB protocole auto-financ\u00E9 \u00BB.\r\n<\/div>\r\n<div class=\"text\">Decred10 par exemple r\u00E9serve 10% de la r\u00E9compense li\u00E9e \u00E0 la cr\u00E9ation de chaque bloc11 \u00E0 un fonds pour le d\u00E9veloppement. Le m\u00E9canisme de r\u00E9partition entre les d\u00E9veloppeurs principaux et d\u2019autres contributeurs n\u2019est n\u00E9anmoins pas encore clair.\r\n<\/div>\r\n<div class=\"text\">Tezos12 permettra \u00E0 chaque personne qui aurait les comp\u00E9tences n\u00E9cessaires de proposer une \u00E9volution du code source et faire voter les participants \u00E0 son sujet. Il est tout \u00E0 fait permis au d\u00E9veloppeur en question d\u2019inclure une r\u00E9compense allant vers sa propre adresse. S\u2019il est jug\u00E9 trop gourmand, le vote risque d\u2019\u00EAtre en sa d\u00E9faveur.\r\n<\/div>\r\n<div class=\"text\">Un autre exemple de financement par le protocole est celui de Sia13. Ce projet permet \u00E0 chacun de mettre \u00E0 disposition de l\u2019espace disque pour le louer. Il est alors pay\u00E9 dans la crypto-monnaie du projet, les Sia coins. L\u2019originalit\u00E9 est qu\u2019il existe un deuxi\u00E8me type de jetons, les Sia funds, au nombre de 10.000 (dont 90% actuellement pour la soci\u00E9t\u00E9 \u00E0 l\u2019origine du projet). Leurs possesseurs se partagent automatiquement 3.9% du montant total des contrats d\u2019h\u00E9bergement (au prorata du nombre de Sia funds poss\u00E9d\u00E9s). Ces jetons peuvent \u00EAtre vendus de gr\u00E9 \u00E0 gr\u00E9.\r\n<\/div>\r\n<div class=\"text\">Ce tour d\u2019horizon a pr\u00E9sent\u00E9 bri\u00E8vement les principaux moyens de financer les contributions aux projets de crypto-monnaies mais il est probable que d\u2019autres \u00E9mergeront \u00E0 l\u2019avenir parmi les multiples innovations li\u00E9es aux blockchains.\r\n  \r\n  <\/div>\r\n\r\n';
                }
                case 9: {
                    return '<h1 class=\"title\">Qu\'est-ce que le minage des crypto monnaies?\r\n<\/h1>\r\n<div class=\"text\">Comme nous vous l\u2019avons expliqu\u00E9, les crypto monnaies sont donc bas\u00E9es sur un syst\u00E8me d\u2019algorithme math\u00E9matiques extr\u00EAmement compliqu\u00E9 qui n\u00E9cessite de la puissance de calcul fournie par ce que l\u2019on appelle des mineurs.<\/div>\r\n<h1 class=\"title\">Pour quelle raison les bitcoins sont ils min\u00E9s?\r\n<\/h1>\r\n<div class=\"text\">Pour que les bitcoins existent sur le march\u00E9 et dans l\'\u00E9conomie, ils doivent \u00EAtre enregistr\u00E9s le long d\'une cha\u00EEne de blocs (la blockchain). Ce sont les mineurs qui vont faire le travail de l\'ajout de transactions bitcoins \u00E0 la blockchain. En somme, l\'exploitation mini\u00E8re introduit les bitcoins dans le syst\u00E8me, de sorte qu\'ils peuvent \u00EAtre utilis\u00E9s. Comme il y aura un nombre limit\u00E9 de bitcoins (environ 21 millions), l\'exploitation mini\u00E8re sera limit\u00E9e dans le temps (\u00E0 peu pr\u00E8s en  2140). Le nombre de bitcoins qui peuvent entrer dans la blockchain est r\u00E9glement\u00E9 et limit\u00E9e. De plus les bitcoins sont extraits plus  le processus sera difficile.<\/div>\r\n<div class=\"text\">Car en principe les mineurs peuvent th\u00E9oriquement \u00EAtre vous et moi, mettant au service du r\u00E9seau blockchain de la devise, la puissance de calcul de nos logiciels.\r\n<\/div>\r\n<div class=\"text\">Mais pour des devises comme le Bitcoin, qui n\u2019en est plus \u00E0 ses d\u00E9buts, cela va n\u00E9cessiter des machines co\u00FBteuses du fait de l\u2019importance du r\u00E9seau et donc des calculs qui doivent \u00EAtre effectu\u00E9s.\r\n  \r\n  <\/div>\r\n<div class=\"text\">Cela est donc plus dur qu\'il n\'y para\u00EEt. L\'explication que nous allons vous donner vous fournira une id\u00E9e g\u00E9n\u00E9rale du processus. Nous prendrons pour cela l\u2019exemple de Bitcoin, mais ces explications valent aussi pour d\u2019autres crypto monnaies.\r\n  \r\n  <\/div>\r\n\r\n<h1 class=\"title\">Comment mine t-on le Bitcoin et les crypto monnaies?\r\n<\/h1>\r\n<div class=\"text\">Pour commencer \u00E0 exploiter Bitcoin, vous auriez besoin d\'un \u00E9quipement informatique \u00E9tendu (mat\u00E9riel). Il y a longtemps, lorsque Bitcoin a \u00E9t\u00E9 cr\u00E9\u00E9, l\'utilisation de machines de base sur un ordinateur de bureau \u00E9tait raisonnable. Il est maintenant beaucoup plus difficile d\'exploiter Bitcoin. Si vous utilisiez un ordinateur de bureau, par exemple, vous utiliseriez beaucoup trop d\'\u00E9lectricit\u00E9. C\'est pourquoi les hardwares plus r\u00E9cents sont utilis\u00E9s \u00E0 la place. Une bonne machine mini\u00E8re Bitcoin peut co\u00FBter des milliers de dollars.\r\n<\/div>\r\n<div class=\"text\">Ensuite, vous devrez obtenir un programme minier. Quel que soit le programme que vous obtenez, vous devrez vous assurer qu\'il fonctionne avec votre mat\u00E9riel d\'exploitation mini\u00E8re. Beaucoup d\'entre eux sont gratuits en ligne.\r\n<\/div>\r\n<div class=\"text\">Votre prochaine \u00E9tape consiste \u00E0 ouvrir un portefeuille Bitcoin. Vous pouvez utiliser un portefeuille en ligne. Il est plus s\u00FBr de stocker vos Bitcoins dans un portefeuille hors ligne ou un portefeuille papier. Peu importe le chemin que vous empruntez, assurez-vous de disposer de sauvegardes de votre acc\u00E8s Bitcoin. Assurez-vous que vos portefeuilles sont s\u00E9curis\u00E9s.\r\n<\/div>\r\n<div class=\"text\">Maintenant que vous \u00EAtes configur\u00E9 pour extraire Bitcoin, vous devez d\u00E9cider si vous voulez extraire vous-m\u00EAme ou entrer dans un pool d\'exploration mini\u00E8re. Un bassin minier est un groupe de mineurs qui le font ensemble afin d\'augmenter leur puissance. Les Bitcoins qui sont min\u00E9s sont r\u00E9partis entre eux, selon qui a fait le plus de travail. (Vous devrez peut-\u00EAtre \u00E9galement payer des frais pour rejoindre un pool minier.)\r\n<\/div>\r\n<div class=\"text\">Maintenant, vous pouvez commencer \u00E0 extraire en ex\u00E9cutant votre programme. Le mineur doit se connecter et commencer l\'exploitation mini\u00E8re. Si vous essayez d\'ex\u00E9cuter d\'autres programmes sur l\'ordinateur pendant le processus, vous remarquerez peut-\u00EAtre que votre ordinateur est beaucoup plus lent que d\'habitude. Assurez-vous simplement que votre mat\u00E9riel ne soit pas trop chaud pendant le processus d\'extraction.\r\n  \r\n  <\/div>\r\n';
                }
                case 10: {
                    return '<h1 class=\"title\">Sp\u00E9culer sur les monnaies virtuelles\r\n<\/h1>\r\n<div class=\"text\">Nous avons vu quels \u00E9taient les avantages de la monnaie virtuelle, telle que le bitcoin, face aux monnaies traditionnelles, et nous avons constat\u00E9 que malgr\u00E9 les diff\u00E9rences, ces monnaies avaient les m\u00EAmes fonctions que les monnaies habituelles.\r\n  \r\n  <\/div>\r\n<div class=\"text\">Il est un autre domaine o\u00F9 les monnaies virtuelles ressemblent \u00E0 leurs grandes s\u0153urs, c\u2019est la possibilit\u00E9 que nous avons de sp\u00E9culer sur leurs valeurs.\r\n  \r\n  <\/div>\r\n\r\n<div class=\"text\">Il n\u2019est alors pas n\u00E9cessaire de poss\u00E9der du bitcoin (nous resterons pour l\u2019instant sur l\u2019exemple du bitcoin) pour pouvoir trader sur sa fluctuation et sur l\u2019instabilit\u00E9 de sa valeur.\r\n  \r\n  <\/div>\r\n\r\n<h1 class=\"title\">Sp\u00E9culer sur le Bitcoin: trading\r\n<\/h1>\r\n<div class=\"text\">Cela consiste \u00E0 sp\u00E9culer sur un gain ou une perte de valeur du bitcoin pour un temps donn\u00E9. Ainsi, selon la dur\u00E9e du contrat que vous aurez choisi avec votre broker, vous sp\u00E9culez sur la valeur sup\u00E9rieure ou inf\u00E9rieure \u00E0 celle d\u00E9finie au d\u00E9part. L\u2019important \u00E9tant de choisir un bon broker qui puisse vous suivre dans vos sp\u00E9culations. \r\n<\/div>\r\n<div class=\"text\">Le bitcoin est donc bien une devise comme les autres, (mais qui n\u2019est en aucun cas r\u00E9gul\u00E9e par un gouvernement ou un \u00E9tat), on peut donc trader, gr\u00E2ce \u00E0 cette option, sans avoir besoin de pr\u00E9-d\u00E9finir une valeur au bitcoin, mais on utilisera \u00E0 la place un effet de levier pour gagner de l\u2019argent.\r\n  \r\n  <\/div>\r\n\r\n<h1 class=\"title\">L\'int\u00E9r\u00EAt de trader du bitcoin.\r\n<\/h1>\r\n<div class=\"text\">La capitalisation des crypto monnaies a \u00E9t\u00E9 multipli\u00E9 par quatre depuis le mois d\u2019avril. Au mois de juin elle d\u00E9passait les 100 milliards de dollars. Le bitcoin est pass\u00E9 d\u2019une valeur de 1000 dollars en mars \u00E0 3000 dollars en juin!! Puis il a recul\u00E9 de 500 dollars en quatres jours ! Dans des march\u00E9s o\u00F9 la volatilit\u00E9 se fait rare, les monnaies virtuelles font donc exception, et leurs valeurs s\u2019emballent. Le bitcoin n\u2019est d\u2019ailleurs pas la seule monnaie virtuelle \u00E0 avoir vu sa capitalisation s\u2019envoler, l\'ethereum aussi ( sa valeur a \u00E9t\u00E9 multipli\u00E9e par 40 sur la m\u00EAme p\u00E9riode).\r\n  \r\n  <\/div>\r\n<div class=\"text\">Deuxi\u00E8me int\u00E9r\u00EAt : la rapidit\u00E9. Lorsque vous acheter r\u00E9ellement une monnaie virtuelle, cela prend du temps, car la proc\u00E9dure passe par des courtiers, et cela peut prendre jusqu\'\u00E0 une semaine pour ouvrir un compte. D\'o\u00F9 la facilit\u00E9 du trading pour lequel vous n\u2019avez pas besoin d\u2019ouvrir de compte ni de poss\u00E9der la monnaie elle m\u00EAme.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Comment choisir son broker ?\r\n<\/h1>\r\n<div class=\"text\">Quels sont les crit\u00E8res \u00E0 prendre en compte pour choisir le meilleur broker pour trader du bitcoin ?\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">La plateforme\r\n<\/h1>\r\n<div class=\"text\">La plateforme de n\u00E9gociation que vous choisirez devra t-\u00EAtre tout d\u2019abord facile d\u2019utilisation et facile \u00E0 comprendre. Il faut \u00E9galement que vous puissiez trader 24 heures sur 24. Qu\u2019elle puisse vous offrir un effet de levier. Que vous puissiez trader par le biais de PayPal, Visa, MasterCard ou une autre carte bancaire, ou tout autre moyen de paiement.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Moyens de communications avec le broker.\r\n<\/h1>\r\n<div class=\"text\">Il est important de v\u00E9rifier les moyens de communications qui vous sont propos\u00E9s : t\u00E9l\u00E9phone, Skype, email, afin de pouvoir \u00EAtre r\u00E9actif tr\u00E8s rapidement sur votre position, vu les cours extr\u00EAmement volatiles des crypto monnaies. Y a t\'il d\u2019autres devises que le bitcoin ? Il est important de v\u00E9rifier les actifs propos\u00E9s au trading, \u00E0 savoir, si il y a d\u2019autres crypto monnaies en plus du bitcoin, ou des monnaies traditionnelles, du forex ou des actions boursi\u00E8res.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">R\u00E9gulateur\r\n<\/h1>\r\n<div class=\"text\">Assurez vous \u00E9galement que la plateforme choisie soit r\u00E9gul\u00E9e afin d\'\u00EAtre s\u00FBr de sa stabilit\u00E9 ainsi que de l\'\u00E9quit\u00E9 de leurs produits. Les courtiers les plus r\u00E9gul\u00E9s sont souvent les plus s\u00FBrs. \r\n  \r\n  <\/div>\r\n\r\n<div class=\"text\">Ainsi, trader du bitcoin,ou d\u2019autres crypto monnaies, comme pour les monnaies traditionnelles, consiste \u00E0 pr\u00E9dire son cours \u00E0 la hausse comme \u00E0 la baisse. L\u2019int\u00E9r\u00EAt de trader du bitcoin r\u00E9sidant dans le fait de l\'ind\u00E9pendance g\u00E9opolitique de cette monnaie, qui en fait un sujet de trading parfait : une monnaie dirig\u00E9e uniquement par le march\u00E9 sans int\u00E9r\u00EAt politique de l\'\u00E9tat qui la soutient. Et comme nous l\u2019avons vu, la rapidit\u00E9 et la facilit\u00E9 que le trading nous donne.\r\n  \r\n  <\/div>';
                }
                case 11: {
                    return '<h1 class=\"title\">Comment acheter et vendre des crypto-monnaies avec effet de levier ?\r\n<\/h1>\r\n<div class=\"text\">Lorsque vous souhaitez n\u00E9gocier sur les crypto-monnaies, deux possibilit\u00E9s s\'offrent \u00E0 vous : acqu\u00E9rir les devises virtuelles pour essayer de les vendre en g\u00E9n\u00E9rant un profit ou anticiper l\'\u00E9volution de leur cours sans en \u00EAtre propri\u00E9taire au travers du trading sur CFD.\r\n  \r\n  Pour ouvrir une position CFD sur une crypto-monnaie, vous devez :<\/div>\r\n<h1 class=\"title\">1- Ouvrir un compte\r\n<\/h1>\r\n<div class=\"text\">En tant qu\'investisseur CFD, vous n\'avez pas besoin de poss\u00E9der un compte en devises ou un portefeuille pour stocker vos devises. Un compte chez un courtier CFD vous suffit.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">2- Effectuer des recherches\r\n<\/h1>\r\n<div class=\"text\">Les crypto-monnaies sont moins expos\u00E9es aux facteurs \u00E9conomiques et politiques que les devises traditionnelles. Vous devez cependant vous familiariser avec le march\u00E9 sur lequel vous souhaitez investir.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">3- Appliquer votre strat\u00E9gie\r\n<\/h1>\r\n<div class=\"text\">Le choix de votre strat\u00E9gie d\u00E9pend de vos objectifs et de vos pr\u00E9f\u00E9rences. La strat\u00E9gie appliqu\u00E9e est un \u00E9l\u00E9ment cl\u00E9 d\'une r\u00E9ussite \u00E0 plus ou moins long terme.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">4- Passer un ordre\r\n<\/h1>\r\n<div class=\"text\">D\u00E9finissez la taille de votre position, les conditions de cl\u00F4ture et cliquez sur \'Achat\' si vous pensez que la valeur de la crypto-monnaie va augmenter ou \'Vente\' si vous pensez que celle-ci va chuter.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">5- Cl\u00F4turer votre position\r\n<\/h1>\r\n<div class=\"text\">Une fois votre objectif atteint - ou dans le but de limiter vos pertes - il vous suffit de r\u00E9aliser l\u2019op\u00E9ration inverse pour cl\u00F4turer votre position : si vous aviez achet\u00E9, vous devrez vendre et si vous aviez vendu, vous devrez acheter.\r\n  \r\n  <\/div>\r\n\r\n<div class=\"text\">Les CFD sont des produits \u00E0 effet de levier, ce qui vous permet d\u2019accro\u00EEtre votre exposition sur un march\u00E9 financier en n\'immobilisant qu\'une partie de votre capital. Cela signifie \u00E9galement que les gains et les pertes sont amplifi\u00E9s. Les pertes peuvent exc\u00E9der les d\u00E9p\u00F4ts.\r\n  \r\n  <\/div>\r\n\r\n';
                }
                case 12: {
                    return '<h1 class=\"title\">Quels sont les meilleurs broker ?\r\n<\/h1>\r\n<div class=\"text\">Le march\u00E9 des monnaies virtuelles \u00E9tant relativement r\u00E9cent, vous aurez peut \u00EAtre du mal \u00E0 savoir vers quel broker vous tourner pour acheter, vendre ou sp\u00E9culer  sur les crypto monnaies. Et il est vrai que ces derni\u00E8res ann\u00E9es on a pu voir des probl\u00E8mes de hackers ou d\u2019autres probl\u00E8mes de s\u00E9curit\u00E9 sur certaines plateformes. Nous allons donc vous faire ici une liste non-exhaustive des meilleurs brokers du moment.  Nous parlerons des brokers en ligne, il est bien \u00E9vident que vous devrez prendre d\u2019autres mesures pour s\u00E9curiser vos devises. \r\n  \r\n  <\/div>\r\n\r\n<div class=\"text\">Dans ce domaine il est sage de suivre la tendance.  Nous allons donc vous donner les plus populaires d\'entre eux.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">coinbase<\/h1>\r\n<div class=\"text\">Coinbase est probablement le plus populaire des \u00E9changeurs de crypto monnaies en ligne \u00E0 l\'heure actuelle. Leurs \u00E9changes sont s\u00E9curis\u00E9s et ont une port\u00E9e mondiale.  La plateforme permet maintenant \u00E9galement la vente  de Litecoin en plus de BTC et de l\'\u00E9ther. \r\n  \r\n  <\/div>\r\n\r\n<div class=\"text\">Il est facile \u00E0 utiliser. Il rend la n\u00E9gociation tr\u00E8s simple pour de nouveaux utilisateurs. Coinbase propose une bonne couverture d\'assurance pour les monnaies num\u00E9riques.  Il couvre par exemple les failles de s\u00E9curit\u00E9, cybers\u00E9curit\u00E9, ou vol.  Coinbase utilise \u00E9galement un mode hors connexion pour le syst\u00E8me de stockage plus s\u00E9curitaire. \r\n  \r\n  <\/div>\r\n\r\n<div class=\"text\"> Les inconv\u00E9nients de Coinbase, avec autant de crypto monnaies disponibles aujourd\'hui, le choix des monnaies propos\u00E9es est assez r\u00E9duit. Par exemple si vous avez 2 bitcoins \u00E0 votre nom, que vous avez achet\u00E9 avec Coinbase, si vous  voulez  \u00E9changer vos Bitcoins pour une toute nouvelle monnaie sur le march\u00E9, vous ne serait pas en mesure de le faire sur Coinbase. Vous serez oblig\u00E9 de passer par une autre plateforme. Vous pr\u00E9f\u00E9rerez m\u00EAme peut \u00EAtre passer par le dollar pour ne pas avoir \u00E0 faire de transfert.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Bitstamp<\/h1>\r\n<div class=\"text\">Bistamp est une autre plateforme d\'\u00E9change, europ\u00E9en celle ci. Vous pouvez faire les \u00E9changes en dollars ou en euro. La plateforme est autoris\u00E9e par le  Minist\u00E8re des finances Luxembourgeois. pour BTC-USD  les frais  d\'\u00E9change sont de est .10 \u00E0 .25 pour cent.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Bitfinex<\/h1>\r\n<div class=\"text\">Un des grands avantages de bitfinix est sa capacit\u00E9 de trader une grande vari\u00E9t\u00E9 de crypto monnaies, comme Bitcoin, Ethereum, Ethereum classique, zcash, monero, Litecoin, Dash, iota, et Ripple. Ils offrent  \u00E9galement une marge d\u2019achat, de vente et une interface personnalis\u00E9e. En terme de s\u00E9curit\u00E9, il y a la possibilit\u00E9 d\u2019une double authentification, ainsi qu\u2019une adresse email  de cryptage pour votre s\u00E9curit\u00E9, et un stockage hors ligne.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Kraken\r\n<\/h1>\r\n<div class=\"text\">Kraken est parmi les plus populaires plateforme d\'\u00E9changes de Bitcoin. Ils offrent un guide de soutien et de n\u00E9gociation.  Comme les autres acteurs majeurs, ils facilitent le commerce de Bitcoin, Litecoin, Ethereum, et d\'autres cryptos monnaies. Ils proposent de bonnes  solutions de stockage.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Btcc et Btcchina\r\n<\/h1>\r\n<div class=\"text\">Btcc et Btcchina sont essentiellement la m\u00EAme entreprise, Btcc servant au niveau international et Btcchina servant exclusivement ceux qui vivent en Chine. Ils ont de bonnes mesures de s\u00E9curit\u00E9 et un degr\u00E9 \u00E9lev\u00E9 de professionnalisme. Leurs services comprennent le bureau de change lui-m\u00EAme, plus un pool de minage, le traitement des paiements, et la cr\u00E9ation de portefeuilles.\r\n  <\/div>\r\n\r\n<div class=\"text\">Coinmama est une plateforme d\'\u00E9change bitcoin qui permet des transactions en utilisant  les cartes de cr\u00E9dit.\r\n <br> Il n\'y a pas d\'\u00E9change possible avec d\'autres vendeurs; vous recevez vos Bitcoins uniquement via coinmama.Les frais sont de 6.75 pour cent sur votre prix de Bitcoin.\r\n  \r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Okcoin<\/h1>\r\n<div class=\"text\">Okcoin est un autre populaires plateforme d\u2019 \u00E9change. Ils \u00E9changent le Bitcoin, l\u2019 Ethereum, et  le Litecoin. Ils permettent  les \u00E9changes entre traders pour de grosses sommes de liquidit\u00E9s.  Ils proposent \u00E9galement une application mobile.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Etoro<\/h1>\r\n<div class=\"text\">Etoro est un march\u00E9 en ligne qui offres des crypto monnaies,  mais aussi des produits de base, des indices, et leurs CFD servent environ 4.5 millions de clients au niveau mondial.  Ils ont un trader en ligne sophistiqu\u00E9 avec des plates-formes d\u00E9velopp\u00E9es et de nombreux instruments qui peuvent vous aider \u00E0 construire votre fonds d\'investissement. Ils sont \u00E9galement une plateforme sociale qui relient les d\u00E9butants avec les professionnels du secteur.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Markets.com\r\n<\/h1>\r\n<div class=\"text\">Markets.com est un courtage en ligne sp\u00E9cialis\u00E9e dans Forex, CFD, indices, les FNB, les produits de base, les actions, et les crypto monnaies. Ils sont exploit\u00E9s par safecap, une filiale de Playtech PLC qui n\u00E9gocie sur la Bourse de Londres. Ils ont une autorisation du Conseil des services financiers (FSB) en Afrique du sud.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Plus500<\/h1>\r\n<div class=\"text\">Plus500 est une compagnie multinationale et une entreprise leader. fond\u00E9e en 2008, ils ont mis au point un trading en ligne pour CFD, actions, Forex, produits de base, les ETF, les options, les indices, et les  crypto monnaies. ils ont une licence mondiale avec leurs bureaux au Royaume-Uni, \u00E0 Chypre et en Australie. \r\n  \r\n  <\/div>\r\n<div class=\"text\">Parmi ces diff\u00E9rentes plateformes, il y a certains avantages \u00E0  l\'achat de crypto monnaies sur etoro, markets.com, et plus500: Ce sont des courtiers en ligne depuis longtemps, Vous pouvez acheter des crypto monnaies ainsi qu\u2019un large \u00E9ventail d\'options d\'investissement. Vous avez \u00E9galement acc\u00E8s \u00E0 des ressources \u00E9ducatives et \u00E0 une communaut\u00E9.\r\n  \r\n  <\/div>\r\n\r\n\r\n';
                }
                case 13: {
                    return '<h1 class=\"title\">Commerces et monnaies virtuelles\r\n<\/h1>\r\n<div class=\"text\">De plus en plus  de commer\u00E7ants \u00E0 travers le monde ont commenc\u00E9 \u00E0 accepter les crypto monnaies comme moyen de paiement. M\u00EAme si vous n\u2019utilisez pas encore les crypto monnaies pour vos d\u00E9penses, il est int\u00E9ressant de rester au courant de leur popularit\u00E9 parmi les commer\u00E7ants et sur les march\u00E9s. \r\n  \r\n  <\/div>\r\n<h1 class=\"title\"> Car plus la monnaie aura d\'utilit\u00E9, plus sa valeur sera importante. Ce sera \u00E9galement un facteurs de stabilit\u00E9 pour sa valeur et sa survie ne sera pas uniquement bas\u00E9e sur sa popularit\u00E9. \r\n  \r\n  <\/h1>\r\n<div class=\"text\">Ces consid\u00E9rations sont d\u2019autant plus importante en ce qui concerne les monnaies virtuelles, dont l\u2019existence de certaines ne peuvent \u00EAtre consid\u00E9r\u00E9es comme acquises. Il y a des centaines de nouvelles monnaies virtuelles qui apparaissent et disparaissent et r\u00E9apparaissent et beaucoup d\u2019entre elles finiront par dispara\u00EEtre pour de bon. Le fait qu\u2019il soit possible de les \u00E9changer contre des marchandises, prouve qu\u2019elles peuvent \u00EAtre utiles \u00E0 la soci\u00E9t\u00E9 et cela peut \u00EAtre un facteur de survie. Ainsi pour envisager l\u2019avenir d\u2019une devise num\u00E9rique vous devez \u00E9valuer son potentiel de d\u00E9veloppement durable.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Bitcoin<\/h1>\r\n<div class=\"text\">Bitcoin est accept\u00E9e par quelques-uns des meilleur commerces au monde.\r\n  \r\n  <\/div>\r\n  <ul>\r\n    <li><span>WordPress.com\r\n    <\/span><\/li>\r\n    <li><span>OkCupid<\/span><\/li>\r\n    <li><span>Microsoft<\/span><\/li>\r\n    <li><span>TigerDirect<\/span><\/li>\r\n    <li><span>CheapAir.com\r\n    <\/span><\/li>\r\n    <li><span>Expedia.com\r\n    <\/span><\/li>\r\n    <li><span>Dell<\/span><\/li>\r\n    <li><span>Bitcoin.Travel\r\n    <\/span><\/li>\r\n    <li><span>Whole Foods\r\n    <\/span><\/li>\r\n    <li><span>Grooveshark<\/span><\/li>\r\n    <li><span>Shopify.com\r\n    <\/span><\/li>\r\n    <li><span>LOT Polish Airlines\r\n    <\/span><\/li>\r\n    <li><span>RE\/MAX London\r\n    <\/span><\/li>\r\n    <li><span>Mint.com\r\n    <\/span><\/li>\r\n  <\/ul>\r\n<h1 class=\"title\">Ethereum<\/h1>\r\n<div class=\"text\">tandis que bitcoin peut \u00EAtre utilis\u00E9 pour diff\u00E9rents commerces dans le monde entier, ethereum ne vise pas ce but commercial utilitaire. Ethereum utilise les progr\u00E8s technologique de \u00ABSmart contrats,\" qui cr\u00E9e un accord automatique entre deux parties. Ainsi, Ethereum est couramment utilis\u00E9s dans les entreprises ou les transactions institutionnelles.\r\n  \r\n  <\/div>\r\n\r\n<div class=\"text\">Voici quelques-uns des endroits o\u00F9 Ethereum peut \u00EAtre utilis\u00E9.\r\n  \r\n  <\/div>\r\n<div class=\"text\">Il ya quelques marchands Online acceptant l\u2019Ethereum, mais  il est particuli\u00E8rement utilis\u00E9 pour les transactions dans les institutions. Les soci\u00E9t\u00E9s suivantes ont rejoint l\u2019 Ethereum Entreprise Alliance, qui encourage l\'utilisation de sa technologie Blockchain. Aujourd\'hui elle compte plus de 86 membres. Parmi eux :\r\n  \r\n  <\/div>\r\n  <ul>\r\n    <li><span>Toyota<\/span><\/li>\r\n    <li><span>Merck<\/span><\/li>\r\n    <li><span>Deloitte<\/span><\/li>\r\n    <li><span>Microsoft<\/span><\/li>\r\n    <li><span>ING<\/span><\/li>\r\n    <li><span>Broadridge<\/span><\/li>\r\n    <li><span>IBOBANK<\/span><\/li>\r\n    <li><span>J.P. Morgan\r\n    <\/span><\/li>\r\n    <li><span>Credit Suisse\r\n    <\/span><\/li>\r\n    <li><span>Accenture<\/span><\/li>\r\n    <li><span>UBS<\/span><\/li>\r\n    \r\n  <\/ul>\r\n\r\n  <div class=\"text\">Litecoin se trouve \u00E0 seulement la troisi\u00E8me place des plus populaires des devises num\u00E9riques. il est clairement en retard face au  bitcoin et a l\u2019ethereum en termes de valeur. Par exemple, pour le moment, bitcoin se trouve \u00E0 plus de 6000 USD tandis que l\u2019ethereum est \u00E0 306 USD. Le Litecoin se trouve bien derri\u00E8re avec une valeur de 50 $. Cependant, certaines personnes sp\u00E9culent que le Litecoin sera un jour \u00EAtre utilis\u00E9 chez les commer\u00E7ants, tout comme le bitcoin. Voici quelques commer\u00E7ants qui acceptent le Litecoin en ce moment.\r\n    \r\n    <\/div>\r\n    <ul>\r\n      <li><span>cheapair.com\r\n      <\/span><\/li>\r\n      <li><span>Re \/ Max Londres\r\n      <\/span><\/li>\r\n      <li><span>San Marco caf\u00E9\r\n      <\/span><\/li>\r\n      <li><span>litecoinpharmacy.com\r\n      <\/span><\/li>\r\n      <li><span>Uber en R\u00E9publique tch\u00E8que\r\n      <\/span><\/li>\r\n    <\/ul>\r\n';
                }
            }
        }
        else {
            switch (num) {
                case 1: {
                    return '<h1 class=\"title\">What are cryptocurrencies?\r\n<\/h1>\r\n<div class=\"text\">Welcome to the Academy InteractiveCrypto.<br>\r\n  \r\n  We offering a series of courses that will allow you to better understand the exciting world of cryptocurrencies, and to subsequently invest or trade cryptocurrencies.<br> \r\n  \r\n  To understand cryptocurrencies we must first understand what the currency is for and see if the virtual currencies are currencies in the first sense of the concept.<\/div><br>\r\n<h1 class=\"title\">First of all, what is the use of money?<\/h1>\r\n<div class=\"text\">1-Currency is a unit of account that measures the value of goods and services traded.<br>\r\n  \r\n  2-It is an instrument of exchange.<br>\r\n  \r\n  3-It is a store of value allowing to postpone its purchases or to constitute a saving.<br><\/div>\r\n<h1 class=\"title\">Who issues the currency?\r\n<\/h1>\r\n<div class=\"text\">As for the functioning of current currencies, they are issued by the central banks of the different countries, which issue them according to economic and political imperatives.\r\n  \r\n  These are so-called centralized currencies.<br>\r\n  \r\n  Today, most trades made in traditional currency are made electronically (transfers, CB ...), and therefore pass through the banks.<br>\r\n  \r\n  The value of these currencies depends on the law of supply and demand on the stock markets.<br><\/div>\r\n<h1 class=\"title\">What about cryptocurrencies? Do they meet the same rules?\r\n<\/h1>\r\n<div class=\"text\">As far as the function of money is concerned, cryptocurrencies correspond to the same principles. As for their value, here too, it depends on the law of supply and demand of the markets.<br> On the other hand, as far as its operation is concerned, we are not at all in the same technologies nor in the same centralized system:\r\n  \r\n  First, the cryptocurrency has no physical support (coins, notes ..) It is a purely virtual currency.<br> Moreover, cryptocurrencies no longer depend on banks or states and their economic or political interests.<br>  It is a decentralized currency.<br>\r\n  \r\n  As for its technology, it is quite revolutionary, based on mathematical algorithms, and on the principle of blockchain, developed by the designer of the first digital currency in 2009, Satoshi Nakamoto (alias, the character remaining unknown) Bitcoin.<br>\r\n  \r\n  These currencies are actually created by \"miners\", who are thousands of individuals or companies who put the computing power of their computers to the services of this technology.<br>\r\n  \r\n  To understand how it works we advise you to follow our second course: What is Blockchain?<\/div>\r\n\r\n\r\n\r\n';
                }
                case 2: {
                    return '<h1 class=\"title\">Blockchain what is it?<\/h1>\r\n<div class=\"text\">To understand a little better the functioning of digital currencies such as bitcoin, it is interesting to understand what the blockchain, and conversely we will understand more the blockchain thanks to the example of bitcoin, the technology of one (the blockchain) having been historically created in the service of the other (the bitcoin).<\/div>\r\n<h1 class=\"title\">Can we give a simple definition of the blockchain?\r\n<\/h1>\r\n<div class=\"text\">The blockchain is in a nutshell a database, secure, reliable, tamper-proof and distributed.\r\n  It is the ability to make transactions with confidence, without knowing each other and without intermediaries.\r\n  <\/div>\r\n<div class=\"text\">That\'s the definition! But what does it hide behind this definition?\r\n<\/div>\r\n<div class=\"text\">The blockchain is a computer protocol, which will upset the transfer of money (but not only).\r\n<\/div>\r\n<div class=\"text\">It is actually a large indelible numeric register, containing information grouped together.\r\n<\/div>\r\n<div class=\"text\">This information is kept in the form of cryptography, ie in the form of coded messages.\r\n<\/div>\r\n\r\n<div class=\"text\">In general when we code a message, we need a key.\r\n  What is a key?\r\n  <\/div>\r\n\r\n\r\n<div class=\"text\">For example, we decide to assign a number to each letter of the alphabet. This is a key. If you have this key you will be able to decrypt the message and respond to this message in the same way.\r\n<\/div>\r\n<div class=\"text\">But there is a much more sophisticated form of encryption, it is asymmetric cryptography, for which the key that coded the message is not the same as the one that decodes it.\r\n  How is it possible ?\r\n  It\'s a bit like having a French-Chinese dictionary, but you do not have the Chinese-French dictionary.\r\n  <\/div>\r\n  <div class=\"text\">All these codes are in the form of extremely complicated algorithms.\r\n  <\/div>\r\n  <div class=\"text\">But concretely what happens when you make a transaction with blockchain technology?\r\n  <\/div>\r\n  \r\n<h1 class=\"title\">Let\'s take an example:\r\n<\/h1>\r\n<div class=\"text\">Mr. X, wishes to transfer 10 bitcoin to Mr. Y.\r\n  \r\n  Each of them will use a private key, which could represent his signature, and a public key, sort of mailbox.\r\n  \r\n  If X wants to give Y 10 bitcoin, it uses its private key to initiate the transaction, then sends the sum to Y\'s public address.\r\n  \r\n  All of these interactions are logged in a block that all users of the network can have a copy.\r\n  \r\n  This history of all transactions made, indicates the date, the amount, the public keys of the two users, but not their real identity.\r\n  \r\n  To secure the system, individuals or companies connect their computers on the network and provide computing power, they are called \"minors\".\r\n  Using mathematical formulas, they verify that X has the 10 bitcoin he wants to transfer (and this, by checking all the transactions made since the genesis of bitcoin).\r\n  \r\n  Once verified, the transaction is indelibly entered in the register. It is a block that is added to the chain of blocks, hence the name: blockchain.\r\n  \r\n  Thus, thanks to this system, it is impossible to have false bitcoin, to deny having made a transaction, or to use the same bitcoin twice.\r\n  \r\n  The miners would notice this and immediately stop the transaction after analyzing the fraudster\'s history.\r\n  <\/div>\r\n<h1 class=\"title\">But why would the \"miners\" provide this computing power?\r\n<\/h1>\r\n<div class=\"text\">What is their interest in this story? (Especially since to make these calculations they need a huge computing power that is not given to everyone!)\r\n  \r\n  Their interest is that they will be paid for this work by new bitcoin, as well as transaction fees.\r\n  \r\n  This currency is printed as and transactions with the minors who receive in return part of this creation of value.\r\n  \r\n  And that is what will form the money supply of bitcoin (money supply that should not exceed 21 million bitcoin issued, this is the rule that was fixed at the beginning).\r\n  <\/div>\r\n<h1 class=\"title\">Conclusion:<\/h1>\r\n<div class=\"text\">The blockchain therefore makes it possible to place its trust not in a conventional intermediary, but in a network of computers connected to each other.\r\n  \r\n  There is no longer a central control body, such as a country, a bank or a company that could get hold of the register (see: No organization can seize your bitcoin- Why invest or buy bitcoin) .\r\n  \r\n  We can exchange values \u200B\u200Bfrom peer to peer without any intermediary.\r\n  <\/div>\r\n<h1 class=\"title\">We now better understand the definition given at the beginning of this article:\r\n<\/h1>\r\n<div class=\"text\">The blockchain is a secure, reliable, tamper-proof, and distributed database.\r\n  It is the ability to make transactions with confidence, without knowing each other and without intermediaries.\r\n  <\/div>\r\n';
                }
                case 3: {
                    return '<h1 class=\"title\">How to save your Bitcoins (or any other virtual currencies)?\r\n<\/h1>\r\n<div class=\"text\">To save your Bitcoins you will need a wallet!<\/div>\r\n<h1 class=\"title\">But what is a wallet?\r\n<\/h1>\r\n<div class=\"text\">You want to buy Bitcoins and therefore either keep them for investment purposes or spend them.<br>\r\n  For this you need a wallet.<br>\r\n  \r\n  A wallet is actually an electronic wallet.<br>\r\n  That is, a Bitcoin wallet is client software that you must install on your computer.<br>\r\n  This software allows you to connect to the Bitcoin network automatically to download the latest state of the network and to keep your currencies.<br>\r\n  It will give you the ability to keep your private key.<br>\r\n  \r\n  In fact the software will allow you to create Bitcoin addresses to receive or send your Bitcoins.<br>\r\n  \r\n  In this sense, it comes close to managing an electronic bank account to send, receive or store your Bitcoins, and track your transactions.<br>\r\n  More technically, your Bitcoin portfolio will generate and store pairs of public and private keys that will allow you to make your transactions and ensure their integrity.<br>\r\n  As a reminder, the public key is the Bitcoin address, and the private key, your signature.<br>\r\n  <\/div>\r\n<h1 class=\"title\">How to choose your wallet?\r\n<\/h1>\r\n<div class=\"text\">There are many wallet, so how to choose it?<br>\r\n  First you have to choose it according to the media you are going to use.<br>\r\n  -Inline, like \"Circle\", for example.<br>\r\n  Desktop, like \"Armory\" for example.<br>\r\n  -Mobile on your smartphone, like Mycelium wallet, for example.<br>\r\n  -Or still physical (paper wallets) like Ledger, for example.<br>\r\n  \r\n  Then, in these categories, there are two kinds of portfolios:<br>\r\n  - \"Full-node\" portfolios, ie portfolios that will store the entire blockchain on your computer and allow you to be an active user of the network.<br>\r\n  The disadvantage being that you must have sufficient disk space to save and update the blockchain.<br>\r\n  \r\n  The light wallets\r\n  Who do not store the blockchain.<br>\r\n  They rely on servers while checking the integrity of the data.<br>\r\n  \r\n  It will be up to you, for each of the sites and applications, to check whether it is a lightweight portfolio or not.<br>\r\n  <\/div>\r\n<h1 class=\"title\">Wallets online.<br>\r\n<\/h1>\r\n<div class=\"text\">\r\n  For beginners, the online portfolio is probably the easiest way.<br>\r\n  You create your portfolio directly on the online portfolios website, following the step-by-step instructions.<br>\r\n  The interest of this portfolio is not to have to download an application and to be accessible from any computer.<br>\r\n  So if you have not saved your computer data, your wallet will not disappear in the event of a computer failure.<br>\r\n  The disadvantage is of course safety, because you entrust your Bitcoins to a third party.<br>\r\n  It is therefore essential to ensure the reliability of the chosen site and its security measures before connecting.<br>\r\n  <\/div>\r\n<h1 class=\"title\">The mobile portfolio.<br>\r\n<\/h1>\r\n<div class=\"text\">It\'s about downloading to your mobile phone an application that typically takes little memory and then set up your wallet.<br> All this takes only a few minutes.<br>\r\n  The advantage is that you have your Bitcoins everywhere with you.<br>\r\n  In addition, payments are fast and you can make them from anywhere.<br> You can pay directly with your phone.<br>\r\n  At the security level, you will need to lock your smartphone and application with a code.<br>\r\n  <\/div>\r\n<h1 class=\"title\">The office portfolio (on computer).<br>\r\n<\/h1>\r\n<div class=\"text\">Here also you will need to download an application and follow the instructions step by step.<br>\r\n  This is probably the safest way to keep your Bitcoins.<br>\r\n  But it will depend on how you use it:\r\n  You will need to make backups and put your wallet on a USB key.<br>\r\n  <\/div>\r\n<h1 class=\"title\">The physical portfolio.<br>\r\n<\/h1>\r\n<div class=\"text\">In addition to its various media, it is also advisable to print the encryption key on paper and to put this precious paper in a safe place, and even in several places (it is a paper wallet).<br>\r\n  \r\n  It may also be wise to use a computer dedicated only to your Bitcoins and not connected to the Internet.<br>\r\n  <\/div>\r\n<h1 class=\"title\">Conclusion:\r\n<\/h1>\r\n<div class=\"text\">Creating your Bitcoin portfolio (or any other virtual currencies) is therefore not very difficult, but it is more difficult to choose in which kind of portfolio to save them, but you still have the possibility to opt for several kinds of wallets at the same time, which will allow you to ward off any eventuality.<br><\/div>\r\n';
                }
                case 4: {
                    return '<h1 class=\"title\">Why invest or buy bitcoin?\r\n<\/h1>\r\n<h1 class=\"title\">Ten good reasons to buy or use Bitcoin.<br>\r\n<\/h1>\r\n\r\n<div class=\"text\">Now that we\'ve figured out what the bitcoin and other virtual currencies are, and how they work, it would be interesting to know what it\'s worth to own or use the bitcoin.<br> Here are a few reasons.<br>\r\n<\/div>\r\n<h1 class=\"title\">1- The bitcoin is faster.<br>\r\n<\/h1>\r\n<div class=\"text\">A bitcoin transaction is extremely fast:\r\n  If you wish to send a check from your bank to another bank, it will usually take several days to confirm the transaction because the bank that receives your check will have to make sure that you have the equivalent amount in your account.<br>\r\n  \r\n  If it is a transfer abroad, it will also take some time.<br>\r\n  \r\n  If you want to buy a merchandise and decide to pay it in bitcoin, the transaction will be instantaneous if the merchant takes the risk to accept the transaction without it being validated by the blockchain.<br> Otherwise it will take about ten minutes.<br>\r\n  But, you will say, with a bank card it is also instant no? Yes but it\'s more expensive!\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">2- The bitcoin is cheap.<br>\r\n<\/h1>\r\n<div class=\"text\">In the case of a transaction between you and a seller, the seller will have to pay a commission.<br> And some sellers will want to recover this commission by making you pay in its sale price!\r\n  For the bitcoin, fees are in many cases non-existent or very low.<br>\r\n  <\/div>\r\n<h1 class=\"title\">3- No organism can seize your bitcoin.<br>\r\n<\/h1>\r\n<div class=\"text\">In 1999 the Franc was replaced by the Euro, thus obliging all those who still had the Franks in cash to have to exchange them.<br>\r\n  In India the government decides to cancel the five hundred Rupee tickets, which means that those who owned these tickets simply lost them!\r\n  In March 2013, the Cypriot central bank decided to recover unsecured deposits of more than one million in order to recapitalize itself.<br>\r\n  They want to take a percentage of the deposits below this amount, which means they make a drain on the economies of the Cypriot families!\r\n  \r\n  With the bitcoin, this can not happen, because no central authority has any control over your bitcoin, state, or bank.<br> There is no centralized body in this monetary system.<br>\r\n  No one can seize them!\r\n  <\/div>\r\n<h1 class=\"title\">4- You can not cancel a transaction in bitcoin.<br>\r\n<\/h1>\r\n<div class=\"text\">That is, a Bitcoin sent is a received Bitcoin!\r\n  When someone pays in bitcoin, he can not retrieve them unless well on the recipient agrees.<br>\r\n  This is a big advantage for sellers because it prevents fraudsters from buying products with a credit card and then cancel the transaction once the product is recovered.<br>\r\n  <\/div>\r\n<h1 class=\"title\">5- With the bitcoin you can not steal your coordinates.<br>\r\n<\/h1>\r\n<div class=\"text\">How often, to make a purchase or payment, you ask for the details of your credit card with all possible details, including the secret code on the back of your card?\r\n  And how many times are these coordinates stolen and used for a dishonest purpose?\r\n  When you perform a transaction in bitcoin, you do not give any information, but you use two keys, one private and one public, your private key remaining totally secret.<br>\r\n  At the time of your transaction, you combine your two keys through an algorithm that proves that it is you who make the transaction, and therefore this one is totally secure.<br>\r\n  <\/div>\r\n<h1 class=\"title\">6-The bitcoin is not subject to inflation.<br>\r\n<\/h1>\r\n<div class=\"text\">\r\n  A state may decide at any time to print as many notes as it wishes (to pay the national debt, for example), which will directly reduce the value of this currency, automatically raising prices, decline in purchasing power.<br>\r\n  The bitcoin, it was conceived from the start to be issued only to 21 million units.<br>\r\n  It will therefore not be subject to inflation!\r\n  <\/div>\r\n<h1 class=\"title\">7- Your transaction in Bitcoin remains private.<br>\r\n<\/h1>\r\n<div class=\"text\">If you do not want to know that you are behind a transaction for reasons of discretion or for any other reason, you can remain totally anonymous.<br>\r\n  That is to say that everyone knows if you own the bitcoin needed for your transaction and if they are yours.<br>\r\n  But no one will know who is the real owner of these bitcoin.<br> This is of course completely impossible with the current banking system.<br>\r\n  It\'s like you have a transparent wallet: nobody knows the owner of the purse, but everyone sees what\'s in it!\r\n  <\/div>\r\n<h1 class=\"title\">8- With the bitcoin no need to put your trust in a third party.<br>\r\n<\/h1>\r\n<div class=\"text\">In the current system, you have to trust the bank that will manage your money, trust him also when you make an online payment.<br> But you also have to trust the seller to whom you transmit all your personal details.<br>\r\n  With the bitcoin, you no longer need to trust them because your transactions are signed with your personal key and verified by thousands of anonymous computers.<br>\r\n  The seller does not need to know who you are if you do not want it.<br>\r\n  <\/div>\r\n<h1 class=\"title\">9-You have full ownership of your bitcoin.<br>\r\n<\/h1>\r\n<div class=\"text\">Today for electronic payments your account belongs to someone other than you.<br> For example: if for some reason the credit society decides to suspend your account, it can do so without notifying you, without asking your opinion, without even giving you an explanation.<br>\r\n  It will then be up to you to prove your good faith to have access to your private funds again.<br>\r\n  With the bitcoin the owner of the funds is the only one to own the private key and is therefore the sole owner of its bitcoin.<br>\r\n  No one can seize them or block them.<br>\r\n  <\/div>\r\n<h1 class=\"title\">10- The value of the bitcoin.<\/h1>\r\n<div class=\"text\">Today the number of traders who accept transactions in bitcoin is increasing as well as the number of users.<br>\r\n  On the foreign exchange market the volume of trade is also rising, and some predict that its price will reach half a million dollars in 2030 !!!\r\n  That is to say that if you buy for 100 \u20AC of bitcoin at the current price, you will get in 2030 the sum of 39062.5 \u20AC !!!\r\n  \r\n  All these reasons, as you will have understood, make it very interesting to use or buy bitcoin, this relatively recent virtual currency, but which is by no means the only one on the market.<br> market.\r\n  We will discuss this in a future article.<br>\r\n  <\/div>\r\n';
                }
                case 5: {
                    return '<h1 class=\"title\">How to buy Bitcoin or cryptocurrencies?\r\n<\/h1>\r\n<div class=\"text\">Now that you understand the benefits of virtual currencies, you certainly want to buy them, either to store them or to make purchases through them.<br>\r\n  For this several steps are necessary that we will describe you.\r\n  We will take the example of bitcoin, but the principles remain the same for other currencies.<br>\r\n  <\/div>\r\n<h1 class=\"title\">Install a wallet and a Bitcoin address.\r\n<\/h1>\r\n<div class=\"text\">To buy bitcoin or make transactions with this virtual currency you must use a wallet and a bitcoin address.<br>\r\n  For this you will need to install a wallet software.\r\n  These programs allow you to create and store bitcoin addresses on your computer.<br>\r\n  Once you have installed your wallet and created your first bitcoin address, you will need to get the bitcoin, by exchanging Euro or any other currency in two different ways:<br>\r\n  Through exchange platforms or\r\n  By going through sales sites (broker).<br>\r\n  (Know that it is also possible to invest in a minor or rent power and thus participate in the creation of currency through the site Coinmama or sell objects or services against this virtual currency)<br>\r\n  <\/div>\r\n<h1 class=\"title\">Exchange platforms.\r\n<\/h1>\r\n<div class=\"text\">On an exchange platform, bitcoins can be acquired according to the principle of supply and demand.<br>\r\n  These are also platforms that allow today to set the official price of bitcoin.<br>\r\n  You will therefore go on this platform, a purchase order, with a maximum limit that you will have set.<br>\r\n  If your offer is at the market price you will immediately receive your bitcoin, otherwise you will have to wait for sellers to accept your offer.<br>\r\n  To pay for the purchased bitcoin you will usually be asked to make a SEPA transfer (the disadvantage being the delay time of several days).<br>\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Brokers:\r\n<\/h1>\r\n<div class=\"text\">A simpler way to get bitcoin is to go through sales sites:<br> brokers.\r\n  Brokers are companies that sell the bitcoin they bought or mine at prices close to market prices. They can offer the price they want, because you buy them directly your bitcoin without going through the principle of supply and demand.<br>\r\n  To do this you must create an account.\r\n  Choose the amount of bitcoin you want to buy.<br>\r\n  Pay your bitcoin.\r\n  And so you will receive your bitcoin on your wallet.<br>\r\n  <\/div>\r\n<h1 class=\"title\">Means of payment for the purchase of bitcoin.<br>\r\n<\/h1>\r\n\r\n<h1 class=\"title\">1.The credit card.<\/h1>\r\n<div class=\"text\">This is the easiest way to buy bitcoin.<br>\r\n  You can simply exchange your euro for bitcoin after an identity check.\r\n  <\/div>\r\n<h1 class=\"title\">2. Buy bitcoin via SEPA bank transfer.\r\n<\/h1>\r\n<div class=\"text\">Most platforms and sites accept SEPA credit transfers.<br>\r\n  It will take you three to six days to receive your bitcoin on your account.<br>\r\n  In this way, the transaction costs of large amounts will be significantly reduced.<br>\r\n  <\/div>\r\n<h1 class=\"title\">3. Buy bitcoin through PayPal card.\r\n<\/h1>\r\n<div class=\"text\">To use a PayPal card, the best is to go through the platform Coinmama that will allow you very quickly (a few minutes) to deposit money on the platform through your PayPal account. You will deposit your currencies by exchanging them against the currency of the site, the SLL (which is the currency of the site \"second life\"), then exchange these SLL against bitcoin.\r\n<\/div>\r\n<h1 class=\"title\">4. Buy bitcoin with cash.\r\n<\/h1>\r\n<div class=\"text\">To buy bitcoin with cash, the most used means are the Western Union or the postal account.<br>\r\n  You can pay in a box office and get your bitcoin in about two hours.<br>\r\n  In fact the funds will be deposited directly on the account of the broker.<br>\r\n  <\/div>\r\n<h1 class=\"title\">5. Buy bitcoin with paysafecard\r\n<\/h1>\r\n<div class=\"text\">To buy a bitcoin amount with a paysafecard prepaid card, you will have to go through the Coinmama website or you will convert your euro into SLL, the currency of the \"second life\" site, thanks to which you will be able to trade with bitcoin.<\/div>\r\n<h1 class=\"title\">6. Buy bitcoin with Neteller\r\n<\/h1>\r\n<div class=\"text\">Neteller is the electronic purse of Casino and Poker players.<br>\r\n  You will link your account to the Coinmama platform which will then allow you to deposit your funds and convert them into bitcoin.<br>\r\n  <\/div>\r\n<h1 class=\"title\">7. Buy bitcoin with postal account mandates.\r\n<\/h1>\r\n<div class=\"text\">Through the mail you can also buy your bitcoin by simply going to a counter and asking to pay the brokers through the account mandate.<br>\r\n  You will receive your bitcoin within a few hours.<br>\r\n  \r\n  Here are many ways to buy bitcoin at your convenience.<br>\r\n  Once purchased, you may decide to keep them as an investment or use them to pay for purchases.\r\n  <\/div>\r\n';
                }
                case 6: {
                    return '<h1 class=\"title\">How to choose your cryptocurrency?\r\n<\/h1>\r\n<div class=\"text\">The best cryptocurrencies today as you have guessed, are not limited to bitcoin, ethereum, or litecoin. There are a lot of cryptocurrencies on the market right now. In fact, there are so many currently available that it would be impossible to name them all here.<br>\r\n  This list is therefore that of some of the most popular crypto currencies. For a complete list of the Top 100 crypto currencies at the moment, visit\r\n  <a href=\"http:\/\/www.interactivecrypto.com\/\">here.<\/a><\/div>\r\n<h1 class=\"title\">Bitcoin<\/h1>\r\n<div class=\"text\">Recognized as the first virtual currency, bitcoin is still the highest value currency. At the time of writing this article, a single coin is worth between 5000 and 6000 USD. It is a global phenomenon that we are still far from understanding.<br>\r\n  More and more traders around the world are accepting payments in Bitcoin.<br>\r\n  All other currencies since Bitcoin are known as \"altcoins,\" alternative currencies to bitcoin.<br>\r\n  <\/div>\r\n<h1 class=\"title\">Ethereum<\/h1>\r\n<div class=\"text\">The ethereum (or ether, as it is commonly called) would be the second most popular crypto currency right now. <br>He comes in second place after bitcoin. At the time of this article its value is between 250 and 350 USD.<br> Even though this is much less than the value of bitcoin, some people predict that eventually the ethereum will be even more valuable than bitcoin.<br>\r\n  One of the reasons for this prediction is the technology very different from that of Bitcoin.<br>\r\n  While bitcoin can be used for shopping, ether could be more convenient and unique. Indeed, it can be used by large government institutions, or for contracts called smart contracts.<br>\r\n  <\/div>\r\n<h1 class=\"title\">The Ethereum classic \r\n<\/h1>\r\n<div class=\"text\">The history of the classic ethereum is a bit more complicated.<br> The Ethereum Classic came into operation due to a Split within the Ethereum community. At present its value is around 10 USD.<br>\r\n<\/div>\r\n<h1 class=\"title\">litecoin<\/h1>\r\n<div class=\"text\">The litecoin is the third most popular crypto currency lately.<br>\r\n  A number of events have triggered its popularity, including the Coinbase platform that has added it to its online marketplace with bitcoin and ether. It has a technology similar to bitcoin, but is \"lighter\" in the sense that its transaction processing is faster.<br>\r\n  <\/div>\r\n<h1 class=\"title\">Ripple<\/h1>\r\n<div class=\"text\">Ripple is different from crypto currencies such as bitcoin because rather than being exchanged via blockchain, it is centralized by a private entity. Merchants do not accept Ripple yet. However, it is used for cross-country exchange of funds.<br>\r\n<\/div>\r\n<h1 class=\"title\">Monero<\/h1>\r\n<div class=\"text\">Monero has become a popular virtual currency, especially when darknet market, and alphabay, have started using it as a preferred currency.<br>\r\n<\/div>\r\n<h1 class=\"title\">Dash<\/h1>\r\n<div class=\"text\">Dash was darkcoin in a previous life. It took a new name to change its link to darkNet. Its founders deliberately wanted to stand out from an illegal currency and become more legitimate towards users. It is still completely anonymous: transactions are untraceable. But the reminder of its dark past, makes it still a bit controversial.<br>\r\n<\/div>\r\n<h1 class=\"title\">NEM<\/h1>\r\n<div class=\"text\">NEM is a public \/ private cryptocurrency blockchain that has recently gained popularity. Like many other crypto currencies, its goal is broad distribution. Its innovative side is that the NEM technology is characterized by, among other things, \"proof of importance\".<br>\r\n<\/div>\r\n<h1 class=\"title\">Zcash<\/h1>\r\n<div class=\"text\">These are made for specific public services, such as marketplaces, or advertising.\r\n<\/div>\r\n<h1 class=\"title\">Digital currencies facing tokens or tokens\r\n<\/h1>\r\n<div class=\"text\">The digital currencies are mined, while the chips are given during an ICOs-type initial coin sale, which is crowdfunding that aims to help a Blockchain company get started, by selling a number of chips.\r\n  See the articles on ICOs.\r\n  <\/div>\r\n\r\n';
                }
                case 7: {
                    return '<h1 class=\"title\">Comparison of different wallets (bitcoin wallets)\r\n<\/h1>\r\n<div class=\"text\">You have decided to buy and exchange bitcoins.\r\n  You need, as we have explained, a wallet, that is to say an electronic wallet that will be either an application, a website or a device managing your private keys.\r\n  You will thus have in your possession a Bitcoin account to carry out your transactions.\r\n  Here is a comparison of different wallets for Bitcoin (but not only).\r\n  <\/div>\r\n<h1 class=\"title\">1-Hardware wallets: hardware wallets.<\/h1>\r\n<div class=\"text\">These wallets are electronic devices that will allow you to store your Bitcoins safely, whether you have few or many.\r\n  It is a practical and extremely safe way.\r\n  The hardware must be plugged into your computer, smartphone, or tablet, such as a USB flash drive, before you can use it.\r\n  Your keys are kept offline, even when connected to your computer.\r\n  These hardware are well paying.\r\n  It is best to choose them with a screen that allows you to view important information.\r\n  Here are some of the best hardware:\r\n  <\/div>\r\n<h1 class=\"title\">TREZOR<\/h1>\r\n<div class=\"text\">Very compact device.\r\n  It was the first on the market and it allows to use its bitcoins very easily.\r\n  It exists since 2014.\r\n  <\/div>\r\n<h1 class=\"title\">Ledger Nano S\r\n<\/h1>\r\n<div class=\"text\">It is made in France.\r\n  It has a screen.\r\n  It is one of the most known companies for the security of bitcoins and it uses a certified microprocessor against all types of attack.\r\n  Its technology is used in the banking sector.\r\n  It exists since 2016.\r\n  <\/div>\r\n<h1 class=\"title\">Ledger HW.1\r\n<\/h1>\r\n<div class=\"text\">It is a hardware without screen, multi signature and cheap.\r\n<\/div>\r\n<h1 class=\"title\">KeepKey\r\n<\/h1>\r\n<div class=\"text\">It features a large screen.\r\n  It is very simple to use thanks to clear and detailed instructions.\r\n  It exists since 2015.\r\n  <\/div>\r\n<h1 class=\"title\">2-Hot wallets (mobile wallets)<\/h1>\r\n<div class=\"text\">Hot wallets work on devices connected to the Internet, such as computers, smartphones or tablets. They generate your private keys.\r\n  Because of their connection to the Internet, they can not be considered 100% safe.\r\n  <\/div>\r\n<div class=\"text\">They are therefore not suitable for storing large amounts of bitcoins, but they can store small quantities in order to make regular payments easily and quickly.\r\n<\/div>\r\n<div class=\"text\">Here are some examples of this type of portfolio:\r\n<\/div>\r\n\r\n<h1 class=\"title\">Portfolios on Andro\u00EFd<\/h1>\r\n<div class=\"text\">There are a lot of them because at first Apple refused the Bitcoin portfolios.\r\n  Among them:\r\n  <\/div>\r\n<h1 class=\"title\">spawn<\/h1>\r\n<div class=\"text\">It is the best known.\r\n  It is very easy to use to make payments or to receive your Bitcoins and also allows you to store your currencies in a very simple way thanks to its very clear explanations.\r\n  <\/div>\r\n<h1 class=\"title\">Greenbits<\/h1>\r\n<div class=\"text\">\r\n  This is the Android version of Green Adress.\r\n  It is dual signature and is compatible with hardware wallets such as Ledger or Treasure.\r\n  <\/div>\r\n<h1 class=\"title\">Bitcoin Wallet\r\n<\/h1>\r\n<div class=\"text\">It is the first to have worked on mobile.\r\n  It has the particularity of connecting directly on the network and is therefore more secure.\r\n  It is very easy to use for beginners.\r\n  \r\n  Wallets for iPhone and iOS devices\r\n  <\/div>\r\n<div class=\"text\">Initially Apple had refused the Bitcoin portfolios, but eventually it offered many possibilities for iOs users.\r\n<\/div>\r\n<h1 class=\"title\">Breadwallet<\/h1>\r\n<div class=\"text\">Breadwallet  is very simple to use for receiving or sending Bitcoin. It allows full control over private keys. It is probably the best Bitcoin wallet for iPhone.<\/div>\r\n<h1 class=\"title\">Copay<\/h1>\r\n<div class=\"text\">Copay  is available with Windows, iOS, Android and all desktop platforms. Thanks to him, you can open several accounts (a staff and a professional for example). This is the portfolio of BitPay.<\/div>\r\n<div class=\"text\">Airbitz<\/div>\r\n<h1 class=\"title\">Airbitz  is also very easy to use. It is compatible with iPhone and Android. It is ideal for beginners and also creates automatic backups.\r\n  \r\n  <\/h1>\r\n  <h1 class=\"title\">3- Office wallets\r\n\r\n<\/h1>\r\n<div class=\"text\">They can be downloaded to your desktop computer.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Electrum<\/h1>\r\n<div class=\"text\">Electrum  is suitable for Mac, Linux and Windows. It can support hardware wallet and secure the storage of your Bitcoins with an offline computer. It is easy to use for beginners.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Bitcoin wallet\r\n<\/h1>\r\n<div class=\"text\">It allows you to exchange your Bitcoins with anyone in the world. You can exchange your Bitcoins for your local currency. It is based on the Copay portfolio created by BitPay.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">Armory<\/h1>\r\n<div class=\"text\">Armory  is best for experienced users. It is multifunctional with different backup and encryption options and allows storage on PCs disconnected from the network.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">4- Online portfolio\r\n<\/h1>\r\n<div class=\"text\">The online wallet stores your Bitcoins on a website. This means that you entrust your storage to a third party.\r\n  \r\n  This is not really the ideal, because if the site was to be hacked you risk losing your Bitcoins.\r\n  \r\n  Of course, these sites make real efforts in terms of security and this solution is extremely convenient.<\/div>\r\n<h1 class=\"title\">Coinbase<\/h1>\r\n<div class=\"text\">Coinbase is very easy to use. It offers tools for traders. It is available in French and offers integration with bank accounts in Euro and Dollars to make your transactions in Bitcoin.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">5- Paper wallet\r\n<\/h1>\r\n<div class=\"text\">This is a solution that should be adopted in addition to any other portfolio you have chosen.\r\n  \r\n  <\/div>\r\n  <div class=\"text\">Among them :\r\n  \r\n  <\/div>\r\n\r\n\r\n<h1 class=\"title\">Bitadress<\/h1>\r\n<div class=\"text\">Bitaddress  is very fast.\r\n  \r\n  <\/div>\r\n<div class=\"text\">his is the most secure solution if you do not write the address and the private key in the same place.\r\n  \r\n  It can keep your bitcoins for long periods.<\/div>\r\n<div class=\"text\">But to make a payment it requires the import of keys in a portfolio such as Muitibit, Electrum, or Bitcoin-QT.<\/div>\r\n<div class=\"text\">So you have an overview of the different wallets that are available for your bitcoins.\r\n  \r\n  You can of course choose several solutions combined.<\/div>\r\n';
                }
                case 8: {
                    return '<h1 class=\"title\">Want to make money with cryptocurrencies?\r\n<\/h1>\r\n<div class=\"text\">To make money with bitcoin, there is no method without effort.<br> But useful and quality work can still bring you money in cryptocurrencies!<\/div>\r\n<h1 class=\"title\">1. BUY LOW, SELL HIGH\r\n<\/h1>\r\n<div class=\"text\">The most obvious way to make money with bitcoin and cryptocurrencies is investment or speculation. Buy low then sell high.<br> Short-term trading based for example on technical analysis does not contribute anything to the project concerned (this being written without moral judgment on the practice).<br> Long-term investment requires stronger involvement in the project.<br> The idea is to find cryptocurrencies whose value on the exchange markets will rise sharply in the future and this requires further study.<br> This study requires time and an understanding of the technical and economic principles of a project of this type.<br> These investors bring to the market their competence by raising the price of the most relevant projects.<br> Although this is not directly useful to the project, price increases benefit the stakeholders involved from the start.<br>\r\n<\/div>\r\n<h1 class=\"title\">2. FINANCING DEVELOPMENT\r\n<\/h1>\r\n<div class=\"text\">In order to gain the trust of potential users, developers are forced to make public the source code of the project.<br> The code may not be published initially and then placed under a license that does not allow the modification to provide some protection to the creator.<br> This need for transparency means that developers are faced with the big question of open source: \"How to make money by freely publishing its software?\"\r\n<\/div>\r\n<div class=\"text\">Answers developed over the years are for example\r\n<\/div>\r\n<div class=\"text\">Take advantage of the notoriety acquired to improve his salary,\r\n  Sell \u200B\u200Bsupport by being in the best position to know the project in detail,\r\n  Sell \u200B\u200Bservices such as the development of specific functions,\r\n  Receive donations or scholarships\r\n  These approaches remain valid but are supplemented by others in the case of a cryptocurrency since the \"parts\" generated by the system will have a value if they find buyers.<br>\r\n  <\/div>\r\n\r\n<h1 class=\"title\">3. ACQUIRING PARTS BEGINNING: Mining\r\n<\/h1>\r\n<div class=\"text\">The creators are of course best placed to believe in their project when the value of the pieces is tiny.<br> They can take advantage to accumulate and hope that their work past and future will increase the value.<br> This does not only apply to developers but to all stakeholders who can advance the project.<\/div>\r\n<div class=\"text\">This accumulation can be done in particular by mining.<br> In so-called Proof-of-Work systems, mining is always easier at the beginning and then the difficulty increases with the overall computing power allocated to this task.<br> We are talking about instamining if a large number of pieces are generated from the beginning and attributed to the members of the project.<br> This can be viewed positively by future investors as this ensures that developers have an incentive to make the project succeed.<br> If this distribution is disproportionate, it will hurt the future equilibrium of the currency on the markets because the prices can then be manipulated by those who have a significant share of the chips.<br>\r\n<\/div>\r\n<h1 class=\"title\">4. ICO\r\n<\/h1>\r\n<div class=\"text\">If it is difficult to charge the software once the source code is public, it can be deduced that the right moment is just before.<br> The practice of generating before a certain amount of parts to sell for a fixed period of time is called ICO (Initial Coin Offering) by analogy with an IPO (Initial Public Offering) on \u200B\u200Bthe stock market for more traditional actions.<br>\r\n  \r\n  This approach remains debatable but has been much better accepted recently.<br> It has the advantage of allowing the project to acquire the capital to finance a sufficiently large and qualified team to launch before the competitors to the similar concept.<br>\r\n  \r\n  Among the noteworthy ICOs are the first, Mastercoin \/ Omni1 in 2013, Ethereum2, Augur3, Gnosis4 and Tezos.<br> The latter has just ended, on a record raised amount (+ $ 200 million).<br> The amounts raised can indeed exceed hundreds of millions of euros.<br>\r\n  \r\n  ICOs can be capped or uncapped, that is, the number of pieces generated is known in advance, or not.<br> The price may also vary over time.<br> In the case of Gnosis, they were Dutch auctions with a decreasing price but only a fixed number of tokens to buy (ICO capped).<br> On the contrary, for Tezos (ICO uncapped), a bonus of up to 20% was offered to first comers.<br>\r\n  <\/div>\r\n<h1 class=\"title\">5. DONATIONS TO GROW THE PROJECT<\/h1>\r\n<div class=\"text\">Just as individuals or businesses can make donations to help projects that are useful to them or are important to them, investors may have an interest in financing work, hoping to reap the benefits later. There is certainly a problem of stowaways who will benefit without funding but this is not a major problem.\r\n  \r\n  This can be done in the form of a crownfunding campaign.<br>\r\n  \r\n  An example of successful implementation of this approach is Monero\'s Forum Funding System5. As the name implies, this mechanism works on the project\'s discussion board. A project leader presents an idea, the amount he asks for it (in Monero) and explains why he is the right person. Milestones are established to stagger payments to milestones. Pledges are then made to arrive at the amount provided. Note that in this particular case, if the sum is not collected in time, the money paid is not returned but used at the following solicitations.\r\n  <\/div>\r\n<h1 class=\"title\">6. FINANCING SERVERS\r\n<\/h1>\r\n<div class=\"text\">Dash6 uses a particular architecture based on what they call Masternodes (literally \"Master Nodes\"). While participants in a cryptocurrency network are generally the same, these Masternodes perform special functions such as transaction anonymization and a governance system. They must be online permanently and run on high-performance servers. This results in a cost that is offset by a payment when a miner finds a block. We then speak of Proof-of-Service by analogy with the Proof-of-Work associated with minors (minors and Masternode coexist in this model). The owner of the Masternode blocks a large sum as a guarantee. There are currently more than 4000 Masternodes Dash spread around the world.\r\n  \r\n  Factom7, the chain that aims to ensure the integrity of information, uses a similar mechanism but has chosen to have only a limited number and fixed servers (divided into several categories according to their role).\r\n  \r\n  We can mention PIVX8 and CROWN9 among projects based on masternodes.<br>\r\n  <\/div>\r\n<h1 class=\"title\">7. INTEGRATING FUNDING IN THE PROTOCOL<\/h1>\r\n<div class=\"text\">The integration of certain parameters such as inflation in the protocol, that is to say in the operating rules of the network, is now well known. Some currencies use a similar system to guarantee developers\' income, which is called a \"self-financed protocol\".<br>\r\n  \r\n  Decred10, for example, reserves 10% of the reward for creating each block11 for a development fund.<br> The distribution mechanism between the main developers and other contributors is not yet clear.<br>\r\n  \r\n  Tezos12 will allow each person with the necessary skills to propose a change in the source code and have the participants vote on it. It is perfectly acceptable for the developer in question to include a reward going to his own address.<br> If he is considered too greedy, the vote may be against him.\r\n  \r\n  Another example of funding through the protocol is Sia13. <br>This project allows everyone to make available disk space for renting. He is then paid in the cryptocurrency of the project, the Sia coins. <br>The originality is that there is a second type of chips, the Sia funds, numbering 10,000 (90% currently for the company behind the project). Their owners automatically share 3.9% of the total amount of hosting contracts (pro rata to the number of Sia funds owned). These tokens can be sold over the counter.\r\n  \r\n  This overview briefly presented the main ways to finance contributions to cryptocurrency projects but it is likely that others will emerge in the future among the many blockchain innovations.<br>\r\n  <\/div>\r\n';
                }
                case 9: {
                    return '<h1 class=\"title\">What is cryptocurrency mining?<\/h1>\r\n<div class=\"text\">As we explained to you, the crypto currencies are thus based on a system of extremely complicated mathematical algorithm which requires computing power provided by what are called minors.<\/div>\r\n<h1 class=\"title\">Why are bitcoins mined?\r\n<\/h1>\r\n<div class=\"text\">For bitcoins to exist on the market and in the economy, they must be registered along a blockchain.<br> It is the miners who will do the job of adding bitcoins to the blockchain.<br> In sum, mining introduces bitcoins into the system, so they can be used.<br> Since there will be a limited number of bitcoins (about 21 million), mining will be limited in time (around 2140).<br> The number of bitcoins that can enter the blockchain is regulated and limited.<br> In addition bitcoins are extracted more the process will be difficult.<br>\r\n  Because theoretically minors can theoretically be you and me, putting at the service of the blockchain network of the currency, the computing power of our software.<br>\r\n  But for currencies like Bitcoin, which is no longer in its infancy, this will require expensive machines because of the importance of the network and therefore the calculations that must be made.<br>\r\n  So it\'s harder than it looks.<br> The explanation we will give you will give you a general idea of \u200B\u200Bthe process.<br> We will take the example of Bitcoin, but these explanations are also valid for other crypto currencies.<br>\r\n  <\/div>\r\n<h1 class=\"title\">How do we mine Bitcoin and cryptocurrencies?\r\n<\/h1>\r\n<div class=\"text\">To start exploiting Bitcoin, you would need extensive computer equipment (hardware).<br> A long time ago, when Bitcoin was created, the use of basic machines on a desktop computer was reasonable.<br> It is now much more difficult to exploit Bitcoin.<br> If you used a desktop computer, for example, you would use far too much electricity.<br> This is why newer hardwares are used instead.<br> A good Bitcoin mining machine can cost thousands of dollars.<br>\r\n  \r\n  Then you will have to get a mining program.<br> Whatever program you get, you will need to make sure it works with your mining equipment.<br> Many of them are free online.<br>\r\n  \r\n  Your next step is to open a Bitcoin wallet.<br> You can use an online wallet.<br> It is safer to store your Bitcoins in an offline wallet or paper wallet.<br> No matter what path you take, make sure you have backups of your Bitcoin access.<br> Make sure your portfolios are secure.<br>\r\n  \r\n  Now that you are set to extract Bitcoin, you must decide whether you want to extract yourself or enter a mining exploration pool.<br> A mining basin is a group of miners who do it together to increase their power.<br> Bitcoins that are mined are divided among them, depending on who did the most work.<br> (You may also have to pay a fee to join a mining pool.)\r\n  \r\n  Now you can start extracting by running your program.<br> The miner has to log in and start mining.<br> If you try to run other programs on the computer during the process, you may notice that your computer is much slower than usual.<br> Just make sure your equipment is not too hot during the extraction process.<br>\r\n  <\/div>\r\n\r\n\r\n\r\n';
                }
                case 10: {
                    return '<h1 class=\"title\">Trade on cryptocurrencies\r\n<\/h1>\r\n<div class=\"text\">We have seen the advantages of cryptocurrency, such as bitcoin, over traditional currencies, and we have found that, despite the differences, these currencies have the same functions as the usual currencies.\r\n  There is another area where cryptocurrencies look like their big sisters is the possibility we have to speculate on their values.\r\n  It is not necessary to have bitcoin (we will stay for the moment on the example of bitcoin) to trade on its fluctuation and the instability of its value.\r\n  <\/div>\r\n<h1 class=\"title\">Speculating on Bitcoin: Trading\r\n<\/h1>\r\n<div class=\"text\">This consists of speculating on a gain or a loss of value of bitcoin for a given time.\r\n  Thus, depending on the duration of the contract that you have chosen with your broker, you speculate on the value above or below that defined initially.\r\n  The important thing is to choose a good broker who can follow you in your speculations.\r\n  \r\n  Bitcoin is therefore a currency like any other (but which is in no way regulated by a government or a state), so we can trade, thanks to this option, without the need to pre-define a bitcoin value but we will instead use leverage to make money.\r\n  <\/div>\r\n<h1 class=\"title\">The interest of trading bitcoin\r\n<\/h1>\r\n<div class=\"text\">Capitalization of cryptocurrencies has increased four-fold since April.\r\n  In the month of June it exceeded 100 billion dollars.\r\n  Bitcoin went from $ 1,000 in March to $ 3,000 in June !! Then he dropped $ 500 in four days!\r\n  In markets where volatility is scarce, virtual currencies are an exception, and their values \u200B\u200Bare racing.\r\n  Bitcoin is also not the only cryptocurrency to have seen its capitalization soar, the ethereum too (its value has been multiplied by 40 over the same period).\r\n  Second interest: speed. When you actually buy a virtual currency, it takes time because the process goes through brokers, and it can take up to a week to open an account.\r\n  Hence the ease of trading for which you do not need to open an account or own the currency itself.\r\n  <\/div>\r\n<h1 class=\"title\">How to choose a broker?\r\n<\/h1>\r\n<div class=\"text\">What are the criteria to take into account when choosing the best broker for trading bitcoin?\r\n<\/div>\r\n<h1 class=\"title\">1.The platform<\/h1>\r\n<div class=\"text\">The trading platform you choose will have to be easy to use and easy to understand.\r\n  You must also be able to trade 24 hours a day.\r\n  That it can offer you a leverage.\r\n  That you can trade through PayPal, Visa, MasterCard or another bank card, or any other means of payment.\r\n  <\/div>\r\n<h1 class=\"title\">2. Means of communication with the broker.\r\n<\/h1>\r\n<div class=\"text\">It is important to check the means of communication that are available to you: phone, Skype, email, so you can be reactive very quickly on your position, given the extremely volatile prices of cryptocurrencies.<\/div>\r\n<h1 class=\"title\">Are there other currencies than bitcoin?\r\n<\/h1>\r\n<div class=\"text\">It is important to check the assets offered for trading, ie, whether there are other cryptocurrencies in addition to bitcoin, or traditional currencies, forex or equities.\r\n<\/div>\r\n<div class=\"text\"><\/div>\r\n<h1 class=\"title\">3. Regulation\r\n<\/h1>\r\n<div class=\"text\">Also make sure that the chosen platform is regulated to be sure of its stability as well as the fairness of their products.\r\n  The most regulated brokers are often the safest.\r\n  \r\n  Thus, trading bitcoin, or other cryptocurrencies, as for traditional currencies, is to predict its price up or down.\r\n  The bitcoin trader\'s interest resides in the fact of the geopolitical independence of this currency, which makes it a perfect trading subject: a currency directed solely by the market without the political interest of the state that supports it.\r\n  And as we have seen, the speed and ease that trading gives us.\r\n  <\/div>\r\n';
                }
                case 11: {
                    return '<h1 class=\"title\">How to buy and sell cryptocurrencies with leverage?\r\n<\/h1>\r\n<div class=\"text\">When you want to trade on cryptocurrencies, you have two options:\r\n  \r\n  <\/div>\r\n<div class=\"text\">1.Acquire cryptocurrencies to try to sell them by generating a profit Cryptocurrency\r\n<\/div>\r\n\r\n<div class=\"text\">2.Anticipate the evolution of their price without owning it through CFD trading.\r\n<\/div>\r\n\r\n<div class=\"text\">To open a CFD position on a cryptocurrency, you must:\r\n  \r\n  <\/div>\r\n\r\n<h1 class=\"title\">1-Opening an account\r\n<\/h1>\r\n<div class=\"text\">As a CFD investor, you do not need to have a foreign currency account or portfolio to store your currency. An account at a CFD broker is enough for you.<\/div>\r\n<h1 class=\"title\">2- Conduct research<\/h1>\r\n<div class=\"text\">Cryptocurrencies are less exposed to economic and political factors than traditional currencies. You must, however, familiarize yourself with the market on which you want to invest.<\/div>\r\n<h1 class=\"title\">3- Apply your strategy\r\n<\/h1>\r\n<div class=\"text\">The choice of your strategy depends on your goals and preferences. The strategy applied is a key element of success in the more or less long term.<\/div>\r\n<h1 class=\"title\">4- Place an order\r\n<\/h1>\r\n<div class=\"text\">Set the size of your position, the closing conditions and click on \'Buy\' if you think that the value of the cryptocurrency will increase or \'Sale\' if you think that it will fall.\r\n  \r\n  <\/div>\r\n<h1 class=\"title\">5- Close your position\r\n<\/h1>\r\n<div class=\"text\">Once your goal is reached - or in order to limit your losses - you simply complete the reverse transaction to close your position: if you had bought, you would have to sell and if you had sold, you would have to buy.\r\n  \r\n  <\/div>\r\n\r\n<div class=\"text\">CFDs are leveraged products, which allows you to increase your exposure in a financial market by stopping only a portion of your capital. It also means that gains and losses are magnified. Losses may exceed deposits.\r\n  \r\n  \r\n  <div class=\"text\">Les CFD sont des produits \u00E0 effet de levier, ce qui vous permet d\u2019accro\u00EEtre votre exposition sur un march\u00E9 financier en n\'immobilisant qu\'une partie de votre capital. Cela signifie \u00E9galement que les gains et les pertes sont amplifi\u00E9s. Les pertes peuvent exc\u00E9der les d\u00E9p\u00F4ts.\r\n    \r\n    <\/div>\r\n ';
                }
                case 12: {
                    return '<h1 class=\"title\">Which are the best broker for Cryptocurrency?\r\n<\/h1>\r\n<div class=\"text\">As the cryptocurrency market is relatively new, you may find it difficult to know which broker to turn to buy, sell or speculate on cryptocurrencies.\r\n  \r\n  And it is true that in recent years we have seen hacker problems or other security issues on some platforms.\r\n  \r\n  We will therefore make you here a non-exhaustive list of the best brokers of the moment.\r\n  \r\n  We will talk about brokers online, it is obvious that you will have to take other measures to secure your currencies.\r\n  \r\n  In this area it is wise to follow the trend.\r\n  \r\n  So we will give you the most popular of them.<\/div>\r\n<h1 class=\"title\">Plus500<\/h1>\r\n<div class=\"text\">Plus500 is a multinational company and a leading company. Founded in 2008, they have developed an online trading for CFDs, stocks, Forex, commodities, ETFs, options, indices, and cryptocurrencies. they are licensed worldwide with offices in the United Kingdom, Cyprus and Australia.\r\n  \r\n  Among these different platforms, there are certain advantages to buying cryptocurrencies on etoro, markets.com, and plus500:\r\n  \r\n  These are online brokers for a long time,\r\n  \r\n  You can buy cryptocurrencies as well as a wide range of investment options.\r\n  \r\n  You also have access to educational resources and a community. <\/div>\r\n<h1 class=\"title\">Etoro<\/h1>\r\n<div class=\"text\">Etoro is an online market that offers cryptocurrencies, but also commodities, indices, and their CFDs serve around 4.5 million customers globally.\r\n  \r\n  They have a sophisticated online trader with developed platforms and many instruments that can help you build your investment fund. They are also a social platform that connects beginners with professionals in the sector.<\/div>\r\n<h1 class=\"title\">Markets.com<\/h1>\r\n<div class=\"text\">Markets.com is an online brokerage specializing in Forex, CFD, Indexes, ETFs, Commodities, Stocks, and Cryptocurrencies.\r\n  \r\n  They are operated by Safecap, a subsidiary of Playtech PLC that trades on the London Stock Exchange.\r\n  \r\n  They are licensed by the Financial Services Council (FSB) in South Africa.<\/div>\r\n<h1 class=\"title\">Coinbase<\/h1>\r\n<div class=\"text\">Coinbase is probably the most popular cryptocurrency exchanger online right now. Their exchanges are secure and have a global reach.\r\n  \r\n  The platform now also allows the sale of Litecoin in addition to BTC and ether.\r\n  \r\n  It is easy to use. It makes trading very easy for new users. Coinbase offers good insurance coverage for digital currencies.\r\n  \r\n  It covers for example security vulnerabilities, cybersecurity, or theft.\r\n  \r\n  Coinbase also uses an offline mode for the safer storage system.\r\n  \r\n  The disadvantages of Coinbase, with so many cryptocurrencies available today, the choice of currencies offered is quite small. For example if you have 2 bitcoins in your name, which you bought with Coinbase, if you want to trade your Bitcoins for a brand new currency on the market, you would not be able to do it on Coinbase. You will have to go through another platform. You may even prefer to go through the dollar for not having to make transfer.<\/div>\r\n<h1 class=\"title\">Coinmama<\/h1>\r\n<div class=\"text\">Coinmama is a bitcoin trading platform that allows transactions using credit cards.\r\n  \r\n  there is no exchange possible with other sellers; you receive your Bitcoins only through coinmama. Fees are 6.75 percent on your Bitcoin price.<\/div>\r\n<h1 class=\"title\">Kraken<\/h1>\r\n<div class=\"text\">Kraken is among the most popular Bitcoin trading platform. They offer a guide for support and negotiation. Like other major players, they facilitate the trading of Bitcoin, Litecoin, Ethereum, and other cryptocurrencies. They offer good storage solutions.<\/div>\r\n<h1 class=\"title\">Bitstamp<\/h1>\r\n<div class=\"text\">One of the great advantages of Bitstamp \u200B\u200Bits ability to trade a wide variety of cryptocurrencies, such as Bitcoin, Ethereum, Ethereum Classic, zcash, Monero, Litecoin, Dash, iota, and Ripple. They also offer a margin of purchase, sale and a personalized interface. In terms of security, there is the possibility of double authentication, as well as an encryption email address for your security, and offline storage.<\/div>\r\n<h1 class=\"title\">Btcc and Btcchina\r\n<\/h1>\r\n<div class=\"text\">Btcc and Btcchina are essentially the same company, Btcc serving internationally and Btcchina serving exclusively those living in China. They have good security measures and a high degree of professionalism. Their services include the currency exchange itself, plus a pool of mining, payment processing, and portfolio creation.<\/div>\r\n<h1 class=\"title\">Okcoin<\/h1>\r\n<div class=\"text\">Okcoin is another popular trading platform. They trade Bitcoin, Ethereum, and Litecoin.\r\n  \r\n  They allow trading between traders for large amounts of cash.\r\n  \r\n  They also offer a mobile application.<\/div>\r\n';
                }
                case 13: {
                    return '<h1 class=\"title\">Shops and cryptocurrencies\r\n<\/h1>\r\n<div class=\"text\">More and more company +store around the world have started accepting cryptocurrencies as a \r\n  means of payment<br>\r\n  \r\n  even if you do not yet use cryptocurrencies for your expenses, it is interesting to stay informed of their popularity among traders and markets<br>\r\n  \r\n  For the more useful the currency, the more valuable it will be<br>\r\n  \r\n  It will also be a factor of stability for its value and its survival will not be solely based on its popularity<br>\r\n  \r\n  These considerations are all the more important with regard to cryptocurrencies, the existence of which can not be considered as acquired<br>\r\n  \r\n  There are hundreds of new cryptocurrencies that appear and disappear and reappear and many of them will eventually disappear for good<br>\r\n  \r\n  The fact that they can be exchanged for goods proves that they can be useful to society and can be a factor of survival<br>\r\n  \r\n  So to consider the future of a digital currency you must evaluate its potential for sustainable development<br><\/div>\r\n<h1 class=\"title\">Bitcoin<\/h1>\r\n<div class=\"text\">Bitcoin is accepted by some of the best shops in the world:\r\n  \r\n  <\/div>\r\n  <ul>\r\n    <li><span>WordPress.com\r\n    <\/span><\/li>\r\n    <li><span>OkCupid<\/span><\/li>\r\n    <li><span>Microsoft<\/span><\/li>\r\n    <li><span>TigerDirect<\/span><\/li>\r\n    <li><span>CheapAir.com\r\n    <\/span><\/li>\r\n    <li><span>Expedia.com\r\n    <\/span><\/li>\r\n    <li><span>Dell<\/span><\/li>\r\n    <li><span>Bitcoin.Travel\r\n    <\/span><\/li>\r\n    <li><span>Whole Foods\r\n    <\/span><\/li>\r\n    <li><span>Grooveshark<\/span><\/li>\r\n    <li><span>Shopify.com\r\n    <\/span><\/li>\r\n    <li><span>LOT Polish Airlines\r\n    <\/span><\/li>\r\n    <li><span>RE\/MAX London\r\n    <\/span><\/li>\r\n    <li><span>Mint.com\r\n    <\/span><\/li>\r\n  <\/ul>\r\n<h1 class=\"title\">Ethereum<\/h1>\r\n\r\n<div class=\"text\">While bitcoin can be used for different businesses around the world, ethereum does not aim for this commercial utility purpose. Ethereum uses the technological advances of \"Smart Contracts,\" which creates an automatic agreement between two parties.Thus, Ethereum is commonly used in corporate or institutional transactions.\r\n  \r\n  Here are some of the places where Ethereum can be used.\r\n  \r\n  There are some Online merchants accepting Ethereum, but it is especially used for transactions in institutions. The following companies have joined the Ethereum Alliance Company, which promotes the use of its Blockchain technology. \r\n  Today she has more than 86 members. Among them:<\/div>\r\n  <ul>\r\n    <li><span>Toyota<\/span><\/li>\r\n    <li><span>Merck<\/span><\/li>\r\n    <li><span>Deloitte<\/span><\/li>\r\n    <li><span>Microsoft<\/span><\/li>\r\n    <li><span>ING<\/span><\/li>\r\n    <li><span>Broadridge<\/span><\/li>\r\n    <li><span>IBOBANK<\/span><\/li>\r\n    <li><span>J.P. Morgan\r\n    <\/span><\/li>\r\n    <li><span>Credit Suisse\r\n    <\/span><\/li>\r\n    <li><span>Accenture<\/span><\/li>\r\n    <li><span>UBS<\/span><\/li>\r\n    \r\n  <\/ul>\r\n<div class=\"text\">Litecoin is only in third place of the most popular cryptocurrencies. He is clearly behind Bitcoin and Ethereum in terms of value. For example, for the moment, bitcoin is over $ 6,000 while the ethereum is $ 306. The Litecoin is well behind with a value of $ 50. However, some people speculate that Litecoin will one day be used in merchants, just like bitcoin.<\/div>\r\n<div class=\"text\">Here are some traders who accept Litecoin right now:\r\n<\/div><ul>\r\n    <li><span>cheapair.com\r\n    <\/span><\/li>\r\n    <li><span>Re \/ Max Londres\r\n    <\/span><\/li>\r\n    <li><span>San Marco caf\u00E9\r\n    <\/span><\/li>\r\n    <li><span>litecoinpharmacy.com\r\n    <\/span><\/li>\r\n    <li><span>Uber en R\u00E9publique tch\u00E8que\r\n    <\/span><\/li>\r\n  <\/ul>\r\n';
                }
            }
        }
    };
    EducationReviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EducationReviewService);
    return EducationReviewService;
}());

//# sourceMappingURL=education-review.service.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(333);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_analytics__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_crypto_crypto__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_sim__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_education_review_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_screenshot__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_social_data_social_data__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_admob_free__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_onesignal__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_purchase_2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_track_event_track_event__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_deeplinks__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_market__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_chat_chat__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_firebase__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_app_version__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_app_rate__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../modals/countries/countries.module#AboutUsPageModule', name: 'countries', segment: 'countries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/About-Us/About-Us.module#AboutUsPageModule', name: 'about-us', segment: 'About-Us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alert/alert.module#AlertsPageModule', name: 'alert', segment: 'alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alerts-dashboard/alerts-dashboard.module#AlertsPageModule', name: 'alerts-dashboard', segment: 'alerts-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brokers/brokers.module#BrokersPageModule', name: 'broker', segment: 'brokers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'chart', segment: 'chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/class/class.module#ClassPageModule', name: 'class', segment: 'class', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/connection/connection.module#ConnectionPageModule', name: 'connection', segment: 'connection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allcoin/allcoin.module#AllcoinPageModule', name: 'allcoin', segment: 'allcoin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brokers-read-review/brokers-read-review.module#BrokersReadReviewPageModule', name: 'brokers-read-review', segment: 'brokers-read-review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-pairs/list-pairs.module#ListPairsPageModule', name: 'list-pairs', segment: 'list-pairs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crypto-review-read-more/crypto-review-read-more.module#CryptoReviewReadMorePageModule', name: 'crypto-review-read-more', segment: 'crypto-review-read-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/live-feed/live-feed.module#LiveFeedPageModule', name: 'live-feed', segment: 'live-feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'forgot-password', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'news', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding/onboarding.module#AllcoinPageModule', name: 'onboarding', segment: 'onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pop-up-rate-us/pop-up-rate-us.module#PopUpRateUsPageModule', name: 'pop-up-rate-us', segment: 'pop-up-rate-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phone-number-verified/phone-number-verified.module#PhoneNumberVerifiedPageModule', name: 'phone-number-verified', segment: 'phone-number-verified', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/port_folio-historic/port_folio-historic.module#AllcoinPageModule', name: 'port_folio-historic', segment: 'port_folio-historic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/port-folio-transaction/port-folio-transaction.module#AllcoinPageModule', name: 'port-folio-transaction', segment: 'port-folio-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/port-folio/port-folio.module#AllcoinPageModule', name: 'port-folio', segment: 'port-folio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup/popup.module#PopupPageModule', name: 'pop-up', segment: 'popup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/server-error/server-error.module#ServerErrorPageModule', name: 'server-error', segment: 'server-error', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'settings', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SigninPageModule', name: 'signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/read-review/read-review.module#SettingsPageModule', name: 'read-review', segment: 'read-review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-version/update-version.module#UpdateVersionPageModule', name: 'update-app', segment: 'update-version', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify-code/verify-code.module#VerifyCodeModule', name: 'verify-code', segment: 'verify-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vip/vip.module#VipPageModule', name: 'vip', segment: 'vip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#AllcoinPageModule', name: 'tabs', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termAndPrivacy/termAndPrivacy.module#AllcoinPageModule', name: 'termAndPrivacy', segment: 'termAndPrivacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-read-review/wallet-read-review.module#WalletReadReviewPageModule', name: 'wallet-read-review', segment: 'wallet-read-review', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_sim__["a" /* Sim */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_market__["a" /* Market */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_firebase__["a" /* Firebase */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_track_event_track_event__["a" /* TrackEventProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_crypto_crypto__["a" /* CryptoProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_social_data_social_data__["a" /* SocialDataProvider */],
                __WEBPACK_IMPORTED_MODULE_19__services_education_review_service__["a" /* EducationReviewService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_28__providers_chat_chat__["a" /* ChatProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatProvider = /** @class */ (function () {
    function ChatProvider(http) {
        this.http = http;
        console.log('Hello ChatProvider Provider');
    }
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_profile_model__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_country_model__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_purchase_2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_product_model__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.initializeApp({
    apiKey: "AIzaSyAUVmQK6LAi3b9dj6h_KxmzvABgTD9GrIw",
    authDomain: "interactive-crypto-2f07f.firebaseapp.com",
    databaseURL: "https://interactive-crypto-2f07f.firebaseio.com",
    projectId: "interactive-crypto-2f07f",
    storageBucket: "interactive-crypto-2f07f.appspot.com",
    messagingSenderId: "783700927099"
});
var AuthDataProvider = /** @class */ (function () {
    function AuthDataProvider(store, oneSignal, googlePlus, facebook, modalCtrl, http, plt) {
        var _this = this;
        this.store = store;
        this.oneSignal = oneSignal;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.plt = plt;
        this.isAuth = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_profile_model__["a" /* Profile */]();
        this.localCountry = new __WEBPACK_IMPORTED_MODULE_7__models_country_model__["a" /* CountryModel */]();
        this.productYear = new __WEBPACK_IMPORTED_MODULE_10__models_product_model__["a" /* Product */]();
        this.productMouth = new __WEBPACK_IMPORTED_MODULE_10__models_product_model__["a" /* Product */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_profile_model__["a" /* Profile */]();
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.plt.ready().then(function () {
                    var provider;
                    if (user.providerData[0] != undefined) {
                        provider = user.providerData[0].providerId;
                    }
                    else {
                        provider = "password";
                    }
                });
                _this.user._id = user.uid;
                if (plt.is('ios'))
                    _this.user.platform = "ios";
                else
                    _this.user.platform = "android";
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    }
    AuthDataProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthDataProvider.prototype.loginUserWithProvider = function (m_provider) {
        var _this = this;
        console.log("loginUserWithProvider");
        var provider;
        switch (m_provider) {
            case "facebook":
                provider = new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.FacebookAuthProvider();
                break;
            case "google":
                provider = new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.GoogleAuthProvider();
            default:
                break;
        }
        //ios and android
        if (this.plt.is("cordova")) {
            return new Promise(function (resolve, reject) {
                _this.providerLogin(m_provider).then(function (profile) {
                    console.log(profile, "providerLogin");
                    _this.checkIfUserExistAlready(profile._id).then(function (userFromServer2) {
                        if (userFromServer2 == null) {
                            profile.is_phone_number_verified = false;
                            _this.keepProfileInServer(profile).then(function (profile) {
                                _this.user = profile;
                                _this.user.is_phone_number_verified = profile.is_phone_number_verified;
                                if (profile.provider != undefined) {
                                    _this.user.provider = profile.provider;
                                }
                                _this.user = profile;
                                resolve(profile);
                            })
                                .catch(function () {
                                reject("error");
                            });
                        }
                        else {
                            _this.user = userFromServer2;
                            resolve(userFromServer2);
                        }
                    });
                })
                    .catch(function (err) {
                    console.log("err", err);
                    reject(err);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                console.log("signInWithPopup " + m_provider);
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithPopup(provider).then(function (newUser) {
                    console.log(newUser.user, "newUser");
                    _this.checkIfUserExistAlready(newUser.user.uid).then(function (userFromServer2) {
                        if (userFromServer2 == null) {
                            var profile = _this.getProfileWithFirebaseUser(newUser.user, m_provider);
                            console.log(profile);
                            profile.is_phone_number_verified = false;
                            profile.platform = (_this.plt.is('ios')) ? "ios" : "android";
                            _this.keepProfileInServer(profile).then(function (profile) {
                                _this.user = profile;
                                if (profile.provider != undefined) {
                                    _this.user.provider = profile.provider;
                                }
                                resolve(profile);
                            })
                                .catch(function () {
                                reject("error");
                            });
                        }
                        else {
                            console.log(userFromServer2);
                            resolve(userFromServer2);
                        }
                    })
                        .catch(function (err) {
                        reject("error");
                    });
                })
                    .catch(function (error) {
                    reject(error.message);
                });
            });
        }
    };
    AuthDataProvider.prototype.loginUserViaEmail = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthDataProvider.prototype.logoutUser = function () {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signOut();
    };
    AuthDataProvider.prototype.signupUser = function (profile) {
        var _this = this;
        console.log(profile);
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(profile.email, profile.password)
                .then(function (newUser) {
                profile._id = newUser.uid;
                profile.platform = (_this.plt.is('ios')) ? "ios" : "android";
                if (newUser.providerData[0] != undefined) {
                    profile.provider = newUser.providerData[0].providerId;
                }
                else {
                    profile.provider = "password";
                }
                _this.user = profile;
                _this.keepProfileInServer(profile)
                    .then(function (data) {
                    console.log(_this.user);
                    _this.sendVerifyCode();
                    resolve(data);
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    AuthDataProvider.prototype.keepProfileInServer = function (profile) {
        var _this = this;
        console.log(profile);
        return new Promise(function (resolve, reject) {
            _this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/createUser", profile)
                .toPromise()
                .then(function (newUserServer) {
                console.log(newUserServer, "keepProfileInServer");
                resolve(profile);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    AuthDataProvider.prototype.checkIfUserExistAlready = function (_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/getUsersById", { _id: _id })
                .toPromise()
                .then(function (data) {
                console.log(data, "data");
                _this.user = data;
                resolve(data);
            })
                .catch(function () {
                resolve("error in our servers");
            });
        });
    };
    AuthDataProvider.prototype.getProfileWithFirebaseUser = function (user, m_provider) {
        var profile = new __WEBPACK_IMPORTED_MODULE_3__models_profile_model__["a" /* Profile */]();
        console.log("getProfileWithFirebaseUser", user);
        if (user.displayName != null) {
            var displayName = user.displayName.split(" ");
            if (displayName.length >= 2) {
                profile.first_name = displayName[0];
                profile.last_name = "";
                for (var index = 1; index < displayName.length - 1; index++) {
                    profile.last_name += displayName[index] + " ";
                }
                profile.last_name += displayName[displayName.length - 1];
            }
            else {
                profile.first_name = user.displayName;
            }
        }
        profile.email = user.email;
        profile._id = user.uid;
        profile.provider = m_provider;
        profile.countryData = this.localCountry;
        return profile;
    };
    AuthDataProvider.prototype.sendVerifyCode = function () {
        console.log(this.user);
        return this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/sendUserVerifyCode", this.user).toPromise().then(function (data) {
            return console.log(data);
        })
            .catch(function (err) {
            console.log(err, "sendUserVerifyCode");
        });
    };
    AuthDataProvider.prototype.matchUserVerifyCode = function (verify_code) {
        var data = {
            _id: this.user._id,
            verify_code: verify_code
        };
        return this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/matchUserVerifyCode", data).toPromise().then(function (data) { return data; });
    };
    AuthDataProvider.prototype.providerLogin = function (m_provider) {
        var _this = this;
        console.log(m_provider);
        if (m_provider == "facebook") {
            return new Promise(function (resolve, reject) {
                _this.facebook.login(['email'])
                    .then(function (response) {
                    console.log("response", response);
                    var facebookCredential = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.FacebookAuthProvider
                        .credential(response.authResponse.accessToken);
                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithCredential(facebookCredential)
                        .then(function (success) {
                        console.log(JSON.stringify("success", success));
                        resolve(_this.getProfileWithFirebaseUser(success, m_provider));
                    });
                }).catch(function (error) {
                    console.log("error", error);
                    reject(error);
                });
            });
        }
        else if (m_provider == "google") {
            return new Promise(function (resolve, reject) {
                _this.googlePlus.login({
                    'webClientId': '783700927099-5dajidtpmtfj1e3k4720b3khgukaeul8.apps.googleusercontent.com',
                }).then(function (response) {
                    console.log(response);
                    var googleCrendential = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.GoogleAuthProvider
                        .credential(response.idToken);
                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithCredential(googleCrendential)
                        .then(function (success) {
                        console.log(JSON.stringify(success));
                        resolve(_this.getProfileWithFirebaseUser(success, m_provider));
                    })
                        .catch(function (err) {
                        alert(err + "error");
                    });
                }).catch(function (error) { reject(error); });
            });
        }
    };
    AuthDataProvider.prototype.updateProfileChangeinServer = function (data2) {
        console.log("updateProfileChangeinServer", data2);
        this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/updateProfilenotificationId", data2).toPromise().then(function (data) {
            return console.log(data);
        });
    };
    // getBrokerByName(){
    //   this.http.get("./assets/lot of data/brokers.json")
    //   .toPromise()
    //   .then((response) => {
    //      for (let index = 0; index < response["brokers"].length; index++) {
    //        if( response["brokers"][index].name == this.user.broker ){
    //         this.user.brokerimg=response["brokers"][index].img 
    //        break}
    //      }
    //   })
    // }
    AuthDataProvider.prototype.initializeStore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var productMouth_id, productYear_id;
            return __generator(this, function (_a) {
                console.log("initializeStore");
                this.productMouth.appleProductId = "interactivecrypto.vip.month";
                this.productMouth.googleProductId = "interactivecrypto.vip.month";
                this.productMouth.name = "unlimited alerts (1 month)";
                this.productYear.appleProductId = "interactivecrypto.vip.year";
                this.productYear.googleProductId = "interactivecrypto.vip.year";
                this.productYear.name = "unlimited alerts (1 year)";
                if (!this.plt.is('cordova')) {
                    return [2 /*return*/];
                }
                ;
                productMouth_id = "";
                productYear_id = "";
                if (this.plt.is('ios')) {
                    productMouth_id = this.productMouth.appleProductId;
                    productYear_id = this.productYear.appleProductId;
                }
                else {
                    productMouth_id = this.productMouth.googleProductId;
                    productYear_id = this.productYear.googleProductId;
                }
                this.store.verbosity = this.store.INFO;
                this.store.refresh();
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */].getPlugin().ready(function () {
                    _this.store.register({
                        id: productMouth_id,
                        alias: productMouth_id,
                        type: _this.store.NON_RENEWING_SUBSCRIPTION
                    });
                    _this.store.register({
                        id: productYear_id,
                        alias: productYear_id,
                        type: _this.store.NON_RENEWING_SUBSCRIPTION
                    });
                    _this.store.refresh();
                    _this.store.when(_this.productMouth.appleProductId).cancelled(function () {
                        console.log("cancelled");
                    });
                    _this.store.when(_this.productYear.appleProductId).cancelled(function () {
                        console.log("cancelled");
                    });
                    _this.store.when(_this.productMouth.googleProductId).approved(function (product) {
                        product.finish();
                        _this.user.state = "approved";
                        _this.updateIdOneSignals();
                        console.log("approved");
                    });
                    _this.store.when(_this.productYear.appleProductId).approved(function (product) {
                        product.finish();
                        _this.user.state = "approved";
                        _this.updateIdOneSignals();
                        console.log("approved");
                    });
                    _this.store.when(_this.productYear.googleProductId).owned(function (product) {
                        product.finish();
                        _this.updateIdOneSignals();
                        _this.user.state = "approved";
                        console.log("owned");
                    });
                    _this.store.when(_this.productYear.appleProductId).owned(function (product) {
                        product.finish();
                        _this.updateIdOneSignals();
                        _this.user.state = "approved";
                        console.log("owned");
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    AuthDataProvider.prototype.updateIdOneSignals = function () {
        console.log("updateIdOneSignals vip");
        return this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/insertVipUser", {
            _id: this.user._id,
            notificationId: this.user.notificationId
        }).toPromise().
            then(function (aa) { return console.log(aa); });
    };
    AuthDataProvider.prototype.updatenotificationId = function () {
        var _this = this;
        console.log("updatenotificationId");
        if (!(document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'))) {
            this.plt.ready().then(function () {
                _this.oneSignal.getIds().then(function (data) {
                    _this.user.notificationId = data.userId;
                    _this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/updateProfilenotificationId", {
                        _id: _this.user._id,
                        notificationId: _this.user.notificationId
                    }).toPromise().then(function () {
                    }).catch(function () {
                    });
                });
            });
        }
    };
    AuthDataProvider.prototype.updatecountryData = function () {
        var _this = this;
        this.getContry().then(function (data) {
            console.log(data, "AAAa");
            _this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/updatecountryData", {
                _id: _this.user._id, CountryModel: data
            }).toPromise().then(function (aa) {
                console.log(aa, "aviho");
            });
        });
    };
    AuthDataProvider.prototype.getContry = function () {
        var _this = this;
        console.log("getContry");
        return new Promise(function (resolve, reject) {
            if (_this.localCountry.isRequested) {
                console.log("isRequested true");
                return _this.localCountry;
            }
            else {
                console.log("https://afternoon-mountain-15657.herokuapp.com/get-location-data");
                _this.http.get("https://afternoon-mountain-15657.herokuapp.com/get-location-data").toPromise()
                    .then(function (data) {
                    console.log(data, "SS");
                    Object.keys(_this.localCountry).forEach(function (key) { return _this.localCountry[key] = data[key]; });
                    _this.localCountry.isRequested = true;
                    _this.http.get('assets/lot of data/countries.json')
                        .toPromise()
                        .then(function (response) {
                        console.log(response);
                        for (var index = 0; index < response["countries"].length; index++) {
                            if ((response["countries"][index].name).toLocaleUpperCase() == data.country.toLocaleUpperCase()) {
                                _this.localCountry.dial_code = response["countries"][index].dial_code;
                                _this.user.countryData = _this.localCountry;
                                break;
                            }
                        }
                        resolve(_this.localCountry);
                    });
                })
                    .catch(function (err) {
                    console.log(err);
                    resolve(undefined);
                });
            }
        });
    };
    AuthDataProvider.prototype.checkCode = function (verify_code) {
        var _this = this;
        return new Promise(function (resolve) {
            var data = {
                _id: _this.user._id,
                verify_code: verify_code
            };
            _this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/matchUserVerifyCode", data).toPromise()
                .then(function (data) {
                console.log(data);
                if (data == "ok") {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            })
                .catch(function (err) {
                console.log("err", err);
                resolve(false);
            });
        });
    };
    AuthDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Platform */]])
    ], AuthDataProvider);
    return AuthDataProvider;
}());

//# sourceMappingURL=auth-data.js.map

/***/ })

},[315]);
//# sourceMappingURL=main.js.map