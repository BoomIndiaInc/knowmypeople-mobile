(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/yGZ":function(n,l,o){"use strict";o.r(l);var u=o("8Y7J"),t=o("mrSG"),e=o("ZZ/e"),i=o("XXEo"),r=o("s7LF"),a=o("5Wfd"),s=o("RfBd"),b=o("jv8m"),g=o("/kO1"),c=o("HHnl");class d{constructor(n,l,o,u,t,e,i,b,g,c){this.translateService=n,this.loginService=l,this.navController=o,this.formBuilder=u,this.accountService=t,this.localStorage=e,this.sessionStorage=i,this.componentUtil=b,this.resolveService=g,this.kmpUserService=c,this.backgrounds=s.c,this.slideOpts=a.c,this.loginForm=u.group({username:["admin",r.l.required],password:["admin",r.l.compose([r.l.minLength(4),r.l.required])],rememberMe:[!0,r.l.required]})}ngOnInit(){this.accountService.isAuthenticated()&&this.goToHome(),this.translateService.get("LOGIN_ERROR").subscribe(n=>{this.loginErrorString=n})}slidesDidLoad(n){n.startAutoplay()}onLogin(){this.componentUtil.showLoading(()=>{this.loginService.login(this.loginForm.value).then(()=>{this.kmpUserService.identity(!0).then(n=>{this.componentUtil.hideLoading(),null!==n?this.goToHome():(this.componentUtil.showToast(this.loginErrorString,{cssClass:"toast-fail",duration:5e3,showCloseButton:!0},!0),this.componentUtil.userLogout())})},n=>t.b(this,void 0,void 0,(function*(){this.loginForm.patchValue({password:""}),this.componentUtil.showToast(this.loginErrorString,{cssClass:"toast-fail",duration:5e3,showCloseButton:!0},!0),this.componentUtil.hideLoading()})))})}goToHome(){const n=this.resolveService.getPropertyValue("default-menu-id"),l=this.componentUtil.getMenuById(n);this.navController.navigateRoot(l.url)}}class h{}var p=o("pMnS"),m=o("oBZk"),f=o("TSSN"),C=o("iInd"),v=o("SVse"),k=o("0uJq"),D=u.pb({encapsulation:0,styles:[[".scroll-content[_ngcontent-%COMP%]{margin-top:0!important}.logo[_ngcontent-%COMP%]{width:100%;height:auto;margin-bottom:9vh}span[_ngcontent-%COMP%]{color:#fff}.slide-background[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-repeat:no-repeat;border-color:transparent}.slide-zoom[_ngcontent-%COMP%]{background:rgba(32,32,32,.2)!important;height:100%}ion-slides[_ngcontent-%COMP%]{height:100vh}ion-item[_ngcontent-%COMP%]{color:#fff!important;padding-left:10px!important;margin-bottom:10px;background-color:transparent!important;font-size:.9em;--background:transparent;--background-focused:var(--ion-item-background-focused,var(--ion-color-step-100,transparent))}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff!important}.login-container[_ngcontent-%COMP%]{color:#fff;position:absolute;top:0;padding:10vw;text-align:center;width:100%;margin:0 auto;z-index:2}ion-button[_ngcontent-%COMP%]{opacity:.8}.forgot-password[_ngcontent-%COMP%]{text-align:right}.signup[_ngcontent-%COMP%]{text-align:center;padding-top:10px}ion-footer[_ngcontent-%COMP%]{height:47px}.footer[_ngcontent-%COMP%]{text-align:center;min-height:47px}.footer-md[_ngcontent-%COMP%]::before{border-top:1px solid rgba(255,255,255,.6);background-image:none}"]],data:{}});function B(n){return u.Lb(0,[(n()(),u.rb(0,0,null,null,60,"ion-content",[["color","dark"]],null,null,null,m.Y,m.n)),u.qb(1,49152,null,0,e.v,[u.h,u.k,u.x],{color:[0,"color"]},null),(n()(),u.rb(2,0,null,0,58,"div",[["class","login-container"]],null,null,null,null,null)),(n()(),u.rb(3,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo/logo-KnowMyPeople.png"]],null,null,null,null,null)),(n()(),u.rb(4,0,null,null,56,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,o){var t=!0;return"submit"===l&&(t=!1!==u.Db(n,6).onSubmit(o)&&t),"reset"===l&&(t=!1!==u.Db(n,6).onReset()&&t),t}),null,null)),u.qb(5,16384,null,0,r.p,[],null,null),u.qb(6,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},null),u.Gb(2048,null,r.a,null,[r.d]),u.qb(8,16384,null,0,r.i,[[4,r.a]],null,null),(n()(),u.rb(9,0,null,null,9,"ion-item",[],null,null,null,m.gb,m.v)),u.qb(10,49152,null,0,e.I,[u.h,u.k,u.x],null,null),(n()(),u.rb(11,0,null,0,7,"ion-input",[["formControlName","username"],["name","username"],["type","string"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==u.Db(n,12)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==u.Db(n,12)._handleInputEvent(o.target)&&t),t}),m.fb,m.u)),u.qb(12,16384,null,0,e.Pb,[u.k],null,null),u.Gb(1024,null,r.f,(function(n){return[n]}),[e.Pb]),u.qb(14,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),u.Gb(2048,null,r.g,null,[r.c]),u.qb(16,16384,null,0,r.h,[[4,r.g]],null,null),u.qb(17,49152,null,0,e.H,[u.h,u.k,u.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),u.Fb(131072,f.i,[f.j,u.h]),(n()(),u.rb(19,0,null,null,9,"ion-item",[],null,null,null,m.gb,m.v)),u.qb(20,49152,null,0,e.I,[u.h,u.k,u.x],null,null),(n()(),u.rb(21,0,null,0,7,"ion-input",[["formControlName","password"],["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==u.Db(n,22)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==u.Db(n,22)._handleInputEvent(o.target)&&t),t}),m.fb,m.u)),u.qb(22,16384,null,0,e.Pb,[u.k],null,null),u.Gb(1024,null,r.f,(function(n){return[n]}),[e.Pb]),u.qb(24,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),u.Gb(2048,null,r.g,null,[r.c]),u.qb(26,16384,null,0,r.h,[[4,r.g]],null,null),u.qb(27,49152,null,0,e.H,[u.h,u.k,u.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),u.Fb(131072,f.i,[f.j,u.h]),(n()(),u.rb(29,0,null,null,12,"ion-item",[],null,null,null,m.gb,m.v)),u.qb(30,49152,null,0,e.I,[u.h,u.k,u.x],null,null),(n()(),u.rb(31,0,null,0,3,"ion-label",[],null,null,null,m.hb,m.w)),u.qb(32,49152,null,0,e.O,[u.h,u.k,u.x],null,null),(n()(),u.Jb(33,0,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(n()(),u.rb(35,0,null,0,6,"ion-toggle",[["formControlName","rememberMe"],["name","rememberMe"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==u.Db(n,36)._handleBlurEvent(o.target)&&t),"ionChange"===l&&(t=!1!==u.Db(n,36)._handleIonChange(o.target)&&t),t}),m.ub,m.J)),u.qb(36,16384,null,0,e.c,[u.k],null,null),u.Gb(1024,null,r.f,(function(n){return[n]}),[e.c]),u.qb(38,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),u.Gb(2048,null,r.g,null,[r.c]),u.qb(40,16384,null,0,r.h,[[4,r.g]],null,null),u.qb(41,49152,null,0,e.Cb,[u.h,u.k,u.x],{name:[0,"name"]},null),(n()(),u.rb(42,0,null,null,3,"ion-button",[["class","ion-margin"],["color","primary"]],null,[[null,"click"]],(function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.onLogin()&&u),u}),m.O,m.d)),u.qb(43,49152,null,0,e.l,[u.h,u.k,u.x],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),u.Jb(44,0,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(n()(),u.rb(46,0,null,null,5,"p",[["class","forgot-password"],["routerLink","/forgot-password"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==u.Db(n,47).onClick()&&t),"click"===l&&(t=!1!==u.Db(n,48).onClick(o)&&t),t}),null,null)),u.qb(47,16384,null,0,C.o,[C.n,C.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.qb(48,737280,null,0,e.Nb,[v.g,e.Kb,u.k,C.n,[2,C.o]],null,null),(n()(),u.rb(49,0,null,null,2,"strong",[],null,null,null,null,null)),(n()(),u.Jb(50,null,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(n()(),u.rb(52,0,null,null,8,"p",[["class","signup"],["color","light"],["routerLink","/signup"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==u.Db(n,53).onClick()&&t),"click"===l&&(t=!1!==u.Db(n,54).onClick(o)&&t),t}),null,null)),u.qb(53,16384,null,0,C.o,[C.n,C.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.qb(54,737280,null,0,e.Nb,[v.g,e.Kb,u.k,C.n,[2,C.o]],null,null),(n()(),u.Jb(55,null,[""," "])),u.Fb(131072,f.i,[f.j,u.h]),(n()(),u.rb(57,0,null,null,2,"strong",[],null,null,null,null,null)),(n()(),u.Jb(58,null,["",""])),u.Fb(131072,f.i,[f.j,u.h]),(n()(),u.Jb(-1,null,["."]))],(function(n,l){var o=l.component;n(l,1,0,"dark"),n(l,6,0,o.loginForm),n(l,14,0,"username"),n(l,17,0,"username",u.vb(1,"",u.Kb(l,17,1,u.Db(l,18).transform("USERNAME")),""),"string"),n(l,24,0,"password"),n(l,27,0,"password",u.vb(1,"",u.Kb(l,27,1,u.Db(l,28).transform("PASSWORD")),""),"password"),n(l,38,0,"rememberMe"),n(l,41,0,"rememberMe"),n(l,43,0,"primary",!o.loginForm.valid),n(l,47,0,"/forgot-password"),n(l,48,0),n(l,53,0,"/signup"),n(l,54,0)}),(function(n,l){n(l,4,0,u.Db(l,8).ngClassUntouched,u.Db(l,8).ngClassTouched,u.Db(l,8).ngClassPristine,u.Db(l,8).ngClassDirty,u.Db(l,8).ngClassValid,u.Db(l,8).ngClassInvalid,u.Db(l,8).ngClassPending),n(l,11,0,u.Db(l,16).ngClassUntouched,u.Db(l,16).ngClassTouched,u.Db(l,16).ngClassPristine,u.Db(l,16).ngClassDirty,u.Db(l,16).ngClassValid,u.Db(l,16).ngClassInvalid,u.Db(l,16).ngClassPending),n(l,21,0,u.Db(l,26).ngClassUntouched,u.Db(l,26).ngClassTouched,u.Db(l,26).ngClassPristine,u.Db(l,26).ngClassDirty,u.Db(l,26).ngClassValid,u.Db(l,26).ngClassInvalid,u.Db(l,26).ngClassPending),n(l,33,0,u.Kb(l,33,0,u.Db(l,34).transform("REMEMBER_ME"))),n(l,35,0,u.Db(l,40).ngClassUntouched,u.Db(l,40).ngClassTouched,u.Db(l,40).ngClassPristine,u.Db(l,40).ngClassDirty,u.Db(l,40).ngClassValid,u.Db(l,40).ngClassInvalid,u.Db(l,40).ngClassPending),n(l,44,0,u.Kb(l,44,0,u.Db(l,45).transform("LOGIN_BUTTON"))),n(l,50,0,u.Kb(l,50,0,u.Db(l,51).transform("FORGOT_YOUR_PASSWORD"))),n(l,55,0,u.Kb(l,55,0,u.Db(l,56).transform("NO_ACCOUNT_MESSAGE"))),n(l,58,0,u.Kb(l,58,0,u.Db(l,59).transform("SIGNUP_HERE")))}))}function P(n){return u.Lb(0,[(n()(),u.rb(0,0,null,null,1,"app-login",[],null,null,null,B,D)),u.qb(1,114688,null,0,d,[f.j,i.a,e.Kb,r.b,b.a,k.d,k.i,a.a,g.a,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}var M=u.nb("app-login",d,P,{},{},[]);o.d(l,"LoginPageModuleNgFactory",(function(){return O}));var O=u.ob(h,[],(function(n){return u.Ab([u.Bb(512,u.j,u.Z,[[8,[p.a,M]],[3,u.j],u.v]),u.Bb(4608,v.k,v.j,[u.s,[2,v.r]]),u.Bb(4608,r.n,r.n,[]),u.Bb(4608,e.b,e.b,[u.x,u.g]),u.Bb(4608,e.Jb,e.Jb,[e.b,u.j,u.p]),u.Bb(4608,e.Mb,e.Mb,[e.b,u.j,u.p]),u.Bb(4608,r.b,r.b,[]),u.Bb(1073742336,v.b,v.b,[]),u.Bb(1073742336,r.m,r.m,[]),u.Bb(1073742336,r.e,r.e,[]),u.Bb(1073742336,e.Fb,e.Fb,[]),u.Bb(1073742336,C.p,C.p,[[2,C.u],[2,C.n]]),u.Bb(1073742336,f.g,f.g,[]),u.Bb(1073742336,r.k,r.k,[]),u.Bb(1073742336,h,h,[]),u.Bb(1024,C.l,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);