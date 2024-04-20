$gwx_XC_48=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_48 || [];
function gz$gwx_XC_48_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_48_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_48_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'web-view-component'])
Z([[7],[3,'showSlot']])
Z([3,'before'])
Z([[7],[3,'showWebView']])
Z(z[1])
Z([3,'after'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_48_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_1
}
function gz$gwx_XC_48_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_48_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_48_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-root'])
Z([[7],[3,'locLoading']])
Z([3,'onTap'])
Z([3,'onTouchMove'])
Z([3,'page-container'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'xmlType']],[1,'ORIGIN']],[[7],[3,'webviewData']]])
Z([3,'onErrorWebview'])
Z([3,'onLoadWebview'])
Z([3,'onMessage'])
Z([[7],[3,'defaultType']])
Z([[7],[3,'webviewData']])
Z([[2,'&&'],[[2,'==='],[[7],[3,'xmlType']],[1,'REFRESH']],[[7],[3,'webviewData']]])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[7],[3,'showCustomTabbar']])
Z([3,'tab-bar-box'])
Z([1,1])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_48_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_2
}
__WXML_GLOBAL__.ops_set.$gwx_XC_48=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_48=true;
var x=['./npm/wmfe/wxapp-component-webview0_9_11/src/components/webview.wxml','./pages/web-view/web-view.wxml','../base.wxml','../../components/compat/compat.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_48_1()
var o62=_n('view')
_rz(z,o62,'class',0,e,s,gg)
var l72=_v()
_(o62,l72)
if(_oz(z,1,e,s,gg)){l72.wxVkey=1
var e02=_n('slot')
_rz(z,e02,'name',2,e,s,gg)
_(l72,e02)
}
var a82=_v()
_(o62,a82)
if(_oz(z,3,e,s,gg)){a82.wxVkey=1
}
var t92=_v()
_(o62,t92)
if(_oz(z,4,e,s,gg)){t92.wxVkey=1
var bA3=_n('slot')
_rz(z,bA3,'name',5,e,s,gg)
_(t92,bA3)
}
l72.wxXCkey=1
a82.wxXCkey=1
t92.wxXCkey=1
_(r,o62)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_48_2()
var xC3=_n('view')
_rz(z,xC3,'id',0,e,s,gg)
var oD3=e_[x[1]].j
_ic(x[2],e_,x[1],e,s,xC3,gg);
var fE3=_v()
_(xC3,fE3)
if(_oz(z,1,e,s,gg)){fE3.wxVkey=1
}
else{fE3.wxVkey=2
var hG3=_mz(z,'view',['bindtap',2,'bindtouchmove',1,'class',2],[],e,s,gg)
var oH3=e_[x[1]].i
_ai(oH3,x[3],e_,x[1],1,371)
var cI3=_v()
_(hG3,cI3)
if(_oz(z,5,e,s,gg)){cI3.wxVkey=1
var lK3=_mz(z,'wm-webview',['bind:onBindError',6,'bind:onBindLoad',1,'bind:onBindMessage',2,'defaultType',3,'wmData',4],[],e,s,gg)
_(cI3,lK3)
}
var oJ3=_v()
_(hG3,oJ3)
if(_oz(z,11,e,s,gg)){oJ3.wxVkey=1
var aL3=_mz(z,'wm-webview',['bind:onBindError',12,'bind:onBindLoad',1,'bind:onBindMessage',2,'defaultType',3,'wmData',4],[],e,s,gg)
_(oJ3,aL3)
}
cI3.wxXCkey=1
cI3.wxXCkey=3
oJ3.wxXCkey=1
oJ3.wxXCkey=3
oH3.pop()
_(fE3,hG3)
}
var cF3=_v()
_(xC3,cF3)
if(_oz(z,17,e,s,gg)){cF3.wxVkey=1
var tM3=_mz(z,'custom-tab-bar',['id',18,'selected',1],[],e,s,gg)
_(cF3,tM3)
}
var eN3=_n('tm')
_(xC3,eN3)
fE3.wxXCkey=1
fE3.wxXCkey=3
cF3.wxXCkey=1
cF3.wxXCkey=3
oD3.pop()
_(r,xC3)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_48";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_48();	if (__vd_version_info__.delayedGwx) __wxAppCode__['npm/wmfe/wxapp-component-webview0_9_11/src/components/webview.wxml'] = [$gwx_XC_48, './npm/wmfe/wxapp-component-webview0_9_11/src/components/webview.wxml'];else __wxAppCode__['npm/wmfe/wxapp-component-webview0_9_11/src/components/webview.wxml'] = $gwx_XC_48( './npm/wmfe/wxapp-component-webview0_9_11/src/components/webview.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/web-view/web-view.wxml'] = [$gwx_XC_48, './pages/web-view/web-view.wxml'];else __wxAppCode__['pages/web-view/web-view.wxml'] = $gwx_XC_48( './pages/web-view/web-view.wxml' );
	;__wxRoute = "npm/wmfe/wxapp-component-webview0_9_11/src/components/webview";__wxRouteBegin = true;__wxAppCurrentFile__="npm/wmfe/wxapp-component-webview0_9_11/src/components/webview.js";define("npm/wmfe/wxapp-component-webview0_9_11/src/components/webview.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../@babel/runtime/helpers/typeof"),t=require("../../../../babel/runtime7_2_0/helpers/interopRequireDefault")(require("../../../../babel/runtime7_2_0/helpers/extends")),r=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var i=a(r);if(i&&i.has(t))return i.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t,s)){var l=o?Object.getOwnPropertyDescriptor(t,s):null;l&&(l.get||l.set)?Object.defineProperty(n,s,l):n[s]=t[s]}return n.default=t,i&&i.set(t,n),n}(require("./lib/constant")),i=require("./lib/middleware");function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}var n=require("../../../wxapp-component-monitor1_0_5/dist/components/index").default({project:"takeaway-waimai-wxapp-webview",name:"webview",dev:!1,time:10});Component({options:{multipleSlots:!0},properties:{defaultType:{type:String,value:""},wmData:{type:Object,value:r.defaultState,observer:function(){this.data.inited&&this.resolveUrl()}}},data:{showWebView:!1,showSlot:!1,showLoading:!0,inited:!1,url:"",redirectUrl:""},attached:function(){var e=wx.getSystemInfoSync().SDKVersion;wx.canIUse("web-view")&&(0,i.compareVersion)(e,r.minVersion)>=0||this.setData({showWebView:!1,showSlot:!0})},ready:function(){this.initRedirectUrl(),this.initType(),this.resolveUrl(),this.setData({inited:!0}),wx.hideNavigationBarLoading()},moved:function(){},detached:function(){},methods:{initType:function(){var e=this.properties,i=e.wmData,a=e.defaultType;i.type||this.setData({wmData:(0,t.default)({},i,{type:a||r.REDIRECT})})},initRedirectUrl:function(){var e=this.properties.wmData,t=e.env,r=e.redirectUrl;this.setData({redirectUrl:r||(0,i.getDefaultRedirectUrl)(t)})},showLoading:function(){wx.showLoading({title:"加载中"})},hideLoading:function(){wx.hideLoading()},onMessageWebview:function(e){var t=e.detail;if(this.triggerEvent("onBindMessage",t),t&&t.data){var r={};try{r=t.data[t.data.length-1]||{}}catch(e){}this.resolveShareConfig(r)}},onLoadWebview:function(e){var t=e.detail;this.triggerEvent("onBindLoad",t)},onErrorWebview:function(e){var t=e.detail;this.triggerEvent("onBindError",t)},resolveShareConfig:function(e){var t=e.type;(void 0===t?"":t)===r.SHARE&&wx.setStorageSync(r.WEBVIEW_SHARE_CONFIG,JSON.stringify(e))},delayBack:function(e,t){void 0===e&&(e=""),void 0===t&&(t=0),wx.showToast({title:e}),setTimeout((function(){wx.navigateBack()}),t)},showModle:function(e,t){void 0===t&&(t=""),wx.showModal({title:e,content:t})},resolveUrl:function(){var e=this.properties.wmData,a=e.loginData,o=e.baseData,s=e.webviewUrl,l=e.type,c=e.q,u=e.ctype,d=e.wm_ctype,w=this.properties.wmData.queryData;w=w||{};var h=this.data.redirectUrl;if(s&&l){var p=(0,i.decodeUrl)(s);if(p=this.removeQueryParam(p,"wm_ctype"),this.targetUrl){if(this.targetUrl===p)return}else this.targetUrl=p;var f=getCurrentPages()&&getCurrentPages().length?getCurrentPages().length:0,g=r.MAX_PAGE_COUNT-f,v=(0,i.checkValidUrl)(p);v&&(n.addError({sign:"CHECK_URL_VALID",name:"webviewUrl校验错误",message:{errMsg:v,url:s,type:l}},!0),n.onceReport());var m=(0,i.getHash)(p,!0).url,y=a||{};if(l!==r.REDIRECT||y.token||(y=(0,i.getLoginData)()),l===r.DIRECT&&!c)return this.setData({url:(0,i.serialize)(p,o,Object.assign(w,{other:!0,ctype:u,wm_ctype:d,webview_source:c?r.SOURCE_QRCODE:r.SOURCE_NATIVE,page_remain:g})),showWebView:!0,showSlot:!1});var b,E=(0,i.getCommonParam)(y),_=Object.assign({},(0,t.default)({},E,{wm_ctype:d,logindata:y||{},redirecturl:(0,i.serialize)(m,o,Object.assign(w,{other:!0,ctype:u,wm_ctype:d,webview_source:c?r.SOURCE_QRCODE:r.SOURCE_NATIVE,page_remain:g}))}));if(c){var D=(0,i.filterParam)(c,_);b=(0,i.serialize)(s,D,Object.assign(w,{hash:!0,other:!0,ctype:u,webview_source:c?r.SOURCE_QRCODE:r.SOURCE_NATIVE,page_remain:g}))}else _.redirecturl=_.redirecturl+(0,i.getHash)(p,!0).hash,b=_.redirecturl&&-1!==_.redirecturl.indexOf("mp.weixin.qq.com")?_.redirecturl:(0,i.serialize)(l===r.REDIRECT&&h||s,_,{hash:!0});this.setData({url:b,showWebView:!0,showSlot:!1})}},removeQueryParam:function(e,t){var r=new RegExp("&?"+t+"=[^&]*","i");return e.replace(r,"")}}});
},{isPage:false,isComponent:true,currentFile:'npm/wmfe/wxapp-component-webview0_9_11/src/components/webview.js'});require("npm/wmfe/wxapp-component-webview0_9_11/src/components/webview.js");;__wxRoute = "pages/web-view/web-view";__wxRouteBegin = true;__wxAppCurrentFile__="pages/web-view/web-view.js";define("pages/web-view/web-view.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../npm/babel/runtime7_2_0/helpers/interopRequireDefault"),t=e(require("../../npm/babel/runtime7_2_0/helpers/toConsumableArray")),a=e(require("../../npm/babel/runtime7_2_0/regenerator/index")),n=e(require("../../npm/babel/runtime7_2_0/helpers/extends")),r=require("../../npm/wmfe/mp-perf1_0_7/index"),i=e(require("../../npm/url0_11_0/url")),o=e(require("../../api/uuid-inject")),s=e(require("../../api/trace-id")),u=require("../../components/login-sdkV2/index"),l=require("../../npm/analytics/wechat-sdk3_10_0/lib/index"),c=require("../../actions/web-view"),d=require("../../actions/purchase"),p=e(require("./util/block-check")),w=e(require("./util/query-data")),f=require("../../utils/warden.config"),g=require("../../api/wx"),h=require("../../npm/wmfe/wxapp-component-webview0_9_11/src/components/lib/constant"),v=require("../../constants"),m=require("../../privacy-config/personalized"),b=e(require("./util/query-string")),_=e(require("../../utils/core-target-report")),x=require("../../api/index").pay,y=require("../../reducers/selectors/common-param").async,D=require("../../common/follow-order/follow-order"),I=require("../../weapp-redux/index").connect,k=require("../../utils/mix"),q=require("../base"),S=function(){return getApp().store.getState()},U=(0,o.default)(),R=wx.getMenuButtonBoundingClientRect(),T=0;if(R){var C=R.top;T=C+R.height+C}var O="afterLoginAction",E="ORIGIN",A="REFRESH",L=require("../../components/rohr/rohr"),W=null,P=["loginData","redirectUrl"],H=function(){},N=function(e){return"function"==typeof e},M=function(e){var t=i.default.parse(e,!1);return!!(t.host.endsWith(".meituan.com")||t.host.endsWith(".meituan.net")||t.host.endsWith(".jchunuo.com")||t.host.endsWith(".dianping.com")||"meituan.com"===t.host||t.host.endsWith(".sankuai.com"))},Q=I((function(e){var t=e.user,a=void 0===t?{}:t,n=e.webview,r=n.loginData,i=n.baseData,o=n.shareConfig,s=n.webviewUrl,u=n.q,l=n.preQrcode,c=n.queryData,d=n.inited;return{shareConfig:o,user:a,webviewData:{loginData:r,baseData:i,webviewUrl:s,q:u,preQrcode:l,ctype:"wm_wxapp",wm_ctype:"wxapp",queryData:c,env:"qa"===e.dev.env?0:1,inited:d},defaultType:""}}),(function(e){return{updateWebview:function(t){return e((0,c.updateWebview)(t))},rollbackWebview:function(t){return e((0,c.rollbackWebview)(t))},setInvoice:function(t){return e((0,d.setInvoice)(t))},setPatient:function(t){return e((0,d.setPatient)(t))}}})),j=function(e,t){var a=decodeURIComponent(e),n=i.default.parse(a,!0),r=n.query,o=void 0===r?{}:r;for(var s in t)void 0===t[s]?delete o[s]:o[s]=t[s];return delete n.search,i.default.format(n)},B=function(e){var t="qa"===S().dev.env,a=e?decodeURIComponent(e):null;if(t&&a){var n=a.indexOf("?"),r=a.substring(n);r&&"undefined"!==r&&(a="https://wx.waimai.test.meituan.com/weapp/short/transfer/wm"+r)}return j(a,{s:void 0})},J={pageName:"web-view",data:{xmlType:E,scenes:null,_type:E,preQrcode:"",loaded:!1,lxPassData:"",navBarHeight:T,showCustomTabbar:!1},onShareAppMessage:function(){var e=this.data,t=e.shareConfig,a=e.webviewData,r=-1!=(a.webviewUrl||"").indexOf("mp.weixin.qq.com"),o=wx.getStorageSync("webviewShareConfig"),s=o&&!r?JSON.parse(o):{},u="";if(a.q)u=(0,n.default)({},s||{},{path:"/pages/web-view/web-view?q="+a.q});else{var l=decodeURIComponent(a.webviewUrl),c=i.default.parse(l,!0).query,d=void 0===c?{}:c;if(d.title||d.image){var p={};return p.title=d.title||void 0,p.imageUrl=d.image||void 0,p.path="/pages/web-view/web-view?type=DIRECT&webviewUrl="+a.webviewUrl,p}if(o)return this.updateWebview((0,n.default)({},a,{shareConfig:s})),s;var w=a.webviewUrl;w=this.deleteUrlPersonalInfo(w),/%/.test(w)||(w=encodeURIComponent(w)),u=r?(0,n.default)({path:"/pages/web-view/web-view?defaultType=DIRECT&onHideRemain=1&type=DIRECT&webviewUrl="+a.webviewUrl},t||{}):(0,n.default)({path:"/pages/web-view/web-view?redirectUrl="+w},t||{})}return this.updateWebview((0,n.default)({},a,{shareConfig:u})),u},deleteUrlPersonalInfo:function(e){if(!decodeURIComponent(e).includes("/node/doubletwelve/detail"))return e;var t=i.default.parse(decodeURIComponent(e),!0);return delete t.query.token,delete t.query.wm_logintoken,delete t.query.userId,delete t.query.wm_actual_latitude,delete t.query.wm_actual_longitude,delete t.query.user_id,delete t.query.wx_pay_params,delete t.query.openid,delete t.query.__lxsdk_params,delete t.query._lx_ver,delete t.wxapp_login_status,delete t.search,i.default.format(t)},resetQrcodeType:function(){var e,t,n,r=this;return a.default.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e=getApp(),t=e[O],!this.data.webviewData.q||t||this.onHideRemain){i.next=9;break}return i.next=6,a.default.awrap(this.getRefreshWebviewData(t));case 6:return n=i.sent,clearTimeout(W),i.abrupt("return",this.setData({xmlType:null},(function(){W=setTimeout((function(){r.setData({xmlType:A,webviewData:n})}),100)})));case 9:return i.abrupt("return",null);case 10:case"end":return i.stop()}}),null,this)},onShow:function(){this.banReload||this.checkSceneToHome()},onLoad:function(e){var t,r,o,u,l,c,d,p,x,I,k,q,R,T,C,O,E,A,L,W,P,H,N,Q,J,z,F,G,V,K,X,Y,Z,$,ee,te,ae,ne,re,ie,oe,se,ue,le,ce,de,pe,we,fe,ge,he,ve,me,be,_e,xe,ye,De,Ie,ke,qe,Se,Ue,Re,Te;return a.default.async((function(Ce){for(;;)switch(Ce.prev=Ce.next){case 0:this.handlePresetOptions(e),t=e.q,r=e.from,o=e.preQrcode,u=e.banReload,l=void 0!==u&&u,this.banReload=l,c=this.data.webviewData,d=c.preQrcode,p=e.type||c.type||"REDIRECT",x=e.webviewUrl||e.redirectUrl||c.webviewUrl,I={},k={},q=this.data.webviewData.loginData,R=e.checkInited||"",I=e.baseData||c.baseData||{},D(decodeURIComponent(x)),this.lxMge.view({val_bid:"b_waimai_5gy1z6a9_mv",webviewOpt:e}),""===t&&d&&(t=d),this.isActivity(x)&&(T=String(wx.getStorageSync("wx_scene")||0),I.wx_scene=T,e.wxapp_force_loc="1",e.wxapp_h5_payment="1",p="REDIRECT"),C=String(wx.getStorageSync("wx_scene")||0),I.wm_wxapp_scene=C,O=S()||{},x=this.deleteUrlPersonalInfo(x),E=decodeURIComponent(x),-1===x.indexOf("?")&&E!==x||(E=x),t?(x=B(t),E=x,x.indexOf("onHideRemain=true")>-1&&this.checkOnHideReset({onHideRemain:!0})):x&&(A=s.default.getTraceId("",x,{}),L=A.ref_list_id,-1===E.indexOf("ref_list_id")&&(W=E.split("#"),-1!==(E=W[0]).indexOf("?")?E+="&ref_list_id="+L:E+="?ref_list_id="+L,W.length>1&&(E+="#"+W[1])),E.indexOf("onHideRemain=true")>-1&&this.checkOnHideReset({onHideRemain:!0})),P=O.dev.env,(H=i.default.parse(E,!1)).query=(0,b.default)(H);try{(0,_.default)("webview-page-collection",{url:""+H.hostname+H.pathname+(H.hash||"")},.05)}catch(e){}if(!(N=H&&H.query||{}).wxapp_force_loc&&!e.wxapp_force_loc){Ce.next=66;break}return Ce.next=34,a.default.awrap(this.setData({locLoading:!0}));case 34:return Q=0,J=O.wx,z=J.latitude,F=J.longitude,G="",V="",Ce.prev=38,Ce.next=41,a.default.awrap((0,g.getLocation)({_mt:{sceneToken:"dj-b61006569ae2989c"}}));case 41:K=Ce.sent,X=K.latitude,Y=K.longitude,G=X,V=Y,Ce.next=51;break;case 48:Ce.prev=48,Ce.t0=Ce.catch(38),Q="auth"===Ce.t0.errtype?2:1;case 51:return N.wxapp_loc_status=0,N.wm_latitude=O.recipient.latitude||G||z,N.wm_longitude=O.recipient.longitude||V||F,N.wm_actual_latitude=G||z,N.wm_actual_longitude=V||F,E=j(E,{wxapp_loc_status:Q,wm_latitude:O.recipient.latitude||G||z,wm_longitude:O.recipient.longitude||V||F,wm_actual_latitude:G||z,wm_actual_longitude:V||F,wxapp_force_loc:void 0}),N.wxapp_force_loc=void 0,N.wm_actual_latitude=G||z,N.wm_actual_longitude=V||F,N.wm_latitude=O.recipient.latitude||G||z,N.wm_longitude=O.recipient.longitude||V||F,Ce.next=64,a.default.awrap(this.setData({locLoading:!1}));case 64:Ce.next=67;break;case 66:"*"===N.location&&(N.wm_actual_latitude=O.wx.latitude,N.wm_actual_longitude=O.wx.longitude,N.wm_latitude=O.recipient.latitude,N.wm_longitude=O.recipient.longitude,delete N.location,delete H.search);case 67:if(!N.wxapp_force_login&&!e.wxapp_force_login||!M(E)){Ce.next=139;break}if(p=h.DIRECT,"1"!==N.wxapp_force_login&&"1"!==e.wxapp_force_login){Ce.next=78;break}return Ce.next=72,a.default.awrap(this.setData({locLoading:!0}));case 72:return Ce.next=74,a.default.awrap(this.forceLogin());case 74:return Z=Ce.sent,N.wxapp_login_status=Z?"0":"1",Ce.next=78,a.default.awrap(this.setData({locLoading:!1}));case 78:return Ce.next=80,a.default.awrap(global.mmb.getLoginInfo());case 80:if(Ce.t1=Ce.sent,Ce.t1){Ce.next=83;break}Ce.t1={};case 83:return $=Ce.t1,ee=$.token,te=$.userId,Ce.next=88,a.default.awrap(global.mmb.getUserInfo());case 88:return ae=Ce.sent,ne=ae.nickName,re=void 0===ne?"":ne,ie=ae.avatarUrl,oe=void 0===ie?"":ie,Ce.next=95,a.default.awrap(global.mmb.getIdInfo());case 95:if(Ce.t2=Ce.sent,Ce.t2){Ce.next=98;break}Ce.t2={};case 98:if(se=Ce.t2,ue=se.openId,le=se.openIdCipher,N.wm_logintoken=ee,N.token=ee,!(N.used_pay_scene||e.used_pay_scene||e.wxapp_h5_payment||N.rice_school_scene||e.rice_school_scene)){Ce.next=136;break}return Ce.next=106,a.default.awrap(U());case 106:return ce=Ce.sent,getApp().globalData.token=ee,getApp().globalData.userId=te,getApp().globalData.openId=ue,getApp().globalData.uuid=ce,getApp().globalData.appid="wx2c348cf579062e56",getApp().globalData.sysInfo=wx.getSystemInfoSync(),getApp().globalData.mt_localCity={},de=O.wx||{},getApp().globalData.location=de,getApp().globalData.cityInfo={},N.mp_type="waimai",N.wm_ctype=v.appnm,N.user_id=te,(pe=wx.getStorageSync("wx_set_info")||"")&&(we=pe.split(",")||[,""],fe=we[0],ge=we[1],he=void 0===ge?"":ge,ve=fe.split("=")||[,""],me=ve[1],N.region_id=me,N.region_version=he),be={openid:ue,app_id:"wx2c348cf579062e56",avatar_url:oe,nickname:re,open_id:ue,openIdCipher:le},Ce.next=125,a.default.awrap(y(O));case 125:_e=Ce.sent,N.wx_pay_params=JSON.stringify(be),N.utm_term=v.VERSION,N.utm_campaign="AwaimaiBwaimai",N.utm_medium=_e.wm_dtype,N.utm_source="5000",N.wm_uuid=ce,N.userId=te,N.used_pay_scene&&"1"===N.used_pay_scene&&(N.wm_dversion=_e.wm_dversion),_e.wm_latitude&&_e.wm_actual_latitude||(delete _e.wm_latitude,delete _e.wm_longitude,delete _e.wm_actual_latitude,delete _e.wm_actual_longitude),N=Object.assign(N,_e,be);case 136:delete H.search,Ce.next=172;break;case 139:if(!(e.used_pay_scene||e.wxapp_h5_payment||N.used_pay_scene||N.wxapp_h5_payment)){Ce.next=172;break}return Ce.next=142,a.default.awrap(this.forceLogin());case 142:return Ce.next=144,a.default.awrap(global.mmb.getLoginInfo());case 144:if(Ce.t3=Ce.sent,Ce.t3){Ce.next=147;break}Ce.t3={};case 147:return xe=Ce.t3,ye=xe.token,De=xe.userId,Ce.next=152,a.default.awrap(global.mmb.getIdInfo());case 152:if(Ce.t4=Ce.sent,Ce.t4){Ce.next=155;break}Ce.t4={};case 155:return Ie=Ce.t4,ke=Ie.openId,Ce.next=159,a.default.awrap(U());case 159:qe=Ce.sent,N.wm_logintoken=ye,N.token=ye,getApp().globalData.token=ye,getApp().globalData.userId=De,getApp().globalData.openId=ke,getApp().globalData.uuid=qe,getApp().globalData.appid="wx2c348cf579062e56",getApp().globalData.sysInfo=wx.getSystemInfoSync(),getApp().globalData.mt_localCity={},Se=O.wx||{},getApp().globalData.location=Se,getApp().globalData.cityInfo={};case 172:try{Ue=(0,m.getPersonalizedDataSync)(),N.privacySwitches=encodeURIComponent(JSON.stringify(Ue)),delete H.search,E=i.default.format(H)}catch(e){(0,f.customError)({level:"info",tracer_type:"个性化推荐",error_level_sub:"webview获取个性化推荐失败",content:""})}return Ce.next=175,a.default.awrap(this.addLxUrlEnv(E,H,N));case 175:return E=Ce.sent,x=E,Ce.next=179,a.default.awrap(this.loginDataNeedUpdate(q));case 179:if(Re=Ce.sent,!(p&&"REDIRECT"===p&&Re||t)){Ce.next=184;break}return Ce.next=183,a.default.awrap(this.updateLoginData());case 183:k.loginData=Ce.sent;case 184:this.storeWebviewUrl(),Te=Object.assign(c,(0,n.default)({},k,{env:"qa"===P?0:1,redirectUrl:null,webviewUrl:x,baseData:I,q:t||null,preQrcode:o||null,type:p,queryData:(0,w.default)(x,!t),inited:1,checkInited:R})),this.updateWebview((0,n.default)({},Te)),this.setData({webviewData:Te,preQrcode:o||"",q:t||null,showCustomTabbar:"tab"===r}),"tab"===r&&wx.hideHomeButton();case 189:case"end":return Ce.stop()}}),null,this,[[38,48]])},onLoadWebview:function(e){var t=e.detail.src;"ORIGIN"===this.data.xmlType&&r.metrics.addWebview("load",{url:t});var a=(0,p.default)(t),n=a.tracer_type,i=a.error_level_sub,o=a.error_code,s=a.content;n&&(Object.assign(s,{wxUrl:t,option:this.options}),(0,f.customError)({tracer_type:n,error_level_sub:i,error_code:o,content:s,reportNow:!0}))},onErrorWebview:function(e){var t=e.detail.src,a=void 0===t?"":t,n=i.default.parse(a),r=n.host,o=n.pathname;(0,f.customError)({tracer_type:"webview binderror",error_level_sub:r,error_code:r+o,content:{url:a},reportNow:!0})},onMessage:function(e){var a=e.detail.data;if(a.length>0&&"order-data"===a[0].msgId&&this.getOpenerEventChannel().emit("acceptDataFromWebviewPage",a[0]),a.length>0&&"invoice-data"===a[0].msgId&&(this.setInvoice({data:a[0].invoice}),this.getOpenerEventChannel().emit("acceptDataFromWebviewPage",a[0])),a.length>0&&"patient-data"===a[0].msgId&&this.setPatient({data:a[0].patient_id}),a.length>0){var n=a[0];"sg_payNormal"===n.msgId&&this.normalPay(n)}a.length>0&&"share"===a[0].type&&(this.data.shareConfig=a[0]);var r=a.length>0?a[a.length-1]:{};if("privacyConfig"===(r.msgId||"")){var i=r.config||[];(0,m.updatePersonalizedConfig)(i,(function(e){}))}this.commonMsgStore((0,t.default)(a),["shooter"])},commonMsgStore:function(e,t){void 0===e&&(e=[]),global.webviewMsg=global.webviewMsg||{},e.forEach((function(e){void 0===e&&(e={});var a=e,n=a.type,r=a.business,i=a.key;"store"===n&&t.includes(r)&&(global.webviewMsg[r+"_"+i]=e)}))},normalPay:function(e){var t;return a.default.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.default.awrap(x({wm_order_id_view:e.viewId,touchPoint:9,no_yb_pay:1}));case 3:return t=n.sent,n.next=6,a.default.awrap((0,g.requestPayment)(t));case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0);case 11:e.setTime&&e.setTime>0&&setTimeout((function(){wx.navigateTo({url:"/pages/order-info/order-info?order_id="+e.order_id+"&view_id="+e.viewId+"&poi_id="+e.poi_id})}),e.setTime);case 12:case"end":return n.stop()}}),null,null,[[0,8]])},forceLogin:function(){var e;return a.default.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.default.awrap(global.mmb.isLogin());case 2:if(!t.sent){t.next=4;break}return t.abrupt("return",!0);case 4:return t.next=6,a.default.awrap(global.mmb.login({}));case 6:if(e=t.sent){t.next=10;break}return t.abrupt("return",!1);case 10:if(!e.token){t.next=12;break}return t.abrupt("return",!0);case 12:case"end":return t.stop()}}))},loginDataNeedUpdate:function(e){var t,n,r,i,o;return a.default.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=!e||!e.token,n=S()||{},n.user,s.next=4,a.default.awrap(global.mmb.getLoginInfo());case 4:if(s.t0=s.sent,s.t0){s.next=7;break}s.t0={};case 7:return r=s.t0,i=r.token,o=r.userId,s.abrupt("return",t||e.token!==i||e.userid!==o||!(e.userInfo||{}).avatarUrl);case 11:case"end":return s.stop()}}))},storeWebviewUrl:function(){var e=this.data.webviewData.webviewUrl;e&&this.needStoreUrl(e)&&wx.setStorageSync("webviewUrl",e)},needStoreUrl:function(e){return e&&-1===e.indexOf(O)},updateLoginData:function(e){var t,n,r,i,o,s,l,c;return a.default.async((function(d){for(;;)switch(d.prev=d.next){case 0:return e=e||{},d.next=3,a.default.awrap(global.mmb.getIdInfo());case 3:if(d.t0=d.sent,d.t0){d.next=6;break}d.t0={};case 6:return t=d.t0,n=t.openId,d.next=10,a.default.awrap(global.mmb.getLoginInfo());case 10:if(d.t1=d.sent,d.t1){d.next=13;break}d.t1={};case 13:return r=d.t1,i=r.token,o=r.userId,s={},s={openid:n,token:i,userid:o},d.prev=18,d.next=21,a.default.awrap(U());case 21:return l=d.sent,d.next=24,a.default.awrap(u.loginPlugin.getUserInfo());case 24:c=d.sent,s.iuuid=l,s.userInfo=c,d.next=32;break;case 29:d.prev=29,d.t2=d.catch(18);case 32:return d.abrupt("return",s);case 33:case"end":return d.stop()}}),null,null,[[18,29]])},isActivity:function(e){return/market\.waimai\.(test\.sankuai|meituan)\.com/g.test(decodeURIComponent(e))},handlePresetOptions:function(e){void 0===e&&(e={}),this.checkTrueType(e),this.checkShareMenu(e),this.checkOnHideReset(e),this.checkScene(e)},checkTrueType:function(e){var t=e.defaultType;this.setData({defaultType:t||""})},checkOnHideReset:function(e){var t=e.onHideRemain,a=void 0!==t&&t;return this.onHideRemain=!!a,this},checkShareMenu:function(e){var t=e.isHideShareMenu;void 0!==t&&t&&wx.hideShareMenu()},checkScene:function(e){var t=e.scenes,a=void 0===t?"":t;if(a=a||null)try{a=a.split(/\s*,\s*/),this.setData({scenes:a})}catch(e){this.delayBack("场景值："+a+"有误",2e3,e)}},getRefreshWebviewData:function(e){var t,n,r,i,o,s,u;return a.default.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=this.data.webviewData,n=S(),r=wx.getStorageSync("webviewUrl")||t.webviewUrl,i=r.indexOf("#"),o=-1!==decodeURIComponent(r).indexOf("?")?"&":"?",s="",u=t,-1!==i&&(s=r.substr(i),r=r.substring(0,i)),Object.assign(u,{webviewUrl:""+r+o+O+"="+e+s}),l.next=11,a.default.awrap(this.updateLoginData());case 11:return u.loginData=l.sent,u.env="qa"===n.dev.env?0:1,u.type="REDIRECT",l.abrupt("return",u);case 15:case"end":return l.stop()}}),null,this)},resetEnv:function(){var e=this.data.webviewData,t=(S()||{}).dev.env;this.setData({webviewData:(0,n.default)({},e,{env:"qa"===t?0:1})})},resolveLoginTag:function(){var e,t,n,r,i=this;return a.default.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=this.data._type,t=getApp(),n=t[O],this.resetEnv(),n){o.next=8;break}if(!this.onHideRemain){o.next=7;break}return o.abrupt("return",!1);case 7:return o.abrupt("return",this.setData({xmlType:e}));case 8:return o.next=10,a.default.awrap(this.getRefreshWebviewData(n));case 10:return r=o.sent,t[O]=null,o.abrupt("return",this.setData({xmlType:null},(function(){i.setData({xmlType:A,webviewData:r})})));case 13:case"end":return o.stop()}}),null,this)},checkSceneToHome:function(){if(this.data.loaded){var e=this.data.scenes,t=void 0===e?null:e,a=String(wx.getStorageSync("wx_scene")||0);a&&t&&t.length&&-1!==t.indexOf(a)&&wx.switchTab({url:"/pages/index/index"}),this.resolveLoginTag(),this.resetQrcodeType()}else this.setData({loaded:!0})},clearShareConfig:function(){wx.removeStorageSync("webviewShareConfig")},updatePartData:function(e){var t=this.data.webviewData,a=JSON.parse(JSON.stringify(t),(function(e,t){if(-1===P.indexOf(e))return t}));"REDIRECT"!==e||a.loginData||this.updateLoginData(a),this.updateWebview(a)},storeDataIfNeed:function(e,t){void 0===t&&(t=H);var a=this.data.webviewData;if(!a)return!1;var n=a.webviewUrl;N(e)&&(t=e,e=a.type),n&&this.needStoreUrl(n)&&wx.setStorageSync("webviewUrl",n),this.updatePartData(e),N(t)&&t.call(this)},onHide:function(){var e=this;this.storeDataIfNeed((function(){e.onHideRemain||e.setData({xmlType:null})}))},onUnload:function(){this.clearShareConfig(),this.rollbackWebview()},addLxUrlEnv:function(e,t,n){var r,o,s;return a.default.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(u.prev=0,r=e,["acstatic/merchantcoupon"].find((function(e){return(""+t.pathname).includes(e)}))){u.next=13;break}if(this.data.lxPassData){u.next=9;break}return u.next=7,a.default.awrap((0,l.setURLEnv)({withEnvKeys:["ch","appnm"]}));case 7:o=u.sent,this.data.lxPassData=o;case 9:s=this.data.lxPassData.split("&").reduce((function(e,t){if(-1===(""+t).indexOf("="))e.__lxsdk_params=t;else{var a=(""+t).split("="),n=a[0],r=a[1];e[n]=r}return e}),{}),Object.keys(s).forEach((function(e){n[e]=s[e]})),delete t.search,r=i.default.format(t);case 13:return u.abrupt("return",r);case 16:return u.prev=16,u.t0=u.catch(0),u.abrupt("return",e);case 19:case"end":return u.stop()}}),null,this,[[0,16]])}};(0,r.page)(k(J,q,Q,L));
},{isPage:true,isComponent:true,currentFile:'pages/web-view/web-view.js'});require("pages/web-view/web-view.js");