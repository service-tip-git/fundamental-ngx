"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1734],{11734:(l,D,o)=>{o.r(D),o.d(D,{DatetimePickerDocsModule:()=>fe});var d=o(8674),T=o(36854),f=o(86487),e=o(5e3),c=o(24882),g=o(44969),x=o(8304),C=o(98791),F=o(63710);let Z=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-datetime-picker-header"]],decls:15,vars:0,consts:[["componentName","Date Time Picker"],["module","DatetimePickerModule","subPackage","datetime-picker"]],template:function(a,n){1&a&&(e.TgZ(0,"header"),e._uU(1,"Datetime Picker"),e.qZA(),e.TgZ(2,"description")(3,"p"),e._uU(4," The datetime picker component is an opinionated composition of the fd-popover, fd-calendar and fd-time components to accomplish the UI pattern for picking a date and time. "),e._UZ(5,"br")(6,"br"),e._uU(7," The datetime picker supports the same keyboard navigability as the calendar and time components. The popover can be opened by focusing the datetime picker input field and closed by focusing the icon button followed by pressing enter or space. "),e._UZ(8,"br")(9,"br"),e._uU(10," Fully compatible with Angular forms. "),e.qZA(),e._UZ(11,"fd-datetime-important",0),e.qZA(),e._UZ(12,"import",1)(13,"fd-header-tabs")(14,"router-outlet"))},directives:[c.G,g.w,x.M,C.k,F.c,d.lC],styles:[""]}),t})();var v=o(56591),U=o(61665),b=o(85343),M=o(85338),E=o(38552),k=o(31753),y=o(2112),P=o(2664),I=o(78153),O=o(81720),N=o(40615),S=o(7171),w=o(38593),J=o(7157),R=o(93943),V=o(28595),i=o(41831),h=o(68226),u=o(91993),r=o(52382);let q=(()=>{class t{constructor(){this.date=i._U.getNow()}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-datetime-example"]],features:[e._Bn([{provide:i.ed,useClass:i.CP},{provide:i.eZ,useValue:i.hx}])],decls:7,vars:2,consts:[["fd-form-label","","for","dateTimePicker"],["inputId","dateTimePicker",3,"ngModel","ngModelChange"]],template:function(a,n){1&a&&(e.TgZ(0,"label",0),e._uU(1,"DateTime Picker"),e.qZA(),e.TgZ(2,"fd-datetime-picker",1),e.NdJ("ngModelChange",function(p){return n.date=p}),e.qZA(),e._UZ(3,"br")(4,"br"),e.TgZ(5,"span"),e._uU(6),e.qZA()),2&a&&(e.xp6(2),e.Q6J("ngModel",n.date),e.xp6(4),e.hij(" Selected: ",n.date||"null"," "))},directives:[h.h,u.I,r.JJ,r.On],encapsulation:2}),t})();var B=o(29871),j=o(33089),Q=o(87757);let L=(()=>{class t{constructor(){this.date=i._U.getNow()}changeDay(){this.date=new i._U(2018,10,5,15,30)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-datetime-program-example"]],features:[e._Bn([{provide:i.ed,useClass:i.CP},{provide:i.eZ,useValue:i.hx}])],decls:7,vars:2,consts:[[3,"ngModel","ngModelChange"],["label","Change","fd-button","",3,"click"]],template:function(a,n){1&a&&(e.TgZ(0,"fd-datetime-picker",0),e.NdJ("ngModelChange",function(p){return n.date=p}),e.qZA(),e._UZ(1,"br")(2,"br"),e.TgZ(3,"button",1),e.NdJ("click",function(){return n.changeDay()}),e.qZA(),e._UZ(4,"br")(5,"br"),e._uU(6)),2&a&&(e.Q6J("ngModel",n.date),e.xp6(6),e.hij("\nSelected: ",n.date||"null","\n"))},directives:[u.I,r.JJ,r.On,Q.r],encapsulation:2}),t})(),Y=(()=>{class t{constructor(){this.selectedDay=i._U.getNow()}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-date-time-picker-allow-null-example"]],features:[e._Bn([{provide:i.ed,useClass:i.CP},{provide:i.eZ,useValue:i.hx}])],decls:5,vars:3,consts:[[3,"allowNull","ngModel","ngModelChange"]],template:function(a,n){1&a&&(e.TgZ(0,"fd-datetime-picker",0),e.NdJ("ngModelChange",function(p){return n.selectedDay=p}),e.qZA(),e._UZ(1,"br")(2,"br"),e.TgZ(3,"span"),e._uU(4),e.qZA()),2&a&&(e.Q6J("allowNull",!1)("ngModel",n.selectedDay),e.xp6(4),e.hij("Selected Date: ",n.selectedDay||"null",""))},directives:[u.I,r.JJ,r.On],encapsulation:2}),t})();var X=o(18410);const G=Object.assign(Object.assign({},i.hx),{display:Object.assign(Object.assign({},i.hx.display),{dateTimeInput:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}})});let H=(()=>{class t{constructor(){this.date=i._U.getNow()}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-datetime-format-example"]],features:[e._Bn([{provide:i.ed,useClass:i.CP},{provide:i.eZ,useValue:G}])],decls:6,vars:5,consts:[["placeholder","MMM DD, YYYY, h:mm a",3,"ngModel","ngModelChange"]],template:function(a,n){1&a&&(e.TgZ(0,"fd-datetime-picker",0),e.NdJ("ngModelChange",function(p){return n.date=p}),e.qZA(),e._UZ(1,"br")(2,"br")(3,"br"),e._uU(4),e.ALo(5,"dateTimeFormat")),2&a&&(e.Q6J("ngModel",n.date),e.xp6(4),e.hij("\nSelected: ",e.xi3(5,2,n.date,"null"),"\n"))},directives:[u.I,r.JJ,r.On],pipes:[X.X$],encapsulation:2}),t})(),z=(()=>{class t{constructor(){this.date=i._U.getNow()}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-datetime-disabled-example"]],features:[e._Bn([{provide:i.ed,useClass:i.CP},{provide:i.eZ,useValue:i.hx}])],decls:1,vars:2,consts:[[3,"disabled","ngModel","ngModelChange"]],template:function(a,n){1&a&&(e.TgZ(0,"fd-datetime-picker",0),e.NdJ("ngModelChange",function(p){return n.date=p}),e.qZA()),2&a&&e.Q6J("disabled",!0)("ngModel",n.date)},directives:[u.I,r.JJ,r.On],encapsulation:2}),t})();var $=o(20586);let W=(()=>{class t{constructor(a){this.datetimeAdapter=a,this.customForm=new r.cw({date:new r.NI(i._U.getNow()),disabledDate:new r.NI({value:i._U.getNow(),disabled:!0})}),this.disableFunction=n=>this.datetimeAdapter.compareDate(i._U.getToday(),n)>0}isValid(){return this.customForm.get("date").valid}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(i.ed))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-datetime-form-example"]],features:[e._Bn([{provide:i.ed,useClass:i.CP},{provide:i.eZ,useValue:i.hx}])],decls:29,vars:15,consts:[[1,"flex-form",3,"formGroup"],["fd-form-item",""],["fd-form-label","",3,"required"],["formControlName","date",3,"state","message","required","disableFunction"],["fd-form-label",""],["state","information","message","This is disabled DateTimePicker","formControlName","disabledDate"]],template:function(a,n){1&a&&(e.TgZ(0,"form",0)(1,"div",1)(2,"label",2),e._uU(3,"Valid Date Picker"),e.qZA(),e._UZ(4,"fd-datetime-picker",3)(5,"br"),e._uU(6),e._UZ(7,"br"),e._uU(8),e._UZ(9,"br"),e._uU(10),e._UZ(11,"br"),e._uU(12),e.qZA(),e._UZ(13,"br")(14,"br"),e.TgZ(15,"div",1)(16,"label",4),e._uU(17,"Disabled Date Picker"),e.qZA(),e._UZ(18,"fd-datetime-picker",5)(19,"br"),e._uU(20),e._UZ(21,"br"),e._uU(22),e._UZ(23,"br"),e._uU(24),e._UZ(25,"br"),e._uU(26),e._UZ(27,"br"),e._uU(28),e.qZA()()),2&a&&(e.Q6J("formGroup",n.customForm),e.xp6(2),e.Q6J("required",!0),e.xp6(2),e.Q6J("state",n.isValid()?"success":"error")("message",n.isValid()?"This is valid DateTimePicker":"This is invalid DateTimePicker")("required",!0)("disableFunction",n.disableFunction),e.xp6(2),e.hij(" Touched: ",n.customForm.controls.date.touched,""),e.xp6(2),e.hij(" Dirty: ",n.customForm.controls.date.dirty,""),e.xp6(2),e.hij(" Valid: ",n.customForm.controls.date.valid,""),e.xp6(2),e.hij(" Selected Date: ",n.customForm.controls.date.value||"null"," "),e.xp6(8),e.hij(" Touched: ",n.customForm.controls.date.touched,""),e.xp6(2),e.hij(" Dirty: ",n.customForm.controls.date.dirty,""),e.xp6(2),e.hij(" Valid: ",n.customForm.controls.date.valid,""),e.xp6(2),e.hij(" Disabled: ",n.customForm.controls.disabledDate.disabled,""),e.xp6(2),e.hij(" Selected Date: ",n.customForm.controls.date.value||"null"," "))},directives:[r._Y,r.JL,r.sg,$.J,h.h,u.I,r.JJ,r.u,r.Q7],encapsulation:2}),t})();var _=o(1673),K=o(71338),ee=o(69808),te=o(40881);function ae(t,m){if(1&t&&(e.TgZ(0,"fd-option",5),e._uU(1),e.qZA()),2&t){const a=m.$implicit;e.Q6J("value",a),e.xp6(1),e.Oqu(a)}}const ne=function(){return["en-ca","fr","de","bg","ar-eg","zh"]},A=new Map([["en-ca","mm/dd/yyyy, hh:mm a"],["fr","dd/mm/yyyy  hh:mm"],["bg","\u0434\u0434.\u043c\u043c.\u0433\u0433 \u0447\u0447:\u043c\u043c"],["de","dd.mm.yy, hh:mm"],["pl","dd.mm.yyyy, hh:mm"]]);let oe=(()=>{class t{constructor(a){this.datetimeAdapter=a,this.locale="en-ca",this.date=i._U.getNow(),this.placeholder=A.get(this.locale)}setLocale(a){this.locale=a,this.datetimeAdapter.setLocale(a),this.placeholder=A.get(this.locale)}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(i.ed))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-datetime-picker-complex-i18n-example"]],viewQuery:function(a,n){if(1&a&&e.Gf(_.I,5),2&a){let s;e.iGM(s=e.CRH())&&(n.datetimePickerComponent=s.first)}},features:[e._Bn([{provide:e.soG,useValue:"en-ca"},{provide:i.ed,useClass:i.CP},{provide:i.eZ,useValue:i.hx}])],decls:6,vars:5,consts:[["fd-form-label",""],[1,"example"],["placeholder","Select an option",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"placeholder","ngModel","ngModelChange"],[3,"value"]],template:function(a,n){1&a&&(e.TgZ(0,"label",0),e._uU(1,"Languages"),e.qZA(),e.TgZ(2,"div",1)(3,"fd-select",2),e.NdJ("valueChange",function(p){return n.setLocale(p)})("valueChange",function(p){return n.locale=p}),e.YNc(4,ae,2,2,"fd-option",3),e.qZA()(),e.TgZ(5,"fd-datetime-picker",4),e.NdJ("ngModelChange",function(p){return n.date=p}),e.qZA()),2&a&&(e.xp6(3),e.Q6J("value",n.locale),e.xp6(1),e.Q6J("ngForOf",e.DdM(4,ne)),e.xp6(1),e.Q6J("placeholder",n.placeholder)("ngModel",n.date))},directives:[h.h,K.Hr,ee.sg,te.x,u.I,r.JJ,r.On],styles:[".docs-example-fd-form-group[_ngcontent-%COMP%]{width:300px;display:block}fd-select[_ngcontent-%COMP%], fd-datetime-picker[_ngcontent-%COMP%]{padding:.5rem;padding-left:0}fd-select[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%], fd-datetime-picker[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]{width:230px}"]}),t})(),ie=(()=>{class t{constructor(){this.date=i._U.getNow()}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-datetime-picker-update-on-blur-example"]],features:[e._Bn([{provide:i.ed,useClass:i.CP},{provide:i.eZ,useValue:i.hx}])],decls:6,vars:3,consts:[["fd-form-label","","for","dateTimePickerOnBlur"],["inputId","dateTimePickerOnBlur",3,"processInputOnBlur","ngModel","ngModelChange"]],template:function(a,n){1&a&&(e.TgZ(0,"label",0),e._uU(1,"DateTime Picker"),e.qZA(),e.TgZ(2,"fd-datetime-picker",1),e.NdJ("ngModelChange",function(p){return n.date=p}),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"span"),e._uU(5),e.qZA()),2&a&&(e.xp6(2),e.Q6J("processInputOnBlur",!0)("ngModel",n.date),e.xp6(3),e.hij(" Selected: ",n.date||"null"," "))},directives:[h.h,u.I,r.JJ,r.On],encapsulation:2,changeDetection:0}),t})(),me=(()=>{class t{constructor(){this.datetimePickerSingle=[{language:"html",code:v,fileName:"datetime-example"},{language:"typescript",code:U,fileName:"datetime-example",component:"DatetimeExampleComponent"}],this.datetimeProgram=[{language:"html",code:b,fileName:"datetime-program-example"},{language:"typescript",code:M,fileName:"datetime-program-example",component:"DatetimeProgramExampleComponent"}],this.datetimeFormat=[{language:"html",code:k,fileName:"datetime-format-example"},{language:"typescript",code:y,fileName:"datetime-format-example",component:"DatetimeFormatExampleComponent"}],this.datetimeDisabled=[{language:"html",code:N,fileName:"datetime-disabled-example"},{language:"typescript",code:S,fileName:"datetime-disabled-example",component:"DatetimeDisabledExampleComponent"}],this.datetimeForm=[{language:"html",code:w,fileName:"datetime-form-example"},{language:"typescript",code:J,fileName:"datetime-form-example",component:"DatetimeFormExampleComponent"}],this.datetimePickerAllowNull=[{language:"typescript",code:E,fileName:"date-time-picker-allow-null-example",component:"DatetimePickerAllowNullExampleComponent"}],this.datetimeI18nComplex=[{language:"typescript",code:P,fileName:"datetime-picker-complex-i18n-example",component:"DatetimePickerComplexI18nExampleComponent"},{language:"html",code:I,fileName:"datetime-picker-complex-i18n-example",component:"DatetimePickerComplexI18nExampleComponent"}],this.dateTimePickerUpdateOnBlur=[{language:"typescript",code:O,fileName:"datetime-picker-update-on-blur-example",component:"DateTimePickerUpdateOnBlurExampleComponent"}]}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-datetime-picker-docs"]],decls:128,vars:8,consts:[["id","simple","componentName","datetime-picker"],[3,"exampleFiles"],["id","programmatic-change","componentName","datetime-picker"],["id","null","componentName","datetime-picker"],["id","formatting","componentName","datetime-picker"],["id","disabled","componentName","datetime-picker"],["id","reactive-form","componentName","datetime-picker"],["id","complex-i18n","componentName","datetime-picker"],["componentName","DatetimePicker"],["id","updates-on-blur","componentName","datetime-picker"]],template:function(a,n){1&a&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Simple Datetime Picker "),e.qZA(),e.TgZ(2,"description"),e._uU(3," The simplest form of the datetime picker. It makes use of ngModel to bind to the desired value. The alternative is to use the date input combined with the dateChange output. There is also added "),e.TgZ(4,"code"),e._uU(5,"[placement]"),e.qZA(),e._uU(6," attribute which allows us to decide where popup should be shown\n"),e.qZA(),e.TgZ(7,"description"),e._uU(8," The value for the input only changes the model on blur or an enter/return keystroke. "),e.qZA(),e.TgZ(9,"description"),e._uU(10," Some default options that belong to the "),e.TgZ(11,"code"),e._uU(12,"time"),e.qZA(),e._uU(13," component such as "),e.TgZ(14,"code"),e._uU(15,"[displaySeconds]"),e.qZA(),e._uU(16,", "),e.TgZ(17,"code"),e._uU(18,"[displayMinutes]"),e.qZA(),e._uU(19,", "),e.TgZ(20,"code"),e._uU(21,"[displayHours]"),e.qZA(),e._uU(22," and "),e.TgZ(23,"code"),e._uU(24,"[meridian]"),e.qZA(),e._uU(25," are based on the "),e.TgZ(26,"code"),e._uU(27,"DateTimeFormats.display.dateTimeInput"),e.qZA(),e._uU(28," options. "),e._UZ(29,"br"),e._uU(30," For example if Datetime picker display format option contains hours, minutes and day period info then default options will be the next: "),e.TgZ(31,"code"),e._uU(32,'[displaySeconds]="false"'),e.qZA(),e._uU(33,", "),e.TgZ(34,"code"),e._uU(35,'[displayMinutes]="true"'),e.qZA(),e._uU(36,", "),e.TgZ(37,"code"),e._uU(38,'[displayHours]="true"'),e.qZA(),e._uU(39," and "),e.TgZ(40,"code"),e._uU(41,'[meridian]="true"'),e.qZA(),e._uU(42,". The listed above options are applied to the "),e.TgZ(43,"code"),e._uU(44,"time"),e.qZA(),e._uU(45," component only (used internally) and can be defined explicitly if needed.\n"),e.qZA(),e.TgZ(46,"component-example"),e._UZ(47,"fd-datetime-example"),e.qZA(),e._UZ(48,"code-example",1)(49,"separator"),e.TgZ(50,"fd-docs-section-title",2),e._uU(51," Programmatic Change\n"),e.qZA(),e.TgZ(52,"description"),e._uU(53," It is possible to programmatically change the value of the date of the datetime picker and still conserve full functionality.\n"),e.qZA(),e.TgZ(54,"component-example"),e._UZ(55,"fd-datetime-program-example"),e.qZA(),e._UZ(56,"code-example",1)(57,"separator"),e.TgZ(58,"fd-docs-section-title",3),e._uU(59," Null Validity "),e.qZA(),e.TgZ(60,"description"),e._uU(61," Null input values are considered valid by default. Use "),e.TgZ(62,"code"),e._uU(63,'[allowNull]="false"'),e.qZA(),e._uU(64," to make them invalid.\n"),e.qZA(),e.TgZ(65,"component-example"),e._UZ(66,"fd-date-time-picker-allow-null-example"),e.qZA(),e._UZ(67,"code-example",1)(68,"separator"),e.TgZ(69,"fd-docs-section-title",4),e._uU(70," Formatting "),e.qZA(),e.TgZ(71,"description"),e._uU(72," Providing a custom format for the dates is possible through providing "),e.TgZ(73,"code"),e._uU(74,"DATE_TIME_FORMATS"),e.qZA(),e._uU(75," config. Note that when providing a custom format, the "),e.TgZ(76,"code"),e._uU(77,"[placeholder]"),e.qZA(),e._uU(78," input should be set to match the new format as well. The "),e.TgZ(79,"code"),e._uU(80,"dateTimeFormat"),e.qZA(),e._uU(81," pipe can also be utilized to convert the date into a string according to the provided format.\n"),e.qZA(),e.TgZ(82,"component-example"),e._UZ(83,"fd-datetime-format-example"),e.qZA(),e._UZ(84,"code-example",1)(85,"separator"),e.TgZ(86,"fd-docs-section-title",5),e._uU(87," Disabled State "),e.qZA(),e.TgZ(88,"component-example"),e._UZ(89,"fd-datetime-disabled-example"),e.qZA(),e._UZ(90,"code-example",1)(91,"separator"),e.TgZ(92,"fd-docs-section-title",6),e._uU(93," Date Time Picker in Reactive Form\n"),e.qZA(),e.TgZ(94,"description"),e._uU(95,"The date-time-picker component may also be used within Angular Reactive Forms. DateTime Picker follows Date Picker with "),e.TgZ(96,"code"),e._uU(97,"[disableFunction]"),e.qZA()(),e.TgZ(98,"component-example"),e._UZ(99,"fd-datetime-form-example"),e.qZA(),e._UZ(100,"code-example",1)(101,"separator"),e.TgZ(102,"fd-docs-section-title",7),e._uU(103," i18n example. "),e.qZA(),e.TgZ(104,"description"),e._UZ(105,"fd-datetime-important",8),e.TgZ(106,"p"),e._uU(107," To change a locale option in "),e.TgZ(108,"code"),e._uU(109,"DatePicker"),e.qZA(),e._uU(110," component, it is needed to set a locale via "),e.TgZ(111,"code"),e._uU(112,"DatetimeAdapter.setLocale"),e.qZA(),e._uU(113," method. "),e.qZA()(),e.TgZ(114,"component-example"),e._UZ(115,"fd-datetime-picker-complex-i18n-example"),e.qZA(),e._UZ(116,"code-example",1)(117,"separator"),e.TgZ(118,"fd-docs-section-title",9),e._uU(119," Date Time picker that updates it's value on blur.\n"),e.qZA(),e.TgZ(120,"description"),e._uU(121," Set "),e.TgZ(122,"code"),e._uU(123,'[processInputOnBlur]="true"'),e.qZA(),e._uU(124,' in order to move the processing of input value to whenever component loses focus. You may also hit "enter" to apply the value\n'),e.qZA(),e.TgZ(125,"component-example"),e._UZ(126,"fd-datetime-picker-update-on-blur-example"),e.qZA(),e._UZ(127,"code-example",1)),2&a&&(e.xp6(48),e.Q6J("exampleFiles",n.datetimePickerSingle),e.xp6(8),e.Q6J("exampleFiles",n.datetimeProgram),e.xp6(11),e.Q6J("exampleFiles",n.datetimePickerAllowNull),e.xp6(17),e.Q6J("exampleFiles",n.datetimeFormat),e.xp6(6),e.Q6J("exampleFiles",n.datetimeDisabled),e.xp6(10),e.Q6J("exampleFiles",n.datetimeForm),e.xp6(16),e.Q6J("exampleFiles",n.datetimeI18nComplex),e.xp6(11),e.Q6J("exampleFiles",n.dateTimePickerUpdateOnBlur))},directives:[R.k,g.w,V.O,q,B.E,j.N,L,Y,H,z,W,x.M,oe,ie],styles:[""]}),t})();var le=o(28674),re=o(90523),de=o(36445),pe=o(57904),se=o(84527),ce=o(97045);const ue=[{path:"",component:Z,children:[{path:"",component:me},{path:"api",component:T.h,data:{content:f.X.datetimePicker}}]}];let fe=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[re.ej,de.An,pe.ne,i.Yp,_.p,se.g7,le.g,d.Bz.forChild(ue),ce.dr],d.Bz]}),t})()},98791:(l,D,o)=>{o.d(D,{k:()=>T});var d=o(5e3);let T=(()=>{class f{constructor(c){this.currentLib=c}ngOnInit(){const c=["@fundamental-ngx",this.currentLib];this.subPackage&&c.push(this.subPackage),this.library=c.join("/")}}return f.\u0275fac=function(c){return new(c||f)(d.Y36("CURRENT_LIB"))},f.\u0275cmp=d.Xpm({type:f,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:9,vars:2,consts:[[2,"color","rgb(0, 0, 136)"],[2,"color","rgb(0, 136, 0)"]],template:function(c,g){1&c&&(d.TgZ(0,"code")(1,"span",0),d._uU(2,"import"),d.qZA(),d._uU(3),d.TgZ(4,"span",0),d._uU(5,"from "),d.qZA(),d.TgZ(6,"span",1),d._uU(7),d.qZA(),d._uU(8,"; "),d.qZA()),2&c&&(d.xp6(3),d.hij(" { ",g.module," } "),d.xp6(4),d.hij("'",g.library,"'"))},encapsulation:2}),f})()},38552:l=>{l.exports="import { Component } from '@angular/core';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fd-date-time-picker-allow-null-example',\n    template: `\n        <fd-datetime-picker [allowNull]=\"false\" [(ngModel)]=\"selectedDay\"></fd-datetime-picker>\n        <br />\n        <br />\n        <span>Selected Date: {{ selectedDay || 'null' }}</span>\n    `,\n    providers: [\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class DatetimePickerAllowNullExampleComponent {\n    selectedDay: FdDate = FdDate.getNow();\n}\n"},40615:l=>{l.exports='\x3c!-- Just needs a date object in the ts file! --\x3e\n<fd-datetime-picker [disabled]="true" [(ngModel)]="date"></fd-datetime-picker>\n'},7171:l=>{l.exports="import { Component } from '@angular/core';\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fd-datetime-disabled-example',\n    templateUrl: './datetime-disabled-example.component.html',\n    providers: [\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class DatetimeDisabledExampleComponent {\n    date = FdDate.getNow();\n}\n"},56591:l=>{l.exports='<label fd-form-label for="dateTimePicker">DateTime Picker</label>\n<fd-datetime-picker inputId="dateTimePicker" [(ngModel)]="date"></fd-datetime-picker>\n\n<br />\n<br />\n<span> Selected: {{ date || \'null\' }} </span>\n'},61665:l=>{l.exports="import { Component } from '@angular/core';\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fd-datetime-example',\n    templateUrl: './datetime-example.component.html',\n    providers: [\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class DatetimeExampleComponent {\n    date = FdDate.getNow();\n}\n"},38593:l=>{l.exports='<form [formGroup]="customForm" class="flex-form">\n    <div fd-form-item>\n        <label fd-form-label [required]="true">Valid Date Picker</label>\n        <fd-datetime-picker\n            [state]="isValid() ? \'success\' : \'error\'"\n            [message]="isValid() ? \'This is valid DateTimePicker\' : \'This is invalid DateTimePicker\'"\n            [required]="true"\n            formControlName="date"\n            [disableFunction]="disableFunction"\n        >\n        </fd-datetime-picker>\n        <br />\n        Touched: {{ customForm.controls.date.touched }}<br />\n        Dirty: {{ customForm.controls.date.dirty }}<br />\n        Valid: {{ customForm.controls.date.valid }}<br />\n        Selected Date:\n        {{ customForm.controls.date.value || \'null\' }}\n    </div>\n    <br /><br />\n    <div fd-form-item>\n        <label fd-form-label>Disabled Date Picker</label>\n        <fd-datetime-picker\n            state="information"\n            message="This is disabled DateTimePicker"\n            formControlName="disabledDate"\n        ></fd-datetime-picker>\n        <br />\n        Touched: {{ customForm.controls.date.touched }}<br />\n        Dirty: {{ customForm.controls.date.dirty }}<br />\n        Valid: {{ customForm.controls.date.valid }}<br />\n        Disabled: {{ customForm.controls.disabledDate.disabled }}<br />\n        Selected Date:\n        {{ customForm.controls.date.value || \'null\' }}\n    </div>\n</form>\n'},7157:l=>{l.exports="import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fd-datetime-form-example',\n    templateUrl: './datetime-form-example.component.html',\n    providers: [\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class DatetimeFormExampleComponent {\n    customForm = new FormGroup({\n        date: new FormControl(FdDate.getNow()),\n        disabledDate: new FormControl({ value: FdDate.getNow(), disabled: true })\n    });\n\n    constructor(private datetimeAdapter: DatetimeAdapter<FdDate>) {}\n\n    isValid(): boolean {\n        return this.customForm.get('date').valid;\n    }\n\n    disableFunction = (fdDate: FdDate): boolean => this.datetimeAdapter.compareDate(FdDate.getToday(), fdDate) > 0;\n}\n"},31753:l=>{l.exports='<fd-datetime-picker placeholder="MMM DD, YYYY, h:mm a" [(ngModel)]="date"></fd-datetime-picker>\n<br />\n<br />\n<br />\nSelected: {{ date | dateTimeFormat: \'null\' }}\n'},2112:l=>{l.exports="import { Component } from '@angular/core';\nimport {\n    FdDate,\n    DateTimeFormats,\n    DATE_TIME_FORMATS,\n    FD_DATETIME_FORMATS,\n    DatetimeAdapter,\n    FdDatetimeAdapter\n} from '@fundamental-ngx/core/datetime';\n\n/**\n * FD_DATETIME_FORMATS is based on Intl.DateTimeFormat,\n * see the doc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat\n */\n\nexport const CUSTOM_FD_DATETIME_FORMATS: DateTimeFormats = {\n    ...FD_DATETIME_FORMATS,\n    display: {\n        ...FD_DATETIME_FORMATS.display,\n        dateTimeInput: {\n            year: 'numeric',\n            month: 'short',\n            day: 'numeric',\n            hour: '2-digit',\n            minute: '2-digit',\n            hour12: false\n        }\n    }\n};\n\n@Component({\n    selector: 'fd-datetime-format-example',\n    templateUrl: './datetime-format-example.component.html',\n    providers: [\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: CUSTOM_FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class DatetimeFormatExampleComponent {\n    date = FdDate.getNow();\n}\n"},78153:l=>{l.exports='<label fd-form-label>Languages</label>\n<div class="example">\n    <fd-select (valueChange)="setLocale($event)" placeholder="Select an option" [(value)]="locale">\n        <fd-option *ngFor="let option of [\'en-ca\', \'fr\', \'de\', \'bg\', \'ar-eg\', \'zh\']" [value]="option">{{\n            option\n        }}</fd-option>\n    </fd-select>\n</div>\n\n<fd-datetime-picker [placeholder]="placeholder" [(ngModel)]="date"></fd-datetime-picker>\n'},2664:l=>{l.exports="import { Component, LOCALE_ID, ViewChild } from '@angular/core';\nimport {\n    FdDate,\n    DatetimeAdapter,\n    FdDatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\nimport { DatetimePickerComponent } from '@fundamental-ngx/core/datetime-picker';\n\nconst placeholders = new Map([\n    ['en-ca', 'mm/dd/yyyy, hh:mm a'],\n    ['fr', 'dd/mm/yyyy  hh:mm'],\n    ['bg', '\u0434\u0434.\u043c\u043c.\u0433\u0433 \u0447\u0447:\u043c\u043c'],\n    ['de', 'dd.mm.yy, hh:mm'],\n    ['pl', 'dd.mm.yyyy, hh:mm']\n]);\n\n@Component({\n    selector: 'fd-datetime-picker-complex-i18n-example',\n    templateUrl: './datetime-picker-complex-i18n-example.component.html',\n    styleUrls: ['./datetime-picker-complex-i18n-example.component.scss'],\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: LOCALE_ID,\n            useValue: 'en-ca'\n        },\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class DatetimePickerComplexI18nExampleComponent {\n    locale = 'en-ca';\n\n    date = FdDate.getNow();\n\n    placeholder = placeholders.get(this.locale);\n\n    @ViewChild(DatetimePickerComponent) datetimePickerComponent: DatetimePickerComponent<FdDate>;\n\n    constructor(private datetimeAdapter: DatetimeAdapter<FdDate>) {}\n\n    public setLocale(locale: string): void {\n        this.locale = locale;\n        this.datetimeAdapter.setLocale(locale);\n        this.placeholder = placeholders.get(this.locale);\n    }\n}\n"},81720:l=>{l.exports="import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fd-datetime-picker-update-on-blur-example',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    template: `\n        <label fd-form-label for=\"dateTimePickerOnBlur\">DateTime Picker</label>\n        <fd-datetime-picker\n            inputId=\"dateTimePickerOnBlur\"\n            [processInputOnBlur]=\"true\"\n            [(ngModel)]=\"date\"\n        ></fd-datetime-picker>\n        <br />\n        <span> Selected: {{ date || 'null' }} </span>\n    `,\n    providers: [\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class DateTimePickerUpdateOnBlurExampleComponent {\n    date = FdDate.getNow();\n}\n"},85343:l=>{l.exports='<fd-datetime-picker [(ngModel)]="date"></fd-datetime-picker>\n\n<br />\n<br />\n<button label="Change" fd-button (click)="changeDay()"></button>\n\n<br />\n<br />\nSelected: {{ date || \'null\' }}\n'},85338:l=>{l.exports="import { Component } from '@angular/core';\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fd-datetime-program-example',\n    templateUrl: './datetime-program-example.component.html',\n    providers: [\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class DatetimeProgramExampleComponent {\n    date = FdDate.getNow();\n\n    changeDay(): void {\n        this.date = new FdDate(2018, 10, 5, 15, 30);\n    }\n}\n"}}]);