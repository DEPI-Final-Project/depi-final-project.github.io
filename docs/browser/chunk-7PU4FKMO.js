import{a as M,b as N,c as w,d as x,e as E,f as F,g as T,h as V,i as j}from"./chunk-KGJR7JA6.js";import{l as I}from"./chunk-S3FBWAZS.js";import{E as p,Ka as r,La as f,R as u,Ya as g,_a as s,aa as c,cb as n,db as i,eb as y,kb as b,lb as h,n as d,ob as m,pb as v,rb as P,sb as S,tb as _,vb as C}from"./chunk-V2OZTUYM.js";var A=(()=>{class e{constructor(){}processPayment(t){return d({success:!0,message:"Payment processed successfully!"}).pipe(p(2e3))}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function B(e,D){e&1&&(n(0,"div",11),m(1,"Processing payment..."),i())}function G(e,D){if(e&1&&(n(0,"div",12),m(1),i()),e&2){let t=h();r(),v(t.message)}}var J=(()=>{class e{constructor(t){this.paymentService=t,this.amount=0,this.message="",this.loading=!1}submitPayment(){this.loading=!0,this.paymentService.processPayment(this.amount).subscribe(t=>{this.loading=!1,this.message=t.message})}static{this.\u0275fac=function(a){return new(a||e)(f(A))}}static{this.\u0275cmp=c({type:e,selectors:[["app-payment"]],standalone:!0,features:[C],decls:17,vars:4,consts:[[1,"container","mt-4"],[1,"mb-4"],[3,"ngSubmit"],[1,"mb-3"],["for","amount",1,"form-label"],["type","number","id","amount","name","amount","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-warning",3,"disabled"],["class","mt-3",4,"ngIf"],["class","mt-3 alert alert-info",4,"ngIf"],[1,"border-secondary-subtle","mb-4"],[1,"border-warning-subtle","mb-4"],[1,"mt-3"],[1,"mt-3","alert","alert-info"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"h2",1),m(2,"Payment "),i(),n(3,"form",2),b("ngSubmit",function(){return o.submitPayment()}),n(4,"div",3)(5,"label",4),m(6,"Amount:"),i(),n(7,"input",5),_("ngModelChange",function(l){return S(o.amount,l)||(o.amount=l),l}),i()(),n(8,"button",6),m(9,"Pay"),i()(),g(10,B,2,0,"div",7)(11,G,2,1,"div",8),y(12,"hr",9)(13,"hr",10)(14,"hr",10)(15,"hr",9)(16,"hr",10),i()),a&2&&(r(7),P("ngModel",o.amount),r(),s("disabled",o.loading),r(2),s("ngIf",o.loading),r(),s("ngIf",o.message))},dependencies:[I,j,F,M,T,N,w,V,E,x],styles:[".alert[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return e})();export{J as PaymentComponent};
