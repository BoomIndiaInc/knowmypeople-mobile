(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/yGZ":function(n,l,o){"use strict";o.r(l);var t=o("8Y7J"),u=o("mrSG"),e=o("ZZ/e"),r=o("XXEo"),i=o("s7LF"),a=o("5Wfd"),s=o("RfBd"),b=o("jv8m"),g=o("/kO1"),c=o("HHnl");class d{constructor(n,l,o,t,u,e,r,b,g,c){this.translateService=n,this.loginService=l,this.navController=o,this.formBuilder=t,this.accountService=u,this.localStorage=e,this.sessionStorage=r,this.componentUtil=b,this.resolveService=g,this.kmpUserService=c,this.backgrounds=s.c,this.slideOpts=a.c,this.loginForm=t.group({username:["test",i.l.required],password:["test",i.l.compose([i.l.minLength(4),i.l.required])],rememberMe:[!0,i.l.required]})}ngOnInit(){this.accountService.isAuthenticated()&&this.goToHome(),this.translateService.get("LOGIN_ERROR").subscribe(n=>{this.loginErrorString=n})}slidesDidLoad(n){n.startAutoplay()}onLogin(){this.componentUtil.showLoading(()=>{this.loginService.login(this.loginForm.value).then(n=>{null!==n?(this.componentUtil.hideLoading(),this.goToHome()):(this.componentUtil.hideLoading(),this.componentUtil.showToast(this.loginErrorString,{cssClass:"toast-fail",duration:5e3,showCloseButton:!0},!0),this.componentUtil.userLogout())},n=>u.b(this,void 0,void 0,(function*(){this.loginForm.patchValue({password:""}),this.componentUtil.showToast(this.loginErrorString,{cssClass:"toast-fail",duration:5e3,showCloseButton:!0},!0),this.componentUtil.hideLoading()})))})}goToHome(){const n=this.resolveService.getPropertyValue("default-menu-id"),l=this.componentUtil.getMenuById(n);this.navController.navigateRoot(l.url)}}class h{}var p=o("pMnS"),m=o("oBZk"),f=o("TSSN"),C=o("iInd"),k=o("SVse"),v=o("0uJq"),D=t.pb({encapsulation:0,styles:[[".scroll-content[_ngcontent-%COMP%]{margin-top:0!important}.logo[_ngcontent-%COMP%]{width:100%;height:auto;margin-bottom:9vh}span[_ngcontent-%COMP%]{color:#fff}.slide-background[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-repeat:no-repeat;border-color:transparent}.slide-zoom[_ngcontent-%COMP%]{background:rgba(32,32,32,.2)!important;height:100%}ion-slides[_ngcontent-%COMP%]{height:100vh}ion-item[_ngcontent-%COMP%]{color:#fff!important;padding-left:10px!important;margin-bottom:10px;background-color:transparent!important;font-size:.9em;--background:transparent;--background-focused:var(--ion-item-background-focused,var(--ion-color-step-100,transparent))}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff!important}.login-container[_ngcontent-%COMP%]{color:#fff;position:absolute;top:0;padding:10vw;text-align:center;width:100%;margin:0 auto;z-index:2}ion-button[_ngcontent-%COMP%]{opacity:.8}.forgot-password[_ngcontent-%COMP%]{text-align:right}.signup[_ngcontent-%COMP%]{text-align:center;padding-top:10px}ion-footer[_ngcontent-%COMP%]{height:47px}.footer[_ngcontent-%COMP%]{text-align:center;min-height:47px}.footer-md[_ngcontent-%COMP%]::before{border-top:1px solid rgba(255,255,255,.6);background-image:none}"]],data:{}});function B(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,60,"ion-content",[["color","dark"]],null,null,null,m.ab,m.n)),t.qb(1,49152,null,0,e.w,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.rb(2,0,null,0,58,"div",[["class","login-container"]],null,null,null,null,null)),(n()(),t.rb(3,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo/logo-KnowMyPeople.png"]],null,null,null,null,null)),(n()(),t.rb(4,0,null,null,56,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,o){var u=!0;return"submit"===l&&(u=!1!==t.Db(n,6).onSubmit(o)&&u),"reset"===l&&(u=!1!==t.Db(n,6).onReset()&&u),u}),null,null)),t.qb(5,16384,null,0,i.p,[],null,null),t.qb(6,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},null),t.Gb(2048,null,i.a,null,[i.d]),t.qb(8,16384,null,0,i.i,[[4,i.a]],null,null),(n()(),t.rb(9,0,null,null,9,"ion-item",[],null,null,null,m.kb,m.x)),t.qb(10,49152,null,0,e.J,[t.h,t.k,t.x],null,null),(n()(),t.rb(11,0,null,0,7,"ion-input",[["formControlName","username"],["name","username"],["type","string"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var u=!0;return"ionBlur"===l&&(u=!1!==t.Db(n,12)._handleBlurEvent(o.target)&&u),"ionChange"===l&&(u=!1!==t.Db(n,12)._handleInputEvent(o.target)&&u),u}),m.jb,m.w)),t.qb(12,16384,null,0,e.Qb,[t.k],null,null),t.Gb(1024,null,i.f,(function(n){return[n]}),[e.Qb]),t.qb(14,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.f],[2,i.o]],{name:[0,"name"]},null),t.Gb(2048,null,i.g,null,[i.c]),t.qb(16,16384,null,0,i.h,[[4,i.g]],null,null),t.qb(17,49152,null,0,e.I,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),t.Fb(131072,f.i,[f.j,t.h]),(n()(),t.rb(19,0,null,null,9,"ion-item",[],null,null,null,m.kb,m.x)),t.qb(20,49152,null,0,e.J,[t.h,t.k,t.x],null,null),(n()(),t.rb(21,0,null,0,7,"ion-input",[["formControlName","password"],["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var u=!0;return"ionBlur"===l&&(u=!1!==t.Db(n,22)._handleBlurEvent(o.target)&&u),"ionChange"===l&&(u=!1!==t.Db(n,22)._handleInputEvent(o.target)&&u),u}),m.jb,m.w)),t.qb(22,16384,null,0,e.Qb,[t.k],null,null),t.Gb(1024,null,i.f,(function(n){return[n]}),[e.Qb]),t.qb(24,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.f],[2,i.o]],{name:[0,"name"]},null),t.Gb(2048,null,i.g,null,[i.c]),t.qb(26,16384,null,0,i.h,[[4,i.g]],null,null),t.qb(27,49152,null,0,e.I,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),t.Fb(131072,f.i,[f.j,t.h]),(n()(),t.rb(29,0,null,null,12,"ion-item",[],null,null,null,m.kb,m.x)),t.qb(30,49152,null,0,e.J,[t.h,t.k,t.x],null,null),(n()(),t.rb(31,0,null,0,3,"ion-label",[],null,null,null,m.lb,m.y)),t.qb(32,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(n()(),t.Jb(33,0,["",""])),t.Fb(131072,f.i,[f.j,t.h]),(n()(),t.rb(35,0,null,0,6,"ion-toggle",[["formControlName","rememberMe"],["name","rememberMe"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var u=!0;return"ionBlur"===l&&(u=!1!==t.Db(n,36)._handleBlurEvent(o.target)&&u),"ionChange"===l&&(u=!1!==t.Db(n,36)._handleIonChange(o.target)&&u),u}),m.yb,m.L)),t.qb(36,16384,null,0,e.d,[t.k],null,null),t.Gb(1024,null,i.f,(function(n){return[n]}),[e.d]),t.qb(38,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.f],[2,i.o]],{name:[0,"name"]},null),t.Gb(2048,null,i.g,null,[i.c]),t.qb(40,16384,null,0,i.h,[[4,i.g]],null,null),t.qb(41,49152,null,0,e.Db,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.rb(42,0,null,null,3,"ion-button",[["class","ion-margin"],["color","primary"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.onLogin()&&t),t}),m.Q,m.d)),t.qb(43,49152,null,0,e.m,[t.h,t.k,t.x],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),t.Jb(44,0,["",""])),t.Fb(131072,f.i,[f.j,t.h]),(n()(),t.rb(46,0,null,null,5,"p",[["class","forgot-password"],["color","secondary"],["routerLink","/forgot-password"]],null,[[null,"click"]],(function(n,l,o){var u=!0;return"click"===l&&(u=!1!==t.Db(n,47).onClick()&&u),"click"===l&&(u=!1!==t.Db(n,48).onClick(o)&&u),u}),null,null)),t.qb(47,16384,null,0,C.o,[C.n,C.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.qb(48,737280,null,0,e.Ob,[k.g,e.Lb,t.k,C.n,[2,C.o]],null,null),(n()(),t.rb(49,0,null,null,2,"strong",[],null,null,null,null,null)),(n()(),t.Jb(50,null,["",""])),t.Fb(131072,f.i,[f.j,t.h]),(n()(),t.rb(52,0,null,null,8,"p",[["class","signup"],["color","light"],["routerLink","/signup"]],null,[[null,"click"]],(function(n,l,o){var u=!0;return"click"===l&&(u=!1!==t.Db(n,53).onClick()&&u),"click"===l&&(u=!1!==t.Db(n,54).onClick(o)&&u),u}),null,null)),t.qb(53,16384,null,0,C.o,[C.n,C.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.qb(54,737280,null,0,e.Ob,[k.g,e.Lb,t.k,C.n,[2,C.o]],null,null),(n()(),t.Jb(55,null,[""," "])),t.Fb(131072,f.i,[f.j,t.h]),(n()(),t.rb(57,0,null,null,2,"strong",[],null,null,null,null,null)),(n()(),t.Jb(58,null,["",""])),t.Fb(131072,f.i,[f.j,t.h]),(n()(),t.Jb(-1,null,["."]))],(function(n,l){var o=l.component;n(l,1,0,"dark"),n(l,6,0,o.loginForm),n(l,14,0,"username"),n(l,17,0,"username",t.vb(1,"",t.Kb(l,17,1,t.Db(l,18).transform("USERNAME")),""),"string"),n(l,24,0,"password"),n(l,27,0,"password",t.vb(1,"",t.Kb(l,27,1,t.Db(l,28).transform("PASSWORD")),""),"password"),n(l,38,0,"rememberMe"),n(l,41,0,"rememberMe"),n(l,43,0,"primary",!o.loginForm.valid),n(l,47,0,"/forgot-password"),n(l,48,0),n(l,53,0,"/signup"),n(l,54,0)}),(function(n,l){n(l,4,0,t.Db(l,8).ngClassUntouched,t.Db(l,8).ngClassTouched,t.Db(l,8).ngClassPristine,t.Db(l,8).ngClassDirty,t.Db(l,8).ngClassValid,t.Db(l,8).ngClassInvalid,t.Db(l,8).ngClassPending),n(l,11,0,t.Db(l,16).ngClassUntouched,t.Db(l,16).ngClassTouched,t.Db(l,16).ngClassPristine,t.Db(l,16).ngClassDirty,t.Db(l,16).ngClassValid,t.Db(l,16).ngClassInvalid,t.Db(l,16).ngClassPending),n(l,21,0,t.Db(l,26).ngClassUntouched,t.Db(l,26).ngClassTouched,t.Db(l,26).ngClassPristine,t.Db(l,26).ngClassDirty,t.Db(l,26).ngClassValid,t.Db(l,26).ngClassInvalid,t.Db(l,26).ngClassPending),n(l,33,0,t.Kb(l,33,0,t.Db(l,34).transform("REMEMBER_ME"))),n(l,35,0,t.Db(l,40).ngClassUntouched,t.Db(l,40).ngClassTouched,t.Db(l,40).ngClassPristine,t.Db(l,40).ngClassDirty,t.Db(l,40).ngClassValid,t.Db(l,40).ngClassInvalid,t.Db(l,40).ngClassPending),n(l,44,0,t.Kb(l,44,0,t.Db(l,45).transform("LOGIN_BUTTON"))),n(l,50,0,t.Kb(l,50,0,t.Db(l,51).transform("FORGOT_YOUR_PASSWORD"))),n(l,55,0,t.Kb(l,55,0,t.Db(l,56).transform("NO_ACCOUNT_MESSAGE"))),n(l,58,0,t.Kb(l,58,0,t.Db(l,59).transform("SIGNUP_HERE")))}))}function w(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,1,"app-login",[],null,null,null,B,D)),t.qb(1,114688,null,0,d,[f.j,r.a,e.Lb,i.b,b.a,v.d,v.i,a.a,g.a,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}var O=t.nb("app-login",d,w,{},{},[]);o.d(l,"LoginPageModuleNgFactory",(function(){return q}));var q=t.ob(h,[],(function(n){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[p.a,O]],[3,t.j],t.v]),t.Bb(4608,k.k,k.j,[t.s,[2,k.r]]),t.Bb(4608,i.n,i.n,[]),t.Bb(4608,e.c,e.c,[t.x,t.g]),t.Bb(4608,e.Kb,e.Kb,[e.c,t.j,t.p]),t.Bb(4608,e.Nb,e.Nb,[e.c,t.j,t.p]),t.Bb(4608,i.b,i.b,[]),t.Bb(1073742336,k.b,k.b,[]),t.Bb(1073742336,i.m,i.m,[]),t.Bb(1073742336,i.e,i.e,[]),t.Bb(1073742336,e.Gb,e.Gb,[]),t.Bb(1073742336,C.p,C.p,[[2,C.u],[2,C.n]]),t.Bb(1073742336,f.g,f.g,[]),t.Bb(1073742336,i.k,i.k,[]),t.Bb(1073742336,h,h,[]),t.Bb(1024,C.l,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);