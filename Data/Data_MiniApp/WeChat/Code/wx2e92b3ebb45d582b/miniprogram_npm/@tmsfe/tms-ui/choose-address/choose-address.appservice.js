$gwx_XC_23=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];
function gz$gwx_XC_23_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrap'])
Z([[6],[[7],[3,'style']],[3,'wrap']])
Z([[7],[3,'tipShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_23=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_23_1()
var oXH=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var lYH=_v()
_(oXH,lYH)
if(_oz(z,2,e,s,gg)){lYH.wxVkey=1
}
var aZH=_n('slot')
_(oXH,aZH)
lYH.wxXCkey=1
_(r,oXH)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_23";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address.wxml'] = [$gwx_XC_23, './miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address.wxml'] = $gwx_XC_23( './miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address.js";define("miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../../@babel/runtime/helpers/objectSpread2"),t=r(require("../../../../@babel/runtime/regenerator")),a=require("../../../../@babel/runtime/helpers/slicedToArray"),n=require("../../../../@babel/runtime/helpers/asyncToGenerator"),i=r(require("@tmsfe/tms-core")),o=r(require("../platformUtils"));function r(e){return e&&e.__esModule?e:{default:e}}var s=i.default.createRequest,d=i.default.getLogManager,c=s(),u={getLogManager:d};Component({properties:{spId:{type:String,value:""},businessId:{type:String,value:""},customStyle:{type:Object,observer:function(){this.updateCustomStyle()}},buttonText:{type:String,value:"保存"}},data:{name:"",phone:"",address:"",region:[],adCode:"",nation:"",ifCanSave:!1,tipShow:!1,deviceClass:"",style:{wrap:"",btnWechat:"",tipWechat:"",infoWrap:"",btnSave:""}},logger:null,attached:function(){var e=this;return n(t.default.mark((function n(){var i,o,r,s,d,u,h,l,f;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.updateCustomStyle(),t.next=3,c.get("user/delivery/get",{});case 3:if(0===(i=t.sent).errCode&&i.resData.info&&0!==i.resData.info.length){t.next=6;break}return t.abrupt("return");case 6:o=a(i.resData.info,1),r=o[0],s=r.name,d=r.deliveryAddress,u=r.mobilePhone,h=[r.province,r.city,r.district],e.data.adCode=r.adcode,e.setData({name:s,phone:u,region:h,address:d}),e.setData({ifCanSave:e.validate()}),l=wx.getSystemInfoSync(),f=-1!==l.model.search("iPhone"),e.setData({iPhoneStyle:f?"iPhoneStyle":""});case 17:case"end":return t.stop()}}),n)})))()},ready:function(){this.setData({deviceClass:o.default.getDeviceClass()})},methods:{updateCustomStyle:function(){var t=this.data.customStyle||{},a=t.wrap,n=void 0===a?"":a,i=t.btnWechat,o=void 0===i?"":i,r=t.tipWechat,s=void 0===r?"":r,d=t.infoWrap,c=void 0===d?"":d,u=t.btnSave,h=void 0===u?"":u;this.setData({style:e(e({},this.data.style),{},{wrap:n,btnWechat:o,tipWechat:s,infoWrap:c,btnSave:h})})},wechatAddressTap:function(){var e=this;this.getUserAuth("scope.address").then((function(){return e.chooseWXAddr()})).catch((function(e){e.isFirstAuth||e.cancel||wx.showToast({title:"未授权获取微信地址薄",icon:"none"})}))},chooseWXAddr:function(){var e=this;wx.chooseAddress({success:function(t){var a=[];a[0]=t.provinceName,a[1]=t.cityName,a[2]=t.countyName,e.setData({name:t.userName,phone:t.telNumber}),e.regionValidate(a)?(e.data.region=a,e.data.address=t.detailInfo,e.setData({ifCanSave:e.validate()}),e.getAdCodeByRegion()):wx.showToast({title:"地区暂不支持",icon:"none"})}})},locationTap:function(){var e=this;this.getUserAuth("scope.userLocation").then((function(){return e.chooseWXLocation()})).catch((function(e){e.isFirstAuth||e.cancel||wx.showToast({title:"未授权获取地理位置",icon:"none"})}))},chooseWXLocation:function(){var e=this;wx.chooseLocation({success:function(t){var a=t.latitude,n=t.longitude;c.post("basic/lbs/decode",{lat:a,lng:n}).then((function(t){if(0!==t.errCode||"156"!==t.resData.result.ad_info.nation_code)return wx.showToast({title:"地区暂不支持",icon:"none"}),void e.log("逆地址解析失败 ".concat(t.errCode," ").concat(t.errMsg));var a=t.resData.result.ad_info,n=t.resData.result.formatted_addresses.recommend,i=t.resData.result.address;e.data.adCode=a.adcode,e.data.nation=a.nation;var o=[];o[0]=a.province,o[1]=a.city,o[2]=a.district,e.regionValidate(o)?(e.data.region=o,e.data.address="".concat(i).concat(n),e.setData({ifCanSave:e.validate()}),e.getAdCodeByRegion()):wx.showToast({title:"地区暂不支持",icon:"none"})}))}})},getUserAuth:function(e){var t=this;return this.everDidAuth(e).catch((function(){return t.auth(e).then((function(){return{allow:!0}})).catch((function(e){var t=Object.assign({},e);return t.isFirstAuth=!0,Promise.reject(t)}))})).then((function(a){if(!a.allow)return t.attempToAuthInSetting(e)}))},everDidAuth:function(e){return new Promise((function(t,a){wx.getSetting({success:function(n){void 0===n.authSetting[e]?a(new Error("never call wx.auth({ scope: ".concat(e," })"))):t({allow:n.authSetting[e]})},fail:a})}))},auth:function(e){return new Promise((function(t,a){wx.authorize({scope:e,success:t,fail:a})}))},attempToAuthInSetting:function(e){var t=this;return new Promise((function(a,n){var i="scope.address"===e?"微信地址薄":"地理位置";wx.showModal({title:"",content:"您未授权获取".concat(i,"，请完成授权，谢谢！"),cancelText:"不了",confirmText:"去授权",confirmColor:"#4875fd",success:function(i){var o=new Error;if(!i.confirm)return o.cancel=!0,void n(o);t.goAuthInSetting(e).then(a).catch((function(){return n(o)}))}})}))},goAuthInSetting:function(e){return new Promise((function(t,a){wx.openSetting({success:function(n){var i=n.authSetting;(i?i[e]:null)?t():a(new Error(n))}})}))},bindRegionChange:function(e){var t=e.detail.value;this.regionValidate(t)?(this.data.region=t,this.setData({ifCanSave:this.validate()}),this.getAdCodeByRegion()):wx.showToast({title:"地区暂不支持",icon:"none"})},nameKeyInput:function(e){this.data.name=e.detail.value,this.setData({ifCanSave:this.validate()})},phoneKeyInput:function(e){this.data.phone=e.detail.value,this.setData({ifCanSave:this.validate()})},addressKeyInput:function(e){this.data.address=e.detail.value,this.setData({ifCanSave:this.validate()})},validate:function(){return""!==this.data.name&&""!==this.data.phone&&""!==this.data.address&&""!==this.data.adCode&&!!this.regionValidate(this.data.region)},regionValidate:function(e){if(0===e.length)return!0;var t=a(e,1)[0];return!["台湾省","香港特别行政区","澳门特别行政区"].includes(t)},getAdCodeByRegion:function(){var e=this;this.setData({ifCanSave:!1}),this.setData({tipShow:!1}),c.post("basic/lbs/encode",{address:this.data.region.join("")}).then((function(t){if(0===t.errCode){var a=t.resData.adInfo;e.data.adCode=a.adcode,e.setData({region:e.data.region,address:e.data.address}),e.setData({ifCanSave:e.validate()})}else e.setData({tipShow:!0})})).catch((function(t){e.log("解析AdCode失败 ".concat(t)),e.setData({tipShow:!0}),e.setData({ifCanSave:e.validate()})}))},log:function(){var e;if(!this.logger){var t=null==u?void 0:u.getLogManager;t&&(this.logger=t())}for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];null===(e=this.logger)||void 0===e||e.info.apply(e,n)},saveTap:function(){var e=this;return n(t.default.mark((function a(){return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(/^1\d{10}$/.test(e.data.phone)){t.next=3;break}return wx.showToast({title:"请输入正确号码",icon:"none"}),t.abrupt("return");case 3:c.post("user/delivery/set",{businessId:e.data.businessId,spId:e.data.spId,mobilePhone:e.data.phone,name:encodeURIComponent(e.data.name),country:e.data.nation,province:e.data.region[0],city:e.data.region[1],district:e.data.region[2],deliveryAddress:encodeURIComponent(e.data.address),adcode:e.data.adCode}).then((function(){e.triggerEvent("addrchange",{adCode:e.data.adCode,name:e.data.name,phone:e.data.phone,region:e.data.region,address:e.data.address})}));case 4:case"end":return t.stop()}}),a)})))()},tipTap:function(){this.setData({tipShow:!1})}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address.js'});require("miniprogram_npm/@tmsfe/tms-ui/choose-address/choose-address.js");