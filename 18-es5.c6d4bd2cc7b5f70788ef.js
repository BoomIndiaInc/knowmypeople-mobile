(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4cNi":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=u("mrSG"),i=u("ZZ/e"),e=u("CFL1"),r=u("gIcY"),s=u("5Wfd"),a=u("RfBd"),b=function(){function n(n,l,u,t,o){var i=this;this.navController=n,this.userService=l,this.translateService=u,this.formBuilder=t,this.componentUtil=o,this.backgrounds=a.d,this.slideOpts=s.c,this.signupForm=t.group({login:["",r.l.required],email:["",r.l.compose([r.l.required,r.l.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],password:["",r.l.compose([r.l.minLength(4),r.l.required])],"confirm-password":["",r.l.compose([r.l.minLength(4),r.l.required])],langKey:["en",r.l.required]},{validator:Object(s.b)("password","confirm-password")}),this.translateService.get(["SIGNUP_ERROR","SIGNUP_SUCCESS","EXISTING_USER_ERROR","INVALID_PASSWORD_ERROR","NETWORK_ERROR"]).subscribe((function(n){i.signupErrorString=n.SIGNUP_ERROR,i.signupSuccessString=n.SIGNUP_SUCCESS,i.existingUserError=n.EXISTING_USER_ERROR,i.invalidPasswordError=n.INVALID_PASSWORD_ERROR,i.networkError=n.NETWORK_ERROR}))}return n.prototype.ngOnInit=function(){},n.prototype.slidesDidLoad=function(n){n.startAutoplay()},n.prototype.doSignup=function(){var n=this,l=this.signupForm.value;delete l["confirm-password"],this.userService.signup(l).subscribe((function(){return o.b(n,void 0,void 0,(function(){return o.e(this,(function(n){return this.componentUtil.showToast(this.signupSuccessString,{cssClass:"toast-success"},!0),this.signupForm.reset(),[2]}))}))}),(function(l){return o.b(n,void 0,void 0,(function(){var n,u;return o.e(this,(function(t){return n=JSON.parse(l.error),u=this.signupErrorString,400===l.status&&n.type.includes("already-used")?u=this.existingUserError:400===l.status&&"error.validation"===n.message&&"password"===n.fieldErrors[0].field&&"Size"===n.fieldErrors[0].message?u=this.invalidPasswordError:"error.network"===n.message&&(u=this.networkError),this.componentUtil.showToast(u,{cssClass:"toast-fail"},!0),[2]}))}))}))},n.prototype.onOpenLogin=function(){},n}(),g=function(){return function(){}}(),c=u("pMnS"),d=u("oBZk"),p=u("A7o+"),h=u("ZYCi"),m=u("Ip0R"),f=t.rb({encapsulation:0,styles:[[".scroll-content[_ngcontent-%COMP%]{margin-top:0!important}.logo[_ngcontent-%COMP%]{width:100%;height:auto;padding-top:4vh;margin-bottom:9vh}span[_ngcontent-%COMP%]{color:#fff}.slide-background[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-repeat:no-repeat;border-color:transparent}.slide-zoom[_ngcontent-%COMP%]{background:rgba(32,32,32,.2)!important;height:100%}ion-slides[_ngcontent-%COMP%]{height:100vh}ion-item[_ngcontent-%COMP%]{color:#fff!important;padding-left:10px!important;margin-bottom:10px;background-color:transparent!important;font-size:.9em;--background:transparent;--background-focused:var(--ion-item-background-focused,var(--ion-color-step-100,transparent))}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff!important}.signup-container[_ngcontent-%COMP%]{color:#fff;position:absolute;top:0;padding:10vw;text-align:center;width:100%;margin:0 auto;z-index:2}ion-button[_ngcontent-%COMP%]{opacity:.8}.signin[_ngcontent-%COMP%]{text-align:middle;padding-top:10px}ion-footer[_ngcontent-%COMP%]{height:47px}.footer[_ngcontent-%COMP%]{text-align:center;min-height:47px}.footer-md[_ngcontent-%COMP%]::before{border-top:1px solid rgba(255,255,255,.6);background-image:none}ion-fab-button[_ngcontent-%COMP%]{margin:8px;width:40px;height:40px;line-height:40px}"]],data:{}});function C(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,61,"ion-content",[["color","dark"]],null,null,null,d.Y,d.n)),t.sb(1,49152,null,0,i.v,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.tb(2,0,null,0,59,"div",[["class","signup-container"]],null,null,null,null,null)),(n()(),t.tb(3,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo/logo-KnowMyPeople.png"]],null,null,null,null,null)),(n()(),t.tb(4,0,null,null,57,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,u){var o=!0;return"submit"===l&&(o=!1!==t.Fb(n,6).onSubmit(u)&&o),"reset"===l&&(o=!1!==t.Fb(n,6).onReset()&&o),o}),null,null)),t.sb(5,16384,null,0,r.p,[],null,null),t.sb(6,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ib(2048,null,r.a,null,[r.d]),t.sb(8,16384,null,0,r.i,[[4,r.a]],null,null),(n()(),t.tb(9,0,null,null,9,"ion-item",[],null,null,null,d.gb,d.v)),t.sb(10,49152,null,0,i.I,[t.h,t.k,t.z],null,null),(n()(),t.tb(11,0,null,0,7,"ion-input",[["formControlName","login"],["name","login"],["type","string"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var o=!0;return"ionBlur"===l&&(o=!1!==t.Fb(n,12)._handleBlurEvent(u.target)&&o),"ionChange"===l&&(o=!1!==t.Fb(n,12)._handleInputEvent(u.target)&&o),o}),d.fb,d.u)),t.sb(12,16384,null,0,i.Pb,[t.k],null,null),t.Ib(1024,null,r.f,(function(n){return[n]}),[i.Pb]),t.sb(14,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),t.Ib(2048,null,r.g,null,[r.c]),t.sb(16,16384,null,0,r.h,[[4,r.g]],null,null),t.sb(17,49152,null,0,i.H,[t.h,t.k,t.z],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),t.Hb(131072,p.i,[p.j,t.h]),(n()(),t.tb(19,0,null,null,9,"ion-item",[],null,null,null,d.gb,d.v)),t.sb(20,49152,null,0,i.I,[t.h,t.k,t.z],null,null),(n()(),t.tb(21,0,null,0,7,"ion-input",[["formControlName","email"],["name","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var o=!0;return"ionBlur"===l&&(o=!1!==t.Fb(n,22)._handleBlurEvent(u.target)&&o),"ionChange"===l&&(o=!1!==t.Fb(n,22)._handleInputEvent(u.target)&&o),o}),d.fb,d.u)),t.sb(22,16384,null,0,i.Pb,[t.k],null,null),t.Ib(1024,null,r.f,(function(n){return[n]}),[i.Pb]),t.sb(24,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),t.Ib(2048,null,r.g,null,[r.c]),t.sb(26,16384,null,0,r.h,[[4,r.g]],null,null),t.sb(27,49152,null,0,i.H,[t.h,t.k,t.z],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),t.Hb(131072,p.i,[p.j,t.h]),(n()(),t.tb(29,0,null,null,9,"ion-item",[],null,null,null,d.gb,d.v)),t.sb(30,49152,null,0,i.I,[t.h,t.k,t.z],null,null),(n()(),t.tb(31,0,null,0,7,"ion-input",[["formControlName","password"],["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var o=!0;return"ionBlur"===l&&(o=!1!==t.Fb(n,32)._handleBlurEvent(u.target)&&o),"ionChange"===l&&(o=!1!==t.Fb(n,32)._handleInputEvent(u.target)&&o),o}),d.fb,d.u)),t.sb(32,16384,null,0,i.Pb,[t.k],null,null),t.Ib(1024,null,r.f,(function(n){return[n]}),[i.Pb]),t.sb(34,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),t.Ib(2048,null,r.g,null,[r.c]),t.sb(36,16384,null,0,r.h,[[4,r.g]],null,null),t.sb(37,49152,null,0,i.H,[t.h,t.k,t.z],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),t.Hb(131072,p.i,[p.j,t.h]),(n()(),t.tb(39,0,null,null,9,"ion-item",[],null,null,null,d.gb,d.v)),t.sb(40,49152,null,0,i.I,[t.h,t.k,t.z],null,null),(n()(),t.tb(41,0,null,0,7,"ion-input",[["formControlName","confirm-password"],["name","confirm-password"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var o=!0;return"ionBlur"===l&&(o=!1!==t.Fb(n,42)._handleBlurEvent(u.target)&&o),"ionChange"===l&&(o=!1!==t.Fb(n,42)._handleInputEvent(u.target)&&o),o}),d.fb,d.u)),t.sb(42,16384,null,0,i.Pb,[t.k],null,null),t.Ib(1024,null,r.f,(function(n){return[n]}),[i.Pb]),t.sb(44,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),t.Ib(2048,null,r.g,null,[r.c]),t.sb(46,16384,null,0,r.h,[[4,r.g]],null,null),t.sb(47,49152,null,0,i.H,[t.h,t.k,t.z],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),t.Hb(131072,p.i,[p.j,t.h]),(n()(),t.tb(49,0,null,null,3,"ion-button",[["class","ion-margin"],["color","primary"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.doSignup()&&t),t}),d.O,d.d)),t.sb(50,49152,null,0,i.l,[t.h,t.k,t.z],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),t.Lb(51,0,[" ",""])),t.Hb(131072,p.i,[p.j,t.h]),(n()(),t.tb(53,0,null,null,8,"p",[["class","signin"],["color","light"],["routerLink","/login"]],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.Fb(n,54).onClick()&&o),"click"===l&&(o=!1!==t.Fb(n,55).onClick(u)&&o),o}),null,null)),t.sb(54,16384,null,0,h.o,[h.n,h.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(55,737280,null,0,i.Nb,[m.g,i.Kb,t.k,h.n,[2,h.o]],null,null),(n()(),t.Lb(56,null,[""," "])),t.Hb(131072,p.i,[p.j,t.h]),(n()(),t.tb(58,0,null,null,2,"strong",[],null,null,null,null,null)),(n()(),t.Lb(59,null,["",""])),t.Hb(131072,p.i,[p.j,t.h]),(n()(),t.Lb(-1,null,["."]))],(function(n,l){var u=l.component;n(l,1,0,"dark"),n(l,6,0,u.signupForm),n(l,14,0,"login"),n(l,17,0,"login",t.xb(1,"",t.Mb(l,17,1,t.Fb(l,18).transform("USERNAME")),""),"string"),n(l,24,0,"email"),n(l,27,0,"email",t.xb(1,"",t.Mb(l,27,1,t.Fb(l,28).transform("EMAIL")),""),"email"),n(l,34,0,"password"),n(l,37,0,"password",t.xb(1,"",t.Mb(l,37,1,t.Fb(l,38).transform("PASSWORD")),""),"password"),n(l,44,0,"confirm-password"),n(l,47,0,"confirm-password",t.xb(1,"",t.Mb(l,47,1,t.Fb(l,48).transform("CONFIRM_PASSWORD")),""),"text"),n(l,50,0,"primary",!u.signupForm.valid),n(l,54,0,"/login"),n(l,55,0)}),(function(n,l){n(l,4,0,t.Fb(l,8).ngClassUntouched,t.Fb(l,8).ngClassTouched,t.Fb(l,8).ngClassPristine,t.Fb(l,8).ngClassDirty,t.Fb(l,8).ngClassValid,t.Fb(l,8).ngClassInvalid,t.Fb(l,8).ngClassPending),n(l,11,0,t.Fb(l,16).ngClassUntouched,t.Fb(l,16).ngClassTouched,t.Fb(l,16).ngClassPristine,t.Fb(l,16).ngClassDirty,t.Fb(l,16).ngClassValid,t.Fb(l,16).ngClassInvalid,t.Fb(l,16).ngClassPending),n(l,21,0,t.Fb(l,26).ngClassUntouched,t.Fb(l,26).ngClassTouched,t.Fb(l,26).ngClassPristine,t.Fb(l,26).ngClassDirty,t.Fb(l,26).ngClassValid,t.Fb(l,26).ngClassInvalid,t.Fb(l,26).ngClassPending),n(l,31,0,t.Fb(l,36).ngClassUntouched,t.Fb(l,36).ngClassTouched,t.Fb(l,36).ngClassPristine,t.Fb(l,36).ngClassDirty,t.Fb(l,36).ngClassValid,t.Fb(l,36).ngClassInvalid,t.Fb(l,36).ngClassPending),n(l,41,0,t.Fb(l,46).ngClassUntouched,t.Fb(l,46).ngClassTouched,t.Fb(l,46).ngClassPristine,t.Fb(l,46).ngClassDirty,t.Fb(l,46).ngClassValid,t.Fb(l,46).ngClassInvalid,t.Fb(l,46).ngClassPending),n(l,51,0,t.Mb(l,51,0,t.Fb(l,52).transform("SIGNUP_BUTTON"))),n(l,56,0,t.Mb(l,56,0,t.Fb(l,57).transform("EXIST_ACCOUNT_MESSAGE"))),n(l,59,0,t.Mb(l,59,0,t.Fb(l,60).transform("LOGIN_HERE")))}))}function v(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,1,"app-signup",[],null,null,null,C,f)),t.sb(1,114688,null,0,b,[i.Kb,e.a,p.j,r.b,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var F=t.pb("app-signup",b,v,{},{},[]);u.d(l,"SignupPageModuleNgFactory",(function(){return k}));var k=t.qb(g,[],(function(n){return t.Cb([t.Db(512,t.j,t.bb,[[8,[c.a,F]],[3,t.j],t.x]),t.Db(4608,m.k,m.j,[t.u,[2,m.r]]),t.Db(4608,r.n,r.n,[]),t.Db(4608,i.b,i.b,[t.z,t.g]),t.Db(4608,i.Jb,i.Jb,[i.b,t.j,t.q]),t.Db(4608,i.Mb,i.Mb,[i.b,t.j,t.q]),t.Db(4608,r.b,r.b,[]),t.Db(1073742336,m.b,m.b,[]),t.Db(1073742336,r.m,r.m,[]),t.Db(1073742336,r.e,r.e,[]),t.Db(1073742336,i.Fb,i.Fb,[]),t.Db(1073742336,h.p,h.p,[[2,h.u],[2,h.n]]),t.Db(1073742336,p.g,p.g,[]),t.Db(1073742336,r.k,r.k,[]),t.Db(1073742336,g,g,[]),t.Db(1024,h.l,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);