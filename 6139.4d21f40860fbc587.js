"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6139],{36854:(f,u,e)=>{e.d(u,{h:()=>D}),e(77135);var i=e(5e3),d=e(8674),r=e(74042),m=e(69808),s=e(87757),v=e(63043),L=e(50578),x=e(27078),t=e(42437),C=e(24919);const h=["menu"];function P(g,y){if(1&g&&i._UZ(0,"button",8),2&g){const l=i.oxw(),p=i.MAs(6);i.Q6J("label","Select a file ("+l.files.length+")")("fdMenu",!0)("fdMenuTrigger",p)}}function I(g,y){if(1&g){const l=i.EpF();i.TgZ(0,"li",9),i.NdJ("click",function(){const E=i.CHM(l).$implicit;return i.oxw().getFile(E)}),i.TgZ(1,"div",10)(2,"span",11),i._uU(3),i.qZA()()()}if(2&g){const l=y.$implicit,p=i.oxw();i.ekj("is-selected",l===p.activeFile),i.xp6(3),i.Oqu(l)}}let D=(()=>{class g{constructor(l,p){this.route=l,this.apiService=p}ngOnInit(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"}getFile(l){this.apiService.getComponentHtml(l).subscribe(p=>{this.result=p,this.activeFile=l,this.menu.close()},p=>{console.warn("Did not find file "+l+".\nError: "+p)})}}return g.\u0275fac=function(l){return new(l||g)(i.Y36(d.gz),i.Y36(r.S))},g.\u0275cmp=i.Xpm({type:g,selectors:[["fd-api"]],viewQuery:function(l,p){if(1&l&&i.Gf(h,5),2&l){let _;i.iGM(_=i.CRH())&&(p.menu=_.first)}},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"label","fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"is-selected","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"label","fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(l,p){1&l&&(i.TgZ(0,"div",0)(1,"h2",1),i._uU(2),i.qZA(),i._UZ(3,"span",2),i.YNc(4,P,1,3,"button",3),i.TgZ(5,"fd-menu",4,5),i.YNc(7,I,4,3,"li",6),i.qZA()(),i._UZ(8,"div",7)),2&l&&(i.xp6(2),i.Oqu(p.activeFile),i.xp6(2),i.Q6J("ngIf",p.files.length>1),i.xp6(1),i.Q6J("fillControlMode",null),i.xp6(2),i.Q6J("ngForOf",p.files),i.xp6(1),i.Q6J("innerHTML",p.result,i.oJD))},directives:[m.O5,s.r,v.k,L.M,m.sg,x.qv,t.K,C.h],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),g})()},63710:(f,u,e)=>{e.d(u,{c:()=>x});var n=e(5e3),i=e(17791),d=e(66997),r=e(8674),m=e(1726),s=e(55124),v=e(33089);const L=function(){return{exact:!0}};let x=(()=>{class t{}return t.\u0275fac=function(h){return new(h||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["fd-header-tabs"]],decls:12,vars:4,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLink","./","routerLinkActive","",3,"active","routerLinkActiveOptions"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLink","./api","routerLinkActive","",3,"active"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(h,P){if(1&h&&(n.TgZ(0,"ul",0)(1,"li",1)(2,"a",2,3)(4,"span",4),n._uU(5,"Examples"),n.qZA()()(),n.TgZ(6,"li",1)(7,"a",5,6)(9,"span",4),n._uU(10,"API"),n.qZA()()()(),n._UZ(11,"separator",7)),2&h){const I=n.MAs(3),D=n.MAs(8);n.xp6(2),n.Q6J("active",I.isActive)("routerLinkActiveOptions",n.DdM(3,L)),n.xp6(5),n.Q6J("active",D.isActive)}},directives:[i.d,d.w,r.yS,m.w,r.Od,s.P6,v.N],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px;box-shadow:none}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),t})()},24882:(f,u,e)=>{e.d(u,{G:()=>d});var n=e(5e3);const i=["*"];let d=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=n.Xpm({type:r,selectors:[["header"]],ngContentSelectors:i,decls:2,vars:0,consts:[[1,"header"]],template:function(s,v){1&s&&(n.F$t(),n.TgZ(0,"h1",0),n.Hsn(1),n.qZA())},styles:[".header[_ngcontent-%COMP%]{margin-top:2rem;font-size:2.2rem}"]}),r})()},98791:(f,u,e)=>{e.d(u,{k:()=>i});var n=e(5e3);let i=(()=>{class d{constructor(m){this.currentLib=m}ngOnInit(){const m=["@fundamental-ngx",this.currentLib];this.subPackage&&m.push(this.subPackage),this.library=m.join("/")}}return d.\u0275fac=function(m){return new(m||d)(n.Y36("CURRENT_LIB"))},d.\u0275cmp=n.Xpm({type:d,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:9,vars:2,consts:[[2,"color","rgb(0, 0, 136)"],[2,"color","rgb(0, 136, 0)"]],template:function(m,s){1&m&&(n.TgZ(0,"code")(1,"span",0),n._uU(2,"import"),n.qZA(),n._uU(3),n.TgZ(4,"span",0),n._uU(5,"from "),n.qZA(),n.TgZ(6,"span",1),n._uU(7),n.qZA(),n._uU(8,"; "),n.qZA()),2&m&&(n.xp6(3),n.hij(" { ",s.module," } "),n.xp6(4),n.hij("'",s.library,"'"))},encapsulation:2}),d})()},74042:(f,u,e)=>{e.d(u,{S:()=>d});var n=e(5e3),i=e(40520);let d=(()=>{class r{constructor(s,v){this.httpClient=s,this.currentLib=v,this.BASE_URL="assets/typedoc/"}getComponentHtml(s){s=s.toLocaleLowerCase()+".html";const v=this.buildUrl(this.BASE_URL,this.currentLib||"core","classes",s);return this.httpClient.get(v,{responseType:"text"})}buildUrl(...s){return s.join("/").replace(/\/+/g,"/")}}return r.\u0275fac=function(s){return new(s||r)(n.LFG(i.eN),n.LFG("CURRENT_LIB"))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac}),r})()},28674:(f,u,e)=>{e.d(u,{g:()=>p});var n=e(69808),i=e(8674),d=e(52382),r=e(62970),m=e(53732),s=e(74042),v=e(32818),L=e(30825),x=e(90523),t=e(80848),C=e(31258),h=e(77135),P=e(89282),I=e(95037),D=e(46394),g=e(75394);const y=[D.P4,h.$9,t.Q,I.o,L.hJ,P.H,x.nY,C.L,g.s];var l=e(5e3);let p=(()=>{class _{}return _.\u0275fac=function(M){return new(M||_)},_.\u0275mod=l.oAB({type:_}),_.\u0275inj=l.cJS({providers:[m.t,s.S],imports:[[d.u5,n.ez,i.Bz,v.f,y,r.JP.forChild()],d.u5,d.UX,v.f,n.ez,D.P4,h.$9,t.Q,I.o,L.hJ,P.H,x.nY,C.L,g.s]}),_})()},36139:(f,u,e)=>{e.r(u),e.d(u,{PlatformDisplayListItemDocsModule:()=>R});var n=e(44409),i=e(8674),d=e(97045),r=e(21553),m=e(35243),s=e(90859),v=e(36854),L=e(28674),x=e(45665),t=e(5e3),C=e(24882),h=e(44969),P=e(98791),I=e(63710);let D=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-display-list-item-header"]],decls:24,vars:0,consts:[["routerLink","/core/list"],["module","DisplayListItemModule, PlatformListModule","subPackage","list"]],template:function(o,A){1&o&&(t.TgZ(0,"header"),t._uU(1,"Display List Item"),t.qZA(),t.TgZ(2,"description")(3,"p"),t._uU(4," The display list item is the simplest list item. It shows content in the form of labels and text. This component makes use of "),t.TgZ(5,"a",0),t._uU(6,"list-item"),t.qZA(),t._uU(7," directive present in fundamental-ngx/core and has additional enhancements on top of it. "),t.qZA(),t.TgZ(8,"h3"),t._uU(9,"Platform specific enhancements:"),t.qZA(),t.TgZ(10,"ul")(11,"li"),t._uU(12," Display-List-Item is implemented as Angular component to hide complexity of dealing with HTML in order to deliver high-order component. "),t.qZA(),t.TgZ(13,"li"),t._uU(14,"Alignment of sub elements title, secondary, footer, group header, navigation are abstracted."),t.qZA(),t.TgZ(15,"li"),t._uU(16,"Enhanced support for accessibility which covers access by keyboard, mouse and touch."),t.qZA(),t.TgZ(17,"li"),t._uU(18,"Enhanced compatibility with assistive technology (screen readers)."),t.qZA(),t.TgZ(19,"li"),t._uU(20,"Supports both imperative and declarative way of accepting the items for all the list variants."),t.qZA()()(),t._UZ(21,"import",1)(22,"fd-header-tabs")(23,"router-outlet"))},directives:[C.G,h.w,i.yS,P.k,I.c,i.lC],encapsulation:2}),a})();var g=e(79739),y=e(81629),l=e(40673),p=e(83658),_=e(24325),E=e(93943),M=e(28595),T=e(77826),U=e(69808),Z=e(20208);function b(a,c){if(1&a&&t._UZ(0,"fdp-display-list-item",3),2&a){const o=c.$implicit;t.Q6J("title",o.title)("secondary",o.secondary)("navigationIndicator",o.navigationIndicator)("link",o.link)("ariaLabel",o.msg)}}function O(a,c){if(1&a&&t._UZ(0,"fdp-display-list-item",3),2&a){const o=c.$implicit;t.Q6J("title",o.title)("secondary",o.secondary)("navigationIndicator",o.navigationIndicator)("link",o.link)("ariaLabel",o.msg)}}let B=(()=>{class a{constructor(){this.items=[{title:"Star War Item Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Cras sapien est, efficitur eu urna quis, sagittis posuere massa.\n                Integer euismod purus ligula, vitae efficitur massa volutpat sit amet.\n                Cras tempor placerat elit, a commodo odio vehicula at.",secondary:"Next session Item Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Cras sapien est, efficitur eu urna quis, sagittis posuere massa.\n                Integer euismod purus ligula, vitae efficitur massa volutpat sit amet.\n                Cras tempor placerat elit, a commodo odio vehicula at.",navigationIndicator:!0,link:"/platform/home",msg:"Navigate to get more information on this movie"},{title:"Spide Man",secondary:"No latest release",navigationIndicator:!1,link:"",msg:""},{title:"Iron Man",secondary:"No latest release",navigationIndicator:!1,link:"",msg:""},{title:"Wonder Women",secondary:"Next session",navigationIndicator:!0,link:"",msg:"Navigate to get more information on this movie"}]}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-platform-display-list-item-border-less-example"]],decls:8,vars:6,consts:[[3,"noBorder","navigationIndicator"],[3,"title","secondary","navigationIndicator","link","ariaLabel",4,"ngFor","ngForOf"],["contentDensity","compact",3,"noBorder","navigationIndicator"],[3,"title","secondary","navigationIndicator","link","ariaLabel"]],template:function(o,A){1&o&&(t.TgZ(0,"h3"),t._uU(1,"Cozy Mode"),t.qZA(),t.TgZ(2,"fdp-list",0),t.YNc(3,b,1,5,"fdp-display-list-item",1),t.qZA(),t.TgZ(4,"h3"),t._uU(5,"Compact Mode"),t.qZA(),t.TgZ(6,"fdp-list",2),t.YNc(7,O,1,5,"fdp-display-list-item",1),t.qZA()),2&o&&(t.xp6(2),t.Q6J("noBorder",!0)("navigationIndicator",!0),t.xp6(1),t.Q6J("ngForOf",A.items),t.xp6(3),t.Q6J("noBorder",!0)("navigationIndicator",!0),t.xp6(1),t.Q6J("ngForOf",A.items))},directives:[T.ns,U.sg,Z.A],encapsulation:2}),a})();var N=e(29871),S=e(33089);let F=(()=>{class a{constructor(){this.items=[{title:"First Stage",secondary:"First stage take medical help on call (Standard text)"},{title:"Second Stage",secondary:"Second stage take medical help in person (Standard text)"},{title:"Third Stage",secondary:"Third stage admit in hospital (Standard text)"}]}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fdp-platform-display-list-item-with-navigation-example"]],decls:6,vars:1,consts:[[3,"navigationIndicator"],["title","Corona","ariaLabel","Navigate to get more information on Corona"],["title","Fever","ariaLabel","Navigate to get more information on Fever"],["title","Sneeze","ariaLabel","Navigate to get more information on Sneezing"]],template:function(o,A){1&o&&(t.TgZ(0,"h5"),t._uU(1,"Declarative Approach"),t.qZA(),t.TgZ(2,"fdp-list",0),t._UZ(3,"fdp-display-list-item",1)(4,"fdp-display-list-item",2)(5,"fdp-display-list-item",3),t.qZA()),2&o&&(t.xp6(2),t.Q6J("navigationIndicator",!0))},directives:[T.ns,Z.A],encapsulation:2}),a})();const W=[{path:"",component:D,children:[{path:"",component:(()=>{class a{constructor(){this.simpleDLI=[{language:"html",code:g,fileName:"platform-display-list-item-example"}],this.borderLessDLI=[{language:"html",code:y,fileName:"platform-display-list-item-border-less-example"},{language:"typescript",component:"PlatformDisplayListItemBorderLessExampleComponent",code:l,fileName:"platform-display-list-item-border-less-example"}],this.dliWithNavigation=[{language:"html",code:p,fileName:"platform-display-list-item-with-navigation-example"},{language:"typescript",component:"PlatformDisplayListItemWithNavigationExampleComponent",code:_,fileName:"platform-display-list-item-with-navigation-example"}]}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-standard-list-item"]],decls:28,vars:2,consts:[["id","partial-navigation","componentName","display-list-item"],[3,"exampleFiles"],["id","navigation","componentName","display-list-item"]],template:function(o,A){1&o&&(t.TgZ(0,"fd-docs-section-title",0),t._uU(1," Display List Item - With Partial Navigation\n"),t.qZA(),t.TgZ(2,"description"),t._uU(3,"A Display list without border, setting "),t.TgZ(4,"code"),t._uU(5,'[noBorder]="true"'),t.qZA(),t._uU(6," will help to have no border and "),t.TgZ(7,"code"),t._uU(8,' [navigationIndicator]="true"'),t.qZA(),t._uU(9," helps to display navigation and it will display navigation for specfic items for which navigtion indicator is set to true again, by default its value is false. Below examples shows declarative way to bind the list items. Where we can pass list items individually where a number of items are less"),t.qZA(),t.TgZ(10,"component-example"),t._UZ(11,"fdp-platform-display-list-item-border-less-example"),t.qZA(),t._UZ(12,"code-example",1)(13,"separator"),t.TgZ(14,"fd-docs-section-title",2),t._uU(15," Display List Item - Navigation\n"),t.qZA(),t.TgZ(16,"description"),t._uU(17,"Display List with Navigation Option. "),t.TgZ(18,"code"),t._uU(19,'[navigationIndicator]="true"'),t.qZA(),t._uU(20," will provide *>* indicator, "),t.TgZ(21,"code"),t._uU(22,"[link]"),t.qZA(),t._uU(23," will help to get into the desired destination on click of navigation. Below example shows declarative way to use it."),t.qZA(),t.TgZ(24,"component-example"),t._UZ(25,"fdp-platform-display-list-item-with-navigation-example"),t.qZA(),t._UZ(26,"code-example",1)(27,"separator")),2&o&&(t.xp6(12),t.Q6J("exampleFiles",A.borderLessDLI),t.xp6(14),t.Q6J("exampleFiles",A.dliWithNavigation))},directives:[E.k,h.w,M.O,B,N.E,S.N,F],encapsulation:2}),a})()},{path:"api",component:v.h,data:{content:x.X.displaylistitem}}]}];let R=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[n._t,d.Vk,i.Bz.forChild(W),L.g,r.V_,s._d,m.R,s.h4],i.Bz]}),a})()},81629:f=>{f.exports='<h3>Cozy Mode</h3>\n<fdp-list [noBorder]="true" [navigationIndicator]="true">\n    <fdp-display-list-item\n        *ngFor="let item of items"\n        [title]="item.title"\n        [secondary]="item.secondary"\n        [navigationIndicator]="item.navigationIndicator"\n        [link]="item.link"\n        [ariaLabel]="item.msg"\n    ></fdp-display-list-item>\n</fdp-list>\n\n<h3>Compact Mode</h3>\n<fdp-list contentDensity="compact" [noBorder]="true" [navigationIndicator]="true">\n    <fdp-display-list-item\n        *ngFor="let item of items"\n        [title]="item.title"\n        [secondary]="item.secondary"\n        [navigationIndicator]="item.navigationIndicator"\n        [link]="item.link"\n        [ariaLabel]="item.msg"\n    >\n    </fdp-display-list-item>\n</fdp-list>\n'},40673:f=>{f.exports="import { Component } from '@angular/core';\n\nexport interface Movie {\n    title: string;\n    secondary: string;\n    navigationIndicator: boolean;\n    link: string;\n    msg: string;\n}\n\n@Component({\n    selector: 'fdp-platform-display-list-item-border-less-example',\n    templateUrl: './platform-display-list-item-border-less-example.component.html'\n})\nexport class PlatformDisplayListItemBorderLessExampleComponent {\n    items: Movie[] = [\n        {\n            title: `Star War Item Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Cras sapien est, efficitur eu urna quis, sagittis posuere massa.\n                Integer euismod purus ligula, vitae efficitur massa volutpat sit amet.\n                Cras tempor placerat elit, a commodo odio vehicula at.`,\n            secondary: `Next session Item Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Cras sapien est, efficitur eu urna quis, sagittis posuere massa.\n                Integer euismod purus ligula, vitae efficitur massa volutpat sit amet.\n                Cras tempor placerat elit, a commodo odio vehicula at.`,\n            navigationIndicator: true,\n            link: '/platform/home',\n            msg: 'Navigate to get more information on this movie'\n        },\n        { title: 'Spide Man', secondary: 'No latest release', navigationIndicator: false, link: '', msg: '' },\n        { title: 'Iron Man', secondary: 'No latest release', navigationIndicator: false, link: '', msg: '' },\n        {\n            title: 'Wonder Women',\n            secondary: 'Next session',\n            navigationIndicator: true,\n            link: '',\n            msg: 'Navigate to get more information on this movie'\n        }\n    ];\n}\n"},79739:f=>{f.exports='<fdp-list [navigated]="true">\n    <fdp-list-group-header grpheaderTitle="Vegetables Group"></fdp-list-group-header>\n    <fdp-display-list-item title="Green Vegetables"> </fdp-display-list-item>\n    <fdp-display-list-item title="Dry Vegetables"> </fdp-display-list-item>\n    <fdp-list-footer>List footer</fdp-list-footer>\n</fdp-list>\n'},83658:f=>{f.exports='<h5>Declarative Approach</h5>\n<fdp-list [navigationIndicator]="true">\n    <fdp-display-list-item title="Corona" ariaLabel="Navigate to get more information on Corona">\n    </fdp-display-list-item>\n    <fdp-display-list-item title="Fever" ariaLabel="Navigate to get more information on Fever"> </fdp-display-list-item>\n    <fdp-display-list-item title="Sneeze" ariaLabel="Navigate to get more information on Sneezing">\n    </fdp-display-list-item>\n</fdp-list>\n'},24325:f=>{f.exports="import { Component } from '@angular/core';\n\nexport interface Corona {\n    title: string;\n    secondary: string;\n}\n\n@Component({\n    selector: 'fdp-platform-display-list-item-with-navigation-example',\n    templateUrl: './platform-display-list-item-with-navigation-example.component.html'\n})\nexport class PlatformDisplayListItemWithNavigationExampleComponent {\n    items: Corona[] = [\n        {\n            title: 'First Stage',\n            secondary: 'First stage take medical help on call (Standard text)'\n        },\n        {\n            title: 'Second Stage',\n            secondary: 'Second stage take medical help in person (Standard text)'\n        },\n        {\n            title: 'Third Stage',\n            secondary: 'Third stage admit in hospital (Standard text)'\n        }\n    ];\n}\n"}}]);