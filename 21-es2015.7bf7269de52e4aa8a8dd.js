(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{UzAf:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),r=e("mrSG"),u=e("ZZ/e"),o=e("zJGD"),i=(e("M0ag"),e("jv8m")),s=e("HHnl"),a=e("/kO1"),c=e("7Cmt"),b=e("TIdq");class h{constructor(l,n,e,t,r,u,o,i,s,a,c,b,h,g,m,d,f,p){this.navCtrl=l,this.menuCtrl=n,this.popoverCtrl=e,this.alertCtrl=t,this.modalCtrl=r,this.toastCtrl=u,this.componentUtil=o,this.route=i,this.router=s,this.translateService=a,this.accountService=c,this.kmpUserService=b,this.localStorage=h,this.sessionStorage=g,this.resolverService=m,this.formBuilder=d,this.syncDataService=f,this.votersService=p,this.searchKey="",this.yourLocation="123 Test Street",this.themeCover="assets/img/ionic4-Start-Theme-cover.jpg",this.searchPreference=null,this.voters=[],this.localVoters=[],this.init()}init(){this.electionType=this.kmpUserService.getElectionType(),console.log("voters"),this.pageMenu=this.componentUtil.getMenuById("voters"),this.searchPreference=JSON.parse(this.localStorage.retrieve("voter-search-preferences"))||JSON.parse(this.sessionStorage.retrieve("voter-search-preferences")),this.searchPreference={serialNumber:!this.searchPreference||!!this.searchPreference.serialNumber,voterId:!this.searchPreference||!!this.searchPreference.voterId,voterName:!this.searchPreference||!!this.searchPreference.voterName,husbandOrFatherName:!this.searchPreference||!!this.searchPreference.husbandOrFatherName}}ionViewWillEnter(){this.menuCtrl.enable(!0),this.votersService.getVotersFromLocal().then(l=>{this.voters=this.localVoters=l})}onVoterSearchSettings(){return r.b(this,void 0,void 0,(function*(){const l=yield this.modalCtrl.create({component:o.a});return l.onWillDismiss().then(l=>{console.log(l),this.searchPreference=l}),yield l.present()}))}ngOnInit(){this.componentUtil.showLoading(()=>{this.votersService.getVotersFromLocal().then(l=>{console.log(l),this.voters=this.localVoters=l,this.componentUtil.hideLoading()})})}settings(){this.navCtrl.navigateForward("settings")}matchAvailabilityCheck(l,n){const e={serialNumber:!!n.serialNumber&&n.serialNumber.toLowerCase().indexOf(l.toLowerCase())>-1,voterId:!!n.voterId&&n.voterId.toLowerCase().indexOf(l.toLowerCase())>-1,voterName:!!n.voterName&&n.voterName.toLowerCase().indexOf(l.toLowerCase())>-1,husbandOrFatherNamevoter:!!n.husbandOrFatherName&&n.husbandOrFatherName.toLowerCase().indexOf(l.toLowerCase())>-1},t=Object.assign(this.searchPreference);Object.keys(this.searchPreference).forEach(l=>{this.searchPreference[l]||delete t[l]});const r=Object.keys(t);let u=!1;for(const o of r)if(e[o]){u=!0;break}return u}filterVoters(l){return l?this.voters.filter(n=>this.matchAvailabilityCheck(l,n)):this.localVoters}onVoterInput(l){this.voters=this.filterVoters(l.target.value)}setFilteredItems(l){this.voters=this.filterVoters(l.target.value)}}class g{}var m=e("pMnS"),d=e("oBZk"),f=e("SVse"),p=e("iInd"),v=e("TSSN"),k=e("s7LF"),C=e("5Wfd"),x=e("0uJq"),q=t.pb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:0}[_nghost-%COMP%]   ion-card.no-radius[_ngcontent-%COMP%]{border-radius:0}ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:100%;height:100%;color:#000}"]],data:{}});function M(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"ion-menu-button",[["color","light"]],null,null,null,d.kb,d.A)),t.qb(1,49152,null,0,u.S,[t.h,t.k,t.x],{color:[0,"color"]},null)],(function(l,n){l(n,1,0,"light")}),null)}function I(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,2,"ion-back-button",[["color","light"]],null,[[null,"click"]],(function(l,n,e){var r=!0;return"click"===n&&(r=!1!==t.Db(l,2).onClick(e)&&r),r}),d.N,d.c)),t.qb(1,49152,null,0,u.h,[t.h,t.k,t.x],{color:[0,"color"]},null),t.qb(2,16384,null,0,u.i,[[2,u.jb],u.Kb],null,null)],(function(l,n){l(n,1,0,"light")}),null)}function O(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,0,"img",[["style","background: #000000;"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.imageUrl)}))}function P(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"ion-icon",[["name","contact"]],null,null,null,d.eb,d.t)),t.qb(1,49152,null,0,u.D,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"contact")}),null)}function S(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"ion-icon",[["name","ribbon"]],null,null,null,d.eb,d.t)),t.qb(1,49152,null,0,u.D,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,n.parent.context.$implicit.electionType===n.component.electionType&&n.parent.context.$implicit.voted?"success":"danger","ribbon")}),null)}function D(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,3,"ion-avatar",[["slot","end"]],null,null,null,d.M,d.b)),t.qb(1,49152,null,0,u.g,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,S)),t.qb(3,16384,null,0,f.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.electionType===n.component.electionType)}),null)}function L(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,24,"ion-item",[],null,[[null,"click"]],(function(l,n,e){var r=!0;return"click"===n&&(r=!1!==t.Db(l,2).onClick()&&r),"click"===n&&(r=!1!==t.Db(l,3).onClick(e)&&r),r}),d.gb,d.v)),t.qb(1,49152,null,0,u.I,[t.h,t.k,t.x],null,null),t.qb(2,16384,null,0,p.o,[p.n,p.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.qb(3,737280,null,0,u.Nb,[f.g,u.Kb,t.k,p.n,[2,p.o]],null,null),(l()(),t.rb(4,0,null,0,4,"ion-avatar",[["slot","start"]],null,null,null,d.M,d.b)),t.qb(5,49152,null,0,u.g,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,O)),t.qb(7,16384,null,0,f.i,[t.M,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.gb(0,[["defaultUserIcon",2]],0,0,null,P)),(l()(),t.rb(9,0,null,0,9,"ion-label",[["class","ion-text-capitalize"]],null,null,null,d.hb,d.w)),t.qb(10,49152,null,0,u.O,[t.h,t.k,t.x],null,null),(l()(),t.rb(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(12,null,["",""])),(l()(),t.rb(13,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(14,null,["",""])),(l()(),t.rb(15,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(16,null,["",""])),(l()(),t.rb(17,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(18,null,["",""])),(l()(),t.gb(16777216,null,0,1,null,D)),t.qb(20,278528,null,0,f.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(21,0,null,0,3,"ion-avatar",[["slot","end"]],null,null,null,d.M,d.b)),t.qb(22,49152,null,0,u.g,[t.h,t.k,t.x],null,null),(l()(),t.rb(23,0,null,0,1,"ion-icon",[["color","dark"],["name","arrow-forward"]],null,null,null,d.eb,d.t)),t.qb(24,49152,null,0,u.D,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,2,0,n.context.$implicit.voterPk),l(n,3,0),l(n,7,0,n.context.$implicit.imageUrl,t.Db(n,8)),l(n,20,0,n.context.$implicit.voterElectionDTOList),l(n,24,0,"dark","arrow-forward")}),(function(l,n){l(n,12,0,n.context.$implicit.voterId),l(n,14,0,n.context.$implicit.serialNumber),l(n,16,0,n.context.$implicit.voterName),l(n,18,0,n.context.$implicit.husbandOrFatherName)}))}function y(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,28,"ion-header",[],null,null,null,d.db,d.s)),t.qb(1,49152,null,0,u.C,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,d.vb,d.K)),t.qb(3,49152,null,0,u.Db,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,d.P,d.e)),t.qb(5,49152,null,0,u.m,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,M)),t.qb(7,16384,null,0,f.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,I)),t.qb(9,16384,null,0,f.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(10,0,null,0,3,"ion-title",[],null,null,null,d.tb,d.I)),t.qb(11,49152,null,0,u.Bb,[t.h,t.k,t.x],null,null),(l()(),t.Jb(12,0,["",""])),t.Fb(131072,v.i,[v.j,t.h]),(l()(),t.rb(14,0,null,0,14,"ion-toolbar",[["color","dark"]],null,null,null,d.vb,d.K)),t.qb(15,49152,null,0,u.Db,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(16,0,null,0,6,"ion-searchbar",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionInput"],[null,"ionBlur"]],(function(l,n,e){var r=!0,u=l.component;return"ionBlur"===n&&(r=!1!==t.Db(l,17)._handleBlurEvent(e.target)&&r),"ionChange"===n&&(r=!1!==t.Db(l,17)._handleInputEvent(e.target)&&r),"ngModelChange"===n&&(r=!1!==(u.searchKey=e)&&r),"ionChange"===n&&(r=!1!==u.setFilteredItems(e)&&r),"ionInput"===n&&(r=!1!==u.onVoterInput(e)&&r),r}),d.ob,d.D)),t.qb(17,16384,null,0,u.Pb,[t.k],null,null),t.Gb(1024,null,k.f,(function(l){return[l]}),[u.Pb]),t.qb(19,671744,null,0,k.j,[[8,null],[8,null],[8,null],[6,k.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,k.g,null,[k.j]),t.qb(21,16384,null,0,k.h,[[4,k.g]],null,null),t.qb(22,49152,null,0,u.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(23,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,d.P,d.e)),t.qb(24,49152,null,0,u.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(25,0,null,0,3,"ion-button",[["color","medium"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onVoterSearchSettings()&&t),t}),d.O,d.d)),t.qb(26,49152,null,0,u.l,[t.h,t.k,t.x],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),t.rb(27,0,null,0,1,"ion-icon",[["name","cog"]],null,null,null,d.eb,d.t)),t.qb(28,49152,null,0,u.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(29,0,null,null,5,"ion-content",[],null,null,null,d.Y,d.n)),t.qb(30,49152,null,0,u.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(31,0,null,0,3,"ion-list",[],null,null,null,d.jb,d.x)),t.qb(32,49152,null,0,u.P,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,L)),t.qb(34,278528,null,0,f.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"primary"),l(n,7,0,"root"===(null==e.pageMenu?null:e.pageMenu.direct)),l(n,9,0,"forward"===(null==e.pageMenu?null:e.pageMenu.direct)),l(n,15,0,"dark"),l(n,19,0,e.searchKey),l(n,26,0,"medium","round","small"),l(n,28,0,"cog"),l(n,34,0,e.voters)}),(function(l,n){var e=n.component;l(n,12,0,t.Kb(n,12,0,t.Db(n,13).transform(null==e.pageMenu?null:e.pageMenu.title))),l(n,16,0,t.Db(n,21).ngClassUntouched,t.Db(n,21).ngClassTouched,t.Db(n,21).ngClassPristine,t.Db(n,21).ngClassDirty,t.Db(n,21).ngClassValid,t.Db(n,21).ngClassInvalid,t.Db(n,21).ngClassPending)}))}function w(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"app-voters",[],null,null,null,y,q)),t.qb(1,114688,null,0,h,[u.Kb,u.Ib,u.Mb,u.a,u.Jb,u.Qb,C.a,p.a,p.n,v.j,i.a,s.a,x.d,x.i,a.a,k.b,c.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var B=t.nb("app-voters",h,w,{},{},[]);e.d(n,"VotersPageModuleNgFactory",(function(){return N}));var N=t.ob(g,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[m.a,B]],[3,t.j],t.v]),t.Bb(4608,f.k,f.j,[t.s,[2,f.r]]),t.Bb(4608,k.n,k.n,[]),t.Bb(4608,k.b,k.b,[]),t.Bb(4608,u.b,u.b,[t.x,t.g]),t.Bb(4608,u.Jb,u.Jb,[u.b,t.j,t.p]),t.Bb(4608,u.Mb,u.Mb,[u.b,t.j,t.p]),t.Bb(1073742336,f.b,f.b,[]),t.Bb(1073742336,k.m,k.m,[]),t.Bb(1073742336,k.e,k.e,[]),t.Bb(1073742336,k.k,k.k,[]),t.Bb(1073742336,u.Fb,u.Fb,[]),t.Bb(1073742336,p.p,p.p,[[2,p.u],[2,p.n]]),t.Bb(1073742336,v.g,v.g,[]),t.Bb(1073742336,g,g,[]),t.Bb(1024,p.l,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);