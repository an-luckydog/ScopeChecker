$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-box'])
Z([[2,'=='],[[7],[3,'showIcon']],[1,'true']])
Z([[7],[3,'delShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./component/my-input/my-input.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var oJ=_n('view')
_rz(z,oJ,'class',0,e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,1,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,2,e,s,gg)){aL.wxVkey=1
}
lK.wxXCkey=1
aL.wxXCkey=1
_(r,oJ)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['component/my-input/my-input.wxml'] = [$gwx_XC_2, './component/my-input/my-input.wxml'];else __wxAppCode__['component/my-input/my-input.wxml'] = $gwx_XC_2( './component/my-input/my-input.wxml' );
	;__wxRoute = "component/my-input/my-input";__wxRouteBegin = true;__wxAppCurrentFile__="component/my-input/my-input.js";define("component/my-input/my-input.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Component({properties:{bgColor:{type:String,value:"#292929"},iconSrc:{type:String,value:""},showIcon:{type:String,value:"false"},showDelete:{type:String,value:"true"},type:{type:String,value:"text"},placeholder:{type:String,value:""},inputValue:{type:String,value:""},inputStyle:{type:Object,value:{}},autofocus:{type:String,value:"false"},maxlength:{type:Number,value:9999999}},data:{inputValue:"",delShow:!1},methods:{onChange:function(e){var t=e.detail.value,a=e.detail.cursor;null==t||0===t.length?this.setData({delShow:!1}):this.setData({delShow:!0});var l={value:t,cursor:a};this.triggerEvent("onChange",l)},del:function(){this.setData({delShow:!1,inputValue:""})}}});
},{isPage:false,isComponent:true,currentFile:'component/my-input/my-input.js'});require("component/my-input/my-input.js");