$gwx_XC_29=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_29 || [];
function gz$gwx_XC_29_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'item']],[3,'kefu_avatar']])
Z([3,'handleClick'])
Z(z[1])
Z([[7],[3,'btnText']])
Z([[6],[[7],[3,'item']],[3,'kefu_desc']])
Z([[7],[3,'lottery']])
Z([[6],[[7],[3,'item']],[3,'kefu_title']])
Z([3,'kefu-sponsor-dialog'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_29=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_29=true;
var x=['./components/ImgTextJiaFen/ImgTextJiaFen.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_29_1()
var aBD=_mz(z,'JiaFenCard',['avatar',0,'bindcard',1,'bindcardbutton',1,'btnText',2,'desc',3,'lottery',4,'name',5],[],e,s,gg)
_(r,aBD)
var tCD=_n('KefuSponsorDialog')
_rz(z,tCD,'id',7,e,s,gg)
_(r,tCD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_29";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_29();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ImgTextJiaFen/ImgTextJiaFen.wxml'] = [$gwx_XC_29, './components/ImgTextJiaFen/ImgTextJiaFen.wxml'];else __wxAppCode__['components/ImgTextJiaFen/ImgTextJiaFen.wxml'] = $gwx_XC_29( './components/ImgTextJiaFen/ImgTextJiaFen.wxml' );
	;__wxRoute = "components/ImgTextJiaFen/ImgTextJiaFen";__wxRouteBegin = true;__wxAppCurrentFile__="components/ImgTextJiaFen/ImgTextJiaFen.js";define("components/ImgTextJiaFen/ImgTextJiaFen.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../@babel/runtime/helpers/defineProperty"),t=_(require("@behavior/addFansCommon")),a=require("@models/lottery"),i=_(require("@utils/analyse")),r=_(require("@behavior/common")),n=require("miniprogram-computed"),o=require("@models/jiafen"),u=_(require("lodash")),d=require("@utils/tools"),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var o=r?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=e[n]}i.default=e,a&&a.set(e,i);return i}(require("@services/chou")),f=require("@utils/wechatAPI");function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}function _(e){return e&&e.__esModule?e:{default:e}}(0,n.ComponentWithComputed)({behaviors:[r.default,t.default],properties:{isEditting:Boolean,item:Object,lottery:Object},computed:{btnText:function(e){var t=e.item;return(0,o.getJiaFenBtnText)(null==t?void 0:t.kefu_share_type)}},methods:{getManager:function(){var e;null!==(e=this.data.lottery)&&void 0!==e&&e.id&&this.recordFansHandle(this.data.lottery)},handleClick:function(){var t=this;if(!this.data.isEditting){var r=this.data.item.kefu_share_type,n=e(e(e(e(e(e({},a.KEFU_SHARE_TYPE.IMAGE_PERSONAL,(function(){return t.goToContact()})),a.KEFU_SHARE_TYPE.IMAGE_OFFICIAL,(function(){return t.goToContact()})),a.KEFU_SHARE_TYPE.IMAGE_WECHATGROUP,(function(){return t.goToContact()})),a.KEFU_SHARE_TYPE.MINA,(function(){return t.goToMinaApp()})),a.KEFU_SHARE_TYPE.IMAGE_MINA,(function(){return t.showMinaImage()})),a.KEFU_SHARE_TYPE.CHANNEL_VIDEO,(function(){return t.goToChannelVideo()})),o=e(e(e(e(e(e({},a.KEFU_SHARE_TYPE.IMAGE_PERSONAL,"image_personal"),a.KEFU_SHARE_TYPE.IMAGE_OFFICIAL,"image_official"),a.KEFU_SHARE_TYPE.IMAGE_WECHATGROUP,"image_wechatgroup"),a.KEFU_SHARE_TYPE.MINA,"minapath"),a.KEFU_SHARE_TYPE.IMAGE_MINA,"minapic"),a.KEFU_SHARE_TYPE.CHANNEL_VIDEO,"Video");n[r]&&((0,i.default)("detail_creator",{label:"text_".concat(o[r])}),n[r]())}},goToContact:function(){var e=u.default.get(this.data,"item.kefu_share_type"),t=u.default.get(this.data,"item.kefu_image");(0,d.canIdentifyQR)()&&!["url"].includes(e)&&t?(u.default.set(getApp(),"globalData.previewTimestamp",Date.now()),u.default.set(getApp(),"globalData.previewLocation","detail_qr_creator_preview"),wx.previewImage({urls:[t]}),(0,i.default)("detail_creator_806")):this.showDialog("kefu-sponsor-dialog",{data:{type:u.default.get(this.data,"item.kefu_share_type"),id:u.default.get(this.data,"item.id"),key:"content_contact_id"}})},goToMinaApp:function(){var e;null!==(e=this.data.lottery)&&void 0!==e&&e.id&&(0,i.default)("detail_sponsormina",{id:this.data.lottery.id});var t=u.default.get(this.data,"item.apppath")||u.default.get(this.data,"item.kefu_mina_apppath"),a=u.default.get(this.data,"item.appid")||u.default.get(this.data,"item.kefu_mina_appid");l.goToMina(t,a)},showMinaImage:function(){var e=u.default.get(this.data,"item.kefu_image");wx.previewImage({urls:[e]})},goToChannelVideo:function(){var e=u.default.get(this.data,"item.feed_id")||u.default.get(this.data,"item.kefu_feed_id"),t=u.default.get(this.data,"item.finder_user_name")||u.default.get(this.data,"item.kefu_finder_user_name");(0,f.openChannelsActivity)({feedId:e,finderUserName:t})}}});
},{isPage:false,isComponent:true,currentFile:'components/ImgTextJiaFen/ImgTextJiaFen.js'});require("components/ImgTextJiaFen/ImgTextJiaFen.js");