$gwx_XC_17=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];
function gz$gwx_XC_17_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'setImg'])
Z([a,[3,'image-placeholder '],[[2,'?:'],[[7],[3,'previewImage']],[1,''],[1,'image-placeholder-noimg']]])
Z([[7],[3,'previewImage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_17=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_17=true;
var x=['./components/form-box/image/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_17_1()
var oFE=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var lGE=_v()
_(oFE,lGE)
if(_oz(z,2,e,s,gg)){lGE.wxVkey=1
}
lGE.wxXCkey=1
_(r,oFE)
var aHE=_n('Privacy')
_(r,aHE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_17";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_17();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/image/index.wxml'] = [$gwx_XC_17, './components/form-box/image/index.wxml'];else __wxAppCode__['components/form-box/image/index.wxml'] = $gwx_XC_17( './components/form-box/image/index.wxml' );
	;__wxRoute = "components/form-box/image/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/form-box/image/index.js";define("components/form-box/image/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/objectSpread2"),t={name:"files",multiple:!1,action:"",header:"",fileLimit:1,sizeLimit:10},a=require("miniprogram-computed");Component({behaviors:[a],properties:{name:{type:String,value:""},fileOptions:{type:Object,value:t}},computed:{fileOpt:function(a){return e(e({},t),a.fileOptions)}},data:{previewImage:"",pw:0,uploading:!1},methods:{checkFileSize:function(e){return!(e>10485760)||(wx.showToast({title:"图片大小不能超过10MB",icon:"none"}),!1)},setImg:function(){var e=this;this.data.uploading||wx.chooseImage({count:1,success:function(t){var a=t.tempFiles[0];e.checkFileSize(a.size)&&(e.setData({previewImage:a.path,uploading:!0,pw:0}),e.triggerEvent("doRequest",{name:"uploadImage",value:a.path,callback:function(t){e.setData({uploading:!1}),e.triggerEvent("change",{value:t})}}))},fail:function(){e.setData({uploading:!1}),wx.showToast({title:"选择图片错误，请稍后重试",icon:"none"})}})},base64Img:function(e){var t=this;console.log(wx),wx.getFileSystemManager().readFile({filePath:e,encoding:"base64",success:function(e){var a="data:image/png;base64,".concat(e.data.toString());t.setData({uploading:!1,value:a}),t.triggerEvent("change",{value:a})}})}}});
},{isPage:false,isComponent:true,currentFile:'components/form-box/image/index.js'});require("components/form-box/image/index.js");