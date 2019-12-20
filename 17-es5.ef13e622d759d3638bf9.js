(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{zDS7:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("mrSG"),o=e("ZZ/e"),i=(e("M0ag"),e("jv8m")),s=e("HHnl"),r=e("z6cF"),a=e("/kO1"),b=e("VNr4"),c=e("/6Vp"),h=e("7Cmt"),g=e("TIdq"),d=function(){function l(l,n,e,t,u,o,i,s,r,a,b,c,h,g,d){this.navCtrl=l,this.componentUtil=n,this.route=e,this.router=t,this.translateService=u,this.accountService=o,this.kmpUserService=i,this.kmpService=s,this.localStorage=r,this.sessionStorage=a,this.resolverService=b,this.formBuilder=c,this.syncDataService=h,this.votersService=g,this.menuCtrl=d,this.nullValue=null,this.searchCriteria={},this.languages=["en"],this.booths=[],this.wards=[],this.electionTypes=[],console.log("settings"),this.pageMenu=this.componentUtil.getMenuById("settings"),this.resolverService.getPropertyValue("supported-languages")&&(this.languages=this.resolverService.getPropertyValue("supported-languages")),this.userName=this.kmpUserService.getUserName(),this.userType=this.kmpUserService.getUserType(),this.userImageUrl=this.accountService.getImageUrl(),this.userBoothId=this.kmpUserService.getBoothId(),this.userElectionType=this.kmpUserService.getElectionType(),this.userWardId=this.kmpUserService.getWardId(),this.language=this.kmpUserService.getLanguage()||this.resolverService.getPropertyValue("default-lang"),this.enableAutoSync=!!this.kmpUserService.getAutoSync(),this.settingsForm=c.group({imageUrl:[this.userImageUrl],language:[this.language],autoSync:[this.enableAutoSync],boothId:[this.userBoothId],wardId:[this.userWardId],electionType:[this.userElectionType]}),this.searchCriteria={boothId:this.userBoothId,wardId:this.userWardId,electionType:this.userElectionType}}return l.prototype.ngOnInit=function(){var l=this;this.componentUtil.showLoading((function(){l.init()}))},l.prototype.ionViewWillEnter=function(){this.menuCtrl.enable(this.showMenuOption())},l.prototype.showMenuOption=function(){var l=!1,n=this.settingsForm.getRawValue();return(n.boothId||n.wardId)&&n.electionType&&(l=!0),this.showMenuBar=!!this.accountService.hasAnyAuthorityDirect([r.a.ADMIN])||l},l.prototype.init=function(){var l=this;this.kmpUserService.getAuthenticationState().subscribe((function(n){n&&(l.userName=n.login,l.userType=n.userType,l.userImageUrl=n.imageUrl,l.userBoothId=n.boothId,l.userElectionType=n.electionType,l.userWardId=n.wardId,l.language=n.language,l.enableAutoSync=n.autoSync,l.searchCriteria={boothId:l.userBoothId,wardId:l.userWardId,electionType:l.userElectionType})})),Object(b.a)([this.kmpService.fetchAllBooths(this.searchCriteria),this.kmpService.fetchAllElectionTypes(this.searchCriteria),this.kmpService.fetchAllWards(this.searchCriteria)]).subscribe((function(n){l.booths=n[0].body,l.electionTypes=n[1].body,l.wards=n[2].body})),this.fetchVoters()},l.prototype.fetchVoters=function(){var l=this;this.votersService.getVotersFromLocal().then((function(n){n&&0===n.length?(console.log("Fetching voters from server ..."),l.votersService.fetchVoters(l.searchCriteria.boothId,l.searchCriteria.wardId,l.searchCriteria.electionType).then((function(n){l.componentUtil.hideLoading(),l.userBoothId&&l.userWardId||l.userElectionType||l.componentUtil.showToast("SELECT_ATLEAST_ONE_APP_SETTINGS")}))):(l.componentUtil.hideLoading(),l.userBoothId&&l.userWardId||l.userElectionType||l.componentUtil.showToast("SELECT_ATLEAST_ONE_APP_SETTINGS"))}))},l.prototype.languageSelected=function(l){console.log("language Selected"),this.updateUserPreference()},l.prototype.syncSelected=function(l){console.log("sync Selected"),this.updateUserPreference()},l.prototype.boothSelected=function(l){console.log("booth Selected"),this.updateUserPreference(),this.searchCriteria.boothId=this.settingsForm.getRawValue()?this.settingsForm.getRawValue().boothId:null,this.fetchingVotersForCriteria()},l.prototype.wardSelected=function(l){console.log("ward Selected"),this.updateUserPreference(),this.searchCriteria.wardId=this.settingsForm.getRawValue()?this.settingsForm.getRawValue().wardId:null,this.fetchingVotersForCriteria()},l.prototype.electionTypeSelected=function(l){console.log("electionType Selected"),this.updateUserPreference(),this.searchCriteria.electionType=this.settingsForm.getRawValue()?this.settingsForm.getRawValue().electionType:null,this.fetchingVotersForCriteria()},l.prototype.fetchingVotersForCriteria=function(){var l=this;this.componentUtil.showLoading((function(){l.fetchVoters()}),"FETCHING_VOTERS_DATA")},l.prototype.updateUserPreference=function(){var l=this;this.menuCtrl.enable(this.showMenuOption());var n=this.kmpUserService.getUserIdentity(),e=this.settingsForm.getRawValue(),t=u.a({},n,e);this.kmpUserService.identityUpdate(t).then((function(n){n?console.log("User Preference Saved!"):l.componentUtil.showToast("USER_DETAILS_SAVE_FAIL",{cssClass:"toast-fail"})})).catch((function(n){l.componentUtil.hideLoading(),l.componentUtil.showToast("USER_DETAILS_SAVE_FAIL",{cssClass:"toast-fail"})}))},l.prototype.syncLocalData=function(){var l=this;this.componentUtil.showLoading((function(){l.syncDataService.syncDataFromLocal().then((function(n){n&&l.componentUtil.showToast("DATA_SUCCESS_UPLOAD",{cssClass:"toast-success"}),l.componentUtil.hideLoading()}))}),"SYNCING_DATA")},l.prototype.editProfile=function(){this.navCtrl.navigateForward("edit-profile")},l.prototype.logout=function(){var l=this;this.componentUtil.showConfirmationAlert("CONFIRM_LOGOUT",(function(){l.componentUtil.showLoading((function(){setTimeout((function(){l.componentUtil.userLogout(),l.componentUtil.hideLoading()}),1e3)}),"LOGGING_OFF")}),"LOGOUT_TITLE")},l}(),p=function(){return function(){}}(),m=e("pMnS"),f=e("oBZk"),y=e("A7o+"),v=e("gIcY"),F=e("Ip0R"),C=e("5Wfd"),I=e("ZYCi"),k=e("dyMF"),S=t.rb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))}ion-avatar[_ngcontent-%COMP%]{width:68px;height:68px;color:#fff}ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:100%;height:100%;color:#fff}.sync-local-data-btn[_ngcontent-%COMP%]{float:right}"]],data:{}});function T(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"ion-menu-button",[["color","light"]],null,null,null,f.kb,f.A)),t.sb(1,49152,null,0,o.S,[t.h,t.k,t.z],{color:[0,"color"]},null)],(function(l,n){l(n,1,0,"light")}),null)}function O(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,0,"img",[["class","user-image"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,"assets/img/avatar.png")}))}function L(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"ion-icon",[["name","contact"]],null,null,null,f.eb,f.t)),t.sb(1,49152,null,0,o.D,[t.h,t.k,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"contact")}),null)}function w(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"ion-select-option",[],null,null,null,f.pb,f.F)),t.sb(1,49152,null,0,o.pb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(2,0,["",""])),t.Hb(131072,y.i,[y.j,t.h])],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,2,0,t.Mb(n,2,0,t.Fb(n,3).transform(n.context.$implicit)))}))}function U(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,7,"ion-item",[],null,null,null,f.gb,f.v)),t.sb(1,49152,null,0,o.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,5,"ion-button",[["class","sync-local-data-btn"],["expand","block"],["slot","end"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.syncLocalData()&&t),t}),f.O,f.d)),t.sb(3,49152,null,0,o.l,[t.h,t.k,t.z],{expand:[0,"expand"]},null),(l()(),t.tb(4,0,null,0,1,"ion-icon",[["name","sync"],["slot","icon-only"]],null,null,null,f.eb,f.t)),t.sb(5,49152,null,0,o.D,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.Lb(6,0,[" "," "])),t.Hb(131072,y.i,[y.j,t.h])],(function(l,n){l(n,3,0,"block"),l(n,5,0,"sync")}),(function(l,n){l(n,6,0,t.Mb(n,6,0,t.Fb(n,7).transform("SYNC_LOCAL_DATA")))}))}function z(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,f.pb,f.F)),t.sb(1,49152,null,0,o.pb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(2,0,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function E(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,20,"ion-item",[],null,null,null,f.gb,f.v)),t.sb(1,49152,null,0,o.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,1,"ion-icon",[["name","albums"],["slot","start"]],null,null,null,f.eb,f.t)),t.sb(3,49152,null,0,o.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(4,0,null,0,3,"ion-label",[["color","primary"]],null,null,null,f.hb,f.w)),t.sb(5,49152,null,0,o.O,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Lb(6,0,["",""])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(8,0,null,0,12,"ion-select",[["formControlName","boothId"],["name","boothId"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Fb(l,9)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Fb(l,9)._handleChangeEvent(e.target)&&u),"ionChange"===n&&(u=!1!==o.boothSelected(e)&&u),u}),f.qb,f.E)),t.sb(9,16384,null,0,o.Ob,[t.k],null,null),t.Ib(1024,null,v.f,(function(l){return[l]}),[o.Ob]),t.sb(11,671744,null,0,v.c,[[3,v.a],[8,null],[8,null],[6,v.f],[2,v.o]],{name:[0,"name"]},null),t.Ib(2048,null,v.g,null,[v.c]),t.sb(13,16384,null,0,v.h,[[4,v.g]],null,null),t.sb(14,49152,null,0,o.ob,[t.h,t.k,t.z],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),t.tb(15,0,null,0,3,"ion-select-option",[],null,null,null,f.pb,f.F)),t.sb(16,49152,null,0,o.pb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(17,0,["",""])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.ib(16777216,null,0,1,null,z)),t.sb(20,278528,null,0,F.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component,t=null;l(n,3,0,null!=e.settingsForm&&null!=(t=e.settingsForm.getRawValue())&&t.boothId?"primary":"dark","albums"),l(n,5,0,"primary"),l(n,11,0,"boothId"),l(n,14,0,"boothId",e.userBoothId),l(n,16,0,e.nullValue),l(n,20,0,e.booths)}),(function(l,n){l(n,6,0,t.Mb(n,6,0,t.Fb(n,7).transform("BOOTH"))),l(n,8,0,t.Fb(n,13).ngClassUntouched,t.Fb(n,13).ngClassTouched,t.Fb(n,13).ngClassPristine,t.Fb(n,13).ngClassDirty,t.Fb(n,13).ngClassValid,t.Fb(n,13).ngClassInvalid,t.Fb(n,13).ngClassPending),l(n,17,0,t.Mb(n,17,0,t.Fb(n,18).transform("NONE")))}))}function D(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,f.pb,f.F)),t.sb(1,49152,null,0,o.pb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(2,0,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function N(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,20,"ion-item",[],null,null,null,f.gb,f.v)),t.sb(1,49152,null,0,o.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,1,"ion-icon",[["name","cube"],["slot","start"]],null,null,null,f.eb,f.t)),t.sb(3,49152,null,0,o.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(4,0,null,0,3,"ion-label",[["color","primary"]],null,null,null,f.hb,f.w)),t.sb(5,49152,null,0,o.O,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Lb(6,0,[""," "])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(8,0,null,0,12,"ion-select",[["formControlName","wardId"],["name","wardId"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Fb(l,9)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Fb(l,9)._handleChangeEvent(e.target)&&u),"ionChange"===n&&(u=!1!==o.wardSelected(e)&&u),u}),f.qb,f.E)),t.sb(9,16384,null,0,o.Ob,[t.k],null,null),t.Ib(1024,null,v.f,(function(l){return[l]}),[o.Ob]),t.sb(11,671744,null,0,v.c,[[3,v.a],[8,null],[8,null],[6,v.f],[2,v.o]],{name:[0,"name"]},null),t.Ib(2048,null,v.g,null,[v.c]),t.sb(13,16384,null,0,v.h,[[4,v.g]],null,null),t.sb(14,49152,null,0,o.ob,[t.h,t.k,t.z],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),t.tb(15,0,null,0,3,"ion-select-option",[],null,null,null,f.pb,f.F)),t.sb(16,49152,null,0,o.pb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(17,0,["",""])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.ib(16777216,null,0,1,null,D)),t.sb(20,278528,null,0,F.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component,t=null;l(n,3,0,null!=e.settingsForm&&null!=(t=e.settingsForm.getRawValue())&&t.wardId?"primary":"dark","cube"),l(n,5,0,"primary"),l(n,11,0,"wardId"),l(n,14,0,"wardId",e.userWardId),l(n,16,0,e.nullValue),l(n,20,0,e.wards)}),(function(l,n){l(n,6,0,t.Mb(n,6,0,t.Fb(n,7).transform("WARD"))),l(n,8,0,t.Fb(n,13).ngClassUntouched,t.Fb(n,13).ngClassTouched,t.Fb(n,13).ngClassPristine,t.Fb(n,13).ngClassDirty,t.Fb(n,13).ngClassValid,t.Fb(n,13).ngClassInvalid,t.Fb(n,13).ngClassPending),l(n,17,0,t.Mb(n,17,0,t.Fb(n,18).transform("NONE")))}))}function A(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,f.pb,f.F)),t.sb(1,49152,null,0,o.pb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(2,0,[""," "]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function _(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,20,"ion-item",[],null,null,null,f.gb,f.v)),t.sb(1,49152,null,0,o.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,1,"ion-icon",[["name","archive"],["slot","start"]],null,null,null,f.eb,f.t)),t.sb(3,49152,null,0,o.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(4,0,null,0,3,"ion-label",[["color","primary"]],null,null,null,f.hb,f.w)),t.sb(5,49152,null,0,o.O,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Lb(6,0,["",""])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(8,0,null,0,12,"ion-select",[["formControlName","electionType"],["name","electionType"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Fb(l,9)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Fb(l,9)._handleChangeEvent(e.target)&&u),"ionChange"===n&&(u=!1!==o.electionTypeSelected(e)&&u),u}),f.qb,f.E)),t.sb(9,16384,null,0,o.Ob,[t.k],null,null),t.Ib(1024,null,v.f,(function(l){return[l]}),[o.Ob]),t.sb(11,671744,null,0,v.c,[[3,v.a],[8,null],[8,null],[6,v.f],[2,v.o]],{name:[0,"name"]},null),t.Ib(2048,null,v.g,null,[v.c]),t.sb(13,16384,null,0,v.h,[[4,v.g]],null,null),t.sb(14,49152,null,0,o.ob,[t.h,t.k,t.z],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),t.tb(15,0,null,0,3,"ion-select-option",[],null,null,null,f.pb,f.F)),t.sb(16,49152,null,0,o.pb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Lb(17,0,["",""])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.ib(16777216,null,0,1,null,A)),t.sb(20,278528,null,0,F.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component,t=null;l(n,3,0,null!=e.settingsForm&&null!=(t=e.settingsForm.getRawValue())&&t.electionType?"primary":"dark","archive"),l(n,5,0,"primary"),l(n,11,0,"electionType"),l(n,14,0,"electionType",e.userElectionType),l(n,16,0,e.nullValue),l(n,20,0,e.electionTypes)}),(function(l,n){l(n,6,0,t.Mb(n,6,0,t.Fb(n,7).transform("ELECTION_TYPE"))),l(n,8,0,t.Fb(n,13).ngClassUntouched,t.Fb(n,13).ngClassTouched,t.Fb(n,13).ngClassPristine,t.Fb(n,13).ngClassDirty,t.Fb(n,13).ngClassValid,t.Fb(n,13).ngClassInvalid,t.Fb(n,13).ngClassPending),l(n,17,0,t.Mb(n,17,0,t.Fb(n,18).transform("NONE")))}))}function P(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,11,"ion-header",[],null,null,null,f.db,f.s)),t.sb(1,49152,null,0,o.C,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,f.vb,f.K)),t.sb(3,49152,null,0,o.Db,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,f.P,f.e)),t.sb(5,49152,null,0,o.m,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,T)),t.sb(7,16384,null,0,F.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(8,0,null,0,3,"ion-title",[],null,null,null,f.tb,f.I)),t.sb(9,49152,null,0,o.Bb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(10,0,["",""])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(12,0,null,null,95,"ion-content",[],null,null,null,f.Y,f.n)),t.sb(13,49152,null,0,o.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(14,0,null,0,30,"ion-item",[["class","bg-profile"]],null,null,null,f.gb,f.v)),t.sb(15,49152,null,0,o.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(16,0,null,0,4,"ion-avatar",[["class","user-avatar"],["slot","start"]],null,null,null,f.M,f.b)),t.sb(17,49152,null,0,o.g,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,O)),t.sb(19,16384,null,0,F.i,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.ib(0,[["defaultUserIcon",2]],0,0,null,L)),(l()(),t.tb(21,0,null,0,23,"ion-label",[],null,null,null,f.hb,f.w)),t.sb(22,49152,null,0,o.O,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,4,"ion-text",[["color","light"]],null,null,null,f.sb,f.H)),t.sb(24,49152,null,0,o.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(25,0,null,0,2,"h2",[["style","text-transform: capitalize"]],null,null,null,null,null)),(l()(),t.tb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(27,null,["",""])),(l()(),t.tb(28,0,null,0,4,"ion-text",[["color","secondary"]],null,null,null,f.sb,f.H)),t.sb(29,49152,null,0,o.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(30,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.Lb(31,null,[" "," "])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(33,0,null,0,5,"ion-button",[["color","dark"],["icon-left",""],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.editProfile()&&t),t}),f.O,f.d)),t.sb(34,49152,null,0,o.l,[t.h,t.k,t.z],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),t.tb(35,0,null,0,1,"ion-icon",[["name","contact"]],null,null,null,f.eb,f.t)),t.sb(36,49152,null,0,o.D,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.Lb(37,0,[" "," "])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(39,0,null,0,5,"ion-button",[["color","secondary"],["icon-left",""],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t}),f.O,f.d)),t.sb(40,49152,null,0,o.l,[t.h,t.k,t.z],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),t.tb(41,0,null,0,1,"ion-icon",[["name","log-out"]],null,null,null,f.eb,f.t)),t.sb(42,49152,null,0,o.D,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.Lb(43,0,[" "," "])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(45,0,null,0,62,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var u=!0;return"submit"===n&&(u=!1!==t.Fb(l,47).onSubmit(e)&&u),"reset"===n&&(u=!1!==t.Fb(l,47).onReset()&&u),u}),null,null)),t.sb(46,16384,null,0,v.p,[],null,null),t.sb(47,540672,null,0,v.d,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ib(2048,null,v.a,null,[v.d]),t.sb(49,16384,null,0,v.i,[[4,v.a]],null,null),(l()(),t.tb(50,0,null,null,42,"ion-list",[["no-border",""]],null,null,null,f.jb,f.x)),t.sb(51,49152,null,0,o.P,[t.h,t.k,t.z],null,null),(l()(),t.tb(52,0,null,0,6,"ion-list-header",[],null,null,null,f.ib,f.y)),t.sb(53,49152,null,0,o.Q,[t.h,t.k,t.z],null,null),(l()(),t.tb(54,0,null,0,4,"ion-text",[["color","dark"]],null,null,null,f.sb,f.H)),t.sb(55,49152,null,0,o.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(56,0,null,0,2,"h5",[],null,null,null,null,null)),(l()(),t.Lb(57,null,["",""])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(59,0,null,0,16,"ion-item",[],null,null,null,f.gb,f.v)),t.sb(60,49152,null,0,o.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(61,0,null,0,1,"ion-icon",[["name","cog"],["slot","start"]],null,null,null,f.eb,f.t)),t.sb(62,49152,null,0,o.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(63,0,null,0,3,"ion-label",[["color","primary"]],null,null,null,f.hb,f.w)),t.sb(64,49152,null,0,o.O,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Lb(65,0,["",""])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(67,0,null,0,8,"ion-select",[["formControlName","language"],["name","language"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Fb(l,68)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Fb(l,68)._handleChangeEvent(e.target)&&u),"ionChange"===n&&(u=!1!==o.languageSelected(e)&&u),u}),f.qb,f.E)),t.sb(68,16384,null,0,o.Ob,[t.k],null,null),t.Ib(1024,null,v.f,(function(l){return[l]}),[o.Ob]),t.sb(70,671744,null,0,v.c,[[3,v.a],[8,null],[8,null],[6,v.f],[2,v.o]],{name:[0,"name"]},null),t.Ib(2048,null,v.g,null,[v.c]),t.sb(72,16384,null,0,v.h,[[4,v.g]],null,null),t.sb(73,49152,null,0,o.ob,[t.h,t.k,t.z],{name:[0,"name"],selectedText:[1,"selectedText"]},null),(l()(),t.ib(16777216,null,0,1,null,w)),t.sb(75,278528,null,0,F.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(76,0,null,0,14,"ion-item",[],null,null,null,f.gb,f.v)),t.sb(77,49152,null,0,o.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(78,0,null,0,1,"ion-icon",[["name","sync"],["slot","start"]],null,null,null,f.eb,f.t)),t.sb(79,49152,null,0,o.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(80,0,null,0,3,"ion-label",[["class","label"],["color","primary"]],null,null,null,f.hb,f.w)),t.sb(81,49152,null,0,o.O,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Lb(82,0,[" "," "])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.tb(84,0,null,0,6,"ion-toggle",[["formControlName","autoSync"],["name","autoSync"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Fb(l,85)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Fb(l,85)._handleIonChange(e.target)&&u),"ionChange"===n&&(u=!1!==o.syncSelected(e)&&u),u}),f.ub,f.J)),t.sb(85,16384,null,0,o.c,[t.k],null,null),t.Ib(1024,null,v.f,(function(l){return[l]}),[o.c]),t.sb(87,671744,null,0,v.c,[[3,v.a],[8,null],[8,null],[6,v.f],[2,v.o]],{name:[0,"name"]},null),t.Ib(2048,null,v.g,null,[v.c]),t.sb(89,16384,null,0,v.h,[[4,v.g]],null,null),t.sb(90,49152,null,0,o.Cb,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.ib(16777216,null,0,1,null,U)),t.sb(92,16384,null,0,F.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(93,0,null,null,14,"ion-list",[],null,null,null,f.jb,f.x)),t.sb(94,49152,null,0,o.P,[t.h,t.k,t.z],null,null),(l()(),t.tb(95,0,null,0,6,"ion-list-header",[],null,null,null,f.ib,f.y)),t.sb(96,49152,null,0,o.Q,[t.h,t.k,t.z],null,null),(l()(),t.tb(97,0,null,0,4,"ion-text",[["color","dark"]],null,null,null,f.sb,f.H)),t.sb(98,49152,null,0,o.yb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(99,0,null,0,2,"h5",[],null,null,null,null,null)),(l()(),t.Lb(100,null,["",""])),t.Hb(131072,y.i,[y.j,t.h]),(l()(),t.ib(16777216,null,0,1,null,E)),t.sb(103,16384,null,0,F.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,N)),t.sb(105,16384,null,0,F.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,_)),t.sb(107,16384,null,0,F.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"primary"),l(n,7,0,e.showMenuOption()),l(n,19,0,e.userImageUrl,t.Fb(n,20)),l(n,24,0,"light"),l(n,29,0,"secondary"),l(n,34,0,"dark","round","small"),l(n,36,0,"contact"),l(n,40,0,"secondary","round","small"),l(n,42,0,"log-out"),l(n,47,0,e.settingsForm),l(n,55,0,"dark");var u=null;l(n,62,0,null!=e.settingsForm&&null!=(u=e.settingsForm.getRawValue())&&u.language?"primary":"dark","cog"),l(n,64,0,"primary"),l(n,70,0,"language"),l(n,73,0,"language",e.language),l(n,75,0,e.languages);var o=null;l(n,79,0,null!=e.settingsForm&&null!=(o=e.settingsForm.getRawValue())&&o.autoSync?"primary":"dark","sync"),l(n,81,0,"primary"),l(n,87,0,"autoSync"),l(n,90,0,"autoSync"),l(n,92,0,!e.enableAutoSync),l(n,98,0,"dark"),l(n,103,0,e.booths),l(n,105,0,e.wards),l(n,107,0,e.electionTypes)}),(function(l,n){var e=n.component;l(n,10,0,t.Mb(n,10,0,t.Fb(n,11).transform(null==e.pageMenu?null:e.pageMenu.title))),l(n,27,0,e.userName),l(n,31,0,t.Mb(n,31,0,t.Fb(n,32).transform(e.userType))),l(n,37,0,t.Mb(n,37,0,t.Fb(n,38).transform("SETTINGS_PAGE_PROFILE"))),l(n,43,0,t.Mb(n,43,0,t.Fb(n,44).transform("LOGOUT_TITLE"))),l(n,45,0,t.Fb(n,49).ngClassUntouched,t.Fb(n,49).ngClassTouched,t.Fb(n,49).ngClassPristine,t.Fb(n,49).ngClassDirty,t.Fb(n,49).ngClassValid,t.Fb(n,49).ngClassInvalid,t.Fb(n,49).ngClassPending),l(n,57,0,t.Mb(n,57,0,t.Fb(n,58).transform("GENERAL"))),l(n,65,0,t.Mb(n,65,0,t.Fb(n,66).transform("APP_LANGUAGE"))),l(n,67,0,t.Fb(n,72).ngClassUntouched,t.Fb(n,72).ngClassTouched,t.Fb(n,72).ngClassPristine,t.Fb(n,72).ngClassDirty,t.Fb(n,72).ngClassValid,t.Fb(n,72).ngClassInvalid,t.Fb(n,72).ngClassPending),l(n,82,0,t.Mb(n,82,0,t.Fb(n,83).transform("ENABLE_AUTO_SYNC"))),l(n,84,0,t.Fb(n,89).ngClassUntouched,t.Fb(n,89).ngClassTouched,t.Fb(n,89).ngClassPristine,t.Fb(n,89).ngClassDirty,t.Fb(n,89).ngClassValid,t.Fb(n,89).ngClassInvalid,t.Fb(n,89).ngClassPending),l(n,100,0,t.Mb(n,100,0,t.Fb(n,101).transform("APPLICATION")))}))}function V(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-settings",[],null,null,null,P,S)),t.sb(1,114688,null,0,d,[o.Kb,C.a,I.a,I.n,y.j,i.a,s.a,c.a,k.d,k.i,a.a,v.b,h.a,g.a,o.Ib],null,null)],(function(l,n){l(n,1,0)}),null)}var M=t.pb("app-settings",d,V,{},{},[]);e.d(n,"SettingsPageModuleNgFactory",(function(){return B}));var B=t.qb(p,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[m.a,M]],[3,t.j],t.x]),t.Db(4608,F.k,F.j,[t.u,[2,F.r]]),t.Db(4608,v.n,v.n,[]),t.Db(4608,o.b,o.b,[t.z,t.g]),t.Db(4608,o.Jb,o.Jb,[o.b,t.j,t.q]),t.Db(4608,o.Mb,o.Mb,[o.b,t.j,t.q]),t.Db(4608,v.b,v.b,[]),t.Db(1073742336,F.b,F.b,[]),t.Db(1073742336,v.m,v.m,[]),t.Db(1073742336,v.e,v.e,[]),t.Db(1073742336,o.Fb,o.Fb,[]),t.Db(1073742336,I.p,I.p,[[2,I.u],[2,I.n]]),t.Db(1073742336,y.g,y.g,[]),t.Db(1073742336,v.k,v.k,[]),t.Db(1073742336,p,p,[]),t.Db(1024,I.l,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);