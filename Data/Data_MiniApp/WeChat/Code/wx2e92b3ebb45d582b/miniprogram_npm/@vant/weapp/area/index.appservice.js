$gwx_XC_58=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_58 || [];
function gz$gwx_XC_58_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_58_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'active-class'])
Z([3,'onCancel'])
Z([3,'onChange'])
Z([3,'onConfirm'])
Z([[7],[3,'cancelButtonText']])
Z([3,'van-area__picker'])
Z([3,'column-class'])
Z([[12],[[6],[[7],[3,'computed']],[3,'displayColumns']],[[5],[[5],[[7],[3,'columns']]],[[7],[3,'columnsNum']]]])
Z([[7],[3,'confirmButtonText']])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'loading']])
Z([[7],[3,'title']])
Z([3,'toolbar-class'])
Z([3,'name'])
Z([[7],[3,'visibleItemCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_58_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_58=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_58=true;
var x=['./miniprogram_npm/@vant/weapp/area/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_58_1()
var o4O=_mz(z,'van-picker',['showToolbar',-1,'activeClass',0,'bind:cancel',1,'bind:change',1,'bind:confirm',2,'cancelButtonText',3,'class',4,'columnClass',5,'columns',6,'confirmButtonText',7,'itemHeight',8,'loading',9,'title',10,'toolbarClass',11,'valueKey',12,'visibleItemCount',13],[],e,s,gg)
_(r,o4O)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_58";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_58();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/area/index.wxml'] = [$gwx_XC_58, './miniprogram_npm/@vant/weapp/area/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/area/index.wxml'] = $gwx_XC_58( './miniprogram_npm/@vant/weapp/area/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/area/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/area/index.js";define("miniprogram_npm/@vant/weapp/area/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),n=require("../picker/shared"),i=require("../common/utils");(0,t.VantComponent)({classes:["active-class","toolbar-class","column-class"],props:e(e({},n.pickerProps),{value:{type:String,observer:function(e){this.code=e,this.setValues()}},areaList:{type:Object,value:{},observer:"setValues"},columnsNum:{type:null,value:3},columnsPlaceholder:{type:Array,observer:function(e){this.setData({typeToColumnsPlaceholder:{province:e[0]||"",city:e[1]||"",county:e[2]||""}})}}}),data:{columns:[{values:[]},{values:[]},{values:[]}],typeToColumnsPlaceholder:{}},mounted:function(){var e=this;(0,i.requestAnimationFrame)((function(){e.setValues()}))},methods:{getPicker:function(){return null==this.picker&&(this.picker=this.selectComponent(".van-area__picker")),this.picker},onCancel:function(e){this.emit("cancel",e.detail)},onConfirm:function(e){var t=e.detail.index,n=e.detail.value;n=this.parseValues(n),this.emit("confirm",{value:n,index:t})},emit:function(e,t){t.values=t.value,delete t.value,this.$emit(e,t)},parseValues:function(t){var n=this.data.columnsPlaceholder;return t.map((function(t,i){return!t||t.code&&t.name!==n[i]?t:e(e({},t),{code:"",name:""})}))},onChange:function(e){var t,n=this,i=e.detail,s=i.index,r=i.picker,c=i.value;this.code=c[s].code,null===(t=this.setValues())||void 0===t||t.then((function(){n.$emit("change",{picker:r,values:n.parseValues(r.getValues()),index:s})}))},getConfig:function(e){var t=this.data.areaList;return t&&t[e+"_list"]||{}},getList:function(e,t){if("province"!==e&&!t)return[];var n=this.data.typeToColumnsPlaceholder,i=this.getConfig(e),s=Object.keys(i).map((function(e){return{code:e,name:i[e]}}));if(null!=t&&("9"===t[0]&&"city"===e&&(t="9"),s=s.filter((function(e){return 0===e.code.indexOf(t)}))),n[e]&&s.length){var r="province"===e?"":"city"===e?"000000".slice(2,4):"000000".slice(4,6);s.unshift({code:""+t+r,name:n[e]})}return s},getIndex:function(e,t){var n="province"===e?2:"city"===e?4:6,i=this.getList(e,t.slice(0,n-2));"9"===t[0]&&"province"===e&&(n=1),t=t.slice(0,n);for(var s=0;s<i.length;s++)if(i[s].code.slice(0,n)===t)return s;return 0},setValues:function(){var e=this.getPicker();if(e){var t=this.code||this.getDefaultCode(),n=this.getList("province"),i=this.getList("city",t.slice(0,2)),s=[],r=[],c=this.data.columnsNum;return c>=1&&(s.push(e.setColumnValues(0,n,!1)),r.push(this.getIndex("province",t))),c>=2&&(s.push(e.setColumnValues(1,i,!1)),r.push(this.getIndex("city",t)),i.length&&"00"===t.slice(2,4)&&(t=i[0].code)),3===c&&(s.push(e.setColumnValues(2,this.getList("county",t.slice(0,4)),!1)),r.push(this.getIndex("county",t))),Promise.all(s).catch((function(){})).then((function(){return e.setIndexes(r)})).catch((function(){}))}},getDefaultCode:function(){if(this.data.columnsPlaceholder.length)return"000000";var e=Object.keys(this.getConfig("county"));if(e[0])return e[0];var t=Object.keys(this.getConfig("city"));return t[0]?t[0]:""},getValues:function(){var e=this.getPicker();return e?this.parseValues(e.getValues().filter((function(e){return!!e}))):[]},getDetail:function(){var e=this.getValues(),t={code:"",country:"",province:"",city:"",county:""};if(!e.length)return t;var n=e.map((function(e){return e.name}));return t.code=e[e.length-1].code,"9"===t.code[0]?(t.country=n[1]||"",t.province=n[2]||""):(t.province=n[0]||"",t.city=n[1]||"",t.county=n[2]||""),t},reset:function(e){return this.code=e||"",this.setValues()}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/area/index.js'});require("miniprogram_npm/@vant/weapp/area/index.js");