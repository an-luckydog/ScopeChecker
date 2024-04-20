$gwx_XC_35=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_35 || [];
function gz$gwx_XC_35_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_35_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loaded']])
Z([3,'prize-modal'])
Z([1,true])
Z([3,'clickModalBtn'])
Z([[6],[[7],[3,'modal']],[3,'data']])
Z([[6],[[7],[3,'modal']],[3,'visible']])
Z([[7],[3,'theme']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_35_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_35=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_35=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_35_1()
var eLJ=_v()
_(r,eLJ)
if(_oz(z,0,e,s,gg)){eLJ.wxVkey=1
}
var bMJ=_mz(z,'drawer',['id',1,'showClose',1],[],e,s,gg)
_(r,bMJ)
var oNJ=_mz(z,'luckydraw-modal',['bind:click-btn',3,'data',1,'show',2,'theme',3],[],e,s,gg)
_(r,oNJ)
eLJ.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_35";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_35();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes.wxml'] = [$gwx_XC_35, './miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes.wxml'] = $gwx_XC_35( './miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes.js";define("miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=s(require("../../../../@babel/runtime/regenerator")),t=require("../../../../@babel/runtime/helpers/defineProperty"),r=require("../../../../@babel/runtime/helpers/objectSpread2"),n=require("../../../../@babel/runtime/helpers/asyncToGenerator"),o=require("../../../../@babel/runtime/helpers/slicedToArray"),i=s(require("./utils")),a=require("../timeUtils");function s(e){return e&&e.__esModule?e:{default:e}}Component({properties:{promotionCode:String,pageFrom:String,theme:{type:String,value:"blue"}},data:{loaded:!1,prizes:[],modal:{visible:!1,data:{}},userPhone:""},justDrawed:null,needRefresh:!1,lifetimes:{created:function(){},attached:function(){this.loadData()}},pageLifetimes:{show:function(){this.needRefresh&&(this.needRefresh=!1,this.updatePrizes())}},methods:{loadData:function(){var e=this;this.triggerEvent("data-load-start",{});var t=i.default.loadPrizeList(this.data.promotionCode),r=i.default.loadPromotionConf(this.data.promotionCode),n=i.default.fetchUserPhone();Promise.all([t,n,r]).then((function(t){var r=o(t,2),n=r[0],i=r[1],a=!!i;e.triggerEvent("data-load-success",{prizes:n,user:{hasPhone:a}});var s=n.map((function(t){return e.formatPrize(t)}));e.setData({userPhone:i,loaded:!0,prizes:s})})).catch((function(t){return e.triggerEvent("data-load-fail",{error:t})}))},formatPrize:function(e){var t,r,n=(null===(t=e.coupons)||void 0===t?void 0:t[0])||{},o=e.prize||{},i=e.delivery||{},s=i.province,d=i.city,u=i.district,c=i.phone,l=i.name,h=i.addr,p=n.endTime?"\n有效期至 ".concat((0,a.formatTime)(new Date(n.endTime),"yyyy-MM-dd")):"";return{drawId:e.id,name:o.name,imgUrl:o.pic.pocket,kind:o.type,id:o.id,deliveryAddress:{area:"".concat(s).concat(d).concat(u),detail:h,receiver:l,phone:c},coupon:{desc:"".concat(n.desc||"").concat(p),status:null===(r=e.coupons)||void 0===r?void 0:r.every((function(e){return e.couponId})),coupons:e.coupons,type:n.name,authPhone:1===n.stockClassify}}},updatePrizes:function(){var e=this;wx.showLoading({title:"刷新中",mask:!0}),i.default.loadPrizeList(this.data.promotionCode).then((function(t){var r=t.map((function(t){return e.formatPrize(t)}));e.setData({prizes:r}),wx.hideLoading()})).catch((function(){return wx.showToast({title:"更新失败",icon:"none"})}))},clickCouponBtn:function(o){var a=this;return n(e.default.mark((function n(){var s,d,u,c,l,h,p,m,f,v,g,w;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=o.currentTarget.dataset,d=s.cur,u=s.index,c=d.coupon,l=c.status,h=c.authPhone,p=c.coupons,m=void 0===p?[]:p,!l){e.next=5;break}return i.default.useCoupon(m[0]),e.abrupt("return");case 5:if(wx.showLoading({title:"请稍等...",mask:!0}),f=a.data.userPhone,!h||f){e.next=16;break}if(v=o.detail,g=v.encryptedData,w=v.iv,g&&w){e.next=11;break}return e.abrupt("return",wx.hideLoading());case 11:return e.next=13,i.default.registerPhone(g,w).catch((function(){return""}));case 13:f=e.sent,a.setData({userPhone:f}),a.triggerEvent("user-phone-change",{userPhone:f});case 16:return e.abrupt("return",i.default.receiveCoupons(a.data.promotionCode,d.drawId,m,f).then((function(e){var n;wx.hideLoading();var o=m.map((function(t,n){var o=(null==e?void 0:e[n])||{},i=o.errCode,a=o.resData;return r(r({},t),0===i&&a||{})})),i=null==e?void 0:e[0];if(0!==(null==i?void 0:i.errCode))return Promise.reject(i);a.setData((t(n={},"prizes[".concat(u,"].coupon.status"),!0),t(n,"prizes[".concat(u,"].coupon.coupons"),o),n)),a.showUIModal({id:"useCoupon",imgUrl:d.imgUrl,title:"恭喜获得".concat(d.name),content:"",btnText:"立即使用"}),a.justDrawed={coupons:o}})).catch((function(e){var t=a.formatReceiveFailure(null==e?void 0:e.errCode);a.showUIModal({id:"close",imgUrl:null==t?void 0:t.icon,title:null==t?void 0:t.title,viceContent:null==t?void 0:t.msg,btnText:"我知道了"}),wx.hideLoading()})));case 17:case"end":return e.stop()}}),n)})))()},formatReceiveFailure:function(e){var t={1e3:{msg:"活动不存在"},1001:{msg:"活动尚未开始"},1002:{msg:"活动已结束"},1004:{msg:"今日已抢光，明天再来吧",icon:"null"},1005:{msg:"本月该项福利领取数量已达上限哦"},1010:{msg:"很抱歉，代金券已抢光",icon:"null"},1011:{msg:"请尝试更换账号领取吧"},1020:{msg:"你已经领过啦"}}[e]||{title:"网络开小差了",msg:"请点击页面右上角省略号\n重新进入页面！",icon:"net"},r=t.title,n=void 0===r?"领取失败":r,o=t.msg,i=void 0===o?"":o,a=t.icon;return{title:n,msg:i,icon:void 0===a?"err":a}},showUIModal:function(e){this.setData({modal:{data:e,visible:!0}})},clickModalBtn:function(e){if("useCoupon"===e.detail.id){var t,r,n=null===(t=this.justDrawed)||void 0===t||null===(r=t.coupons)||void 0===r?void 0:r[0];n&&i.default.useCoupon(n)}},showDetail:function(e){var t=e.currentTarget.dataset.cur,r=t.kind,n=t.drawId,o=t.name,i=t.deliveryAddress,a=i.area,s=i.detail,d=i.receiver,u=i.phone;2===r&&(d?(this.setData({pop:{name:o,area:a,detail:s,receiver:d,phone:u}}),this.showDrawer()):(this.needRefresh=!0,this.triggerEvent("tap-submit-addr-btn",{drawId:n})))},showDrawer:function(){var e=this;this.selectComponent("#prize-modal").show({cancel:function(){e.hideDrawer()}})},hideDrawer:function(){this.selectComponent("#prize-modal").hide()}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes.js'});require("miniprogram_npm/@tmsfe/tms-ui/luckydraw/prizes.js");