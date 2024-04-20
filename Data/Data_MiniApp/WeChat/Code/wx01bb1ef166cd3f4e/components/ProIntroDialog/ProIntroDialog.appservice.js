$gwx_XC_59=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_59 || [];
function gz$gwx_XC_59_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_59_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_59_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_59_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'dialog'])
Z([3,'custom-dialog'])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_59_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_59_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_59=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_59=true;
var x=['./components/ProIntroDialog/ProIntroDialog.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_59_1()
var lYH=_mz(z,'PopupBox',['class',0,'customClass',1,'showClose',1],[],e,s,gg)
_(r,lYH)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_59";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_59();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ProIntroDialog/ProIntroDialog.wxml'] = [$gwx_XC_59, './components/ProIntroDialog/ProIntroDialog.wxml'];else __wxAppCode__['components/ProIntroDialog/ProIntroDialog.wxml'] = $gwx_XC_59( './components/ProIntroDialog/ProIntroDialog.wxml' );
	;__wxRoute = "components/ProIntroDialog/ProIntroDialog";__wxRouteBegin = true;__wxAppCurrentFile__="components/ProIntroDialog/ProIntroDialog.js";define("components/ProIntroDialog/ProIntroDialog.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=(e=require("@behavior/dialog"))&&e.__esModule?e:{default:e},i=require("@mina-modules/system-info");var o="https://lucky-cdn.nocode.com/mina/lottery/icon-pro-v@3x.png";Component({behaviors:[t.default],data:{isIOS:!1,items:[{image:o,title:"纯净显示",desc:"提供纯净的抽奖环境，取消额外推荐。（封面广告、流量主广告随机展示）"},{image:o,title:"专属引流位",desc:"在参与后、开奖后等时间节点，提醒参与者点击了解发起人信息"},{image:o,title:"获取抽奖数据统计",desc:"获取访问、分享等数据，及时评估转化效果"},{image:o,title:"阻止高风险用户参与",desc:"参与者参与前需经系统检测，有效规避羊毛党、风险用户"},{image:o,title:"留言功能",desc:"与用户交流互动，增加趣味氛围"}]},lifetimes:{attached:function(){(0,i.getSysInfo)(),this.setData({isIOS:!(0,i.getSysInfo)().android})}},methods:{handleGoToBuy:function(){wx.navigateTo({url:"/pages/lottery/pages/pay/pay?type=pro"}),this.triggerEvent("buypro"),this.selectComponent(".dialog").hide()},handleDialogClose:function(){this.selectComponent(".dialog").hide()}}});
},{isPage:false,isComponent:true,currentFile:'components/ProIntroDialog/ProIntroDialog.js'});require("components/ProIntroDialog/ProIntroDialog.js");