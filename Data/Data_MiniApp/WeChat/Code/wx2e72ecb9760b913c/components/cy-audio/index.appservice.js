$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'current']],[3,'src']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./components/cy-audio/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
var lCB=_v()
_(r,lCB)
if(_oz(z,0,e,s,gg)){lCB.wxVkey=1
}
lCB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cy-audio/index.wxml'] = [$gwx_XC_7, './components/cy-audio/index.wxml'];else __wxAppCode__['components/cy-audio/index.wxml'] = $gwx_XC_7( './components/cy-audio/index.wxml' );
	;__wxRoute = "components/cy-audio/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/cy-audio/index.js";define("components/cy-audio/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{audioUrl:{type:String,value:""},title:{type:String,value:"电话录音"},audioDuration:{type:Number,value:""}},data:{playIcon:"https://staff.chunyu.mobi/@/media/images/2021/06/01/ba4d/119e066556bb_w126_h126_.png",pauseIcon:"https://staff.chunyu.mobi/@/media/images/2021/06/01/8956/4c7cf2682556_w60_h60_.png",playStates:!1,startTime:"00:00",endTime:"00:00",duration:0,sliderValue:0,current:{src:""},audioAction:{method:"pause"}},ready:function(){this.setData({current:{src:this.data.audioUrl},endTime:this.formatSeconds(this.data.audioDuration),duration:this.data.audioDuration})},methods:{audioTimeUpdated:function(t){var a=t.detail.duration,i=t.detail.currentTime;console.log("duration",a),console.log("currentTime",i),console.log("this.data.audioDuration",this.data.audioDuration),this.setData({sliderValue:i,startTime:this.formatSeconds(i)})},pauseHandle:function(){this.setData({audioAction:{method:"pause"},playStates:!1})},playEnd:function(){this.init()},playError:function(t){wx.showToast({title:t.errMsg||"音频出错！",duration:500})},audioOpreation:function(t){if(!this.data.audioUrl)return this.init(),void this.triggerEvent("onNoUrlEvent");this.setData({audioAction:{method:this.data.playStates?"pause":"play"}}),this.setData({playStates:!this.data.playStates})},sliderChanging:function(t){this.setData({audioAction:{method:"setCurrentTime",data:t.detail.value},startTime:this.formatSeconds(t.detail.value)})},sliderChange:function(t){if(this.data.duration){if(t.detail.value>=this.data.duration)return void this.init();this.setData({audioAction:{method:"setCurrentTime",data:t.detail.value},startTime:this.formatSeconds(t.detail.value)}),this.setData({audioAction:{method:this.data.playStates?"play":"pause"}})}},init:function(){this.setData({startTime:"00:00",sliderValue:0,audioAction:{method:"setCurrentTime",data:0},current:{src:this.data.audioUrl},endTime:this.formatSeconds(this.data.audioDuration),duration:this.data.audioDuration,playStates:!1}),this.setData({audioAction:{method:"pause"}})},formatSeconds:function(t){var a=Math.round(Number(t)),i=Math.floor(a/3600)<10?"0"+Math.floor(a/3600):Math.floor(a/3600),e=Math.floor(a/60%60)<10?"0"+Math.floor(a/60%60):Math.floor(a/60%60),o=Math.floor(a%60)<10?"0"+Math.floor(a%60):Math.floor(a%60),s="";return"00"!==i&&(s+="".concat(i,":")),"00"!==e&&(s+="".concat(e,":")),"00"==i&&"00"==e&&(s+="00:"),s+="".concat(o)}}});
},{isPage:false,isComponent:true,currentFile:'components/cy-audio/index.js'});require("components/cy-audio/index.js");