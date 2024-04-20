var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){$gwxc++;if($gwxc>=16e3){throw"Dom limit exceeded, please check if there's any mistake you've made."}return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['components/privacy/privacy.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/codeinfo/codeinfo.json'] = {"usingComponents":{},"navigationBarTitleText":"样品验样"};
		__wxAppCode__['pages/index/index.json'] = {"navigationBarTitleText":"来样拍照","usingComponents":{}};
		__wxAppCode__['pages/logs/logs.json'] = {"usingComponents":{"Privacy":"/components/privacy/privacy"},"navigationBarTitleText":"见证取样验样登录"};
		__wxAppCode__['pages/skInfo/index.json'] = {"usingComponents":{},"navigationBarTitleText":"试块信息"};
	;var __WXML_DEP__=__WXML_DEP__||{};var __wxAppData=__wxAppData||{};var __wxRoute=__wxRoute||"";var __wxRouteBegin=__wxRouteBegin||"";var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __wxAppCurrentFile__=__wxAppCurrentFile__||"";var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};
	var __wxAppConsole__ = console;definePlugin("plugin://wx4179cb34161a15ec", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console, requireMiniProgram, WXWebAssembly) {            var __vd_version_info__=__vd_version_info__||{};            if (typeof console === 'undefined') {console=__wxAppConsole__; };			
			/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wx4179cb34161a15ec=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wx4179cb34161a15ec:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(typeof o==="string"||typeof o==="boolean"||typeof o==="number") return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(Object.prototype.hasOwnProperty.call(o,k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&typeof o==="function"){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

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
var z=__WXML_GLOBAL__.ops_set.$gwx_wx4179cb34161a15ec || [];
function gz$gwx_wx4179cb34161a15ec_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx4179cb34161a15ec_1)return __WXML_GLOBAL__.ops_cached.$gwx_wx4179cb34161a15ec_1
__WXML_GLOBAL__.ops_cached.$gwx_wx4179cb34161a15ec_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-body'])
Z([[7],[3,'showCamera']])
Z([[2,'||'],[[2,'=='],[[7],[3,'cntClick']],[[7],[3,'maxClick']]],[[7],[3,'debug']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx4179cb34161a15ec_1);return __WXML_GLOBAL__.ops_cached.$gwx_wx4179cb34161a15ec_1
}
__WXML_GLOBAL__.ops_set.$gwx_wx4179cb34161a15ec=z;
__WXML_GLOBAL__.ops_init.$gwx_wx4179cb34161a15ec=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/scan/scan-page.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wx4179cb34161a15ec_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}

				global.__wxAppCode__['plugin-private://wx4179cb34161a15ec/pages/scan/scan-page.json'] = {"navigationStyle":"custom"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx4179cb34161a15ec/pages/scan/scan-page.wxml'] = [$gwx_wx4179cb34161a15ec, './pages/scan/scan-page.wxml' ];else global.__wxAppCode__['plugin-private://wx4179cb34161a15ec/pages/scan/scan-page.wxml'] = $gwx_wx4179cb34161a15ec( './pages/scan/scan-page.wxml' );
		global.__wxAppCode__['plugin-private://wx4179cb34161a15ec/plugin.json'] = {"publicComponents":{},"pages":{"scan-page":"pages/scan/scan-page"},"main":"index.js"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx4179cb34161a15ec/plugin.wxml'] = [$gwx_wx4179cb34161a15ec, './plugin.wxml' ];else global.__wxAppCode__['plugin-private://wx4179cb34161a15ec/plugin.wxml'] = $gwx_wx4179cb34161a15ec( './plugin.wxml' );
	
				define("@babel/runtime/helpers/Arrayincludes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}});
 
 			}); 
		define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray; 
 			}); 
		define("@babel/runtime/helpers/arrayWithoutHoles.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var arrayLikeToArray=require("./arrayLikeToArray");function _arrayWithoutHoles(r){if(Array.isArray(r))return arrayLikeToArray(r)}module.exports=_arrayWithoutHoles; 
 			}); 
		define("@babel/runtime/helpers/asyncToGenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function asyncGeneratorStep(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void r(n)}i.done?e(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){asyncGeneratorStep(a,t,o,c,i,"next",n)}function i(n){asyncGeneratorStep(a,t,o,c,i,"throw",n)}c(void 0)}))}}module.exports=_asyncToGenerator; 
 			}); 
		define("@babel/runtime/helpers/classCallCheck.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck; 
 			}); 
		define("@babel/runtime/helpers/createClass.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}module.exports=_createClass; 
 			}); 
		define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=_defineProperty; 
 			}); 
		define("@babel/runtime/helpers/interopRequireDefault.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=_interopRequireDefault; 
 			}); 
		define("@babel/runtime/helpers/iterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _iterableToArray(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}module.exports=_iterableToArray; 
 			}); 
		define("@babel/runtime/helpers/nonIterableSpread.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableSpread; 
 			}); 
		define("@babel/runtime/helpers/toConsumableArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var arrayWithoutHoles=require("./arrayWithoutHoles"),iterableToArray=require("./iterableToArray"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableSpread=require("./nonIterableSpread");function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}module.exports=_toConsumableArray; 
 			}); 
		define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof; 
 			}); 
		define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray; 
 			}); 
		define("@babel/runtime/regenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")()); 
 			}); 
		define("config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ThridAuthKeys=exports.StorageKeys=exports.CacheTimeliness=exports.ApiConfig=void 0;var e="https://l66.co",o={host:e,sdkAuthUrl:"".concat(e,"/scan-service/sdk/verify/wx/plugin"),zoomUrl:"".concat(e,"/decode-service/wxParam/zoom"),decodeUrl:"".concat(e,"/decode-service/decode/image/base64"),loginUrl:"".concat(e,"/decode-service/wx/login")};exports.ApiConfig=o;exports.ThridAuthKeys={baiduAuthKey:"D0TPE2RijVBjqSc6z05DSqePuZV6NRUG"};exports.StorageKeys={QccAuthTime:"QccAuthTime",CameraZoomParam:"CameraZoomParam",UserInfo:"Userinfo"};exports.CacheTimeliness={AuthValidHour:24,CameraZoomVaildMinute:10}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={setScanResultCallback:function(e){this.scanResultListener=e},setScanResultListener:function(e){this.scanResultListener=e},setOnCallBackClickListener:function(e){this.onCallBackClickListener=e},version:"1.2.0"}; 
 			}); 
		define("libs/bmap-wx.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=function(){function t(t,a){for(var e=0;e<a.length;e++){var i=a[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(a,e,i){return e&&t(a.prototype,e),i&&t(a,i),a}}(),a=function(){function a(t){(function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")})(this,a),this.ak=t.ak}return t(a,[{key:"getWXLocation",value:function(t,a,e,i){t=t||"gcj02",a=a||function(){},e=e||function(){},i=i||function(){},wx.getLocation({type:t,success:a,fail:e,complete:i})}},{key:"search",value:function(t){var a={query:(t=t||{}).query||"生活服务$美食&酒店",scope:t.scope||1,filter:t.filter||"",coord_type:t.coord_type||2,page_size:t.page_size||10,page_num:t.page_num||0,output:t.output||"json",ak:this.ak,sn:t.sn||"",timestamp:t.timestamp||"",radius:t.radius||2e3,ret_coordtype:"gcj02ll"},e={iconPath:t.iconPath,iconTapPath:t.iconTapPath,width:t.width,height:t.height,alpha:t.alpha||1,success:t.success||function(){},fail:t.fail||function(){}},i=function(t){a.location=t.latitude+","+t.longitude,wx.request({url:"https://api.map.baidu.com/place/v2/search",data:a,header:{"content-type":"application/json"},method:"GET",success:function(t){var a=t.data;if(0===a.status){var i=a.results,n={};n.originalData=a,n.wxMarkerData=[];for(var o=0;o<i.length;o++)n.wxMarkerData[o]={id:o,latitude:i[o].location.lat,longitude:i[o].location.lng,title:i[o].name,iconPath:e.iconPath,iconTapPath:e.iconTapPath,address:i[o].address,telephone:i[o].telephone,alpha:e.alpha,width:e.width,height:e.height};e.success(n)}else e.fail({errMsg:a.message,statusCode:a.status})},fail:function(t){e.fail(t)}})};if(t.location){var n=t.location.split(",")[1];i({errMsg:"input location",latitude:t.location.split(",")[0],longitude:n})}else this.getWXLocation("gcj02",i,(function(t){e.fail(t)}),(function(t){}))}},{key:"suggestion",value:function(t){var a={query:(t=t||{}).query||"",region:t.region||"全国",city_limit:t.city_limit||!1,output:t.output||"json",ak:this.ak,sn:t.sn||"",timestamp:t.timestamp||"",ret_coordtype:"gcj02ll"},e={success:t.success||function(){},fail:t.fail||function(){}};wx.request({url:"https://api.map.baidu.com/place/v2/suggestion",data:a,header:{"content-type":"application/json"},method:"GET",success:function(t){var a=t.data;0===a.status?e.success(a):e.fail({errMsg:a.message,statusCode:a.status})},fail:function(t){e.fail(t)}})}},{key:"regeocoding",value:function(t){var a={coordtype:(t=t||{}).coordtype||"gcj02ll",ret_coordtype:"gcj02ll",radius:t.radius||1e3,ak:this.ak,sn:t.sn||"",output:t.output||"json",callback:t.callback||function(){},extensions_poi:t.extensions_poi||1,extensions_road:t.extensions_road||!1,extensions_town:t.extensions_town||!1,language:t.language||"zh-CN",language_auto:t.language_auto||0},e={iconPath:t.iconPath,iconTapPath:t.iconTapPath,width:t.width,height:t.height,alpha:t.alpha||1,success:t.success||function(){},fail:t.fail||function(){}},i=function(t){a.location=t.latitude+","+t.longitude,wx.request({url:"https://api.map.baidu.com/reverse_geocoding/v3",data:a,header:{"content-type":"application/json"},method:"GET",success:function(a){var i=a.data;if(0===i.status){var n=i.result,o={};o.originalData=i,o.wxMarkerData=[],o.wxMarkerData[0]={id:0,latitude:t.latitude,longitude:t.longitude,address:n.formatted_address,iconPath:e.iconPath,iconTapPath:e.iconTapPath,desc:n.sematic_description,business:n.business,alpha:e.alpha,width:e.width,height:e.height},e.success(o)}else e.fail({errMsg:i.message,statusCode:i.status})},fail:function(t){e.fail(t)}})};if(t.location){var n=t.location.split(",")[1];i({errMsg:"input location",latitude:t.location.split(",")[0],longitude:n})}else this.getWXLocation("gcj02",i,(function(t){e.fail(t)}),(function(t){}))}},{key:"geocoding",value:function(t){var a={address:(t=t||{}).address||"",city:t.city||"",ret_coordtype:t.coordtype||"gcj02ll",ak:this.ak,sn:t.sn||"",output:t.output||"json",callback:t.callback||function(){}},e={iconPath:t.iconPath,iconTapPath:t.iconTapPath,width:t.width,height:t.height,alpha:t.alpha||1,success:t.success||function(){},fail:t.fail||function(){}};if(t.address)wx.request({url:"https://api.map.baidu.com/geocoding/v3",data:a,header:{"content-type":"application/json"},method:"GET",success:function(t){var a=t.data;if(0===a.status){var i=a.result,n=a;n.originalData=a,n.wxMarkerData=[],n.wxMarkerData[0]={id:0,latitude:i.location.lat,longitude:i.location.lng,iconPath:e.iconPath,iconTapPath:e.iconTapPath,alpha:e.alpha,width:e.width,height:e.height},e.success(n)}else e.fail({errMsg:a.message,statusCode:a.status})},fail:function(t){e.fail(t)}});else{e.fail({errMsg:"input address!"})}}},{key:"weather",value:function(t){var a={coord_type:(t=t||{}).coord_type||"gcj02",output:t.output||"json",ak:this.ak,sn:t.sn||"",timestamp:t.timestamp||""},e={success:t.success||function(){},fail:t.fail||function(){}},i=function(t){a.location=t.longitude+","+t.latitude,wx.request({url:"https://api.map.baidu.com/telematics/v3/weather",data:a,header:{"content-type":"application/json"},method:"GET",success:function(t){var a=t.data;if(0===a.error&&"success"===a.status){var i=a.results,n={};n.originalData=a,n.currentWeather=[],n.currentWeather[0]={currentCity:i[0].currentCity,pm25:i[0].pm25,date:i[0].weather_data[0].date,temperature:i[0].weather_data[0].temperature,weatherDesc:i[0].weather_data[0].weather,wind:i[0].weather_data[0].wind},e.success(n)}else e.fail({errMsg:a.message,statusCode:a.status})},fail:function(t){e.fail(t)}})};if(t.location){var n=t.location.split(",")[0];i({errMsg:"input location",latitude:t.location.split(",")[1],longitude:n})}else this.getWXLocation("gcj02",i,(function(t){e.fail(t)}),(function(t){}))}}]),a}();module.exports.BMapWX=a; 
 			}); 
		define("libs/decode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault");require("../@babel/runtime/helpers/Arrayincludes");var r,t=e(require("../@babel/runtime/regenerator")),n=require("../@babel/runtime/helpers/asyncToGenerator"),o=require("../@babel/runtime/helpers/typeof"),i=void 0!==i?i:{},a={};for(r in i)i.hasOwnProperty(r)&&(a[r]=i[r]);var s,u,c=[],f="";"undefined"!=typeof document&&document.currentScript&&(f=document.currentScript.src),f=0!==f.indexOf("blob:")?f.substr(0,f.lastIndexOf("/")+1):"",s=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},u=function(e,r,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){200==n.status||0==n.status&&n.response?r(n.response):t()},n.onerror=t,n.send(null)};var l=i.print||console.log.bind(console),d=i.printErr||console.warn.bind(console);for(r in a)a.hasOwnProperty(r)&&(i[r]=a[r]);a=null,i.arguments&&(c=i.arguments),i.thisProgram&&i.thisProgram,i.quit&&i.quit;var m;i.wasmBinary&&(m=i.wasmBinary);var p;i.noExitRuntime;"object"!==("undefined"==typeof WXWebAssembly?"undefined":o(WXWebAssembly))&&j("no native wasm support detected");var h=!1;function w(e,r){e||j("Assertion failed: "+r)}var v="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function E(e,r,t){for(var n=r+t,o=r;e[o]&&!(o>=n);)++o;if(o-r>16&&e.subarray&&v)return v.decode(e.subarray(r,o));for(var i="";r<o;){var a=e[r++];if(128&a){var s=63&e[r++];if(192!=(224&a)){var u=63&e[r++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&e[r++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|s)}else i+=String.fromCharCode(a)}return i}function y(e,r){return e?E(S,e,r):""}function g(e,r,t,n){if(!(n>0))return 0;for(var o=t,i=t+n-1,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343)s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a);if(s<=127){if(t>=i)break;r[t++]=s}else if(s<=2047){if(t+1>=i)break;r[t++]=192|s>>6,r[t++]=128|63&s}else if(s<=65535){if(t+2>=i)break;r[t++]=224|s>>12,r[t++]=128|s>>6&63,r[t++]=128|63&s}else{if(t+3>=i)break;r[t++]=240|s>>18,r[t++]=128|s>>12&63,r[t++]=128|s>>6&63,r[t++]=128|63&s}}return r[t]=0,t-o}function _(e,r,t){return g(e,S,r,t)}function k(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&e.charCodeAt(++t)),n<=127?++r:r+=n<=2047?2:n<=65535?3:4}return r}var b,D,S,F;"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");i.INITIAL_MEMORY;var A,P=[],R=[],M=[];var x=0,z=null,B=null;function T(e){x++,i.monitorRunDependencies&&i.monitorRunDependencies(x)}function N(e){if(x--,i.monitorRunDependencies&&i.monitorRunDependencies(x),0==x&&(null!==z&&(clearInterval(z),z=null),B)){var r=B;B=null,r()}}function j(e){throw i.onAbort&&i.onAbort(e),d(e+=""),h=!0,1,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.",new WXWebAssembly.RuntimeError(e)}i.preloadedImages={},i.preloadedAudios={};var C,O,L,I;function q(e){return e.startsWith("data:application/octet-stream;base64,")}function H(e){return e.startsWith("file://")}function U(e){for(;e.length>0;){var r=e.shift();if("function"!=typeof r){var t=r.func;"number"==typeof t?void 0===r.arg?A.get(t)():A.get(t)(r.arg):t(void 0===r.arg?null:r.arg)}else r(i)}}q(C="output.wasm")||(O=C,C=i.locateFile?i.locateFile(O,f):f+O);var W={splitPath:function(e){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1)},normalizeArray:function(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t;t--)e.unshift("..");return e},normalize:function(e){var r="/"===e.charAt(0),t="/"===e.substr(-1);return(e=W.normalizeArray(e.split("/").filter((function(e){return!!e})),!r).join("/"))||r||(e="."),e&&t&&(e+="/"),(r?"/":"")+e},dirname:function(e){var r=W.splitPath(e),t=r[0],n=r[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."},basename:function(e){if("/"===e)return"/";var r=(e=(e=W.normalize(e)).replace(/\/$/,"")).lastIndexOf("/");return-1===r?e:e.substr(r+1)},extname:function(e){return W.splitPath(e)[3]},join:function(){var e=Array.prototype.slice.call(arguments,0);return W.normalize(e.join("/"))},join2:function(e,r){return W.normalize(e+"/"+r)}};var X={resolve:function(){for(var e="",r=!1,t=arguments.length-1;t>=-1&&!r;t--){var n=t>=0?arguments[t]:K.cwd();if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");if(!n)return"";e=n+"/"+e,r="/"===n.charAt(0)}return(r?"/":"")+(e=W.normalizeArray(e.split("/").filter((function(e){return!!e})),!r).join("/"))||"."},relative:function(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=X.resolve(e).substr(1),r=X.resolve(r).substr(1);for(var n=t(e.split("/")),o=t(r.split("/")),i=Math.min(n.length,o.length),a=i,s=0;s<i;s++)if(n[s]!==o[s]){a=s;break}var u=[];for(s=a;s<n.length;s++)u.push("..");return(u=u.concat(o.slice(a))).join("/")}},G={ttys:[],init:function(){},shutdown:function(){},register:function(e,r){G.ttys[e]={input:[],output:[],ops:r},K.registerDevice(e,G.stream_ops)},stream_ops:{open:function(e){var r=G.ttys[e.node.rdev];if(!r)throw new K.ErrnoError(43);e.tty=r,e.seekable=!1},close:function(e){e.tty.ops.flush(e.tty)},flush:function(e){e.tty.ops.flush(e.tty)},read:function(e,r,t,n,o){if(!e.tty||!e.tty.ops.get_char)throw new K.ErrnoError(60);for(var i=0,a=0;a<n;a++){var s;try{s=e.tty.ops.get_char(e.tty)}catch(e){throw new K.ErrnoError(29)}if(void 0===s&&0===i)throw new K.ErrnoError(6);if(null==s)break;i++,r[t+a]=s}return i&&(e.node.timestamp=Date.now()),i},write:function(e,r,t,n,o){if(!e.tty||!e.tty.ops.put_char)throw new K.ErrnoError(60);try{for(var i=0;i<n;i++)e.tty.ops.put_char(e.tty,r[t+i])}catch(e){throw new K.ErrnoError(29)}return n&&(e.node.timestamp=Date.now()),i}},default_tty_ops:{get_char:function(e){if(!e.input.length){var r=null;if("undefined"!=typeof window&&"function"==typeof window.prompt?null!==(r=window.prompt("Input: "))&&(r+="\n"):"function"==typeof readline&&null!==(r=readline())&&(r+="\n"),!r)return null;e.input=J(r,!0)}return e.input.shift()},put_char:function(e,r){null===r||10===r?(l(E(e.output,0)),e.output=[]):0!=r&&e.output.push(r)},flush:function(e){e.output&&e.output.length>0&&(l(E(e.output,0)),e.output=[])}},default_tty1_ops:{put_char:function(e,r){null===r||10===r?(d(E(e.output,0)),e.output=[]):0!=r&&e.output.push(r)},flush:function(e){e.output&&e.output.length>0&&(d(E(e.output,0)),e.output=[])}}};var V={ops_table:null,mount:function(e){return V.createNode(null,"/",16895,0)},createNode:function(e,r,t,n){if(K.isBlkdev(t)||K.isFIFO(t))throw new K.ErrnoError(63);V.ops_table||(V.ops_table={dir:{node:{getattr:V.node_ops.getattr,setattr:V.node_ops.setattr,lookup:V.node_ops.lookup,mknod:V.node_ops.mknod,rename:V.node_ops.rename,unlink:V.node_ops.unlink,rmdir:V.node_ops.rmdir,readdir:V.node_ops.readdir,symlink:V.node_ops.symlink},stream:{llseek:V.stream_ops.llseek}},file:{node:{getattr:V.node_ops.getattr,setattr:V.node_ops.setattr},stream:{llseek:V.stream_ops.llseek,read:V.stream_ops.read,write:V.stream_ops.write,allocate:V.stream_ops.allocate,mmap:V.stream_ops.mmap,msync:V.stream_ops.msync}},link:{node:{getattr:V.node_ops.getattr,setattr:V.node_ops.setattr,readlink:V.node_ops.readlink},stream:{}},chrdev:{node:{getattr:V.node_ops.getattr,setattr:V.node_ops.setattr},stream:K.chrdev_stream_ops}});var o=K.createNode(e,r,t,n);return K.isDir(o.mode)?(o.node_ops=V.ops_table.dir.node,o.stream_ops=V.ops_table.dir.stream,o.contents={}):K.isFile(o.mode)?(o.node_ops=V.ops_table.file.node,o.stream_ops=V.ops_table.file.stream,o.usedBytes=0,o.contents=null):K.isLink(o.mode)?(o.node_ops=V.ops_table.link.node,o.stream_ops=V.ops_table.link.stream):K.isChrdev(o.mode)&&(o.node_ops=V.ops_table.chrdev.node,o.stream_ops=V.ops_table.chrdev.stream),o.timestamp=Date.now(),e&&(e.contents[r]=o,e.timestamp=o.timestamp),o},getFileDataAsTypedArray:function(e){return e.contents?e.contents.subarray?e.contents.subarray(0,e.usedBytes):new Uint8Array(e.contents):new Uint8Array(0)},expandFileStorage:function(e,r){var t=e.contents?e.contents.length:0;if(!(t>=r)){r=Math.max(r,t*(t<1048576?2:1.125)>>>0),0!=t&&(r=Math.max(r,256));var n=e.contents;e.contents=new Uint8Array(r),e.usedBytes>0&&e.contents.set(n.subarray(0,e.usedBytes),0)}},resizeFileStorage:function(e,r){if(e.usedBytes!=r)if(0==r)e.contents=null,e.usedBytes=0;else{var t=e.contents;e.contents=new Uint8Array(r),t&&e.contents.set(t.subarray(0,Math.min(r,e.usedBytes))),e.usedBytes=r}},node_ops:{getattr:function(e){var r={};return r.dev=K.isChrdev(e.mode)?e.id:1,r.ino=e.id,r.mode=e.mode,r.nlink=1,r.uid=0,r.gid=0,r.rdev=e.rdev,K.isDir(e.mode)?r.size=4096:K.isFile(e.mode)?r.size=e.usedBytes:K.isLink(e.mode)?r.size=e.link.length:r.size=0,r.atime=new Date(e.timestamp),r.mtime=new Date(e.timestamp),r.ctime=new Date(e.timestamp),r.blksize=4096,r.blocks=Math.ceil(r.size/r.blksize),r},setattr:function(e,r){void 0!==r.mode&&(e.mode=r.mode),void 0!==r.timestamp&&(e.timestamp=r.timestamp),void 0!==r.size&&V.resizeFileStorage(e,r.size)},lookup:function(e,r){throw K.genericErrors[44]},mknod:function(e,r,t,n){return V.createNode(e,r,t,n)},rename:function(e,r,t){if(K.isDir(e.mode)){var n;try{n=K.lookupNode(r,t)}catch(e){}if(n)for(var o in n.contents)throw new K.ErrnoError(55)}delete e.parent.contents[e.name],e.parent.timestamp=Date.now(),e.name=t,r.contents[t]=e,r.timestamp=e.parent.timestamp,e.parent=r},unlink:function(e,r){delete e.contents[r],e.timestamp=Date.now()},rmdir:function(e,r){var t=K.lookupNode(e,r);for(var n in t.contents)throw new K.ErrnoError(55);delete e.contents[r],e.timestamp=Date.now()},readdir:function(e){var r=[".",".."];for(var t in e.contents)e.contents.hasOwnProperty(t)&&r.push(t);return r},symlink:function(e,r,t){var n=V.createNode(e,r,41471,0);return n.link=t,n},readlink:function(e){if(!K.isLink(e.mode))throw new K.ErrnoError(28);return e.link}},stream_ops:{read:function(e,r,t,n,o){var i=e.node.contents;if(o>=e.node.usedBytes)return 0;var a=Math.min(e.node.usedBytes-o,n);if(a>8&&i.subarray)r.set(i.subarray(o,o+a),t);else for(var s=0;s<a;s++)r[t+s]=i[o+s];return a},write:function(e,r,t,n,o,i){if(!n)return 0;var a=e.node;if(a.timestamp=Date.now(),r.subarray&&(!a.contents||a.contents.subarray)){if(i)return a.contents=r.subarray(t,t+n),a.usedBytes=n,n;if(0===a.usedBytes&&0===o)return a.contents=r.slice(t,t+n),a.usedBytes=n,n;if(o+n<=a.usedBytes)return a.contents.set(r.subarray(t,t+n),o),n}if(V.expandFileStorage(a,o+n),a.contents.subarray&&r.subarray)a.contents.set(r.subarray(t,t+n),o);else for(var s=0;s<n;s++)a.contents[o+s]=r[t+s];return a.usedBytes=Math.max(a.usedBytes,o+n),n},llseek:function(e,r,t){var n=r;if(1===t?n+=e.position:2===t&&K.isFile(e.node.mode)&&(n+=e.node.usedBytes),n<0)throw new K.ErrnoError(28);return n},allocate:function(e,r,t){V.expandFileStorage(e.node,r+t),e.node.usedBytes=Math.max(e.node.usedBytes,r+t)},mmap:function(e,r,t,n,o,i){if(0!==r)throw new K.ErrnoError(28);if(!K.isFile(e.node.mode))throw new K.ErrnoError(43);var a,s,u=e.node.contents;if(2&i||u.buffer!==b){if((n>0||n+t<u.length)&&(u=u.subarray?u.subarray(n,n+t):Array.prototype.slice.call(u,n,n+t)),s=!0,!(a=void j()))throw new K.ErrnoError(48);D.set(u,a)}else s=!1,a=u.byteOffset;return{ptr:a,allocated:s}},msync:function(e,r,t,n,o){if(!K.isFile(e.node.mode))throw new K.ErrnoError(43);if(2&o)return 0;V.stream_ops.write(e,r,0,n,t,!1);return 0}}};var K={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(e,r){if(r=r||{},!(e=X.resolve(K.cwd(),e)))return{path:"",node:null};var t={follow_mount:!0,recurse_count:0};for(var n in t)void 0===r[n]&&(r[n]=t[n]);if(r.recurse_count>8)throw new K.ErrnoError(32);for(var o=W.normalizeArray(e.split("/").filter((function(e){return!!e})),!1),i=K.root,a="/",s=0;s<o.length;s++){var u=s===o.length-1;if(u&&r.parent)break;if(i=K.lookupNode(i,o[s]),a=W.join2(a,o[s]),K.isMountpoint(i)&&(!u||u&&r.follow_mount)&&(i=i.mounted.root),!u||r.follow)for(var c=0;K.isLink(i.mode);){var f=K.readlink(a);if(a=X.resolve(W.dirname(a),f),i=K.lookupPath(a,{recurse_count:r.recurse_count}).node,c++>40)throw new K.ErrnoError(32)}}return{path:a,node:i}},getPath:function(e){for(var r;;){if(K.isRoot(e)){var t=e.mount.mountpoint;return r?"/"!==t[t.length-1]?t+"/"+r:t+r:t}r=r?e.name+"/"+r:e.name,e=e.parent}},hashName:function(e,r){for(var t=0,n=0;n<r.length;n++)t=(t<<5)-t+r.charCodeAt(n)|0;return(e+t>>>0)%K.nameTable.length},hashAddNode:function(e){var r=K.hashName(e.parent.id,e.name);e.name_next=K.nameTable[r],K.nameTable[r]=e},hashRemoveNode:function(e){var r=K.hashName(e.parent.id,e.name);if(K.nameTable[r]===e)K.nameTable[r]=e.name_next;else for(var t=K.nameTable[r];t;){if(t.name_next===e){t.name_next=e.name_next;break}t=t.name_next}},lookupNode:function(e,r){var t=K.mayLookup(e);if(t)throw new K.ErrnoError(t,e);for(var n=K.hashName(e.id,r),o=K.nameTable[n];o;o=o.name_next){var i=o.name;if(o.parent.id===e.id&&i===r)return o}return K.lookup(e,r)},createNode:function(e,r,t,n){var o=new K.FSNode(e,r,t,n);return K.hashAddNode(o),o},destroyNode:function(e){K.hashRemoveNode(e)},isRoot:function(e){return e===e.parent},isMountpoint:function(e){return!!e.mounted},isFile:function(e){return 32768==(61440&e)},isDir:function(e){return 16384==(61440&e)},isLink:function(e){return 40960==(61440&e)},isChrdev:function(e){return 8192==(61440&e)},isBlkdev:function(e){return 24576==(61440&e)},isFIFO:function(e){return 4096==(61440&e)},isSocket:function(e){return 49152==(49152&e)},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(e){var r=K.flagModes[e];if(void 0===r)throw new Error("Unknown file open mode: "+e);return r},flagsToPermissionString:function(e){var r=["r","w","rw"][3&e];return 512&e&&(r+="w"),r},nodePermissions:function(e,r){return K.ignorePermissions||(!r.includes("r")||292&e.mode)&&(!r.includes("w")||146&e.mode)&&(!r.includes("x")||73&e.mode)?0:2},mayLookup:function(e){var r=K.nodePermissions(e,"x");return r||(e.node_ops.lookup?0:2)},mayCreate:function(e,r){try{K.lookupNode(e,r);return 20}catch(e){}return K.nodePermissions(e,"wx")},mayDelete:function(e,r,t){var n;try{n=K.lookupNode(e,r)}catch(e){return e.errno}var o=K.nodePermissions(e,"wx");if(o)return o;if(t){if(!K.isDir(n.mode))return 54;if(K.isRoot(n)||K.getPath(n)===K.cwd())return 10}else if(K.isDir(n.mode))return 31;return 0},mayOpen:function(e,r){return e?K.isLink(e.mode)?32:K.isDir(e.mode)&&("r"!==K.flagsToPermissionString(r)||512&r)?31:K.nodePermissions(e,K.flagsToPermissionString(r)):44},MAX_OPEN_FDS:4096,nextfd:function(e,r){e=e||0,r=r||K.MAX_OPEN_FDS;for(var t=e;t<=r;t++)if(!K.streams[t])return t;throw new K.ErrnoError(33)},getStream:function(e){return K.streams[e]},createStream:function(e,r,t){K.FSStream||(K.FSStream=function(){},K.FSStream.prototype={object:{get:function(){return this.node},set:function(e){this.node=e}},isRead:{get:function(){return 1!=(2097155&this.flags)}},isWrite:{get:function(){return 0!=(2097155&this.flags)}},isAppend:{get:function(){return 1024&this.flags}}});var n=new K.FSStream;for(var o in e)n[o]=e[o];e=n;var i=K.nextfd(r,t);return e.fd=i,K.streams[i]=e,e},closeStream:function(e){K.streams[e]=null},chrdev_stream_ops:{open:function(e){var r=K.getDevice(e.node.rdev);e.stream_ops=r.stream_ops,e.stream_ops.open&&e.stream_ops.open(e)},llseek:function(){throw new K.ErrnoError(70)}},major:function(e){return e>>8},minor:function(e){return 255&e},makedev:function(e,r){return e<<8|r},registerDevice:function(e,r){K.devices[e]={stream_ops:r}},getDevice:function(e){return K.devices[e]},getMounts:function(e){for(var r=[],t=[e];t.length;){var n=t.pop();r.push(n),t.push.apply(t,n.mounts)}return r},syncfs:function(e,r){"function"==typeof e&&(r=e,e=!1),K.syncFSRequests++,K.syncFSRequests>1&&d("warning: "+K.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var t=K.getMounts(K.root.mount),n=0;function o(e){return K.syncFSRequests--,r(e)}function i(e){if(e)return i.errored?void 0:(i.errored=!0,o(e));++n>=t.length&&o(null)}t.forEach((function(r){if(!r.type.syncfs)return i(null);r.type.syncfs(r,e,i)}))},mount:function(e,r,t){var n,o="/"===t,i=!t;if(o&&K.root)throw new K.ErrnoError(10);if(!o&&!i){var a=K.lookupPath(t,{follow_mount:!1});if(t=a.path,n=a.node,K.isMountpoint(n))throw new K.ErrnoError(10);if(!K.isDir(n.mode))throw new K.ErrnoError(54)}var s={type:e,opts:r,mountpoint:t,mounts:[]},u=e.mount(s);return u.mount=s,s.root=u,o?K.root=u:n&&(n.mounted=s,n.mount&&n.mount.mounts.push(s)),u},unmount:function(e){var r=K.lookupPath(e,{follow_mount:!1});if(!K.isMountpoint(r.node))throw new K.ErrnoError(28);var t=r.node,n=t.mounted,o=K.getMounts(n);Object.keys(K.nameTable).forEach((function(e){for(var r=K.nameTable[e];r;){var t=r.name_next;o.includes(r.mount)&&K.destroyNode(r),r=t}})),t.mounted=null;var i=t.mount.mounts.indexOf(n);t.mount.mounts.splice(i,1)},lookup:function(e,r){return e.node_ops.lookup(e,r)},mknod:function(e,r,t){var n=K.lookupPath(e,{parent:!0}).node,o=W.basename(e);if(!o||"."===o||".."===o)throw new K.ErrnoError(28);var i=K.mayCreate(n,o);if(i)throw new K.ErrnoError(i);if(!n.node_ops.mknod)throw new K.ErrnoError(63);return n.node_ops.mknod(n,o,r,t)},create:function(e,r){return r=void 0!==r?r:438,r&=4095,r|=32768,K.mknod(e,r,0)},mkdir:function(e,r){return r=void 0!==r?r:511,r&=1023,r|=16384,K.mknod(e,r,0)},mkdirTree:function(e,r){for(var t=e.split("/"),n="",o=0;o<t.length;++o)if(t[o]){n+="/"+t[o];try{K.mkdir(n,r)}catch(e){if(20!=e.errno)throw e}}},mkdev:function(e,r,t){return void 0===t&&(t=r,r=438),r|=8192,K.mknod(e,r,t)},symlink:function(e,r){if(!X.resolve(e))throw new K.ErrnoError(44);var t=K.lookupPath(r,{parent:!0}).node;if(!t)throw new K.ErrnoError(44);var n=W.basename(r),o=K.mayCreate(t,n);if(o)throw new K.ErrnoError(o);if(!t.node_ops.symlink)throw new K.ErrnoError(63);return t.node_ops.symlink(t,n,e)},rename:function(e,r){var t,n,o=W.dirname(e),i=W.dirname(r),a=W.basename(e),s=W.basename(r);if(t=K.lookupPath(e,{parent:!0}).node,n=K.lookupPath(r,{parent:!0}).node,!t||!n)throw new K.ErrnoError(44);if(t.mount!==n.mount)throw new K.ErrnoError(75);var u,c=K.lookupNode(t,a),f=X.relative(e,i);if("."!==f.charAt(0))throw new K.ErrnoError(28);if("."!==(f=X.relative(r,o)).charAt(0))throw new K.ErrnoError(55);try{u=K.lookupNode(n,s)}catch(e){}if(c!==u){var l=K.isDir(c.mode),d=K.mayDelete(t,a,l);if(d)throw new K.ErrnoError(d);if(d=u?K.mayDelete(n,s,l):K.mayCreate(n,s))throw new K.ErrnoError(d);if(!t.node_ops.rename)throw new K.ErrnoError(63);if(K.isMountpoint(c)||u&&K.isMountpoint(u))throw new K.ErrnoError(10);if(n!==t&&(d=K.nodePermissions(t,"w")))throw new K.ErrnoError(d);K.hashRemoveNode(c);try{t.node_ops.rename(c,n,s)}catch(e){throw e}finally{K.hashAddNode(c)}}},rmdir:function(e){var r=K.lookupPath(e,{parent:!0}).node,t=W.basename(e),n=K.lookupNode(r,t),o=K.mayDelete(r,t,!0);if(o)throw new K.ErrnoError(o);if(!r.node_ops.rmdir)throw new K.ErrnoError(63);if(K.isMountpoint(n))throw new K.ErrnoError(10);r.node_ops.rmdir(r,t),K.destroyNode(n)},readdir:function(e){var r=K.lookupPath(e,{follow:!0}).node;if(!r.node_ops.readdir)throw new K.ErrnoError(54);return r.node_ops.readdir(r)},unlink:function(e){var r=K.lookupPath(e,{parent:!0}).node,t=W.basename(e),n=K.lookupNode(r,t),o=K.mayDelete(r,t,!1);if(o)throw new K.ErrnoError(o);if(!r.node_ops.unlink)throw new K.ErrnoError(63);if(K.isMountpoint(n))throw new K.ErrnoError(10);r.node_ops.unlink(r,t),K.destroyNode(n)},readlink:function(e){var r=K.lookupPath(e).node;if(!r)throw new K.ErrnoError(44);if(!r.node_ops.readlink)throw new K.ErrnoError(28);return X.resolve(K.getPath(r.parent),r.node_ops.readlink(r))},stat:function(e,r){var t=K.lookupPath(e,{follow:!r}).node;if(!t)throw new K.ErrnoError(44);if(!t.node_ops.getattr)throw new K.ErrnoError(63);return t.node_ops.getattr(t)},lstat:function(e){return K.stat(e,!0)},chmod:function(e,r,t){var n;"string"==typeof e?n=K.lookupPath(e,{follow:!t}).node:n=e;if(!n.node_ops.setattr)throw new K.ErrnoError(63);n.node_ops.setattr(n,{mode:4095&r|-4096&n.mode,timestamp:Date.now()})},lchmod:function(e,r){K.chmod(e,r,!0)},fchmod:function(e,r){var t=K.getStream(e);if(!t)throw new K.ErrnoError(8);K.chmod(t.node,r)},chown:function(e,r,t,n){var o;"string"==typeof e?o=K.lookupPath(e,{follow:!n}).node:o=e;if(!o.node_ops.setattr)throw new K.ErrnoError(63);o.node_ops.setattr(o,{timestamp:Date.now()})},lchown:function(e,r,t){K.chown(e,r,t,!0)},fchown:function(e,r,t){var n=K.getStream(e);if(!n)throw new K.ErrnoError(8);K.chown(n.node,r,t)},truncate:function(e,r){if(r<0)throw new K.ErrnoError(28);var t;"string"==typeof e?t=K.lookupPath(e,{follow:!0}).node:t=e;if(!t.node_ops.setattr)throw new K.ErrnoError(63);if(K.isDir(t.mode))throw new K.ErrnoError(31);if(!K.isFile(t.mode))throw new K.ErrnoError(28);var n=K.nodePermissions(t,"w");if(n)throw new K.ErrnoError(n);t.node_ops.setattr(t,{size:r,timestamp:Date.now()})},ftruncate:function(e,r){var t=K.getStream(e);if(!t)throw new K.ErrnoError(8);if(0==(2097155&t.flags))throw new K.ErrnoError(28);K.truncate(t.node,r)},utime:function(e,r,t){var n=K.lookupPath(e,{follow:!0}).node;n.node_ops.setattr(n,{timestamp:Math.max(r,t)})},open:function(e,r,t,n,a){if(""===e)throw new K.ErrnoError(44);var s;if(t=void 0===t?438:t,t=64&(r="string"==typeof r?K.modeStringToFlags(r):r)?4095&t|32768:0,"object"===o(e))s=e;else{e=W.normalize(e);try{s=K.lookupPath(e,{follow:!(131072&r)}).node}catch(e){}}var u=!1;if(64&r)if(s){if(128&r)throw new K.ErrnoError(20)}else s=K.mknod(e,t,0),u=!0;if(!s)throw new K.ErrnoError(44);if(K.isChrdev(s.mode)&&(r&=-513),65536&r&&!K.isDir(s.mode))throw new K.ErrnoError(54);if(!u){var c=K.mayOpen(s,r);if(c)throw new K.ErrnoError(c)}512&r&&K.truncate(s,0),r&=-131713;var f=K.createStream({node:s,path:K.getPath(s),flags:r,seekable:!0,position:0,stream_ops:s.stream_ops,ungotten:[],error:!1},n,a);return f.stream_ops.open&&f.stream_ops.open(f),!i.logReadFiles||1&r||(K.readFiles||(K.readFiles={}),e in K.readFiles||(K.readFiles[e]=1)),f},close:function(e){if(K.isClosed(e))throw new K.ErrnoError(8);e.getdents&&(e.getdents=null);try{e.stream_ops.close&&e.stream_ops.close(e)}catch(e){throw e}finally{K.closeStream(e.fd)}e.fd=null},isClosed:function(e){return null===e.fd},llseek:function(e,r,t){if(K.isClosed(e))throw new K.ErrnoError(8);if(!e.seekable||!e.stream_ops.llseek)throw new K.ErrnoError(70);if(0!=t&&1!=t&&2!=t)throw new K.ErrnoError(28);return e.position=e.stream_ops.llseek(e,r,t),e.ungotten=[],e.position},read:function(e,r,t,n,o){if(n<0||o<0)throw new K.ErrnoError(28);if(K.isClosed(e))throw new K.ErrnoError(8);if(1==(2097155&e.flags))throw new K.ErrnoError(8);if(K.isDir(e.node.mode))throw new K.ErrnoError(31);if(!e.stream_ops.read)throw new K.ErrnoError(28);var i=void 0!==o;if(i){if(!e.seekable)throw new K.ErrnoError(70)}else o=e.position;var a=e.stream_ops.read(e,r,t,n,o);return i||(e.position+=a),a},write:function(e,r,t,n,o,i){if(n<0||o<0)throw new K.ErrnoError(28);if(K.isClosed(e))throw new K.ErrnoError(8);if(0==(2097155&e.flags))throw new K.ErrnoError(8);if(K.isDir(e.node.mode))throw new K.ErrnoError(31);if(!e.stream_ops.write)throw new K.ErrnoError(28);e.seekable&&1024&e.flags&&K.llseek(e,0,2);var a=void 0!==o;if(a){if(!e.seekable)throw new K.ErrnoError(70)}else o=e.position;var s=e.stream_ops.write(e,r,t,n,o,i);return a||(e.position+=s),s},allocate:function(e,r,t){if(K.isClosed(e))throw new K.ErrnoError(8);if(r<0||t<=0)throw new K.ErrnoError(28);if(0==(2097155&e.flags))throw new K.ErrnoError(8);if(!K.isFile(e.node.mode)&&!K.isDir(e.node.mode))throw new K.ErrnoError(43);if(!e.stream_ops.allocate)throw new K.ErrnoError(138);e.stream_ops.allocate(e,r,t)},mmap:function(e,r,t,n,o,i){if(0!=(2&o)&&0==(2&i)&&2!=(2097155&e.flags))throw new K.ErrnoError(2);if(1==(2097155&e.flags))throw new K.ErrnoError(2);if(!e.stream_ops.mmap)throw new K.ErrnoError(43);return e.stream_ops.mmap(e,r,t,n,o,i)},msync:function(e,r,t,n,o){return e&&e.stream_ops.msync?e.stream_ops.msync(e,r,t,n,o):0},munmap:function(e){return 0},ioctl:function(e,r,t){if(!e.stream_ops.ioctl)throw new K.ErrnoError(59);return e.stream_ops.ioctl(e,r,t)},readFile:function(e,r){if((r=r||{}).flags=r.flags||0,r.encoding=r.encoding||"binary","utf8"!==r.encoding&&"binary"!==r.encoding)throw new Error('Invalid encoding type "'+r.encoding+'"');var t,n=K.open(e,r.flags),o=K.stat(e).size,i=new Uint8Array(o);return K.read(n,i,0,o,0),"utf8"===r.encoding?t=E(i,0):"binary"===r.encoding&&(t=i),K.close(n),t},writeFile:function(e,r,t){(t=t||{}).flags=t.flags||577;var n=K.open(e,t.flags,t.mode);if("string"==typeof r){var o=new Uint8Array(k(r)+1),i=g(r,o,0,o.length);K.write(n,o,0,i,void 0,t.canOwn)}else{if(!ArrayBuffer.isView(r))throw new Error("Unsupported data type");K.write(n,r,0,r.byteLength,void 0,t.canOwn)}K.close(n)},cwd:function(){return K.currentPath},chdir:function(e){var r=K.lookupPath(e,{follow:!0});if(null===r.node)throw new K.ErrnoError(44);if(!K.isDir(r.node.mode))throw new K.ErrnoError(54);var t=K.nodePermissions(r.node,"x");if(t)throw new K.ErrnoError(t);K.currentPath=r.path},createDefaultDirectories:function(){K.mkdir("/tmp"),K.mkdir("/home"),K.mkdir("/home/web_user")},createDefaultDevices:function(){K.mkdir("/dev"),K.registerDevice(K.makedev(1,3),{read:function(){return 0},write:function(e,r,t,n,o){return n}}),K.mkdev("/dev/null",K.makedev(1,3)),G.register(K.makedev(5,0),G.default_tty_ops),G.register(K.makedev(6,0),G.default_tty1_ops),K.mkdev("/dev/tty",K.makedev(5,0)),K.mkdev("/dev/tty1",K.makedev(6,0));var e=function(){if("object"===("undefined"==typeof crypto?"undefined":o(crypto))&&"function"==typeof crypto.getRandomValues){var e=new Uint8Array(1);return function(){return crypto.getRandomValues(e),e[0]}}return function(){j("randomDevice")}}();K.createDevice("/dev","random",e),K.createDevice("/dev","urandom",e),K.mkdir("/dev/shm"),K.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){K.mkdir("/proc");var e=K.mkdir("/proc/self");K.mkdir("/proc/self/fd"),K.mount({mount:function(){var r=K.createNode(e,"fd",16895,73);return r.node_ops={lookup:function(e,r){var t=+r,n=K.getStream(t);if(!n)throw new K.ErrnoError(8);var o={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return n.path}}};return o.parent=o,o}},r}},{},"/proc/self/fd")},createStandardStreams:function(){i.stdin?K.createDevice("/dev","stdin",i.stdin):K.symlink("/dev/tty","/dev/stdin"),i.stdout?K.createDevice("/dev","stdout",null,i.stdout):K.symlink("/dev/tty","/dev/stdout"),i.stderr?K.createDevice("/dev","stderr",null,i.stderr):K.symlink("/dev/tty1","/dev/stderr");K.open("/dev/stdin",0),K.open("/dev/stdout",1),K.open("/dev/stderr",1)},ensureErrnoError:function(){K.ErrnoError||(K.ErrnoError=function(e,r){this.node=r,this.setErrno=function(e){this.errno=e},this.setErrno(e),this.message="FS error"},K.ErrnoError.prototype=new Error,K.ErrnoError.prototype.constructor=K.ErrnoError,[44].forEach((function(e){K.genericErrors[e]=new K.ErrnoError(e),K.genericErrors[e].stack="<generic error, no stack>"})))},staticInit:function(){K.ensureErrnoError(),K.nameTable=new Array(4096),K.mount(V,{},"/"),K.createDefaultDirectories(),K.createDefaultDevices(),K.createSpecialDirectories(),K.filesystems={MEMFS:V}},init:function(e,r,t){K.init.initialized=!0,K.ensureErrnoError(),i.stdin=e||i.stdin,i.stdout=r||i.stdout,i.stderr=t||i.stderr,K.createStandardStreams()},quit:function(){K.init.initialized=!1;var e=i._fflush;e&&e(0);for(var r=0;r<K.streams.length;r++){var t=K.streams[r];t&&K.close(t)}},getMode:function(e,r){var t=0;return e&&(t|=365),r&&(t|=146),t},findObject:function(e,r){var t=K.analyzePath(e,r);return t.exists?t.object:null},analyzePath:function(e,r){try{e=(n=K.lookupPath(e,{follow:!r})).path}catch(e){}var t={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var n=K.lookupPath(e,{parent:!0});t.parentExists=!0,t.parentPath=n.path,t.parentObject=n.node,t.name=W.basename(e),n=K.lookupPath(e,{follow:!r}),t.exists=!0,t.path=n.path,t.object=n.node,t.name=n.node.name,t.isRoot="/"===n.path}catch(e){t.error=e.errno}return t},createPath:function(e,r,t,n){e="string"==typeof e?e:K.getPath(e);for(var o=r.split("/").reverse();o.length;){var i=o.pop();if(i){var a=W.join2(e,i);try{K.mkdir(a)}catch(e){}e=a}}return a},createFile:function(e,r,t,n,o){var i=W.join2("string"==typeof e?e:K.getPath(e),r),a=K.getMode(n,o);return K.create(i,a)},createDataFile:function(e,r,t,n,o,i){var a=r?W.join2("string"==typeof e?e:K.getPath(e),r):e,s=K.getMode(n,o),u=K.create(a,s);if(t){if("string"==typeof t){for(var c=new Array(t.length),f=0,l=t.length;f<l;++f)c[f]=t.charCodeAt(f);t=c}K.chmod(u,146|s);var d=K.open(u,577);K.write(d,t,0,t.length,0,i),K.close(d),K.chmod(u,s)}return u},createDevice:function(e,r,t,n){var o=W.join2("string"==typeof e?e:K.getPath(e),r),i=K.getMode(!!t,!!n);K.createDevice.major||(K.createDevice.major=64);var a=K.makedev(K.createDevice.major++,0);return K.registerDevice(a,{open:function(e){e.seekable=!1},close:function(e){n&&n.buffer&&n.buffer.length&&n(10)},read:function(e,r,n,o,i){for(var a=0,s=0;s<o;s++){var u;try{u=t()}catch(e){throw new K.ErrnoError(29)}if(void 0===u&&0===a)throw new K.ErrnoError(6);if(null==u)break;a++,r[n+s]=u}return a&&(e.node.timestamp=Date.now()),a},write:function(e,r,t,o,i){for(var a=0;a<o;a++)try{n(r[t+a])}catch(e){throw new K.ErrnoError(29)}return o&&(e.node.timestamp=Date.now()),a}}),K.mkdev(o,i,a)},forceLoadFile:function(e){if(e.isDevice||e.isFolder||e.link||e.contents)return!0;if("undefined"!=typeof XMLHttpRequest)throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(!s)throw new Error("Cannot load without read() or XMLHttpRequest.");try{e.contents=J(s(e.url),!0),e.usedBytes=e.contents.length}catch(e){throw new K.ErrnoError(29)}},createLazyFile:function(e,r,t,n,o){function i(){this.lengthKnown=!1,this.chunks=[]}if(i.prototype.get=function(e){if(!(e>this.length-1||e<0)){var r=e%this.chunkSize,t=e/this.chunkSize|0;return this.getter(t)[r]}},i.prototype.setDataGetter=function(e){this.getter=e},i.prototype.cacheLength=function(){var e=new XMLHttpRequest;if(e.open("HEAD",t,!1),e.send(null),!(e.status>=200&&e.status<300||304===e.status))throw new Error("Couldn't load "+t+". Status: "+e.status);var r,n=Number(e.getResponseHeader("Content-length")),o=(r=e.getResponseHeader("Accept-Ranges"))&&"bytes"===r,i=(r=e.getResponseHeader("Content-Encoding"))&&"gzip"===r,a=1048576;o||(a=n);var s=this;s.setDataGetter((function(e){var r=e*a,o=(e+1)*a-1;if(o=Math.min(o,n-1),void 0===s.chunks[e]&&(s.chunks[e]=function(e,r){if(e>r)throw new Error("invalid range ("+e+", "+r+") or no bytes requested!");if(r>n-1)throw new Error("only "+n+" bytes available! programmer error!");var o=new XMLHttpRequest;if(o.open("GET",t,!1),n!==a&&o.setRequestHeader("Range","bytes="+e+"-"+r),"undefined"!=typeof Uint8Array&&(o.responseType="arraybuffer"),o.overrideMimeType&&o.overrideMimeType("text/plain; charset=x-user-defined"),o.send(null),!(o.status>=200&&o.status<300||304===o.status))throw new Error("Couldn't load "+t+". Status: "+o.status);return void 0!==o.response?new Uint8Array(o.response||[]):J(o.responseText||"",!0)}(r,o)),void 0===s.chunks[e])throw new Error("doXHR failed!");return s.chunks[e]})),!i&&n||(a=n=1,n=this.getter(0).length,a=n,l("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=n,this._chunkSize=a,this.lengthKnown=!0},"undefined"!=typeof XMLHttpRequest)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var a={isDevice:!1,url:t},s=K.createFile(e,r,a,n,o);a.contents?s.contents=a.contents:a.url&&(s.contents=null,s.url=a.url),Object.defineProperties(s,{usedBytes:{get:function(){return this.contents.length}}});var u={};return Object.keys(s.stream_ops).forEach((function(e){var r=s.stream_ops[e];u[e]=function(){return K.forceLoadFile(s),r.apply(null,arguments)}})),u.read=function(e,r,t,n,o){K.forceLoadFile(s);var i=e.node.contents;if(o>=i.length)return 0;var a=Math.min(i.length-o,n);if(i.slice)for(var u=0;u<a;u++)r[t+u]=i[o+u];else for(u=0;u<a;u++)r[t+u]=i.get(o+u);return a},s.stream_ops=u,s},createPreloadedFile:function(e,r,t,n,o,a,s,c,f,l){Browser.init();var d=r?X.resolve(W.join2(e,r)):e;function m(t){function u(t){l&&l(),c||K.createDataFile(e,r,t,n,o,f),a&&a(),N()}var m=!1;i.preloadPlugins.forEach((function(e){m||e.canHandle(d)&&(e.handle(t,d,u,(function(){s&&s(),N()})),m=!0)})),m||u(t)}T(),"string"==typeof t?function(e,r,t,n){var o=n?"":"al "+e;u(e,(function(t){w(t,'Loading data file "'+e+'" failed (no arrayBuffer).'),r(new Uint8Array(t)),o&&N()}),(function(r){if(!t)throw'Loading data file "'+e+'" failed.';t()})),o&&T()}(t,(function(e){m(e)}),s):m(t)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(e,r,t){r=r||function(){},t=t||function(){};var n=K.indexedDB();try{var o=n.open(K.DB_NAME(),K.DB_VERSION)}catch(e){return t(e)}o.onupgradeneeded=function(){l("creating db"),o.result.createObjectStore(K.DB_STORE_NAME)},o.onsuccess=function(){var n=o.result.transaction([K.DB_STORE_NAME],"readwrite"),i=n.objectStore(K.DB_STORE_NAME),a=0,s=0,u=e.length;function c(){0==s?r():t()}e.forEach((function(e){var r=i.put(K.analyzePath(e).object.contents,e);r.onsuccess=function(){++a+s==u&&c()},r.onerror=function(){s++,a+s==u&&c()}})),n.onerror=t},o.onerror=t},loadFilesFromDB:function(e,r,t){r=r||function(){},t=t||function(){};var n=K.indexedDB();try{var o=n.open(K.DB_NAME(),K.DB_VERSION)}catch(e){return t(e)}o.onupgradeneeded=t,o.onsuccess=function(){var n=o.result;try{var i=n.transaction([K.DB_STORE_NAME],"readonly")}catch(e){return void t(e)}var a=i.objectStore(K.DB_STORE_NAME),s=0,u=0,c=e.length;function f(){0==u?r():t()}e.forEach((function(e){var r=a.get(e);r.onsuccess=function(){K.analyzePath(e).exists&&K.unlink(e),K.createDataFile(W.dirname(e),W.basename(e),r.result,!0,!0,!0),++s+u==c&&f()},r.onerror=function(){u++,s+u==c&&f()}})),i.onerror=t},o.onerror=t}},$={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(e,r,t){if("/"===r[0])return r;var n;if(-100===e)n=K.cwd();else{var o=K.getStream(e);if(!o)throw new K.ErrnoError(8);n=o.path}if(0==r.length){if(!t)throw new K.ErrnoError(44);return n}return W.join2(n,r)},doStat:function(e,r,t){try{var n=e(r)}catch(e){if(e&&e.node&&W.normalize(r)!==W.normalize(K.getPath(e.node)))return-54;throw e}return F[t>>2]=n.dev,F[t+4>>2]=0,F[t+8>>2]=n.ino,F[t+12>>2]=n.mode,F[t+16>>2]=n.nlink,F[t+20>>2]=n.uid,F[t+24>>2]=n.gid,F[t+28>>2]=n.rdev,F[t+32>>2]=0,I=[n.size>>>0,(L=n.size,+Math.abs(L)>=1?L>0?(0|Math.min(+Math.floor(L/4294967296),4294967295))>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)],F[t+40>>2]=I[0],F[t+44>>2]=I[1],F[t+48>>2]=4096,F[t+52>>2]=n.blocks,F[t+56>>2]=n.atime.getTime()/1e3|0,F[t+60>>2]=0,F[t+64>>2]=n.mtime.getTime()/1e3|0,F[t+68>>2]=0,F[t+72>>2]=n.ctime.getTime()/1e3|0,F[t+76>>2]=0,I=[n.ino>>>0,(L=n.ino,+Math.abs(L)>=1?L>0?(0|Math.min(+Math.floor(L/4294967296),4294967295))>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)],F[t+80>>2]=I[0],F[t+84>>2]=I[1],0},doMsync:function(e,r,t,n,o){var i=S.slice(e,e+t);K.msync(r,i,o,t,n)},doMkdir:function(e,r){return"/"===(e=W.normalize(e))[e.length-1]&&(e=e.substr(0,e.length-1)),K.mkdir(e,r,0),0},doMknod:function(e,r,t){switch(61440&r){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return K.mknod(e,r,t),0},doReadlink:function(e,r,t){if(t<=0)return-28;var n=K.readlink(e),o=Math.min(t,k(n)),i=D[r+o];return _(n,r,t+1),D[r+o]=i,o},doAccess:function(e,r){if(-8&r)return-28;var t;if(!(t=K.lookupPath(e,{follow:!0}).node))return-44;var n="";return 4&r&&(n+="r"),2&r&&(n+="w"),1&r&&(n+="x"),n&&K.nodePermissions(t,n)?-2:0},doDup:function(e,r,t){var n=K.getStream(t);return n&&K.close(n),K.open(e,r,0,t,t).fd},doReadv:function(e,r,t,n){for(var o=0,i=0;i<t;i++){var a=F[r+8*i>>2],s=F[r+(8*i+4)>>2],u=K.read(e,D,a,s,n);if(u<0)return-1;if(o+=u,u<s)break}return o},doWritev:function(e,r,t,n){for(var o=0,i=0;i<t;i++){var a=F[r+8*i>>2],s=F[r+(8*i+4)>>2],u=K.write(e,D,a,s,n);if(u<0)return-1;o+=u}return o},varargs:void 0,get:function(){return $.varargs+=4,F[$.varargs-4>>2]},getStr:function(e){return y(e)},getStreamFromFD:function(e){var r=K.getStream(e);if(!r)throw new K.ErrnoError(8);return r},get64:function(e,r){return e}};var Y=function(e,r,t,n){e||(e=this),this.parent=e,this.mount=e.mount,this.mounted=null,this.id=K.nextInode++,this.name=r,this.mode=t,this.node_ops={},this.stream_ops={},this.rdev=n};Object.defineProperties(Y.prototype,{read:{get:function(){return 365==(365&this.mode)},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146==(146&this.mode)},set:function(e){e?this.mode|=146:this.mode&=-147}},isFolder:{get:function(){return K.isDir(this.mode)}},isDevice:{get:function(){return K.isChrdev(this.mode)}}}),K.FSNode=Y,K.staticInit(),i.FS_createPath=K.createPath,i.FS_createDataFile=K.createDataFile,i.FS_createPreloadedFile=K.createPreloadedFile,i.FS_createLazyFile=K.createLazyFile,i.FS_createDevice=K.createDevice,i.FS_unlink=K.unlink;function J(e,r,t){var n=t>0?t:k(e)+1,o=new Array(n),i=g(e,o,0,o.length);return r&&(o.length=i),o}"function"==typeof atob&&atob;var Q,Z={emscripten_memcpy_big:function(e,r,t){S.copyWithin(e,r,r+t)},emscripten_resize_heap:function(e){S.length,j("OOM")},fd_write:function(e,r,t,n){try{var o=$.getStreamFromFD(e),i=$.doWritev(o,r,t);return F[n>>2]=i,0}catch(e){return void 0!==K&&e instanceof K.ErrnoError||j(e),e.errno}},setTempRet0:function(e){e}};(function(){var e={env:Z,wasi_snapshot_preview1:Z};function r(e,r){var t,n,o=e.exports;i.asm=o,p=i.asm.memory,t=p.buffer,b=t,i.HEAP8=D=new Int8Array(t),i.HEAP16=new Int16Array(t),i.HEAP32=F=new Int32Array(t),i.HEAPU8=S=new Uint8Array(t),i.HEAPU16=new Uint16Array(t),i.HEAPU32=new Uint32Array(t),i.HEAPF32=new Float32Array(t),i.HEAPF64=new Float64Array(t),A=i.asm.__indirect_function_table,n=i.asm.__wasm_call_ctors,R.unshift(n),N()}function o(e){r(e.instance)}function a(e){return s.apply(this,arguments)}function s(){return(s=n(t.default.mark((function e(r){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u({}).then(function(){var e=n(t.default.mark((function e(r){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r);case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()).then(r,(function(e){d("failed to asynchronously prepare wasm: "+e),j(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}T();var u=function(r){return new Promise((function(r,t){r(WXWebAssembly.instantiate("/libs/qcclib.wasm",e))}))};if(i.instantiateWasm)try{return i.instantiateWasm(e,r)}catch(e){return d("Module.instantiateWasm callback failed with error: "+e),!1}m||"function"!=typeof WXWebAssembly.instantiateStreaming||q(C)||H(C)||"function"!=typeof fetch?a(o):fetch(C,{credentials:"same-origin"}).then((function(r){return WXWebAssembly.instantiateStreaming(r,e).then(o,(function(e){return d("wasm streaming compile failed: "+e),d("falling back to ArrayBuffer instantiation"),a(o)}))}))})(),i.___wasm_call_ctors=function(){return(i.___wasm_call_ctors=i.asm.__wasm_call_ctors).apply(null,arguments)},i._img_decode=function(){return(i._img_decode=i.asm.img_decode).apply(null,arguments)},i.___errno_location=function(){return(i.___errno_location=i.asm.__errno_location).apply(null,arguments)},i.stackSave=function(){return(i.stackSave=i.asm.stackSave).apply(null,arguments)},i.stackRestore=function(){return(i.stackRestore=i.asm.stackRestore).apply(null,arguments)},i.stackAlloc=function(){return(i.stackAlloc=i.asm.stackAlloc).apply(null,arguments)},i._malloc=function(){return(i._malloc=i.asm.malloc).apply(null,arguments)},i._free=function(){return(i._free=i.asm.free).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)};function ee(e){function r(){Q||(Q=!0,i.calledRun=!0,h||(!0,i.noFSInit||K.init.initialized||K.init(),K.ignorePermissions=!1,G.init(),U(R),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)e=i.postRun.shift(),M.unshift(e);var e;U(M)}()))}e=e||c,x>0||(!function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)e=i.preRun.shift(),P.unshift(e);var e;U(P)}(),x>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),r()}),1)):r()))}if(i.addRunDependency=T,i.removeRunDependency=N,i.FS_createPath=K.createPath,i.FS_createDataFile=K.createDataFile,i.FS_createPreloadedFile=K.createPreloadedFile,i.FS_createLazyFile=K.createLazyFile,i.FS_createDevice=K.createDevice,i.FS_unlink=K.unlink,B=function e(){Q||ee(),Q||(B=e)},i.run=ee,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();ee(),module.exports=i,i.UTF8ArrayToString=E; 
 			}); 
		define("utils/base.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BASE=void 0;var t=require("../@babel/runtime/helpers/typeof"),e={isNotNull:function(t){if("number"==typeof t){if(!isNaN(t))return!0}else if("boolean"==typeof t){if(null!=t&&void 0!==t&&("false"==(t+"").toLowerCase()||"true"==(t+"").toLowerCase()))return!0}else if(t&&null!=t&&void 0!==t)return!0;return!1},isNotEmpty:function(e){var i=!1;return this.isNotNull(e)&&("string"==typeof e?e.length>0&&(i=!0):"number"==typeof e?i=!0:"object"==t(e)&&e instanceof Array?e.length>0&&(i=!0):i=!0),i},isNotNullStringAndNotEmpty:function(t){return!("null"==t||!this.isNotEmpty(t))},isKeyInObj:function(t,e){return!!(this.isNotNull(e)&&this.isNotEmpty(t)&&t in e)},getNotNull:function(t,e){return this.isNotNull(t)?t:e},getNotEmpty:function(t,e){return this.isNotEmpty(t)?t:e},getValueByKey:function(t,e,i){return this.isKeyInObj(t,e)?e[t]:i},getKeyValueByKeys:function(t,e,i,r){if(this.isNotEmpty(t)){for(var n=i,o=r,s=0;s<t.length;s++)o=this.getValueByKey(t[s],e),this.isNotNull(o)&&(n=t[s]);return{key:n=this.getNotEmpty(n,i),value:o="string"==typeof o?this.getNotEmpty(o,r):this.getNotNull(o,r)}}return{key:i,value:r}},objectFix:function(t,e){var i=e;return this.isNotNull(t)&&(i=t),i},stringFix:function(t,e){var i="";this.isNotNull(e)&&(i=e);var r=this.objectFix(t,i);return!this.isNotEmpty(r)&&this.isNotNull(i)&&(r=i),r},boolFix:function(t,e){var i=!1;this.isNotNull(e)&&(i=e);this.objectFix(t,i);return"true"==(t+"").toLowerCase()},intFix:function(t,e){var i=0;this.isNotNull(e)&&(i=e);var r=this.objectFix(t,i);return parseInt(r)},floatFix:function(t,e){var i=0,r=2;(this.isNotNull(e)&&(r=parseInt(e)),r>=0)?i=(i=1*this.objectFix(t,0)).toFixed(r):i=this.intFix(t);return i},queryGetArguments:function(t,e,i){if(-1==t.indexOf("?")||-1==t.indexOf(e+"="))return null;for(var r,n,o,s=t.substring(t.indexOf("?")+1).split("&"),u=0;u<s.length;u++)if(-1!=(r=s[u].indexOf("="))&&(n=s[u].substring(0,r),o=s[u].substring(r+1),n==e)){if(this.isNotNull(i)&&!1===i){var l=o.replace(/\+/g," ");return this.isNotNullStringAndNotEmpty(l)?l:null}var N=decodeURIComponent(o.replace(/\+/g," "));return this.isNotNullStringAndNotEmpty(N)?N:null}return null},parseObjectToUrlQuery:function(e,i){var r="";if(this.isNotNull(e)&&"object"===t(e)){for(var n in e)if(this.isNotNull(i)&&"true"===(i+"").toLowerCase()){var o=this.getValueByKey(n,e,"");"string"!=typeof o?(o=JSON.stringify(o),r+=n+"="+encodeURIComponent(o)+"&"):r+=n+"="+encodeURIComponent(o)+"&"}else{var s=this.getValueByKey(n,e,"");"string"!=typeof s?(s=JSON.stringify(s),r+=n+"="+encodeURIComponent(s)+"&"):r+=n+"="+s+"&"}r.endsWith("&")&&(r=r.substr(0,r.length-1))}return r},objectToUrlQuery:function(e,i){var r="";if(this.isNotNull(e))if("object"===t(e))r=this.parseObjectToUrlQuery(e,i);else if("string"==typeof e&&this.isNotEmpty(e))try{var n=JSON.parse(e);r=this.parseObjectToUrlQuery(n,i)}catch(t){this.LOG.error((function(){console.error(t)}))}return r},getRandomBetween:function(t,e){var i=t,r=e;return t>e&&(i=e,r=t),Number(Math.random()*(r-i+1)+i)},getRandomId:function(t,e){var i=Number(Math.random().toString().substr(3,t)+Date.now()).toString(36);return this.isNotEmpty(e)&&(i=e+"_"+i),i}};exports.BASE=e; 
 			}); 
		define("utils/base64.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";for(var r=require("../@babel/runtime/helpers/toConsumableArray"),e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="",n=[256],o=[256],a=0,u=function(r){return r.replace(/[\u0080-\u07ff]/g,(function(r){var e=r.charCodeAt(0);return String.fromCharCode(192|e>>6,128|63&e)})).replace(/[\u0800-\uffff]/g,(function(r){var e=r.charCodeAt(0);return String.fromCharCode(224|e>>12,128|e>>6&63,128|63&e)}))},f=function(r){return r.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,(function(r){var e=(15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2);return String.fromCharCode(e)})).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,(function(r){var e=(31&r.charCodeAt(0))<<6|63&r.charCodeAt(1);return String.fromCharCode(e)}))};a<256;){var c=String.fromCharCode(a);t+=c,o[a]=a,n[a]=e.indexOf(c),++a}function i(r,e,t,n,o,a){for(var u=0,f=0,c=(r=String(r)).length,i="",d=0;f<c;){var h=r.charCodeAt(f);for(u=(u<<o)+(h=h<256?t[h]:-1),d+=o;d>=a;){var C=u>>(d-=a);i+=n.charAt(C),u^=C<<d}++f}return!e&&d>0&&(i+=n.charAt(u<<a-d)),i}var d=function r(e,t,n){return t?r[e](t,n):e?null:this};d.btoa=d.encode=function(r,t){return(r=i(r=!1===d.raw||d.utf8encode||t?u(r):r,!1,o,e,8,6))+"====".slice(r.length%4||4)},d.atob=d.decode=function(r,e){r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");var o=(r=String(r).split("=")).length;do{r[--o]=i(r[o],!0,n,t,6,8)}while(o>0);return r=r.join(""),!1===d.raw||d.utf8decode||e?f(r):r},d.arrayBufferToBase64=function(e){var t=String.fromCharCode.apply(String,r(new Uint8Array(e)));return d.encode(t)},module.exports=d; 
 			}); 
		define("utils/http.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Http=void 0;var r=e(require("../@babel/runtime/regenerator")),t=require("../@babel/runtime/helpers/asyncToGenerator"),n=require("../@babel/runtime/helpers/classCallCheck"),u=require("../@babel/runtime/helpers/createClass"),a=function(e){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){var u=Object.assign(r,{success:function(e){t(e)},fail:function(e){n(e)}});e(u)}))}},s=function(){function e(){n(this,e)}var s;return u(e,null,[{key:"asyncRequest",value:(s=t(r.default.mark((function e(t,n,u,s){var i;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(wx.request)({url:t,method:n,data:u});case 2:i=e.sent,s(i);case 4:case"end":return e.stop()}}),e)}))),function(e,r,t,n){return s.apply(this,arguments)})}]),e}();exports.Http=s; 
 			}); 
		define("utils/log.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LOG=void 0;var e=require("./base"),o={DEBUG:"debug",INFO:"info",RESULT:"result",WARN:"warn",ERROR:"error",NONE:"none"},l={logLevel:o.INFO,LOG_LEVEL:o,setLogLevel:function(l){e.BASE.isNotEmpty(l)&&e.BASE.isKeyInObj(l.toUpperCase(),o)?this.logLevel=e.BASE.getValueByKey(l.toUpperCase(),o):this.logLevel=o.DEBUG},debug:function(){if(this.logLevel==o.DEBUG){for(var l=arguments.length,t=new Array(l),r=0;r<l;r++)t[r]=arguments[r];e.BASE.isNotEmpty(t)&&(t.length>1?console.debug(t):console.debug(t[0]))}},info:function(){if(this.logLevel==o.INFO||this.logLevel==o.DEBUG){for(var l=arguments.length,t=new Array(l),r=0;r<l;r++)t[r]=arguments[r];e.BASE.isNotEmpty(t)&&(t.length>1?console.info(t):console.info(t[0]))}},result:function(){if(e.BASE.logLevel==o.RESULT||e.BASE.logLevel==o.INFO||e.BASE.logLevel==o.DEBUG){for(var l=arguments.length,t=new Array(l),r=0;r<l;r++)t[r]=arguments[r];e.BASE.isNotEmpty(t)&&(t.length>1?console.result(t):console.result(t[0]))}},warn:function(){if(this.logLevel==o.RESULT||this.logLevel==o.WARN||this.logLevel==o.INFO||this.logLevel==o.DEBUG){for(var l=arguments.length,t=new Array(l),r=0;r<l;r++)t[r]=arguments[r];e.BASE.isNotEmpty(t)&&(t.length>1?console.warn(t):console.warn(t[0]))}},error:function(){if(this.logLevel==o.ERROR||this.logLevel==o.WARN||this.logLevel==o.RESULT||this.logLevel==o.INFO||this.logLevel==o.DEBUG){for(var l=arguments.length,t=new Array(l),r=0;r<l;r++)t[r]=arguments[r];e.BASE.isNotEmpty(t)&&(t.length>1?console.error(t):console.error(t[0]))}}};exports.LOG=l; 
 			}); 
		global.__wxRoute = '__plugin__/wx4179cb34161a15ec/pages/scan/scan-page';global.__wxRouteBegin = true; 	global.__wxAppCurrentFile__ = 'plugin-private://wx4179cb34161a15ec/pages/scan/scan-page.js';	define("pages/scan/scan-page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../@babel/runtime/regenerator")),a=require("../../@babel/runtime/helpers/defineProperty"),n=require("../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../utils/log"),o=e(require("../../index")),s=require("../../config"),r=require("../../utils/http"),c=require("../../libs/decode.js"),u=require("../../utils/base64"),d=require("../../libs/bmap-wx.min");i.LOG.setLogLevel(i.LOG.LOG_LEVEL.INFO);var f,h,l,m=new d.BMapWX({ak:s.ThridAuthKeys.baiduAuthKey});Page({data:{showCamera:!0,zoom:0,maxZoom:0,flashStatus:"off",ligthImg:"/images/scan/ic-light-off.png",qccKey:"",deviceModel:"",cntClick:0,maxClick:5,addrInfo:{lat:"",lon:"",addr:""},userInfo:null,language:"",isAuthSuccess:!1,theme:"blue"},onLoad:(l=n(t.default.mark((function e(n){var o,r,c,u,d,f;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=wx.getSystemInfoSync(),this.systemInfo=o,this.setData({deviceModel:o.model,language:o.language}),this.getMenuButtonBoundingClientRect(),n.clearCache&&"true"==n.clearCache)try{wx.removeStorageSync(s.StorageKeys.QccAuthTime),wx.removeStorageSync(s.StorageKeys.CameraZoomParam),wx.removeStorageSync(s.StorageKeys.UserInfo),i.LOG.info("清除缓存成功")}catch(e){i.LOG.info("清除缓存失败"),i.LOG.error(e)}if(n.unionId||n.openId)this.setData({userInfo:{unionId:n.unionId,openId:n.openId}}),i.LOG.info("外部传入用户信息："),i.LOG.info(this.data.userInfo);else try{(r=wx.getStorageSync(s.StorageKeys.UserInfo))?(r=JSON.parse(r),i.LOG.debug("从缓存读取用户信息"),this.setData({userInfo:r})):(i.LOG.debug("重新获取用户信息"),this.autoLogin())}catch(e){i.LOG.debug("UserInfo读取缓存失败"),i.LOG.debug(e)}if((c=requireMiniProgram()).theme&&this.setData({theme:c.theme}),null!=(u=c.qccAuthKey)){e.next=13;break}return wx.showToast({title:"授权参数缺失",icon:"error"}),i.LOG.error("授权参数缺失"),e.abrupt("return");case 13:return this.setData({qccKey:u}),e.next=16,this.requestCaramZoom(this.data.deviceModel);case 16:return d=this,wx.getLocation({type:"wgs84",success:function(e){d.setData({addrInfo:{lat:e.latitude,lon:e.longitude}}),i.LOG.debug(d.data.addrInfo),m.regeocoding({success:function(e){var t=e.wxMarkerData;d.setData(a({},"addrInfo.addr",t[0].address)),i.LOG.info(d.data.addrInfo)},fail:function(e){i.LOG.error("位置解析失败")}})},fail:function(e){i.LOG.info("wx locate err"),i.LOG.error(e)}}),f=wx.getAccountInfoSync(),e.next=21,this.authKeyCheck(f);case 21:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)}),autoLogin:function(){var e=this;wx.login({success:function(t){t.code?wx.request({url:s.ApiConfig.loginUrl,data:{code:t.code},success:function(t){"0"==t.data.resultCode?(i.LOG.info("登录成功："),e.setData({userInfo:t.data.data}),wx.setStorageSync(s.StorageKeys.UserInfo,JSON.stringify(t.data.data))):i.LOG.info("登录失败："+t.data.message)},fail:function(e){i.LOG.info("登录失败"),i.LOG.info(e)}}):i.LOG.info("登录失败！"+t.errMsg)},fail:function(e){i.LOG.info(e)}})},onReady:function(){},onShow:function(){this.getScanRangeViewInfo(),this.setData({flashStatus:"off",ligthImg:"/images/scan/ic-light-off.png"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},requestCaramZoom:(h=n(t.default.mark((function e(a){var n,o,c=this;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(new Date).getTime()/1e3,e.prev=1,!(o=wx.getStorageSync(s.StorageKeys.CameraZoomParam))){e.next=11;break}if(!(o=JSON.parse(o)).zoom||!o.time){e.next=11;break}if(!(n-Number(o.time)<=60*s.CacheTimeliness.CameraZoomVaildMinute)){e.next=11;break}return i.LOG.debug("从缓存中获取参数: "+o.zoom),this.setData({zoom:o.zoom}),e.abrupt("return");case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),i.LOG.debug("CameraZoomParam读取缓存失败"),i.LOG.debug(e.t0);case 17:return e.next=19,r.Http.asyncRequest(s.ApiConfig.zoomUrl,"GET",{model:a},(function(e){if("0"==e.data.resultCode){i.LOG.debug("相机放大倍数："+e.data.data);var t={zoom:e.data.data,time:n.toString()};c.setData({zoom:e.data.data}),wx.setStorageSync(s.StorageKeys.CameraZoomParam,JSON.stringify(t))}})).catch((function(e){}));case 19:case"end":return e.stop()}}),e,this,[[1,13]])}))),function(e){return h.apply(this,arguments)}),authKeyCheck:(f=n(t.default.mark((function e(a){var n,c,u,d,f=this;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setData({isAuthSuccess:!1}),n=(new Date).getTime()/1e3,e.prev=2,!(c=wx.getStorageSync(s.StorageKeys.QccAuthTime))){e.next=10;break}if(!(n-Number(c)<=3600*s.CacheTimeliness.AuthValidHour)){e.next=10;break}return i.LOG.debug("无需重新授权"),this.setData({isAuthSuccess:!0}),e.abrupt("return");case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),i.LOG.debug("QccAuthTime读取缓存失败"),i.LOG.debug(e.t0);case 16:return u=this,d={authKey:this.data.qccKey,imei:"wechat",model:this.data.deviceModel,osType:"3",osVersion:this.systemInfo.version,sdkVersion:a.plugin.version},e.next=20,r.Http.asyncRequest(s.ApiConfig.sdkAuthUrl,"POST",d,(function(e){var t=e.data;i.LOG.debug("授权结果:"+JSON.stringify(t)),"0"==e.data.resultCode?(i.LOG.info("插件授权成功"),u.setData({isAuthSuccess:!0}),wx.setStorageSync(s.StorageKeys.QccAuthTime,n.toString())):wx.showModal({title:"授权失败",content:e.data.message?e.data.message:"("+e.data.resultCode+")",cancelText:"退出",confirmText:"重试",success:function(e){e.confirm?f.authKeyCheck(a):(wx.navigateBack(),o.default.scanResultListener(t))}})})).catch((function(e){wx.showModal({title:"授权失败",content:e.errMsg,cancelText:"退出",confirmText:"重试",success:function(t){t.confirm?f.authKeyCheck(a):(wx.navigateBack(),o.default.scanResultListener({success:!1,resultCode:"-1",message:e.errMsg}))}})}));case 20:case"end":return e.stop()}}),e,this,[[2,12]])}))),function(e){return f.apply(this,arguments)}),switchFlash:function(){"off"==this.data.flashStatus?this.setData({flashStatus:"torch",ligthImg:"/images/scan/ic-light-on.png"}):this.setData({flashStatus:"off",ligthImg:"/images/scan/ic-light-off.png"})},cameraNotDetermined:function(){this.setData({showCamera:!1});var e=this;wx.showModal({title:"温馨提示",content:"检测到您未授权【摄像头】权限，将无法进行扫码识别",success:function(t){t.confirm&&wx.openSetting({complete:function(t){t.authSetting["scope.camera"]?e.setData({showCamera:!0}):e.cameraNotDetermined()}})}})},bindinitdone:function(e){this.ctx||(this.ctx=wx.createCameraContext(),i.LOG.debug("创建 camera 上下文 CameraContext 对象 ")),this.upload=!0;var t=this,a=e.detail.maxZoom;i.LOG.debug("最大放大倍数："+a),i.LOG.debug("相机放大倍数："+this.data.zoom),this.setData({maxZoom:a}),0==this.data.zoom||1==a?t.cameraFrameListener():this.ctx.setZoom({zoom:Number(this.data.zoom),success:function(e){t.cameraFrameListener()},fail:function(e){wx.showToast({title:"相机初始化失败"})},complete:function(e){}})},cameraFrameListener:function(){var e=this,t=this.ctx.onCameraFrame((function(a){e.data.isAuthSuccess&&e.upload&&e.decodeImg(a,t)}));t.start()},copyToHeapUint8Array:function(e){var t=e.length,a=c._malloc(t),n=new Uint8Array(c.HEAPU8.buffer,a,t);return n.set(new Uint8Array(e)),n},decodeImg:function(e,t){var a=this;this.upload=!1;var n=this.getScanImgRange(e.width,e.height),o=this.getImgYdata(new Uint8Array(e.data),e.width,e.height,n.width,n.height,n.fromX,n.fromY),r=this.copyToHeapUint8Array(new Array(102400)),d=this.copyToHeapUint8Array(o.data);if(0!=c._img_decode(r.byteOffset,d.byteOffset,null))return this.upload=!0,c._free(d.byteOffset),c._free(r.byteOffset),void c._free(o.byteOffset);for(var f=[],h=0,l=4+r[0]+256*r[1]+65536*r[2];h<l;h++)f[h]=r[h];c._free(d.byteOffset),c._free(r.byteOffset),c._free(f.byteOffset),c._free(o.byteOffset);var m={base64:u.arrayBufferToBase64(f),authKey:this.data.qccKey,model:this.data.deviceModel,lat:this.data.addrInfo.lat,lon:this.data.addrInfo.lon,addr:this.data.addrInfo.addr,unionId:this.data.userInfo?this.data.userInfo.unionId:"",openId:this.data.userInfo?this.data.userInfo.openId:"",language:this.data.language};wx.request({method:"POST",url:s.ApiConfig.decodeUrl,data:m,timeout:3e3,success:function(e){"0"==e.data.resultCode&&(t.stop(),a.jumpToResult(e.data))},fail:function(e){i.LOG.info("解码失败:"),i.LOG.error(e)},complete:function(e){a.upload=!0}})},jumpToResult:function(e){var t=e.data.url;-1!=t.indexOf("http://")&&-1!=t.indexOf("sun-tech.cn")?t=t.replace("http://","https://"):-1==t.indexOf("http")&&-1!=t.indexOf("sun-tech.cn")&&(t="https://"+t);var a={success:e.success,resultCode:e.resultCode,data:{url:t,vid:e.data.vid,cid:e.data.cid,tpid:e.data.tpid},dateTime:e.dateTime};wx.navigateBack(),o.default.scanResultListener(a)},addZoomEvent:function(){if(this.data.zoom!=this.data.maxZoom){var e=10*this.data.zoom;this.setData({zoom:(e+1)/10})}},subZoomEvent:function(){if(1!=this.data.zoom){var e=10*this.data.zoom;this.setData({zoom:(e-1)/10})}},setZoomEvent:function(){var e=this;this.ctx.setZoom({zoom:this.data.zoom,success:function(t){wx.request({method:"POST",url:"https://l66.co/decode-service/wxParam/zoom",data:{model:e.data.deviceModel,zoom:e.data.zoom},success:function(e){wx.showToast({title:"设置成功"})},fail:function(e){wx.showToast({title:"设置失败"})},complete:function(e){}})},fail:function(e){wx.showToast({title:"设置失败"})},complete:function(e){}})},longTap:function(){},getMenuButtonBoundingClientRect:function(){var e=wx.getMenuButtonBoundingClientRect(),t=this.systemInfo.statusBarHeight,a=(e.top,e.bottom+(e.top-t)),n=this.systemInfo.windowWidth-e.right;this.setData({statusBarHeight:t,navHeight:a,navPaddingRigt:n})},getScanRangeViewInfo:function(){var e=this,t=this.createSelectorQuery();t.select("#preview").boundingClientRect(),t.select("#scan-valid-range").boundingClientRect(),t.exec((function(t){var a=t[0].height,n=t[0].width,i=t[1].height,o=t[1].width,s=t[1].top,r={x:t[1].left+o/2,y:s+i/2};e.previewHeight=a,e.previewWidth=n,e.scanRangeViewCenter=r}))},getScanImgRange:function(e,t){var a=Math.floor((e-400)/2<0?0:(e-400)/2),n=parseInt((t-400)/2);if(this.scanRangeViewCenter){var i=t/e;if(this.previewHeight/this.previewWidth<i){var o=this.previewWidth*i;n=parseInt(((o-this.previewHeight)/2+this.scanRangeViewCenter.y)/o*t-200)}else n=parseInt(this.scanRangeViewCenter.y/this.previewHeight*t-200)}return{width:400,height:400,fromX:a,fromY:n}},getImgYdata:function(e,t,a,n,i,o,s){for(var r=e.slice(0,e.byteLength),c=[],u=0,d=0,f=0,h=0,l=s;l<s+i;l++)for(var m=o;m<o+n;m++)d=parseInt(r[4*(l*t+m)]),f=parseInt(r[4*(l*t+m)+1]),h=parseInt(r[4*(l*t+m)+2]),c[u]=this.clamp((299*d+587*f+114*h)/1e3),u++;return{data:c,width:t>n?n:t,height:a>i?i:a}},clamp:function(e){return parseInt(e)<0?0:parseInt(e)>255?255:parseInt(e)},closeScanView:function(){wx.navigateBack({delta:0}),o.default.onCallBackClickListener()}}); 
 			}); 
	require("pages/scan/scan-page.js");
 	
			;global.publishDomainComponents({"plugin://wx4179cb34161a15ec/scan-page":"plugin-private://wx4179cb34161a15ec/pages/scan/scan-page",});
				module.exports = function() {
		return require('index.js')
	}
			});
	requirePlugin("plugin://wx4179cb34161a15ec");
/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/classCallCheck.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/classCallCheck.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createClass.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}module.exports=_createClass;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createClass.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/defineProperty.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=_defineProperty;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/defineProperty.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("export.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={qccAuthKey:"dewyB9AJL0bGN/+JF1+JzSnDqW7kmnDSHSk3/j6XT4FdXh0WVCCk+bUXYOpf7KFx/nndcu5yFJVDUDxshgxL/ej3Z90Ovma9YStWcwOvEL1czeEsaIjvDtVwBUT0CBd9"};
},{isPage:false,isComponent:false,currentFile:'export.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/qqmap-wx-jssdk.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../@babel/runtime/helpers/classCallCheck"),e=require("../@babel/runtime/helpers/createClass"),i=310,s="请求参数信息有误",o=600,r="系统错误",n=1e3,a=200,l="https://apis.map.qq.com/ws/",d=l+"place/v1/suggestion",c="driving",u="transit",g={safeAdd:function(t,e){var i=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(i>>16)<<16|65535&i},bitRotateLeft:function(t,e){return t<<e|t>>>32-e},md5cmn:function(t,e,i,s,o,r){return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(e,t),this.safeAdd(s,r)),o),i)},md5ff:function(t,e,i,s,o,r,n){return this.md5cmn(e&i|~e&s,t,e,o,r,n)},md5gg:function(t,e,i,s,o,r,n){return this.md5cmn(e&s|i&~s,t,e,o,r,n)},md5hh:function(t,e,i,s,o,r,n){return this.md5cmn(e^i^s,t,e,o,r,n)},md5ii:function(t,e,i,s,o,r,n){return this.md5cmn(i^(e|~s),t,e,o,r,n)},binlMD5:function(t,e){var i,s,o,r,n;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var a=1732584193,l=-271733879,d=-1732584194,c=271733878;for(i=0;i<t.length;i+=16)s=a,o=l,r=d,n=c,a=this.md5ff(a,l,d,c,t[i],7,-680876936),c=this.md5ff(c,a,l,d,t[i+1],12,-389564586),d=this.md5ff(d,c,a,l,t[i+2],17,606105819),l=this.md5ff(l,d,c,a,t[i+3],22,-1044525330),a=this.md5ff(a,l,d,c,t[i+4],7,-176418897),c=this.md5ff(c,a,l,d,t[i+5],12,1200080426),d=this.md5ff(d,c,a,l,t[i+6],17,-1473231341),l=this.md5ff(l,d,c,a,t[i+7],22,-45705983),a=this.md5ff(a,l,d,c,t[i+8],7,1770035416),c=this.md5ff(c,a,l,d,t[i+9],12,-1958414417),d=this.md5ff(d,c,a,l,t[i+10],17,-42063),l=this.md5ff(l,d,c,a,t[i+11],22,-1990404162),a=this.md5ff(a,l,d,c,t[i+12],7,1804603682),c=this.md5ff(c,a,l,d,t[i+13],12,-40341101),d=this.md5ff(d,c,a,l,t[i+14],17,-1502002290),l=this.md5ff(l,d,c,a,t[i+15],22,1236535329),a=this.md5gg(a,l,d,c,t[i+1],5,-165796510),c=this.md5gg(c,a,l,d,t[i+6],9,-1069501632),d=this.md5gg(d,c,a,l,t[i+11],14,643717713),l=this.md5gg(l,d,c,a,t[i],20,-373897302),a=this.md5gg(a,l,d,c,t[i+5],5,-701558691),c=this.md5gg(c,a,l,d,t[i+10],9,38016083),d=this.md5gg(d,c,a,l,t[i+15],14,-660478335),l=this.md5gg(l,d,c,a,t[i+4],20,-405537848),a=this.md5gg(a,l,d,c,t[i+9],5,568446438),c=this.md5gg(c,a,l,d,t[i+14],9,-1019803690),d=this.md5gg(d,c,a,l,t[i+3],14,-187363961),l=this.md5gg(l,d,c,a,t[i+8],20,1163531501),a=this.md5gg(a,l,d,c,t[i+13],5,-1444681467),c=this.md5gg(c,a,l,d,t[i+2],9,-51403784),d=this.md5gg(d,c,a,l,t[i+7],14,1735328473),l=this.md5gg(l,d,c,a,t[i+12],20,-1926607734),a=this.md5hh(a,l,d,c,t[i+5],4,-378558),c=this.md5hh(c,a,l,d,t[i+8],11,-2022574463),d=this.md5hh(d,c,a,l,t[i+11],16,1839030562),l=this.md5hh(l,d,c,a,t[i+14],23,-35309556),a=this.md5hh(a,l,d,c,t[i+1],4,-1530992060),c=this.md5hh(c,a,l,d,t[i+4],11,1272893353),d=this.md5hh(d,c,a,l,t[i+7],16,-155497632),l=this.md5hh(l,d,c,a,t[i+10],23,-1094730640),a=this.md5hh(a,l,d,c,t[i+13],4,681279174),c=this.md5hh(c,a,l,d,t[i],11,-358537222),d=this.md5hh(d,c,a,l,t[i+3],16,-722521979),l=this.md5hh(l,d,c,a,t[i+6],23,76029189),a=this.md5hh(a,l,d,c,t[i+9],4,-640364487),c=this.md5hh(c,a,l,d,t[i+12],11,-421815835),d=this.md5hh(d,c,a,l,t[i+15],16,530742520),l=this.md5hh(l,d,c,a,t[i+2],23,-995338651),a=this.md5ii(a,l,d,c,t[i],6,-198630844),c=this.md5ii(c,a,l,d,t[i+7],10,1126891415),d=this.md5ii(d,c,a,l,t[i+14],15,-1416354905),l=this.md5ii(l,d,c,a,t[i+5],21,-57434055),a=this.md5ii(a,l,d,c,t[i+12],6,1700485571),c=this.md5ii(c,a,l,d,t[i+3],10,-1894986606),d=this.md5ii(d,c,a,l,t[i+10],15,-1051523),l=this.md5ii(l,d,c,a,t[i+1],21,-2054922799),a=this.md5ii(a,l,d,c,t[i+8],6,1873313359),c=this.md5ii(c,a,l,d,t[i+15],10,-30611744),d=this.md5ii(d,c,a,l,t[i+6],15,-1560198380),l=this.md5ii(l,d,c,a,t[i+13],21,1309151649),a=this.md5ii(a,l,d,c,t[i+4],6,-145523070),c=this.md5ii(c,a,l,d,t[i+11],10,-1120210379),d=this.md5ii(d,c,a,l,t[i+2],15,718787259),l=this.md5ii(l,d,c,a,t[i+9],21,-343485551),a=this.safeAdd(a,s),l=this.safeAdd(l,o),d=this.safeAdd(d,r),c=this.safeAdd(c,n);return[a,l,d,c]},binl2rstr:function(t){var e,i="",s=32*t.length;for(e=0;e<s;e+=8)i+=String.fromCharCode(t[e>>5]>>>e%32&255);return i},rstr2binl:function(t){var e,i=[];for(i[(t.length>>2)-1]=void 0,e=0;e<i.length;e+=1)i[e]=0;var s=8*t.length;for(e=0;e<s;e+=8)i[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return i},rstrMD5:function(t){return this.binl2rstr(this.binlMD5(this.rstr2binl(t),8*t.length))},rstrHMACMD5:function(t,e){var i,s,o=this.rstr2binl(t),r=[],n=[];for(r[15]=n[15]=void 0,o.length>16&&(o=this.binlMD5(o,8*t.length)),i=0;i<16;i+=1)r[i]=909522486^o[i],n[i]=1549556828^o[i];return s=this.binlMD5(r.concat(this.rstr2binl(e)),512+8*e.length),this.binl2rstr(this.binlMD5(n.concat(s),640))},rstr2hex:function(t){var e,i,s="";for(i=0;i<t.length;i+=1)e=t.charCodeAt(i),s+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(15&e);return s},str2rstrUTF8:function(t){return unescape(encodeURIComponent(t))},rawMD5:function(t){return this.rstrMD5(this.str2rstrUTF8(t))},hexMD5:function(t){return this.rstr2hex(this.rawMD5(t))},rawHMACMD5:function(t,e){return this.rstrHMACMD5(this.str2rstrUTF8(t),str2rstrUTF8(e))},hexHMACMD5:function(t,e){return this.rstr2hex(this.rawHMACMD5(t,e))},md5:function(t,e,i){return e?i?this.rawHMACMD5(e,t):this.hexHMACMD5(e,t):i?this.rawMD5(t):this.hexMD5(t)},getSig:function(t,e,i,s){var o=null,r=[];return Object.keys(t).sort().forEach((function(e){r.push(e+"="+t[e])})),"search"==i&&(o="/ws/place/v1/search?"+r.join("&")+e),"suggest"==i&&(o="/ws/place/v1/suggestion?"+r.join("&")+e),"reverseGeocoder"==i&&(o="/ws/geocoder/v1/?"+r.join("&")+e),"geocoder"==i&&(o="/ws/geocoder/v1/?"+r.join("&")+e),"getCityList"==i&&(o="/ws/district/v1/list?"+r.join("&")+e),"getDistrictByCityId"==i&&(o="/ws/district/v1/getchildren?"+r.join("&")+e),"calculateDistance"==i&&(o="/ws/distance/v1/?"+r.join("&")+e),"direction"==i&&(o="/ws/direction/v1/"+s+"?"+r.join("&")+e),o=this.md5(o)},location2query:function(t){if("string"==typeof t)return t;for(var e="",i=0;i<t.length;i++){var s=t[i];e&&(e+=";"),s.location&&(e=e+s.location.lat+","+s.location.lng),s.latitude&&s.longitude&&(e=e+s.latitude+","+s.longitude)}return e},rad:function(t){return t*Math.PI/180},getEndLocation:function(t){for(var e=t.split(";"),i=[],s=0;s<e.length;s++)i.push({lat:parseFloat(e[s].split(",")[0]),lng:parseFloat(e[s].split(",")[1])});return i},getDistance:function(t,e,i,s){var o=this.rad(t),r=this.rad(i),n=o-r,a=this.rad(e)-this.rad(s),l=2*Math.asin(Math.sqrt(Math.pow(Math.sin(n/2),2)+Math.cos(o)*Math.cos(r)*Math.pow(Math.sin(a/2),2)));return l*=6378136.49,l=Math.round(1e4*l)/1e4,parseFloat(l.toFixed(0))},getWXLocation:function(t,e,i){wx.getLocation({type:"gcj02",success:t,fail:e,complete:i})},getLocationParam:function(t){if("string"==typeof t){var e=t.split(",");t=2===e.length?{latitude:t.split(",")[0],longitude:t.split(",")[1]}:{}}return t},polyfillParam:function(t){t.success=t.success||function(){},t.fail=t.fail||function(){},t.complete=t.complete||function(){}},checkParamKeyEmpty:function(t,e){if(!t[e]){var o=this.buildErrorConfig(i,s+e+"参数格式有误");return t.fail(o),t.complete(o),!0}return!1},checkKeyword:function(t){return!this.checkParamKeyEmpty(t,"keyword")},checkLocation:function(t){var e=this.getLocationParam(t.location);if(!e||!e.latitude||!e.longitude){var o=this.buildErrorConfig(i,s+" location参数格式有误");return t.fail(o),t.complete(o),!1}return!0},buildErrorConfig:function(t,e){return{status:t,message:e}},handleData:function(t,e,i){if("search"==i){for(var s=e.data,o=[],r=0;r<s.length;r++)o.push({id:s[r].id||null,title:s[r].title||null,latitude:s[r].location&&s[r].location.lat||null,longitude:s[r].location&&s[r].location.lng||null,address:s[r].address||null,category:s[r].category||null,tel:s[r].tel||null,adcode:s[r].ad_info&&s[r].ad_info.adcode||null,city:s[r].ad_info&&s[r].ad_info.city||null,district:s[r].ad_info&&s[r].ad_info.district||null,province:s[r].ad_info&&s[r].ad_info.province||null});t.success(e,{searchResult:s,searchSimplify:o})}else if("suggest"==i){var n=e.data,a=[];for(r=0;r<n.length;r++)a.push({adcode:n[r].adcode||null,address:n[r].address||null,category:n[r].category||null,city:n[r].city||null,district:n[r].district||null,id:n[r].id||null,latitude:n[r].location&&n[r].location.lat||null,longitude:n[r].location&&n[r].location.lng||null,province:n[r].province||null,title:n[r].title||null,type:n[r].type||null});t.success(e,{suggestResult:n,suggestSimplify:a})}else if("reverseGeocoder"==i){var l=e.result,d={address:l.address||null,latitude:l.location&&l.location.lat||null,longitude:l.location&&l.location.lng||null,adcode:l.ad_info&&l.ad_info.adcode||null,city:l.address_component&&l.address_component.city||null,district:l.address_component&&l.address_component.district||null,nation:l.address_component&&l.address_component.nation||null,province:l.address_component&&l.address_component.province||null,street:l.address_component&&l.address_component.street||null,street_number:l.address_component&&l.address_component.street_number||null,recommend:l.formatted_addresses&&l.formatted_addresses.recommend||null,rough:l.formatted_addresses&&l.formatted_addresses.rough||null};if(l.pois){var c=l.pois,u=[];for(r=0;r<c.length;r++)u.push({id:c[r].id||null,title:c[r].title||null,latitude:c[r].location&&c[r].location.lat||null,longitude:c[r].location&&c[r].location.lng||null,address:c[r].address||null,category:c[r].category||null,adcode:c[r].ad_info&&c[r].ad_info.adcode||null,city:c[r].ad_info&&c[r].ad_info.city||null,district:c[r].ad_info&&c[r].ad_info.district||null,province:c[r].ad_info&&c[r].ad_info.province||null});t.success(e,{reverseGeocoderResult:l,reverseGeocoderSimplify:d,pois:c,poisSimplify:u})}else t.success(e,{reverseGeocoderResult:l,reverseGeocoderSimplify:d})}else if("geocoder"==i){var g=e.result,h={title:g.title||null,latitude:g.location&&g.location.lat||null,longitude:g.location&&g.location.lng||null,adcode:g.ad_info&&g.ad_info.adcode||null,province:g.address_components&&g.address_components.province||null,city:g.address_components&&g.address_components.city||null,district:g.address_components&&g.address_components.district||null,street:g.address_components&&g.address_components.street||null,street_number:g.address_components&&g.address_components.street_number||null,level:g.level||null};t.success(e,{geocoderResult:g,geocoderSimplify:h})}else if("getCityList"==i){var f=e.result[0],m=e.result[1],p=e.result[2];t.success(e,{provinceResult:f,cityResult:m,districtResult:p})}else if("getDistrictByCityId"==i){var y=e.result[0];t.success(e,y)}else if("calculateDistance"==i){var _=e.result.elements,v=[];for(r=0;r<_.length;r++)v.push(_[r].distance);t.success(e,{calculateDistanceResult:_,distance:v})}else if("direction"==i){var b=e.result.routes;t.success(e,b)}else t.success(e)},buildWxRequestConfig:function(t,e,i){var s=this;return e.header={"content-type":"application/json"},e.method="GET",e.success=function(e){var o=e.data;0===o.status?s.handleData(t,o,i):t.fail(o)},e.fail=function(e){e.statusCode=n,t.fail(s.buildErrorConfig(n,e.errMsg))},e.complete=function(e){switch(+e.statusCode){case n:t.complete(s.buildErrorConfig(n,e.errMsg));break;case a:var i=e.data;0===i.status?t.complete(i):t.complete(s.buildErrorConfig(i.status,i.message));break;default:t.complete(s.buildErrorConfig(o,r))}},e},locationProcess:function(t,e,i,s){var o=this;if(i=i||function(e){e.statusCode=n,t.fail(o.buildErrorConfig(n,e.errMsg))},s=s||function(e){e.statusCode==n&&t.complete(o.buildErrorConfig(n,e.errMsg))},t.location){if(o.checkLocation(t)){e(g.getLocationParam(t.location))}}else o.getWXLocation(e,i,s)}},h=function(){function i(e){if(t(this,i),!e.key)throw Error("key值不能为空");this.key=e.key}return e(i,[{key:"search",value:function(t){if(t=t||{},g.polyfillParam(t),g.checkKeyword(t)){var e={keyword:t.keyword,orderby:t.orderby||"_distance",page_size:t.page_size||10,page_index:t.page_index||1,output:"json",key:this.key};t.address_format&&(e.address_format=t.address_format),t.filter&&(e.filter=t.filter);var i=t.distance||"1000",s=t.auto_extend||1,o=null,r=null;t.region&&(o=t.region),t.rectangle&&(r=t.rectangle);g.locationProcess(t,(function(n){o&&!r?(e.boundary="region("+o+","+s+","+n.latitude+","+n.longitude+")",t.sig&&(e.sig=g.getSig(e,t.sig,"search"))):r&&!o?(e.boundary="rectangle("+r+")",t.sig&&(e.sig=g.getSig(e,t.sig,"search"))):(e.boundary="nearby("+n.latitude+","+n.longitude+","+i+","+s+")",t.sig&&(e.sig=g.getSig(e,t.sig,"search"))),wx.request(g.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/place/v1/search",data:e},"search"))}))}}},{key:"getSuggestion",value:function(t){if(t=t||{},g.polyfillParam(t),g.checkKeyword(t)){var e={keyword:t.keyword,region:t.region||"全国",region_fix:t.region_fix||0,policy:t.policy||0,page_size:t.page_size||10,page_index:t.page_index||1,get_subpois:t.get_subpois||0,output:"json",key:this.key};if(t.address_format&&(e.address_format=t.address_format),t.filter&&(e.filter=t.filter),t.location){g.locationProcess(t,(function(i){e.location=i.latitude+","+i.longitude,t.sig&&(e.sig=g.getSig(e,t.sig,"suggest")),wx.request(g.buildWxRequestConfig(t,{url:d,data:e},"suggest"))}))}else t.sig&&(e.sig=g.getSig(e,t.sig,"suggest")),wx.request(g.buildWxRequestConfig(t,{url:d,data:e},"suggest"))}}},{key:"reverseGeocoder",value:function(t){t=t||{},g.polyfillParam(t);var e={coord_type:t.coord_type||5,get_poi:t.get_poi||0,output:"json",key:this.key};t.poi_options&&(e.poi_options=t.poi_options);g.locationProcess(t,(function(i){e.location=i.latitude+","+i.longitude,t.sig&&(e.sig=g.getSig(e,t.sig,"reverseGeocoder")),wx.request(g.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:e},"reverseGeocoder"))}))}},{key:"geocoder",value:function(t){if(t=t||{},g.polyfillParam(t),!g.checkParamKeyEmpty(t,"address")){var e={address:t.address,output:"json",key:this.key};t.region&&(e.region=t.region),t.sig&&(e.sig=g.getSig(e,t.sig,"geocoder")),wx.request(g.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:e},"geocoder"))}}},{key:"getCityList",value:function(t){t=t||{},g.polyfillParam(t);var e={output:"json",key:this.key};t.sig&&(e.sig=g.getSig(e,t.sig,"getCityList")),wx.request(g.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/list",data:e},"getCityList"))}},{key:"getDistrictByCityId",value:function(t){if(t=t||{},g.polyfillParam(t),!g.checkParamKeyEmpty(t,"id")){var e={id:t.id||"",output:"json",key:this.key};t.sig&&(e.sig=g.getSig(e,t.sig,"getDistrictByCityId")),wx.request(g.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/getchildren",data:e},"getDistrictByCityId"))}}},{key:"calculateDistance",value:function(t){if(t=t||{},g.polyfillParam(t),!g.checkParamKeyEmpty(t,"to")){var e={mode:t.mode||"walking",to:g.location2query(t.to),output:"json",key:this.key};if(t.from&&(t.location=t.from),"straight"==e.mode){var i=function(i){for(var s=g.getEndLocation(e.to),o={message:"query ok",result:{elements:[]},status:0},r=0;r<s.length;r++)o.result.elements.push({distance:g.getDistance(i.latitude,i.longitude,s[r].lat,s[r].lng),duration:0,from:{lat:i.latitude,lng:i.longitude},to:{lat:s[r].lat,lng:s[r].lng}});var n=o.result.elements,a=[];for(r=0;r<n.length;r++)a.push(n[r].distance);return t.success(o,{calculateResult:n,distanceResult:a})};g.locationProcess(t,i)}else{i=function(i){e.from=i.latitude+","+i.longitude,t.sig&&(e.sig=g.getSig(e,t.sig,"calculateDistance")),wx.request(g.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/distance/v1/",data:e},"calculateDistance"))};g.locationProcess(t,i)}}}},{key:"direction",value:function(t){if(t=t||{},g.polyfillParam(t),!g.checkParamKeyEmpty(t,"to")){var e={output:"json",key:this.key};"string"==typeof t.to?e.to=t.to:e.to=t.to.latitude+","+t.to.longitude;var i;t.mode=t.mode||c,i="https://apis.map.qq.com/ws/direction/v1/"+t.mode,t.from&&(t.location=t.from),t.mode==c&&(t.from_poi&&(e.from_poi=t.from_poi),t.heading&&(e.heading=t.heading),t.speed&&(e.speed=t.speed),t.accuracy&&(e.accuracy=t.accuracy),t.road_type&&(e.road_type=t.road_type),t.to_poi&&(e.to_poi=t.to_poi),t.from_track&&(e.from_track=t.from_track),t.waypoints&&(e.waypoints=t.waypoints),t.policy&&(e.policy=t.policy),t.plate_number&&(e.plate_number=t.plate_number)),t.mode==u&&(t.departure_time&&(e.departure_time=t.departure_time),t.policy&&(e.policy=t.policy));g.locationProcess(t,(function(s){e.from=s.latitude+","+s.longitude,t.sig&&(e.sig=g.getSig(e,t.sig,"direction",t.mode)),wx.request(g.buildWxRequestConfig(t,{url:i,data:e},"direction"))}))}}}]),i}();module.exports=h;
},{isPage:false,isComponent:false,currentFile:'utils/qqmap-wx-jssdk.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/request.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),n=t.globalData.Url,e=t.globalData.codeUrl;module.exports={postForm:function(t,e,o){wx.request({url:n+t,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8'"},data:e,success:function(t){return"function"==typeof o&&o(t)},fail:function(t){return"function"==typeof o&&o(!1)}})},postJson:function(t,e,o){wx.request({url:n+t,method:"POST",header:{"Content-Type":"application/json;charset=UTF-8"},data:e,success:function(t){return"function"==typeof o&&o(t)},fail:function(t){return"function"==typeof o&&o(!1)}})},getJson:function(t,e,o){wx.request({url:n+t,method:"GET",header:{"Content-Type":"application/json;charset=UTF-8"},data:e,success:function(t){return"function"==typeof o&&o(t)},fail:function(t){return"function"==typeof o&&o(!1)}})},formatData:function(t){var n=t.getFullYear(),e=t.getMonth()+1,o=t.getDate(),r=o.toString().length,u=e.toString().length;return 1==r&&1==u?n+"-0"+e+"-0"+o:2==r&&2==u?n+"-"+e+"-"+o:1==r&&2==u?n+"-"+e+"-0"+o:2==r&&1==u?n+"-0"+e+"-"+o:void 0},getCodeInfo:function(t,n,o){wx.request({url:e+t,method:"GET",header:{"Content-Type":"application/json;charset=UTF-8"},data:n,success:function(t){return"function"==typeof o&&o(t)},fail:function(t){return"function"==typeof o&&o(!1)}})}};
},{isPage:false,isComponent:false,currentFile:'utils/request.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/util.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0".concat(t)};module.exports={formatTime:function(e){var n=e.getFullYear(),o=e.getMonth()+1,r=e.getDate(),a=e.getHours(),c=e.getMinutes(),u=e.getSeconds();return"".concat([n,o,r].map(t).join("-")," ").concat([a,c,u].map(t).join(":"))}};
},{isPage:false,isComponent:false,currentFile:'utils/util.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("app.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";App({onLaunch:function(){var n=wx.getStorageSync("logs")||[];n.unshift(Date.now()),wx.setStorageSync("logs",n),wx.login({success:function(n){}})},globalData:{userInfo:null,Url:"https://desunyun.com/JzqyApiNjjb/",codeUrl:"https://nanjingdeyang.qccvas.com/gateway-nginx/open-platform",reqUrl:wx.getStorageSync("jgurl")}});
},{isPage:false,isComponent:false,currentFile:'app.js'});require("app.js");$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
function gz$gwx_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPrivacy']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./components/privacy/privacy.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/privacy/privacy.wxml'] = [$gwx_XC_0, './components/privacy/privacy.wxml'];else __wxAppCode__['components/privacy/privacy.wxml'] = $gwx_XC_0( './components/privacy/privacy.wxml' );
	;__wxRoute = "components/privacy/privacy";__wxRouteBegin = true;__wxAppCurrentFile__="components/privacy/privacy.js";define("components/privacy/privacy.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({data:{privacyContractName:"",showPrivacy:!1},pageLifetimes:{show:function(){var t=this,n=wx.getAppBaseInfo().SDKVersion;t.compareVersion(n,"2.32.3")>=0&&wx.getPrivacySetting({success:function(n){"getPrivacySetting:ok"==n.errMsg&&t.setData({privacyContractName:n.privacyContractName,showPrivacy:n.needAuthorization})}})}},methods:{openPrivacyContract:function(){wx.openPrivacyContract({fail:function(){wx.showToast({title:"遇到错误",icon:"error"})}})},exitMiniProgram:function(){wx.showToast({title:"必须同意后才可以继续使用当前小程序",icon:"none"})},handleAgreePrivacyAuthorization:function(){this.setData({showPrivacy:!1})},compareVersion:function(t,n){t=t.split("."),n=n.split(".");for(var e=Math.max(t.length,n.length);t.length<e;)t.push("0");for(;n.length<e;)n.push("0");for(var o=0;o<e;o++){var r=parseInt(t[o]),a=parseInt(n[o]);if(r>a)return 1;if(r<a)return-1}return 0},handleCatchtouchMove:function(){}}});
},{isPage:false,isComponent:true,currentFile:'components/privacy/privacy.js'});require("components/privacy/privacy.js");$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./pages/codeinfo/codeinfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/codeinfo/codeinfo.wxml'] = [$gwx_XC_1, './pages/codeinfo/codeinfo.wxml'];else __wxAppCode__['pages/codeinfo/codeinfo.wxml'] = $gwx_XC_1( './pages/codeinfo/codeinfo.wxml' );
	;__wxRoute = "pages/codeinfo/codeinfo";__wxRouteBegin = true;__wxAppCurrentFile__="pages/codeinfo/codeinfo.js";define("pages/codeinfo/codeinfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=require("../../utils/request"),a=require("../../utils/util"),o=require("../../utils/qqmap-wx-jssdk.js"),n=wx.getStorageSync("jgurl"),s=requirePlugin("qcc-scan-plugin");Page({data:{scanCode:"",data_arr:[],req_arr:{},codelist:[],sginput:"",num:0,arr:[],radioItems:[{name:"扫描二维码",value:"扫描二维码",checked:"true"},{name:"扫描量子码",value:"扫描量子码"}],chooseType:"1",hidden:!1},onLoad:function(t){e=new o({key:"IOVBZ-V6GWL-VUZP4-MC4UF-TQIBO-ERFB7"}),this.toGetList(),this.isAuth()},tapEvent:function(){console.log("按钮被点击")},radioChange:function(e){var t=e.detail.value,a={};console.log(e),"扫描二维码"==e.detail.value?this.setData({chooseType:"1"}):this.setData({chooseType:"2"});for(var o=0;o<this.data.radioItems.length;o++)-1!==t.indexOf(this.data.radioItems[o].name)?a["radioItems["+o+"].checked"]=!0:a["radioItems["+o+"].checked"]=!1;this.setData(a)},toGetList:function(){},onReady:function(){},onShow:function(){var e=this;s.setScanResultListener((function(a){console.log("插件返回结果:"+JSON.stringify(a));var o=a.success,s=a.resultCode;if(o&&"0"==s){var i=decodeURIComponent(a.data.url),c=e.getUrlParams(i),d=a.data.vid,l=a.data.cid,r=(a.data.tpid,{tenantId:c.bizid,codeType:c.codeType,code:c.code,vid:d,cid:l});t.getCodeInfo("/v1/codeDetail/selectDetailByCode",r,(function(a){console.log(a);var o=a.data.data.codesInfo.codes.customCode.details[1],s={labelcode:a.data.data.codesInfo.codes.customCode.details[1]};wx.request({url:n+"/jczx/findConcreteTestBlock_Labelone",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8'"},data:s,success:function(n){if(console.log(n,"---"),"success"!=n.data.message)wx.showToast({title:n.data.message,icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}});else{var s=o.substring(0,o.indexOf("-"));if(-1!==e.data.arr.indexOf(s))wx.showToast({title:"该组试块已扫描",icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}});else{if(15==o.length)var i={labelcode:o.substring(0,o.lastIndexOf("-"))};else i={labelcode:o};t.postForm("/Index/verificationTestBlock",i,(function(t){console.log(t,"---+++"),e.setData({labelcodeimg1:t.data.labelcodeimg1,labelcodeimg2:t.data.labelcodeimg2,labelcodeimg3:t.data.labelcodeimg3})})),e.data.arr.push(s),15==o.length?e.setData({num:e.data.num+1,labelcode:o.substring(0,o.lastIndexOf("-"))}):e.setData({num:e.data.num+1,labelcode:a.result}),wx.showToast({title:"扫描成功",icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}})}}}})}))}}))},getUrlParams:function(e){for(var t={},a=e.split("?")[1].split("&"),o=0,n=a.length;o<n;o++){var s=a[o].split("=");t[s[0]]=s[1]}return t},toPicofOne:function(){wx.previewImage({urls:[this.data.labelcodeimg2]})},toPicofTwo:function(){wx.previewImage({urls:[this.data.labelcodeimg3]})},toPicofThree:function(){wx.previewImage({urls:[this.data.labelcodeimg1]})},scanCode:function(){var e=this;if("2"==e.data.chooseType){wx.getAccountInfoSync().miniProgram.appId;wx.navigateTo({url:"plugin://qcc-scan-plugin/scan-page"})}else wx.scanCode({onlyFromCamera:!0,success:function(a){if(a.result){a.result;var o=a.result.lastIndexOf("/"),s=a.result.substring(o+1,a.result.length);if(a.result.includes("https"))wx.request({url:"https://nanjingdeyang.qccvas.com/gateway-nginx/open-platform/v1/codeDetail/selectDetailByCode?codeType=6&code="+s,method:"GET",header:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8'"},data:{tenantId:"nanjingdeyang"},success:function(a){var o=a.data.data.codesInfo.codes.customCode.details[1];if(15==o.length)var s={labelcode:o.substring(0,o.lastIndexOf("-"))};else s={labelcode:o};wx.request({url:n+"/jczx/findConcreteTestBlock_Labelone",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8'"},data:s,success:function(a){if("success"!=a.data.message)wx.showToast({title:a.data.message,icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}});else{var n=o.substring(0,o.indexOf("-"));if(-1!==e.data.arr.indexOf(n))wx.showToast({title:"该组试块已扫描",icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}});else{if(15==o.length)var s={labelcode:o.substring(0,o.lastIndexOf("-"))};else s={labelcode:o};t.postForm("/Index/verificationTestBlock",s,(function(t){e.setData({labelcodeimg1:t.data.labelcodeimg1,labelcodeimg2:t.data.labelcodeimg2,labelcodeimg3:t.data.labelcodeimg3})})),e.data.arr.push(n),15==o.length?e.setData({num:e.data.num+1,labelcode:o.substring(0,o.lastIndexOf("-"))}):e.setData({num:e.data.num+1,labelcode:o}),wx.showToast({title:"扫描成功",icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}})}}}})}});else{if(15==a.result.length)var i={labelcode:a.result.substring(0,a.result.lastIndexOf("-"))};else i={labelcode:a.result};wx.request({url:n+"/jczx/findConcreteTestBlock_Labelone",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8'"},data:i,success:function(o){if("success"!=o.data.message)wx.showToast({title:o.data.message,icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}});else{var n=a.result.substring(0,a.result.indexOf("-"));if(-1!==e.data.arr.indexOf(n))wx.showToast({title:"该组试块已扫描",icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}});else{if(15==a.result.length)var s={labelcode:a.result.substring(0,a.result.lastIndexOf("-"))};else s={labelcode:a.result};t.postForm("/Index/verificationTestBlock",s,(function(t){e.setData({labelcodeimg1:t.data.labelcodeimg1,labelcodeimg2:t.data.labelcodeimg2,labelcodeimg3:t.data.labelcodeimg3})})),e.data.arr.push(n),15==a.result.length?e.setData({num:e.data.num+1,labelcode:a.result.substring(0,a.result.lastIndexOf("-"))}):e.setData({num:e.data.num+1,labelcode:a.result}),wx.showToast({title:"扫描成功",icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}})}}}})}}else wx.showToast({title:"请扫描正确的二维码！",icon:"none",duration:3e3,success:function(){setTimeout((function(){e.scanCode()}),3e3)}})}})},changeAvatar:function(e){var t=this;t.isAuth();var o={},n=e.currentTarget.dataset.sign;wx.chooseImage({count:0,sizeType:["compressed"],sourceType:["camera"],success:function(e){var s=wx.getFileSystemManager().readFileSync(e.tempFilePaths[0],"base64");o["src"+n]="data:image/png;base64,"+s,o["sign"+n+"_class"]="show",t.setData({"data_arr.wtphoto":o["src"+n],"req_arr.wtphoto":o["src"+n],"req_arr.wtphototime":a.formatTime(new Date)})},fail:function(e){wx.showToast({title:"已取消",icon:"none"})}})},tointVla:function(e){this.setData({sginput:e.detail.value})},toAddSG:function(){var e=this,a=e.data.sginput;if(""!=a){var o={labelcode:a};wx.request({url:n+"/jczx/findConcreteTestBlock_Labelone",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8'"},data:o,success:function(o){if("success"!=o.data.message)wx.showToast({title:o.data.message,icon:"none",duration:3e3});else if(-1!==e.data.arr.indexOf(a.substring(0,a.indexOf("-"))))wx.showToast({title:"该组试块已添加",icon:"none"});else{wx.showToast({title:"手工补录成功"}),e.data.arr.push(a.substring(0,a.indexOf("-"))),e.setData({num:e.data.num+1});var n={labelcode:a};t.postForm("/Index/verificationTestBlock",n,(function(t){e.setData({labelcodeimg1:t.data.labelcodeimg1,labelcodeimg2:t.data.labelcodeimg2,labelcodeimg3:t.data.labelcodeimg3})}))}}})}else wx.showToast({title:"请输入内容再进行添加",icon:"none"})},toUploadInfo:function(){wx.showLoading({title:"验样中...",mask:!0});for(var e=this,t=[],a=0;a<e.data.arr.length;a++)for(var o=0;o<3;o++){var s=e.data.arr[a]+"-"+(o+1);t.push(s)}e.data.req_arr.codeList=t,e.data.req_arr.jcdwbh=wx.getStorageSync("jcdwbh").toUpperCase(),e.data.req_arr.jcdwmc=wx.getStorageSync("jcdwmc"),e.data.req_arr.ygname=wx.getStorageSync("ygname"),e.data.req_arr.zgbh=wx.getStorageSync("gh");var i=e.data.req_arr;return null==e.data.data_arr.wtphoto?(wx.hideLoading(),wx.showToast({title:"请上传照片",icon:"none",duration:2e3}),!1):0==e.data.req_arr.codeList.length?(wx.hideLoading(),wx.showToast({title:"请扫描二维码",icon:"none",duration:2e3}),!1):void wx.request({url:n+"/jczx/uploadJczxYpWtphoto",method:"POST",header:{"Content-Type":"application/json;charset=UTF-8"},data:i,success:function(t){wx.hideLoading(),"验样成功!"==t.data.message?(wx.showToast({title:t.data.message,icon:"none",duration:2e3}),e.setData({codelist:[],"data_arr.wtphoto":"",labelcode:"",num:0,arr:[]})):""==t.data.message?wx.showToast({title:"上传失败",icon:"none",duration:2e3}):wx.showModal({content:t.data.message,title:"提示"})}})},isAuth:function(){var e=this;wx.getSetting({success:function(t){t.authSetting["scope.userLocation"]?e.yesAuth():wx.showModal({title:"提示",content:"请求获取位置权限",success:function(t){t.confirm?e.yesAuth():t.cancel&&wx.navigateBack({delta:2})}})}})},yesAuth:function(){wx.showLoading({title:"请稍后..."});var t=this;wx.getLocation({type:"gcj02",isHighAccuracy:!0,success:function(a){t.setData({"req_arr.wtphotolatitude":a.latitude,"req_arr.wtphotolongitude":a.longitude}),e.reverseGeocoder({location:{latitude:a.latitude,longitude:a.longitude},success:function(e){wx.hideLoading(),t.setData({"req_arr.wtphotoaddress":e.result.address,"data_arr.zxaddress":e.result.address})},fail:function(e){}})},fail:function(e){wx.hideLoading(),wx.showModal({title:"提示",content:"您必须授权定位，否则无法使用",success:function(e){(e.confirm||e.cancel)&&wx.navigateBack({delta:2})}})}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/codeinfo/codeinfo.js'});require("pages/codeinfo/codeinfo.js");$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'userinfo']],[3,'usertype']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var fE=_v()
_(r,fE)
if(_oz(z,0,e,s,gg)){fE.wxVkey=1
}
fE.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_2, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_2( './pages/index/index.wxml' );
	;__wxRoute = "pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index.js";define("pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";getApp(),require("../../utils/request");Page({data:{swiperList:[],jcdwmc:""},onLoad:function(e){this.setData({swiperList:["/image/home_img_1.png","/image/home_img_2.png","/image/home_img_3.png","/image/home_img_4.png"],"userinfo.jcdwmc":e.jcdwmc})},onShow:function(){wx.hideHomeButton({}),console.log(wx.getStorageSync("ygname"),wx.getStorageSync("jgurl"),"缓存测试"),this.setData({ygname:wx.getStorageSync("ygname")})},toScanCode:function(){wx.navigateTo({url:"../codeinfo/codeinfo"})},toGetSKInfo:function(){wx.scanCode({onlyFromCamera:!0,scanType:"qrCode",duration:2e3,success:function(e){console.log(e);var o=e.result,n=e.result.lastIndexOf("/"),t=e.result.substring(n+1,e.result.length);e.result.includes("https")?wx.request({url:"https://nanjingdeyang.qccvas.com/gateway-nginx/open-platform/v1/codeDetail/selectDetailByCode?codeType=6&code="+t,method:"GET",header:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8'"},data:{tenantId:"nanjingdeyang"},success:function(e){console.log(e.data.data.codesInfo.codes.customCode.details[1]),wx.navigateTo({url:"../skInfo/index?scanCode="+e.data.data.codesInfo.codes.customCode.details[1]})}}):wx.navigateTo({url:"../skInfo/index?scanCode="+o})},fail:function(e){wx.showToast({title:"已取消",icon:"none"})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/index/index.js'});require("pages/index/index.js");$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./pages/logs/logs.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var hG=_n('Privacy')
_(r,hG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/logs/logs.wxml'] = [$gwx_XC_3, './pages/logs/logs.wxml'];else __wxAppCode__['pages/logs/logs.wxml'] = $gwx_XC_3( './pages/logs/logs.wxml' );
	;__wxRoute = "pages/logs/logs";__wxRouteBegin = true;__wxAppCurrentFile__="pages/logs/logs.js";define("pages/logs/logs.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/defineProperty"),t=(require("../../utils/util.js"),require("../../utils/request"));Page({data:{dwdh:"",dwname:"",gh:"",ygname:"",upass:"",checkvalue:"记住密码",checked:""},onLoad:function(){},onShow:function(){var e=wx.getStorageSync("checkedtype");if(console.log(e,"chety"),"false"==e)this.setData({checked:"false"});else if("true"==e){this.setData({checked:"true"});var t=wx.getStorageSync("jcdwbh"),a=wx.getStorageSync("jcdwmc"),n=wx.getStorageSync("passwd"),o=wx.getStorageSync("ygname"),c=wx.getStorageSync("gh");this.setData({dwdh:t,dwname:a,upass:n,ygname:o,gh:c,checked:e})}},checkboxChange:function(e){0!==e.detail.value.length?(this.setData({checked:!0}),wx.setStorage({key:"checkedtype",data:"true"})):wx.setStorage({key:"checkedtype",data:"false"})},SetInputVal:function(t){var a=t.target.dataset.field;this.setData(e({},a,t.detail.value))},toLogin:function(){wx.showLoading({title:"正在登录中，请稍后..."});var e=this,a=wx.getStorageSync("checkedtype"),n={jcdwbh:e.data.dwdh,passwd:e.data.upass,zgbh:e.data.gh,ygname:e.data.ygname};return console.log(n,"data-------"),""==n.jcdwbh||""==n.passwd?(wx.hideLoading(),wx.showToast({title:"请输入检测单位代号或密码",icon:"none"}),!1):""==n.gh||""==n.ygname?(wx.hideLoading(),wx.showToast({title:"请输入登录工号以及员工姓名",icon:"none"}),!1):(wx.hideLoading(),void t.postForm("/jczx/jcdwlogin",n,(function(t){console.log(t),200==t.data.code?("true"==a&&(wx.setStorageSync("passwd",n.passwd),wx.setStorageSync("gh",n.zgbh),wx.setStorageSync("ygname",n.ygname)),wx.setStorageSync("jcdwbh",n.jcdwbh),wx.setStorageSync("jcdwmc",e.data.dwname),wx.setStorageSync("jgurl",t.data.data.JGURL),wx.showToast({title:"登录成功",duration:2e3,icon:"none",success:function(){setTimeout((function(){wx.redirectTo({url:"/pages/index/index?jcdwmc="+e.data.dwname})}),2e3)}})):(wx.showToast({title:"账号或密码错误，请重新输入",icon:"none"}),e.setData({upass:""}))})))},toGetDwName:function(e){var a=this,n={jcdwbh:e.detail.value};t.postForm("/jczx/findjcdwBybh",n,(function(e){""==e.data?(wx.showToast({title:"无此检测中心，请联系软件公司完善",icon:"none"}),a.setData({dwname:""})):a.setData({dwname:e.data.jcdwmc})}))},toGetUserInfo:function(e){var a=this,n={zgbh:e.detail.value,jcdwbh:a.data.dwdh};t.postForm("jczx/getUserNameByZgbh",n,(function(e){if(""==e.data)return wx.showToast({title:"未查询到该用户",icon:"none"}),a.setData({gh:""}),!1;a.setData({ygname:e.data.yg_name})}))}});
},{isPage:true,isComponent:true,currentFile:'pages/logs/logs.js'});require("pages/logs/logs.js");$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./pages/skInfo/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/skInfo/index.wxml'] = [$gwx_XC_4, './pages/skInfo/index.wxml'];else __wxAppCode__['pages/skInfo/index.wxml'] = $gwx_XC_4( './pages/skInfo/index.wxml' );
	;__wxRoute = "pages/skInfo/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/skInfo/index.js";define("pages/skInfo/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var n=require("../../@babel/runtime/helpers/defineProperty"),d=require("../../utils/request");Page({data:{scanCode:null,labelcodeimg1:"",latitude:"",longitude:"",markers:[{id:0,latitude:"",longitude:"",width:20,height:30,callout:{content:"",padding:10,display:"ALWAYS",textAlign:"center",color:"#FF0000",fontSize:16}},{id:1,latitude:"",longitude:"",width:20,height:30,callout:{content:"",padding:10,display:"ALWAYS",textAlign:"center",color:"#429FEA",fontSize:16}},{id:2,latitude:"",longitude:"",width:20,height:30,callout:{content:"",padding:10,display:"ALWAYS",textAlign:"center",color:"#8BC34A",fontSize:16}}],info:{rwdbh:null,gcmc:null,dwgc:null,jdzch:null,ghdw:null,jzrname:null,qyrname:null,upload:"未上传",fl:null,dbsl:null,sccj:null,ljfs:null,dj:null,ssfs:null,jtcj:null,qddj:null,jzbw:null,yplx:null,skbh:null,ggxh:null,yhtj:null,sfcm:null,cxrq:null,qybh:null,jgbw:null,pz:null,jb:null,gg:null,qynr:null,gjph:null,qybz:null,qysj:null,kzdj:null,lhph:null,labelcode1:null,labelcode2:null,labelcode3:null},ghdwdis:"",fldis:"",dbsldis:"",sccjdis:"",ssfsdis:"",qddjdis:"",djdis:"",jzbwdis:"",yplxdis:"",ggxhdis:"",yhtjdis:"",sfcmdis:"",cxrqdis:"",ljfsdis:"",qybhdis:"",jgbwdis:"",pzdis:"",jbdis:"",gjphdis:"",ggdis:"",qynrdis:"",qybzdis:"",qysjdis:"",jtcjdis:"",kzdjdis:"",lhphdis:"",labelcode1dis:"",labelcode2dis:"",labelcode3dis:"",jzqy_accno:""},toPicOfCNOne:function(){wx.previewImage({urls:[this.data.labelcodeimg2]})},toPicOfTwo:function(){wx.previewImage({urls:[this.data.labelcodeimg3]})},toPicOfzn:function(){wx.previewImage({urls:[this.data.labelcodeimg1]})},onLoad:function(n){var d=getCurrentPages();15==(n=d[d.length-1].options).scanCode.length&&(n.scanCode=n.scanCode.substring(0,n.scanCode.lastIndexOf("-"))),this.setData({scanCode:n.scanCode}),console.log(this.data.scanCode)},onReady:function(){},onShow:function(){var a=this,e=this,l={labelcode:e.data.scanCode};d.postForm("/Index/verificationTestBlock",l,(function(d){var l;console.log(d,"------");e.setData((n(l={},"markers[0].latitude",d.data.JZRLATITUDE),n(l,"jzqy_accno",d.data.jzqy_accno),n(l,"markers[0].longitude",d.data.JZRLONGITUDE),n(l,"markers[0].callout.content","见证人地址："+d.data.JZRADDRESS),n(l,"markers[1].latitude",d.data.QYRLATITUDE),n(l,"markers[1].longitude",d.data.QYRLONGITUDE),n(l,"markers[1].callout.content","取样人地址："+d.data.QYRADDRESS),n(l,"markers[2].latitude",d.data.latitude),n(l,"markers[2].longitude",d.data.longitude),n(l,"markers[2].callout.content","取样地址："+d.data.QYADDRESS),n(l,"info.rwdbh",d.data.XMBH),n(l,"labelcodeimg1",d.data.labelcodeimg1),n(l,"labelcodeimg2",d.data.labelcodeimg2),n(l,"labelcodeimg3",d.data.labelcodeimg3),n(l,"latitude",d.data.latitude),n(l,"longitude",d.data.longitude),n(l,"info.gcmc",d.data.GCMC),n(l,"info.jdzch",d.data.JDZCH),n(l,"info.ljfs",d.data.LJFS),n(l,"info.gjph",d.data.SHARE4),n(l,"info.jtcj",d.data.SCCJ),n(l,"info.dwgc",d.data.DWGCMC),n(l,"info.ghdw",d.data.GHDWMC),n(l,"info.jzrname",d.data.JZRNAME),n(l,"info.qyrname",d.data.QYRNAME),n(l,"info.upload",d.data.upload),n(l,"info.fl",d.data.GYFL),n(l,"info.dbsl",d.data.GYFL),n(l,"info.sccj",d.data.GHDWMC),n(l,"info.pz",d.data.PZ),n(l,"info.gg",d.data.GG),n(l,"info.jb",d.data.JB),n(l,"info.dj",d.data.YHTJ),n(l,"info.kzdj",d.data.SHARE7),n(l,"info.lhph",d.data.PH_BH),n(l,"info.qybh",d.data.QYBH),n(l,"info.qynr",d.data.QYNR),n(l,"info.qybz",d.data.BZ),n(l,"info.qysj",d.data.QYRQ),n(l,"info.skbh",d.data.XMBH_GD),n(l,"info.ssfs",d.data.SSFS),n(l,"info.qddj",d.data.QDDJ),n(l,"info.jzbw",d.data.JZBW),n(l,"info.yplx",d.data.YPTYPE),n(l,"info.ggxh",d.data.GG),n(l,"info.yhtj",d.data.YHTJ),n(l,"info.sfcm",d.data.SFCM),n(l,"info.cxrq",d.data.CXRQ),n(l,"info.jgbw",d.data.JGBW),n(l,"info.labelcode1",d.data.labelcode1),n(l,"info.labelcode2",d.data.labelcode2),n(l,"info.labelcode3",d.data.labelcode3),l)),console.log(d.data.YPTYPE),"混凝土试块"==d.data.YPTYPE?a.setData({dbsldis:"none",sccjdis:"none",yplxdis:"none",pzdis:"none",jbdis:"none",ggdis:"none",qynrdis:"none",qybzdis:"none",qysjdis:"none",kzdjdis:"none",lhphdis:"none",gjphdis:"none",ljfsdis:"none",djdis:"none",jtcjdis:"none",qybhdis:"none"}):"钢筋原材"==d.data.YPTYPE?a.setData({ghdwdis:"none",fldis:"none",ssfsdis:"none",qddjdis:"none",jzbwdis:"none",yhtjdis:"none",sfcmdis:"none",cxrqdis:"none",labelcode2dis:"none",labelcode3dis:"none",gjphdis:"none",ljfsdis:"none",djdis:"none",jtcjdis:"none",jbdis:"none",qybhdis:"none"}):"钢筋焊接"==d.data.YPTYPE?a.setData({ghdwdis:"none",fldis:"none",ssfsdis:"none",qddjdis:"none",jzbwdis:"none",yhtjdis:"none",sfcmdis:"none",cxrqdis:"none",jgbwdis:"none",djdis:"none",jtcjdis:"none",labelcode2dis:"none",labelcode3dis:"none",jbdis:"none",lhphdis:"none",qybhdis:"none"}):"钢筋机械连接"==d.data.YPTYPE&&a.setData({ghdwdis:"none",fldis:"none",ssfsdis:"none",qddjdis:"none",jzbwdis:"none",yhtjdis:"none",sfcmdis:"none",cxrqdis:"none",gjphdis:"none",jbdis:"none",kzdjdis:"none",sccjdis:"none",qybhdis:"none",labelcode2dis:"none",labelcode3dis:"none"})}))},onHide:function(){},onUnload:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/skInfo/index.js'});require("pages/skInfo/index.js");