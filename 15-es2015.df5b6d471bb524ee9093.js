(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Kgah:function(n,l,o){"use strict";o.r(l);var t=o("8Y7J"),r=o("mrSG"),e=o("ZZ/e"),i=o("CFL1"),u=o("s7LF"),s=o("5Wfd"),a=o("RfBd");class b{constructor(n,l,o,t,r,e){this.navController=n,this.userService=l,this.toastController=o,this.translateService=t,this.formBuilder=r,this.componentUtil=e,this.backgrounds=a.b,this.slideOpts=s.c,this.forgotPasswordForm=r.group({email:["",u.l.compose([u.l.required,u.l.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])]}),this.translateService.get(["FORGOT_PASSWORD_ERROR","FORGOT_PASSWORD_SUCCESS","NETWORK_ERROR"]).subscribe(n=>{this.forgotPasswordErrorString=n.FORGOT_PASSWORD_ERROR,this.forgotPasswordSuccessString=n.FORGOT_PASSWORD_SUCCESS,this.networkError=n.NETWORK_ERROR})}ngOnInit(){}slidesDidLoad(n){n.startAutoplay()}doResetPassword(){this.userService.forgotPassword(this.forgotPasswordForm.value.email).subscribe(()=>r.b(this,void 0,void 0,(function*(){this.componentUtil.showToast(this.forgotPasswordSuccessString,{cssClass:"toast-success"},!0),this.forgotPasswordForm.reset()})),n=>r.b(this,void 0,void 0,(function*(){const l=JSON.parse(n.error);let o=this.forgotPasswordErrorString;"error.network"===l.message&&(o=this.networkError),this.componentUtil.showToast(o,{cssClass:"toast-fail"},!0)})))}}class c{}var g=o("pMnS"),d=o("oBZk"),p=o("iInd"),h=o("SVse"),m=o("TSSN"),f=t.pb({encapsulation:0,styles:[[".scroll-content[_ngcontent-%COMP%]{margin-top:0!important}.logo[_ngcontent-%COMP%]{width:100%;height:auto;padding-top:9vh;margin-bottom:9vh}span[_ngcontent-%COMP%]{color:#fff}.slide-background[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-repeat:no-repeat;border-color:transparent}.slide-zoom[_ngcontent-%COMP%]{background:rgba(32,32,32,.2)!important;height:100%}ion-slides[_ngcontent-%COMP%]{height:100vh}ion-item[_ngcontent-%COMP%]{color:#fff!important;padding-left:10px!important;margin-bottom:10px;background-color:transparent!important;font-size:.9em;--background:transparent;--background-focused:var(--ion-item-background-focused, var(--ion-color-step-100, transparent))}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff!important}.forgot-password-container[_ngcontent-%COMP%]{color:#fff;position:absolute;top:0;padding:10vw;text-align:center;width:100%;margin:0 auto;z-index:2}ion-button[_ngcontent-%COMP%]{opacity:.8}.forgot-password[_ngcontent-%COMP%]{text-align:right}ion-footer[_ngcontent-%COMP%]{height:47px}.footer[_ngcontent-%COMP%]{text-align:center;min-height:47px}.footer-md[_ngcontent-%COMP%]::before{border-top:1px solid rgba(255,255,255,.6);background-image:none}ion-fab-button[_ngcontent-%COMP%]{margin:8px;width:40px;height:40px;line-height:40px}"]],data:{}});function k(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,30,"ion-content",[["color","dark"]],null,null,null,d.ab,d.n)),t.qb(1,49152,null,0,e.w,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.rb(2,0,null,0,7,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","top"]],null,null,null,d.cb,d.o)),t.qb(3,49152,null,0,e.y,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t.rb(4,0,null,0,5,"ion-fab-button",[["routerLink","/login"]],null,[[null,"click"]],(function(n,l,o){var r=!0;return"click"===l&&(r=!1!==t.Db(n,6).onClick()&&r),"click"===l&&(r=!1!==t.Db(n,7).onClick(o)&&r),r}),d.bb,d.p)),t.qb(5,49152,null,0,e.z,[t.h,t.k,t.x],null,null),t.qb(6,16384,null,0,p.o,[p.n,p.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.qb(7,737280,null,0,e.Ob,[h.g,e.Lb,t.k,p.n,[2,p.o]],null,null),(n()(),t.rb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,d.gb,d.t)),t.qb(9,49152,null,0,e.E,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.rb(10,0,null,0,20,"div",[["class","forgot-password-container"]],null,null,null,null,null)),(n()(),t.rb(11,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo/logo-KnowMyPeople.png"]],null,null,null,null,null)),(n()(),t.rb(12,0,null,null,18,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,o){var r=!0;return"submit"===l&&(r=!1!==t.Db(n,14).onSubmit(o)&&r),"reset"===l&&(r=!1!==t.Db(n,14).onReset()&&r),r}),null,null)),t.qb(13,16384,null,0,u.p,[],null,null),t.qb(14,540672,null,0,u.d,[[8,null],[8,null]],{form:[0,"form"]},null),t.Gb(2048,null,u.a,null,[u.d]),t.qb(16,16384,null,0,u.i,[[4,u.a]],null,null),(n()(),t.rb(17,0,null,null,9,"ion-item",[],null,null,null,d.kb,d.x)),t.qb(18,49152,null,0,e.J,[t.h,t.k,t.x],null,null),(n()(),t.rb(19,0,null,0,7,"ion-input",[["formControlName","email"],["name","email"],["type","string"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var r=!0;return"ionBlur"===l&&(r=!1!==t.Db(n,20)._handleBlurEvent(o.target)&&r),"ionChange"===l&&(r=!1!==t.Db(n,20)._handleInputEvent(o.target)&&r),r}),d.jb,d.w)),t.qb(20,16384,null,0,e.Qb,[t.k],null,null),t.Gb(1024,null,u.f,(function(n){return[n]}),[e.Qb]),t.qb(22,671744,null,0,u.c,[[3,u.a],[8,null],[8,null],[6,u.f],[2,u.o]],{name:[0,"name"]},null),t.Gb(2048,null,u.g,null,[u.c]),t.qb(24,16384,null,0,u.h,[[4,u.g]],null,null),t.qb(25,49152,null,0,e.I,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),t.Fb(131072,m.i,[m.j,t.h]),(n()(),t.rb(27,0,null,null,3,"ion-button",[["class","ion-margin"],["color","primary"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.doResetPassword()&&t),t}),d.Q,d.d)),t.qb(28,49152,null,0,e.m,[t.h,t.k,t.x],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),t.Jb(29,0,["",""])),t.Fb(131072,m.i,[m.j,t.h])],(function(n,l){var o=l.component;n(l,1,0,"dark"),n(l,3,0,"start","top"),n(l,6,0,"/login"),n(l,7,0),n(l,9,0,"close"),n(l,14,0,o.forgotPasswordForm),n(l,22,0,"email"),n(l,25,0,"email",t.vb(1,"",t.Kb(l,25,1,t.Db(l,26).transform("EMAIL")),""),"string"),n(l,28,0,"primary",!o.forgotPasswordForm.valid)}),(function(n,l){n(l,12,0,t.Db(l,16).ngClassUntouched,t.Db(l,16).ngClassTouched,t.Db(l,16).ngClassPristine,t.Db(l,16).ngClassDirty,t.Db(l,16).ngClassValid,t.Db(l,16).ngClassInvalid,t.Db(l,16).ngClassPending),n(l,19,0,t.Db(l,24).ngClassUntouched,t.Db(l,24).ngClassTouched,t.Db(l,24).ngClassPristine,t.Db(l,24).ngClassDirty,t.Db(l,24).ngClassValid,t.Db(l,24).ngClassInvalid,t.Db(l,24).ngClassPending),n(l,29,0,t.Kb(l,29,0,t.Db(l,30).transform("RESET_PASSWORD")))}))}function C(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,1,"app-forgot-password",[],null,null,null,k,f)),t.qb(1,114688,null,0,b,[e.Lb,i.a,e.Rb,m.j,u.b,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var v=t.nb("app-forgot-password",b,C,{},{},[]);o.d(l,"ForgotPasswordPageModuleNgFactory",(function(){return P}));var P=t.ob(c,[],(function(n){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[g.a,v]],[3,t.j],t.v]),t.Bb(4608,h.k,h.j,[t.s,[2,h.r]]),t.Bb(4608,u.n,u.n,[]),t.Bb(4608,e.c,e.c,[t.x,t.g]),t.Bb(4608,e.Kb,e.Kb,[e.c,t.j,t.p]),t.Bb(4608,e.Nb,e.Nb,[e.c,t.j,t.p]),t.Bb(4608,u.b,u.b,[]),t.Bb(1073742336,h.b,h.b,[]),t.Bb(1073742336,u.m,u.m,[]),t.Bb(1073742336,u.e,u.e,[]),t.Bb(1073742336,e.Gb,e.Gb,[]),t.Bb(1073742336,m.g,m.g,[]),t.Bb(1073742336,p.p,p.p,[[2,p.u],[2,p.n]]),t.Bb(1073742336,u.k,u.k,[]),t.Bb(1073742336,c,c,[]),t.Bb(1024,p.l,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);