$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];
function gz$gwx_XC_16_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showLoading']])
Z([3,'toast'])
Z([[7],[3,'loadingText']])
Z([[7],[3,'errorHanpened']])
Z([[2,'!'],[[6],[[7],[3,'codes']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var bCF=_v()
_(r,bCF)
if(_oz(z,0,e,s,gg)){bCF.wxVkey=1
var oDF=_mz(z,'loading',['mode',1,'text',1],[],e,s,gg)
_(bCF,oDF)
}
else if(_oz(z,3,e,s,gg)){bCF.wxVkey=2
}
else if(_oz(z,4,e,s,gg)){bCF.wxVkey=3
}
else{bCF.wxVkey=4
}
bCF.wxXCkey=1
bCF.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_16";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index.wxml'] = [$gwx_XC_16, './miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index.wxml'] = $gwx_XC_16( './miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index.js";define("miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=r(require("../../../../../../@babel/runtime/regenerator")),t=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),o=r(require("./logic/Controller")),n=r(require("../../common/Report"));function r(e){return e&&e.__esModule?e:{default:e}}Component({properties:{options:{type:Object,value:{promotionCode:""}}},data:{codes:[],loadingText:"",showLoading:!1,errorHanpened:!1},pageLifetimes:{show:function(){}},detached:function(){},ready:function(){var e,t,o=(null===(e=this.data)||void 0===e||null===(t=e.options)||void 0===t?void 0:t.promotionCode)||"";this.initScene(o)},methods:{initScene:function(e){o.default.setPromotionCode(e),this.renderCodes()},onRetry:function(){this.renderCodes()},renderCodes:function(){var r=this;return t(e.default.mark((function t(){var i;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r.showLoading(),e.next=4,o.default.fetchCodes();case 4:i=e.sent,r.setData(i),r.hideLoading(),(0,n.default)("AH002"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),r.setData(e.t0),r.hideLoading(),o.default.showToast("获取您的抽奖码出错了, 您可点击重试");case 15:case"end":return e.stop()}}),t,null,[[0,10]])})))()},showLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...";this.setData({loadingText:e,showLoading:!0})},hideLoading:function(){this.setData({showLoading:!1})}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index.js'});require("miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-codes/index.js");