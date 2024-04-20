$gwx_XC_13=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];
function gz$gwx_XC_13_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_13=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_13=true;
var x=['./components/form-box/date/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_13_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_13";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_13();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/date/index.wxml'] = [$gwx_XC_13, './components/form-box/date/index.wxml'];else __wxAppCode__['components/form-box/date/index.wxml'] = $gwx_XC_13( './components/form-box/date/index.wxml' );
	;__wxRoute = "components/form-box/date/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/form-box/date/index.js";define("components/form-box/date/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/defineProperty"),t=require("miniprogram-computed");Component({behaviors:[t],properties:{name:{type:String,value:""},label:{type:String,value:""},placeholder:{type:String,value:""},value:{type:String,value:"",optionalTypes:[Number]},dependentValue:{type:String},mode:{type:String,value:"date"}},data:{dateString:""},lifetimes:{ready:function(){this.getPickerArray()}},methods:{formatNumber:function(e){return(e=e.toString())[1]?e:"0".concat(e)},formateDateTime:function(e){switch(this.data.mode){case"time":return e.map(this.formatNumber).join(":");case"dateTime":return"".concat(e.slice(0,3).map(this.formatNumber).join("-")," ").concat(e.slice(3,6).map(this.formatNumber).join(":"));default:return e.map(this.formatNumber).join("-")}},_getNumOfDays:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Date(e,t,a).getDate()},getPickerArray:function(){var e=this,t=this.data.timemap,a=this.data.value,r=a?new Date(a):new Date;r instanceof Date&&isNaN(r.getTime())&&(console.warn('传入了无法解析的时间值: "'.concat(a,'", 替换为当前时间')),this.triggerEvent("change",{value:a}),this.setData({dateString:a}),a="",r=new Date);var i={year:r.getFullYear(),month:r.getMonth()+1,day:r.getDate(),hours:r.getHours(),minutes:r.getMinutes(),seconds:r.getSeconds()};"date"===this.data.mode&&(i.hours=0,i.minutes=0,i.seconds=0),this.setData(i),t.forEach((function(t,a){e._setPickerColumnArray(t,a,e.data[t])})),a?this.pickerChange():this._savePrevChange()},_setPickerColumnArray:function(t,a,r){var i,n=[],s=-1;switch(t){case"year":for(var c=1900,o=0;c<=2120;c++,o++)n.push({id:c,name:"".concat(c,"年")}),c==r&&(s=o);break;case"month":for(var u=1;u<=12;u++)n.push({id:u,name:"".concat(u,"月")});s=r-1;break;case"day":for(var h=this.data,m=h.year,d=h.month,p=this._getNumOfDays(m,d),g=1;g<=p;g++)n.push({id:g,name:"".concat(g,"日")});s=r-1;break;case"hours":for(var v=0;v<=23;v++)n.push({id:v,name:this.formatNumber(v)});s=r;break;case"minutes":case"seconds":for(var f=0;f<=59;f++)n.push({id:f,name:this.formatNumber(f)}),s=r}this.setData((e(i={},"".concat(t),r),e(i,"pickerArray[".concat(a,"]"),n),e(i,"pickerIndex[".concat(a,"]"),s),i))},getPickerValue:function(){var e=this.data,t=e.pickerArray,a=e.pickerIndex,r=t.map((function(e,r){return t[r][a[r]].id}));return this.formateDateTime(r)},pickerChange:function(){var e=this.getPickerValue();this.setData({dateString:e});var t=this.data,a=t.year,r=t.month,i=t.day,n=t.hours,s=t.minutes,c=t.seconds;"dateTime"===this.data.mode?this.triggerEvent("change",{value:new Date(a,r-1,i,n,s,c).toISOString()}):this.triggerEvent("change",{value:e}),this._savePrevChange()},_savePrevChange:function(){this._prevPickerArray=[].concat(this.data.pickerArray),this._prevPickerIndex=[].concat(this.data.pickerIndex)},_setPickerColumn:function(t){var a,r=t.column,i=t.value;this.setData((e(a={},"pickerIndex[".concat(r,"]"),i),e(a,"".concat(this.data.timemap[r]),this.data.pickerArray[r][i].id),a))},pickerColumnChange:function(e){this._setPickerColumn(e.detail)},pickerCancel:function(){this.setData({pickerArray:this._prevPickerArray,pickerIndex:this._prevPickerIndex})}},computed:{timemap:function(e){switch(e.mode){case"dateTime":return["year","month","day","hours","minutes","seconds"];case"time":return["hours","minutes","seconds"];default:return["year","month","day"]}},pickerArray:function(e){return e.timemap.map((function(t,a){return{picker:e[t],value:[]}}))}},watch:{"year, month":function(e,t){var a=this._getNumOfDays(e,t),r=this.data.day;this._setPickerColumnArray("day",2,r>a?a:r)}}});
},{isPage:false,isComponent:true,currentFile:'components/form-box/date/index.js'});require("components/form-box/date/index.js");