$gwx_XC_56=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_56 || [];
function gz$gwx_XC_56_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_56=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_56=true;
var x=['./pages/change_phone_num/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_56_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_56";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_56();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/change_phone_num/index.wxml'] = [$gwx_XC_56, './pages/change_phone_num/index.wxml'];else __wxAppCode__['pages/change_phone_num/index.wxml'] = $gwx_XC_56( './pages/change_phone_num/index.wxml' );
	;__wxRoute = "pages/change_phone_num/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/change_phone_num/index.js";define("pages/change_phone_num/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),a=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,o=t.baseUrl+"/cooperation/wap/user_change_phone/",n=t.baseUrl+"/api/accounts/captcha/request",i=t.baseUrl+"/cooperation/wap/send_verify_code/",s=/^1\d{10}$/,r=/^\d{4}$/;Page({data:{changeInfo:{account:"",verifyCode:"",imgCode:"",counting:!1},restTime:"获取验证码",imgCodeKey:"",imgCodeUrl:""},onLoad:function(){this.getImgCode()},bindValue:function(e){var t=this.data.changeInfo,a=e.currentTarget.dataset.type||"",o=e.detail.value;a&&(t[a]=o||""),this.setData({changeInfo:t})},getImgCode:function(){var a=this;wx.request({url:n,header:{"Content-Type":"application/json"},data:{is_json:1,partner:e.globalData.partner},success:function(e){e.data.key?a.setData({imgCodeUrl:"".concat(t.baseUrl).concat(e.data.image_url),imgCodeKey:e.data.key}):wx.showToast({icon:"none",title:e.data.error_msg||"图形验证码获取失败，请稍后重试",duration:2e3})}})},timing:function(){var e=this;e.data.counting=!0,e.data.restTime=60,function t(){setTimeout((function(){--e.data.restTime,e.setData({restTime:e.data.restTime}),0!=e.data.restTime?t():e.setData({counting:!1,restTime:"获取验证码"})}),1e3)}()},getSMSCode:function(){var t=this,o=this.data,n=this.data.changeInfo;if(s.test(n.account))if(r.test(n.imgCode)){var c={account:n.account,scene:"user_change_phone",captcha_1:n.imgCode,captcha_0:o.imgCodeKey};wx.request({url:i,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},method:"POST",data:a(c),success:function(e){if(0!=e.data.error_code)return t.getImgCode(),void wx.showToast({icon:"none",title:e.data.error_msg||"验证码发送失败，请稍后重试",duration:2e3});wx.showToast({icon:"none",title:"验证码已发送",duration:2e3}),t.timing()},fail:function(){t.getImgCode(),wx.showToast({title:res.data.error_msg||"验证码发送失败，请稍后重试",icon:"none"})}})}else wx.showToast({title:"请输入正确的 4 位图形证码",icon:"none"});else wx.showToast({title:"请输入正确的 11 位手机号",icon:"none"})},makeSureChange:function(t){var n=this.data.changeInfo;if(s.test(n.account))if(r.test(n.verifyCode)){var i={phone:this.data.changeInfo.account,verify_code:this.data.changeInfo.verifyCode};wx.request({url:o,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},method:"POST",data:a(i),success:function(t){if(0==t.data.error_code){var a=t.data.sessionid,o="sessionid=".concat(a);wx.setStorageSync("sessionid",o),e.globalData.sessionid=o,wx.showToast({title:"修改成功"}),wx.navigateBack({delta:1})}0!=t.data.error_code&&wx.showModal({title:"提示",content:t.data.error_msg||"error",showCancel:!1,confirmText:"我知道了"})},fail:function(){}})}else wx.showToast({title:"请输入正确的 4 位手机验证码",icon:"none"});else wx.showToast({title:"请输入正确的 11 位手机号",icon:"none"})}});
},{isPage:true,isComponent:true,currentFile:'pages/change_phone_num/index.js'});require("pages/change_phone_num/index.js");