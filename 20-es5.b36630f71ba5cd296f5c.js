(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{UzAf:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("mrSG"),o=e("ZZ/e"),r=e("zJGD"),i=(e("M0ag"),e("jv8m")),s=e("HHnl"),c=e("/kO1"),a=e("7Cmt"),b=e("TIdq"),h=function(){function l(l,n,e,t,u,o,r,i,s,c,a,b,h,g,f,p,m,d){this.navCtrl=l,this.menuCtrl=n,this.popoverCtrl=e,this.alertCtrl=t,this.modalCtrl=u,this.toastCtrl=o,this.componentUtil=r,this.route=i,this.router=s,this.translateService=c,this.accountService=a,this.kmpUserService=b,this.localStorage=h,this.sessionStorage=g,this.resolverService=f,this.formBuilder=p,this.syncDataService=m,this.votersService=d,this.searchKey="",this.yourLocation="123 Test Street",this.themeCover="assets/img/ionic4-Start-Theme-cover.jpg",this.searchPreference=null,this.voters=[],this.localVoters=[],this.init()}return l.prototype.init=function(){this.electionType=this.kmpUserService.getElectionType(),console.log("voters"),this.pageMenu=this.componentUtil.getMenuById("voters"),this.searchPreference=JSON.parse(this.localStorage.retrieve("voter-search-preferences"))||JSON.parse(this.sessionStorage.retrieve("voter-search-preferences")),this.searchPreference={serialNumber:!this.searchPreference||!!this.searchPreference.serialNumber,voterId:!this.searchPreference||!!this.searchPreference.voterId,voterName:!this.searchPreference||!!this.searchPreference.voterName,husbandOrFatherName:!this.searchPreference||!!this.searchPreference.husbandOrFatherName}},l.prototype.ionViewWillEnter=function(){var l=this;this.menuCtrl.enable(!0),this.votersService.getVotersFromLocal().then((function(n){l.voters=l.localVoters=n}))},l.prototype.onVoterSearchSettings=function(){return u.b(this,void 0,void 0,(function(){var l,n=this;return u.e(this,(function(e){switch(e.label){case 0:return[4,this.modalCtrl.create({component:r.a})];case 1:return(l=e.sent()).onWillDismiss().then((function(l){console.log(l),n.searchPreference=l})),[4,l.present()];case 2:return[2,e.sent()]}}))}))},l.prototype.ngOnInit=function(){var l=this;this.componentUtil.showLoading((function(){l.votersService.getVotersFromLocal().then((function(n){console.log(n),l.voters=l.localVoters=n,l.componentUtil.hideLoading()}))}))},l.prototype.settings=function(){this.navCtrl.navigateForward("settings")},l.prototype.matchAvailabilityCheck=function(l,n){var e=this,t={serialNumber:!!n.serialNumber&&n.serialNumber.toLowerCase().indexOf(l.toLowerCase())>-1,voterId:!!n.voterId&&n.voterId.toLowerCase().indexOf(l.toLowerCase())>-1,voterName:!!n.voterName&&n.voterName.toLowerCase().indexOf(l.toLowerCase())>-1,husbandOrFatherNamevoter:!!n.husbandOrFatherName&&n.husbandOrFatherName.toLowerCase().indexOf(l.toLowerCase())>-1},u=Object.assign(this.searchPreference);Object.keys(this.searchPreference).forEach((function(l){e.searchPreference[l]||delete u[l]}));for(var o=!1,r=0,i=Object.keys(u);r<i.length;r++)if(t[i[r]]){o=!0;break}return o},l.prototype.filterVoters=function(l){var n=this;return l?this.voters.filter((function(e){return n.matchAvailabilityCheck(l,e)})):this.localVoters},l.prototype.onVoterInput=function(l){this.voters=this.filterVoters(l.target.value)},l.prototype.setFilteredItems=function(l){this.voters=this.filterVoters(l.target.value)},l}(),g=function(){return function(){}}(),f=e("pMnS"),p=e("oBZk"),m=e("Ip0R"),d=e("ZYCi"),v=e("A7o+"),k=e("gIcY"),C=e("5Wfd"),O=e("dyMF"),I=t.rb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:0}[_nghost-%COMP%]   ion-card.no-radius[_ngcontent-%COMP%]{border-radius:0}ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:100%;height:100%;color:#000}"]],data:{}});function y(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"ion-menu-button",[["color","light"]],null,null,null,p.kb,p.A)),t.sb(1,49152,null,0,o.S,[t.h,t.k,t.z],{color:[0,"color"]},null)],(function(l,n){l(n,1,0,"light")}),null)}function F(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,2,"ion-back-button",[["color","light"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Fb(l,2).onClick(e)&&u),u}),p.N,p.c)),t.sb(1,49152,null,0,o.h,[t.h,t.k,t.z],{color:[0,"color"]},null),t.sb(2,16384,null,0,o.i,[[2,o.jb],o.Kb],null,null)],(function(l,n){l(n,1,0,"light")}),null)}function N(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,0,"img",[["style","background: #000000;"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.imageUrl)}))}function P(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"ion-icon",[["name","contact"]],null,null,null,p.eb,p.t)),t.sb(1,49152,null,0,o.D,[t.h,t.k,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"contact")}),null)}function M(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"ion-icon",[["name","ribbon"]],null,null,null,p.eb,p.t)),t.sb(1,49152,null,0,o.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,n.parent.context.$implicit.electionType===n.component.electionType&&n.parent.context.$implicit.voted?"success":"danger","ribbon")}),null)}function D(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"ion-avatar",[["slot","end"]],null,null,null,p.M,p.b)),t.sb(1,49152,null,0,o.g,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,M)),t.sb(3,16384,null,0,m.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.electionType===n.component.electionType)}),null)}function z(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,24,"ion-item",[],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Fb(l,2).onClick()&&u),"click"===n&&(u=!1!==t.Fb(l,3).onClick(e)&&u),u}),p.gb,p.v)),t.sb(1,49152,null,0,o.I,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,d.o,[d.n,d.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(3,737280,null,0,o.Nb,[m.g,o.Kb,t.k,d.n,[2,d.o]],null,null),(l()(),t.tb(4,0,null,0,4,"ion-avatar",[["slot","start"]],null,null,null,p.M,p.b)),t.sb(5,49152,null,0,o.g,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,N)),t.sb(7,16384,null,0,m.i,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.ib(0,[["defaultUserIcon",2]],0,0,null,P)),(l()(),t.tb(9,0,null,0,9,"ion-label",[["class","ion-text-capitalize"]],null,null,null,p.hb,p.w)),t.sb(10,49152,null,0,o.O,[t.h,t.k,t.z],null,null),(l()(),t.tb(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(12,null,["",""])),(l()(),t.tb(13,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(14,null,["",""])),(l()(),t.tb(15,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Lb(16,null,["",""])),(l()(),t.tb(17,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(18,null,["",""])),(l()(),t.ib(16777216,null,0,1,null,D)),t.sb(20,278528,null,0,m.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(21,0,null,0,3,"ion-avatar",[["slot","end"]],null,null,null,p.M,p.b)),t.sb(22,49152,null,0,o.g,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,1,"ion-icon",[["color","dark"],["name","arrow-forward"]],null,null,null,p.eb,p.t)),t.sb(24,49152,null,0,o.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,2,0,n.context.$implicit.voterPk),l(n,3,0),l(n,7,0,n.context.$implicit.imageUrl,t.Fb(n,8)),l(n,20,0,n.context.$implicit.voterElectionDTOList),l(n,24,0,"dark","arrow-forward")}),(function(l,n){l(n,12,0,n.context.$implicit.voterId),l(n,14,0,n.context.$implicit.serialNumber),l(n,16,0,n.context.$implicit.voterName),l(n,18,0,n.context.$implicit.husbandOrFatherName)}))}function L(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,28,"ion-header",[],null,null,null,p.db,p.s)),t.sb(1,49152,null,0,o.C,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,p.vb,p.K)),t.sb(3,49152,null,0,o.Db,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,p.P,p.e)),t.sb(5,49152,null,0,o.m,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,y)),t.sb(7,16384,null,0,m.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,F)),t.sb(9,16384,null,0,m.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(10,0,null,0,3,"ion-title",[],null,null,null,p.tb,p.I)),t.sb(11,49152,null,0,o.Bb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(12,0,["",""])),t.Hb(131072,v.i,[v.j,t.h]),(l()(),t.tb(14,0,null,0,14,"ion-toolbar",[["color","dark"]],null,null,null,p.vb,p.K)),t.sb(15,49152,null,0,o.Db,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(16,0,null,0,6,"ion-searchbar",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionInput"],[null,"ionBlur"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Fb(l,17)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Fb(l,17)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(o.searchKey=e)&&u),"ionChange"===n&&(u=!1!==o.setFilteredItems(e)&&u),"ionInput"===n&&(u=!1!==o.onVoterInput(e)&&u),u}),p.ob,p.D)),t.sb(17,16384,null,0,o.Pb,[t.k],null,null),t.Ib(1024,null,k.f,(function(l){return[l]}),[o.Pb]),t.sb(19,671744,null,0,k.j,[[8,null],[8,null],[8,null],[6,k.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,k.g,null,[k.j]),t.sb(21,16384,null,0,k.h,[[4,k.g]],null,null),t.sb(22,49152,null,0,o.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,p.P,p.e)),t.sb(24,49152,null,0,o.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(25,0,null,0,3,"ion-button",[["color","medium"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onVoterSearchSettings()&&t),t}),p.O,p.d)),t.sb(26,49152,null,0,o.l,[t.h,t.k,t.z],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),t.tb(27,0,null,0,1,"ion-icon",[["name","cog"]],null,null,null,p.eb,p.t)),t.sb(28,49152,null,0,o.D,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(29,0,null,null,5,"ion-content",[],null,null,null,p.Y,p.n)),t.sb(30,49152,null,0,o.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(31,0,null,0,3,"ion-list",[],null,null,null,p.jb,p.x)),t.sb(32,49152,null,0,o.P,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,z)),t.sb(34,278528,null,0,m.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"primary"),l(n,7,0,"root"===(null==e.pageMenu?null:e.pageMenu.direct)),l(n,9,0,"forward"===(null==e.pageMenu?null:e.pageMenu.direct)),l(n,15,0,"dark"),l(n,19,0,e.searchKey),l(n,26,0,"medium","round","small"),l(n,28,0,"cog"),l(n,34,0,e.voters)}),(function(l,n){var e=n.component;l(n,12,0,t.Mb(n,12,0,t.Fb(n,13).transform(null==e.pageMenu?null:e.pageMenu.title))),l(n,16,0,t.Fb(n,21).ngClassUntouched,t.Fb(n,21).ngClassTouched,t.Fb(n,21).ngClassPristine,t.Fb(n,21).ngClassDirty,t.Fb(n,21).ngClassValid,t.Fb(n,21).ngClassInvalid,t.Fb(n,21).ngClassPending)}))}function w(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-voters",[],null,null,null,L,I)),t.sb(1,114688,null,0,h,[o.Kb,o.Ib,o.Mb,o.a,o.Jb,o.Qb,C.a,d.a,d.n,v.j,i.a,s.a,O.d,O.i,c.a,k.b,a.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var S=t.pb("app-voters",h,w,{},{},[]);e.d(n,"VotersPageModuleNgFactory",(function(){return x}));var x=t.qb(g,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[f.a,S]],[3,t.j],t.x]),t.Db(4608,m.k,m.j,[t.u,[2,m.r]]),t.Db(4608,k.n,k.n,[]),t.Db(4608,k.b,k.b,[]),t.Db(4608,o.b,o.b,[t.z,t.g]),t.Db(4608,o.Jb,o.Jb,[o.b,t.j,t.q]),t.Db(4608,o.Mb,o.Mb,[o.b,t.j,t.q]),t.Db(1073742336,m.b,m.b,[]),t.Db(1073742336,k.m,k.m,[]),t.Db(1073742336,k.e,k.e,[]),t.Db(1073742336,k.k,k.k,[]),t.Db(1073742336,o.Fb,o.Fb,[]),t.Db(1073742336,d.p,d.p,[[2,d.u],[2,d.n]]),t.Db(1073742336,v.g,v.g,[]),t.Db(1073742336,g,g,[]),t.Db(1024,d.l,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);