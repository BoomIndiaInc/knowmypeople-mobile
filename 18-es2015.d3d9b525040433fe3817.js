(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{zDS7:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("ZZ/e"),o=(e("M0ag"),e("jv8m")),i=e("HHnl"),r=e("z6cF"),a=e("/kO1"),s=e("cp0P"),b=e("/6Vp"),c=e("7Cmt"),h=e("TIdq");class g{constructor(l,n,e,u,t,o,i,r,a,s,b,c,h,g,d){this.navCtrl=l,this.componentUtil=n,this.route=e,this.router=u,this.translateService=t,this.accountService=o,this.kmpUserService=i,this.kmpService=r,this.localStorage=a,this.sessionStorage=s,this.resolverService=b,this.formBuilder=c,this.syncDataService=h,this.votersService=g,this.menuCtrl=d,this.nullValue=null,this.searchCriteria={},this.languages=["en","ta"],this.booths=[],this.wards=[],this.electionTypes=[],console.log("settings"),this.pageMenu=this.componentUtil.getMenuById("settings"),this.resolverService.getPropertyValue("supported-languages")&&(this.languages=this.resolverService.getPropertyValue("supported-languages")),this.userName=this.kmpUserService.getUserName(),this.userType=this.kmpUserService.getUserType(),this.userImageUrl=this.kmpUserService.getImageUrl(),this.userBoothId=this.kmpUserService.getBoothId(),this.userElectionType=this.kmpUserService.getElectionType(),this.userWardId=this.kmpUserService.getWardId(),this.language=this.kmpUserService.getLanguage()||this.resolverService.getPropertyValue("default-lang"),this.enableAutoSync=!!this.kmpUserService.getAutoSync(),this.autoSyncDuration=this.kmpUserService.getAutoSyncDuration(),this.settingsForm=c.group({imageUrl:[this.userImageUrl],language:[this.language],autoSync:[this.enableAutoSync],autoSyncDuration:[this.autoSyncDuration],boothId:[this.userBoothId],wardId:[this.userWardId],electionType:[this.userElectionType]}),this.searchCriteria={boothId:this.userBoothId,wardId:this.userWardId,electionType:this.userElectionType}}ngOnInit(){this.componentUtil.showLoading(()=>{this.init()})}ionViewWillEnter(){}showMenuOption(){let l=!1;const n=this.settingsForm.getRawValue();return(n.boothId||n.wardId)&&n.electionType&&(l=!0),this.showMenuBar=!!this.accountService.hasAnyAuthorityDirect([r.a.ADMIN])||l}init(){this.kmpUserService.getAuthenticationState().subscribe(l=>{l&&(this.userName=l.login,this.userType=l.userType,this.userImageUrl=l.imageUrl,this.userBoothId=l.boothId,this.userElectionType=l.electionType,this.userWardId=l.wardId,this.language=l.language,this.enableAutoSync=l.autoSync,this.autoSyncDuration=l.autoSyncDuration,this.searchCriteria={boothId:this.userBoothId,wardId:this.userWardId,electionType:this.userElectionType})}),Object(s.a)([this.kmpService.fetchAllBooths(this.searchCriteria),this.kmpService.fetchAllElectionTypes(this.searchCriteria),this.kmpService.fetchAllWards(this.searchCriteria)]).subscribe(l=>{this.booths=l[0].body,this.electionTypes=l[1].body,this.wards=l[2].body}),this.fetchVoters()}fetchVoters(){this.votersService.getVotersFromLocal().then(l=>{l&&0===l.length?(console.log("Fetching voters from server ..."),this.votersService.fetchVoters(this.searchCriteria.boothId,this.searchCriteria.wardId,this.searchCriteria.electionType).then(l=>{this.componentUtil.hideLoading(),this.userBoothId&&this.userWardId||this.userElectionType||this.componentUtil.showToast("SELECT_ATLEAST_ONE_APP_SETTINGS")})):(this.componentUtil.hideLoading(),this.userBoothId&&this.userWardId||this.userElectionType||this.componentUtil.showToast("SELECT_ATLEAST_ONE_APP_SETTINGS"))})}languageSelected(l){console.log("language Selected"),this.updateUserPreference()}syncSelected(l){console.log("sync Selected"),this.updateUserPreference()}boothSelected(l){console.log("booth Selected"),this.updateUserPreference(),this.searchCriteria.boothId=this.settingsForm.getRawValue()?this.settingsForm.getRawValue().boothId:null,this.fetchingVotersForCriteria()}wardSelected(l){console.log("ward Selected"),this.updateUserPreference(),this.searchCriteria.wardId=this.settingsForm.getRawValue()?this.settingsForm.getRawValue().wardId:null,this.fetchingVotersForCriteria()}electionTypeSelected(l){console.log("electionType Selected"),this.updateUserPreference(),this.searchCriteria.electionType=this.settingsForm.getRawValue()?this.settingsForm.getRawValue().electionType:null,this.fetchingVotersForCriteria()}fetchingVotersForCriteria(){this.componentUtil.showLoading(()=>{this.fetchVoters()},"FETCHING_VOTERS_DATA")}updateUserPreference(){const l=this.kmpUserService.getUserIdentity(),n=this.settingsForm.getRawValue();this.localStorage.store("language",n.language),this.translateService.use(n.language);const e=Object.assign({},l,n);this.kmpUserService.identityUpdate(e).then(l=>{l?console.log("User Preference Saved!"):this.componentUtil.showToast("USER_DETAILS_SAVE_FAIL",{cssClass:"toast-fail"})}).catch(l=>{this.componentUtil.hideLoading(),this.componentUtil.showToast("USER_DETAILS_SAVE_FAIL",{cssClass:"toast-fail"})})}syncLocalData(){this.componentUtil.showLoading(()=>{this.syncDataService.syncDataFromLocal().then(l=>{l&&this.componentUtil.showToast("DATA_SUCCESS_UPLOAD",{cssClass:"toast-success"}),this.componentUtil.hideLoading()})},"SYNCING_DATA")}editProfile(){this.navCtrl.navigateForward("edit-profile")}logout(){this.componentUtil.showConfirmationAlert("CONFIRM_LOGOUT",()=>{this.componentUtil.showLoading(()=>{setTimeout(()=>{this.componentUtil.userLogout(),this.componentUtil.hideLoading()},1e3)},"LOGGING_OFF")},"LOGOUT_TITLE")}}class d{}var m=e("pMnS"),p=e("oBZk"),f=e("TSSN"),y=e("s7LF"),v=e("SVse"),C=e("5Wfd"),k=e("iInd"),D=e("0uJq"),S=u.pb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))}ion-avatar[_ngcontent-%COMP%]{width:68px;height:68px;color:#fff}ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:100%;height:100%;color:#fff}.sync-local-data-btn[_ngcontent-%COMP%]{float:right}"]],data:{}});function q(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,0,"img",[["class","user-image"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,"data:image/jpeg;base64,"+n.component.userImageUrl)}))}function I(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,1,"ion-icon",[["name","contact"]],null,null,null,p.gb,p.t)),u.qb(1,49152,null,0,t.E,[u.h,u.k,u.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"contact")}),null)}function T(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,3,"ion-select-option",[],null,null,null,p.tb,p.H)),u.qb(1,49152,null,0,t.qb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Jb(2,0,["",""])),u.Fb(131072,f.i,[f.j,u.h])],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,2,0,u.Kb(n,2,0,u.Db(n,3).transform(n.context.$implicit)))}))}function x(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,7,"ion-item",[],null,null,null,p.kb,p.x)),u.qb(1,49152,null,0,t.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,5,"ion-button",[["class","sync-local-data-btn"],["expand","block"],["slot","end"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.syncLocalData()&&u),u}),p.Q,p.d)),u.qb(3,49152,null,0,t.m,[u.h,u.k,u.x],{expand:[0,"expand"]},null),(l()(),u.rb(4,0,null,0,1,"ion-icon",[["name","sync"],["slot","icon-only"]],null,null,null,p.gb,p.t)),u.qb(5,49152,null,0,t.E,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.Jb(6,0,[" "," "])),u.Fb(131072,f.i,[f.j,u.h])],(function(l,n){l(n,3,0,"block"),l(n,5,0,"sync")}),(function(l,n){l(n,6,0,u.Kb(n,6,0,u.Db(n,7).transform("SYNC_LOCAL_DATA")))}))}function U(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,2,"ion-select-option",[],null,null,null,p.tb,p.H)),u.qb(1,49152,null,0,t.qb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Jb(2,0,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function E(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,20,"ion-item",[],null,null,null,p.kb,p.x)),u.qb(1,49152,null,0,t.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,1,"ion-icon",[["name","albums"],["slot","start"]],null,null,null,p.gb,p.t)),u.qb(3,49152,null,0,t.E,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.rb(4,0,null,0,3,"ion-label",[["color","primary"]],null,null,null,p.lb,p.y)),u.qb(5,49152,null,0,t.P,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Jb(6,0,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(8,0,null,0,12,"ion-select",[["formControlName","boothId"],["name","boothId"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,9)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,9)._handleChangeEvent(e.target)&&t),"ionChange"===n&&(t=!1!==o.boothSelected(e)&&t),t}),p.ub,p.G)),u.qb(9,16384,null,0,t.Pb,[u.k],null,null),u.Gb(1024,null,y.f,(function(l){return[l]}),[t.Pb]),u.qb(11,671744,null,0,y.c,[[3,y.a],[8,null],[8,null],[6,y.f],[2,y.o]],{name:[0,"name"]},null),u.Gb(2048,null,y.g,null,[y.c]),u.qb(13,16384,null,0,y.h,[[4,y.g]],null,null),u.qb(14,49152,null,0,t.pb,[u.h,u.k,u.x],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),u.rb(15,0,null,0,3,"ion-select-option",[],null,null,null,p.tb,p.H)),u.qb(16,49152,null,0,t.qb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Jb(17,0,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.gb(16777216,null,0,1,null,U)),u.qb(20,278528,null,0,v.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component,u=null;l(n,3,0,null!=e.settingsForm&&null!=(u=e.settingsForm.getRawValue())&&u.boothId?"primary":"dark","albums"),l(n,5,0,"primary"),l(n,11,0,"boothId"),l(n,14,0,"boothId",e.userBoothId),l(n,16,0,e.nullValue),l(n,20,0,e.booths)}),(function(l,n){l(n,6,0,u.Kb(n,6,0,u.Db(n,7).transform("BOOTH"))),l(n,8,0,u.Db(n,13).ngClassUntouched,u.Db(n,13).ngClassTouched,u.Db(n,13).ngClassPristine,u.Db(n,13).ngClassDirty,u.Db(n,13).ngClassValid,u.Db(n,13).ngClassInvalid,u.Db(n,13).ngClassPending),l(n,17,0,u.Kb(n,17,0,u.Db(n,18).transform("ALL")))}))}function F(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,2,"ion-select-option",[],null,null,null,p.tb,p.H)),u.qb(1,49152,null,0,t.qb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Jb(2,0,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function w(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,20,"ion-item",[],null,null,null,p.kb,p.x)),u.qb(1,49152,null,0,t.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,1,"ion-icon",[["name","cube"],["slot","start"]],null,null,null,p.gb,p.t)),u.qb(3,49152,null,0,t.E,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.rb(4,0,null,0,3,"ion-label",[["color","primary"]],null,null,null,p.lb,p.y)),u.qb(5,49152,null,0,t.P,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Jb(6,0,[""," "])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(8,0,null,0,12,"ion-select",[["formControlName","wardId"],["name","wardId"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,9)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,9)._handleChangeEvent(e.target)&&t),"ionChange"===n&&(t=!1!==o.wardSelected(e)&&t),t}),p.ub,p.G)),u.qb(9,16384,null,0,t.Pb,[u.k],null,null),u.Gb(1024,null,y.f,(function(l){return[l]}),[t.Pb]),u.qb(11,671744,null,0,y.c,[[3,y.a],[8,null],[8,null],[6,y.f],[2,y.o]],{name:[0,"name"]},null),u.Gb(2048,null,y.g,null,[y.c]),u.qb(13,16384,null,0,y.h,[[4,y.g]],null,null),u.qb(14,49152,null,0,t.pb,[u.h,u.k,u.x],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),u.rb(15,0,null,0,3,"ion-select-option",[],null,null,null,p.tb,p.H)),u.qb(16,49152,null,0,t.qb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Jb(17,0,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.gb(16777216,null,0,1,null,F)),u.qb(20,278528,null,0,v.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component,u=null;l(n,3,0,null!=e.settingsForm&&null!=(u=e.settingsForm.getRawValue())&&u.wardId?"primary":"dark","cube"),l(n,5,0,"primary"),l(n,11,0,"wardId"),l(n,14,0,"wardId",e.userWardId),l(n,16,0,e.nullValue),l(n,20,0,e.wards)}),(function(l,n){l(n,6,0,u.Kb(n,6,0,u.Db(n,7).transform("WARD"))),l(n,8,0,u.Db(n,13).ngClassUntouched,u.Db(n,13).ngClassTouched,u.Db(n,13).ngClassPristine,u.Db(n,13).ngClassDirty,u.Db(n,13).ngClassValid,u.Db(n,13).ngClassInvalid,u.Db(n,13).ngClassPending),l(n,17,0,u.Kb(n,17,0,u.Db(n,18).transform("ALL")))}))}function L(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,2,"ion-select-option",[],null,null,null,p.tb,p.H)),u.qb(1,49152,null,0,t.qb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Jb(2,0,[""," "]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function P(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,20,"ion-item",[],null,null,null,p.kb,p.x)),u.qb(1,49152,null,0,t.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,1,"ion-icon",[["name","archive"],["slot","start"]],null,null,null,p.gb,p.t)),u.qb(3,49152,null,0,t.E,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.rb(4,0,null,0,3,"ion-label",[["color","primary"]],null,null,null,p.lb,p.y)),u.qb(5,49152,null,0,t.P,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Jb(6,0,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(8,0,null,0,12,"ion-select",[["formControlName","electionType"],["name","electionType"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,9)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,9)._handleChangeEvent(e.target)&&t),"ionChange"===n&&(t=!1!==o.electionTypeSelected(e)&&t),t}),p.ub,p.G)),u.qb(9,16384,null,0,t.Pb,[u.k],null,null),u.Gb(1024,null,y.f,(function(l){return[l]}),[t.Pb]),u.qb(11,671744,null,0,y.c,[[3,y.a],[8,null],[8,null],[6,y.f],[2,y.o]],{name:[0,"name"]},null),u.Gb(2048,null,y.g,null,[y.c]),u.qb(13,16384,null,0,y.h,[[4,y.g]],null,null),u.qb(14,49152,null,0,t.pb,[u.h,u.k,u.x],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),u.rb(15,0,null,0,3,"ion-select-option",[],null,null,null,p.tb,p.H)),u.qb(16,49152,null,0,t.qb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Jb(17,0,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.gb(16777216,null,0,1,null,L)),u.qb(20,278528,null,0,v.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component,u=null;l(n,3,0,null!=e.settingsForm&&null!=(u=e.settingsForm.getRawValue())&&u.electionType?"primary":"dark","archive"),l(n,5,0,"primary"),l(n,11,0,"electionType"),l(n,14,0,"electionType",e.userElectionType),l(n,16,0,e.nullValue),l(n,20,0,e.electionTypes)}),(function(l,n){l(n,6,0,u.Kb(n,6,0,u.Db(n,7).transform("ELECTION_TYPE"))),l(n,8,0,u.Db(n,13).ngClassUntouched,u.Db(n,13).ngClassTouched,u.Db(n,13).ngClassPristine,u.Db(n,13).ngClassDirty,u.Db(n,13).ngClassValid,u.Db(n,13).ngClassInvalid,u.Db(n,13).ngClassPending),l(n,17,0,u.Kb(n,17,0,u.Db(n,18).transform("ALL")))}))}function A(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,11,"ion-header",[],null,null,null,p.fb,p.s)),u.qb(1,49152,null,0,t.D,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,p.zb,p.M)),u.qb(3,49152,null,0,t.Eb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,p.R,p.e)),u.qb(5,49152,null,0,t.n,[u.h,u.k,u.x],null,null),(l()(),u.rb(6,0,null,0,1,"ion-menu-button",[["color","light"]],null,null,null,p.ob,p.C)),u.qb(7,49152,null,0,t.T,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(8,0,null,0,3,"ion-title",[],null,null,null,p.xb,p.K)),u.qb(9,49152,null,0,t.Cb,[u.h,u.k,u.x],null,null),(l()(),u.Jb(10,0,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(12,0,null,null,95,"ion-content",[],null,null,null,p.ab,p.n)),u.qb(13,49152,null,0,t.w,[u.h,u.k,u.x],null,null),(l()(),u.rb(14,0,null,0,30,"ion-item",[["class","bg-profile"]],null,null,null,p.kb,p.x)),u.qb(15,49152,null,0,t.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(16,0,null,0,4,"ion-avatar",[["class","user-avatar"],["slot","start"]],null,null,null,p.O,p.b)),u.qb(17,49152,null,0,t.h,[u.h,u.k,u.x],null,null),(l()(),u.gb(16777216,null,0,1,null,q)),u.qb(19,16384,null,0,v.i,[u.M,u.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),u.gb(0,[["defaultUserIcon",2]],0,0,null,I)),(l()(),u.rb(21,0,null,0,23,"ion-label",[],null,null,null,p.lb,p.y)),u.qb(22,49152,null,0,t.P,[u.h,u.k,u.x],null,null),(l()(),u.rb(23,0,null,0,4,"ion-text",[["color","light"]],null,null,null,p.wb,p.J)),u.qb(24,49152,null,0,t.zb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(25,0,null,0,2,"h2",[["style","text-transform: capitalize"]],null,null,null,null,null)),(l()(),u.rb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Jb(27,null,["",""])),(l()(),u.rb(28,0,null,0,4,"ion-text",[["color","secondary"]],null,null,null,p.wb,p.J)),u.qb(29,49152,null,0,t.zb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(30,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),u.Jb(31,null,[" "," "])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(33,0,null,0,5,"ion-button",[["color","dark"],["icon-left",""],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.editProfile()&&u),u}),p.Q,p.d)),u.qb(34,49152,null,0,t.m,[u.h,u.k,u.x],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),u.rb(35,0,null,0,1,"ion-icon",[["name","contact"]],null,null,null,p.gb,p.t)),u.qb(36,49152,null,0,t.E,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.Jb(37,0,[" "," "])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(39,0,null,0,5,"ion-button",[["color","secondary"],["icon-left",""],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.logout()&&u),u}),p.Q,p.d)),u.qb(40,49152,null,0,t.m,[u.h,u.k,u.x],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),u.rb(41,0,null,0,1,"ion-icon",[["name","log-out"]],null,null,null,p.gb,p.t)),u.qb(42,49152,null,0,t.E,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.Jb(43,0,[" "," "])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(45,0,null,0,62,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0;return"submit"===n&&(t=!1!==u.Db(l,47).onSubmit(e)&&t),"reset"===n&&(t=!1!==u.Db(l,47).onReset()&&t),t}),null,null)),u.qb(46,16384,null,0,y.p,[],null,null),u.qb(47,540672,null,0,y.d,[[8,null],[8,null]],{form:[0,"form"]},null),u.Gb(2048,null,y.a,null,[y.d]),u.qb(49,16384,null,0,y.i,[[4,y.a]],null,null),(l()(),u.rb(50,0,null,null,42,"ion-list",[["no-border",""]],null,null,null,p.nb,p.z)),u.qb(51,49152,null,0,t.Q,[u.h,u.k,u.x],null,null),(l()(),u.rb(52,0,null,0,6,"ion-list-header",[],null,null,null,p.mb,p.A)),u.qb(53,49152,null,0,t.R,[u.h,u.k,u.x],null,null),(l()(),u.rb(54,0,null,0,4,"ion-text",[["color","dark"]],null,null,null,p.wb,p.J)),u.qb(55,49152,null,0,t.zb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(56,0,null,0,2,"h5",[],null,null,null,null,null)),(l()(),u.Jb(57,null,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(59,0,null,0,16,"ion-item",[],null,null,null,p.kb,p.x)),u.qb(60,49152,null,0,t.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(61,0,null,0,1,"ion-icon",[["name","cog"],["slot","start"]],null,null,null,p.gb,p.t)),u.qb(62,49152,null,0,t.E,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.rb(63,0,null,0,3,"ion-label",[["color","primary"]],null,null,null,p.lb,p.y)),u.qb(64,49152,null,0,t.P,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Jb(65,0,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(67,0,null,0,8,"ion-select",[["formControlName","language"],["name","language"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,68)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,68)._handleChangeEvent(e.target)&&t),"ionChange"===n&&(t=!1!==o.languageSelected(e)&&t),t}),p.ub,p.G)),u.qb(68,16384,null,0,t.Pb,[u.k],null,null),u.Gb(1024,null,y.f,(function(l){return[l]}),[t.Pb]),u.qb(70,671744,null,0,y.c,[[3,y.a],[8,null],[8,null],[6,y.f],[2,y.o]],{name:[0,"name"]},null),u.Gb(2048,null,y.g,null,[y.c]),u.qb(72,16384,null,0,y.h,[[4,y.g]],null,null),u.qb(73,49152,null,0,t.pb,[u.h,u.k,u.x],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),u.gb(16777216,null,0,1,null,T)),u.qb(75,278528,null,0,v.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.rb(76,0,null,0,14,"ion-item",[],null,null,null,p.kb,p.x)),u.qb(77,49152,null,0,t.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(78,0,null,0,1,"ion-icon",[["name","sync"],["slot","start"]],null,null,null,p.gb,p.t)),u.qb(79,49152,null,0,t.E,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.rb(80,0,null,0,3,"ion-label",[["class","label"],["color","primary"]],null,null,null,p.lb,p.y)),u.qb(81,49152,null,0,t.P,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Jb(82,0,[" "," "])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.rb(84,0,null,0,6,"ion-toggle",[["formControlName","autoSync"],["name","autoSync"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,85)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,85)._handleIonChange(e.target)&&t),"ionChange"===n&&(t=!1!==o.syncSelected(e)&&t),t}),p.yb,p.L)),u.qb(85,16384,null,0,t.d,[u.k],null,null),u.Gb(1024,null,y.f,(function(l){return[l]}),[t.d]),u.qb(87,671744,null,0,y.c,[[3,y.a],[8,null],[8,null],[6,y.f],[2,y.o]],{name:[0,"name"]},null),u.Gb(2048,null,y.g,null,[y.c]),u.qb(89,16384,null,0,y.h,[[4,y.g]],null,null),u.qb(90,49152,null,0,t.Db,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.gb(16777216,null,0,1,null,x)),u.qb(92,16384,null,0,v.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(93,0,null,null,14,"ion-list",[],null,null,null,p.nb,p.z)),u.qb(94,49152,null,0,t.Q,[u.h,u.k,u.x],null,null),(l()(),u.rb(95,0,null,0,6,"ion-list-header",[],null,null,null,p.mb,p.A)),u.qb(96,49152,null,0,t.R,[u.h,u.k,u.x],null,null),(l()(),u.rb(97,0,null,0,4,"ion-text",[["color","dark"]],null,null,null,p.wb,p.J)),u.qb(98,49152,null,0,t.zb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(99,0,null,0,2,"h5",[],null,null,null,null,null)),(l()(),u.Jb(100,null,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(l()(),u.gb(16777216,null,0,1,null,E)),u.qb(103,16384,null,0,v.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,w)),u.qb(105,16384,null,0,v.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,P)),u.qb(107,16384,null,0,v.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"primary"),l(n,7,0,"light"),l(n,19,0,e.userImageUrl,u.Db(n,20)),l(n,24,0,"light"),l(n,29,0,"secondary"),l(n,34,0,"dark","round","small"),l(n,36,0,"contact"),l(n,40,0,"secondary","round","small"),l(n,42,0,"log-out"),l(n,47,0,e.settingsForm),l(n,55,0,"dark");var t=null;l(n,62,0,null!=e.settingsForm&&null!=(t=e.settingsForm.getRawValue())&&t.language?"primary":"dark","cog"),l(n,64,0,"primary"),l(n,70,0,"language"),l(n,73,0,"language",e.language),l(n,75,0,e.languages);var o=null;l(n,79,0,null!=e.settingsForm&&null!=(o=e.settingsForm.getRawValue())&&o.autoSync?"primary":"dark","sync"),l(n,81,0,"primary"),l(n,87,0,"autoSync"),l(n,90,0,"autoSync"),l(n,92,0,!e.enableAutoSync),l(n,98,0,"dark"),l(n,103,0,e.booths),l(n,105,0,e.wards),l(n,107,0,e.electionTypes)}),(function(l,n){var e=n.component;l(n,10,0,u.Kb(n,10,0,u.Db(n,11).transform(null==e.pageMenu?null:e.pageMenu.title))),l(n,27,0,e.userName),l(n,31,0,u.Kb(n,31,0,u.Db(n,32).transform(e.userType))),l(n,37,0,u.Kb(n,37,0,u.Db(n,38).transform("SETTINGS_PAGE_PROFILE"))),l(n,43,0,u.Kb(n,43,0,u.Db(n,44).transform("LOGOUT_TITLE"))),l(n,45,0,u.Db(n,49).ngClassUntouched,u.Db(n,49).ngClassTouched,u.Db(n,49).ngClassPristine,u.Db(n,49).ngClassDirty,u.Db(n,49).ngClassValid,u.Db(n,49).ngClassInvalid,u.Db(n,49).ngClassPending),l(n,57,0,u.Kb(n,57,0,u.Db(n,58).transform("GENERAL"))),l(n,65,0,u.Kb(n,65,0,u.Db(n,66).transform("APP_LANGUAGE"))),l(n,67,0,u.Db(n,72).ngClassUntouched,u.Db(n,72).ngClassTouched,u.Db(n,72).ngClassPristine,u.Db(n,72).ngClassDirty,u.Db(n,72).ngClassValid,u.Db(n,72).ngClassInvalid,u.Db(n,72).ngClassPending),l(n,82,0,u.Kb(n,82,0,u.Db(n,83).transform("ENABLE_AUTO_SYNC"))),l(n,84,0,u.Db(n,89).ngClassUntouched,u.Db(n,89).ngClassTouched,u.Db(n,89).ngClassPristine,u.Db(n,89).ngClassDirty,u.Db(n,89).ngClassValid,u.Db(n,89).ngClassInvalid,u.Db(n,89).ngClassPending),l(n,100,0,u.Kb(n,100,0,u.Db(n,101).transform("APPLICATION")))}))}function B(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,1,"app-settings",[],null,null,null,A,S)),u.qb(1,114688,null,0,g,[t.Lb,C.a,k.a,k.n,f.j,o.a,i.a,b.a,D.d,D.i,a.a,y.b,c.a,h.a,t.Jb],null,null)],(function(l,n){l(n,1,0)}),null)}var _=u.nb("app-settings",g,B,{},{},[]);e.d(n,"SettingsPageModuleNgFactory",(function(){return J}));var J=u.ob(d,[],(function(l){return u.Ab([u.Bb(512,u.j,u.Z,[[8,[m.a,_]],[3,u.j],u.v]),u.Bb(4608,v.k,v.j,[u.s,[2,v.r]]),u.Bb(4608,y.n,y.n,[]),u.Bb(4608,t.c,t.c,[u.x,u.g]),u.Bb(4608,t.Kb,t.Kb,[t.c,u.j,u.p]),u.Bb(4608,t.Nb,t.Nb,[t.c,u.j,u.p]),u.Bb(4608,y.b,y.b,[]),u.Bb(1073742336,v.b,v.b,[]),u.Bb(1073742336,y.m,y.m,[]),u.Bb(1073742336,y.e,y.e,[]),u.Bb(1073742336,t.Gb,t.Gb,[]),u.Bb(1073742336,k.p,k.p,[[2,k.u],[2,k.n]]),u.Bb(1073742336,f.g,f.g,[]),u.Bb(1073742336,y.k,y.k,[]),u.Bb(1073742336,d,d,[]),u.Bb(1024,k.l,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);