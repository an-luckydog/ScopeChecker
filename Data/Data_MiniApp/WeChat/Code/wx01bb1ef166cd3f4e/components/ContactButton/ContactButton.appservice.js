$gwx_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];
function gz$gwx_XC_15_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([3,'is-view class'])
Z([[7],[3,'openType']])
Z([[7],[3,'sessionFrom']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_15=true;
var x=['./components/ContactButton/ContactButton.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var c3B=_mz(z,'button',['bindtap',0,'class',1,'openType',1,'sessionFrom',2],[],e,s,gg)
var o4B=_n('slot')
_(c3B,o4B)
_(r,c3B)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_15";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ContactButton/ContactButton.wxml'] = [$gwx_XC_15, './components/ContactButton/ContactButton.wxml'];else __wxAppCode__['components/ContactButton/ContactButton.wxml'] = $gwx_XC_15( './components/ContactButton/ContactButton.wxml' );
	;__wxRoute = "components/ContactButton/ContactButton";__wxRouteBegin = true;__wxAppCurrentFile__="components/ContactButton/ContactButton.js";define("components/ContactButton/ContactButton.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=require("@/utils/serverConfig"),i=(e=require("../../utils/analyse"))&&e.__esModule?e:{default:e},a=require("@/utils/wechatAPI");var n=1,o=2,s=3,r=4,c={order:"https://work.weixin.qq.com/kfid/kfc0513f413cabc1fd6?enc_scene=ENC4VVjMuaJvBB21b7XtpuM2LXsouRjYDDtxNg2PCJEx9G89wi1xVvef86KwGkrWRrKAR",mina:"https://work.weixin.qq.com/kfid/kfc215493d5ef1c0974"};Component({options:{virtualHost:!0},externalClasses:["class"],properties:{cid:String},observers:{cid:function(e){this.updateEntranceConfig(e)}},data:{openType:"",sessionFrom:""},methods:{updateEntranceConfig:function(e){var i,a,n,o,c,l,u,d,v,m,p;(this.item=(null===(i=(0,t.getServerConfig)())||void 0===i||null===(a=i.entranceConfig)||void 0===a?void 0:a[e])||{},this.item.type===s||this.item.type===r&&!wx.openCustomerServiceChat)&&this.setData({openType:"contact",sessionFrom:JSON.stringify({open_param:this.item.mid,receive_param:this.item.mid,source:this.item.text,nickName:null===(n=getApp())||void 0===n||null===(o=n.globalData)||void 0===o||null===(c=o.userInfo)||void 0===c?void 0:c.nick_name,avatarUrl:null===(l=getApp())||void 0===l||null===(u=l.globalData)||void 0===u||null===(d=u.userInfo)||void 0===d?void 0:d.avatar,User_ID:null===(v=getApp())||void 0===v||null===(m=v.globalData)||void 0===m||null===(p=m.userInfo)||void 0===p?void 0:p.user_id})})},onClick:function(){var e=this;if((0,i.default)("customerservice",{id:this.data.cid}),this.updateEntranceConfig(this.data.cid),this.item)switch(this.item.type){case n:wx.previewImage({urls:[this.item.url]});break;case o:wx.navigateTo({url:"/pages/customer/qrcontact/qrcontact",success:function(t){t.eventChannel.emit("pageItem",e.item)}});break;case r:var t=c[this.item.contactChannel]||c.order;(0,a.openCustomerServiceChat)(t)}}}});
},{isPage:false,isComponent:true,currentFile:'components/ContactButton/ContactButton.js'});require("components/ContactButton/ContactButton.js");