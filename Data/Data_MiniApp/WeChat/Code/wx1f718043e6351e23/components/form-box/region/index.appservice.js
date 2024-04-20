$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];
function gz$gwx_XC_20_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_20=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_20=true;
var x=['./components/form-box/region/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_20_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_20";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/region/index.wxml'] = [$gwx_XC_20, './components/form-box/region/index.wxml'];else __wxAppCode__['components/form-box/region/index.wxml'] = $gwx_XC_20( './components/form-box/region/index.wxml' );
	;__wxRoute = "components/form-box/region/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/form-box/region/index.js";define("components/form-box/region/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/slicedToArray"),i=require("miniprogram-computed"),t=require("./regionData.js");Component({behaviors:[i],properties:{name:{type:String,value:""},label:{type:String,value:""},placeholder:{type:String,value:""},value:{type:String,value:"",optionalTypes:[Number,Object]},hasDependented:{type:Boolean,value:!1},dependentValue:{type:String,value:"",optionalTypes:[Number]}},data:{region:[],customItem:"不限",showValue:"",regionRange:[["无脊柱动物","脊柱动物"],[],["猪肉绦虫","吸血虫"]],multiIndex:[0,0,0]},lifetimes:{attached:function(){this._ready=!0;var e=this.data.value||{},i=e.province,a=e.city,n=e.region,s=[i,a,n].join(" ").trim();this.setData({region:[i||"不限",a||"不限",n||"不限"],showValue:s}),this.provinceRange=this.getRegionSubs(t),this.cityRange=[],this.areaRange=[],this._province=i,this._city=a,this._region=n,this.setRegionData(i,a,n),this.setData({regionRange:[this.provinceRange,this.cityRange||[],this.areaRange||[]]}),s?this.triggerEvent("change",{value:{province:i,city:a,region:n}}):this.triggerEvent("change",{value:""})}},methods:{setRegionData:function(e,i,a){var n=this.provinceRange.indexOf(this._province),s=t[n=-1===n?0:n].subs;this.cityRange=this.getRegionSubs(s);var r=this.cityRange.indexOf(this._city),g=s[r=-1===r?0:r].subs;this.areaRange=g?this.getRegionSubs(s[r].subs):[];var o=this.areaRange.indexOf(this._region);return[n,r,o=-1===o?0:o]},getRegionArray:function(e,i){},getRegionSubs:function(e,i){return console.log("subs",e),e.map((function(e){return e.name}))},bindMultiPickerChange:function(i){var t=e(i.detail.value,3),a=t[0],n=t[1],s=t[2];console.log("subs",i.detail.value),this._province=this.provinceRange[a],this._city=this.cityRange[n],this._region=this.areaRange[s];var r=this.setRegionData(),g=this.provinceRange[r[0]],o=this.cityRange[r[1]],h=this.areaRange[r[2]],c=[g,o,h].join(" ").trim();this.setData({showValue:c,regionRange:[this.provinceRange,this.cityRange||[],this.areaRange||[]],multiIndex:r}),h||(h=o,o=g),c?this.triggerEvent("change",{value:{province:g,city:o,region:h}}):this.triggerEvent("change",{value:""})},bindMultiPickerColumnChange:function(e){var i=e.detail,t=i.column,a=i.value;switch(t){case 0:this._province=this.provinceRange[a],this._city="",this._region="";break;case 1:this._city=this.cityRange[a],this._region="";break;case 2:this._region=this.areaRange[a]}var n=this.setRegionData();this.setData({regionRange:[this.provinceRange,this.cityRange||[],this.areaRange||[]],multiIndex:n})},pickerChange:function(i){var t=e(i.detail.value,3),a=t[0],n=t[1],s=t[2],r=[a="不限"===a?"":a,n="不限"===n?"":n,s="不限"===s?"":s].join(" ").trim();this.setData({showValue:r}),r?this.triggerEvent("change",{value:{province:a,city:n,region:s}}):this.triggerEvent("change",{value:""})}}});
},{isPage:false,isComponent:true,currentFile:'components/form-box/region/index.js'});require("components/form-box/region/index.js");