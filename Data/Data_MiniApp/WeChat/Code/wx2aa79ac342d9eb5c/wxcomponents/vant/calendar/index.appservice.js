$gwx_XC_24=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];
function gz$gwx_XC_24_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'poppable']])
Z([3,'onOpened'])
Z([3,'onClosed'])
Z([3,'onClose'])
Z([3,'onOpen'])
Z([3,'van-calendar__close-icon'])
Z([[7],[3,'closeOnClickOverlay']])
Z([[2,'||'],[[7],[3,'showTitle']],[[7],[3,'showSubtitle']]])
Z([a,[3,'van-calendar__popup--'],[[7],[3,'position']]])
Z(z[8][2])
Z([[7],[3,'round']])
Z([[7],[3,'safeAreaInsetBottom']])
Z([[7],[3,'show']])
Z([3,'van-toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_24=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_24=true;
var x=['./wxcomponents/vant/calendar/index.wxml','./calendar.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
var cDJ=e_[x[0]].i
_ai(cDJ,x[1],e_,x[0],3,2)
var hEJ=_v()
_(r,hEJ)
if(_oz(z,0,e,s,gg)){hEJ.wxVkey=1
var oFJ=_mz(z,'van-popup',['bind:after-enter',1,'bind:after-leave',1,'bind:close',2,'bind:enter',3,'closeIconClass',4,'closeOnClickOverlay',5,'closeable',6,'customClass',7,'position',8,'round',9,'safeAreaInsetBottom',10,'show',11],[],e,s,gg)
var cGJ=e_[x[0]].j
_ic(x[1],e_,x[0],e,s,oFJ,gg);
cGJ.pop()
_(hEJ,oFJ)
}
else{hEJ.wxVkey=2
var oHJ=e_[x[0]].j
_ic(x[1],e_,x[0],e,s,hEJ,gg);
oHJ.pop()
}
var lIJ=_n('van-toast')
_rz(z,lIJ,'id',13,e,s,gg)
_(r,lIJ)
hEJ.wxXCkey=1
hEJ.wxXCkey=3
cDJ.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_24";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['wxcomponents/vant/calendar/index.wxml'] = [$gwx_XC_24, './wxcomponents/vant/calendar/index.wxml'];else __wxAppCode__['wxcomponents/vant/calendar/index.wxml'] = $gwx_XC_24( './wxcomponents/vant/calendar/index.wxml' );
	;__wxRoute = "wxcomponents/vant/calendar/index";__wxRouteBegin = true;__wxAppCurrentFile__="wxcomponents/vant/calendar/index.js";define("wxcomponents/vant/calendar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=require("../../../@babel/runtime/helpers/interopRequireDefault").default,a=require("../../../@babel/runtime/helpers/toConsumableArray"),i=require("../../../@babel/runtime/helpers/slicedToArray"),n=require("../common/component"),o=require("./utils"),r=t(require("../toast/toast")),s=require("../common/utils"),l=(0,o.getToday)().getTime(),u=(e=(0,o.getToday)(),new Date(e.getFullYear(),e.getMonth()+6,e.getDate()).getTime()),c=function(e){return e instanceof Date?e.getTime():e};(0,n.VantComponent)({props:{title:{type:String,value:"日期选择"},color:String,show:{type:Boolean,observer:function(e){e&&(this.initRect(),this.scrollIntoView())}},formatter:null,confirmText:{type:String,value:"确定"},confirmDisabledText:{type:String,value:"确定"},rangePrompt:String,showRangePrompt:{type:Boolean,value:!0},defaultDate:{type:null,value:(0,o.getToday)().getTime(),observer:function(e){this.setData({currentDate:e}),this.scrollIntoView()}},allowSameDay:Boolean,type:{type:String,value:"single",observer:"reset"},minDate:{type:Number,value:l},maxDate:{type:Number,value:u},position:{type:String,value:"bottom"},rowHeight:{type:null,value:o.ROW_HEIGHT},round:{type:Boolean,value:!0},poppable:{type:Boolean,value:!0},showMark:{type:Boolean,value:!0},showTitle:{type:Boolean,value:!0},showConfirm:{type:Boolean,value:!0},showSubtitle:{type:Boolean,value:!0},safeAreaInsetBottom:{type:Boolean,value:!0},closeOnClickOverlay:{type:Boolean,value:!0},maxRange:{type:null,value:null},minRange:{type:Number,value:1},firstDayOfWeek:{type:Number,value:0},readonly:Boolean},data:{subtitle:"",currentDate:null,scrollIntoView:""},created:function(){this.setData({currentDate:this.getInitialDate(this.data.defaultDate)})},mounted:function(){!this.data.show&&this.data.poppable||(this.initRect(),this.scrollIntoView())},methods:{reset:function(){this.setData({currentDate:this.getInitialDate()}),this.scrollIntoView()},initRect:function(){var e=this;null!=this.contentObserver&&this.contentObserver.disconnect();var t=this.createIntersectionObserver({thresholds:[0,.1,.9,1],observeAll:!0});this.contentObserver=t,t.relativeTo(".van-calendar__body"),t.observe(".month",(function(t){t.boundingClientRect.top<=t.relativeRect.top&&e.setData({subtitle:(0,o.formatMonthTitle)(t.dataset.date)})}))},limitDateRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return t=t||this.data.minDate,a=a||this.data.maxDate,-1===(0,o.compareDay)(e,t)?t:1===(0,o.compareDay)(e,a)?a:e},getInitialDate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=this.data,n=a.type,r=a.minDate,s=a.maxDate,l=a.allowSameDay;if(!t)return[];var u=(0,o.getToday)().getTime();if("range"===n){Array.isArray(t)||(t=[]);var h=t||[],m=i(h,2),p=m[0],y=m[1],v=c(p||u),f=this.limitDateRange(v,r,l?v:(0,o.getPrevDay)(new Date(s)).getTime()),D=c(y||u),d=this.limitDateRange(D,l?D:(0,o.getNextDay)(new Date(r)).getTime());return[f,d]}return"multiple"===n?Array.isArray(t)?t.map((function(t){return e.limitDateRange(t)})):[this.limitDateRange(u)]:(t&&!Array.isArray(t)||(t=u),this.limitDateRange(t))},scrollIntoView:function(){var e=this;(0,s.requestAnimationFrame)((function(){var t=e.data,a=t.currentDate,i=t.type,n=t.show,r=t.poppable,s=t.minDate,l=t.maxDate;if(a){var u="single"===i?a:a[0];if(u&&(n||!r))(0,o.getMonths)(s,l).some((function(t,a){return 0===(0,o.compareMonth)(t,u)&&(e.setData({scrollIntoView:"month".concat(a)}),!0)}))}}))},onOpen:function(){this.$emit("open")},onOpened:function(){this.$emit("opened")},onClose:function(){this.$emit("close")},onClosed:function(){this.$emit("closed")},onClickDay:function(e){if(!this.data.readonly){var t=e.detail.date,n=this.data,r=n.type,s=n.currentDate,l=n.allowSameDay;if("range"===r){var u=i(s,2),h=u[0],m=u[1];if(h&&!m){var p=(0,o.compareDay)(t,h);if(1===p){var y=this.selectComponent(".month").data.days;y.some((function(e,a){var i="disabled"===e.type&&c(h)<c(e.date)&&c(e.date)<c(t);return i&&(t=y[a-1].date),i})),this.select([h,t],!0)}else-1===p?this.select([t,null]):l&&this.select([t,t],!0)}else this.select([t,null])}else if("multiple"===r){var v;if(s.some((function(e,a){var i=0===(0,o.compareDay)(e,t);return i&&(v=a),i}))){var f=s.splice(v,1);this.setData({currentDate:s}),this.unselect(f)}else this.select([].concat(a(s),[t]))}else this.select(t,!0)}},unselect:function(e){var t=e[0];t&&this.$emit("unselect",(0,o.copyDates)(t))},select:function(e,t){if(t&&"range"===this.data.type&&!this.checkRange(e))return void(this.data.showConfirm?this.emit([e[0],(0,o.getDayByOffset)(e[0],this.data.maxRange-1)]):this.emit(e));this.emit(e),t&&!this.data.showConfirm&&this.onConfirm()},emit:function(e){this.setData({currentDate:Array.isArray(e)?e.map(c):c(e)}),this.$emit("select",(0,o.copyDates)(e))},checkRange:function(e){var t=this.data,a=t.maxRange,i=t.rangePrompt,n=t.showRangePrompt;return!(a&&(0,o.calcDateNum)(e)>a)||(n&&(0,r.default)({context:this,message:i||"选择天数不能超过 ".concat(a," 天")}),this.$emit("over-range"),!1)},onConfirm:function(){var e=this;("range"!==this.data.type||this.checkRange(this.data.currentDate))&&wx.nextTick((function(){e.$emit("confirm",(0,o.copyDates)(e.data.currentDate))}))},onClickSubtitle:function(e){this.$emit("click-subtitle",e)}}});
},{isPage:false,isComponent:true,currentFile:'wxcomponents/vant/calendar/index.js'});require("wxcomponents/vant/calendar/index.js");