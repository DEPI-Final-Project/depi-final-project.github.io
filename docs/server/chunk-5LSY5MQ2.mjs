import './polyfills.server.mjs';
import{a as D}from"./chunk-N2XA773L.mjs";import{a as E}from"./chunk-BV27QADF.mjs";import{a as N,c as S,e as V}from"./chunk-SEFQHOUE.mjs";import{n as y,p as P}from"./chunk-YCK5XDZL.mjs";import{Ja as u,Ka as h,Y as C,Ya as d,_a as _,cb as n,db as i,eb as s,fa as c,fb as k,ga as l,gb as w,ha as x,hb as O,kb as p,lb as f,nb as T,ob as m,pb as M,vb as b,yb as I}from"./chunk-WI74LJR4.mjs";function j(e,v){if(e&1&&(n(0,"span",18),m(1),i()),e&2){let t=f(2);u(),M(t.cartItemCount)}}function z(e,v){if(e&1&&(k(0),s(1,"i",16),d(2,j,2,1,"span",17),w()),e&2){let t=f();u(2),_("ngIf",t.cartItemCount>0)}}function A(e,v){if(e&1&&(n(0,"span",18),m(1),i()),e&2){let t=f(2);u(),M(t.cartItemCount)}}function G(e,v){if(e&1&&(x(),s(0,"svg",19),d(1,A,2,1,"span",17)),e&2){let t=f();u(),_("ngIf",t.cartItemCount>0)}}function B(e,v){e&1&&(k(0),s(1,"i",20),w())}function H(e,v){e&1&&(x(),s(0,"svg",19))}var F=(()=>{class e{constructor(t,r){this.router=t,this.cartService=r,this.cartItemCount=0,this.useIcon=!0}ngOnInit(){this.subscription=this.cartService.getCartItemCount().subscribe(t=>{this.cartItemCount=t})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(t){this.router.navigate([t])}navigate(){this.router.navigateByUrl("/payment")}static{this.\u0275fac=function(r){return new(r||e)(h(S),h(E))}}static{this.\u0275cmp=C({type:e,selectors:[["app-nav"]],standalone:!0,features:[b],decls:31,vars:4,consts:[["svgIcon",""],[1,"navbar","navbar-expand-md",2,"background-color","black"],[1,"container-fluid"],["src","./assets/imgGallery/logo.png","alt","logo","width","120px","height","65px"],[1,"navbar-brand",3,"click"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page",1,"nav-link","active",3,"click"],[1,"nav-link",3,"click"],[1,"svgIcon"],["type","button",1,"btn","btn-outline-warning",3,"click"],["type","button",1,"btn","btn-outline-warning","cart-icon",3,"click"],[4,"ngIf","ngIfElse"],[1,"fas","fa-shopping-cart",2,"color","goldenrod"],["class","badge rounded-badge",4,"ngIf"],[1,"badge","rounded-badge"],["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","cart-shopping","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 576 512",1,"svg-inline--fa","fa-cart-shopping",2,"color","goldenrod","font-size","30px"],[1,"fa","fa-credit-card",2,"color","goldenrod"]],template:function(r,o){if(r&1){let a=O();n(0,"nav",1)(1,"div",2),s(2,"img",3),n(3,"a",4),p("click",function(){return c(a),l(o.navigateTo("/home"))}),i(),n(4,"button",5),s(5,"span",6),i(),n(6,"div",7)(7,"ul",8)(8,"li",9)(9,"a",10),p("click",function(){return c(a),l(o.navigateTo("/home"))}),m(10,"Home"),i()(),n(11,"li",9)(12,"a",11),p("click",function(){return c(a),l(o.navigateTo("/about"))}),m(13,"About"),i()(),n(14,"li",9)(15,"a",11),p("click",function(){return c(a),l(o.navigateTo("/products"))}),m(16,"Store"),i()(),n(17,"li",9)(18,"a",11),p("click",function(){return c(a),l(o.navigateTo("/category"))}),m(19,"Category"),i()()()(),n(20,"div",12)(21,"button",13),p("click",function(){return c(a),l(o.navigateTo("/login"))}),m(22,"Join Now"),i(),n(23,"button",14),p("click",function(){return c(a),l(o.navigateTo("/cart"))}),d(24,z,3,1,"ng-container",15)(25,G,2,1,"ng-template",null,0,I),i(),n(27,"button",13),p("click",function(){return c(a),l(o.navigate())}),d(28,B,2,0,"ng-container",15)(29,H,1,0,"ng-template",null,0,I),i()()()()}if(r&2){let a=T(26);u(24),_("ngIf",o.useIcon)("ngIfElse",a),u(4),_("ngIf",o.useIcon)("ngIfElse",a)}},dependencies:[P,y],styles:[".navbar[_ngcontent-%COMP%]{position:sticky;top:0;padding:10px 20px;z-index:1000}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#fff;margin-right:1rem}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#daa520}.svgIcon[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:0}.btn-outline-warning[_ngcontent-%COMP%]{margin-left:1rem}.badge[_ngcontent-%COMP%]{position:absolute;top:-10px;right:-10px;background-color:#daa520;color:#fff;border-radius:50%;padding:5px;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:12px}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#daa520;right:100px}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#ebe4d4}button[_ngcontent-%COMP%]{margin-left:5px}.navbar-nav[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%]{cursor:pointer}.cart-icon[_ngcontent-%COMP%]{position:relative}.cart-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#daa520}"]})}}return e})();var Y=(()=>{class e{constructor(){this.title="e-commerce"}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=C({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:3,vars:0,template:function(r,o){r&1&&s(0,"app-nav")(1,"router-outlet")(2,"app-footer")},dependencies:[N,F,D,V]})}}return e})();export{Y as a};
