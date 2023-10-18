"use strict";(self.webpackChunkegret_angular_latest_test=self.webpackChunkegret_angular_latest_test||[]).push([[747],{1747:(E,Z,a)=>{a.r(Z),a.d(Z,{AuthModule:()=>O});var v=a(8153),c=a(6814),o=a(6223),d=a(2787),x=a(2720),T=a(1365),p=a(2296),f=a(6007),h=a(8645),t=a(5879),w=a(3417),_=a(8136),b=a(2032),u=a(4170),g=a(5195),A=a(617);function y(e,i){if(1&e&&(t.TgZ(0,"mat-error",20)(1,"small",21),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.errorMsg)}}function C(e,i){1&e&&(t.TgZ(0,"mat-error",22),t._uU(1," Username is required "),t.qZA())}function F(e,i){1&e&&(t.TgZ(0,"mat-icon",23),t._uU(1,"visibility_off"),t.qZA())}function I(e,i){1&e&&(t.TgZ(0,"mat-icon",23),t._uU(1,"visibility_on"),t.qZA())}function J(e,i){1&e&&(t.TgZ(0,"mat-error",22),t._uU(1," Password is required "),t.qZA())}const U=function(){return["/auth/forgot-password"]};function q(e,i){if(1&e&&(t.TgZ(0,"mat-error",16)(1,"small",17),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.errorMsg)}}function Q(e,i){1&e&&(t.TgZ(0,"mat-error",18),t._uU(1," Email Address is required "),t.qZA())}const M=function(){return["/auth/reset-password"]},P=function(){return["/auth/signin"]};function Y(e,i){if(1&e&&(t.TgZ(0,"mat-error",22)(1,"small",23),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.errorMsg)}}function B(e,i){1&e&&(t.TgZ(0,"mat-icon",24),t._uU(1,"visibility_off"),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"mat-icon",24),t._uU(1,"visibility_on"),t.qZA())}function j(e,i){1&e&&(t.TgZ(0,"mat-icon",24),t._uU(1,"visibility_off"),t.qZA())}function G(e,i){1&e&&(t.TgZ(0,"mat-icon",24),t._uU(1,"visibility_on"),t.qZA())}function L(e,i){1&e&&(t.TgZ(0,"mat-error",25),t._uU(1," Password is required "),t.qZA())}const H=function(){return["/auth/signin"]},k=[{path:"",children:[{path:"signin",component:(()=>{class e{constructor(n,r,s,m){this.jwtAuth=n,this.egretLoader=r,this.router=s,this.route=m,this.errorMsg="",this._unsubscribeAll=new h.x}ngOnInit(){this.signinForm=new o.nJ({username:new o.p4("admin@arkenea.com",o.kI.required),password:new o.p4("Qwerty@123",o.kI.required)})}ngAfterViewInit(){this.autoSignIn()}ngOnDestroy(){this._unsubscribeAll.next(1),this._unsubscribeAll.complete()}signin(){const n=this.signinForm.value;this.submitButton.disabled=!0,this.progressBar.mode="indeterminate",this.jwtAuth.signin(n.username,n.password).subscribe(r=>{this.router.navigateByUrl(this.jwtAuth.return)},r=>{this.submitButton.disabled=!1,this.progressBar.mode="determinate",this.errorMsg=r.message})}autoSignIn(){"/"!==this.jwtAuth.return&&(this.egretLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0,20)}...`,{width:"320px"}),setTimeout(()=>{this.signin(),console.log("autoSignIn"),this.egretLoader.close()},2e3))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(w.t),t.Y36(_.P),t.Y36(d.F0),t.Y36(d.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-signin"]],viewQuery:function(n,r){if(1&n&&(t.Gf(f.pW,5),t.Gf(p.lW,5)),2&n){let s;t.iGM(s=t.CRH())&&(r.progressBar=s.first),t.iGM(s=t.CRH())&&(r.submitButton=s.first)}},decls:31,vars:12,consts:[[1,"page-wrap","h-full","slate"],[1,"session-form-hold"],[1,"!m-0"],[1,"flex","flex-col","items-center","!py-4"],["width","100px","src","assets/images/logo.svg","alt",""],[1,"fnt--24","clr--333","m-0","py-4"],["class","text-center",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-7"],["appearance","outline",1,"full-width"],["matInput","","name","username","placeholder","Username","value","",3,"formControl"],["class","form-error-msg",4,"ngIf"],[1,"mb-4"],["id","password","type","password","name","password","matInput","","placeholder","Password","value","",3,"formControl"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"disabled","click"],["class","icon-size-5",4,"ngIf"],[1,"flex","mb-4"],["href","",1,"fnt--16","clr--959595","hover:underline","text-right","full-width",3,"routerLink"],["mat-raised-button","",1,"mat-primary","full-width","mb-7",3,"disabled"],[1,"text-center"],[1,"text-red"],[1,"form-error-msg"],[1,"icon-size-5"]],template:function(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-content")(4,"div",3),t._UZ(5,"img",4),t.TgZ(6,"h2",5),t._uU(7,"Sign in to your account"),t.qZA()(),t.YNc(8,y,3,1,"mat-error",6),t.TgZ(9,"form",7),t.NdJ("ngSubmit",function(){return r.signin()}),t.TgZ(10,"div",8)(11,"mat-form-field",9)(12,"mat-label"),t._uU(13,"Username"),t.qZA(),t._UZ(14,"input",10),t.qZA(),t.YNc(15,C,2,0,"mat-error",11),t.qZA(),t.TgZ(16,"div",12)(17,"mat-form-field",9)(18,"mat-label"),t._uU(19,"Password"),t.qZA(),t._UZ(20,"input",13,14),t.TgZ(22,"button",15),t.NdJ("click",function(){t.CHM(s);const l=t.MAs(21);return t.KtG(l.type="password"===l.type?"text":"password")}),t.YNc(23,F,2,0,"mat-icon",16),t.YNc(24,I,2,0,"mat-icon",16),t.qZA()(),t.YNc(25,J,2,0,"mat-error",11),t.qZA(),t.TgZ(26,"div",17)(27,"a",18),t._uU(28," Forgot Password"),t.qZA()(),t.TgZ(29,"button",19),t._uU(30,"Sign in"),t.qZA()()()()()()}if(2&n){const s=t.MAs(21);t.xp6(8),t.Q6J("ngIf",r.errorMsg),t.xp6(1),t.Q6J("formGroup",r.signinForm),t.xp6(5),t.Q6J("formControl",r.signinForm.controls.username),t.xp6(1),t.Q6J("ngIf",r.signinForm.controls.username.hasError("required")&&r.signinForm.controls.username.touched),t.xp6(5),t.Q6J("formControl",r.signinForm.controls.password),t.xp6(2),t.Q6J("disabled",r.signinForm.disabled),t.xp6(1),t.Q6J("ngIf","password"===s.type),t.xp6(1),t.Q6J("ngIf","text"===s.type),t.xp6(1),t.Q6J("ngIf",r.signinForm.controls.password.hasError("required")&&r.signinForm.controls.password.touched),t.xp6(2),t.Q6J("routerLink",t.DdM(11,U)),t.xp6(2),t.Q6J("disabled",r.signinForm.invalid)}},dependencies:[c.O5,o._Y,o.Fj,o.JJ,o.JL,o.oH,o.sg,p.lW,p.RK,b.Nt,u.KE,u.hX,u.TO,u.R9,g.a8,g.dn,A.Hw,d.rH]}),e})()},{path:"forgot-password",component:(()=>{class e{constructor(n,r,s,m){this.jwtAuth=n,this.egretLoader=r,this.router=s,this.route=m,this.errorMsg="",this._unsubscribeAll=new h.x}ngOnInit(){this.signinForm=new o.nJ({username:new o.p4("admin@arkenea.com",o.kI.required),password:new o.p4("12345",o.kI.required)})}ngAfterViewInit(){this.autoSignIn()}ngOnDestroy(){this._unsubscribeAll.next(1),this._unsubscribeAll.complete()}signin(){const n=this.signinForm.value;this.submitButton.disabled=!0,this.progressBar.mode="indeterminate",this.jwtAuth.signin(n.username,n.password).subscribe(r=>{this.router.navigateByUrl(this.jwtAuth.return)},r=>{this.submitButton.disabled=!1,this.progressBar.mode="determinate",this.errorMsg=r.message})}autoSignIn(){"/"!==this.jwtAuth.return&&(this.egretLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0,20)}...`,{width:"320px"}),setTimeout(()=>{this.signin(),console.log("autoSignIn"),this.egretLoader.close()},2e3))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(w.t),t.Y36(_.P),t.Y36(d.F0),t.Y36(d.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-forgot-password"]],viewQuery:function(n,r){if(1&n&&(t.Gf(f.pW,5),t.Gf(p.lW,5)),2&n){let s;t.iGM(s=t.CRH())&&(r.progressBar=s.first),t.iGM(s=t.CRH())&&(r.submitButton=s.first)}},decls:23,vars:8,consts:[[1,"page-wrap","h-full","slate"],[1,"session-form-hold"],[1,"!m-0"],[1,"flex","flex-col","items-center","!py-4"],["width","100px","src","assets/images/logo.svg","alt",""],[1,"fnt--24","clr--333","m-0","py-4"],[1,"fnt--16","clr--304156","m-0","pb-4"],["class","text-center",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-7"],["appearance","outline",1,"full-width"],["matInput","","name","username","placeholder","Email Address","value","",3,"formControl"],["class","form-error-msg",4,"ngIf"],["mat-raised-button","",1,"mat-primary","full-width","mb-7",3,"routerLink"],[1,"flex","mb-4"],["href","",1,"fnt--16","clr--959595","hover:underline","text-center","full-width",3,"routerLink"],[1,"text-center"],[1,"text-red"],[1,"form-error-msg"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-content")(4,"div",3),t._UZ(5,"img",4),t.TgZ(6,"h2",5),t._uU(7,"Forgot password?"),t.qZA(),t.TgZ(8,"p",6),t._uU(9,"Enter your email address to reset the password"),t.qZA()(),t.YNc(10,q,3,1,"mat-error",7),t.TgZ(11,"form",8),t.NdJ("ngSubmit",function(){return r.signin()}),t.TgZ(12,"div",9)(13,"mat-form-field",10)(14,"mat-label"),t._uU(15,"Email Address"),t.qZA(),t._UZ(16,"input",11),t.qZA(),t.YNc(17,Q,2,0,"mat-error",12),t.qZA(),t.TgZ(18,"button",13),t._uU(19,"Send Reset Link"),t.qZA(),t.TgZ(20,"div",14)(21,"a",15),t._uU(22,"Back to Sign In"),t.qZA()()()()()()()),2&n&&(t.xp6(10),t.Q6J("ngIf",r.errorMsg),t.xp6(1),t.Q6J("formGroup",r.signinForm),t.xp6(5),t.Q6J("formControl",r.signinForm.controls.username),t.xp6(1),t.Q6J("ngIf",r.signinForm.controls.username.hasError("required")&&r.signinForm.controls.username.touched),t.xp6(1),t.Q6J("routerLink",t.DdM(6,M)),t.xp6(3),t.Q6J("routerLink",t.DdM(7,P)))},dependencies:[c.O5,o._Y,o.Fj,o.JJ,o.JL,o.oH,o.sg,p.lW,b.Nt,u.KE,u.hX,u.TO,g.a8,g.dn,d.rH]}),e})()},{path:"reset-password",component:(()=>{class e{constructor(n,r,s,m){this.jwtAuth=n,this.egretLoader=r,this.router=s,this.route=m,this.errorMsg="",this._unsubscribeAll=new h.x}ngOnInit(){this.signinForm=new o.nJ({username:new o.p4("admin@arkenea.com",o.kI.required),password:new o.p4("12345",o.kI.required)})}ngAfterViewInit(){this.autoSignIn()}ngOnDestroy(){this._unsubscribeAll.next(1),this._unsubscribeAll.complete()}signin(){const n=this.signinForm.value;this.submitButton.disabled=!0,this.progressBar.mode="indeterminate",this.jwtAuth.signin(n.username,n.password).subscribe(r=>{this.router.navigateByUrl(this.jwtAuth.return)},r=>{this.submitButton.disabled=!1,this.progressBar.mode="determinate",this.errorMsg=r.message})}autoSignIn(){"/"!==this.jwtAuth.return&&(this.egretLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0,20)}...`,{width:"320px"}),setTimeout(()=>{this.signin(),console.log("autoSignIn"),this.egretLoader.close()},2e3))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(w.t),t.Y36(_.P),t.Y36(d.F0),t.Y36(d.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-reset-password"]],viewQuery:function(n,r){if(1&n&&(t.Gf(f.pW,5),t.Gf(p.lW,5)),2&n){let s;t.iGM(s=t.CRH())&&(r.progressBar=s.first),t.iGM(s=t.CRH())&&(r.submitButton=s.first)}},decls:36,vars:14,consts:[[1,"page-wrap","h-full","slate"],[1,"session-form-hold"],[1,"!m-0"],[1,"flex","flex-col","items-center","!py-4"],["width","100px","src","assets/images/logo.svg","alt",""],[1,"fnt--24","clr--333","m-0","py-4"],[1,"fnt--16","clr--304156","m-0","pb-4"],["class","text-center",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-7"],["appearance","outline",1,"full-width"],["id","password","type","password","name","password","matInput","","placeholder","Create password","value","",3,"formControl"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"disabled","click"],["class","icon-size-5",4,"ngIf"],[1,"mb-4"],["id","password","type","password","name","password","matInput","","placeholder","Confirm password","value","",3,"formControl"],["passwordConfirmField",""],["class","form-error-msg",4,"ngIf"],["mat-raised-button","",1,"mat-primary","full-width","mb-7",3,"disabled"],[1,"flex","mb-4"],["href","",1,"fnt--16","clr--959595","hover:underline","text-center","full-width",3,"routerLink"],[1,"text-center"],[1,"text-red"],[1,"icon-size-5"],[1,"form-error-msg"]],template:function(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-content")(4,"div",3),t._UZ(5,"img",4),t.TgZ(6,"h2",5),t._uU(7,"Reset password"),t.qZA(),t.TgZ(8,"p",6),t._uU(9,"Create a new password for your account"),t.qZA()(),t.YNc(10,Y,3,1,"mat-error",7),t.TgZ(11,"form",8),t.NdJ("ngSubmit",function(){return r.signin()}),t.TgZ(12,"div",9)(13,"mat-form-field",10)(14,"mat-label"),t._uU(15,"Create password"),t.qZA(),t._UZ(16,"input",11,12),t.TgZ(18,"button",13),t.NdJ("click",function(){t.CHM(s);const l=t.MAs(17);return t.KtG(l.type="password"===l.type?"text":"password")}),t.YNc(19,B,2,0,"mat-icon",14),t.YNc(20,N,2,0,"mat-icon",14),t.qZA()()(),t.TgZ(21,"div",15)(22,"mat-form-field",10)(23,"mat-label"),t._uU(24,"Confirm password"),t.qZA(),t._UZ(25,"input",16,17),t.TgZ(27,"button",13),t.NdJ("click",function(){t.CHM(s);const l=t.MAs(26);return t.KtG(l.type="password"===l.type?"text":"password")}),t.YNc(28,j,2,0,"mat-icon",14),t.YNc(29,G,2,0,"mat-icon",14),t.qZA()(),t.YNc(30,L,2,0,"mat-error",18),t.qZA(),t.TgZ(31,"button",19),t._uU(32,"Reset Password"),t.qZA(),t.TgZ(33,"div",20)(34,"a",21),t._uU(35,"Back to Sign In"),t.qZA()()()()()()()}if(2&n){const s=t.MAs(17),m=t.MAs(26);t.xp6(10),t.Q6J("ngIf",r.errorMsg),t.xp6(1),t.Q6J("formGroup",r.signinForm),t.xp6(5),t.Q6J("formControl",r.signinForm.controls.password),t.xp6(2),t.Q6J("disabled",r.signinForm.disabled),t.xp6(1),t.Q6J("ngIf","password"===s.type),t.xp6(1),t.Q6J("ngIf","text"===s.type),t.xp6(5),t.Q6J("formControl",r.signinForm.controls.password),t.xp6(2),t.Q6J("disabled",r.signinForm.disabled),t.xp6(1),t.Q6J("ngIf","password"===m.type),t.xp6(1),t.Q6J("ngIf","text"===m.type),t.xp6(1),t.Q6J("ngIf",r.signinForm.controls.password.hasError("required")&&r.signinForm.controls.password.touched),t.xp6(1),t.Q6J("disabled",r.signinForm.invalid),t.xp6(3),t.Q6J("routerLink",t.DdM(13,H))}},dependencies:[c.O5,o._Y,o.Fj,o.JJ,o.JL,o.oH,o.sg,p.lW,p.RK,b.Nt,u.KE,u.hX,u.TO,u.R9,g.a8,g.dn,A.Hw,d.rH]}),e})()}]}];let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,o.u5,T.aw,o.UX,x.m,v.Xd,d.Bz.forChild(k)]}),e})()}}]);