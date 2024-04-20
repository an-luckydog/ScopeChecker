var __wxAppData=__wxAppData||{};var __wxRoute=__wxRoute||"";var __wxRouteBegin=__wxRouteBegin||"";var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __wxAppCurrentFile__=__wxAppCurrentFile__||"";var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};
	var __wxAppConsole__ = console;definePlugin("plugin://wx116d0dd5e6a39ac7", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console, requireMiniProgram) {            var __vd_version_info__=__vd_version_info__||{};            if (typeof console === 'undefined') {console=__wxAppConsole__; };			
			/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wx116d0dd5e6a39ac7=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wx116d0dd5e6a39ac7:"+m)}
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
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
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
if(r&&o.constructor===Function){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_wx116d0dd5e6a39ac7 || [];
function gz$gwx_wx116d0dd5e6a39ac7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1)return __WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1
__WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'pluginReady']])
Z([[7],[3,'adUnitId']])
Z([[7],[3,'autoPauseIfNavigate']])
Z([[7],[3,'autoPauseIfOpenNavigate']])
Z([[7],[3,'autoplay']])
Z([3,'bindcontrolstoggle'])
Z([3,'bindended'])
Z([3,'bindenterpictureinpicture'])
Z([3,'binderror'])
Z([3,'bindfullscreenchange'])
Z([3,'bindleavepictureinpicture'])
Z([3,'bindloadedmetadata'])
Z([3,'bindpause'])
Z([3,'bindplay'])
Z([3,'bindprogress'])
Z([3,'bindseekcomplete'])
Z([3,'bindtimeupdate'])
Z([3,'bindwaiting'])
Z([3,'vod_player_video'])
Z([[7],[3,'controls']])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[7],[3,'direction']])
Z([[7],[3,'enableAutoRotation']])
Z([[7],[3,'enableDanmu']])
Z([[7],[3,'enablePlayGesture']])
Z([[7],[3,'enableProgressGesture']])
Z([[7],[3,'playerid']])
Z([[7],[3,'initialTime']])
Z([[7],[3,'loop']])
Z([[7],[3,'muted']])
Z([[7],[3,'objectFit']])
Z([[7],[3,'pictureInPictureMode']])
Z([[7],[3,'pictureInPictureShowProgress']])
Z([[7],[3,'playBtnPosition']])
Z([[7],[3,'poster']])
Z([[7],[3,'posterForCrawler']])
Z([[7],[3,'showCastingButton']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showFullscreenBtn']])
Z([[7],[3,'showMuteBtn']])
Z([[7],[3,'showPlayBtn']])
Z([[7],[3,'showProgress']])
Z([[7],[3,'showScreenLockButton']])
Z([[7],[3,'showSnapshotButton']])
Z([[7],[3,'src']])
Z([[7],[3,'title']])
Z([[7],[3,'vslideGesture']])
Z([[7],[3,'vslideGestureInFullscreen']])
Z([[7],[3,'slotNames']])
Z([3,'slotNames.length \x3e 0'])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1);return __WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1
}
__WXML_GLOBAL__.ops_set.$gwx_wx116d0dd5e6a39ac7=z;
__WXML_GLOBAL__.ops_init.$gwx_wx116d0dd5e6a39ac7=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/player/player.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wx116d0dd5e6a39ac7_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'video',['adUnitId',1,'autoPauseIfNavigate',1,'autoPauseIfOpenNative',2,'autoplay',3,'bindcontrolstoggle',4,'bindended',5,'bindenterpictureinpicture',6,'binderror',7,'bindfullscreenchange',8,'bindleavepictureinpicture',9,'bindloadedmetadata',10,'bindpause',11,'bindplay',12,'bindprogress',13,'bindseekcomplete',14,'bindtimeupdate',15,'bindwaiting',16,'class',17,'controls',18,'danmuBtn',19,'danmuList',20,'direction',21,'enableAutoRotation',22,'enableDanmu',23,'enablePlayGesture',24,'enableProgressGesture',25,'id',26,'initialTime',27,'loop',28,'muted',29,'objectFit',30,'pictureInPictureMode',31,'pictureInPictureShowProgress',32,'playBtnPosition',33,'poster',34,'posterForCrawler',35,'showCastingButton',36,'showCenterPlayBtn',37,'showFullscreenBtn',38,'showMuteBtn',39,'showPlayBtn',40,'showProgress',41,'showScreenLockButton',42,'showSnapshotButton',43,'src',44,'title',45,'vslideGesture',46,'vslideGestureInFullscreen',47],[],e,s,gg)
var oD=_n('slot')
_(xC,oD)
var fE=_v()
_(xC,fE)
var cF=function(oH,hG,cI,gg){
var lK=_v()
_(cI,lK)
if(_oz(z,50,oH,hG,gg)){lK.wxVkey=1
var aL=_n('slot')
_rz(z,aL,'name',51,oH,hG,gg)
_(lK,aL)
}
lK.wxXCkey=1
return cI
}
fE.wxXCkey=2
_2z(z,49,cF,e,s,gg,fE,'item','index','')
_(oB,xC)
}
oB.wxXCkey=1
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

				global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/components/player/player.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/components/player/player.wxml'] = [$gwx_wx116d0dd5e6a39ac7, './components/player/player.wxml' ];else global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/components/player/player.wxml'] = $gwx_wx116d0dd5e6a39ac7( './components/player/player.wxml' );
		global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/package-lock.json'] = {"name":"plugin","version":"1.0.0","lockfileVersion":2,"requires":true,"packages":{"":{"version":"1.0.0","license":"ISC","dependencies":{"miniprogram-computed":"^4.0.1"}},"node_modules/@types/wechat-miniprogram":{"version":"3.2.0","resolved":"https://registry.npmjs.org/@types/wechat-miniprogram/-/wechat-miniprogram-3.2.0.tgz","integrity":"sha512-9Wrjz8cOn/woj/T8uUlNQTuxTj1StwFvVB54ITCPKSRpYbClmc7yiOupH68JKh1t5R3pkmf5v1adwalzc4PMIg\x3d\x3d"},"node_modules/fast-deep-equal":{"version":"2.0.1","resolved":"https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz","integrity":"sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk\x3d"},"node_modules/miniprogram-computed":{"version":"4.0.1","resolved":"https://registry.npmjs.org/miniprogram-computed/-/miniprogram-computed-4.0.1.tgz","integrity":"sha512-w2+T81zL+MQhF7qEP9L2EuDDYqiXvQfD2+ZD3ITVsMVze2OY60aVJzEOyb7C46YHu4Wngyxi+u9A+zZabUfoCw\x3d\x3d","dependencies":{"@types/wechat-miniprogram":"^3.0.0","fast-deep-equal":"^2.0.1","rfdc":"^1.1.4"}},"node_modules/rfdc":{"version":"1.2.0","resolved":"https://registry.npmjs.org/rfdc/-/rfdc-1.2.0.tgz","integrity":"sha512-ijLyszTMmUrXvjSooucVQwimGUk84eRcmCuLV8Xghe3UO85mjUtRAHRyoMM6XtyqbECaXuBWx18La3523sXINA\x3d\x3d"}},"dependencies":{"@types/wechat-miniprogram":{"version":"3.2.0","resolved":"https://registry.npmjs.org/@types/wechat-miniprogram/-/wechat-miniprogram-3.2.0.tgz","integrity":"sha512-9Wrjz8cOn/woj/T8uUlNQTuxTj1StwFvVB54ITCPKSRpYbClmc7yiOupH68JKh1t5R3pkmf5v1adwalzc4PMIg\x3d\x3d"},"fast-deep-equal":{"version":"2.0.1","resolved":"https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz","integrity":"sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk\x3d"},"miniprogram-computed":{"version":"4.0.1","resolved":"https://registry.npmjs.org/miniprogram-computed/-/miniprogram-computed-4.0.1.tgz","integrity":"sha512-w2+T81zL+MQhF7qEP9L2EuDDYqiXvQfD2+ZD3ITVsMVze2OY60aVJzEOyb7C46YHu4Wngyxi+u9A+zZabUfoCw\x3d\x3d","requires":{"@types/wechat-miniprogram":"^3.0.0","fast-deep-equal":"^2.0.1","rfdc":"^1.1.4"}},"rfdc":{"version":"1.2.0","resolved":"https://registry.npmjs.org/rfdc/-/rfdc-1.2.0.tgz","integrity":"sha512-ijLyszTMmUrXvjSooucVQwimGUk84eRcmCuLV8Xghe3UO85mjUtRAHRyoMM6XtyqbECaXuBWx18La3523sXINA\x3d\x3d"}},"__warning__":"无效的 page.json [\"name\"]、page.json [\"version\"]、page.json [\"lockfileVersion\"]、page.json [\"requires\"]、page.json [\"packages\"]、page.json [\"dependencies\"]"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/package-lock.wxml'] = [$gwx_wx116d0dd5e6a39ac7, './package-lock.wxml' ];else global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/package-lock.wxml'] = $gwx_wx116d0dd5e6a39ac7( './package-lock.wxml' );
		global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/package.json'] = {"name":"plugin","version":"1.0.0","description":"","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" \x26\x26 exit 1"},"author":"","license":"ISC","dependencies":{"miniprogram-computed":"^4.0.1"},"__warning__":"无效的 page.json [\"name\"]、page.json [\"version\"]、page.json [\"description\"]、page.json [\"main\"]、page.json [\"scripts\"]、page.json [\"author\"]、page.json [\"license\"]、page.json [\"dependencies\"]"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/package.wxml'] = [$gwx_wx116d0dd5e6a39ac7, './package.wxml' ];else global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/package.wxml'] = $gwx_wx116d0dd5e6a39ac7( './package.wxml' );
		global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/plugin.json'] = {"publicComponents":{"player":"components/player/player"},"main":"index.js"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/plugin.wxml'] = [$gwx_wx116d0dd5e6a39ac7, './plugin.wxml' ];else global.__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/plugin.wxml'] = $gwx_wx116d0dd5e6a39ac7( './plugin.wxml' );
	
				define("api/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t={};module.exports={getData:function(e){return t[e]},setData:function(e,n){t[e]=n},getContext:function(e){return t[e]}}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("./api/data.js");module.exports={getContext:t.getContext}; 
 			}); 
		define("miniprogram_npm/fast-deep-equal/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(){var r={},e=function(e,n){if(!r[e])return require(n);if(!r[e].status){var o=r[e].m;o._exports=o._tempexports;var i=Object.getOwnPropertyDescriptor(o,"exports");i&&i.configurable&&Object.defineProperty(o,"exports",{set:function(r){"object"===(void 0===r?"undefined":t(r))&&r!==o._exports&&(o._exports.__proto__=r.__proto__,Object.keys(r).forEach(function(t){o._exports[t]=r[t]})),o._tempexports=r},get:function(){return o._tempexports}}),r[e].status=1,r[e].func(r[e].req,o,o.exports)}return r[e].m.exports};return function(t,e,n){var o={exports:{},_tempexports:{}};r[t]={status:0,func:e,req:n,m:o}}(1613807211500,function(r,e,n){var o=Array.isArray,i=Object.keys,f=Object.prototype.hasOwnProperty;e.exports=function r(e,n){if(e===n)return!0;if(e&&n&&"object"==(void 0===e?"undefined":t(e))&&"object"==(void 0===n?"undefined":t(n))){var u,p,s,c=o(e),a=o(n);if(c&&a){if((p=e.length)!=n.length)return!1;for(u=p;0!=u--;)if(!r(e[u],n[u]))return!1;return!0}if(c!=a)return!1;var y=e instanceof Date,m=n instanceof Date;if(y!=m)return!1;if(y&&m)return e.getTime()==n.getTime();var x=e instanceof RegExp,b=n instanceof RegExp;if(x!=b)return!1;if(x&&b)return e.toString()==n.toString();var _=i(e);if((p=_.length)!==i(n).length)return!1;for(u=p;0!=u--;)if(!f.call(n,_[u]))return!1;for(u=p;0!=u--;)if(s=_[u],!r(e[s],n[s]))return!1;return!0}return e!==e&&n!==n}},function(t){return e({}[t],t)}),e(1613807211500)}(); 
 			}); 
		define("miniprogram_npm/miniprogram-computed/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=t,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"===(void 0===t?"undefined":e(t))&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1).behavior},function(t,n,r){var o="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return void 0===t?"undefined":e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":e(t)},i=r(2)({proto:!0}),a=r(3),u=r(4),c=r(5),f=[String,Number,Boolean,Object,Array,null],d=["",0,!1,null,[],null],l=function(e,t){var n=e;return t.forEach(function(e){n="object"!==(void 0===n?"undefined":o(n))||null===n?void 0:n[e]}),n},s=function(e,t,n){for(var r=e,i=0;i<t.length-1;){var a=t[i++];"number"==typeof a?r[a]instanceof Array||(r[a]=[]):"object"===o(r[a])&&null!==r[a]||(r[a]={}),r=r[a]}r[t[i]]=n},p=function(e,t){var n={};return Object.keys(e).forEach(function(t){n[t]=e[t]}),t&&Object.keys(t).forEach(function(e){var r=null,o=t[e],i=f.indexOf(o);if(i>=0)r=d[i];else if(o.value)r=o.value;else{var a=f.indexOf(o.type);a>=0&&(r=d[a])}n[e]=r}),n};n.behavior=Behavior({lifetimes:{created:function(){this._initComputedWatchInfo()}},definitionFilter:function(e){var t=e.computed||{},n=e.watch||{},r=[];if(e.methods||(e.methods={}),e.data||(e.data={}),e.methods._initComputedWatchInfo)throw new Error("Please do not use this behavior more than once in a single component");var f=[];e.methods._initComputedWatchInfo=function(){var e=this;this._computedWatchInfo||(this._computedWatchInfo={computedRelatedPathValues:{},watchCurVal:{}},f.forEach(function(t){return t.call(e)}))};var d=[];if(Object.keys(t).forEach(function(n){var r=u.parseSingleDataPath(n).path,o=t[n],i=[],a=p(e.data,e.properties),h=o(c.create(a,i));s(e.data,r,c.unwrap(h)),f.push(function(){var e=this,t=i.map(function(t){var n=t.path;return{path:n,value:l(e.data,n)}});this._computedWatchInfo.computedRelatedPathValues[n]=t}),d.push(function(){for(var e,t=this._computedWatchInfo.computedRelatedPathValues[n],r=!1,i=0;i<t.length;i++){var a=t[i],u=a.path;if(a.value!==l(this.data,u)){r=!0;break}}if(!r)return!1;var f=[],d=o(c.create(this.data,f));return this.setData((e={},e[n]=d,e)),this._computedWatchInfo.computedRelatedPathValues[n]=f,!0})}),d.length&&r.push({fields:"**",observer:function(){var e=this;if(this._computedWatchInfo){var t=void 0;do{t=!1,d.forEach(function(n){n.call(e)&&(t=!0)})}while(t)}}}),Object.keys(n).forEach(function(e){var t=u.parseMultiDataPaths(e);f.push(function(){var n=this,r=t.map(function(e){var t=e.path,r=e.options,o=l(n.data,t);return r.deepCmp?i(o):o});this._computedWatchInfo.watchCurVal[e]=r}),r.push({fields:e,observer:function(){var r=this;if(this._computedWatchInfo){var o=this._computedWatchInfo.watchCurVal[e],u=t.map(function(e){var t=e.path,n=e.options;return{val:l(r.data,t),options:n}}),c=u.map(function(e){var t=e.val;return e.options.deepCmp?i(t):t});this._computedWatchInfo.watchCurVal[e]=c;for(var f=!1,d=0;d<c.length;d++)if(t[d].options.deepCmp?!a(o[d],c[d]):o[d]!==c[d]){f=!0;break}f&&n[e].apply(this,u.map(function(e){return e.val}))}}})}),"object"!==o(e.observers)&&(e.observers={}),e.observers instanceof Array){var h;(h=e.observers).push.apply(h,r)}else r.forEach(function(t){e.observers[t.fields]=t.observer})}})},function(e,t){e.exports=require("rfdc")},function(e,t){e.exports=require("fast-deep-equal")},function(e,t,n){var r=/^\s/,o=function(e,t){throw new Error('Parsing data path "'+e+'" failed at char "'+e[t]+'" (index '+t+")")},i=function(e,t){for(var n=t.index;t.index<t.length;){var r=e[t.index];{if(!/^[0-9]/.test(r))break;t.index++}}return n===t.index&&o(e,t.index),parseInt(e.slice(n,t.index),10)},a=function(e,t){var n=t.index,r=e[n];if(/^[_a-zA-Z$]/.test(r))for(t.index++;t.index<t.length;){var i=e[t.index];{if(!/^[_a-zA-Z0-9$]/.test(i))break;t.index++}}else o(e,t.index);return e.slice(n,t.index)},u=function(e,t){for(var n=[a(e,t)],r={deepCmp:!1};t.index<t.length;){var u=e[t.index];if("["===u)t.index++,n.push(i(e,t)),"]"!==e[t.index]&&o(e,t.index),t.index++;else{if("."!==u)break;if(t.index++,"*"===e[t.index]){if(t.index++,"*"===e[t.index]){t.index++,r.deepCmp=!0;break}o(e,t.index)}n.push(a(e,t))}}return{path:n,options:r}},c=function(e,t){for(;r.test(e[t.index]);)t.index++;for(var n=[u(e,t)],i=!1;t.index<t.length;){var a=e[t.index];r.test(a)?t.index++:","===a?(i=!0,t.index++):i?(i=!1,n.push(u(e,t))):o(e,t.index)}return n},f=function(e,t){t.index<t.length&&o(e,t.index)};t.parseSingleDataPath=function(e){var t={length:e.length,index:0},n=u(e,t);return f(e,t),n},t.parseMultiDataPaths=function(e){var t={length:e.length,index:0},n=c(e,t);return f(e,t),n}},function(t,n,r){var o="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return void 0===t?"undefined":e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":e(t)},i=function e(t,n,r){if("object"!==(void 0===t?"undefined":o(t))||null===t)return t;var i=t instanceof Array,a={};Object.keys(t).forEach(function(o){var i=null;a[o]={get:function(){if(!i){var a=r.concat(o);n.push({path:a,value:t[o]}),i=e(t[o],n,a)}return i},set:function(){throw new Error("Setting data is not allowed")},enumerable:!0}}),i&&(a.length={value:t.length,enumerable:!1}),a.__rawObject__={get:function(){return t},set:function(){throw new Error("Setting data is not allowed")},enumerable:!1};var u=i?Array.prototype:Object.prototype;return Object.create(u,a)};n.create=function(e,t){return i(e,t,[])},n.unwrap=function(e){return"object"!==(void 0===e?"undefined":o(e))||null===e||"object"!==o(e.__rawObject__)?e:e.__rawObject__}}]); 
 			}); 
		define("miniprogram_npm/rfdc/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(){var n={},t=function(t,r){if(!n[t])return require(r);if(!n[t].status){var o=n[t].m;o._exports=o._tempexports;var i=Object.getOwnPropertyDescriptor(o,"exports");i&&i.configurable&&Object.defineProperty(o,"exports",{set:function(n){"object"===(void 0===n?"undefined":e(n))&&n!==o._exports&&(o._exports.__proto__=n.__proto__,Object.keys(n).forEach(function(e){o._exports[e]=n[e]})),o._tempexports=n},get:function(){return o._tempexports}}),n[t].status=1,n[t].func(n[t].req,o,o.exports)}return n[t].m.exports};return function(e,t,r){var o={exports:{},_tempexports:{}};n[e]={status:0,func:t,req:r,m:o}}(1613807211501,function(n,t,r){function o(n){function t(n,t){for(var r=Object.keys(n),o=new Array(r.length),u=0;u<r.length;u++){var a=r[u],c=n[a];if("object"!==(void 0===c?"undefined":e(c))||null===c)o[a]=c;else if(c instanceof Date)o[a]=new Date(c);else{var s=i.indexOf(c);o[a]=-1!==s?f[s]:t(c)}}return o}function r(n){if("object"!==(void 0===n?"undefined":e(n))||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return t(n,r);var o={};i.push(n),f.push(o);for(var u in n)if(!1!==Object.hasOwnProperty.call(n,u)){var a=n[u];if("object"!==(void 0===a?"undefined":e(a))||null===a)o[u]=a;else if(a instanceof Date)o[u]=new Date(a);else{var c=i.indexOf(a);o[u]=-1!==c?f[c]:r(a)}}return i.pop(),f.pop(),o}function o(n){if("object"!==(void 0===n?"undefined":e(n))||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return t(n,o);var r={};i.push(n),f.push(r);for(var u in n){var a=n[u];if("object"!==(void 0===a?"undefined":e(a))||null===a)r[u]=a;else if(a instanceof Date)r[u]=new Date(a);else{var c=i.indexOf(a);r[u]=-1!==c?f[c]:o(a)}}return i.pop(),f.pop(),r}var i=[],f=[];return n.proto?o:r}t.exports=function(n){function t(n,t){for(var r=Object.keys(n),o=new Array(r.length),i=0;i<r.length;i++){var f=r[i],u=n[f];"object"!==(void 0===u?"undefined":e(u))||null===u?o[f]=u:u instanceof Date?o[f]=new Date(u):o[f]=t(u)}return o}function r(n){if("object"!==(void 0===n?"undefined":e(n))||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return t(n,r);var o={};for(var i in n)if(!1!==Object.hasOwnProperty.call(n,i)){var f=n[i];"object"!==(void 0===f?"undefined":e(f))||null===f?o[i]=f:f instanceof Date?o[i]=new Date(f):o[i]=r(f)}return o}function i(n){if("object"!==(void 0===n?"undefined":e(n))||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return t(n,i);var r={};for(var o in n){var f=n[o];"object"!==(void 0===f?"undefined":e(f))||null===f?r[o]=f:f instanceof Date?r[o]=new Date(f):r[o]=i(f)}return r}return(n=n||{}).circles?o(n):n.proto?i:r}},function(e){return t({}[e],e)}),t(1613807211501)}(); 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wx116d0dd5e6a39ac7/components/player/player.js';global.__wxRouteBegin = true; 	define("components/player/player.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../api/data.js"),t=require("miniprogram-computed");Component({behaviors:[t],watch:{fileid:function(){this.changeSource()}},options:{multipleSlots:!0},data:{vctx:null,status:"",pluginReady:!1,src:""},properties:{fileid:{type:String,value:""},playerid:{type:String,value:""},appid:{type:String,value:""},playurl:{type:String,value:""},title:{type:String,value:""},muted:{type:Boolean,value:!1},width:{type:String,value:""},height:{type:String,value:""},autoplay:{type:Boolean,value:!1},loop:{type:Boolean,value:!1},showProgress:{type:Boolean,value:!0},direction:{type:Number,value:-1},poster:{type:String,value:""},controls:{type:Boolean,value:!0},objectFit:{type:String,value:"fill"},initialTime:{type:Number,value:0},showCenterPlayBtn:{type:Boolean,value:!0},showMuteBtn:{type:Boolean,value:!1},enableDanmu:{type:Boolean,value:!1},danmuBtn:{type:Boolean,value:!1},danmuList:{type:Array,value:null},showFullscreenBtn:{type:Boolean,value:!0},showPlayBtn:{type:Boolean,value:!0},enableProgressGesture:{type:Boolean,value:!0},playBtnPosition:{type:String,value:"bottom"},enablePlayGesture:{type:Boolean,value:!1},autoPauseIfNavigate:{type:Boolean,value:!0},autoPauseIfOpenNative:{type:Boolean,value:!0},vslideGesture:{type:Boolean,value:!1},vslideGestureInFullscreen:{type:Boolean,value:!0},adUnitId:{type:String,value:""},posterForCrawler:{type:String,value:""},showCastingButton:{type:Boolean,value:!1},pictureInPictureMode:{type:String|Array,value:""},pictureInPictureShowProgress:{type:Boolean,value:!1},enableAutoRotation:{type:Boolean,value:!1},showScreenLockButton:{type:Boolean,value:!1},showSnapshotButton:{type:Boolean,value:!1},slotNames:{type:Array,value:[]}},methods:{init:function(){},setMuted:function(e){this.setData({muted:!!e})},setLoop:function(e){this.setData({loop:!!e})},bindplay:function(e){this.data.status="playing",this.triggerEvent("play",e)},bindpause:function(e){this.data.status="pause",this.triggerEvent("pause",e)},bindended:function(e){this.data.status="ended",this.triggerEvent("ended",e)},bindtimeupdate:function(e){this.triggerEvent("timeupdate",e)},bindfullscreenchange:function(e){this.triggerEvent("fullscreenchange",e)},bindwaiting:function(e){this.triggerEvent("waiting",e)},binderror:function(e){this.triggerEvent("error",e)},bindprogress:function(e){this.triggerEvent("progress",e)},bindloadedmetadata:function(e){this.triggerEvent("loadedmetadata",e)},bindcontrolstoggle:function(e){this.triggerEvent("controlstoggle",e)},bindenterpictureinpicture:function(e){this.triggerEvent("enterpictureinpicture",e)},bindleavepictureinpicture:function(e){this.triggerEvent("leavepictureinpicture",e)},bindseekcomplete:function(e){this.triggerEvent("seekcomplete",e)},bindreadycallback:function(e){this.triggerEvent("onreadycallback",{context:e})},play:function(){this.data.vctx.play()},pause:function(){this.data.vctx.pause()},stop:function(){this.data.vctx.stop()},seek:function(e){var t=this.data.vctx;t.seek.call(t,e)},sendDanmu:function(e){var t=this.data.vctx;t.sendDanmu.call(t,e)},playbackRate:function(e){var t=this.data.vctx;t.playbackRate.call(t,e)},requestFullScreen:function(e){var t=this.data.vctx;t.requestFullScreen.call(t,e)},exitFullScreen:function(){var e=this.data.vctx;e.exitFullScreen.call(e)},showStatusBar:function(){var e=this.data.vctx;e.showStatusBar.call(e)},hideStatusBar:function(){var e=this.data.vctx;e.hideStatusBar.call(e)},exitPictureInPicture:function(){var e=this.data.vctx;e.exitPictureInPicture.call(e)},changeSource:function(){var t=this,a=this,n=a.data.playerid,i=a.data.appid,r=a.data.fileid,o=a.data.playurl;n?i?r?a.getAuth({appid:i,fileid:r,playurl:o},function(i){if(i&&i.data&&0==i.data.code){var r=i.data.mediaInfo.miniProgramReviewInfo;if(r&&r.miniProgramReviewList&&r.miniProgramReviewList[0]){var o=r.miniProgramReviewList[0];if("Pass"===o.reviewResult){o.metaData;var l=o.url,u=wx.createVideoContext(n,a);a.data.vctx=u,e.setData(n,a),a.setData({pluginReady:!0,src:l}),a.bindreadycallback(u)}else t.triggerEvent("error","player auth error")}else t.triggerEvent("error","player auth error")}else t.triggerEvent("error","player auth error")},function(e){t.triggerEvent("error","player auth error")}):console.error("fileid should not be null"):console.error("appid should not be null"):console.error("playerid should not be null")},getAuth:function(e,t,a){var n=e.fileid,i=e.appid,r=e.playurl,o="https://playvideo.qcloud.com/miniprogram/v1/"+i+"/"+n;wx.request({url:o,data:r?{playurl:r}:{},success:function(e){e&&e.data&&0==e.data.code?t&&"function"==typeof t&&t(e):a&&"function"==typeof a&&a(e)},error:function(e){a&&"function"==typeof a&&a(e)}})}},attached:function(){},detached:function(){}}); 
 			}); 	require("components/player/player.js");
 	
				global.publishDomainComponents({
			"plugin://wx116d0dd5e6a39ac7/player":"plugin-private://wx116d0dd5e6a39ac7/components/player/player"
	})
				module.exports = function() {
		return require('index.js')
	}
			});
	requirePlugin("plugin://wx116d0dd5e6a39ac7");
	var __wxAppConsole__ = console;definePlugin("plugin://wxa75efa648b60994b", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console, requireMiniProgram,WXWebAssembly) {            var __vd_version_info__=__vd_version_info__||{};            if (typeof console === 'undefined') {console=__wxAppConsole__; };			
			/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wxa75efa648b60994b=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wxa75efa648b60994b:"+m)}
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
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
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
if(r&&o.constructor===Function){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b || [];
function gz$gwx_wxa75efa648b60994b_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'autoplay']])
Z([3,'_onTvpControlstoggle'])
Z([3,'__onTvpEnded'])
Z([3,'_onEnterPictureInPicture'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'_onLeavePictureInPicture'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpTimeupdate'])
Z([3,'__onTvpWaiting'])
Z([3,'player_video'])
Z([[2,'!'],[[7],[3,'tvpIsAd']]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[7],[3,'enableAutoRotation']])
Z([[7],[3,'enableDanmu']])
Z([[2,'||'],[[7],[3,'isHiddenVideo']],[[2,'=='],[[7],[3,'tvpState']],[1,'error']]])
Z([[7],[3,'playerid']])
Z([[7],[3,'muted']])
Z([[7],[3,'pictureInPictureMode']])
Z([[7],[3,'poster']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showScreenLockButton']])
Z([[7],[3,'tvpUrl']])
Z([[7],[3,'title']])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showHDSelector']]])
Z([[7],[3,'fullscreen']])
Z(z[27])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showHDSelector']]],[[7],[3,'formats']]],[[6],[[7],[3,'formats']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
}
function gz$gwx_wxa75efa648b60994b_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'adUnitId']])
Z([[7],[3,'autoPauseIfNavigate']])
Z([[7],[3,'autoPauseIfOpenNative']])
Z([[7],[3,'autoplay']])
Z([3,'_onTvpControlstoggle'])
Z([3,'__onTvpEnded'])
Z([3,'_onEnterPictureInPicture'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'_onLeavePictureInPicture'])
Z([3,'_onTvpLoadedmetadata'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpProgress'])
Z([3,'__onTvpRenderError'])
Z([3,'_onTvpSeekComplete'])
Z([3,'__onTvpTimeupdate'])
Z([3,'__onTvpWaiting'])
Z([3,'player_video'])
Z([[2,'!'],[[2,'==='],[[7],[3,'controls']],[1,false]]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'direction']],[[2,'-'],[1,1]]],[1,90],[[7],[3,'direction']]])
Z([[7],[3,'enableAutoRotation']])
Z([[7],[3,'enableDanmu']])
Z([[7],[3,'enablePlayGesture']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,false],[[7],[3,'enableProgressGesture']]])
Z([[7],[3,'playerid']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,0],[[7],[3,'initialTime']]])
Z([[7],[3,'loop']])
Z([[7],[3,'muted']])
Z([[7],[3,'objectFit']])
Z([[4],[[5]]])
Z([[7],[3,'playBtnPosition']])
Z([[2,'?:'],[[7],[3,'usePoster']],[[2,'||'],[[7],[3,'poster']],[[2,'?:'],[[7],[3,'formattedVid']],[[2,'+'],[[2,'+'],[1,'http://shp.qpic.cn/qqvideo/0/'],[[7],[3,'formattedVid']]],[1,'/0']],[1,'']]],[1,'']])
Z([[2,'||'],[[7],[3,'posterForCrawler']],[[2,'?:'],[[7],[3,'formattedVid']],[[2,'+'],[[2,'+'],[1,'http://shp.qpic.cn/qqvideo/0/'],[[7],[3,'formattedVid']]],[1,'/0']],[1,'']]])
Z([[7],[3,'showCastingButton']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showFullscreenBtn']])
Z([[7],[3,'showMuteBtn']])
Z([[7],[3,'showPlayBtn']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'showProgress']]])
Z([[7],[3,'showScreenLockButton']])
Z([[7],[3,'tvpUrl']])
Z([[7],[3,'title']])
Z([[2,'||'],[[7],[3,'pageGesture']],[[7],[3,'vslideGesture']]])
Z([[7],[3,'vslideGestureInFullscreen']])
Z([[7],[3,'renderError']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isQB']]],[[7],[3,'tvpIsAd']]],[[2,'!'],[[7],[3,'tvpVideoError']]]],[[2,'>'],[[7],[3,'progressSkipTime']],[[2,'-'],[1,1]]]])
Z([a,[3,'mod_skipad '],[[2,'?:'],[[2,'&&'],[[7],[3,'showCastingButton']],[[7],[3,'isSupportCasting']]],[1,'mod_skipad_with_casting'],[1,'']]])
Z([[2,'!'],[[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]]])
Z(z[50])
Z([[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]])
Z(z[48])
Z([a,z[49][1],z[49][2]])
Z(z[50])
Z(z[50])
Z(z[52])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'fullscreen']]],[[2,'||'],[[7],[3,'rateToastShow']],[[7],[3,'HDToastShow']]]])
Z([3,'toast-area'])
Z([[2,'&&'],[[7],[3,'rateToastShow']],[[2,'!'],[[7],[3,'HDToastShow']]]])
Z([[2,'&&'],[[7],[3,'HDToastShow']],[[2,'!'],[[7],[3,'rateToastShow']]]])
Z([[2,'!'],[[7],[3,'isSupportControlsToggle']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'fullscreen']]],[[2,'!'],[[7],[3,'isHideFullscreenBtn']]]])
Z([a,[3,'player_control_tab '],[[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'showHDSelector']]],[[2,'!'],[[7],[3,'showRateSelector']]]],[1,''],[1,'hidden']],[3,'  '],[[2,'?:'],[[2,'!'],[[7],[3,'isIpx']]],[1,''],[1,'x']],[3,'   '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'isIpx']],[[7],[3,'showCastingButton']]],[[7],[3,'isSupportCasting']]],[1,'x_with_casting'],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[7],[3,'showCastingButton']],[[7],[3,'isSupportCasting']]],[1,'player_control_tab_with_casting'],[1,'']]])
Z([[6],[[7],[3,'extraParam']],[3,'enablePlayRateChange']])
Z([[2,'!'],[[2,'!'],[[7],[3,'formats_selected']]]])
Z(z[63])
Z([a,z[64][1],[[2,'?:'],[[7],[3,'isControlsShow']],[1,''],[1,'hidden']],z[64][3],z[64][4],z[64][5],z[64][6],z[64][7],z[64][8]])
Z(z[65])
Z(z[66])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[2,'||'],[[7],[3,'showHDSelector']],[[7],[3,'showRateSelector']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showHDSelector']]],[[7],[3,'formats']]],[[6],[[7],[3,'formats']],[3,'length']]])
Z([3,'__onTvpCloseHD'])
Z([3,'player_control_buttons'])
Z([3,'item'])
Z([[7],[3,'formats']])
Z([3,'name'])
Z([3,'selectHD'])
Z([a,[3,'player_control_sub_item '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'player_control_item_current'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'cname_short']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([3,'player'])
Z([[6],[[7],[3,'item']],[3,'resolution']])
Z([[6],[[7],[3,'item']],[3,'selected']])
Z([[2,'&&'],[[7],[3,'showVipHD']],[[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'lmt']],[1,1]],[[2,'==='],[[6],[[7],[3,'item']],[3,'lmt']],[1,3]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showRateSelector']]],[[7],[3,'playrates']]],[[6],[[7],[3,'playrates']],[3,'length']]])
Z([[7],[3,'isUsePlayerErrorTips']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
}
__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b=z;
__WXML_GLOBAL__.ops_init.$gwx_wxa75efa648b60994b=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./component/live/live.wxml','./component/video/video.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_1()
var oB=_mz(z,'video',['autoplay',0,'bindcontrolstoggle',1,'bindended',1,'bindenterpictureinpicture',2,'binderror',3,'bindfullscreenchange',4,'bindleavepictureinpicture',5,'bindpause',6,'bindplay',7,'bindtimeupdate',8,'bindwaiting',9,'class',10,'controls',11,'danmuBtn',12,'danmuList',13,'enableAutoRotation',14,'enableDanmu',15,'hidden',16,'id',17,'muted',18,'pictureInPictureMode',19,'poster',20,'showCenterPlayBtn',21,'showScreenLockButton',22,'src',23,'title',24],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,26,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,27,e,s,gg)){oD.wxVkey=1
var cF=_v()
_(oD,cF)
if(_oz(z,28,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,29,e,s,gg)){fE.wxVkey=1
}
var hG=_n('slot')
_(oB,hG)
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_2()
var cI=_mz(z,'video',['adUnitId',0,'autoPauseIfNavigate',1,'autoPauseIfOpenNative',1,'autoplay',2,'bindcontrolstoggle',3,'bindended',4,'bindenterpictureinpicture',5,'binderror',6,'bindfullscreenchange',7,'bindleavepictureinpicture',8,'bindloadedmetadata',9,'bindpause',10,'bindplay',11,'bindprogress',12,'bindrendererror',13,'bindseekcomplete',14,'bindtimeupdate',15,'bindwaiting',16,'class',17,'controls',18,'danmuBtn',19,'danmuList',20,'direction',21,'enableAutoRotation',22,'enableDanmu',23,'enablePlayGesture',24,'enableProgressGesture',25,'id',26,'initialTime',27,'loop',28,'muted',29,'objectFit',30,'pictureInPictureMode',31,'playBtnPosition',32,'poster',33,'posterForCrawler',34,'showCastingButton',35,'showCenterPlayBtn',36,'showFullscreenBtn',37,'showMuteBtn',38,'showPlayBtn',39,'showProgress',40,'showScreenLockButton',41,'src',42,'title',43,'vslideGesture',44,'vslideGestureInFullscreen',45],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,47,e,s,gg)){oJ.wxVkey=1
var xQ=_v()
_(oJ,xQ)
if(_oz(z,48,e,s,gg)){xQ.wxVkey=1
var oR=_n('cover-view')
_rz(z,oR,'class',49,e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,50,e,s,gg)){fS.wxVkey=1
}
var cT=_v()
_(oR,cT)
if(_oz(z,51,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(oR,hU)
if(_oz(z,52,e,s,gg)){hU.wxVkey=1
}
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
_(xQ,oR)
}
xQ.wxXCkey=1
}
else{oJ.wxVkey=2
var oV=_v()
_(oJ,oV)
if(_oz(z,53,e,s,gg)){oV.wxVkey=1
var cW=_n('view')
_rz(z,cW,'class',54,e,s,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,55,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(cW,lY)
if(_oz(z,56,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(cW,aZ)
if(_oz(z,57,e,s,gg)){aZ.wxVkey=1
}
oX.wxXCkey=1
lY.wxXCkey=1
aZ.wxXCkey=1
_(oV,cW)
}
oV.wxXCkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,58,e,s,gg)){lK.wxVkey=1
var t1=_n('view')
_rz(z,t1,'class',59,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,60,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(t1,b3)
if(_oz(z,61,e,s,gg)){b3.wxVkey=1
}
e2.wxXCkey=1
b3.wxXCkey=1
_(lK,t1)
}
var aL=_v()
_(cI,aL)
if(_oz(z,62,e,s,gg)){aL.wxVkey=1
var o4=_v()
_(aL,o4)
if(_oz(z,63,e,s,gg)){o4.wxVkey=1
var x5=_n('view')
_rz(z,x5,'class',64,e,s,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,65,e,s,gg)){o6.wxVkey=1
}
var f7=_v()
_(x5,f7)
if(_oz(z,66,e,s,gg)){f7.wxVkey=1
}
o6.wxXCkey=1
f7.wxXCkey=1
_(o4,x5)
}
o4.wxXCkey=1
}
else{aL.wxVkey=2
var c8=_v()
_(aL,c8)
if(_oz(z,67,e,s,gg)){c8.wxVkey=1
var h9=_n('view')
_rz(z,h9,'class',68,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,69,e,s,gg)){o0.wxVkey=1
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,70,e,s,gg)){cAB.wxVkey=1
}
o0.wxXCkey=1
cAB.wxXCkey=1
_(c8,h9)
}
c8.wxXCkey=1
}
var tM=_v()
_(cI,tM)
if(_oz(z,71,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(cI,eN)
if(_oz(z,72,e,s,gg)){eN.wxVkey=1
var oBB=_mz(z,'view',['bindtap',73,'class',1],[],e,s,gg)
var lCB=_v()
_(oBB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_mz(z,'view',['bindtap',78,'class',1,'data-cname',2,'data-fname',3,'data-pos',4,'data-resolution',5,'data-selected',6],[],eFB,tEB,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,85,eFB,tEB,gg)){oJB.wxVkey=1
}
oJB.wxXCkey=1
_(bGB,xIB)
return bGB
}
lCB.wxXCkey=2
_2z(z,76,aDB,e,s,gg,lCB,'item','index','name')
_(eN,oBB)
}
var bO=_v()
_(cI,bO)
if(_oz(z,86,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(cI,oP)
if(_oz(z,87,e,s,gg)){oP.wxVkey=1
}
var fKB=_n('slot')
_(cI,fKB)
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
_(r,cI)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
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

				global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxml'] = [$gwx_wxa75efa648b60994b, './component/live/live.wxml' ];else global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxml'] = $gwx_wxa75efa648b60994b( './component/live/live.wxml' );
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxml'] = [$gwx_wxa75efa648b60994b, './component/video/video.wxml' ];else global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxml'] = $gwx_wxa75efa648b60994b( './component/video/video.wxml' );
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.json'] = {"publicComponents":{"video":"component/video/video","live":"component/live/live"},"main":"component/txv-context.js"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.wxml'] = [$gwx_wxa75efa648b60994b, './plugin.wxml' ];else global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.wxml'] = $gwx_wxa75efa648b60994b( './plugin.wxml' );
	
				define("component/live/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../src/util/base64text");module.exports={tvpUrl:e,tvpIsAd:!1,tvpState:"",tvpVideoError:"",title:"",liveEndInfo:"",liveStatus:"",liveStartTime:"",getDataError:"",errCode:"",isBefore:!1,isAfter:!1,isHiddenContainer:!1,isHiddenVideo:!1,isHiddenWithVoice:!1,muted:!1,isIpx:!1}; 
 			}); 
		define("component/live/properties.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={pid:{type:String,value:"",observer:"onVideoChange"},sid:{type:String,value:"",observer:"onVideoChange"},playerid:{type:String,value:""},autoplay:{type:Boolean,value:!1},width:{type:String,value:""},height:{type:String,value:""},muted:{type:Boolean,value:!1,observer:"onMuteChange"},isHiddenStop:{type:Boolean,value:!1},isNeedMutex:{type:Boolean,value:!0},enableDanmu:{type:Boolean,value:!1},danmuBtn:{type:Boolean,value:!1},danmuList:{type:Array,value:[]},poster:{type:String,value:""},showCenterPlayBtn:{type:Boolean,value:!1},beforeText:{type:String,value:"直播未开始"},afterText:{type:String,value:"直播已结束"},isStopPoll:{type:Boolean,value:!1},extraParam:{type:Object,value:{}},title:{type:String,value:""},pictureInPictureMode:{type:Array,value:[]},enableAutoRotation:{type:Boolean,value:!1},showScreenLockButton:{type:Boolean,value:!1}}; 
 			}); 
		define("component/txv-context.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../src/module/log"),t=require("../src/module/reporter/index"),r=require("../src/lib/request"),n={},o="",i=Object.create({report:{on:function(e){"report"==e&&(t.off("report"),t.on.apply(t,arguments))},release:t.release,saveState:t.saveState,restoreState:t.restoreState,checkState:t.checkState},setRequest:function(e){r.busRequest=e}});module.exports=Object.assign(i,{getTxvContext:function(e){if(!n[e])throw new Error("找不到playerid为"+e+"的txv-video组件");return n[e]},existTxvContext:function(e){return!!n[e]},txvAttached:function(t,r){n[t]&&e("警告，playerid已存在",t),n[t]=r},txvDetached:function(e){delete n[e]},getAllContext:function(){return n},getLastPlayId:function(){return o},setLastPlayId:function(e){o=e},setTvpPlayState:function(t,r){try{this.getTxvContext(t).isPlaying=r}catch(t){e("playerid do not exists",t)}},openLog:function(){e.isOpenLog=!0},closeLog:function(){e.isOpenLog=!1}}); 
 			}); 
		define("component/video/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r=require("../../src/util/index");module.exports={progressBaseTime:0,progressSkipTime:0,progressTime:0,progressDuration:0,tvpUrl:"",tvpIsAd:!1,tvpState:"",tvpVideoError:"",reportUrl:"",isHiddenContainer:!1,isHiddenVideo:!1,renderError:!1,fullscreen:!1,showHDSelector:!1,showBrightSelector:!1,showRateSelector:!1,playrates:[.5,.8,1,1.25,1.5,2],currentRate:1,currentDefn:"",isSupportControlsToggle:r.isHigherVersion("2.9.5"),isSupportCasting:r.isHigherVersion("2.10.2"),isControlsShow:!0,isIpx:!1,rateToastShow:!1,HDToastShow:!1}; 
 			}); 
		define("component/video/properties.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={vid:{type:String,value:"",observer:"onVideoChange"},playerid:{type:String,value:"",observer:"onPlayeridChange"},adCloseText:{type:String,value:"关闭广告"},adJumpText:{type:String,value:"后可关闭"},autoplay:{type:Boolean,value:!1},objectFit:{type:String,value:"contain"},poster:{type:String,value:""},showProgress:{type:Boolean,value:!0},controls:{type:Boolean,value:!0},initialTime:{type:Number,value:0},showFullscreenBtn:{type:Boolean,value:!0},showPlayBtn:{type:Boolean,value:!0},showCenterPlayBtn:{type:Boolean,value:!0},enableProgressGesture:{type:Boolean,value:!0},vslideGesture:{type:Boolean,value:!1},pageGesture:{type:Boolean,value:!1},muted:{type:Boolean,value:!1},loop:{type:Boolean,value:!1},direction:{type:Number,value:-1},width:{type:String,value:""},height:{type:String,value:""},usePoster:{type:Boolean,value:!0},isHiddenStop:{type:Boolean,value:!1},isNeedMutex:{type:Boolean,value:!0},enableDanmu:{type:Boolean,value:!1},danmuBtn:{type:Boolean,value:!1},danmuList:{type:Array,value:[]},videoInfo:{type:Object,value:{}},defn:{type:String,value:""},extraParam:{type:Object,value:{}},title:{type:String,value:""},vslideGestureInFullscreen:{type:Boolean,value:!0},autoPauseIfNavigate:{type:Boolean,value:!0},autoPauseIfOpenNative:{type:Boolean,value:!0},enablePlayGesture:{type:Boolean,value:!1},showMuteBtn:{type:Boolean,value:!1},playBtnPosition:{type:String,value:"bottom"},isHideQB:{type:Boolean,value:!0},isHideFullscreenBtn:{type:Boolean,value:!1},isUsePlayerErrorTips:{type:Boolean,value:!0},showCastingButton:{type:Boolean,value:!1},posterForCrawler:{type:String,value:""},adUnitId:{type:String,value:""},pictureInPictureMode:{type:Array,value:[]},enableAutoRotation:{type:Boolean,value:!1},showScreenLockButton:{type:Boolean,value:!1},showVipHD:{type:Boolean,value:!1}}; 
 			}); 
		define("conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={version:"1.4.4"}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./src/video");module.exports=e; 
 			}); 
		define("lib-inject.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="./src/lib/es6-promise",r="./src/lib/request";try{var s=require("../tvp.js");e=s.Promise||e,r=s.request||r}catch(e){}module.exports={Promise:require(e),request:require(r).get,post:require(r).post}; 
 			}); 
		define("private-setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t={};module.exports={set:function(e,r){return t[e]=r,this},get:function(e){return t[e]}}; 
 			}); 
		define("src/classes/Content.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),n=require("../lib/message"),o=1;module.exports=function(){function r(e){var i=this;t(this,r),this.mockUpdate=0,this._urlIndex=0,Object.defineProperties(this,{_iretcode:{value:e.iretcode},_url:{value:e.url instanceof Array?e.url:[e.url]},_id:{value:o++},_duration:{value:e.duration},_filesize:{value:e.filesize},_charged:{value:e.charged},_preview:{value:e.preview},isad:{value:e.isad}}),(new n).assign(this);var u=null,a=null;this.on("play",function(){u=setTimeout(function(){i.emit("timeout",1e4)},1e4),a=setTimeout(function(){i.emit("timeout",2e4)},2e4)},!0),this.on("start",function(){clearTimeout(u),clearTimeout(a)},!0)}return i(r,[{key:"url",get:function(){return this._url[this._urlIndex]}},{key:"id",get:function(){return this._id}},{key:"duration",get:function(){return this._duration}},{key:"filesize",get:function(){return this._filesize}},{key:"preview",get:function(){return this._preview}},{key:"charged",get:function(){return this._charged}},{key:"iretcode",get:function(){return this._iretcode}}]),i(r,[{key:"onContentEnd",value:function(){this.emit("end")}},{key:"onContentPlay",value:function(){this.emittedPlay=!0,this.emit("play")}},{key:"onContentPause",value:function(){this.emit("pause")}},{key:"onContentTimeupdate",value:function(t){this.emittedPlay&&(t&&t.target&&(t=t.detail.currentTime),!this.emittedStart&&((void 0===t?"undefined":e(t))===e(void 0)?this.mockUpdate++>5:t>0)&&(this.emit("start",t||this.mockUpdate),this.emittedStart=!0),this.emit.apply(this,["timeupdate",t]))}},{key:"onContentError",value:function(){if(this._url.length>this._urlIndex+1)return this._urlIndex++,void this.emit("change",this.url);this.emit.apply(this,["error"].concat([].slice.call(arguments,0)))}},{key:"onContentSkip",value:function(){this.isad&&this.emit("skip")}},{key:"onContentSeeked",value:function(t){this.emit.apply(this,["seeked",t])}},{key:"onContentWaiting",value:function(){this.emit("waiting")}}]),r}(); 
 			}); 
		define("src/classes/Controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){var e={};return(t instanceof Array?t:[].slice.call(arguments,0)).forEach(function(t){var n=t.initialize;Object.defineProperty(e,t.name,{get:function(){return n},set:function(e){var r=n;n=e,t.onChange&&t.onChange(e,r)}})}),e}var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=require("../lib/message"),i=require("../../lib-inject").Promise,o=require("../module/log")("base-controller");module.exports=function(){function a(){for(var n=this,o=arguments.length,s=Array(o),c=0;c<o;c++)s[c]=arguments[c];t(this,a),this.started=i.defer(),(new r).assign(this);var u=this.model=new e([{name:"state",onChange:function(t,e){n.emit("statechange",t,e)},initialize:"loading"},{name:"currentContent",initialize:null}]);Object.defineProperties(this,{currentContent:{get:function(){return u.currentContent}},state:{get:function(){return u.state}}}),this.flow=this.createFlow.apply(this,s),this.flow.catch(function(t){n.emit("error",t)}),["End","Play","Pause","Timeupdate","Error","Skip","Waiting","Seeked"].forEach(function(t){n["onContent"+t]=function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];n.emit.apply(n,["content"+t.toLowerCase()].concat(r))},n["on"+t]=function(){console.warn("不建议再使用video.on"+t+"，请使用onContent"+t),this["onContent"+t].apply(this,arguments)}})}return n(a,[{key:"createFlow",value:function(){}},{key:"start",value:function(){return o("tvp process start"),this.started.resolve(),this}},{key:"stop",value:function(){return this.started.reject(),this.flow&&this.flow.stop&&this.flow.stop(),this.off(),this}}]),a}(); 
 			}); 
		define("src/classes/State.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(){}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=require("../lib/message"),s=require("../../lib-inject").Promise;module.exports=function(){function a(n,s){e(this,a),this.destroyed=!1;var i=Object.keys(n);i.forEach(function(e){!(n[e].to instanceof Array)&&(n[e].to=[]),!("function"==typeof n[e].beforeLeave)&&(n[e].beforeLeave=t),!("function"==typeof n[e].beforeEnter)&&(n[e].beforeEnter=t),!("function"==typeof n[e].afterLeave)&&(n[e].afterLeave=t),!("function"==typeof n[e].afterEnter)&&(n[e].afterEnter=t)}),this.message=new r,this.states=n,this._state=i[0],this._laststate="",Object.defineProperties(this,{state:{get:function(){return this._state}},lastState:{get:function(){return this._laststate}}})}return n(a,null,[{key:"create",value:function(e,t){return new a(e,t)}}]),n(a,[{key:"setState",value:function(e,t){var n=(t=t||{}).force||!1,r=t.silent||!1,s=this.states;if(n||~s[this._state].to.indexOf(e)){var a=this._state;if(r)this._laststate=this._state,this._state=e;else{var i=!1;if(n||(i=!1===s[a].beforeLeave(e),i=!1===s[e].beforeEnter(a)||!0===i),i)return;this._laststate=this._state,this._state=e,this.message.emit("change",e,a),s[a].afterLeave(e),s[e].afterEnter(a)}return 0==s[e].to.length&&(this.message.emit("end",e),this.message.off()),this}}},{key:"getStatePromise",value:function(e){var t=this;if("function"!=typeof e){var n=e;e=function(e){return e==n}}return new s(function(n,r){var s=t.message.on("change",function(t){e(t)&&(s(),n())});t.message.on("end",function(e){s(),r(new Error("state ended:"+e))},!0)})}},{key:"onChange",value:function(e){return this.message.on("change",e),this}}]),a}(); 
 			}); 
		define("src/controller-live/flow-getinfo/err-code.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={4444:"网络错误",3333:"播放出错"};module.exports={PLAY_ERROR:1,errCode:e,genCode:function(e,r){return"63"+(1==r?104:200)+"."+e},genError:function(r){var n=new Error(r.msg||e[r.em]),o=1==r.scene;return n.code=o?"P.0":"G."+r.em,n.em=r.em,n.fullecode=this.genCode(r.em,o?0:1),n}}; 
 			}); 
		define("src/controller-live/flow-getinfo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../util/platform-config").APP_PLATFORM,r=require("../../../lib-inject").request,t=require("../../lib/algorithm/qvsec"),i=require("../../module/network"),n=require("../../lib/algorithm/fillTimeStamp"),o=require("../../../lib-inject").Promise,u=require("../../module/log")("live-info"),c=require("./err-code"),f=require("../../module/guid");module.exports=function(l,d,m,q){function a(r){return"https://info.zb.video.qq.com/?host=qq.com&cmd=2&qq=0&guid="+f+"&appVer=7&stream=2&ip=&system=1&sdtfrom="+e[m]+"&livepid="+d+"&cnlid="+l+"&_rnd="+v+"&"+h+"&newnettype="+r.networkCode+(q?"&defn="+q+"&fntick="+r.fntick:"")}function s(){return w=a({fntick:Date.now(),networkCode:p}),b=Date.now(),r(w,{needlogin:!0})}var v=n(),g=t["v4138"==m?"$xxzb":"$xxzbf"](e[m],l,1,1,v),h="";g&&(h="encver="+("v4138"==m?"201":"301")+"&_qv_rmtv2="+g);var p=0,w=void 0,b=void 0;return new o(function(e){i(function(r){p=r,e()})}).then(s).catch(function(e){return u("first request error",e),s()}).catch(function(){throw c.genError({em:4444})}).then(function(e){return u("getinfo result:",e),e.loadTime=Date.now()-b,e})}; 
 			}); 
		define("src/controller-live/flow-getinfo/live-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(d){return e("https://accessv6.video.qq.com.video.qq.com/tinyapp/live_detail?vappid=49109510&vsecret=c1202d7f3ba41f86cdd2d3d1082605b4ed764c21e29520f3&pid="+d)}; 
 			}); 
		define("src/controller-live/flow-getinfo/live-poll.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){return e("https://zbaccess.video.qq.com/fcgi/live_poll?vappid=31678259&vsecret=1e029a67beb2d7e7e7bb8321fb161a46fe76c7837beb2cee",{data:t})}; 
 			}); 
		define("src/controller-live/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)},i=require("./flow-getinfo/index"),a=require("../classes/Controller"),u=require("../classes/Content"),c=require("./reporter"),f=require("../lib/message"),l=require("../lib/es6-promise"),s=require("../module/gen-guid"),p=require("./flow-getinfo/err-code"),d=require("../util/platform-config").APP_PLATFORM,m=function(m){function v(){return e(this,v),t(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return n(v,a),o(v,[{key:"createFlow",value:function(e,t){var n=this,o=e.sid,r=e.from,a=e.pid,m=(e.defn,t.getReportParam);var v=null,y=!1,h=void 0,w=s(),g=new c;g.setInitData({seq:0,firstreport:1,playno:w,platform:d[r],sid:o,pid:a,getReportParam:m});var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=Date.now();return i(o,a,r,e.defn||"").then(function(e){v&&v.off(),v=new u({url:e.data.playurl,iretcode:e.data.iretcode}),n.emit("contentchange",{currentContent:v,getinforaw:e}),t.isSwitchDefn&&h&&h.emit("videoend",{switch:o}),h&&h.off(),h=new f;var r={url:v.url,iretcode:v.iretcode};t.isSwitchDefn&&(r.switch=o),g.initPlay(h,r,e.data),g.report({firstload:Date.now()-c,geturltime:e.loadTime,cmd:205})}).then(function(){return new l(function(e,t){!y&&v.on("start",function(){h.emit("videoplaying",v),y=!0},!0),v.on("start",function(e){h.emit("videostart",e)}),v.on("play",function(){h.emit("videoplay",v)}),v.on("pause",function(){h.emit("videopause",v)}),v.on("timeupdate",function(e){h.emit("videotimeupdate",e)}),v.on("error",function(e){var n=p.genError({msg:e?e.detail&&e.detail.errMsg||e.message:"",em:3333,scene:p.PLAY_ERROR});t(n)},!0),v.on("end",function(){e(),h.emit("videoend")},!0),v.on("timeout",function(e){h.emit("videotimeout",e)}),v.on("waiting",function(){h.emit("videowaiting")})})}).catch(function(e){g.error(e),n.emit("error",e)})},O=b();return["End","Play","Pause","Timeupdate","Error","Skip","Waiting"].forEach(function(e){n.on("content"+e.toLowerCase(),function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];v&&v["onContent"+e].apply(v,o)})}),this.switchDefn=function(e){b({defn:e},{isSwitchDefn:!0})},O}},{key:"stop",value:function(){r(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"stop",this).call(this),this.playflow&&this.playflow.stop()}}]),v}();module.exports=function(e,t){return new m(e,t)}; 
 			}); 
		define("src/controller-live/reporter-play.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,r){var t=e.sid||r.sid||0,i={lookback:f,guid:o,fplayerver:s,BossId:l,Pwd:a,prog:+t,livepid:+(e.pid||0),viewid:t.slice(0,-2),_dc:Math.random(),devtype:v,playertype:m},n=void 0;return g.forEach(function(o){n=r[o]||e[o],i[o]="number"==typeof n?n:n||""}),i}var r=require("../module/reporter/report-queue"),o=require("../module/guid"),t=require("../module/system-info")(),i=require("../module/network"),n=require("../module/log")("txv-live-reporter-play"),c=require("../module/account"),u=require("../../conf"),p=c.getAccountInfoSync(),s=p&&p.plugin&&p.plugin.version||u.version,d=t.system.match(/ios/i),l=7433,a=1230624807,f=0,m=0,y={"6g":6,"5g":5,"4g":4,"3g":3,"2g":2,wifi:1,"有线":100,0:0},v=0;switch(t.platform){case"devtools":v=d?3:2;break;case"android":v=2;break;case"ios":v=3;break;case"ipad":v=4}var g=["playno","hc_qq","sdtfrom","firstload","blocktime","block","prd","errcode","dsip","durl","firstreport","sUrl","sRef","seq","cmd","fullecode","live_type","geturltime","playtime","ispay","isuserpay","switch","freetype","https","cdn","vip_type","hc_pvid","login_type","open_id"];module.exports=function(o,t){t(function(t,c){!t&&c||(c={}),n("before",o);var u=e(o,c);(c.networkCode?function(e){e&&e(y[c.networkCode])}:i)(function(e){Object.assign(u,{nettype:e}),n("report obj",u),r.push({reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(u).map(function(e){return e in u?e+"="+encodeURIComponent(u[e]):""}).filter(function(e){return e}).join("&")})},y)})}; 
 			}); 
		define("src/controller-live/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){if(!t)return{};var a=t.durl=t.url||t.durl||"",r=n.queryParse(a),o=a.match(/\/\/([^/]+?)\//),l=/^https:/.test(a),u="0.0.0.0";o&&o[1]&&(u=(o[1]||"").split(":")[0]);var m={dsip:u,sdtfrom:r.sdtfrom,cdn:s[r.cdn]||0,https:l?1:0,live_type:e(i),playtime:i.playtime,ispay:i.ispay,isuserpay:i.isuserpay,errcode:i.iretcode};return Object.assign(m,t)}function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i="";return i+=1==t.stream?"0":"1",i+=1==t.vcode?"10":"01",i+=1==t.live360?"1":"0",i+=2==t.acode?"1":"0",parseInt(i,2)}var a=function(){function t(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(i,e,a){return e&&t(i.prototype,e),a&&t(i,a),i}}(),r=require("./reporter-play"),n=require("../lib/url"),o=require("../module/log")("txv-live-reporter"),s={zijian:1,lanxun:2,wangsu:3,dilian:4,akama:5,tongxin:6},l=function(){function e(){t(this,e),this.baseParam=null,this.initParam=null,this.getReportParam=null,this.firstreport=0,this.lastStartTime=0,this.waitingCount=0,this.waitingTotalDuration=0,this.lastTimeUpdate=0,this.waitingStartTimeStamp=0}return a(e,[{key:"initBaseData",value:function(t){o("initBaseData~~~~~~~~~"),this.lastStartTime=t||0,this.waitingCount=0,this.waitingTotalDuration=0,this.waitingStartTimeStamp=0,this.lastTimeUpdate=0}},{key:"initPlay",value:function(t,e,a){var r=this;r.baseParam=i(e,a),t.on("videoplaying",function(t){o("videoplaying~~~~")}),t.on("videostart",function(t){o("START~~~~~~~~~~~",t),r.initBaseData(t)}),t.on("videoplay",function(t){o("playing~~~~~~~~~~~",r.waitingStartTimeStamp),r.waitingStartTimeStamp&&(r.waitingTotalDuration+=Date.now()-r.waitingStartTimeStamp,r.waitingStartTimeStamp=0)}),t.on("videopause",function(){}),t.on("videotimeupdate",function(t){r.lastTimeUpdate=t,t-r.lastStartTime>=60&&(o("timeupdate~~~~~~~~~",r.lastStartTime,t),r.report({cmd:263,prd:Math.floor(6e4),block:r.waitingCount,blocktime:r.waitingTotalDuration}),r.initBaseData(t))}),t.on("videotimeout",function(t){}),t.on("videoend",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o("ended~~~~~~",r.lastTimeUpdate-r.lastStartTime),r.report(Object.assign({cmd:263,prd:Math.floor(1e3*(r.lastTimeUpdate-r.lastStartTime)),block:r.waitingCount,blocktime:r.waitingTotalDuration},t)),r.initBaseData()}),t.on("videowaiting",function(){r.waitingStartTimeStamp||(r.waitingStartTimeStamp=Date.now()),o("WAITING~~~~~~~~~~~",r.waitingStartTimeStamp),++r.waitingCount})}},{key:"report",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this;t.firstreport=i.firstreport,i.firstreport&&(i.firstreport=0),r(Object.assign({},i.initParam,i.baseParam,t),i.getReportParam),i.initParam.seq++}},{key:"error",value:function(t){this.report({cmd:150,errcode:t.em,fullecode:t.fullecode})}},{key:"setfirstreport",value:function(t){this.firstreport=t}},{key:"setAsyncFn",value:function(t){this.getReportParam=t}},{key:"setInitData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setfirstreport(t.firstreport),this.setAsyncFn(t.getReportParam),delete t.firstreport,delete t.getReportParam,this.initParam=t,this.initParam.seq=t.seq||0}}]),e}();module.exports=l; 
 			}); 
		define("src/controller-video/flow-getinfo/data/ad.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function r(r){a(r,{header:{Cookie:"appuser="+K+"; Lturn="+y}}).then(function(r){l("上报成功"),l(r)},function(e){l("上报失败"),l(e),r=r+"&appuesr="+K,q.emit("report",{reportUrl:r}),l("用message抛出上报事件")})}function e(){y=n.get("Lturn"),l("Lturn:"+y),y?l("Lturn+1:"+(y+=1)):(y=Math.floor(1e3*Math.random()),l("create Lturn:"+y)),y>999&&(y=0),n.set("Lturn",y,72e5)}function t(r){var e=[];return r.item.forEach(function(r,t){e.push(r)}),e}function i(r){l("开始检查trueview贴片状态");for(var e=r.length,t=[],i=0,p=0;p<e;p++)r[p].trueviewTurn=!1,1==r[p].order_id||"FT"==r[p].type?t[p]=0:(o(r[p])&&(r[p].trueviewTurn=!0),t[p]=1,i+=1);D=1==i,l("trueviewCheckArr内容是："+t+",trueviewCount值是："+i)}function o(r){if(l("开始检查trueview开关"),r.params&&void 0!=r.params&&""!=r.params){var e=r.params;if(-1!=e.indexOf("richdata=")){var t=e.substr(e.indexOf("richdata=")+9);-1!=t.indexOf("&")&&(t=t.substr(0,t.indexOf("&"))),t=decodeURIComponent(t.replace(/\+/g," ")),l("转换出来的richdata参数是："+t);try{var i=JSON.parse(t);if(l("转换成json后的对象是："+i),i.plugins&&void 0!=i.plugins&&i.plugins.trueview&&void 0!=i.plugins.trueview&&"Y"==i.plugins.trueview)return l("trueview开关是打开的Y！"),!0}catch(r){l("richdata解析出错！")}}}return!1}function p(r){L=0;for(var e=0;e<r.length;e++)1!=r[e].order_id&&(L+=r[e].duration/1e3);l("广告总时长为："+L)}var a=require("../../../../lib-inject").request,d=require("../../../lib/message"),n=require("../../../module/cache"),l=require("../../../module/log")("ad"),u=require("./adReport"),s=require("./md5"),h=require("../../../../private-setting"),c="",v=0,m="",U=0,f=-1,g=1,D=void 0,w=-1,L=0,T="",O="",S=void 0,y=void 0,K=void 0,R=void 0,q=new d;(module.exports=function(o){l(o),o.vid&&(c=o.vid),o.live&&(v=o.live),o.chid&&(U=o.chid),o.coverid&&(m=o.coverid),o.pu&&(f=o.pu),o.openid&&(O=o.openid),K=String(s(O).substr(0,16)).toUpperCase(),e();var d={};return S=(new Date).getTime(),a("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live="+v+"&pu="+f+"&rfid="+T+"&openid="+O+"&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid="+U+"&st=0&resp_type=json&_t=1478361546359&rfid=&vid="+c+"&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&"+(1===h.get("adstyle")?"style=1":"")+"&coverid="+m,{needlogin:!0,header:{Cookie:"appuser="+K+"; Lturn="+y}}).then(function(r){R=r,r.data.adLoc&&r.data.adLoc.tpid&&(g=r.data.adLoc.tpid),d={t:"0",url:"",vid:c,coverid:m,pf:"H5",vptag:"",pid:"",chid:U,tpid:g};var e=(new Date).getTime()-S;l("livew请求完成，进行dp3上报,时间为:"+e),u.reportDp3(2,"WL",e,1,100,0,O,d),S=(new Date).getTime();var o=t(r.data.adList);return l("最终adList:"+o),i(o),p(o),o},function(r){l("livew error，再试一次");var e=(new Date).getTime()-S;return l("livew请求失败，进行dp3上报,时间为:"+e),u.reportDp3(2,"WL",e,1,202,0,O,d),S=(new Date).getTime(),a("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live="+v+"&pu="+f+"&rfid="+T+"&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid="+U+"&openid="+O+"&st=0&resp_type=json&_t=1478361546359&rfid=&vid="+c+"&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&coverid="+m,{needlogin:!0,header:{Cookie:"appuser="+K+"; Lturn="+y}}).then(function(r){R=r,r.data.adLoc&&r.data.adLoc.tpid&&(g=r.data.adLoc.tpid),d={t:"0",url:"",vid:c,coverid:m,pf:"H5",vptag:"",pid:"",chid:U,tpid:g};var e=(new Date).getTime()-S;l("livew重试请求完成，进行dp3上报,时间为:"+e),u.reportDp3(2,"WL",e,1,100,0,O,d),S=(new Date).getTime();var o=t(r.data.adList);return l("最终adList:"+o),i(o),p(o),o},function(r){var e=(new Date).getTime()-S;return l("livew error，订单获取失败，返回空数组，进行dp3上报,时间为:"+e),u.reportDp3(2,"WL",e,1,202,0,O,d),S=(new Date).getTime(),[]})}).then(function(e){return e=e.map(function(e,t){return function(){var t=[];if(e.reportUrlOther.reportitem)for(o=0;o<e.reportUrlOther.reportitem.length;o++)t[o]={url:e.reportUrlOther.reportitem[o].url,time:e.reportUrlOther.reportitem[o].reporttime,isReported:!1};var i=[];if(e.reportUrlSDK.reportitem)for(var o=0;o<e.reportUrlSDK.reportitem.length;o++)i[o]={url:e.reportUrlSDK.reportitem[o].url,time:e.reportUrlSDK.reportitem[o].reporttime,isReported:!1};return l("当前广告的trueview开关是否打开："+e.trueviewTurn),l("当前广告是否符合trueview条件："+D),D?(l("allAdDuration:"+L),w=L<=5?0:5):w=-1,l("skipable:"+w),{oid:e.order_id,url:e.image[0].url,reportUrl:{url:e.reportUrl,time:e.ReportTime,isReported:!1},reportUrlOther:t,reportUrlSDK:i,skipable:w,duration:e.duration/1e3,allDuration:L,onSkip:function(){l("当前广告被跳过了，上报智慧点10237"),u.reportWisdomPoint(10237,e.order_id,e.order_id,"");var r=(new Date).getTime()-S;l("当前广告被跳过，进行dp3上报,时间为:"+r),u.reportDp3(4,"WL",r,1,"",0,O,d),S=(new Date).getTime()},onTimeupdate:function(r){},onEnd:function(){var r=(new Date).getTime()-S;l("当前广告播放结束，进行dp3上报,时间为:"+r),u.reportDp3(5,"WL",r,1,"",0,O,d),S=(new Date).getTime(),R.data.adLoc&&R.data.adLoc.rfid&&(T=R.data.adLoc.rfid,l("rfid赋值成功："+T))},onStart:function(){l("当前广告开始播放"+e),l("当前广告的oid是："+this.oid);var t=(new Date).getTime()-S;if(l("素材加载完成，开始播放，进行dp3上报,时间为:"+t),u.reportDp3(3,"WL",t,1,"",0,O,d),S=(new Date).getTime(),this.reportUrl.url=u.updateUrlParam(this.reportUrl.url,d),this.reportUrl.time>=0&&!this.reportUrl.isReported){this.reportUrl.isReported=!0;try{r(this.reportUrl.url)}catch(r){}}for(i=0;i<this.reportUrlOther.length;i++)if(this.reportUrlOther[i].url=u.updateUrlParam(this.reportUrlOther[i].url,d),this.reportUrlOther[i].time>=0&&!this.reportUrlOther[i].isReported){this.reportUrlOther[i].isReported=!0;try{u.pingUrl(this.reportUrlOther[i].url)}catch(r){}}for(var i=0;i<this.reportUrlSDK.length;i++)if(this.reportUrlSDK[i].url=u.updateUrlParam(this.reportUrlSDK[i].url,d),this.reportUrlSDK[i].time>=0&&!this.reportUrlSDK[i].isReported){this.reportUrlSDK[i].isReported=!0;try{u.pingUrl(this.reportUrlSDK[i].url)}catch(r){}}},onError:function(){var r=(new Date).getTime()-S;l("当前广告播放出错，进行dp3上报,时间为:"+r),u.reportDp3(4,"WL",r,1,"",0,O,d),S=(new Date).getTime()},onReportEmpty:function(){l("我是空单上报，当前广告的上报地址是："+this.reportUrl.url),this.reportUrl.url=u.updateUrlParam(this.reportUrl.url,d);try{r(this.reportUrl.url)}catch(r){}for(e=0;e<this.reportUrlOther.length;e++)if(this.reportUrlOther[e].url=u.updateUrlParam(this.reportUrlOther[e].url,d),this.reportUrlOther[e].time>=0&&!this.reportUrlOther[e].isReported){this.reportUrlOther[e].isReported=!0;try{u.pingUrl(this.reportUrlOther[e].url)}catch(r){}}for(var e=0;e<this.reportUrlSDK.length;e++)if(this.reportUrlSDK[e].url=u.updateUrlParam(this.reportUrlSDK[e].url,d),this.reportUrlSDK[e].time>=0&&!this.reportUrlSDK[e].isReported){this.reportUrlSDK[e].isReported=!0;try{u.pingUrl(this.reportUrlSDK[e].url)}catch(r){}}}}}}),{adList:e}}).catch(function(r){return{}})}).reporter=u.reporter; 
 			}); 
		define("src/controller-video/flow-getinfo/data/adReport.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function r(r){var t=r.indexOf("?"),e=new Object,i=r;if(t>=0)for(var o=(i=i.substr(t+1)).split("&"),n=void 0,a=0;a<o.length;a++)(n=o[a].split("=")).length>1?e[n[0]]=n[1]:e[n[0]]="null";return e}var t=require("../../../lib/message"),e=(require("../../../module/cache"),require("../../../module/log")("ad-report")),i=new t;(module.exports={updateUrlParam:function(t,e){try{var i=r(t),o=t,n=!0;if(-1!=t.indexOf("?")){o=t.substring(0,t.indexOf("?"));var a=void 0;for(a in e)i[a]=e[a];for(a in i)n?(n=!1,o+="?"+a+"="+i[a]):o+="&"+a+"="+i[a]}}catch(r){o=""}return o},reportDp3:function(r,t,i,o,n,a,d,p){e("开始dp3上报");var s="https://dp3.qq.com/stdlog/?bid=weixin&step="+r+"&merged="+o+"&errorcode="+n+"&trycount="+a+"&openid="+d;s=this.updateUrlParam(s,p);try{this.pingUrl(s)}catch(r){e("dp3上报失败")}},reportWisdomPoint:function(r,t,i,o){e("开始智慧点上报");var n="https://t.l.qq.com?t=s&actid="+r;n+="&oid="+t+"&mid="+i+"&locid="+o;try{this.pingUrl(n)}catch(r){}},pingUrl:function(r,t,o,n){e("ping上报地址："+r);var a=(new Date).getTime();r=this.updateUrlParam(r,{reportTime:a}),i.emit("report",{reportUrl:r}),e("用message抛出上报事件")}}).reporter=i; 
 			}); 
		define("src/controller-video/flow-getinfo/data/getinfo-status.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={};e[10001]=e[50]=e[68]=e[71]=e[73]=e[74]=e[76]=e[77]=e[445]=e[444]="啊哦，没能找到你要的节目信息~",e[51]=e[52]=e[64]=e[61]=e[62]=e[63]=e[65]=e[66]=e[81]=e[82]=e[84]=e[86]="啊哦，本来在这儿的视频不见了~",e[69]="小程序暂不支持该视频播放，请使用腾讯视频手机版观看~",e[94]="您的账号存在异常，请前往腾讯视频APP观看。",e[80]=e[83]="啊哦，版权原因，该视频暂时无法播放~",module.exports=e; 
 			}); 
		define("src/controller-video/flow-getinfo/data/getinfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e){var u=e.vid,h=e.from,g=e.defn,w=e.hooks,b=e.videoInfo,q=(e.cappid,e.vsappkey,e.env),G=e.qimei36;if(b&&b.vl&&b.fl)return f.resolve(b);var k="test"===q?"https://testvv.video.qq.com/getvinfo":"https://h5vv6.video.qq.com/getvinfo";m=h,g=g||"auto";var I=k,A=p;d=""+(new Date).getTime()/1e3,i("ckey param: ",u,d,s,l,a[m],G);var j=wx.getckey(u,d,s,l,a[m],G||""),x="?encryptVer="+v+"&cKey="+j+"&_rnd="+d+"&appVer="+s;i("getinfo waiting");var S=0,P="";return f.resolve().then(function(){return w.onBeforeGetinfo(u)}).then(function(e){P="object"===(void 0===e?"undefined":t(e))?e:{},(P=Object.keys(P).map(function(e,t){return-1!=["auth_from","auth_ext","defnpayver","spvideo","spaudio","fhdswitch"].indexOf(e)?e+"="+P[e]:""}).filter(function(e){return e}).join("&"))&&(P="&"+P),i("getinfo beforeGetinfoParam",P)}).then(function(){return new f(function(e,t){o(function(t){S=t,e()})})}).then(function(){i("request start");var e=""+I+x+"&"+y+"&clip=4&defn="+g+"&platform="+a[m]+"&otype=json&sdtfrom="+m+"&"+(c?"dtype=3&":"")+"vid="+u+"&newnettype="+S+P+"&from=miniapp";return n(e,{needlogin:!0,needLoginCase:!0})}).catch(function(e){return n(""+A+x+"&defn="+g+"&"+y+"&clip=4&platform="+a[m]+"&otype=json&sdtfrom="+m+"&"+(c?"dtype=3&":"")+"vid="+u+"&newnettype="+S+P+"&from=miniapp",{needlogin:!0,needLoginCase:!0})}).catch(function(){var e=new Error(r[444]);throw e.em=444,e.code="G.444",e=w.onAfterGetInfo&&w.onAfterGetInfo(e)||e}).then(function(e){return e=e.data,i("getinfo result:",e),console.log("getinfo result:",e),e})}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=require("./getinfo-status"),n=require("../../../../lib-inject").request,o=require("../../../module/network"),i=require("../../../module/log")("getinfo"),f=require("../../../../lib-inject").Promise,u=require("../../../../conf"),l=require("../../../module/guid");require("../../../lib/algorithm/ckey8x");var c="devtools"!=wx.getSystemInfoSync().platform,a=require("../../../util/platform-config").APP_PLATFORM,p="https://bkvv.video.qq.com/getvinfo",s=u.version,v="8.4",m=void 0,d=void 0,y="spclipurl=1";module.exports=function(){var t={};try{t=arguments&&arguments[0]&&arguments[0].hooks}catch(e){}return e.apply(this,arguments).then(function(e){if(e.em){var n=new Error(r[e.em]||e.msg);throw n.em=e.em,n.code="G."+e.em,n=t.onAfterGetInfo&&t.onAfterGetInfo(n)||n}return e}).then(function(e){var r=e.vl.vi[0],n=e.fl.fi.filter(function(e){return+e.sl})[0];if(8===r.st&&0===e.preview){var o=new Error("");throw o.em="555",o.code="GL.555",o=t.onAfterGetInfo&&t.onAfterGetInfo(o)||o}var i={duration:+r.td,dltype:e.dltype,fmname:n.name,fmid:n.id,filesize:n.fs,preview:e.preview,charge:r.ch,raw:e};if(r.ch<1&&(i.preview=e.preview,i.charged=r.ch),3==e.dltype)i.url=r.ul.ui.map(function(e){return""+e.url+(e.hls.pt||"")+"?platform="+a[m]+"&sdtfrom="+m}),i.url=i.url.filter(function(e){return e});else{var f="&br="+r.br+"&fmt=auto&level="+r.level+"&platform="+a[m]+"&sdtfrom="+m;1===e.dltype&&"o"===e.s&&r.cl&&0!==r.cl.fc&&8!==r.st?i.url=r.ul.ui.map(function(e){var t=r.fn,n=t.lastIndexOf("."),o=t.substr(n),i=t.substr(0,n)+"."+r.fclip+o;return e.url+i+"?cKey="+r.fvkey+f}):i.url=r.ul.ui.map(function(e){return e.url+r.fn+"?vkey="+r.fvkey+f})}return i=t.onAfterGetInfo&&t.onAfterGetInfo(null,i)||i})}; 
 			}); 
		define("src/controller-video/flow-getinfo/data/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(t){function o(n,t){var o=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(o>>16)<<16|65535&o}function r(n,t){return n<<t|n>>>32-t}function e(n,t,e,u,i,f){return o(r(o(o(t,n),o(u,f)),i),e)}function u(n,t,o,r,u,i,f){return e(t&o|~t&r,n,t,u,i,f)}function i(n,t,o,r,u,i,f){return e(t&r|o&~r,n,t,u,i,f)}function f(n,t,o,r,u,i,f){return e(t^o^r,n,t,u,i,f)}function c(n,t,o,r,u,i,f){return e(o^(t|~r),n,t,u,i,f)}function d(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var r=void 0,e=void 0,d=void 0,v=void 0,l=void 0,a=1732584193,h=-271733879,m=-1732584194,y=271733878;for(r=0;r<n.length;r+=16)e=a,d=h,v=m,l=y,h=c(h=c(h=c(h=c(h=f(h=f(h=f(h=f(h=i(h=i(h=i(h=i(h=u(h=u(h=u(h=u(h,m=u(m,y=u(y,a=u(a,h,m,y,n[r],7,-680876936),h,m,n[r+1],12,-389564586),a,h,n[r+2],17,606105819),y,a,n[r+3],22,-1044525330),m=u(m,y=u(y,a=u(a,h,m,y,n[r+4],7,-176418897),h,m,n[r+5],12,1200080426),a,h,n[r+6],17,-1473231341),y,a,n[r+7],22,-45705983),m=u(m,y=u(y,a=u(a,h,m,y,n[r+8],7,1770035416),h,m,n[r+9],12,-1958414417),a,h,n[r+10],17,-42063),y,a,n[r+11],22,-1990404162),m=u(m,y=u(y,a=u(a,h,m,y,n[r+12],7,1804603682),h,m,n[r+13],12,-40341101),a,h,n[r+14],17,-1502002290),y,a,n[r+15],22,1236535329),m=i(m,y=i(y,a=i(a,h,m,y,n[r+1],5,-165796510),h,m,n[r+6],9,-1069501632),a,h,n[r+11],14,643717713),y,a,n[r],20,-373897302),m=i(m,y=i(y,a=i(a,h,m,y,n[r+5],5,-701558691),h,m,n[r+10],9,38016083),a,h,n[r+15],14,-660478335),y,a,n[r+4],20,-405537848),m=i(m,y=i(y,a=i(a,h,m,y,n[r+9],5,568446438),h,m,n[r+14],9,-1019803690),a,h,n[r+3],14,-187363961),y,a,n[r+8],20,1163531501),m=i(m,y=i(y,a=i(a,h,m,y,n[r+13],5,-1444681467),h,m,n[r+2],9,-51403784),a,h,n[r+7],14,1735328473),y,a,n[r+12],20,-1926607734),m=f(m,y=f(y,a=f(a,h,m,y,n[r+5],4,-378558),h,m,n[r+8],11,-2022574463),a,h,n[r+11],16,1839030562),y,a,n[r+14],23,-35309556),m=f(m,y=f(y,a=f(a,h,m,y,n[r+1],4,-1530992060),h,m,n[r+4],11,1272893353),a,h,n[r+7],16,-155497632),y,a,n[r+10],23,-1094730640),m=f(m,y=f(y,a=f(a,h,m,y,n[r+13],4,681279174),h,m,n[r],11,-358537222),a,h,n[r+3],16,-722521979),y,a,n[r+6],23,76029189),m=f(m,y=f(y,a=f(a,h,m,y,n[r+9],4,-640364487),h,m,n[r+12],11,-421815835),a,h,n[r+15],16,530742520),y,a,n[r+2],23,-995338651),m=c(m,y=c(y,a=c(a,h,m,y,n[r],6,-198630844),h,m,n[r+7],10,1126891415),a,h,n[r+14],15,-1416354905),y,a,n[r+5],21,-57434055),m=c(m,y=c(y,a=c(a,h,m,y,n[r+12],6,1700485571),h,m,n[r+3],10,-1894986606),a,h,n[r+10],15,-1051523),y,a,n[r+1],21,-2054922799),m=c(m,y=c(y,a=c(a,h,m,y,n[r+8],6,1873313359),h,m,n[r+15],10,-30611744),a,h,n[r+6],15,-1560198380),y,a,n[r+13],21,1309151649),m=c(m,y=c(y,a=c(a,h,m,y,n[r+4],6,-145523070),h,m,n[r+11],10,-1120210379),a,h,n[r+2],15,718787259),y,a,n[r+9],21,-343485551),a=o(a,e),h=o(h,d),m=o(m,v),y=o(y,l);return[a,h,m,y]}function v(n){var t=void 0,o="",r=32*n.length;for(t=0;t<r;t+=8)o+=String.fromCharCode(n[t>>5]>>>t%32&255);return o}function l(n){var t=void 0,o=[];for(o[(n.length>>2)-1]=void 0,t=0;t<o.length;t+=1)o[t]=0;var r=8*n.length;for(t=0;t<r;t+=8)o[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return o}function a(n){return v(d(l(n),8*n.length))}function h(n,t){var o=void 0,r=l(n),e=[],u=[],i=void 0;for(e[15]=u[15]=void 0,r.length>16&&(r=d(r,8*n.length)),o=0;o<16;o+=1)e[o]=909522486^r[o],u[o]=1549556828^r[o];return i=d(e.concat(l(t)),512+8*t.length),v(d(u.concat(i),640))}function m(n){var t="",o=void 0,r=void 0;for(r=0;r<n.length;r+=1)o=n.charCodeAt(r),t+="0123456789abcdef".charAt(o>>>4&15)+"0123456789abcdef".charAt(15&o);return t}function y(n){return unescape(encodeURIComponent(n))}function p(n){return a(y(n))}function g(n){return m(p(n))}function b(n,t){return h(y(n),y(t))}function s(n,t){return m(b(n,t))}function S(n,t,o){return t?o?b(t,n):s(t,n):o?p(n):g(n)}"function"==typeof define&&define.amd?define(function(){return S}):"object"===("undefined"==typeof module?"undefined":n(module))&&module.exports?module.exports=S:t.md5=S}(void 0); 
 			}); 
		define("src/controller-video/flow-getinfo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e){e=e||"";var i=d.test(e);if(i)return i;var n="";return e.replace(f,function(e,i){n=i}),/qq\.com/.test(n)}var i=function(e){return e&&e.__esModule?e:{default:e}}(require("../../dataset/ad-text")),n=require("../../../lib-inject").Promise,o=require("./data/ad"),r=require("./data/getinfo"),t=require("../../module/account"),d=/\/\/[^/]*?qq\.com/,f=/\/\/[^/]+?\/([^/]+?)\//;module.exports=function(d,f){var u=d=d||{},a=u.vid,v=u.cid,c=u.from,s=u.openid,l=u.defn,p=u.videoInfo,q=void 0===p?{}:p,m=u.chid,h=u.cappid,k=u.env,y=u.qimei36;(f=f||{}).onBeforeGetinfo="function"==typeof f.onBeforeGetinfo?f.onBeforeGetinfo:function(){};[a,c,l].join("/");var I=t.isInner(),x=t.canUse(),B=x&&I,G=d.vsappkey||"";if(q.hasOwnProperty("url")&&(B||!x&&e(q.url))){var g=q.vecDefn;return g&&g.length&&(q.fmid=g.filter(function(e){return e.selected})[0].id),n.resolve({videoinfo:q,ad:{}})}if((B||!x)&&q.vl&&q.fl)return r({vid:a,from:c,defn:l,hooks:f,videoInfo:q,cappid:h,vsappkey:G,env:k,qimei36:y}).then(function(e){return{videoinfo:e,ad:{}}});var j=1===d.scene&&(B||!x&&d.qwer);return n.all([j?n.resolve({}):o({coverid:v,vid:a,live:0,chid:m||41,pu:1,openid:s||""}),r({vid:a,from:c,defn:l,hooks:f,videoInfo:q,cappid:h,vsappkey:G,env:k,qimei36:y}),(0,i.default)()]).then(function(e){return{ad:e[0],videoinfo:e[1],adText:e[2]}})}; 
 			}); 
		define("src/controller-video/flow-play/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n=require("../../../lib-inject").Promise,e=require("../../lib/message"),t=require("../../classes/Content"),i=require("../../module/log")("flow-getinfo");module.exports=function(o,r,u){var a={time:0,duration:0,skipable:!1},d={},c={},f=[],s=n.defer(),l=s.promise,m=new e,p=null,v=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t={currentContent:n=n||p,preloadContents:f.filter(function(e){return!c[e.id]&&e!=n}),extra:e,getinforaw:g.raw};n&&n.isad&&(t.progress=a),p=n,u(t)},h=o.ad,g=o.videoinfo,w=!1;(h.adList||[]).forEach(function(e){var o=e(),r=new t({url:o.url,duration:o.duration,isad:!0}),u=new n(function(n){w||(r.on("end",function(){n(),m.emit("adended"),o.onEnd()},!0),r.on("error",function(){n(),o.onError()},!0),r.on("timeout",function(){n(),o.onError()},!0),r.on("skip",function(){w=!0,n(),o.onSkip()},!0),r.on("start",function(){m.emit("adplaying",r),o.onStart()},!0),r.on("timeupdate",function(n){o.onTimeupdate(n)},!0),r.on("timeupdate",function(n){m.emit("adtimeupdate",n)}),m.on("_terminate",function(){n()}))}).then(function(n){return c[r.id]=!0,n});d[r.id]=r,f.push(r),a.duration+=o.duration,a.skipable=o.skipable,l=l.then(function(){return i("playflow: ad."+o.url),"1"==o.oid?(i("这是一个空单，往下走"),void o.onReportEmpty()):(v(r),u.then(function(n){a.time+=r.duration}))})});var y=new t({url:g.url,duration:g.duration,filesize:g.filesize,isad:!1,preview:g.preview,charged:g.charged});d[y.id]=y,f.unshift(y);var k=new n(function(n,e){function t(t){!i&&t.on("start",function(){m.emit("videoplaying",t),i=!0},!0),t.on("start",function(){m.emit("videostart",t)}),t.on("play",function(){m.emit("videoplay",t)}),t.on("pause",function(){m.emit("videopause",t)}),t.on("timeupdate",function(n){m.emit("videotimeupdate",n,g.duration,t.isad)}),t.on("waiting",function(){m.emit("videowaiting",t)}),t.on("seeked",function(n){m.emit("videoseeked",t,n)}),t.on("error",function(n){var t=new Error(n?n.detail&&n.detail.errMsg||n.message:"播放出错");t.code="P.0",e(t)},!0),t.on("end",n,!0),t.on("timeout",function(n){m.emit("videotimeout",n)})}var i=!1;t(y),m.on("_terminate",function(){n()}),m.on("_changevideocontent",function(n){y.off(),c[y.id]=!0,f.every(function(e,t){return e!=y||(f.splice(t,1,n),!1)}),t(n),p==y?v(n):v(null,{isPlayingAd:!0}),d[n.id]=n,y=n})}).then(function(n){return c[y.id]=!0,n});l=l.then(function(){return y.off("change"),y.on("change",function(){v(y)}),m.on("_changevideocontent",function(n){y.off("change"),n.on("change",function(){v(n)})}),v(y),k}).then(function(){m.emit("end")}).catch(function(n){throw m.emit("error",n),n}),v(null);var E={currentContent:p,progress:l,stop:function(){return m.emit("_terminate"),m.emit("terminate"),Object.keys(d).forEach(function(n){d[n].off()}),m.off(),this},start:function(){return s.resolve(),l},on:function(){return m.on.apply(m,arguments)},switchVideo:function(n){var e=n.videoinfo;g=e;var i=new t({url:e.url,duration:e.duration,filesize:e.filesize,isad:!1,preview:e.preview,charged:e.charged});m.emit("_changevideocontent",i)}};return["End","Play","Pause","Timeupdate","Error","Skip","Waiting","Seeked"].forEach(function(n){r.on("content"+n.toLowerCase(),function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];var r=e&&d[e]?d[e]:p;r&&r["onContent"+n].apply(r,i)})}),E}; 
 			}); 
		define("src/controller-video/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},a=function(e){return e&&e.__esModule?e:{default:e}}(require("../lib/message")),u=require("../../lib-inject").Promise,c=require("./flow-getinfo/index"),f=require("./flow-play/index"),l=require("./reporter"),p=require("../module/reporter/index"),s=require("../classes/Controller"),d=require("../module/log")("controller-video-index");require("./flow-getinfo/data/ad").reporter.on("report",function(e){d("url",e),p.any(e)});var h=function(p){function d(){return e(this,d),t(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return r(d,s),n(d,[{key:"createFlow",value:function(e,t){var r=this;e=e||{},t=t||{};var n=e,i=n.vid,p=(n.from,n.cid),s=(n.defn,n.qwer,n.scene,n.videoInfo,n.cappid),d=(n.vsappkey,n.qimei36),h=t.getReportParam,y=new u(function(e){h?h(function(t,r){e(r&&r.hc_openid||"")}):e("")}),v=l({cid:p,vid:i,cappid:s,qimei36:d},{getReportParam:h});this.reporter=v;var w=this.model,b=y.then(function(r){return e.openid=r,c(e,t)}).then(function(e){w.state="ready",a.default.emit("adText",e.adText);var t=r.playflow=f(e,r,function(e){w.currentContent=e.currentContent,r.emit("contentchange",e)});return v.setVideoInfo(e.videoinfo),v.setPlayFlow(t),v.cgi(e),t.on("videotimeupdate",function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];r.emit.apply(r,["videotimeupdate"].concat(t))}),t.on("videostart",function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];r.emit.apply(r,["videostart"].concat(t))}),r.started.promise}).then(function(){return w.state="playing",r.playflow.start()}).then(function(e){w.state="ended"}).catch(function(e){throw w.state="error",r.playflow&&r.playflow.stop(),v.error(e),e});return this.switchDefn=function(n){var i=r.currDefn;return y.then(function(r){return c(o({},e,{openid:r,defn:n||i}),t)}).then(function(t){v.setVideoInfo(t&&t.videoinfo),v.cgi(e),r.playflow.switchVideo(t)})},b}},{key:"stop",value:function(){this.model.state="ended",i(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"stop",this).call(this),this.playflow&&this.playflow.stop()}},{key:"onShow",value:function(){this.reporter.onShow()}},{key:"onHide",value:function(){this.reporter.onHide()}},{key:"onSecondVideoChange",value:function(){this.reporter.detached()}},{key:"detached",value:function(){this.reporter.detached()}},{key:"reportRenderError",value:function(){this.reporter.reportRenderError()}}]),d}();module.exports=function(e,t){return new h(e,t)}; 
 			}); 
		define("src/controller-video/report-play.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=require("./../module/reporter/report-queue"),o=require("../../conf"),n=require("./../module/guid"),r=wx.getSystemInfoSync();module.exports=function(i){var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments[2],a=arguments[3];c(function(c,u){c&&(u={}),delete(u=u||{}).val1,delete u.val2,delete u.val3,"object"===e(u[i])&&(["val1","val2","val3"].forEach(function(e){u[e]=u[i][e]}),delete u[i]),(u.isReportNetwork?wx.getNetworkType:function(e){e&&e.success({})})({success:function(e){var c={BossId:4327,Pwd:944465292,p_version:o.version,platform:r.platform,client_model:r.model,client_version:r.version,network:e&&e.networkType?e.networkType:"",guid:n,step:i,page_url:u.pageName||"",page_query:u.pageQuery||"",page_ref:u.refName||""};["hc_vuserid","hc_openid","hc_main_login","hc_appid","ptag","iformat","duration","defn","tpay","adid","playtime","page_url","page_query","page_ref","cid","vid","isvip","val1","val2","val3","appname","nick","rmd","scene","additional","videourl","appid","ad_time","ad_pdtm_ms","source2","omgid","qimei36","insert_duration_time","pid","insert_flowid","experience_duration_ms","ctime","app_version","render_type","experiment_id"].forEach(function(e){e in p&&(c[e]=p[e]),e in u&&(c[e]=u[e]),void 0==c[e]&&(c[e]="")}),a&&"function"==typeof a?a(null,{reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(c).map(function(e){return e in c?e+"="+encodeURIComponent(c[e]):""}).filter(function(e){return e}).join("&")}):t.push({reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(c).map(function(e){return e in c?e+"="+encodeURIComponent(c[e]):""}).filter(function(e){return e}).join("&")})}})})}; 
 			}); 
		define("src/controller-video/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./report-play"),n=require("../module/reporter/index"),t=require("../util/index").Oncer,o=require("./timer"),i={3e4:2e4,12e4:3e4,12e5:6e4,99999999:3e5},r={btn:2e3,"mask-btn":2001},a=function(e){for(var n=e||32,t="",o=1;o<=n;o++)t+=Math.floor(16*Math.random()).toString(16);return t};module.exports=function(u,c){function l(e){return(e instanceof Array?e:[e||""]).join("+")}function v(){var e=Date.now(),n=D.getTime();return{iformat:h&&h.dltype?h.dltype:0,duration:h&&h.duration?Math.floor(h.duration):"",defn:h&&h.fmname?h.fmname:"",videourl:l(h&&h.url),playtime:n,tpay:h&&h.charge?h.charge:0,experience_duration_ms:h&&h.preview?1e3*h.preview:0,ad_time:1e3*g||0,ad_pdtm_ms:_||0,vid:d||"",cid:f||"",appid:p||"",pid:C,ctime:e,qimei36:m||"",render_type:b}}var d=u.vid,f=u.cid,p=u.cappid,m=u.qimei36,s=c.getReportParam||function(e){return e({})},h=null,g=0,_=0,w=0,y=0,C=a(32),T=!1,q=!1,k=0,x=new o(1e3),D=new o(1e3),b=0,M=!1,j=!1;e(3,v(),s);var A=t(function(n){var t=v();t.val1=0,t.val2=0,t.val3=n,t.videourl=n,e(7,t,s)}),O=function(n){var t=v();t.val1=1,t.val2=1,t.val3=1,e(4,t,s)},P=function(){D&&D.pause(),x&&x.pause()},R=t(function(n){var t=v();t.val1=x.getTime(),t.val2=M?0:1,t.val3=n,t.videourl=n,e(6,t,s)}),S=t(function(t,o){if(!T){T=!0,n.reportCache.del(C);var i=E(t,o);e(5,i,s),z(t,o),P()}}),E=function(e,n){var t=v();return t.val1=x.getTime(),t.val2={error:3,complete:1,incomplete:j?2:0,period:4}[e],void 0==t.val2&&(t.val2=-1),t.val3=n,t.insert_flowid=y,t},F=function(e,n){var t=v();return t.val1=x.getTime(),t.val2={error:3,complete:1,incomplete:j?2:0,period:4}[e],void 0==t.val2&&(t.val2=-1),t.val3=n,t.insert_flowid=y,t.insert_duration_time=t.playtime-w,t},H=null,I=t(function(t,o){n.reportCache.del("step30");var i=v();i.val1=t,i.val2=o,e(30,i,s)}),U=function(t,o){if(1e4==t){H=setTimeout(function(){I(t,o)},11e3);var i=v();i.val1=t,i.val2=o,e(30,i,s,function(e,t){n.reportCache.set("step30",t)})}else clearTimeout(H),I(t,o)},V=function(n){q=!1,k=0;var t=v();t.val1=n,e(31,t,s)},z=function(t,o){n.reportCache.del(C+"_8");var i=F(t,o);e(8,i,s)},B=function(n){var t=v();t.val1=n,e(60,t,s)},G=function(n){var t=v();t.val1=0,t.val2=0,t.val3=0,e(100,t,s)},J=function(){var t=E("incomplete","cache");e(5,t,s,function(e,t){n.reportCache.set(C,t)});var o=F("incomplete","cache");e(8,o,s,function(e,t){n.reportCache.set(C+"_8",t)})};return n.on("_save",function(){T||J()}),n.on("_restore",function(){n.reportCache.del(C),n.reportCache.del(C+"_8")}),{setPlayFlow:t(function(e){e.on("_changevideocontent",function(){G()}),D.on("tick",function(e){var n=e-w,t=Object.keys(i).find(function(n){return e<n});n>=i[t]&&(z("period"),w=e,y++,J())}),e.on("adplaying",function(e){M=!0,_=0,g=e.duration,A(e.url)}),e.on("videoplay",function(e){x.start(),D.start()}),e.on("videoplaying",function(e){j=!0,w=0,R(e.url),U(x.getTime(),0)}),e.on("videopause",function(){D.pause()}),e.on("videotimeout",function(e){U(e,1)}),e.on("terminate",function(){S("incomplete")}),e.on("end",function(){S("complete")}),e.on("error",function(e){S("error","1 "+(e.code||"")+" "+e.message)}),e.on("adtimeupdate",function(e){_=1e3*e}),e.on("adended",function(e){_=1e3*g}),e.on("videoseeked",function(e,n){0!==n&&B(k?Date.now()-k:0)}),e.on("videowaiting",function(e){q=!0,k=Date.now()}),e.on("videotimeupdate",function(e){q&&V(Date.now()-k)})}),setVideoInfo:function(e){h=e},error:function(e){O(),S("error","2 "+(e.code||"")+" "+e.message)},cgi:function(e){O()},onHide:function(){D&&D.pause(),x&&x.pause()},onShow:function(){D.getTime()&&x.start()},detached:function(){P()},reportRenderError:function(){b=1},reportUserAction:function(n){var t=n.src,o=n.module,i=n.action,a=n.data,u=void 0===a?null:a,c=r[t];if(c){var l=v();l.val1=o,l.val2=i,l.val3=u,e(c,l,s)}}}}; 
 			}); 
		define("src/controller-video/timer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t){(new i).assign(this),this.millisec=0,this.interval=t,this.handle=null}var i=require("../lib/message");t.prototype.start=function(){var t=this;this.handle||(this.handle=setInterval(function(){t.millisec+=t.interval,t.emit("tick",t.millisec)},this.interval))},t.prototype.getTime=function(){return this.millisec},t.prototype.setTime=function(t){this.millisec=t},t.prototype.pause=function(){clearInterval(this.handle),this.handle=null},module.exports=t; 
 			}); 
		define("src/dataset/ad-text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../lib-inject"),t=function(e){return e&&e.__esModule?e:{default:e}}(require("../lib/es6-promise")),a="";exports.default=function(){return a?t.default.resolve(a):(0,e.request)("https://wuji.video.qq.com/fcgi-bin/wuji?appid=1001781&appkey=fe7eb78d8f694f8b9de1c4be3a0802c6").then(function(e){var t=e&&e.data&&e.data.data&&e.data.data[0],r="";return t&&(r={adCloseText:t.adCloseText||"",adJumpText:t.adJumpText||""},a=r),r}).catch(function(e){return""})}; 
 			}); 
		define("src/lib/algorithm/ckey8x.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},w=function(){function w(C,c,A,L,N,D,z){var O=!L;C=+C,c=c||[0],L=L||[[this],[{}]];var g=[],B=null,Q=[function(){g.push([c[C++],L.length,c[C++]])},function(){L[L.length-2]=L[L.length-2]&L.pop()},function(){for(var s=c[C++],O=[],g=c[C++],B=c[C++],Q=[],x=0;x<g;x++)O[c[C++]]=L[c[C++]];for(x=0;x<B;x++)Q[x]=c[C++];L.push(function C(){var L=O.slice(0);L[0]=[this],L[1]=[arguments],L[2]=[C];for(var g=0;g<Q.length&&g<arguments.length;g++)0<Q[g]&&(L[Q[g]]=[arguments[g]]);return w(s,c,A,L,N,D,z)})},function(){L[L.length-2]=L[L.length-2]===L.pop()},function(){var s=L.pop();L.push(delete s[0][s[1]])},function(){throw L[L.length-1]},function(){var s=c[C++],w=s?L.slice(-s):[];L.length-=s;var A=L.pop();L.push(A[0][A[1]].apply(A[0],w))},function(){L[L.length-2]=L[L.length-2]instanceof L.pop()},function(){L[L.length-2]=L[L.length-2]==L.pop()},function(){L[L.length-2]=L[L.length-2]>>L.pop()},function(){var s=L[L.length-2];s[0][s[1]]=L[L.length-1]},function(){L.push(c[C++])},function(){var s=L[L.length-2],w=Object.getOwnPropertyDescriptor(s[0],s[1])||{configurable:!0,enumerable:!0};w.set=L[L.length-1],Object.defineProperty(s[0],s[1],w)},function(){L.push(~L.pop())},function(){L.push(L[L.length-1])},function(){L[L.length-2]=L[L.length-2]<L.pop()},function(){L[L.length-2]=L[L.length-2]-L.pop()},function(){g.pop()},function(){L[L[L.length-2][0]][0]=L[L.length-1]},function(){return!!B},function(){L[L.length-2]=L[L.length-2]/L.pop()},function(){return!0},function(){var s=c[C++];L[L.length-1]&&(C=s)},function(){var s=L.pop();L.push([L[L.pop()][0],s])},function(){L.push(void 0)},function(){L[L.length-2]=L[L.length-2]*L.pop()},function(){var s=L.pop(),w=L[L.length-1];w[0][w[1]]=s[0][s[1]]},function(){var s=L.pop(),w=L[L.length-1];L[w[0]][0]=L[s[0]][0]},function(){L[L[L.length-1][0]]=void 0===L[L[L.length-1][0]]?[]:L[L[L.length-1][0]]},function(){var s=[];for(var w in L.pop())s.push(w);L.push(s)},function(){L[L.length-1]=c[C++]},function(){var s=L.pop(),w=L[L.length-1];L[w[0]][0]=s[0][s[1]]},function(){L.push(s(L.pop()))},function(){L.push([L.pop(),L.pop()].reverse())},function(){L[L.length-2]=L[L.length-2]+L.pop()},function(){L.length-=c[C++]},function(){L[L.length-2]=L[L.length-2]^L.pop()},function(){L[L.length-2]=L[L.length-2]<<L.pop()},function(){L.length=c[C++]},function(){L[L.length-2]=L[L.length-2]in L.pop()},function(){L.push(!L.pop())},function(){L[L.length-2]=L[L.length-2]>L.pop()},function(){L[L.length-2]=L[L.length-2]|L.pop()},function(){var s=L.pop();L.push(s[0][s[1]])},function(){var s=c[C++],w=s?L.slice(-s):[];L.length-=s,L.push(L.pop().apply(A,w))},function(){B=null},function(){var s=c[C++],w=s?L.slice(-s):[];L.length-=s,w.unshift(null),L.push(new(Function.prototype.bind.apply(L.pop(),w)))},function(){var s=L[L.length-2],w=Object.getOwnPropertyDescriptor(s[0],s[1])||{configurable:!0,enumerable:!0};w.get=L[L.length-1],Object.defineProperty(s[0],s[1],w)},function(){L[L.length-1]+=String.fromCharCode(c[C++])},function(){L[L.length-2]=L[L.length-2]>=L.pop()},function(){var s=c[C++],w=L[L.length-2-s];L[L.length-2-s]=L.pop(),L.push(w)},function(){L[L.length-1].length?L.push(L[L.length-1].shift(),!0):L.push(void 0,!1)},function(){var s=L.pop(),w=L[L.length-1];w[0][w[1]]=L[s[0]][0]},function(){L[L.length-2]=L[L.length-2]<=L.pop()},function(){var s=c[C++],w=s?L.slice(-s):[];L.length-=s,w.unshift(null);var A=L.pop();L.push(new(Function.prototype.bind.apply(A[0][A[1]],w)))},function(){L.push([L.pop()])},function(){L.push([A,L.pop()])},function(){L.push(!0)},function(){L.push("")},function(){L.pop()},function(){var s=L.pop(),w=L.pop();L.push([w[0][w[1]],s])},function(){L.push(L[L.pop()[0]][0])},function(){},function(){L.push(null)},function(){C=c[C++]},function(){L[L.length-2]=L[L.length-2]%L.pop()},function(){L[L.length-2]=L[L.length-2]>>>L.pop()},function(){L.push(!1)}];for(0;;)try{for(var x=!1;!x;)x=Q[c[C++]]();if(B)throw B;return O?(L.pop(),L.slice(3+w.v)):L.pop()}catch(s){var e=g.pop();if(void 0===e)throw s;B=s,C=e[0],L.length=e[1],e[2]&&(L[e[2]][0]=B)}}function C(s,w,C){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(s,w,C);var c;if(null==s)throw new TypeError('"array" is null or not defined');var A=Object(s),L=A.length>>>0;if(0==L)return-1;var N=0|C;if(L<=N)return-1;for(c=Math.max(0<=N?N:L-Math.abs(N),0);c<L;c++)if(c in A&&A[c]===w)return c;return-1}return w.v=0,w(0,function(s){function w(){for(;O===D;)L.push(z),O++,D=A.shift(),z=A.shift()}for(var c=s[0],A=s[1],L=[],N=function(s){for(var w,c,A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(""),L=String(s).replace(/[=]+$/,""),N=0,D=0,z="";c=L.charAt(D++);~c&&(w=N%4?64*w+c:c,N++%4)&&(z+=String.fromCharCode(255&w>>(-2*N&6))))c=C(A,c);return z}(c),D=A.shift(),z=A.shift(),O=0,g=0;g<N.length;g++){var B=N.charAt(g).charCodeAt(0);w(),L.push(B),O++}return w(),L}(["JgMLAjccO0BBJgQLAjccOwsDNxw7CwsAOCsgCBYhQCk7CwA4CzwrFjQ7CwM3PSwAQD47CwA4CwM3PQYBOxgVAgkAAQNAJgsLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7Cwc3HDsLCDccOwsJNxw7Cwo3HDtAJgkLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7Cwc3HDsLCDccOwsENwsSOzsLBTcLAzcLFysSOzsLBjcLATgLCwM3CxcLAAsCBgIiBgESOzsLBzcLAhI7OwsHNz0LBTc9MSgW5DtAOwsINwsBOAsLAzcLFwsHNz0GASILAzcLFwsHNz0LASIGASIGARI7OwsENw49CwI4CzwLCDc9CwY3PSQGASISMgA7OwsHNw49CwIiEjIAOztA1QsENz0VGBULCjcCeQABAxI7OwsJNwsJNz0WO0AmDwsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBzccOwsINxw7Cwk3HDsLCjccOwsLNxw7Cww3HDsLDTccOwsONxw7QCYDCwI3HDsYFQsONwIAABI7OwsENwsDOCsuABI7OwsFNwsENwsXCwM4Ky4ACjIAOxI7OwsGNwsFNwsXCwM4Ky4ADgshQCYGCwI3HDsLAzccOwsENxw7CwU3CxcLADc9CjIAOzsLBDcLBTc9LgASOzsLAzc9FkA7CwQ3CxcLAzc9BgE7CwQ3CxcLBgEWOwsENwsXQCYECwI3HDsLAzcLFws8CzwLADc9CwE3PQYCOxgVAgEAAwQKMgA7OwsENwsXCzwLBDc9CjIAOwshCwA3PQoyADs7CwQ3PRUYFQIBAQUOAwo7Ow4LIUAmBAsCNxw7CwM3HDsLAzcLADcLFwYAEjs7CwM3CxcLPAsDNz0LATc9BgI7CwM3PRUYFQIAAAo7Ow4LIUAmAwsCNxw7GBUCAAAKOzsOCyFAJgULAjccOwsDNxw7CwQ3HDsLAzc9HTMWOztAOwsENzIAEjs7CwM3CxcLBDc9BgEWQDsLADcLBDc9FwsDNwsENz0XKwoyADs7QDtACwM3CxcLBgEWQDsLADcLFwsDNwsXKwoyADs7GBUCAAEDCjs7DgshQCYDCwI3HDsLADcLFws8CzwLADc9BgEVGBUCAAAKOzsKMgA7Ejs7Cwc3CwU3CxcLBjcLFwsDOCsuAA4LIUAmBQsCNxw7CwM3HDsLBDccOwsDNwsANwsXCwM3PRY7CwQ4Ky4ACjIAOxIyADs7CwA3Cxc/CwQ3PQgoFjsLBAsDNwsXKxlAOwsENz0KMgA7OxgVAgACAwQKOzsOCyFAJgULAjccOwsDNxw7CwM3PRY7CwQ3PQshCwA3PQYBFRgVAgEBBAkDCjs7DgshQCYICwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7CwQ3CwA3CxcrEjs7CwU3CwM3CxcrEjs7CwY3CwA3CxcrEjs7CwM3CwM3CxcrEjIAOzsLADcLFwYAOwsGNz0LBEEWOwsLBTcLFysxKBY7CwQ3CxcLPAsENz0LBTc9BgI7QDsLBzcLABIyADs7Cwc3PQsDNz0xKBY7QDsLBDcLBjc9Cwc3PSILAkIXCwU3Cwc3PQsCQhcrCjIAOzsLBzcOPQsEIhIyADs7QEA7Cwc3CwASOzsLBzc9CwM3PTEoFjtAOwsENwsGNz0LBzc9IgsCQhcOKwsFNwsHNz0LAkIXKwsYCwc3PQsEQQsIGRBCC/8BCxgLBjc9Cwc3PSILBEELCBkQJSoKMgA7OwsHNw49DjIBMgALASISOzsLADIAKjtACwA3CxcOKwsDNz0iCjIAOzsLADc9FRgVAgABAwo7Ow4LIUAmBgsCNxw7CwM3HDsLBDccOwsDNwsANwsXKxI7OwsENwsANwsXKxI7OwsDNwsENz0LAkIXDisLCyALBDc9CwRBCwgZECUBCjIAOzsLAzcLFwsFNwsXCwQ3PQsEFAYBCjIAOzsYFQIBAAUDCjs7DgshQCYFCwI3HDsLAzccOwsDNwsENwsXCzwLADc9BgESOzsLAzcLFwsANwsXCzwLAAYBCjIAOzsLAzc9FRgVAgEABAYKOzsOCyFAJggLAjccOwsDNxw7CwQ3HDsLBTccOwsENwsEOCsuABI7OwsFNwsAEjs7CwU3PQsDNz0xKBY7QDsLBDcLFwsLBjcLFwYAGQsAKgYBOwsFNw49CwQiEjIAOztACwc3CxcLBDc9CwM3PTYCFRgVAgIBBgMHBwMKOzsGAQoyADsSOzsLCDcLBDcLFwsDOCsuAAoyADsSOzsLCTcLCDcLFwsDOCsuAA4LIUAmCAsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBzccOwsENwsDNwsXKxI7OwsDNwsDNwsXKxIyADs7CwU3CwQ4Ky4AEjs7CwY3CwASOzsLBjc9CwM3PTEoFjtAOwsHNwsENwsGNz0LAkIXKwsYCwY3PQsEQQsIGRBCC/8BEjs7CwU3CxcLBzc9CwRCCyELEAYBBgE7CwU3CxcLDwsHNz0BCyELEAYBBgE7CwY3Dj0OMgEyAAsBIhI7OwsAMgAqO0ALBTcLFwsGARUYFQIAAQMKOzsOCyFAJggLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7CwQ3CwM3CxcrEjs7CwU3CwQ4Ky4AEjs7CwY3CwASOzsLBjc9CwQ3PTEoFjtAOwsFNwsGNz0LA0IXDisLATgLAzcLFwsGNz0LAgYCCxAGAgsYCwY3PQsIQQsEGRAlKgoyADs7CwY3Dj0LAiISMgA7O0ALBzcLFwsFNz0LBDc9CwIUNgIVGBUCAQEHBwMKOzsKMgA7Ejs7Cwo3Cwg3CxcLAzgrLgAOCyFAJgcLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7CwQ3CwM3CxcrEjs7CwM3CwM3CxcrEjIAOzsLBTcLBDgrLgASOzsLBjcLABI7OwsGNz0LAzc9MSgWO0A7CwU3CxcLAjgLPAsENwsGNz0LAkIXKwsYCwY3PQsEQQsIGRBCC/8BBgEGATsLBjcOPQ4yATIACwEiEjs7CwAyACo7QAsFNwsXCwYBFRgVAgABAwo7Ow4LIUAmCAsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBDcLAzcLFysSOzsLBTcLBDgrLgASOzsLBjcLABI7OwsGNz0LBDc9MSgWO0A7CwU3CwY3PQsCQhcOKwv/CwM3CxcLBjc9BgEBCxgLBjc9CwRBCwgZECUqCjIAOzsLBjcOPQ4yATIACwEiEjs7CwAyACo7QAsHNwsXCwU3PQsENz02AhUYFQIBAQcHAwo7OwoyADsSOzsLCzcLCDcLFwsDOCsuAA4LIUAmBgsCNxw7CwM3HDsLAzccO0AtAAALBTgLBgEFEUALBDccOwAECwY4Cwc4CwU3CxcLAzc9BgEGAQYBERURExgVAgEBBQoDCjs7DgshQCYFCwI3HDsLAzccOwsENwsXCwg4Cwk4CwM3PQYBBgEGARUYFQIBAQQKAwo7OwoyADsSOzsLDDcLBTcLFwsGNwsXCwM4Ky4ADgshQCYECwI3HDsLADcLFwsDNwsXNgAKMgA7OwsANwsXCwAKMgA7OxgVAgEAAwcKOzsOCyFAJgULAjccOwsDNxw7CwsDNz0gCBZAOwsDNwsENwsXCwM3PQYBEjIAOzsLADcLFws8CwM3PQYBOwsANwsXDisLAzcLFysiCjIAOzsYFQIBAQQLAwo7Ow4LIUAmDAsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBzccOwsINxw7Cwg3HDsLBjccOwsJNxw7CwQ3CwA3CxcrEjs7CwU3CwQ3CxcrEjs7CwY3CwQ3CxcrEjs7Cwc3CwA3CxcrEjs7Cwg3CwY3PQsECwc3PRkUEjs7Cwg3CwM3PRY7Cwo3CxcLAAsINz0qCwA3CxcrEAsABgJAOwsKNwsXCwg3PQYBEjs7CwY3Cwo3CxcLBAsDNwsINz0LBzc9GRIyADsZCwY3PQYCEjs7CwM3PRY7QDsLCTcLABI7OwsJNz0LAzc9MSgWO0A7CwA3CxcLBTc9Cwk3PQYCOwsJNw49Cwc3PSISMgA7O0ALCTcLBTcLFwsACwM3PQYCEjIAOzsLBDcLFw4rCwY3PRAKMgA7OwsLNwsXCwk3PQsGNz02AhUYFQICAQoDCwcDCjs7DgshQCYFCwI3HDsLAzccOwsDNwsENwsXCzwLADc9BgESOzsLAzcLFwsANwsXCzwGAAoyADs7CwM3PRUYFQIBAAQGCjs7DgshCwAKOzsGAQoyADsSOzsLBTcLFwsMNwsXCwM4Ky4ADgshCwY3CxcGAAo7Ow4LIUAmBAsCNxw7CwM3HDsLADcLFwsANwsXCzwLAzc9BgEKMgA7OwsANwsXBgA7GBUCAAEDCjs7DgshQCYECwI3HDsLAzcLFws8CwA3PQYBOwsANwsXBgA7GBUCAQADDAo7Ow4LIUAmBAsCNxw7CwM3HDsLADcLFwsDNz0GATsLADcLFwYAOwsANz0VGBUCAAEDCjs7DgshQCYECwI3HDsLAzccOwsDNz0WQDsLADcLFwsDNz0GATsLADcLFwYAFRgVAgABAwo7Ow4LIQsQCjs7DgshQCYECwI3HDsLAzccO0AmBgsCNxw7CwM3HDsLBDccOwsFNwsXCwQ3PTYBCyELAzc9BgEVGBUCAQIFAwMEFRgVAgABAwo7Ow4LIUAmBQsCNxw7CwM3HDtAJgcLAjccOwsDNxw7CwQ3HDsLBTcLFws8CwY3PQsENz02AgshCwM3PQYBFRgVAgICBQQGAwMEFRgVAgEBBA0DCjs7BgEKMgA7OwsNNwsENwsXCwM4Ky4ACjIAOxI7OwsENz0VGBUCAAEDCwo4KywBEjs7CwM3Cwk3CxcLPCsSMgA7OwsJNwsXCzwLAzgrLgAOCyFAJgoLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7Cwc3HDsLCDccOwsJNxw7CwQ3CwM3CxcrEjs7CwU3CwM3CxcrEjs7CwY3CwA3CxcrEjs7CwM3CxcGADsLAzcLBDgrLgASMgA7OwsHNwsAEjs7Cwc3PQsFNz0xKBY7QDsLCDcLBDcLBzc9CwJCFysLGAsHNz0LBEELCBkQQgv/AQsQJQsENwsHNz0LASILAkIXKwsYCwc3PQsBIgsEQQsIGRBCC/8BCwglKgsENwsHNz0LAiILAkIXKwsYCwc3PQsCIgsEQQsIGRBCC/8BKhI7OwsJNwsAEjs7Cwk3PQsEMSgWQDsLBzc9CwsJNz0ZIgsFNz0xKBY7QDsLAzcLFwsGNwsXCwg3PQsGCwMLCTc9EBlCCz8BBgEGATsLCTcOPQ4yATIACwEiEjs7CwAyACo7QAsHNw49CwMiEjIAOztACwQ3CwY3CxcLQAYBEjIAOxY7QDsLAzcLFysLBEEWO0A7CwM3CxcLBDc9BgE7QAsDNwsXCwYBFRgVAgABAwo7Ow4LIUAmDAsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBzccOwsINxw7Cwk3HDsLCjccOwsENwsDNwsXKxI7OwsFNwsANwsXKxI7OwsINwsFNwsXC0AGARIyADsoFjsLAAsBEAsINwsDNwsXCwg3PQYBEjIAOwgoFkA7CwQ3Cwg3PRIyADs7Cwg3CwQ4Ky4AEjs7Cwk3CwASOzsLCjcLABI7OwsKNz0LBDc9MSgWO0A7Cwo3PQsEQRZAOwsGNwsFNwsXCwM3CxcLCjc9CwEQBgEGAQsKNz0LBEELAhklEjIAOzsLBzcLBTcLFwsDNwsXCwo3PQYBBgELBgsKNz0LBEELAhkQQhIyADs7Cwg3Cwk3PQsCQhcOKwsGNz0LBzc9KgsYCwk3PQsEQQsIGRAlKgoyADs7Cwk3Dj0OMgEyAAsBIhI7OwsAMgAqOwsKNw49DjIBMgALASISOzsLADIAKjtACws3CxcLCDc9Cwk3PQYCFRgVAgEBCwMDCjs7DgshCwo7OwoyADs7QCYPCwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7Cwg3HDsLCTccOwsKNxw7Cws3HDsLDDccOwsNNxw7QCYKCwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7Cwg3HDsLCTccOwsDNwsDNz0LBDc9CwU3PQELBDc9DQsGNz0BKiILBzc9IgsJNz0iEjIAOwsINz0lCwM3PQsgCwg3PRBCKgsENz0iFRgVCwo3AgAHAwQFBgcICRI7O0AmCgsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBzccOwsINxw7Cwk3HDsLAzcLAzc9CwQ3PQsGNz0BCwU3PQsGNz0NASoiCwc3PSILCTc9IhIyADsLCDc9JQsDNz0LIAsINz0QQioLBDc9IhUYFQsLNwIABwMEBQYHCAkSOztAJgoLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7Cwc3HDsLCDccOwsJNxw7CwM3CwM3PQsENz0LBTc9JAsGNz0kIgsHNz0iCwk3PSISMgA7Cwg3PSULAzc9CyALCDc9EEIqCwQ3PSIVGBULDDcCAAcDBAUGBwgJEjs7QCYKCwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7Cwg3HDsLCTccOwsDNwsDNz0LBTc9CwQ3PQsGNz0NKiQiCwc3PSILCTc9IhIyADsLCDc9JQsDNz0LIAsINz0QQioLBDc9IhUYFQsNNwIABwMEBQYHCAkSOzsLBDcLDjc9Ejs7CwU3Cwc3CwQ3CxcrEjIAOwshKxI7OwsGNwsHNwsXKxI7OwsHNwsENwsXKxI7OwsINwsEOCsuABI7OwsJNwsAEjs7Cwk3PQtAMSgWO0A7Cwg3Cwk3PRcLCwM3CxcLAzcLFwsJNz0LASIGAQYBGQsAKgoyADs7Cwk3Dj0OMgEyAAsBIhI7OwsAMgAqO0ALBzcLBzcLFwsGNwsXCwM4Ky4ADgshQCYECwI3HDsLADcLFwsDNwsXCwQ4Ky4ADgsAIQsKOzsOCwEhCwo7Ow4LAiELCjs7DgsDIQsKOzs2AQoyADs7GBUCAQADBQo7Ow4LIUAmHwsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBTccOwsHNxw7CwY3HDsLCDccOwsJNxw7Cwo3HDsLCzccOwsMNxw7Cw03HDsLDjccOwsPNxw7CxA3HDsLETccOwsSNxw7CxM3HDsLFDccOwsVNxw7CxY3HDsLFzccOwsYNxw7Cxk3HDsLFjccOwsXNxw7Cxg3HDsLGTccOwsWNxw7Cxc3HDsLGDccOwsZNxw7CxY3HDsLFzccOwsYNxw7CxY3HDsLFzccOwsYNxw7Cxk3HDsLFjccOwsXNxw7Cxg3HDsLGTccOwsWNxw7Cxc3HDsLGDccOwsZNxw7CxY3HDsLFzccOwsYNxw7CxY3HDsLFzccOwsYNxw7Cxk3HDsLFjccOwsXNxw7Cxg3HDsLGTccOwsWNxw7Cxc3HDsLGDccOwsZNxw7CxY3HDsLFzccOwsYNxw7CxY3HDsLFzccOwsYNxw7Cxk3HDsLFjccOwsXNxw7Cxg3HDsLGTccOwsWNxw7Cxc3HDsLGDccOwsZNxw7CxY3HDsLFzccOwsYNxw7Cxk3HDsLBTcLABI7OwsFNz0LEDEoFjtAOwsGNwsDNwsHNwsENz0LBTc9IhIyADsXKxI7OwsDNwsHNz0XCwsGNz0LCCULBjc9CxhCKgELCwY3PQsYJQsGNz0LCEIqASoKMgA7OwsFNw49DjIBMgALASISOzsLADIAKjtACwU3CwA3CxcLPCsSOzsLBzcLAzcLBDc9CwAiFysSOzsLBjcLAzcLBDc9CwEiFysSOzsLCDcLAzcLBDc9CwIiFysSOzsLCTcLAzcLBDc9CwMiFysSOzsLCjcLAzcLBDc9CwQiFysSOzsLCzcLAzcLBDc9CwUiFysSOzsLDDcLAzcLBDc9CwYiFysSOzsLDTcLAzcLBDc9CwciFysSOzsLDjcLAzcLBDc9CwgiFysSOzsLDzcLAzcLBDc9CwkiFysSOzsLEDcLAzcLBDc9CwoiFysSOzsLETcLAzcLBDc9CwsiFysSOzsLEjcLAzcLBDc9CwwiFysSOzsLEzcLAzcLBDc9Cw0iFysSOzsLFDcLAzcLBDc9Cw4iFysSOzsLFTcLAzcLBDc9Cw8iFysSOzsLFjcLGjc9CxY3CwU3CwAXKxIyADsLGTcLBTcLARcrEjIAOwsYNwsFNwsCFysSMgA7Cxc3CwU3CwMXKxIyADsLBzc9CwcLGzcLABcrLAcSOzsLFzcLGjc9Cxc3PQsWNz0LGTc9Cxg3PQsGNz0LDAsbNwsBFyssBxI7OwsYNwsaNz0LGDc9Cxc3PQsWNz0LGTc9Cwg3PQsRCxs3CwIXKywHEjs7Cxk3Cxo3PQsZNz0LGDc9Cxc3PQsWNz0LCTc9CxYLGzcLAxcrLAcSOzsLFjcLGjc9CxY3PQsZNz0LGDc9Cxc3PQsKNz0LBwsbNwsEFyssBxI7OwsXNwsaNz0LFzc9CxY3PQsZNz0LGDc9Cws3PQsMCxs3CwUXKywHEjs7Cxg3Cxo3PQsYNz0LFzc9CxY3PQsZNz0LDDc9CxELGzcLBhcrLAcSOzsLGTcLGjc9Cxk3PQsYNz0LFzc9CxY3PQsNNz0LFgsbNwsHFyssBxI7OwsWNwsaNz0LFjc9Cxk3PQsYNz0LFzc9Cw43PQsHCxs3CwgXKywHEjs7Cxc3Cxo3PQsXNz0LFjc9Cxk3PQsYNz0LDzc9CwwLGzcLCRcrLAcSOzsLGDcLGjc9Cxg3PQsXNz0LFjc9Cxk3PQsQNz0LEQsbNwsKFyssBxI7OwsZNwsaNz0LGTc9Cxg3PQsXNz0LFjc9CxE3PQsWCxs3CwsXKywHEjs7CxY3Cxo3PQsWNz0LGTc9Cxg3PQsXNz0LEjc9CwcLGzcLDBcrLAcSOzsLFzcLGjc9Cxc3PQsWNz0LGTc9Cxg3PQsTNz0LDAsbNwsNFyssBxI7OwsYNwsaNz0LGDc9Cxc3PQsWNz0LGTc9CxQ3PQsRCxs3Cw4XKywHEjs7CxY3Cxw3PQsWNz0LGTcLGjc9Cxk3PQsYNz0LFzc9CxY3PQsVNz0LFgsbNwsPFyssBxIyADsLGDc9Cxc3PQsGNz0LBQsbNwsQFyssBxI7OwsXNwscNz0LFzc9CxY3PQsZNz0LGDc9Cww3PQsJCxs3CxEXKywHEjs7Cxg3Cxw3PQsYNz0LFzc9CxY3PQsZNz0LETc9Cw4LGzcLEhcrLAcSOzsLGTcLHDc9Cxk3PQsYNz0LFzc9CxY3PQsHNz0LFAsbNwsTFyssBxI7OwsWNwscNz0LFjc9Cxk3PQsYNz0LFzc9Cws3PQsFCxs3CxQXKywHEjs7Cxc3Cxw3PQsXNz0LFjc9Cxk3PQsYNz0LEDc9CwkLGzcLFRcrLAcSOzsLGDcLHDc9Cxg3PQsXNz0LFjc9Cxk3PQsVNz0LDgsbNwsWFyssBxI7OwsZNwscNz0LGTc9Cxg3PQsXNz0LFjc9Cwo3PQsUCxs3CxcXKywHEjs7CxY3Cxw3PQsWNz0LGTc9Cxg3PQsXNz0LDzc9CwULGzcLGBcrLAcSOzsLFzcLHDc9Cxc3PQsWNz0LGTc9Cxg3PQsUNz0LCQsbNwsZFyssBxI7OwsYNwscNz0LGDc9Cxc3PQsWNz0LGTc9Cwk3PQsOCxs3CxoXKywHEjs7Cxk3Cxw3PQsZNz0LGDc9Cxc3PQsWNz0LDjc9CxQLGzcLGxcrLAcSOzsLFjcLHDc9CxY3PQsZNz0LGDc9Cxc3PQsTNz0LBQsbNwscFyssBxI7OwsXNwscNz0LFzc9CxY3PQsZNz0LGDc9Cwg3PQsJCxs3Cx0XKywHEjs7Cxg3Cxw3PQsYNz0LFzc9CxY3PQsZNz0LDTc9Cw4LGzcLHhcrLAcSOzsLFjcLHTc9CxY3PQsZNwscNz0LGTc9Cxg3PQsXNz0LFjc9CxI3PQsUCxs3Cx8XKywHEjIAOwsYNz0LFzc9Cws3PQsECxs3CyAXKywHEjs7Cxc3Cx03PQsXNz0LFjc9Cxk3PQsYNz0LDjc9CwsLGzcLIRcrLAcSOzsLGDcLHTc9Cxg3PQsXNz0LFjc9Cxk3PQsRNz0LEAsbNwsiFyssBxI7OwsZNwsdNz0LGTc9Cxg3PQsXNz0LFjc9CxQ3PQsXCxs3CyMXKywHEjs7CxY3Cx03PQsWNz0LGTc9Cxg3PQsXNz0LBjc9CwQLGzcLJBcrLAcSOzsLFzcLHTc9Cxc3PQsWNz0LGTc9Cxg3PQsKNz0LCwsbNwslFyssBxI7OwsYNwsdNz0LGDc9Cxc3PQsWNz0LGTc9Cw03PQsQCxs3CyYXKywHEjs7Cxk3Cx03PQsZNz0LGDc9Cxc3PQsWNz0LEDc9CxcLGzcLJxcrLAcSOzsLFjcLHTc9CxY3PQsZNz0LGDc9Cxc3PQsTNz0LBAsbNwsoFyssBxI7OwsXNwsdNz0LFzc9CxY3PQsZNz0LGDc9Cwc3PQsLCxs3CykXKywHEjs7Cxg3Cx03PQsYNz0LFzc9CxY3PQsZNz0LCTc9CxALGzcLKhcrLAcSOzsLGTcLHTc9Cxk3PQsYNz0LFzc9CxY3PQsMNz0LFwsbNwsrFyssBxI7OwsWNwsdNz0LFjc9Cxk3PQsYNz0LFzc9Cw83PQsECxs3CywXKywHEjs7Cxc3Cx03PQsXNz0LFjc9Cxk3PQsYNz0LEjc9CwsLGzcLLRcrLAcSOzsLGDcLHTc9Cxg3PQsXNz0LFjc9Cxk3PQsVNz0LEAsbNwsuFyssBxI7OwsWNwseNz0LFjc9Cxk3Cx03PQsZNz0LGDc9Cxc3PQsWNz0LCDc9CxcLGzcLLxcrLAcSMgA7Cxg3PQsXNz0LBzc9CwYLGzcLMBcrLAcSOzsLFzcLHjc9Cxc3PQsWNz0LGTc9Cxg3PQsNNz0LCgsbNwsxFyssBxI7OwsYNwseNz0LGDc9Cxc3PQsWNz0LGTc9CxQ3PQsPCxs3CzIXKywHEjs7Cxk3Cx43PQsZNz0LGDc9Cxc3PQsWNz0LCzc9CxULGzcLMxcrLAcSOzsLFjcLHjc9CxY3PQsZNz0LGDc9Cxc3PQsSNz0LBgsbNws0FyssBxI7OwsXNwseNz0LFzc9CxY3PQsZNz0LGDc9Cwk3PQsKCxs3CzUXKywHEjs7Cxg3Cx43PQsYNz0LFzc9CxY3PQsZNz0LEDc9Cw8LGzcLNhcrLAcSOzsLGTcLHjc9Cxk3PQsYNz0LFzc9CxY3PQsGNz0LFQsbNws3FyssBxI7OwsWNwseNz0LFjc9Cxk3PQsYNz0LFzc9Cw43PQsGCxs3CzgXKywHEjs7Cxc3Cx43PQsXNz0LFjc9Cxk3PQsYNz0LFTc9CwoLGzcLORcrLAcSOzsLGDcLHjc9Cxg3PQsXNz0LFjc9Cxk3PQsMNz0LDwsbNws6FyssBxI7OwsZNwseNz0LGTc9Cxg3PQsXNz0LFjc9CxM3PQsVCxs3CzsXKywHEjs7CxY3Cx43PQsWNz0LGTc9Cxg3PQsXNz0LCjc9CwYLGzcLPBcrLAcSOzsLFzcLHjc9Cxc3PQsWNz0LGTc9Cxg3PQsRNz0LCgsbNws9FyssBxI7OwsYNwseNz0LGDc9Cxc3PQsWNz0LGTc9Cwg3PQsPCxs3Cz4XKywHEjs7Cxk3Cx43PQsZNz0LGDc9Cxc3PQsWNz0LDzc9CxULGzcLPxcrLAcSOzsLBTcLABcLBTcLABcrCxY3PSILACoKMgA7OwsFNwsBFwsFNwsBFysLGTc9IgsAKgoyADs7CwU3CwIXCwU3CwIXKwsYNz0iCwAqCjIAOzsLBTcLAxcLBTcLAxcrCxc3PSILACoKMgA7OxgVAgUCGgobCBwLHQweDQMECjs7DgshQCYJCwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7CwM3CwA3CxcrEjs7CwQ3CwM3CxcrEjs7CwU3CwgLADcLFysZEjs7CwY3CwgLAzcLFysZEjs7CwQ3CwY3PQsFQhcOKwuACxgLBjc9CyBBECUqCjIAOzsLBzcLCDcLFwsFNz0LFAYBEjs7CwQ3Cw8LQAsGNz0iCwlCCwQlIhcLCwc3PQsIJQsHNz0LGEIqAQsLBzc9CxglCwc3PQsIQioBKgoyADs7CwQ3Cw4LQAsGNz0iCwlCCwQlIhcLCwU3PQsIJQsFNz0LGEIqAQsLBTc9CxglCwU3PQsIQioBKgoyADs7CwM3CxcLBAsENwsXKwsBIhkKMgA7OwsANwsXBgA7CwQ3CwM3CwA3CxcrEjIAOwshKxIyADs7CwU3CwASMgA7OwsFNz0LBDEoFjtAOwsGNwsENwsFNz0XKxIyADs7CwQ3CwU3PRcLCwY3PQsIJQsGNz0LGEIqAQsLBjc9CxglCwY3PQsIQioBKgoyADs7CwU3Dj0OMgEyAAsBIhI7OwsAMgAqO0ALAzc9FRgVAgEACAMKOzsOCyFAJgULAjccOwsDNxw7CwM3CwQ3CxcLPAsANz0GARI7OwsDNwsXCwA3CxcLPAYACjIAOzsLAzc9FRgVAgEABAYKOzsGAQoyADsSMgA7OwsENwsXCwY3CxcLBzc9BgEKMgA7OwsENwsXCwY3CxcLBzc9BgEKMgA7OxgVAgEBDgkDCwo4KywBOwsFNwsENwsJNz0SMgA7CyErEjIAOzsLBjcLBTcLFysSMgA7OwsHNwsFNwsXKxIyADs7Cwg3CwU3CwQ3CxcrEjIAOwshCwY3CxcLAzgrLgAOCyELBjcLFwsDOCsuAA4LIQsECjs7DgshCwU3CxcrCjs7DgshCwEKOzsGAQo7Ow4LIUAmBAsCNxw7CwM3HDsLADcLFwsANwsXCzwLAzc9BgEKMgA7OxgVAgABAwo7Ow4LIUAmDQsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBzccOwsINxw7Cwk3HDsLCjccOwsLNxw7CwU3Cwk3CwA3CxcrEjIAOwshCzwGABI7OwsGNwsMNwsXBgASOzsLBzcLBjcLFysSOzsLCDcLCTcLFysSOzsLCTcLCTcLFysSOzsLBzcLFysLCDc9MSgWO0A7Cwo3PRZAOwsFNwsXCwo3PQYBOwsKNwsFNwsXCwM3PQYBCyELBDc9BgESOzsLBTcLFwYAOwsLNwsBEjs7Cws3PQsJNz0xKBY7QDsLCjcLBTcLFwsKNz0GARIyADs7CwU3CxcGADsLCzcOPQ4yATIACwEiEjs7CwAyACo7QAsGNwsXCwo3PQYBO0ALBjcLFwsECwg3PRkKMgA7OwsGNz0VGBUCAQIMBwMECjs7BgEKMgA7EjIAOzsLBDcLF0AmBwsCNxw7CwM3HDsLBDccOwsFNxw7CwY3CxcLBTc9BgELIQsDNz0LBDc9BgIVGBUCAQMGCAMEBQoyADs7Cwk3CxcLPCsWO0AmEgsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBzccOwsINxw7Cwk3HDsLCjccOwsLNxw7Cww3HDsLCjccOwsNNxw7Cw43HDsLDzccOwsQNxw7QCYICwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7CwY3CwA3CxcrEjs7CwY3PRY7CwY3CwA3CxcrEjIAO0A7CwA3CxcLADsYCjIAOzsLBzcLABI7OwsHNz0LBTc9MSgWO0A7CwM3CwQ3PQsHNz0iFw4rCwY3Cwc3PRcrJAoyADs7Cwc3Dj0OMgEyAAsBIhI7OwsAMgAqO0AYFQsQNwIAAwMEBRI7OwsDNwsONwsRNz0SMgA7CyErEjs7CwQ3CwM3CxcrEjs7CwU3CwM3CxcrEjs7CwY3CwM3CxcrEjs7Cwc3Cw43CxcLPCsSOzsLCDcLDjcLFws8KxI7OwsJNwsDNwsXCwY3CxcLAzgrLgAOCyELBDcLFwYACjs7DgshQCYFCwI3HDsLAzccOwsENxw7CwA3CxcLADcLFysLAzc9CwQ3PQYDFRgVAgACAwQKOzsOCyFAJgULAjccOwsDNxw7CwQ3HDsLADcLFwsANwsXKwsDNz0LBDc9BgMVGBUCAAIDBAo7Ow4LIUAmBgsCNxw7CwM3HDsLBDccOwsFNxw7CwA3CxcLADcLFws8CwU3PQYBCjIAOzsLADcLFwsDNz0KMgA7OwsANwsXCwQ3PQoyADs7CwA3CxcGADsYFQIAAwMEBQo7Ow4LIUAmBAsCNxw7CwM3CxcLPAsANz0GATsLADcLFwYAOxgVAgEAAwYKOzsOCyFAJgQLAjccOwsDNxw7CwA3CxcLAzc9BgE7CwA3CxcGABUYFQIAAQMKOzsOCyFAJgQLAjccOwsDNxw7CwM3PRZAOwsANwsXCwM3PQYBOwsANwsXBgAVGBUCAAEDCjs7DgshCwQKOzsOCyELBAo7Ow4LIQsBCjs7DgshCwIKOzsOCyFAJgYLAjccOwsDNxw7CwM4Ky4ADgshQCYJCwI3HDsLAzccOwsENxw7CwU3HDsLCwQ3PSAIFjsLBjc9QDsLBzc9CyELCDc9CwM3PQsENz0LBTc9BgQVGBUCAwMGBAcFCAMDBAUKOzsOCyFAJgkLAjccOwsDNxw7CwQ3HDsLBTccOwsLBDc9IAgWOwsGNz1AOwsHNz0LIQsINz0LAzc9CwQ3PQsFNz0GBBUYFQIDAwYEBwUIAwMEBQo7OxUYFQICAQQNBQ8DCjs7BgEKMgA7Ejs7CwM3CxcLCTcLFwsDOCsuAA4LIUAmAwsCNxw7CwA3CxcLACgGARUYFQIAAAo7Ow4LIQsBCjs7BgEKMgA7OwsKNwsONwsXCwM4Ky4ACjIAOxI7OwsLNwsDNwsXCwQ3CxcLAzgrLgAOCyFAJgULAjccOwsDNxw7CwQ3HDsLADcLFws8CwM3PQsENz0GAhUYFQIAAgMECjs7DgshQCYFCwI3HDsLAzccOwsENxw7CwA3CxcLPAsDNz0LBDc9BgIVGBUCAAIDBAo7Ow4LIUAmBQsCNxw7CwM3HDsLBDccOwsANwsXCwM3PQoyADs7CwA3CxcLBDc9CjIAOzsYFQIAAgMECjs7BgEKMgA7CyEGABI7OwsLNwsXCws3CxcLAzgrLgAOCyFAJggLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7CwU3CwA3CxcrEjs7CwY3CwU3CxcrEjs7Cwc3CxcLADc9CwM3PQsENz0LBjc9BgQ7CwU3CxcLAzc9CwQ3PQYCOwsANwsXCwM3CxcLBDc9CwQ3PQsGNz0iBgIKMgA7OxgVAgECBxADBAo7OwYBCjIAOzsLCzcLFwsLNwsXCwM4Ky4ADgshQCYJCwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7CwU3CwA3CxcrEjs7CwY3CwU3CxcrEjs7Cwc3CwM3CxcLBDc9CwQ3PQsGNz0iBgISOzsLBTcLFwsDNz0LBDc9BgI7Cwg3CxcLADc9CwM3PQsENz0LBjc9BgQ7CwA3CxcLBzc9CjIAOzsYFQIBAggQAwQKOzsGAQoyADs7Cwo3Cwo3CxcLCzc9CjIAOxIyADs7Cws3Cw43CxcLAzgrLgAKMgA7CyELAzgrLgAOCyFAJgoLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7Cwc3HDsLCDccOwsFNwsECwQ3PRkSOzsLBjcLBTcLBTc9CwM3CxcrCwU3PUEQEjIAOwsYJQsFNz0LECUqCwU3PQsIJSoLBTc9KhI7OwsHNwsEOCsuABI7OwsINwsAEjs7Cwg3PQsFNz0xKBY7QDsLBzcLFwsGNz0GATsLCDcOPQsEIhIyADs7QAsFNwsJNwsXCwc3PQsFNz0GAhIyADs7CwM3CxcLBTc9BgE7GBUCAQIJBQMECjs7DgshQCYECwI3HDsLAzccOwsDNwsXDisL/wsDNwsXCwM3CxcrCwEQCwJCPCsBEAoyADs7GBUCAAEDCjs7CjIAOxIyADs7CwM3CxcLCTcLFwsDOCsuAA4LIQsJNwsXCzwLAzgrLgAOCyELCjc9Cjs7DgshCws3PQo7OwYBCjs7DgshQCYHCwI3HDsLAzccOwsENxw7CwU3HDsLBjcLFws8CwA3PQYBOwsENwsFNwsANwsXKxIyADsLISsSOzsLBTcLBTcLFysSOzsLADcLFysLADcLFysIFjsLAzcLBTcLFysSMgA7OwsANwsXCwEKMgA7QDsLAzcLBTcLFysSMgA7OwsANwsXCwM3CxcLBTc9CwA3PQsENz0WQDsLBDcLFysGAwoyADs7GBUCAQAGCQo7Ow4LIUAmBQsCNxw7CwM3HDsLBDccOwsANwsXCzwLAzc9CwQ3PQYCOxgVAgACAwQKOzsOCyFAJgULAjccOwsDNxw7CwQ3HDsLBDcLADcLFws8KxI7OwsANwsXKwsANwsXKwgWOwsDNwsANwsXCwAoBgESMgA7OwsENwsXCwM3PQYBQDsLBDcLFwsANwsXKwsANwsXKwYCOwsDNwsANwsXCwAoBgESMgA7OwsDNz0VGBUCAAAKOzsOCyELBAo7OwYBCjIAOzsLDDcLAzcLFwsENwsXCwM4Ky4ADgshQCYECwI3HDsLAzccOwsANwsXCwM3PQYBOxgVAgABAwo7Ow4LIUAmBAsCNxw7CwM3HDsLAzc9FjsLADcLFysLIQsANz0GARUYFQIAAQMKOzsGAQoyADsSOzsLCjcLDjcLFwsDOCsuAAoyADsLIQsDOCsuAA4LIUAmBwsCNxw7CwM3HDsLBDccOwsENwsDNwsXKxI7OwsDNwsDNwsXKxIyADsWOwsENz1AOwsFNwsXCwQ4Ky4ADgsAIQsKOzsOCwEhCwo7OwYBCyELAzc9BgELIQsENz0GAQshCwY3PQYBFRgVAgIBBQUGBwMKOzsOCyFAJgkLAjccOwsDNxw7CwQ3HDsLBTccOwsFNwsDNwsGNwsXCwM3PQYBEjIAOwshKxI7OwsLBTcLABcrCBZAOwsLBTcLARcrCBZAOwsENwsHNwsXCwU3CxcLAgsEBgIGARIyADs7CwU3CxcLAAsEBgI7CwM3CxcOKwsQEAoyADs7Cwg3CxcLAzgrLgAOCyELAzc9Cjs7DgshCwQ3PQo7OwYBFRgVAgMBBgcHBQgMAwo7OwoyADsSOzsLDTcLAzcLFwsENwsXCwM4Ky4ADgshCwQ3CxcLAzgrLgAOCyELCjc9Cjs7BgEKOzsOCyFAJgkLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7Cwc3HDsLBjcLADcLFws8CwY3PQYBEjIAOzsLBzcLAzcLFwsFNz0LBjc9BgISOzsLBDcLBzcLFwsENz0GARIyADs7Cwc3Cwc3CxcrEjIAOzsLCDcLFwsDOCsuAA4LIQsENz0KOzsOCyELBTc9Cjs7DgshCwc3CxcrCjs7DgshCwM3PQo7Ow4LIQsHNwsXKwo7Ow4LIQsHNwsXKwo7Ow4LIQsDNwsXKwo7Ow4LIQsGNwsXKwo7OwYBFRgVAgEECAwDBAUGCjs7DgshQCYHCwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsGNwsANwsXCzwLBjc9BgESMgA7OwsENwsANwsXCwQ3PQsGNwsXKwYCEjIAOzsLAzcLFwsFNz0LBjc9BgILIQsENwsXKwYBFRgVAgAEAwQFBgo7Ow4LIUAmBQsCNxw7CwM3HDsLBDccOwsLAzc9IAgWOwsDNz1AOwsENwsXCwM3PQsANz0GAhUYFQIAAgMECjs7BgEKMgA7Ejs7Cw43Cw43CxcLAzgrLgAKMgA7CyELAzgrLgAOCyFAJgoLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7CwY3CwY3PRY7Cwc3CxcLCAYBEjIAOzsLAzcLCDcLFwsDOCsuAA4LIQsENz0LBTc9Igo7OwYBCyELAzc9CwY3PQYCEjIAOzsLBTcLBzcLFwsDNwsXCzwLBDc9BgELBAsFNz0ZBgISMgA7OwsDNwsXCwQLBDc9GQoyADs7Cwk3CxcLAzgrLgAOCyELAzc9Cjs7DgshCwU3PQo7Ow4LIQsGNz0KOzsGARUYFQIDBAcFCAgJDAMEBQYKOzsKMgA7Ejs7Cw83CwM3CxcLDTcLFwsDOCsuAA4LIQsNNwsXCzwLAzgrLgAOCyELDjc9Cjs7BgEKOzsOCyFAJggLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7CwU3CwY3CwA3CxcLPAsGNz0GARIyADsLIQs8CwU3PQsDNwsXKwsDNwsXKwYDEjIAOzsLBjcLFwsFNwsXKwoyADs7CwM3Cwc3CxcLPAsANz0LAzc9CwQ3PQsFNwsXKwsGNz0GBRIyADsLIQsFNz0GATsLAzc9FRgVAgEEBw0DBAUGCjs7DgshQCYICwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsGNwsANwsXCzwLBjc9BgESMgA7OwsENwsANwsXCwQ3PQsGNwsXKwYCEjIAOzsLBTcLBjcLFws8CwU3PQsDNwsXKwsDNwsXKwsENwsXKwYEEjIAOzsLBjcLFwsFNwsXKwoyADs7Cwc3CxcLPAsANz0LAzc9CwQ3PQsFNwsXKwsGNz0GBRUYFQIBBAcNAwQFBgo7OwYBCjIAOxI7OxgVAgEAEQksADtAJhsLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7Cwc3HDsLCDccOwsJNxw7Cwo3HDsLCzccOwsMNxw7Cw03HDsLDjccOwsPNxw7CxA3HDsLETccOwsSNxw7CxM3HDsLETccOwsUNxw7CxU3HDsLFjccOwsXNxw7Cxg3HDsLGTccOwsFNxw7CwM3Cxo3PRI7OwsENwsDNwsXCzwrEjs7CwU3CwM3CxcrEjs7CwY3CwQ4Ky4AEjs7Cwc3CwQ4Ky4AEjs7Cwg3CwQ4Ky4AEjs7Cwk3CwQ4Ky4AEjs7Cwo3CwQ4Ky4AEjs7Cws3CwQ4Ky4AEjs7Cww3CwQ4Ky4AEjs7Cw03CwQ4Ky4AEjs7Cw43CwQ4Ky4AEjs7Cw83CwQ4Ky4AEjs7CxA3CwQ4Ky4AEjs7CxE3CwASOzsLETc9CzEoFjtAOwsQNwsRNz0XCxE3PQuAMSgWOwsRNz0LASULJEA7CxE3PQsBJQoyADs7CxE3Dj0OMgEyAAsBIhI7OwsAMgAqO0ALEjcLABI7OwsTNwsAEjs7CxE3CwASOzsLETc9CzEoFjtAOwsUNwsTNz0LEzc9CwElJAsTNz0LAiUkCxM3PQsDJSQLEzc9CwQlJBI7OwsGNwsSNz0XCxQ3CxQ3PQsIQgv/CxQ3PQEkC2MkEjIAOwoyADs7CxU3CxA3Cwc3CxQ3PRcLEjc9CjIAOxcrEjs7CxY3CxA3CxU3PRcrEjs7Cxc3CxA3CxY3PRcrEjs7Cxg3CwsQNwsUNz0XKxkLCxQ3PRkkEjs7Cwg3CxI3PRcLGDc9CxglCxg3PQsIQioKMgA7OwsJNwsSNz0XCxg3PQsQJQsYNz0LEEIqCjIAOzsLCjcLEjc9FwsYNz0LCCULGDc9CxhCKgoyADs7Cws3CxI3PRcLGDc9CjIAOzsLDDcLFDc9FwsYNwsLFzc9GQsLFjc9GSQLCxU3PRkkCwsSNz0ZJBIyADsLGCULGDc9CwhCKgoyADs7Cw03CxQ3PRcLGDc9CxAlCxg3PQsQQioKMgA7OwsONwsUNz0XCxg3PQsIJQsYNz0LGEIqCjIAOzsLDzcLFDc9FwsYNz0KMgA7OwsSNz0WOwsSNwsTNwsBEjIAOxIyADtAOwsSNwsVNz0LEDcLEDcLEDcLFzc9CxU3PSQXKxcrFyskEjIAOzsLEzcOPQsQNwsQNwsTNz0XKxcrJBIyADs7CxE3Dj0OMgEyAAsBIhI7OwsAMgAqO0ALGTcLBDgrLgAOCwAhCwAKOzsOCwEhCwEKOzsOCwIhCwIKOzsOCwMhCwQKOzsOCwQhCwgKOzsOCwUhCxAKOzsOCwYhCyAKOzsOCwchC0AKOzsOCwghC4AKOzsOCwkhCxsKOzsOCwohCzYKOzsSOzsLBTcLBTcLFwsENwsXCwM4Ky4ADgshQCYPCwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7Cwg3HDsLBDcLBjcLADcLFysSMgA7CyErEjs7CwU3CwY3CxcrCwQUEjs7CwY3CwQLADcLFwsFNz0LBiIKMgA7CwEiGRI7OwsHNwsANwsXCwQ4Ky4ACjIAOxI7OwsINwsAEjs7Cwg3PQsGNz0xKBY7QDsLCDc9CwU3PTEoFjsLAzcLBzcLCDc9CwEQFysSMgA7OwsINz0LBTc9QRY7CwM3Cwk3CwM3CwM3PQsIJQsDNz0LGEIqEjIAOwsYQhcrCxglCwk3CwM3PQsQQgv/ARcrCxAlKgsJNwsDNz0LCEIL/wEXKwsIJSoLCTcL/wsDNz0BFysqEjIAOzsLAzcOPQsKNwsINz0LBTc9FAsAKhcrCxglJBIyADtAOwsGCwU3PTEoFkA7CwQLCDc9CwU3PUEIFkA7CwM3Cwk3CwM3PQsYQhcrCxglCwk3CwM3PQsQQgv/ARcrCxAlKgsJNwsDNz0LCEIL/wEXKwsIJSoLCTcL/wsDNz0BFysqEjIAOzsLBzcLCDc9FwsHNwsINz0LBTc9EBcrCwM3PSQKMgA7QDsLBzcLCDc9FwsENwsINz0XKwoyADs7Cwg3Dj0OMgEyAAsBIhI7OwsAMgAqO0ALBDcLADcLFwsEOCsuAAoyADsSMgA7OwsFNwsAEjIAOzsLBTc9CwY3PTEoFjtAOwsINwsGNz0LBTc9EBIyADs7CwM3CwU3PQsEQRY7Cwc3Cwg3PQsEEBcrQDsLBzcLCDc9FysSMgA7OwsENwsFNz0XCwU3PQsEMSgWOwsINz0LBCkoFjsLCzcLCTcLAzc9CxhCFysXKwsMNwsJNwsDNz0LEEIL/wEXKxcrJAsNNwsJNwsDNz0LCEIL/wEXKxcrJAsONwsJNwv/CwM3PQEXKxcrJEA7CwM3PQoyADs7CwU3Dj0OMgEyAAsBIhI7OwsAMgAqO0AYFQIGAAkGChkLDAwNDQ4ODwo7Ow4LIUAmCgsCNxw7CwM3HDsLBDccOwsANwsXCwM3PQsENz0LADcLFysLBTc9CwY3PQsHNz0LCDc9Cwk3PQYIOxgVAgUCBQgGCQcKCAsJBgMECjs7DgshQCYLCwI3HDsLAzccOwsENxw7CwU3HDsLBTcLAzcLBDc9CwEiFysSOzsLAzcLBDc9CwEiFwsDNwsENz0LAyIXKwoyADs7CwM3CwQ3PQsDIhcLBTc9CjIAOzsLADcLFwsDNz0LBDc9CwA3CxcrCwY3PQsHNz0LCDc9Cwk3PQsKNz0GCDsLBTcLAzcLBDc9CwEiFysSMgA7OwsDNwsENz0LASIXCwM3CwQ3PQsDIhcrCjIAOzsLAzcLBDc9CwMiFwsFNz0KMgA7OxgVAgUCBgwHDQgOCQ8KBwMECjs7DgshQCYVCwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7Cwg3HDsLCTccOwsKNxw7Cws3HDsLDDccOwsNNxw7Cw43HDsLDzccOwsQNxw7CxE3HDsLEjccOwsTNxw7CxQ3HDsLDzccOwsMNxw7Cw03HDsLDjccOwsLNwsANwsXKxI7OwsMNwsDNwsENz0XKwsFNwsAFyskEjs7Cw03CwM3CwQ3PQsBIhcrCwU3CwEXKyQSOzsLDjcLAzcLBDc9CwIiFysLBTcLAhcrJBI7OwsPNwsDNwsENz0LAyIXKwsFNwsDFyskEjs7CxA3CwQSOzsLETcLARI7OwsRNz0LCzc9MSgWO0A7CxI3CwY3Cww3PQsYQhcrCwc3Cw03PQsQQgv/ARcrJAsINwsONz0LCEIL/wEXKyQLCTcL/wsPNz0BFyskCwU3CxA3Dj0OMgEyAAsBIhI7OwsAMgAqFyskEjs7CxM3CwY3Cw03PQsYQhcrCwc3Cw43PQsQQgv/ARcrJAsINwsPNz0LCEIL/wEXKyQLCTcL/wsMNz0BFyskCwU3CxA3Dj0OMgEyAAsBIhI7OwsAMgAqFyskEjs7CxQ3CwY3Cw43PQsYQhcrCwc3Cw83PQsQQgv/ARcrJAsINwsMNz0LCEIL/wEXKyQLCTcL/wsNNz0BFyskCwU3CxA3Dj0OMgEyAAsBIhI7OwsAMgAqFyskEjs7Cw83CwY3Cw83PQsYQhcrCwc3Cww3PQsQQgv/ARcrJAsINwsNNz0LCEIL/wEXKyQLCTcL/wsONz0BFyskCwU3CxA3Dj0OMgEyAAsBIhI7OwsAMgAqFyskEjs7Cww3CxI3PRI7OwsNNwsTNz0SOzsLDjcLFDc9Ejs7CxE3Dj0OMgEyAAsBIhI7OwsAMgAqO0ALEjcLCjcLDDc9CxhCFysLGCULCjcLDTc9CxBCC/8BFysLECUqCwo3Cw43PQsIQgv/ARcrCwglKgsKNwv/Cw83PQEXKyoLBTcLEDcOPQ4yATIACwEiEjs7CwAyACoXKyQSMgA7OwsTNwsKNwsNNz0LGEIXKwsYJQsKNwsONz0LEEIL/wEXKwsQJSoLCjcLDzc9CwhCC/8BFysLCCUqCwo3C/8LDDc9ARcrKgsFNwsQNw49DjIBMgALASISOzsLADIAKhcrJBIyADs7CxQ3Cwo3Cw43PQsYQhcrCxglCwo3Cw83PQsQQgv/ARcrCxAlKgsKNwsMNz0LCEIL/wEXKwsIJSoLCjcL/wsNNz0BFysqCwU3CxA3Dj0OMgEyAAsBIhI7OwsAMgAqFyskEjIAOzsLDzcLCjcLDzc9CxhCFysLGCULCjcLDDc9CxBCC/8BFysLECUqCwo3Cw03PQsIQgv/ARcrCwglKgsKNwv/Cw43PQEXKyoLBTcLEDcOPQ4yATIACwEiEjs7CwAyACoXKyQSMgA7OwsDNwsENz0XCxI3PQoyADs7CwM3CwQ3PQsBIhcLEzc9CjIAOzsLAzcLBDc9CwIiFwsUNz0KMgA7OwsDNwsENz0LAyIXCw83PQoyADs7GBUCAAgDBAUGBwgJCgo7Ow4LIQsICjs7BgEKMgA7Ejs7CwM3CxcLBDcLFwsFNz0GAQoyADs7GBUCAQAaCSwAO0AmBgsCNxw7CwM3HDsLBDccOwsFNxw7QCYFCwI3HDsLAzccOwsENxw7CwM3PQsBCQsENz0LAQkiCwElCwELAzc9ASILAQsENz0BIhUYFQsFNwIAAgMEEjs7CwM3CwQ4Ky4AEjs7CwQ3CwASOzsLBDc9C0AxKBY7QDsLAzcLBDc9FwsACwsKOAs8Cwo4CzwLBDcOPQsBIhI7PQYBBgEZKgoyADs7QBgVAgAALAAoOwsLOAs8QCYLCwI3HDsLAzccOwsENxw7CwU3HDsLBjccOwsHNxw7Cwg3HDsLBjcLCwM3PSILIgsENz0iCyJAJggLAjccOwsDNxw7CwQ3HDsLBTccOwsGNxw7Cwc3HDsLAzcLAzc9FjsLIBIyADs7CwQ3CxI7OwsFNwsENwsXKxI7OwsGNwsSOzsLBzcLABI7OwsHNz0LAzc9MSgWO0A7CwY3Dj0LBDcLFwsKOAs8Cwo4CzwGAAsFNz0ZBgEGASISMgA7OwsHNw49DjIBMgALASISOzsLADIAKjtACwY3PRUYFQIAAQMLECwBIgsiCwU3PSILIgsGNz0iCyILBzc9IgsiCwg3PSILIkAmCQsCNxw7CwM3HDsLBDccOwsFNxw7CwY3HDsLBzccOwsDNxw7CwU3CxI7O0AtAAALBTcLEjIAOzsRQAsINxw7AAgLBjcLCzgLPAYAEjs7Cwc3CwM4Ky4ADgshCwo7Ow4LIQsKOzsOCyELCjs7DgshCwo7OxI7OwsHNwsXCwY3CxcrCjIAOzsLBzcLFwsGNwsXKwoyADs7Cwc3CxcLBjcLFysKMgA7OwsHNwsXCwY3CxcrCjIAOzsLAzcLDDgLPAsHNz0GARIyADs7CwQ3C4ASMgA7OwsFNwsDNz0WOwtAOwsDNwsXKwsENz0pFjsLAzc9QDsLAzcLFwsACwQ3PQYCEjIAOzsREwsFNz0VGBUCAAAsACILIhIyADs7Cwc3QCYHCwI3HDsLAzccOwsENxw7CwU3HDsLAzccOwsENwsAEjs7QC0AABFACwY3HDsABgsACwM3CxcrCBY7QDsLBDc9ERULBTcLABI7OwsFNz0LAzcLFysxKBY7QDsLBDcLBDc9CwUlCwQ3PRALAzcLFwsFNz0GASISMgA7OwsENw49CwQ3PQESMgA7OwsFNw49DjIBMgALASISOzsLADIAKjtAERMLBDc9FRgVAgABAwsGNz0sARIyADs7Cwg3CwsHNz0iCwY3PSISMgA7OwsHNwsJNwsXCzwLPAsKNz0LCjc9CywBLAEGARIyADs7CwY3CwM4Ky4ADgshCwk3CxcLPAs8Cwo3PQssAQYBCjs7DgshCwk3CxcLPCsKOzsOCyELCTcLFws8Kwo7OxIyADs7Cwk3CxcLPAsINz0LBzc9CwY3PQYDCyELPAYACyEGABUYFQICBgkJCgoDBAUGBwgKMgA7OxgVAkgAACwBKDsYFQ==",[22,"function",38,"amd",71,19371,120,321,162,"",173,"length",186,"0x",191,"substr",227,314,236,"0x",241,"charAt",254,"charAt",280,"fromCharCode",340,3949,343,3938,412,422,426,413,451,"lib",473,"Base",483,"extend",486,653,508,"prototype",536,539,538,552,544,"mixIn",557,"hasOwnProperty",560,"init",564,616,570,"init",573,606,585,"$super",588,"init",591,"apply",607,574,621,"init",624,"prototype",635,"$super",654,487,665,"create",668,722,688,"extend",699,"init",702,"apply",723,669,731,"init",734,744,745,735,753,"mixIn",756,874,781,786,785,836,799,"hasOwnProperty",808,811,810,833,835,779,838,839,843,"hasOwnProperty",846,"toString",850,853,852,871,858,"toString",864,"toString",875,757,884,"clone",887,916,899,"init",902,"prototype",905,"extend",917,888,937,"WordArray",943,"extend",953,"init",956,1045,981,"words",988,996,1009,"sigBytes",1019,1033,1027,"length",1032,1038,1046,957,1056,"toString",1059,1095,1077,1083,1084,"stringify",1096,1060,1107,"concat",1110,1475,1150,"words",1163,"words",1176,"sigBytes",1189,"sigBytes",1201,"clamp",1214,1329,1217,65535,1222,"length",1228,1252,1234,"push",1237,"apply",1251,1327,1274,1278,1277,1327,1326,1263,1328,1450,1349,1353,1352,1450,1449,1338,1454,"sigBytes",1476,1111,1485,"clamp",1488,1595,1513,"words",1526,"sigBytes",1546,4294967295,1571,"length",1577,"ceil",1596,1489,1606,"clone",1609,1674,1629,"clone",1632,"call",1647,"words",1653,"words",1656,"slice",1675,1610,1685,"random",1688,1804,1742,1746,1745,1785,1751,"push",1754,4294967296,1759,"random",1784,1731,1789,"init",1805,1689,1832,"enc",1854,"Hex",1864,"stringify",1867,2082,1907,"words",1920,"sigBytes",1959,1963,1962,2069,2003,"push",2013,"toString",2026,"push",2036,"toString",2068,1948,2073,"join",2076,"",2083,1868,2092,"parse",2095,2263,2130,"length",2167,2171,2170,2241,2192,"substr",2240,2156,2245,"init",2264,2096,2287,"Latin1",2297,"stringify",2300,2475,2335,"words",2348,"sigBytes",2387,2391,2390,2462,2396,"push",2402,"fromCharCode",2461,2376,2466,"join",2469,"",2476,2301,2485,"parse",2488,2656,2523,"length",2560,2564,2563,2637,2584,"charCodeAt",2636,2549,2641,"init",2657,2489,2680,"Utf8",2690,"stringify",2693,2764,2712,2728,2715,2761,2721,"Malformed UTF-8 data",2727,2761,2734,2713,2746,"stringify",2765,2694,2776,"parse",2779,2817,2796,"parse",2818,2780,2841,"BufferedBlockAlgorithm",2847,"extend",2857,"reset",2860,2902,2872,"_data",2878,"init",2891,"_nDataBytes",2903,2861,2913,"_append",2916,3001,2930,"string",2938,2941,2940,2961,2949,"parse",2966,"_data",2969,"concat",2982,"_nDataBytes",2990,"sigBytes",3002,2917,3013,"_process",3016,3356,3076,"_data",3089,"words",3102,"sigBytes",3115,"blockSize",3147,3176,3153,"max",3166,"_minBufferSize",3175,3189,3181,"ceil",3199,"min",3234,3238,3237,3337,3258,3262,3261,3297,3267,"_doProcessBlock",3296,3247,3304,"splice",3323,"sigBytes",3341,"init",3357,3017,3370,"clone",3373,3436,3393,"clone",3396,"call",3411,"_data",3417,"_data",3420,"clone",3437,3374,3447,"_minBufferSize",3467,"Hasher",3473,"extend",3483,"cfg",3489,"extend",3498,"init",3501,3551,3518,"cfg",3524,"cfg",3527,"extend",3544,"reset",3552,3502,3561,"reset",3564,3599,3576,"reset",3579,"call",3592,"_doReset",3600,3565,3610,"update",3613,3655,3630,"_append",3643,"_process",3656,3614,3665,"finalize",3668,3714,3686,3689,3688,3702,3694,"_append",3707,"_doFinalize",3715,3669,3724,"blockSize",3733,"_createHelper",3736,3803,3750,3792,3772,"init",3781,"finalize",3793,3751,3804,3737,3813,"_createHmacHelper",3816,3892,3830,3879,3852,"HMAC",3855,"init",3868,"finalize",3880,3831,3893,3817,3916,"algo",3939,344,3959,"lib",3962,"WordArray",3974,"enc",3977,"Base64",3987,"stringify",3990,4418,4040,"words",4053,"sigBytes",4066,"_map",4076,"clamp",4114,4118,4117,4351,4249,4252,4251,4271,4258,.75,4272,4276,4275,4336,4281,"push",4287,"charAt",4335,4240,4350,4103,4358,"charAt",4369,4373,4372,4405,4378,"length",4385,4389,4388,4405,4394,"push",4404,4374,4409,"join",4412,"",4419,3991,4428,"parse",4431,4816,4486,"length",4499,"_map",4512,"charAt",4524,4568,4538,"indexOf",4553,4556,4555,4568,4608,4612,4611,4797,4621,4624,4623,4772,4632,"indexOf",4638,"charAt",4674,"indexOf",4680,"charAt",4796,4597,4801,"create",4817,4432,4828,"_map",4831,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",4841,9904,4905,5016,5020,4906,5034,5145,5149,5035,5163,5268,5272,5164,5286,5392,5396,5287,5429,"lib",5437,"WordArray",5450,"Hasher",5463,"algo",5498,5502,5501,5569,5512,4294967296,5517,"abs",5523,"sin",5568,5489,5576,"MD5",5582,"extend",5592,"_doReset",5595,5666,5607,"_hash",5613,"init",5626,1732584193,5635,4023233417,5644,2562383102,5653,271733878,5667,5596,5677,"_doProcessBlock",5680,9286,6115,6119,6118,6221,6156,16711935,6174,4278255360,6220,6106,6228,"_hash",6231,"words",9287,5681,9307,"_doFinalize",9310,9759,9350,"_data",9363,"words",9378,"_nDataBytes",9394,"sigBytes",9440,"floor",9447,4294967296,9475,16711935,9493,4278255360,9537,16711935,9555,4278255360,9582,"sigBytes",9590,"length",9606,"_process",9621,"_hash",9629,"words",9656,9660,9659,9752,9687,16711935,9705,4278255360,9751,9647,9760,9311,9770,"clone",9773,9836,9793,"clone",9796,"call",9811,"_hash",9817,"_hash",9820,"clone",9837,9774,9860,"MD5",9866,"_createHelper",9883,"HmacMD5",9889,"_createHmacHelper",9905,4842,9933,"lib",9948,"Base",9963,"WordArray",9981,"algo",9989,"EvpKDF",9995,"extend",10005,"cfg",10011,"extend",10021,"keySize",10030,"hasher",10036,"MD5",10044,"iterations",10058,"init",10061,10102,10078,"cfg",10084,"cfg",10087,"extend",10103,10062,10112,"compute",10115,10443,10178,"cfg",10186,"hasher",10189,"create",10203,"create",10217,"words",10230,"keySize",10243,"iterations",10253,"length",10263,10267,10266,10418,10273,10276,10275,10289,10281,"update",10297,"update",10306,"finalize",10321,"reset",10345,10349,10348,10403,10357,"finalize",10374,"reset",10402,10334,10407,"concat",10417,10249,10422,"sigBytes",10444,10116,10469,"EvpKDF",10472,10523,10499,"create",10508,"compute",10524,10473,10541,"lib",10544,"Cipher",10548,14777,10551,14769,10635,10800,10675,"_iv",10686,10704,10695,"_prevBlock",10703,10719,10709,"_iv",10739,10743,10742,10798,10797,10728,10804,10636,10828,"lib",10841,"Base",10854,"WordArray",10867,"BufferedBlockAlgorithm",10880,"enc",10883,"Base64",10896,"algo",10899,"EvpKDF",10912,"Cipher",10918,"extend",10928,"cfg",10934,"extend",10943,"createEncryptor",10946,10990,10968,"create",10974,"_ENC_XFORM_MODE",10991,10947,11001,"createDecryptor",11004,11048,11026,"create",11032,"_DEC_XFORM_MODE",11049,11005,11059,"init",11062,11152,11089,"cfg",11095,"cfg",11098,"extend",11115,"_xformMode",11130,"_key",11145,"reset",11153,11063,11164,"reset",11167,11202,11179,"reset",11182,"call",11195,"_doReset",11203,11168,11213,"process",11216,11253,11233,"_append",11246,"_process",11254,11217,11263,"finalize",11266,11312,11284,11287,11286,11300,11292,"_append",11305,"_doFinalize",11313,11267,11322,"keySize",11331,"ivSize",11340,"_ENC_XFORM_MODE",11349,"_DEC_XFORM_MODE",11358,"_createHelper",11361,11563,11382,"encrypt",11385,11454,11409,"string",11417,11425,11424,11430,11431,"encrypt",11455,11386,11472,"decrypt",11475,11544,11499,"string",11507,11515,11514,11520,11521,"decrypt",11545,11476,11564,11362,11588,"StreamCipher",11594,"extend",11604,"_doFinalize",11607,11629,11619,"_process",11630,11608,11638,"blockSize",11659,"mode",11681,"BlockCipherMode",11687,"extend",11697,"createEncryptor",11700,11740,11722,"Encryptor",11725,"create",11741,11701,11751,"createDecryptor",11754,11794,11776,"Decryptor",11779,"create",11795,11755,11805,"init",11808,11858,11830,"_cipher",11845,"_iv",11859,11809,11874,"extend",11885,"Encryptor",11891,"extend",11901,"processBlock",11904,12034,11939,"_cipher",11952,"blockSize",11962,"call",11987,"encryptBlock",12004,"_prevBlock",12010,"slice",12035,11905,12056,"Decryptor",12062,"extend",12072,"processBlock",12075,12220,12115,"_cipher",12128,"blockSize",12141,"slice",12165,"decryptBlock",12182,"call",12207,"_prevBlock",12221,12076,12245,"CBC",12267,"pad",12280,"Pkcs7",12290,"pad",12293,12501,12358,"sigBytes",12429,12433,12432,12462,12438,"push",12461,12418,12469,"create",12490,"concat",12502,12294,12514,"unpad",12517,12570,12534,"sigBytes",12544,"words",12550,"sigBytes",12571,12518,12591,"BlockCipher",12597,"extend",12607,"cfg",12613,"cfg",12616,"extend",12626,"mode",12637,"padding",12653,"reset",12656,12840,12683,"reset",12686,"call",12705,"cfg",12713,"iv",12726,"mode",12736,"_xformMode",12743,"_ENC_XFORM_MODE",12748,12779,12757,"createDecryptor",12769,"_minBufferSize",12778,12794,12787,"createEncryptor",12799,"_mode",12805,"call",12820,12823,12822,12831,12828,"words",12841,12657,12851,"_doProcessBlock",12854,12894,12876,"_mode",12879,"processBlock",12895,12855,12905,"_doFinalize",12908,13043,12933,"cfg",12936,"padding",12946,"_xformMode",12953,"_ENC_XFORM_MODE",12958,12993,12967,"_process",12983,"unpad",12992,13035,12998,"pad",13004,"_data",13011,"blockSize",13024,"_process",13044,12909,13052,"blockSize",13073,"CipherParams",13079,"extend",13089,"init",13092,13120,13109,"mixIn",13121,13093,13130,"toString",13133,13172,13151,13160,13157,"formatter",13161,"stringify",13173,13134,13196,"format",13209,"OpenSSL",13219,"stringify",13222,13339,13247,"ciphertext",13260,"salt",13268,13276,13275,13327,13281,"create",13294,1398893684,13303,1701076831,13310,"concat",13319,"concat",13328,"toString",13340,13223,13353,"parse",13356,13534,13389,"parse",13402,"words",13409,1398893684,13419,13422,13421,13433,13424,1701076831,13434,13437,13436,13494,13445,"create",13451,"slice",13470,"splice",13483,"sigBytes",13499,"create",13509,"ciphertext",13520,"salt",13535,13357,13562,"SerializableCipher",13568,"extend",13578,"cfg",13584,"extend",13594,"format",13610,"encrypt",13613,13846,13653,"cfg",13656,"extend",13676,"createEncryptor",13698,"finalize",13718,"cfg",13730,"create",13740,"ciphertext",13751,"key",13762,"iv",13768,"iv",13776,"algorithm",13787,"mode",13793,"mode",13801,"padding",13807,"padding",13815,"blockSize",13821,"blockSize",13829,"formatter",13835,"format",13847,13614,13861,"decrypt",13864,13973,13899,"cfg",13902,"extend",13922,"_parse",13932,"format",13946,"createDecryptor",13959,"finalize",13965,"ciphertext",13974,13865,13986,"_parse",13989,14044,14008,"string",14016,14024,14023,14041,14029,"parse",14045,13990,14069,"kdf",14082,"OpenSSL",14092,"execute",14095,14305,14131,14143,14137,"random",14155,"create",14165,"keySize",14182,"compute",14206,"create",14212,"words",14215,"slice",14241,"sigBytes",14259,"create",14269,"key",14280,"iv",14291,"salt",14306,14096,14336,"PasswordBasedCipher",14342,"extend",14352,"cfg",14358,"cfg",14361,"extend",14371,"kdf",14387,"encrypt",14390,14550,14428,"cfg",14431,"extend",14444,"kdf",14447,"execute",14457,"keySize",14464,"ivSize",14478,"iv",14484,"iv",14499,"encrypt",14502,"call",14520,"key",14534,"mixIn",14551,14391,14565,"decrypt",14568,14745,14603,"cfg",14606,"extend",14626,"_parse",14636,"format",14653,"kdf",14656,"execute",14666,"keySize",14673,"ivSize",14680,"salt",14694,"iv",14700,"iv",14712,"decrypt",14715,"call",14733,"key",14746,14569,14770,10552,14779,18178,14929,"lib",14932,"BlockCipher",14945,"algo",15096,256,15100,15104,15103,15173,15122,15136,15132,283,15135,15144,15172,15091,15202,256,15206,15210,15209,15722,15352,257,15364,16843008,15487,16843009,15494,65537,15502,257,15510,16843008,15615,15635,15634,15697,15721,15197,15840,"AES",15846,"extend",15856,"_doReset",15859,16620,15907,"_key",15915,"words",15928,"sigBytes",15946,"_nRounds",15973,"_keySchedule",16007,16011,16010,16366,16023,16319,16055,16181,16180,16285,16191,16194,16193,16207,16208,16211,16210,16285,16318,16341,16365,15996,16373,"_invKeySchedule",16411,16415,16414,16618,16444,16460,16459,16470,16492,16502,16503,16584,16583,16589,16617,16400,16621,15860,16641,"encryptBlock",16644,16708,16666,"_doCryptBlock",16680,"_keySchedule",16709,16645,16729,"decryptBlock",16732,16935,16825,"_doCryptBlock",16839,"_invKeySchedule",16936,16733,16956,"_doCryptBlock",16959,18120,17084,"_nRounds",17218,17222,17221,17637,17636,17207,18121,16960,18137,"keySize",18157,"AES",18163,"_createHelper",18179,14780,18188,18363,18212,18267,18271,18213,18308,18312,18311,18361,18324,4294967296,18329,"abs",18335,"sin",18360,18299,18364,18189,18375,"getckey",18378,19350,18420,"|",18427,"|",18435,"|6762f053ab|",18438,18612,18479,18483,18492,"ABCEFGIJKLMNOPQRTUVWXYZabdefgijklmnopqrstuvwxyz01234689",18503,"length",18513,"",18536,18540,18539,18605,18550,"charAt",18556,"floor",18562,"random",18604,18525,18613,18439,18623,"|",18631,"|",18639,"|",18647,"|",18655,"|",18658,18960,18700,"",18705,18723,18708,18952,18714,"null",18722,18952,18729,18706,18738,"getSystemInfoSync",18756,"s",18759,"",18765,"m",18768,"",18774,"b",18777,"",18783,"p",18786,"",18797,"s",18803,"system",18815,"m",18821,"model",18833,"b",18839,"brand",18851,"p",18857,"platform",18872,"stringify",18903,18909,18906,"",18908,18946,18914,"length",18923,18931,18930,18946,18936,"substr",18961,18659,18968,"|",18979,19162,19016,19024,19019,19154,19023,19154,19030,19017,19038,"length",19043,19047,19046,19054,19070,"length",19076,19080,19079,19153,19100,"charCodeAt",19152,19062,19163,18980,19182,"|",19205,"enc",19208,"Utf8",19211,"parse",19222,"3c0e59085a0d5d0a0a0c08080d0d05080f0b5d0d5d0b0c0b5a0904095f0d580b590905",19245,"iv",19251,"enc",19254,"Utf8",19257,"parse",19264,"a6c8ffcfc997eed196c0e1c39fcc95d5c4",19274,"mode",19280,"mode",19283,"CBC",19291,"padding",19297,"pad",19300,"Pkcs7",19315,"AES",19318,"encrypt",19335,"ciphertext",19338,"toString",19343,"toUpperCase",19351,18379]]),["undefined"==typeof define?void 0:define,"undefined"==typeof parseInt?void 0:parseInt,"undefined"==typeof String?void 0:String,"undefined"==typeof Object?void 0:Object,"undefined"==typeof Array?void 0:Array,"undefined"==typeof Error?void 0:Error,"undefined"==typeof decodeURIComponent?void 0:decodeURIComponent,"undefined"==typeof escape?void 0:escape,"undefined"==typeof unescape?void 0:unescape,"undefined"==typeof encodeURIComponent?void 0:encodeURIComponent,"undefined"==typeof Math?void 0:Math,"undefined"==typeof wx?void 0:wx,"undefined"==typeof JSON?void 0:JSON])}();w.g=function(){return w.shift()[0]}; 
 			}); 
		define("src/lib/algorithm/fillTimeStamp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(r){r=r||10;var t=""+parseInt(+new Date);if(t.length===r)return t;if(t.length>r)return t.substring(0,r);for(var e=r-t.length;e>0;)t="0"+t,e--;return t}; 
 			}); 
		define("src/lib/algorithm/qvsec.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r={};r.ha=function(r){function t(r,t){return((r>>1)+(t>>1)<<1)+(1&r)+(1&t)}for(var e=[],n=0;n<64;)e[n]=0|4294967296*Math.abs(Math.sin(++n));return function(r){for(var n=void 0,o=void 0,a=void 0,u=void 0,c=[],i=decodeURIComponent(encodeURI(r)),h=i.length,d=[n=1732584193,o=-271733879,~n,~o],f=0;f<=h;)c[f>>2]|=(i.charCodeAt(f)||128)<<f++%4*8;for(c[r=16*(h+8>>6)+14]=8*h,f=0;f<r;f+=16){for(h=d,u=0;u<64;)h=[a=h[3],t(n=h[1],(a=t(t(h[0],[n&(o=h[2])|~n&a,a&n|~a&o,n^o^a,o^(n|~a)][h=u>>4]),t(e[u],c[[u,5*u+1,3*u+5,7*u][h]%16+f])))<<(h=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*h+u++%4])|a>>>32-h),n,o];for(u=4;u;)d[--u]=t(d[u],h[u])}for(r="";u<32;)r+=(d[u>>3]>>4*(1^7&u++)&15).toString(16);return r}}(),r.stringToHex=function(r){for(var t="",e=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),n=0;n<r.length;n++)t+=e[r.charCodeAt(n)>>4]+e[15&r.charCodeAt(n)];return t},r.hexToString=function(r){for(var t="",e="0x"==r.substr(0,2)?2:0;e<r.length;e+=2)t+=String.fromCharCode(parseInt(r.substr(e,2),16));return t},r._Seed="#$#@#*ad",r.tempcalc=function(r,t){for(var e="",n=0;n<r.length;n++)e+=String.fromCharCode(r.charCodeAt(n)^t.charCodeAt(n%4));return e},r.u1=function(r,t){for(var e="",n=t;n<r.length;n+=2)e+=r.charAt(n);return e},r._urlStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r.urlenc=function(t,e,n){for(var o="",a=void 0,u=void 0,c=void 0,i=void 0,h=void 0,d=void 0,f=void 0,v=0;v<t.length;)a=t.charCodeAt(v++),u=t.charCodeAt(v++),c=t.charCodeAt(v++),15==v&&(o+="A",o+=e,o+=n),i=a>>2,h=(3&a)<<4|u>>4,d=(15&u)<<2|c>>6,f=63&c,isNaN(u)?d=f=64:isNaN(c)&&(f=64),o=o+r._urlStr.charAt(i)+r._urlStr.charAt(h)+r._urlStr.charAt(d)+r._urlStr.charAt(f);return o},r.$xx=function(t,e,n,o,a){var a=a||parseInt(+new Date/1e3);return r.ha(t+e+a+r._Seed+n+"heherand")},r.$xxzb=function(t,e,n,o,a){var a=a||parseInt(+new Date/1e3);return r.ha(e+"tmp123"+t+"#$$&c2*KA"+a)},r.$xxf=function(t,e,n,o,a){var a=a||parseInt(+new Date/1e3);return r.ha(t+"ques"+a+"*&%$(SD!L}"+e+n)},r.$xxzbf=function(t,e,n,o,a){var a=a||parseInt(+new Date/1e3);return r.ha(e+a+"*#016"+t+"zput")},module.exports=r; 
 			}); 
		define("src/lib/es6-promise.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,n){"object"===("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.ES6Promise=n()}(void 0,function(){function e(e){return"function"==typeof e||"object"===(void 0===e?"undefined":t(e))&&null!==e}function n(t){return"function"==typeof t}function r(){return void 0!==D?function(){D(i)}:o()}function o(){var t=setTimeout;return function(){return t(i,1)}}function i(){for(var t=0;t<F;t+=2)(0,G[t])(G[t+1]),G[t]=void 0,G[t+1]=void 0;F=0}function s(t,e){var n=arguments,r=this,o=new this.constructor(c);void 0===o[I]&&x(o);var i=r._state;return i?function(){var t=n[i-1];L(function(){return j(i,o,t,r._result)})}():w(r,o,t,e),o}function u(e){var n=this;if(e&&"object"===(void 0===e?"undefined":t(e))&&e.constructor===n)return e;var r=new n(c);return _(r,e),r}function c(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function a(){return new TypeError("A promises callback cannot return that same promise.")}function l(t){try{return t.then}catch(t){return V.error=t,V}}function h(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function p(t,e,n){L(function(t){var r=!1,o=h(n,e,function(n){r||(r=!0,e!==n?_(t,n):m(t,n))},function(e){r||(r=!0,b(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,b(t,o))},t)}function d(t,e){e._state===Q?m(t,e._result):e._state===R?b(t,e._result):w(e,void 0,function(e){return _(t,e)},function(e){return b(t,e)})}function v(t,e,r){e.constructor===t.constructor&&r===s&&e.constructor.resolve===u?d(t,e):r===V?b(t,V.error):void 0===r?m(t,e):n(r)?p(t,e,r):m(t,e)}function _(t,n){t===n?b(t,f()):e(n)?v(t,n,l(n)):m(t,n)}function y(t){t._onerror&&t._onerror(t._result),g(t)}function m(t,e){t._state===J&&(t._result=e,t._state=Q,0!==t._subscribers.length&&L(g,t))}function b(t,e){t._state===J&&(t._state=R,t._result=e,L(y,t))}function w(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Q]=n,o[i+R]=r,0===i&&t._state&&L(g,t)}function g(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?j(n,r,o,i):o(i);t._subscribers.length=0}}function A(){this.error=null}function S(t,e){try{return t(e)}catch(t){return X.error=t,X}}function j(t,e,r,o){var i=n(r),s=void 0,u=void 0,c=void 0,f=void 0;if(i){if((s=S(r,o))===X?(f=!0,u=s.error,s=null):c=!0,e===s)return void b(e,a())}else s=o,c=!0;e._state!==J||(i&&c?_(e,s):f?b(e,u):t===Q?m(e,s):t===R&&b(e,s))}function E(t,e){try{e(function(e){_(t,e)},function(e){b(t,e)})}catch(e){b(t,e)}}function T(){return Z++}function x(t){t[I]=Z++,t._state=void 0,t._result=void 0,t._subscribers=[]}function M(t,e){this._instanceConstructor=t,this.promise=new t(c),this.promise[I]||x(this.promise),q(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?m(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&m(this.promise,this._result))):b(this.promise,P())}function P(){return new Error("Array Methods must be provided an Array")}function C(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function O(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function k(t){this[I]=T(),this._result=this._state=void 0,this._subscribers=[],c!==t&&("function"!=typeof t&&C(),this instanceof k?E(this,t):O())}var Y=void 0,q=Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},F=0,D=void 0,K=void 0,L=function(t,e){G[F]=t,G[F+1]=e,2===(F+=2)&&(K?K(i):H())},N="undefined"!=typeof window?window:void 0,U=N||{},W=U.MutationObserver||U.WebKitMutationObserver,z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),B="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,G=new Array(1e3),H=void 0;H=z?function(){return process.nextTick(i)}:W?function(){var t=0,e=new W(i),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():B?function(){var t=new MessageChannel;return t.port1.onmessage=i,function(){return t.port2.postMessage(0)}}():void 0===N&&"function"==typeof require?function(){try{var t=require("vertx");return D=t.runOnLoop||t.runOnContext,r()}catch(t){return o()}}():o();var I=Math.random().toString(36).substring(16),J=void 0,Q=1,R=2,V=new A,X=new A,Z=0;return M.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===J&&n<t;n++)this._eachEntry(e[n],n)},M.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===u){var o=l(t);if(o===s&&t._state!==J)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===k){var i=new n(c);v(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},M.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===J&&(this._remaining--,t===R?b(r,n):this._result[e]=n),0===this._remaining&&m(r,this._result)},M.prototype._willSettleAt=function(t,e){var n=this;w(t,void 0,function(t){return n._settledAt(Q,e,t)},function(t){return n._settledAt(R,e,t)})},k.all=function(t){return new M(this,t).promise},k.race=function(t){var e=this;return new e(q(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},k.resolve=u,k.reject=function(t){var e=new this(c);return b(e,t),e},k._setScheduler=function(t){K=t},k._setAsap=function(t){L=t},k._asap=L,k.prototype={constructor:k,then:s,catch:function(t){return this.then(null,t)}},k.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=k},k.Promise=k,k.defer=function(){var t={};return t.promise=new k(function(e,n){t.resolve=e,t.reject=n}),t},k}); 
 			}); 
		define("src/lib/message.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(){this._evtObjs={},this._outdatedMsgs={}}function e(){}t.prototype.on=function(t,e,s){this._evtObjs[t]||(this._evtObjs[t]=[]),this._evtObjs[t].push({handler:e,once:s});var n=this;return function(){n.off(t,e)}},t.prototype.wait=function(t,s){return this._outdatedMsgs[t]?(s.apply(null,this._outdatedMsgs[t]),e):this.on(t,s,!0)},t.prototype.off=function(t,e){var s=this;return(t?[t]:Object.keys(this._evtObjs)).forEach(function(t){if(e){var n=[];(s._evtObjs[t]||[]).forEach(function(t){t.handler!==e&&n.push(t)}),s._evtObjs[t]=n}else s._evtObjs[t]=[]}),this},t.prototype.emit=function(t){var e=Array.prototype.slice.call(arguments,1);this._outdatedMsgs[t]=e,(this._evtObjs[t]||[]).forEach(function(t){if(!t.once||!t.called){t.called=!0;try{t.handler&&t.handler.apply(null,e)}catch(t){console.error(t.stack||t.message||t)}}})},t.prototype.emitAsync=function(){var t=arguments,e=this;setTimeout(function(){e.emit.apply(e,t)},0)},t.prototype.assign=function(t){var e=this;["on","off","wait","emit","emitAsync"].forEach(function(s){var n=e[s];t[s]=function(){return n.apply(e,arguments)}})},(new t).assign(t),module.exports=t; 
 			}); 
		define("src/lib/parse-body.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(t){if("string"!=typeof t)return t;t&&(t=t.trim()),t&&/^(data|QZOutputJson)=/.test(t)&&(t=t.replace(/^(data|QZOutputJson)=/,"").replace(/;?$/,""));try{return JSON.parse(t)}catch(t){throw new Error("parse jsonp body failed")}}; 
 			}); 
		define("src/lib/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./parse-body"),n=require("./es6-promise"),t=require("../module/log")("lib-request"),u=module.exports={request:function(n){return n.success=function(n){return n=n||function(){},function(u){if(t("wx.request success"),u&&200==u.statusCode)try{u.data=e(u.data)}catch(e){}n(u)}}(n.success),t("wx.request",n.url),wx.request(n)},get:function(e,t){return t=t||{},new n(function(n,s){(u.busRequest||u.request)({url:e,data:t.data||{},header:t.header||{},method:"GET",success:function(e){n(e)},fail:function(e){s(e)},needLoginCase:t.needLoginCase,needlogin:t.needlogin},wx.request)})},post:function(e,t){return t=t||{},new n(function(n,s){(u.busRequest||u.request)({url:e,data:t.data||{},header:t.header||{},method:"POST",success:function(e){n(e)},fail:function(e){s(e)},needLoginCase:t.needLoginCase,needlogin:t.needlogin},wx.request)})}}; 
 			}); 
		define("src/lib/url.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={queryParse:function(e,n){if(!e)return{};n=n||"&";var r=e.replace(/^\?/,""),t={},i=r?r.split(n):null;return i&&i.length>0&&i.forEach(function(e){var n=(e=e.split("=")).splice(0,1),r=e.join("=");t[n]=decodeURIComponent(r)}),t},queryJoin:function(n){var r=[].slice.call(arguments);r[0]={};var t=e.queryStringify(Object.extend.apply(Object,r));if(!t)return n;var i=void 0;return i=/[\?&]$/.test(n)?"":~n.indexOf("?")?"&":"?",n+i+t},queryStringify:function(e,n){return e?Object.keys(e).map(function(n){return n+"="+encodeURIComponent(e[n])}).join(n||"&"):""}};module.exports=e; 
 			}); 
		define("src/module/account.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n=require("../util/appids"),e=require("./system-info")(),r={canUse:function(){return!!wx.getAccountInfoSync},isInner:function(){if(r.canUse()){var c=wx.getAccountInfoSync();return!!e.isQB||!!n[c.miniProgram.appId]}return!1},getAccountInfoSync:function(){if(r.canUse())return wx.getAccountInfoSync()},canUseInner:function(){return r.canUse()&&r.isInner()}};module.exports=r; 
 			}); 
		define("src/module/cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={set:function(e,t,a){wx.setStorageSync("_cache_"+e,{expr:a||0,date:+new Date,data:t})},get:function(e){e="_cache_"+e;var t=wx.getStorageSync(e);return t?t.expr&&t.expr?new Date-(t.date+t.expr)<0?t.data:(wx.removeStorageSync(e),null):t.data:null},del:function(e){e="_cache_"+e,wx.removeStorageSync(e)}}; 
 			}); 
		define("src/module/curr-page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r=void 0;module.exports={getCurrUrl:function(e){if(!(r=e.getCurrentPages||r))return"/pages/default";var t=r();return t[t.length-1].route},getCurrPageQuery:function(e){if(!(r=e.getCurrentPages||r))return"/pages/default";var t=r();return(e=t[t.length-1].options)||{}},getCurrUrlWithQuery:function(){var r=this.getCurrPageQuery(),e=this.getCurrUrl()+"?";for(var t in r)e+=t+"="+r[t]+"&";return e=e.substring(0,e.length-1)}}; 
 			}); 
		define("src/module/gen-guid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(){return Math.random().toString(16).substring(2)}; 
 			}); 
		define("src/module/guid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./cache"),r=require("./gen-guid"),t=e.get("tvp_guid");t||(t=r(),e.set("tvp_guid",t)),module.exports=t; 
 			}); 
		define("src/module/log.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function o(a){var t=[Math.floor(50*Math.random()+200),Math.floor(50*Math.random()+150),Math.floor(50*Math.random()+100)].sort(function(){return Math.random()-.5});return t="rgb("+t[0]+", "+t[1]+", "+t[2]+")",n?function(){if(o.isOpenLog){var n=["%c【%s】%c "+a+" %c %s ","background: #ddd",new Date,"background: "+t,"background: #333;color: white"];console.log.apply(console,n.concat([].slice.call(arguments,0)))}}:function(){if(o.isOpenLog){var n=["["+a+"]",new Date];console.log.apply(console,n.concat([].slice.call(arguments,0)))}}}var n="devtools"==wx.getSystemInfoSync().platform;o.isOpenLog=!1,module.exports=o; 
 			}); 
		define("src/module/network.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={"4g":4,"3g":3,"2g":2,wifi:1};module.exports=function(t,o){wx.getNetworkType({complete:function(r){var i=(o||e)[r&&r.networkType]||0;t&&t(i)}})}; 
 			}); 
		define("src/module/reporter/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=new(require("../../lib/message")),r=require("./report-queue"),t=require("../log")("module-reporter");r.onReport=function(e){s.emit("report",e)};var o=require("./report-cache"),s={};s.any=function(e){r.push(e)},s.saveState=function(){t("reporter.js","saveState"),s.emit("_save")},s.restoreState=function(){t("reporter.js","restoreState"),s.emit("_restore")},s.checkState=function(){t("reporter.js","checkState"),o.getAll().forEach(r.push),o.del()},s.reportCache=o,e.assign(s),module.exports=s; 
 			}); 
		define("src/module/reporter/report-cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../cache"),e=require("../log")("report-cache"),r=t.get("tvp_report")||{};exports.get=function(t){return r[t]},exports.set=function(o,c){r[o]=c;try{t.set("tvp_report",r)}catch(t){e("storage error",t)}},exports.del=function(o){o?delete r[o]:r={};try{t.set("tvp_report",r)}catch(t){e("storage error",t)}},exports.getAll=function(){return Object.keys(r).map(function(t){return r[t]})}; 
 			}); 
		define("src/module/reporter/report-queue.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){function n(t){~t.reportUrl.indexOf("btrace.qq.com")?e(t.reportUrl).then(function(){o.release()}).catch(function(){o.onReport&&o.onReport(t)}):o.onReport&&o.onReport(t),c=setTimeout(function(){o.release()},r)}var r=3e3,o=void 0,u=!1,i=[],c=null;return o={release:function(e){u&&e&&e!=u||(u=!1,clearTimeout(c),i.length&&n(i.shift()))},push:function(e){u?i.push(e):(u=e,n(e))}}}(); 
 			}); 
		define("src/module/system-info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=void 0;module.exports=function(){return t=t||wx.getSystemInfoSync()}; 
 			}); 
		define("src/module/visiable.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./log")("visiable"),t=void 0;module.exports=function(o){if(!o.dom){var i=wx.createSelectorQuery().in(o);o.dom=i.select("#"+o.data.playerid)}o.dom.boundingClientRect(function(i){t=t||wx.getSystemInfoSync();var r=!0;(i.top>=t.windowHeight||i.bottom<=0)&&(e(i),r=!1),r||o.isEnterFullscreen||o._controller.pause()}).exec()}; 
 			}); 
		define("src/util/appids.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(e,c,r){return c in e?Object.defineProperty(e,c,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[c]=r,e}({wxa75efa648b60994b:!0,wxac48d234d44e23e3:!0,wxcb0c43c76ee475e9:!0,1109840991:!0},"wxac48d234d44e23e3",!0); 
 			}); 
		define("src/util/base64text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAtxtZGF0AAACvAYF//+43EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDEzNSByMjM0NSBmMGMxYzUzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxMyAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTYgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9YWJyIG1idHJlZT0xIGJpdHJhdGU9NTAgcmF0ZXRvbD0xLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAQZYiEABr//vfUt8yy8ER/gQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAA8AAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAAAoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAn/4QAZZ2QACazZX+TAWyAAAAMAIAAAAwKB4kSywAEABWjr7LIsAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAtQAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU1LjEyLjEwMg=="; 
 			}); 
		define("src/util/defn-config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,r,d){return r in e?Object.defineProperty(e,r,{value:d,enumerable:!0,configurable:!0,writable:!0}):e[r]=d,e}var r;module.exports=(r={"流畅":"msd","标清":"sd","高清":"mp4"},e(r,"高清","hd"),e(r,"超清","shd"),e(r,"蓝光","fhd"),e(r,"4K","uhd"),e(r,"杜比","dolby"),r); 
 			}); 
		define("src/util/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){e=e.split("."),t=t.split(".");for(var r=Math.max(e.length,t.length);e.length<r;)e.push("0");for(;t.length<r;)t.push("0");for(var n=0;n<r;n++){var s=parseInt(e[n]),o=parseInt(t[n]);if(s>o)return 1;if(s<o)return-1}return 0}var t=wx.getSystemInfoSync();module.exports={sysInfo:t,compareVersion:e,formatDate:function(e,t){if(!e)return"";"string"==typeof e&&(e=new Date(e.replace(/-/g,"/"))),t=t||"yyyy-MM-dd";var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(""+e.getFullYear()).substr(4-RegExp.$1.length)));for(var n in r)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[n]:("00"+r[n]).substr((""+r[n]).length)));return t},Oncer:function(e){var t=!1,r=function(){t||(t=!0,e.done=t,e.apply(this,arguments))};return r.done=t,r},isHigherVersion:function(r){return-1!=e(t.SDKVersion,r)}}; 
 			}); 
		define("src/util/platform-config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={APP_NAME:{v4170:"zhihuiwang",v4163:"xiaosongliu",v4162:"dongqiji",v4161:"egame.qq.com",v4169:"plugin",v4160:"sport.qq.com",v4159:"oddjohn",v4158:"sherrygu",v4157:"sophiachang",v4153:"yidiandian",v4152:"pvp.wx.com",v4151:"pipixia",v4150:"wechat_class",v4149:"x5.qq.com",v4148:"auto.qq.com",v4146:"wuxia.qq.com",v4145:"dnf.qq.com",v4144:"pvp.qq.com",v4143:"ke.qq.com",v4142:"qnreading",v4141:"om",v4140:"wx_reader",v4139:"news",v4138:"video",v6002:"video"},APP_PLATFORM:{v4170:"4340801",v4163:"4090801",v4162:"4120801",v4161:"3960801",v4169:"4210801",v4160:"40801",v4159:"3810801",v4158:"3710801",v4157:"3690801",v4153:"3500801",v4152:"3470801",v4151:"3450801",v4150:"3310801",v4149:"3280801",v4148:"3170801",v4146:"3140801",v4145:"3110801",v4144:"3100801",v4143:"260801",v4142:"570801",v4141:"3040801",v4140:"60801",v4139:"20801",v4138:"10801",v6002:"10001"}}; 
 			}); 
		define("src/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var t=require("./module/reporter/index"),o=require("./controller-video/index"),n=require("./controller-live/index"),i=require("./util/platform-config").APP_NAME,r=module.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},f=r.from,d=r.vsappkey,p=void 0===d?"":d,c=void 0===r.autoplay||r.autoplay,u=r.defn||"",l=r.chid||void 0,v="function"==typeof r.getReportParam?r.getReportParam:"function"==typeof r.getLoginData?function(e){r.getLoginData(function(t,o){o.hc_openid=o.openid,delete o.openid,e(t,o)})}:function(e){return e()},s=t.vid;"string"==typeof t&&(s=t);var m=t.cid||"",g=t.sid,q=t.pid,y=r.scene,h=r.qwer,P=r.cappid,S=r.env,b=r.qimei36,k=void 0;return k=s?o(e({vid:s,cid:m,from:f,chid:l,defn:u,scene:y,qwer:h,cappid:P,qimei36:b,videoInfo:a,vsappkey:p,env:S},"qimei36",b),{onBeforeGetinfo:r.onBeforeGetinfo,onAfterGetInfo:r.onAfterGetInfo,getReportParam:function(e){v(function(t,o){o&&(o.appname=i[f]),e(t,o)})}}):n({sid:g,pid:q,from:f,defn:u},{getReportParam:function(e){v(function(t,o){o&&(o.appname=i[f]),e(t,o)})}}),c&&k.start(),k};r.on=function(e){"report"==e&&(t.off("report"),t.on.apply(t,arguments))},r.release=t.release,r.saveState=t.saveState,r.restoreState=t.restoreState,r.checkState=t.checkState; 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wxa75efa648b60994b/component/live/live.js';global.__wxRouteBegin = true; 	define("component/live/live.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../../index"),e=require("../txv-context"),i=require("../../src/module/log")("txv-live-component"),n=(require("../../src/controller-live/flow-getinfo/live-detail"),require("../../src/controller-live/flow-getinfo/live-poll")),r=(require("../../src/util/index"),require("../../src/util/base64text")),o=require("./properties"),a=require("./data"),s=(require("../video/properties").objectFit,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/(iPhone)(\s?)(X|11|12|13)/)});Component({properties:o,data:a,attached:function(){var t=this;i("attached",this.data);var n=this;wx.onNetworkStatusChange(function(t){function i(){n.currPlayTime=n.data.progressTime,n.networkChange&&n.networkChange()}n.data.tvpIsAd||(n.data.playerid!=e.getLastPlayId()?n.delayNetworkChangeReq=i:i())}),wx.getSystemInfo({success:function(e){s(e.model)&&t.setData({isIpx:!0})}})},detached:function(){i("detached",this.data),e.txvDetached(this.data.playerid),clearTimeout(this.livePollTimer),this.networkChange=null,this.livePollTimer=!1},methods:{registerInterface:function(){var t=this,i=this.data.playerid;if(!i)throw new Error("需要为txv-live组件指定一个playerid，可以采用sid+pid组合形成playerid");if(!this._controller){this.videoContext=wx.createVideoContext(i,this);var n=this._controller={};["play","pause","seek","stop","playbackRate","requestFullScreen","exitFullScreen","sendDanmu"].forEach(function(e){n[e]=function(){for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];t.videoContext[e].apply(t.videoContext,n)}}),e.txvAttached(i,n),this.mountMore(n)}},mountMore:function(t){var e=this,i={hideVideo:function(){e.setData({isHiddenVideo:!0})},showVideo:function(){e.setData({isHiddenVideo:!1})},hideVideoWithVoice:function(){e.setData({isHiddenWithVoice:!0})},showVideoWithVoice:function(){e.setData({isHiddenWithVoice:!1},function(){})},showContainer:function(){e.setData({isHiddenContainer:!1})},hideContainer:function(){e.setData({isHiddenContainer:!0})},mute:function(){e.setData({muted:!0})},unmute:function(){e.setData({muted:!1})}};Object.assign(t,i)},getVideoInfo:function(){if(this.data.sid&&this.data.pid)return t({sid:this.data.sid,pid:this.data.pid},Object.assign({from:"v4169"},this.data.extraParam))},onMuteChange:function(t,e){this.triggerEvent("muted",{muted:t})},onVideoChange:function(t,e,n){var r=this.data.sid,o=this.data.pid;this.formerPid==o&&this.formerSid==r||(this.formerPid=o,this.formerSid=r,r&&o&&(this.registerInterface(),i("onVideoChange",r,o),clearTimeout(this.livePollTimer),this.livePollTimer=null,this.createPlayer()))},triggerLivePoll:function(t,e){var o=this;if(!this.isPolling)return this.isPolling=!0,n({pollDataKey:t,pollContext:e||""}).then(function(e){o.isPolling=!1,i("@@@@@@@@@@@@@@@",e),e=e&&e.data&&e.data.data,!1!==o.livePollTimer&&(o.livePollTimer=setTimeout(function(){o.triggerLivePoll(t,e.pollContext)},1e3*(e.pollTimeOut||5)));var n={onlineNumber:e.onlineNumber,likeNum:e.likeNum,popularity:e.popularity,playCount:e.playCount,attentNumber:e.attentNumber};3===e.liveStatus&&(clearTimeout(o.livePollTimer),o.livePollTimer=!1,o.triggerEvent("livestatus",{status:3,msg:"直播已结束",data:n}),o.videoContext.pause(),o.setData({getDataError:"",isAfter:!0,isBefore:!1,tvpUrl:r,autoplay:!1}))}).catch(function(i){o.isPolling=!1,!1!==o.livePollTimer&&(o.livePollTimer=setTimeout(function(){o.triggerLivePoll(t,e)},2e4))})},createPlayer:function(){var t=this;this.video=this.getVideoInfo(),this.video&&(this.networkChange=this.video.switchDefn,this.video.on("contentchange",function(e){if(t.triggerEvent("contentchange",e),e.currentContent){i("tvpUrl",e,e.currentContent);var n=e.currentContent.url,r=e.currentContent,o=r.iretcode,a=(r.errinfo,{isBefore:!1,isAfter:!1,getDataError:!1,errCode:""}),s=e.getinforaw&&e.getinforaw.data&&e.getinforaw.data.formats||[];if(a.formats=s.filter(function(t){return!t.vip}),!t.data.currentDefn){var l=e&&e.getinforaw&&e.getinforaw.data&&e.getinforaw.data.defn,d=l?s.find(function(t){return t.fn===l}):s[0];d&&(a.currentDefn=d.defnname)}0===o&&n?(a.tvpUrl=n,t.triggerEvent("livestatus",{status:2,msg:"直播中"}),!t.data.isStopPoll&&t.triggerLivePoll("pid="+t.data.pid)):7==o?(a.isBefore=!0,t.triggerEvent("livestatus",{status:1,msg:"直播未开始"})):8==o?(a.isAfter=!0,t.triggerEvent("livestatus",{status:3,msg:"直播已结束"})):(a.getDataError=!0,a.errCode=o||8888,t.triggerEvent("livestatus",{status:o,msg:"未知错误"})),t.setData(a)}}),this.video.on("error",function(e){t.triggerEvent("contenterror",e)}))},selectHD:function(t){var e=t.currentTarget.dataset;this.data.currentDefn!==e.defnname&&(this.setData({currentDefn:e.defnname,showHDSelector:!1,showControlBtn:!0}),this.video.switchDefn(e.defn))},__onTvpCloseHD:function(){this.setData({showHDSelector:!1,showControlBtn:!0})},__onTvpShowHD:function(){this.data.isControlsShow&&this.setData({showHDSelector:!0,showControlBtn:!0})},__onTvpPlay:function(t){var i=this.data.playerid,n=e.getLastPlayId();if(e.setTvpPlayState(i,!0),n!=i){if(n){var r=e.getTxvContext(n);this.data.isNeedMutex&&r&&r.pause(),e.setTvpPlayState(n,!1)}e.setLastPlayId(i)}if(this.delayNetworkChangeReq)return this.delayNetworkChangeReq(),void(this.delayNetworkChangeReq=null);try{this.video&&this.video.onContentPlay()}finally{this.triggerEvent("play",t.detail)}},__onTvpPause:function(t){e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentPause()}finally{this.triggerEvent("pause",t.detail)}},__onTvpEnded:function(t){e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentEnd()}finally{this.triggerEvent("ended",t.detail)}},__onTvpTimeupdate:function(t){e.setTvpPlayState(this.data.playerid,!0),this.triggerEvent("timeupdate",t.detail),this.video&&this.video.onContentTimeupdate(null,t)},__onTvpFullScreenChange:function(t){this.isEnterFullscreen=!!t.detail.fullScreen,this.triggerEvent("fullscreenchange",t.detail),this.setData({fullscreen:this.isEnterFullscreen})},__onTvpError:function(t){if(this.data.tvpUrl!==r){console.log("__onTvpError",this.data.tvpUrl,t),e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentError(null,t)}finally{this.triggerEvent("error",t.detail)}}},_onTvpControlstoggle:function(t){var e=t.detail.show;e!=this.data.isControlsShow&&this.setData({isControlsShow:!!e}),this.triggerEvent("controlstoggle",t&&t.detail||{})},__onTvpWaiting:function(t){this.video&&this.video.onContentWaiting()},_onEnterPictureInPicture:function(t){this.triggerEvent("enterpictureinpicture",t&&t.detail||{})},_onLeavePictureInPicture:function(t){this.triggerEvent("leavepictureinpicture",t&&t.detail||{})}}}); 
 			}); 	require("component/live/live.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wxa75efa648b60994b/component/video/video.js';global.__wxRouteBegin = true; 	define("component/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("../../src/lib/message")),e=require("../../index"),i=require("../txv-context"),n=require("../../src/module/log")("txv-video-component"),a=require("../../src/util/defn-config"),r=require("../../src/module/system-info")(),o=require("./properties"),s=require("./data"),d=wx.getStorageSync("tvp_openid");d||(d=["_",Math.random().toString(16).slice(2),Math.random().toString(16).slice(2),Math.random().toString(16).slice(2)].join("").slice(0,28),wx.setStorageSync("tvp_openid",d));var h=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/(iPhone)(\s?)(X|11|12|13)/)};Component({properties:o,data:s,attached:function(){var t=this;n("attached",this.data);var a=this;wx.onNetworkStatusChange(function(t){function e(){a.currPlayTime=a.data.progressTime,a.isNetworkChange=!0,a.networkChange&&a.networkChange()}a.data.tvpIsAd||(n("network change",a.data),"ended"!==a.data.tvpState&&(a.data.playerid!=i.getLastPlayId()?a.delayNetworkChangeReq=e:e()))}),e.on("report",function(e){t.setData({reportUrl:e.reportUrl.replace("https","http")})}),this.isIpx()},ready:function(){this.register()},moved:function(){},detached:function(){if(n("detached",this.data),this.hasContextChanged())return this._detached=!0,this._controller=null,void(this.networkChange=null);i.txvDetached(this.data.playerid),this._controller=null,this.networkChange=null,this.video.detached()},pageLifetimes:{show:function(){this.video&&this.video.onShow()},hide:function(){this.video&&this.video.onHide()}},methods:{hasContextChanged:function(t){if(!i.existTxvContext(this.data.playerid))return!0;if(this._hasContextChanged)return!0;var e=i.getTxvContext(this.data.playerid);if(e&&e.controller&&e.controller.currentContent){var a=e.controller.currentContent.url;if(this._controller&&this._controller.currentContent&&a!==this._controller.currentContent.url)return n("context has been changed",t),this._hasContextChanged=!0,!0}return!1},register:function(){this.data.isHiddenStop&&this.registerIntersectionObserver()},registerIntersectionObserver:function(){var t=this;this.createIntersectionObserver().relativeToViewport().observe("#"+this.data.playerid,function(e){var i=e.boundingClientRect;t.isEnterFullscreen||t.data.isHiddenWithVoice||!i||(i.bottom<=0||i.top>=r.windowHeight)&&t.videoContext.pause()})},registerInterface:function(){var t=this;if(!this.data.playerid)throw new Error('需要为txv-video组件指定一个playerid，如果是采用的playerid="{{playerid}}"，请加上wx:if="{{playerid}}"');if(!this._controller){this.videoContext=wx.createVideoContext(this.data.playerid,this);var e=this._controller={videoContext:this.videoContext};["play","pause","seek","playbackRate","requestFullScreen","exitFullScreen","sendDanmu"].forEach(function(i){e[i]=function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];t.videoContext[i].apply(t.videoContext,n)}}),this.mountMore(e),i.txvAttached(this.data.playerid,e),n("!!!!!!!",i)}},mountMore:function(t){var e=this,i=this,n={hideVideo:function(){i.setData({isHiddenVideo:!0})},showVideo:function(){i.setData({isHiddenVideo:!1})},hideVideoWithVoice:function(){i.setData({isHiddenWithVoice:!0})},showVideoWithVoice:function(){i.setData({isHiddenWithVoice:!1},function(){})},showContainer:function(){i.setData({isHiddenContainer:!1})},hideContainer:function(){i.setData({isHiddenContainer:!0})},controller:this.video||null,replay:function(t,i,n){i=i||e.data,n=n||e.data.videoInfo,e.start(t,i,n),setTimeout(function(){e.videoContext.play()})}};Object.assign(t,n)},skipAd:function(){this.video.onContentSkip(0),this.adSkipTimer&&(clearInterval(this.adSkipTimer),this.adSkipTimer=null)},onPlayeridChange:function(t,e){e&&i.txvDetached(e),t&&this._controller&&i.txvAttached(t,this._controller)},onVideoChange:function(t,e){""!==e&&(this.videoContext.playbackRate(1),this.setData({currentRate:1}),this.video.onSecondVideoChange());try{this._controller.pause()}catch(t){}this.start(t,this.data,this.data.videoInfo),e&&this.startAdCountdomn()},getVideoInfo:function(t,i,r){if(t)return n("denf",a[i.defn]),e(t,Object.assign({from:"v4169",defn:a[i.defn]||"",getReportParam:function(t){t(null,{hc_openid:d,hc_vuserid:d})}},i.extraParam),r)},start:function(e,a,o){var s=this;if(e){this.registerInterface();var d={tvpState:"",formattedVid:e=e.replace(/^\s+|\s+$/,""),tvpVideoError:""};this.setData(d),a=a||{},o=o||{},n("onVideoChange",e),t.default.on("adText",function(t){t&&s.setData({adJumpText:t.adJumpText||s.data.adJumpText,adCloseText:t.adCloseText||s.data.adCloseText})},!0);var h=this.video=this.getVideoInfo(e,a,o);if(h){try{var c=i.getTxvContext(this.data.playerid);c&&(c.controller=h)}catch(t){}this.networkChange=h.switchDefn,h.on("error",function(t){s.hasContextChanged("contenterror")||(s.triggerEvent("contenterror",t),s.setData({tvpVideoError:t.message+"("+(t.code||"L")+")"}))}),h.on("statechange",function(t,e){if(!s.hasContextChanged("statechange")&&(n("onstatechange",t,e),s.triggerEvent("statechange",{newstate:t,oldstate:e}),t!=s.data.tvpState)){switch(n("playerstatechange "+s.data.tvpState+" => "+t),s.data.tvpState){case"stop":break;case"error":return}s.setData({tvpState:t})}});var l=!0;h.on("contentchange",function(t){n("contentchange",t);var i=s.isSwitchDefn?1:s.isNetworkChange?2:0;if(t=t||{},t.origin=i,s.triggerEvent("contentchange",t),t.currentContent){s.data.renderError&&s.video&&s.video.reportRenderError();var a={};t.extra.isPlayingAd||(a.progressTime=0,t.progress?(a.progressDuration=t.progress.duration,a.progressBaseTime=t.progress.time,a.progressSkipTime=t.progress.skipable):(a.progressDuration=0,a.progressBaseTime=0,a.progressSkipTime=0)),a.isQB=r.isQB&&s.data.isHideQB||!1,a.tvpUrl=t.currentContent.url;var d=a.tvpIsAd=!!t.currentContent.isad;if(!d&&a.tvpUrl===s.data.tvpUrl){var c=/\?/.test(a.tvpUrl)?"&":"?";a.tvpUrl+=c+"_r="+Math.random()}if(n("tvpUrl",a.tvpUrl),-1==s.data.direction){var u=t.getinforaw&&t.getinforaw.vl&&t.getinforaw.vl.vi;u&&u.length?u.some(function(t){t.vid===e&&t.vh&&t.vw&&(a.direction=t.vh<t.vw?90:0)}):o&&o.vh&&o.vw&&(a.direction=o.vh<o.vw?90:0)}if(!d){var v=t.getinforaw&&t.getinforaw.fl&&t.getinforaw.fl.fi,p="",g="";(v=v||o&&o.vecDefn)&&v.length&&(v.forEach(function(t){t.cname.replace(/([^;]+?);\(([^)]+?)\)/,function(e,i,n){t.cname=i+" "+n,t.cname_short=i}),t.selected=t.selected||!1,p||!t.selected&&!t.sl||(p=t.resolution||"",g=t.name,t.selected=!0)}),h.currDefn=g,a.formats=v,a.formats_selected=p)}s.setData(a,function(){l||setTimeout(function(){s.videoContext.play()},200),l=!1}),s.isSwitchDefn&&(s.currPlayTime&&t.currentContent.wait("start",function(){n("seek"),s.videoContext.seek(s.currPlayTime)}),s.isSwitchDefn=!1)}else n("first content change",t)}),h.on("videostart",function(t){s.triggerEvent("videostart",t)}),h.on("contentskip",function(t){s.triggerEvent("ended",{isAd:!!s.data.tvpIsAd})})}}},startAdCountdomn:function(){var t=this,e=0;this.adSkipTimer&&(clearInterval(this.adSkipTimer),this.adSkipTimer=null),this.adSkipTimer=setInterval(function(){if(!t.isPause){t.setData({progressTime:e++});try{var a=i.getTxvContext(t.data.playerid);t.data.tvpIsAd&&t.data.progressTime+1>=a.controller.currentContent.duration&&setTimeout(function(){t.adSkipTimer&&(clearInterval(t.adSkipTimer),t.adSkipTimer=null,t.video.onContentEnd())},1e3)}catch(e){n("tvp ad skip error",e),clearInterval(t.adSkipTimer),t.adSkipTimer=null}}},1e3)},__onTvpRenderError:function(t){this.hasContextChanged(t)||(this.triggerEvent("rendererror",t.detail),this.setData({renderError:!0}))},__onTvpPlay:function(t){if(!this.hasContextChanged(t)){this.isPause?this.isPause=!1:this.data.tvpIsAd&&this.startAdCountdomn(),this.isNetworkChange&&(this.videoContext.seek(this.currPlayTime),this.isNetworkChange=!1);var e=this.data.playerid;i.setTvpPlayState(e,!0);var n=i.getLastPlayId();if(n!=e){if(n&&i.existTxvContext(n)){var a=i.getTxvContext(n);this.data.isNeedMutex&&a&&a.pause(),i.setTvpPlayState(n,!1)}i.setLastPlayId(e)}if(this.delayNetworkChangeReq)return this.delayNetworkChangeReq(),void(this.delayNetworkChangeReq=null);try{this.video&&this.video.onContentPlay()}finally{this.triggerEvent("play",t.detail)}}},__onTvpPause:function(t){if(!this.hasContextChanged(t)){this.isPause=!0,i.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentPause()}finally{this.triggerEvent("pause",t.detail)}}},__onTvpEnded:function(t){if(!this.hasContextChanged(t)){i.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentEnd()}finally{t.detail=t.detail||{},t.detail.isAd=!!this.data.tvpIsAd,this.adSkipTimer&&(clearInterval(this.adSkipTimer),this.adSkipTimer=null),this.triggerEvent("ended",t.detail)}}},__onTvpTimeupdate:function(t){if(!this.hasContextChanged(t)){i.setTvpPlayState(this.data.playerid,!0),this.triggerEvent("timeupdate",t.detail);try{this.data.tvpIsAd||this.setData({progressTime:Math.floor(t.detail.currentTime)}),this.video&&this.video.onContentTimeupdate(null,t);var e=i.getTxvContext(this.data.playerid),n=e&&e.controller&&e.controller.currentContent&&e.controller.currentContent;n&&!n.isad&&n.charged<0&&n.preview&&n.preview<t.detail.currentTime&&(e.pause(),this.__onTvpEnded({detail:{isAd:!!n.isad}}))}catch(t){}}},__onTvpError:function(t){if(!this.hasContextChanged(t)){i.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentError(null,t)}finally{this.adSkipTimer&&(clearInterval(this.adSkipTimer),this.adSkipTimer=null),this.triggerEvent("error",t.detail)}}},__onTvpFullScreenChange:function(t){this.hasContextChanged(t)||(this.isEnterFullscreen=!!t.detail.fullScreen,this.triggerEvent("fullscreenchange",t.detail),this.setData({fullscreen:this.isEnterFullscreen}))},__onTvpWaiting:function(t){if(!this.hasContextChanged(t)){try{this.video&&this.video.onContentWaiting()}catch(t){}this.triggerEvent("waiting",t&&t.detail||{})}},__onTvpProgress:function(t){this.hasContextChanged(t)||this.triggerEvent("progress",t&&t.detail||{})},_onTvpLoadedmetadata:function(t){this.hasContextChanged(t)||this.triggerEvent("loadedmetadata",t&&t.detail||{})},_onTvpSeekComplete:function(t){if(!this.hasContextChanged(t)){try{this.video&&this.video.onContentSeeked(null,t&&t.detail&&t.detail.position||0)}catch(t){}this.triggerEvent("seeked",t&&t.detail||{})}},_onTvpControlstoggle:function(t){if(!this.hasContextChanged(t)){var e=t.detail.show;e&&this.data.fullscreen&&!this.data.tvpIsAd&&"playing"===this.data.tvpState&&(this.data.extraParam.enablePlayRateChange&&this.video.reporter.reportUserAction({src:"btn",module:"playback_rate",action:"expose"}),this.video.reporter.reportUserAction({src:"btn",module:"definition",action:"expose"})),e!=this.data.isControlsShow&&this.setData({isControlsShow:!!e}),this.triggerEvent("controlstoggle",t&&t.detail||{})}},_onEnterPictureInPicture:function(t){this.hasContextChanged(t)||this.triggerEvent("enterpictureinpicture",t&&t.detail||{})},_onLeavePictureInPicture:function(t){this.hasContextChanged(t)||this.triggerEvent("leavepictureinpicture",t&&t.detail||{})},tapRetry:function(t){},isIpx:function(){var t=this;wx.getSystemInfo({success:function(e){h(e.model)&&t.setData({isIpx:!0})}})},__onTvpCloseHD:function(){var t=this;this.setData({showHDSelector:!1}),setTimeout(function(){t.setData({HDToastShow:!1})},3e3)},__onTvpShowHD:function(){!this.data.isControlsShow&&this.data.isSupportControlsToggle||(this.video.reporter.reportUserAction({src:"btn",module:"definition",action:"click"}),this.video.reporter.reportUserAction({src:"mask-btn",module:"definition",action:"expose"}),this.setData({showHDSelector:!0}))},selectHD:function(t){if("end"!=this.data.tvpState){var e=t.currentTarget.dataset;e.fname&&!e.selected&&(this.video.reporter.reportUserAction({src:"mask-btn",module:"definition",action:"click",data:e.resolution}),this.isSwitchDefn=!0,this.currPlayTime=this.data.progressTime,this.video&&this.video.switchDefn&&this.video.switchDefn(e.fname),this.setData({HDToastShow:!0,currentDefn:""+e.resolution+e.cname}))}},__onTvpShowRate:function(){this.video.reporter.reportUserAction({src:"btn",module:"playback_rate",action:"click"}),this.video.reporter.reportUserAction({src:"mask-btn",module:"playback_rate",action:"expose"}),this.data.isControlsShow&&this.setData({showRateSelector:!0})},__onTvpCloseRate:function(){var t=this;this.setData({showRateSelector:!1}),setTimeout(function(){t.setData({rateToastShow:!1})},3e3)},setPlayRate:function(t){var e=t.currentTarget.dataset;this.videoContext.playbackRate(e.rate),this.video.reporter.reportUserAction({src:"mask-btn",module:"playback_rate",action:"click",data:e.rate}),e.rate!==this.data.currentRate&&this.setData({currentRate:e.rate,rateToastShow:!0})}}}); 
 			}); 	require("component/video/video.js");
 	
				global.publishDomainComponents({
			"plugin://wxa75efa648b60994b/video":"plugin-private://wxa75efa648b60994b/component/video/video","plugin://wxa75efa648b60994b/live":"plugin-private://wxa75efa648b60994b/component/live/live"
	})
				module.exports = function() {
		return require('component/txv-context.js')
	}
			});
	requirePlugin("plugin://wxa75efa648b60994b");
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
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[2,'?:'],[[7],[3,'lockScroll']],[1,'noop'],[1,'']])
Z([3,'van-overlay custom-class'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,'; '],[[7],[3,'customStyle']]])
Z([[7],[3,'duration']])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'inited']])
Z([3,'onTransitionEnd'])
Z([a,[3,'custom-class '],[[7],[3,'classes']],[3,' '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'popup']],[[4],[[5],[[5],[[7],[3,'position']]],[[9],[[9],[[9],[[8],'round',[[7],[3,'round']]],[[8],'safe',[[7],[3,'safeAreaInsetBottom']]]],[[8],'safeTop',[[7],[3,'safeAreaInsetTop']]]],[[8],'safeTabBar',[[7],[3,'safeAreaTabBar']]]]]]]]])
Z([[12],[[6],[[7],[3,'computed']],[3,'popupStyle']],[[5],[[9],[[9],[[9],[[8],'zIndex',[[7],[3,'zIndex']]],[[8],'currentDuration',[[7],[3,'currentDuration']]]],[[8],'display',[[7],[3,'display']]]],[[8],'customStyle',[[7],[3,'customStyle']]]]]])
Z([[7],[3,'closeable']])
Z([3,'onClickCloseIcon'])
Z([a,[3,'close-icon-class van-popup__close-icon van-popup__close-icon--'],[[7],[3,'closeIconPosition']]])
Z([[7],[3,'closeIcon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./components/mp-weixin/node/node.wxml:isInline":np_0,"p_./miniprogram_npm/@vant/weapp/cell/index.wxs":np_1,"p_./miniprogram_npm/@vant/weapp/field/index.wxs":np_2,"p_./miniprogram_npm/@vant/weapp/icon/index.wxs":np_3,"p_./miniprogram_npm/@vant/weapp/popup/index.wxs":np_4,"p_./miniprogram_npm/@vant/weapp/transition/index.wxs":np_5,"p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs":np_6,"p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs":np_7,"p_./miniprogram_npm/@vant/weapp/wxs/array.wxs":np_8,"p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs":np_9,"p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs":np_10,"p_./miniprogram_npm/@vant/weapp/wxs/object.wxs":np_11,"p_./miniprogram_npm/@vant/weapp/wxs/style.wxs":np_12,"p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs":np_13,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/mp-weixin/node/node.wxml']={};
f_['./components/mp-weixin/node/node.wxml']['isInline'] =nv_require("m_./components/mp-weixin/node/node.wxml:isInline");
function np_0(){var nv_module={nv_exports:{}};var nv_e = ({nv_abbr:!0,nv_b:!0,nv_big:!0,nv_code:!0,nv_del:!0,nv_em:!0,nv_i:!0,nv_ins:!0,nv_label:!0,nv_q:!0,nv_small:!0,nv_span:!0,nv_strong:!0,nv_sub:!0,nv_sup:!0,});nv_module.nv_exports = (function (nv_n,nv_i){return(nv_e[((nt_0=(nv_n),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] || -1 !== (nv_i || "").nv_indexOf("inline"))});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/cell/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/cell/index.wxs");
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/cell/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/cell/index.wxs");
function np_1(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_titleStyle(nv_data){return(nv_style([({'nv_max-width':nv_addUnit(nv_data.nv_titleWidth),'nv_min-width':nv_addUnit(nv_data.nv_titleWidth),}),nv_data.nv_titleStyle]))};nv_module.nv_exports = ({nv_titleStyle:nv_titleStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/field/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/field/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/field/index.wxs");
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/field/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/field/index.wxs");
function np_2(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_inputStyle(nv_autosize){if (nv_autosize && nv_autosize.nv_constructor === 'Object'){return(nv_style(({'nv_min-height':nv_addUnit(nv_autosize.nv_minHeight),'nv_max-height':nv_addUnit(nv_autosize.nv_maxHeight),})))};return('')};nv_module.nv_exports = ({nv_inputStyle:nv_inputStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/field/input.wxml']={};
f_['./miniprogram_npm/@vant/weapp/field/input.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/field/input.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']={};
f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/field/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/field/index.wxs");
f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/icon/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/icon/index.wxs");
f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/icon/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/icon/index.wxs");
function np_3(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_isImage(nv_name){return(nv_name.nv_indexOf('/') !== -1)};function nv_rootClass(nv_data){var nv_classes = ['custom-class'];if (nv_data.nv_classPrefix !== 'van-icon'){nv_classes.nv_push('van-icon--custom')};if (nv_data.nv_classPrefix != null){nv_classes.nv_push(nv_data.nv_classPrefix)};if (nv_isImage(nv_data.nv_name)){nv_classes.nv_push('van-icon--image')} else if (nv_data.nv_classPrefix != null){nv_classes.nv_push(nv_data.nv_classPrefix + '-' + nv_data.nv_name)};return(nv_classes.nv_join(' '))};function nv_rootStyle(nv_data){return(nv_style([({nv_color:nv_data.nv_color,'nv_font-size':nv_addUnit(nv_data.nv_size),}),nv_data.nv_customStyle]))};nv_module.nv_exports = ({nv_isImage:nv_isImage,nv_rootClass:nv_rootClass,nv_rootStyle:nv_rootStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/info/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");
function np_4(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();function nv_popupStyle(nv_data){return(nv_style([({'nv_z-index':nv_data.nv_zIndex,'nv_-webkit-transition-duration':nv_data.nv_currentDuration + 'ms','nv_transition-duration':nv_data.nv_currentDuration + 'ms',}),nv_data.nv_display ? null:'display: none',nv_data.nv_customStyle]))};nv_module.nv_exports = ({nv_popupStyle:nv_popupStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']={};
f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/search/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/search/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/search/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/transition/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/transition/index.wxs");
f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/transition/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/transition/index.wxs");
function np_5(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();function nv_rootStyle(nv_data){return(nv_style([({'nv_-webkit-transition-duration':nv_data.nv_currentDuration + 'ms','nv_transition-duration':nv_data.nv_currentDuration + 'ms',}),nv_data.nv_display ? null:'display: none',nv_data.nv_customStyle]))};nv_module.nv_exports = ({nv_rootStyle:nv_rootStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['wxs'] =f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs");
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['wxs']();

f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs");
function np_6(){var nv_module={nv_exports:{}};var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();function nv_isActive(nv_activeList,nv_itemId){if (nv_array.nv_isArray(nv_activeList)){return(nv_activeList.nv_indexOf(nv_itemId) > -1)};return(nv_activeList === nv_itemId)};nv_module.nv_exports.nv_isActive = nv_isActive;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs");
function np_7(){var nv_module={nv_exports:{}};var nv_REGEXP = nv_getRegExp('^-?\x5cd+(\x5c.\x5cd+)?$');function nv_addUnit(nv_value){if (nv_value == null){return(undefined)};return(nv_REGEXP.nv_test('' + nv_value) ? nv_value + 'px':nv_value)};nv_module.nv_exports = nv_addUnit;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/array.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/array.wxs");
function np_8(){var nv_module={nv_exports:{}};function nv_isArray(nv_array){return(nv_array && nv_array.nv_constructor === 'Array')};nv_module.nv_exports.nv_isArray = nv_isArray;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/bem.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs");
function np_9(){var nv_module={nv_exports:{}};var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();var nv_PREFIX = 'van-';function nv_join(nv_name,nv_mods){nv_name = nv_PREFIX + nv_name;nv_mods = nv_mods.nv_map((function (nv_mod){return(nv_name + '--' + nv_mod)}));nv_mods.nv_unshift(nv_name);return(nv_mods.nv_join(' '))};function nv_traversing(nv_mods,nv_conf){if (!nv_conf){return};if (typeof nv_conf === 'string' || typeof nv_conf === 'number'){nv_mods.nv_push(nv_conf)} else if (nv_array.nv_isArray(nv_conf)){nv_conf.nv_forEach((function (nv_item){nv_traversing(nv_mods,nv_item)}))} else if (typeof nv_conf === 'object'){nv_object.nv_keys(nv_conf).nv_forEach((function (nv_key){nv_conf[((nt_0=(nv_key),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] && nv_mods.nv_push(nv_key)}))}};function nv_bem(nv_name,nv_conf){var nv_mods = [];nv_traversing(nv_mods,nv_conf);return(nv_join(nv_name,nv_mods))};nv_module.nv_exports = nv_bem;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/memoize.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs");
function np_10(){var nv_module={nv_exports:{}};function nv_isPrimitive(nv_value){var nv_type = typeof nv_value;return((nv_type === 'boolean' || nv_type === 'number' || nv_type === 'string' || nv_type === 'undefined' || nv_value === null))};function nv_call(nv_fn,nv_args){if (nv_args.nv_length === 2){return(nv_fn(nv_args[(0)],nv_args[(1)]))};if (nv_args.nv_length === 1){return(nv_fn(nv_args[(0)]))};return(nv_fn())};function nv_serializer(nv_args){if (nv_args.nv_length === 1 && nv_isPrimitive(nv_args[(0)])){return(nv_args[(0)])};var nv_obj = ({});for(var nv_i = 0;nv_i < nv_args.nv_length;nv_i++){nv_obj[((nt_5=('key' + nv_i),null==nt_5?undefined:'number'=== typeof nt_5?nt_5:"nv_"+nt_5))] = nv_args[((nt_6=(nv_i),null==nt_6?undefined:'number'=== typeof nt_6?nt_6:"nv_"+nt_6))]};return(nv_JSON.nv_stringify(nv_obj))};function nv_memoize(nv_fn){arguments.nv_length=arguments.length;var nv_cache = ({});return((function (){arguments.nv_length=arguments.length;var nv_key = nv_serializer(arguments);if (nv_cache[((nt_7=(nv_key),null==nt_7?undefined:'number'=== typeof nt_7?nt_7:"nv_"+nt_7))] === undefined){nv_cache[((nt_8=(nv_key),null==nt_8?undefined:'number'=== typeof nt_8?nt_8:"nv_"+nt_8))] = nv_call(nv_fn,arguments)};return(nv_cache[((nt_9=(nv_key),null==nt_9?undefined:'number'=== typeof nt_9?nt_9:"nv_"+nt_9))])}))};nv_module.nv_exports = nv_memoize;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/object.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/object.wxs");
function np_11(){var nv_module={nv_exports:{}};var nv_REGEXP = nv_getRegExp('{|}|\x22','g');function nv_keys(nv_obj){return(nv_JSON.nv_stringify(nv_obj).nv_replace(nv_REGEXP,'').nv_split(',').nv_map((function (nv_item){return(nv_item.nv_split(':')[(0)])})))};nv_module.nv_exports.nv_keys = nv_keys;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/style.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/style.wxs");
function np_12(){var nv_module={nv_exports:{}};var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();function nv_kebabCase(nv_word){var nv_newWord = nv_word.nv_replace(nv_getRegExp("[A-Z]",'g'),(function (nv_i){return('-' + nv_i)})).nv_toLowerCase();return(nv_newWord)};function nv_style(nv_styles){if (nv_array.nv_isArray(nv_styles)){return(nv_styles.nv_filter((function (nv_item){return(nv_item != null && nv_item !== '')})).nv_map((function (nv_item){return(nv_style(nv_item))})).nv_join(';'))};if ('Object' === nv_styles.nv_constructor){return(nv_object.nv_keys(nv_styles).nv_filter((function (nv_key){return(nv_styles[((nt_0=(nv_key),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] != null && nv_styles[((nt_1=(nv_key),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))] !== '')})).nv_map((function (nv_key){return([nv_kebabCase(nv_key),[nv_styles[((nt_2=(nv_key),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))]]].nv_join(':'))})).nv_join(';'))};return(nv_styles)};nv_module.nv_exports = nv_style;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
function np_13(){var nv_module={nv_exports:{}};var nv_bem = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs')();var nv_memoize = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();nv_module.nv_exports = ({nv_bem:nv_memoize(nv_bem),nv_memoize:nv_memoize,nv_addUnit:nv_addUnit,});return nv_module.nv_exports;}

var x=['./miniprogram_npm/@vant/weapp/field/input.wxml','./miniprogram_npm/@vant/weapp/field/textarea.wxml','./miniprogram_npm/@vant/weapp/overlay/overlay.wxml','./miniprogram_npm/@vant/weapp/popup/popup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=_mz(z,'van-transition',['bind:tap',0,'catch:touchmove',1,'customClass',1,'customStyle',2,'duration',3,'show',4],[],e,s,gg)
var fE=_n('slot')
_(oD,fE)
_(r,oD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=_v()
_(r,hG)
if(_oz(z,0,e,s,gg)){hG.wxVkey=1
var oH=_mz(z,'view',['bind:transitionend',1,'class',1,'style',2],[],e,s,gg)
var oJ=_n('slot')
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,4,e,s,gg)){cI.wxVkey=1
var lK=_mz(z,'van-icon',['bind:tap',5,'class',1,'name',2],[],e,s,gg)
_(cI,lK)
}
cI.wxXCkey=1
cI.wxXCkey=3
_(hG,oH)
}
hG.wxXCkey=1
hG.wxXCkey=3
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/field/input.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/field/input.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/field/input.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/field/input.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/field/textarea.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/field/textarea.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/field/textarea.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/field/textarea.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/overlay.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/overlay/overlay.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/overlay.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/overlay/overlay.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/popup/popup.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/popup/popup.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/popup/popup.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/popup/popup.wxml' );
	;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/Arrayincludes.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}});
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/Arrayincludes.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayLikeToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayLikeToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayWithHoles.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayWithHoles(r){if(Array.isArray(r))return r}module.exports=_arrayWithHoles;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayWithHoles.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayWithoutHoles.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _arrayWithoutHoles(r){if(Array.isArray(r))return arrayLikeToArray(r)}module.exports=_arrayWithoutHoles;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayWithoutHoles.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/asyncToGenerator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function asyncGeneratorStep(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void r(n)}i.done?e(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){asyncGeneratorStep(a,t,o,c,i,"next",n)}function i(n){asyncGeneratorStep(a,t,o,c,i,"throw",n)}c(void 0)}))}}module.exports=_asyncToGenerator;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/asyncToGenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/classCallCheck.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/classCallCheck.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createClass.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var toPropertyKey=require("./toPropertyKey");function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,toPropertyKey(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}module.exports=_createClass;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createClass.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createForOfIteratorHelper.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createForOfIteratorHelper.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/defineProperty.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var toPropertyKey=require("./toPropertyKey");function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}module.exports=_defineProperty;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/defineProperty.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/interopRequireDefault.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
module.exports=function(e){return e&&e.__esModule?e:{default:e}},module.exports.__esModule=!0,module.exports.default=module.exports;

},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/interopRequireDefault.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/iterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}module.exports=_iterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/iterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/iterableToArrayLimit.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _iterableToArrayLimit(r,e){var l=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=l){var t,n,i,a,u=[],o=!0,f=!1;try{if(i=(l=l.call(r)).next,0===e){if(Object(l)!==l)return;o=!1}else for(;!(o=(t=i.call(l)).done)&&(u.push(t.value),u.length!==e);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=l.return&&(a=l.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}module.exports=_iterableToArrayLimit;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/iterableToArrayLimit.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/nonIterableRest.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableRest;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/nonIterableRest.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/nonIterableSpread.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableSpread;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/nonIterableSpread.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/objectSpread2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/objectSpread2.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/regeneratorRuntime.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var t=require("./typeof");function r(){module.exports=r=function(){return e},module.exports.__esModule=!0,module.exports.default=module.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:E(t,e,c)}),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function d(){}function v(){}function y(){}var g={};h(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(G([])));w&&w!==n&&o.call(w,c)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function b(r,e){function n(i,a,c,u){var l=s(r[i],r,a);if("throw"!==l.type){var h=l.arg,f=h.value;return f&&"object"==t(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){h.value=t,c(h)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function E(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function _(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,_(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=h(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},L(b.prototype),h(b.prototype,u,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),h(x,l,"Generator"),h(x,c,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:G(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},e}module.exports=r,module.exports.__esModule=!0,module.exports.default=module.exports;

},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/regeneratorRuntime.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/slicedToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayWithHoles=require("./arrayWithHoles"),iterableToArrayLimit=require("./iterableToArrayLimit"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableRest=require("./nonIterableRest");function _slicedToArray(r,e){return arrayWithHoles(r)||iterableToArrayLimit(r,e)||unsupportedIterableToArray(r,e)||nonIterableRest()}module.exports=_slicedToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/slicedToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/toConsumableArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayWithoutHoles=require("./arrayWithoutHoles"),iterableToArray=require("./iterableToArray"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableSpread=require("./nonIterableSpread");function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}module.exports=_toConsumableArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/toConsumableArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/toPrimitive.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var _typeof=require("./typeof");function _toPrimitive(r,t){if("object"!==_typeof(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var i=e.call(r,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}module.exports=_toPrimitive;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/toPrimitive.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/toPropertyKey.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var _typeof=require("./typeof"),toPrimitive=require("./toPrimitive");function _toPropertyKey(r){var t=toPrimitive(r,"string");return"symbol"===_typeof(t)?t:String(t)}module.exports=_toPropertyKey;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/toPropertyKey.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/typeof.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/typeof.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/unsupportedIterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/unsupportedIterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("components/form-box/region/regionData.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports=[{name:"北京",province:"北京",subs:[{name:"东城"},{name:"西城"},{name:"朝阳"},{name:"丰台"},{name:"石景山"},{name:"海淀"},{name:"门头沟"},{name:"房山"},{name:"通州"},{name:"顺义"},{name:"昌平"},{name:"大兴"},{name:"平谷"},{name:"怀柔"},{name:"密云"},{name:"延庆"}]},{name:"天津",province:"天津",subs:[{name:"和平"},{name:"河东"},{name:"河西"},{name:"南开"},{name:"河北"},{name:"红桥"},{name:"滨海新区"},{name:"东丽"},{name:"西青"},{name:"津南"},{name:"北辰"},{name:"宁河"},{name:"武清"},{name:"静海"},{name:"宝坻"},{name:"蓟县"}]},{name:"河北",province:"河北",subs:[{name:"石家庄",subs:[{name:"长安区"},{name:"桥东区"},{name:"桥西区"},{name:"新华区"},{name:"井陉矿区"},{name:"裕华区"},{name:"井陉县"},{name:"正定县"},{name:"栾城县"},{name:"行唐县"},{name:"灵寿县"},{name:"高邑县"},{name:"深泽县"},{name:"赞皇县"},{name:"无极县"},{name:"平山县"},{name:"元氏县"},{name:"赵县"},{name:"辛集市"},{name:"藁城市"},{name:"晋州市"},{name:"新乐市"},{name:"鹿泉市"}]},{name:"唐山",subs:[{name:"路南区"},{name:"路北区"},{name:"古冶区"},{name:"开平区"},{name:"丰南区"},{name:"丰润区"},{name:"曹妃甸区"},{name:"滦　县"},{name:"滦南县"},{name:"乐亭县"},{name:"迁西县"},{name:"玉田县"},{name:"遵化市"},{name:"迁安市"}]},{name:"秦皇岛",subs:[{name:"海港区"},{name:"山海关区"},{name:"北戴河区"},{name:"青龙满族自治县"},{name:"昌黎县"},{name:"抚宁县"},{name:"卢龙县"}]},{name:"邯郸",subs:[{name:"邯山区"},{name:"丛台区"},{name:"复兴区"},{name:"峰峰矿区"},{name:"邯郸县"},{name:"临漳县"},{name:"成安县"},{name:"大名县"},{name:"涉　县"},{name:"磁　县"},{name:"肥乡县"},{name:"永年县"},{name:"邱　县"},{name:"鸡泽县"},{name:"广平县"},{name:"馆陶县"},{name:"魏　县"},{name:"曲周县"},{name:"武安市"}]},{name:"邢台",subs:[{name:"桥东区"},{name:"桥西区"},{name:"邢台县"},{name:"临城县"},{name:"内丘县"},{name:"柏乡县"},{name:"隆尧县"},{name:"任　县"},{name:"南和县"},{name:"宁晋县"},{name:"巨鹿县"},{name:"新河县"},{name:"广宗县"},{name:"平乡县"},{name:"威　县"},{name:"清河县"},{name:"临西县"},{name:"南宫市"},{name:"沙河市"}]},{name:"保定",subs:[{name:"新市区"},{name:"北市区"},{name:"南市区"},{name:"满城县"},{name:"清苑县"},{name:"涞水县"},{name:"阜平县"},{name:"徐水县"},{name:"定兴县"},{name:"唐　县"},{name:"高阳县"},{name:"容城县"},{name:"涞源县"},{name:"望都县"},{name:"安新县"},{name:"易　县"},{name:"曲阳县"},{name:"蠡　县"},{name:"顺平县"},{name:"博野县"},{name:"雄　县"},{name:"涿州市"},{name:"定州市"},{name:"安国市"},{name:"高碑店市"}]},{name:"张家口",subs:[{name:"桥东区"},{name:"桥西区"},{name:"宣化区"},{name:"下花园区"},{name:"宣化县"},{name:"张北县"},{name:"康保县"},{name:"沽源县"},{name:"尚义县"},{name:"蔚　县"},{name:"阳原县"},{name:"怀安县"},{name:"万全县"},{name:"怀来县"},{name:"涿鹿县"},{name:"赤城县"},{name:"崇礼县"}]},{name:"承德",subs:[{name:"双桥区"},{name:"双滦区"},{name:"鹰手营子矿区"},{name:"承德县"},{name:"兴隆县"},{name:"平泉县"},{name:"滦平县"},{name:"隆化县"},{name:"丰宁满族自治县"},{name:"宽城满族自治县"},{name:"围场满族蒙古族自治县"}]},{name:"沧州",subs:[{name:"新华区"},{name:"运河区"},{name:"沧　县"},{name:"青　县"},{name:"东光县"},{name:"海兴县"},{name:"盐山县"},{name:"肃宁县"},{name:"南皮县"},{name:"吴桥县"},{name:"献　县"},{name:"孟村回族自治县"},{name:"泊头市"},{name:"任丘市"},{name:"黄骅市"},{name:"河间市"}]},{name:"廊坊",subs:[{name:"安次区"},{name:"广阳区"},{name:"固安县"},{name:"永清县"},{name:"香河县"},{name:"大城县"},{name:"文安县"},{name:"大厂回族自治县"},{name:"霸州市"},{name:"三河市"}]},{name:"衡水",subs:[{name:"桃城区"},{name:"枣强县"},{name:"武邑县"},{name:"武强县"},{name:"饶阳县"},{name:"安平县"},{name:"故城县"},{name:"景　县"},{name:"阜城县"},{name:"冀州市"},{name:"深州市"}]}]},{name:"山西",province:"山西",subs:[{name:"太原",subs:[{name:"小店区"},{name:"迎泽区"},{name:"杏花岭区"},{name:"尖草坪区"},{name:"万柏林区"},{name:"晋源区"},{name:"清徐县"},{name:"阳曲县"},{name:"娄烦县"},{name:"古交市"}]},{name:"大同",subs:[{name:"城　区"},{name:"矿　区"},{name:"南郊区"},{name:"新荣区"},{name:"阳高县"},{name:"天镇县"},{name:"广灵县"},{name:"灵丘县"},{name:"浑源县"},{name:"左云县"},{name:"大同县"}]},{name:"阳泉",subs:[{name:"城　区"},{name:"矿　区"},{name:"郊　区"},{name:"平定县"},{name:"盂　县"}]},{name:"长治",subs:[{name:"城　区"},{name:"郊　区"},{name:"长治县"},{name:"襄垣县"},{name:"屯留县"},{name:"平顺县"},{name:"黎城县"},{name:"壶关县"},{name:"长子县"},{name:"武乡县"},{name:"沁　县"},{name:"沁源县"},{name:"潞城市"}]},{name:"晋城",subs:[{name:"城　区"},{name:"沁水县"},{name:"阳城县"},{name:"陵川县"},{name:"泽州县"},{name:"高平市"}]},{name:"朔州",subs:[{name:"朔城区"},{name:"平鲁区"},{name:"山阴县"},{name:"应　县"},{name:"右玉县"},{name:"怀仁县"}]},{name:"晋中",subs:[{name:"榆次区"},{name:"榆社县"},{name:"左权县"},{name:"和顺县"},{name:"昔阳县"},{name:"寿阳县"},{name:"太谷县"},{name:"祁　县"},{name:"平遥县"},{name:"灵石县"},{name:"介休市"}]},{name:"运城",subs:[{name:"盐湖区"},{name:"临猗县"},{name:"万荣县"},{name:"闻喜县"},{name:"稷山县"},{name:"新绛县"},{name:"绛　县"},{name:"垣曲县"},{name:"夏　县"},{name:"平陆县"},{name:"芮城县"},{name:"永济市"},{name:"河津市"}]},{name:"忻州",subs:[{name:"忻府区"},{name:"定襄县"},{name:"五台县"},{name:"代　县"},{name:"繁峙县"},{name:"宁武县"},{name:"静乐县"},{name:"神池县"},{name:"五寨县"},{name:"岢岚县"},{name:"河曲县"},{name:"保德县"},{name:"偏关县"},{name:"原平市"}]},{name:"临汾",subs:[{name:"尧都区"},{name:"曲沃县"},{name:"翼城县"},{name:"襄汾县"},{name:"洪洞县"},{name:"古　县"},{name:"安泽县"},{name:"浮山县"},{name:"吉　县"},{name:"乡宁县"},{name:"大宁县"},{name:"隰　县"},{name:"永和县"},{name:"蒲　县"},{name:"汾西县"},{name:"侯马市"},{name:"霍州市"}]},{name:"吕梁",subs:[{name:"离石区"},{name:"文水县"},{name:"交城县"},{name:"兴　县"},{name:"临　县"},{name:"柳林县"},{name:"石楼县"},{name:"岚　县"},{name:"方山县"},{name:"中阳县"},{name:"交口县"},{name:"孝义市"},{name:"汾阳市"}]}]},{name:"内蒙古",province:"内蒙古",subs:[{name:"呼和浩特",subs:[{name:"新城区"},{name:"回民区"},{name:"玉泉区"},{name:"赛罕区"},{name:"土默特左旗"},{name:"托克托县"},{name:"和林格尔县"},{name:"清水河县"},{name:"武川县"}]},{name:"包头",subs:[{name:"东河区"},{name:"昆都仑区"},{name:"青山区"},{name:"石拐区"},{name:"白云鄂博矿区"},{name:"九原区"},{name:"土默特右旗"},{name:"固阳县"},{name:"达尔罕茂明安联合旗"}]},{name:"乌海",subs:[{name:"海勃湾区"},{name:"海南区"},{name:"乌达区"}]},{name:"赤峰",subs:[{name:"红山区"},{name:"元宝山区"},{name:"松山区"},{name:"阿鲁科尔沁旗"},{name:"巴林左旗"},{name:"巴林右旗"},{name:"林西县"},{name:"克什克腾旗"},{name:"翁牛特旗"},{name:"喀喇沁旗"},{name:"宁城县"},{name:"敖汉旗"}]},{name:"通辽",subs:[{name:"科尔沁区"},{name:"科尔沁左翼中旗"},{name:"科尔沁左翼后旗"},{name:"开鲁县"},{name:"库伦旗"},{name:"奈曼旗"},{name:"扎鲁特旗"},{name:"霍林郭勒市"}]},{name:"鄂尔多斯",subs:[{name:"东胜区"},{name:"达拉特旗"},{name:"准格尔旗"},{name:"鄂托克前旗"},{name:"鄂托克旗"},{name:"杭锦旗"},{name:"乌审旗"},{name:"伊金霍洛旗"}]},{name:"呼伦贝尔",subs:[{name:"海拉尔区"},{name:"阿荣旗"},{name:"莫力达瓦达斡尔族自治旗"},{name:"鄂伦春自治旗"},{name:"鄂温克族自治旗"},{name:"陈巴尔虎旗"},{name:"新巴尔虎左旗"},{name:"新巴尔虎右旗"},{name:"满洲里市"},{name:"牙克石市"},{name:"扎兰屯市"},{name:"额尔古纳市"},{name:"根河市"}]},{name:"巴彦淖尔",subs:[{name:"临河区"},{name:"五原县"},{name:"磴口县"},{name:"乌拉特前旗"},{name:"乌拉特中旗"},{name:"乌拉特后旗"},{name:"杭锦后旗"}]},{name:"乌兰察布",subs:[{name:"集宁区"},{name:"卓资县"},{name:"化德县"},{name:"商都县"},{name:"兴和县"},{name:"凉城县"},{name:"察哈尔右翼前旗"},{name:"察哈尔右翼中旗"},{name:"察哈尔右翼后旗"},{name:"四子王旗"},{name:"丰镇市"}]},{name:"兴安",subs:[{name:"乌兰浩特市"},{name:"阿尔山市"},{name:"科尔沁右翼前旗"},{name:"科尔沁右翼中旗"},{name:"扎赉特旗"},{name:"突泉县"}]},{name:"锡林郭勒",subs:[{name:"二连浩特市"},{name:"锡林浩特市"},{name:"阿巴嘎旗"},{name:"苏尼特左旗"},{name:"苏尼特右旗"},{name:"东乌珠穆沁旗"},{name:"西乌珠穆沁旗"},{name:"太仆寺旗"},{name:"镶黄旗"},{name:"正镶白旗"},{name:"正蓝旗"},{name:"多伦县"}]},{name:"阿拉善",subs:[{name:"阿拉善左旗"},{name:"阿拉善右旗"},{name:"额济纳旗"}]}]},{name:"辽宁",province:"辽宁",subs:[{name:"沈阳",subs:[{name:"和平区"},{name:"沈河区"},{name:"大东区"},{name:"皇姑区"},{name:"铁西区"},{name:"苏家屯区"},{name:"东陵区"},{name:"沈北新区"},{name:"于洪区"},{name:"辽中县"},{name:"康平县"},{name:"法库县"},{name:"新民市"}]},{name:"大连",subs:[{name:"中山区"},{name:"西岗区"},{name:"沙河口区"},{name:"甘井子区"},{name:"旅顺口区"},{name:"金州区"},{name:"长海县"},{name:"瓦房店市"},{name:"普兰店市"},{name:"庄河市"}]},{name:"鞍山",subs:[{name:"铁东区"},{name:"铁西区"},{name:"立山区"},{name:"千山区"},{name:"台安县"},{name:"岫岩满族自治县"},{name:"海城市"}]},{name:"抚顺",subs:[{name:"新抚区"},{name:"东洲区"},{name:"望花区"},{name:"顺城区"},{name:"抚顺县"},{name:"新宾满族自治县"},{name:"清原满族自治县"}]},{name:"本溪",subs:[{name:"平山区"},{name:"溪湖区"},{name:"明山区"},{name:"南芬区"},{name:"本溪满族自治县"},{name:"桓仁满族自治县"}]},{name:"丹东",subs:[{name:"元宝区"},{name:"振兴区"},{name:"振安区"},{name:"宽甸满族自治县"},{name:"东港市"},{name:"凤城市"}]},{name:"锦州",subs:[{name:"古塔区"},{name:"凌河区"},{name:"太和区"},{name:"黑山县"},{name:"义　县"},{name:"凌海市"},{name:"北镇市"}]},{name:"营口",subs:[{name:"站前区"},{name:"西市区"},{name:"鲅鱼圈区"},{name:"老边区"},{name:"盖州市"},{name:"大石桥市"}]},{name:"阜新",subs:[{name:"海州区"},{name:"新邱区"},{name:"太平区"},{name:"清河门区"},{name:"细河区"},{name:"阜新蒙古族自治县"},{name:"彰武县"}]},{name:"辽阳",subs:[{name:"白塔区"},{name:"文圣区"},{name:"宏伟区"},{name:"弓长岭区"},{name:"太子河区"},{name:"辽阳县"},{name:"灯塔市"}]},{name:"盘锦",subs:[{name:"双台子区"},{name:"兴隆台区"},{name:"大洼县"},{name:"盘山县"}]},{name:"铁岭",subs:[{name:"银州区"},{name:"清河区"},{name:"铁岭县"},{name:"西丰县"},{name:"昌图县"},{name:"调兵山市"},{name:"开原市"}]},{name:"朝阳",subs:[{name:"双塔区"},{name:"龙城区"},{name:"朝阳县"},{name:"建平县"},{name:"喀喇沁左翼蒙古族自治县"},{name:"北票市"},{name:"凌源市"}]},{name:"葫芦岛",subs:[{name:"连山区"},{name:"龙港区"},{name:"南票区"},{name:"绥中县"},{name:"建昌县"},{name:"兴城市"}]}]},{name:"吉林",province:"吉林",subs:[{name:"长春",subs:[{name:"南关区"},{name:"宽城区"},{name:"朝阳区"},{name:"二道区"},{name:"绿园区"},{name:"双阳区"},{name:"农安县"},{name:"九台市"},{name:"榆树市"},{name:"德惠市"}]},{name:"吉林",subs:[{name:"昌邑区"},{name:"龙潭区"},{name:"船营区"},{name:"丰满区"},{name:"永吉县"},{name:"蛟河市"},{name:"桦甸市"},{name:"舒兰市"},{name:"磐石市"}]},{name:"四平",subs:[{name:"铁西区"},{name:"铁东区"},{name:"梨树县"},{name:"伊通满族自治县"},{name:"公主岭市"},{name:"双辽市"}]},{name:"辽源",subs:[{name:"龙山区"},{name:"西安区"},{name:"东丰县"},{name:"东辽县"}]},{name:"通化",subs:[{name:"东昌区"},{name:"二道江区"},{name:"通化县"},{name:"辉南县"},{name:"柳河县"},{name:"梅河口市"},{name:"集安市"}]},{name:"白山",subs:[{name:"八道江区"},{name:"江源区"},{name:"抚松县"},{name:"靖宇县"},{name:"长白朝鲜族自治县"},{name:"临江市"}]},{name:"松原",subs:[{name:"宁江区"},{name:"前郭尔罗斯蒙古族自治县"},{name:"长岭县"},{name:"乾安县"},{name:"扶余县"}]},{name:"白城",subs:[{name:"洮北区"},{name:"镇赉县"},{name:"通榆县"},{name:"洮南市"},{name:"大安市"}]},{name:"延边",subs:[{name:"延吉市"},{name:"图们市"},{name:"敦化市"},{name:"珲春市"},{name:"龙井市"},{name:"和龙市"},{name:"汪清县"},{name:"安图县"}]}]},{name:"黑龙江",province:"黑龙江",subs:[{name:"哈尔滨",subs:[{name:"道里区"},{name:"南岗区"},{name:"道外区"},{name:"平房区"},{name:"松北区"},{name:"香坊区"},{name:"呼兰区"},{name:"阿城区"},{name:"依兰县"},{name:"方正县"},{name:"宾　县"},{name:"巴彦县"},{name:"木兰县"},{name:"通河县"},{name:"延寿县"},{name:"双城市"},{name:"尚志市"},{name:"五常市"}]},{name:"齐齐哈尔",subs:[{name:"龙沙区"},{name:"建华区"},{name:"铁锋区"},{name:"昂昂溪区"},{name:"富拉尔基区"},{name:"碾子山区"},{name:"梅里斯达斡尔族区"},{name:"龙江县"},{name:"依安县"},{name:"泰来县"},{name:"甘南县"},{name:"富裕县"},{name:"克山县"},{name:"克东县"},{name:"拜泉县"},{name:"讷河市"}]},{name:"鸡西",subs:[{name:"鸡冠区"},{name:"恒山区"},{name:"滴道区"},{name:"梨树区"},{name:"城子河区"},{name:"麻山区"},{name:"鸡东县"},{name:"虎林市"},{name:"密山市"}]},{name:"鹤岗",subs:[{name:"向阳区"},{name:"工农区"},{name:"南山区"},{name:"兴安区"},{name:"东山区"},{name:"兴山区"},{name:"萝北县"},{name:"绥滨县"}]},{name:"双鸭山",subs:[{name:"尖山区"},{name:"岭东区"},{name:"四方台区"},{name:"宝山区"},{name:"集贤县"},{name:"友谊县"},{name:"宝清县"},{name:"饶河县"}]},{name:"大庆",subs:[{name:"萨尔图区"},{name:"龙凤区"},{name:"让胡路区"},{name:"红岗区"},{name:"大同区"},{name:"肇州县"},{name:"肇源县"},{name:"林甸县"},{name:"杜尔伯特蒙古族自治县"}]},{name:"伊春",subs:[{name:"伊春区"},{name:"南岔区"},{name:"友好区"},{name:"西林区"},{name:"翠峦区"},{name:"新青区"},{name:"美溪区"},{name:"金山屯区"},{name:"五营区"},{name:"乌马河区"},{name:"汤旺河区"},{name:"带岭区"},{name:"乌伊岭区"},{name:"红星区"},{name:"上甘岭区"},{name:"嘉荫县"},{name:"铁力市"}]},{name:"佳木斯",subs:[{name:"向阳区"},{name:"前进区"},{name:"东风区"},{name:"郊　区"},{name:"桦南县"},{name:"桦川县"},{name:"汤原县"},{name:"抚远县"},{name:"同江市"},{name:"富锦市"}]},{name:"七台河",subs:[{name:"新兴区"},{name:"桃山区"},{name:"茄子河区"},{name:"勃利县"}]},{name:"牡丹江",subs:[{name:"东安区"},{name:"阳明区"},{name:"爱民区"},{name:"西安区"},{name:"东宁县"},{name:"林口县"},{name:"绥芬河市"},{name:"海林市"},{name:"宁安市"},{name:"穆棱市"}]},{name:"黑河",subs:[{name:"爱辉区"},{name:"嫩江县"},{name:"逊克县"},{name:"孙吴县"},{name:"北安市"},{name:"五大连池市"}]},{name:"绥化",subs:[{name:"北林区"},{name:"望奎县"},{name:"兰西县"},{name:"青冈县"},{name:"庆安县"},{name:"明水县"},{name:"绥棱县"},{name:"安达市"},{name:"肇东市"},{name:"海伦市"}]},{name:"大兴安岭",subs:[{name:"呼玛县"},{name:"塔河县"},{name:"漠河县"}]}]},{name:"上海",province:"上海",subs:[{name:"黄浦"},{name:"卢湾"},{name:"徐汇"},{name:"长宁"},{name:"静安"},{name:"普陀"},{name:"闸北"},{name:"虹口"},{name:"杨浦"},{name:"闵行"},{name:"宝山"},{name:"嘉定"},{name:"浦东新区"},{name:"金山"},{name:"松江"},{name:"奉贤"},{name:"青浦"},{name:"崇明"}]},{name:"江苏",province:"江苏",subs:[{name:"南京",subs:[{name:"玄武区"},{name:"白下区"},{name:"秦淮区"},{name:"建邺区"},{name:"鼓楼区"},{name:"下关区"},{name:"浦口区"},{name:"栖霞区"},{name:"雨花台区"},{name:"江宁区"},{name:"六合区"},{name:"溧水县"},{name:"高淳县"}]},{name:"无锡",subs:[{name:"崇安区"},{name:"南长区"},{name:"北塘区"},{name:"锡山区"},{name:"惠山区"},{name:"滨湖区"},{name:"江阴市"},{name:"宜兴市"}]},{name:"徐州",subs:[{name:"鼓楼区"},{name:"云龙区"},{name:"九里区"},{name:"贾汪区"},{name:"泉山区"},{name:"丰　县"},{name:"沛　县"},{name:"铜山县"},{name:"睢宁县"},{name:"新沂市"},{name:"邳州市"}]},{name:"常州",subs:[{name:"天宁区"},{name:"钟楼区"},{name:"戚墅堰区"},{name:"新北区"},{name:"武进区"},{name:"溧阳市"},{name:"金坛市"}]},{name:"苏州",subs:[{name:"姑苏区"},{name:"虎丘区"},{name:"吴中区"},{name:"相城区"},{name:"吴江区"},{name:"常熟市"},{name:"张家港市"},{name:"昆山市"},{name:"太仓市"}]},{name:"南通",subs:[{name:"崇川区"},{name:"港闸区"},{name:"海安县"},{name:"如东县"},{name:"启东市"},{name:"如皋市"},{name:"通州市"},{name:"海门市"}]},{name:"连云港",subs:[{name:"连云区"},{name:"新浦区"},{name:"海州区"},{name:"赣榆县"},{name:"东海县"},{name:"灌云县"},{name:"灌南县"}]},{name:"淮安",subs:[{name:"清河区"},{name:"淮安区"},{name:"淮阴区"},{name:"清浦区"},{name:"涟水县"},{name:"洪泽县"},{name:"盱眙县"},{name:"金湖县"}]},{name:"盐城",subs:[{name:"亭湖区"},{name:"盐都区"},{name:"响水县"},{name:"滨海县"},{name:"阜宁县"},{name:"射阳县"},{name:"建湖县"},{name:"东台市"},{name:"大丰市"}]},{name:"扬州",subs:[{name:"广陵区"},{name:"邗江区"},{name:"维扬区"},{name:"宝应县"},{name:"仪征市"},{name:"高邮市"},{name:"江都市"}]},{name:"镇江",subs:[{name:"京口区"},{name:"润州区"},{name:"丹徒区"},{name:"丹阳市"},{name:"扬中市"},{name:"句容市"}]},{name:"泰州",subs:[{name:"海陵区"},{name:"高港区"},{name:"兴化市"},{name:"靖江市"},{name:"泰兴市"},{name:"姜堰市"}]},{name:"宿迁",subs:[{name:"宿城区"},{name:"宿豫区"},{name:"沭阳县"},{name:"泗阳县"},{name:"泗洪县"}]}]},{name:"浙江",province:"浙江",subs:[{name:"杭州",subs:[{name:"上城区"},{name:"下城区"},{name:"江干区"},{name:"拱墅区"},{name:"西湖区"},{name:"滨江区"},{name:"萧山区"},{name:"余杭区"},{name:"桐庐县"},{name:"淳安县"},{name:"建德市"},{name:"富阳市"},{name:"临安市"}]},{name:"宁波",subs:[{name:"海曙区"},{name:"江东区"},{name:"江北区"},{name:"北仑区"},{name:"镇海区"},{name:"鄞州区"},{name:"象山县"},{name:"宁海县"},{name:"余姚市"},{name:"慈溪市"},{name:"奉化市"}]},{name:"温州",subs:[{name:"鹿城区"},{name:"龙湾区"},{name:"瓯海区"},{name:"洞头县"},{name:"永嘉县"},{name:"平阳县"},{name:"苍南县"},{name:"文成县"},{name:"泰顺县"},{name:"瑞安市"},{name:"乐清市"}]},{name:"嘉兴",subs:[{name:"南湖区"},{name:"秀洲区"},{name:"嘉善县"},{name:"海盐县"},{name:"海宁市"},{name:"平湖市"},{name:"桐乡市"}]},{name:"湖州",subs:[{name:"吴兴区"},{name:"南浔区"},{name:"德清县"},{name:"长兴县"},{name:"安吉县"}]},{name:"绍兴",subs:[{name:"越城区"},{name:"绍兴县"},{name:"新昌县"},{name:"诸暨市"},{name:"上虞市"},{name:"嵊州市"}]},{name:"金华",subs:[{name:"婺城区"},{name:"金东区"},{name:"武义县"},{name:"浦江县"},{name:"磐安县"},{name:"兰溪市"},{name:"义乌市"},{name:"东阳市"},{name:"永康市"}]},{name:"衢州",subs:[{name:"柯城区"},{name:"衢江区"},{name:"常山县"},{name:"开化县"},{name:"龙游县"},{name:"江山市"}]},{name:"舟山",subs:[{name:"定海区"},{name:"普陀区"},{name:"岱山县"},{name:"嵊泗县"}]},{name:"台州",subs:[{name:"椒江区"},{name:"黄岩区"},{name:"路桥区"},{name:"玉环县"},{name:"三门县"},{name:"天台县"},{name:"仙居县"},{name:"温岭市"},{name:"临海市"}]},{name:"丽水",subs:[{name:"莲都区"},{name:"青田县"},{name:"缙云县"},{name:"遂昌县"},{name:"松阳县"},{name:"云和县"},{name:"庆元县"},{name:"景宁畲族自治县"},{name:"龙泉市"}]}]},{name:"安徽",province:"安徽",subs:[{name:"合肥",subs:[{name:"瑶海区"},{name:"庐阳区"},{name:"蜀山区"},{name:"包河区"},{name:"长丰县"},{name:"肥东县"},{name:"肥西县"},{name:"庐江县"},{name:"巢湖市"}]},{name:"芜湖",subs:[{name:"镜湖区"},{name:"弋江区"},{name:"鸠江区"},{name:"三山区"},{name:"芜湖县"},{name:"繁昌县"},{name:"南陵县"},{name:"无为县"}]},{name:"蚌埠",subs:[{name:"龙子湖区"},{name:"蚌山区"},{name:"禹会区"},{name:"淮上区"},{name:"怀远县"},{name:"五河县"},{name:"固镇县"}]},{name:"淮南",subs:[{name:"大通区"},{name:"田家庵区"},{name:"谢家集区"},{name:"八公山区"},{name:"潘集区"},{name:"凤台县"}]},{name:"马鞍山",subs:[{name:"花山区"},{name:"雨山区"},{name:"博望区"},{name:"当涂县"},{name:"含山县"},{name:"和县"}]},{name:"淮北",subs:[{name:"杜集区"},{name:"相山区"},{name:"烈山区"},{name:"濉溪县"}]},{name:"铜陵",subs:[{name:"铜官山区"},{name:"狮子山区"},{name:"郊　区"},{name:"铜陵县"}]},{name:"安庆",subs:[{name:"迎江区"},{name:"大观区"},{name:"宜秀区"},{name:"怀宁县"},{name:"枞阳县"},{name:"潜山县"},{name:"太湖县"},{name:"宿松县"},{name:"望江县"},{name:"岳西县"},{name:"桐城市"}]},{name:"黄山",subs:[{name:"屯溪区"},{name:"黄山区"},{name:"徽州区"},{name:"歙　县"},{name:"休宁县"},{name:"黟　县"},{name:"祁门县"}]},{name:"滁州",subs:[{name:"琅琊区"},{name:"南谯区"},{name:"来安县"},{name:"全椒县"},{name:"定远县"},{name:"凤阳县"},{name:"天长市"},{name:"明光市"}]},{name:"阜阳",subs:[{name:"颍州区"},{name:"颍东区"},{name:"颍泉区"},{name:"临泉县"},{name:"太和县"},{name:"阜南县"},{name:"颍上县"},{name:"界首市"}]},{name:"宿州",subs:[{name:"埇桥区"},{name:"砀山县"},{name:"萧　县"},{name:"灵璧县"},{name:"泗　县"}]},{name:"六安",subs:[{name:"金安区"},{name:"裕安区"},{name:"寿　县"},{name:"霍邱县"},{name:"舒城县"},{name:"金寨县"},{name:"霍山县"}]},{name:"亳州",subs:[{name:"谯城区"},{name:"涡阳县"},{name:"蒙城县"},{name:"利辛县"}]},{name:"池州",subs:[{name:"贵池区"},{name:"东至县"},{name:"石台县"},{name:"青阳县"}]},{name:"宣城",subs:[{name:"宣州区"},{name:"郎溪县"},{name:"广德县"},{name:"泾　县"},{name:"绩溪县"},{name:"旌德县"},{name:"宁国市"}]}]},{name:"福建",province:"福建",subs:[{name:"福州",subs:[{name:"鼓楼区"},{name:"台江区"},{name:"仓山区"},{name:"马尾区"},{name:"晋安区"},{name:"闽侯县"},{name:"连江县"},{name:"罗源县"},{name:"闽清县"},{name:"永泰县"},{name:"平潭县"},{name:"福清市"},{name:"长乐市"}]},{name:"厦门",subs:[{name:"思明区"},{name:"海沧区"},{name:"湖里区"},{name:"集美区"},{name:"同安区"},{name:"翔安区"}]},{name:"莆田",subs:[{name:"城厢区"},{name:"涵江区"},{name:"荔城区"},{name:"秀屿区"},{name:"仙游县"}]},{name:"三明",subs:[{name:"梅列区"},{name:"三元区"},{name:"明溪县"},{name:"清流县"},{name:"宁化县"},{name:"大田县"},{name:"尤溪县"},{name:"沙　县"},{name:"将乐县"},{name:"泰宁县"},{name:"建宁县"},{name:"永安市"}]},{name:"泉州",subs:[{name:"鲤城区"},{name:"丰泽区"},{name:"洛江区"},{name:"泉港区"},{name:"惠安县"},{name:"安溪县"},{name:"永春县"},{name:"德化县"},{name:"金门县"},{name:"石狮市"},{name:"晋江市"},{name:"南安市"}]},{name:"漳州",subs:[{name:"芗城区"},{name:"龙文区"},{name:"云霄县"},{name:"漳浦县"},{name:"诏安县"},{name:"长泰县"},{name:"东山县"},{name:"南靖县"},{name:"平和县"},{name:"华安县"},{name:"龙海市"}]},{name:"南平",subs:[{name:"延平区"},{name:"顺昌县"},{name:"浦城县"},{name:"光泽县"},{name:"松溪县"},{name:"政和县"},{name:"邵武市"},{name:"武夷山市"},{name:"建瓯市"},{name:"建阳市"}]},{name:"龙岩",subs:[{name:"新罗区"},{name:"长汀县"},{name:"永定县"},{name:"上杭县"},{name:"武平县"},{name:"连城县"},{name:"漳平市"}]},{name:"宁德",subs:[{name:"蕉城区"},{name:"霞浦县"},{name:"古田县"},{name:"屏南县"},{name:"寿宁县"},{name:"周宁县"},{name:"柘荣县"},{name:"福安市"},{name:"福鼎市"}]}]},{name:"江西",province:"江西",subs:[{name:"南昌",subs:[{name:"东湖区"},{name:"西湖区"},{name:"青云谱区"},{name:"湾里区"},{name:"青山湖区"},{name:"南昌县"},{name:"新建县"},{name:"安义县"},{name:"进贤县"}]},{name:"景德镇",subs:[{name:"昌江区"},{name:"珠山区"},{name:"浮梁县"},{name:"乐平市"}]},{name:"萍乡",subs:[{name:"安源区"},{name:"湘东区"},{name:"莲花县"},{name:"上栗县"},{name:"芦溪县"}]},{name:"九江",subs:[{name:"庐山区"},{name:"浔阳区"},{name:"九江县"},{name:"武宁县"},{name:"修水县"},{name:"永修县"},{name:"德安县"},{name:"星子县"},{name:"都昌县"},{name:"湖口县"},{name:"彭泽县"},{name:"瑞昌市"}]},{name:"新余",subs:[{name:"渝水区"},{name:"分宜县"}]},{name:"鹰潭",subs:[{name:"月湖区"},{name:"余江县"},{name:"贵溪市"}]},{name:"赣州",subs:[{name:"章贡区"},{name:"赣　县"},{name:"信丰县"},{name:"大余县"},{name:"上犹县"},{name:"崇义县"},{name:"安远县"},{name:"龙南县"},{name:"定南县"},{name:"全南县"},{name:"宁都县"},{name:"于都县"},{name:"兴国县"},{name:"会昌县"},{name:"寻乌县"},{name:"石城县"},{name:"瑞金市"},{name:"南康市"}]},{name:"吉安",subs:[{name:"吉州区"},{name:"青原区"},{name:"吉安县"},{name:"吉水县"},{name:"峡江县"},{name:"新干县"},{name:"永丰县"},{name:"泰和县"},{name:"遂川县"},{name:"万安县"},{name:"安福县"},{name:"永新县"},{name:"井冈山市"}]},{name:"宜春",subs:[{name:"袁州区"},{name:"奉新县"},{name:"万载县"},{name:"上高县"},{name:"宜丰县"},{name:"靖安县"},{name:"铜鼓县"},{name:"丰城市"},{name:"樟树市"},{name:"高安市"}]},{name:"抚州",subs:[{name:"临川区"},{name:"南城县"},{name:"黎川县"},{name:"南丰县"},{name:"崇仁县"},{name:"乐安县"},{name:"宜黄县"},{name:"金溪县"},{name:"资溪县"},{name:"东乡县"},{name:"广昌县"}]},{name:"上饶",subs:[{name:"信州区"},{name:"上饶县"},{name:"广丰县"},{name:"玉山县"},{name:"铅山县"},{name:"横峰县"},{name:"弋阳县"},{name:"余干县"},{name:"鄱阳县"},{name:"万年县"},{name:"婺源县"},{name:"德兴市"}]}]},{name:"山东",province:"山东",subs:[{name:"济南",subs:[{name:"历下区"},{name:"市中区"},{name:"槐荫区"},{name:"天桥区"},{name:"历城区"},{name:"长清区"},{name:"平阴县"},{name:"济阳县"},{name:"商河县"},{name:"章丘市"}]},{name:"青岛",subs:[{name:"市南区"},{name:"市北区"},{name:"四方区"},{name:"黄岛区"},{name:"崂山区"},{name:"李沧区"},{name:"城阳区"},{name:"胶州市"},{name:"即墨市"},{name:"平度市"},{name:"胶南市"},{name:"莱西市"}]},{name:"淄博",subs:[{name:"淄川区"},{name:"张店区"},{name:"博山区"},{name:"临淄区"},{name:"周村区"},{name:"桓台县"},{name:"高青县"},{name:"沂源县"}]},{name:"枣庄",subs:[{name:"市中区"},{name:"薛城区"},{name:"峄城区"},{name:"台儿庄区"},{name:"山亭区"},{name:"滕州市"}]},{name:"东营",subs:[{name:"东营区"},{name:"河口区"},{name:"垦利县"},{name:"利津县"},{name:"广饶县"}]},{name:"烟台",subs:[{name:"芝罘区"},{name:"福山区"},{name:"牟平区"},{name:"莱山区"},{name:"长岛县"},{name:"龙口市"},{name:"莱阳市"},{name:"莱州市"},{name:"蓬莱市"},{name:"招远市"},{name:"栖霞市"},{name:"海阳市"}]},{name:"潍坊",subs:[{name:"潍城区"},{name:"寒亭区"},{name:"坊子区"},{name:"奎文区"},{name:"临朐县"},{name:"昌乐县"},{name:"青州市"},{name:"诸城市"},{name:"寿光市"},{name:"安丘市"},{name:"高密市"},{name:"昌邑市"}]},{name:"济宁",subs:[{name:"市中区"},{name:"任城区"},{name:"微山县"},{name:"鱼台县"},{name:"金乡县"},{name:"嘉祥县"},{name:"汶上县"},{name:"泗水县"},{name:"梁山县"},{name:"曲阜市"},{name:"兖州市"},{name:"邹城市"}]},{name:"泰安",subs:[{name:"泰山区"},{name:"岱岳区"},{name:"宁阳县"},{name:"东平县"},{name:"新泰市"},{name:"肥城市"}]},{name:"威海",subs:[{name:"环翠区"},{name:"文登市"},{name:"荣成市"},{name:"乳山市"}]},{name:"日照",subs:[{name:"东港区"},{name:"岚山区"},{name:"五莲县"},{name:"莒　县"}]},{name:"莱芜",subs:[{name:"莱城区"},{name:"钢城区"}]},{name:"临沂",subs:[{name:"兰山区"},{name:"罗庄区"},{name:"河东区"},{name:"沂南县"},{name:"郯城县"},{name:"沂水县"},{name:"苍山县"},{name:"费　县"},{name:"平邑县"},{name:"莒南县"},{name:"蒙阴县"},{name:"临沭县"}]},{name:"德州",subs:[{name:"德城区"},{name:"陵　县"},{name:"宁津县"},{name:"庆云县"},{name:"临邑县"},{name:"齐河县"},{name:"平原县"},{name:"夏津县"},{name:"武城县"},{name:"乐陵市"},{name:"禹城市"}]},{name:"聊城",subs:[{name:"东昌府区"},{name:"阳谷县"},{name:"莘　县"},{name:"茌平县"},{name:"东阿县"},{name:"冠　县"},{name:"高唐县"},{name:"临清市"}]},{name:"滨州",subs:[{name:"滨城区"},{name:"惠民县"},{name:"阳信县"},{name:"无棣县"},{name:"沾化县"},{name:"博兴县"},{name:"邹平县"}]},{name:"菏泽",subs:[{name:"牡丹区"},{name:"曹　县"},{name:"单　县"},{name:"成武县"},{name:"巨野县"},{name:"郓城县"},{name:"鄄城县"},{name:"定陶县"},{name:"东明县"}]}]},{name:"河南",province:"河南",subs:[{name:"郑州",subs:[{name:"中原区"},{name:"二七区"},{name:"管城回族区"},{name:"金水区"},{name:"上街区"},{name:"惠济区"},{name:"中牟县"},{name:"巩义市"},{name:"荥阳市"},{name:"新密市"},{name:"新郑市"},{name:"登封市"}]},{name:"开封",subs:[{name:"龙亭区"},{name:"顺河回族区"},{name:"鼓楼区"},{name:"禹王台区"},{name:"金明区"},{name:"杞　县"},{name:"通许县"},{name:"尉氏县"},{name:"开封县"},{name:"兰考县"}]},{name:"洛阳",subs:[{name:"老城区"},{name:"西工区"},{name:"瀍河回族区"},{name:"涧西区"},{name:"吉利区"},{name:"洛龙区"},{name:"孟津县"},{name:"新安县"},{name:"栾川县"},{name:"嵩　县"},{name:"汝阳县"},{name:"宜阳县"},{name:"洛宁县"},{name:"伊川县"},{name:"偃师市"}]},{name:"平顶山",subs:[{name:"新华区"},{name:"卫东区"},{name:"石龙区"},{name:"湛河区"},{name:"宝丰县"},{name:"叶　县"},{name:"鲁山县"},{name:"郏　县"},{name:"舞钢市"},{name:"汝州市"}]},{name:"安阳",subs:[{name:"文峰区"},{name:"北关区"},{name:"殷都区"},{name:"龙安区"},{name:"安阳县"},{name:"汤阴县"},{name:"滑　县"},{name:"内黄县"},{name:"林州市"}]},{name:"鹤壁",subs:[{name:"鹤山区"},{name:"山城区"},{name:"淇滨区"},{name:"浚　县"},{name:"淇　县"}]},{name:"新乡",subs:[{name:"红旗区"},{name:"卫滨区"},{name:"凤泉区"},{name:"牧野区"},{name:"新乡县"},{name:"获嘉县"},{name:"原阳县"},{name:"延津县"},{name:"封丘县"},{name:"长垣县"},{name:"卫辉市"},{name:"辉县市"}]},{name:"焦作",subs:[{name:"解放区"},{name:"中站区"},{name:"马村区"},{name:"山阳区"},{name:"修武县"},{name:"博爱县"},{name:"武陟县"},{name:"温　县"},{name:"沁阳市"},{name:"孟州市"}]},{name:"濮阳",subs:[{name:"华龙区"},{name:"清丰县"},{name:"南乐县"},{name:"范　县"},{name:"台前县"},{name:"濮阳县"}]},{name:"许昌",subs:[{name:"魏都区"},{name:"许昌县"},{name:"鄢陵县"},{name:"襄城县"},{name:"禹州市"},{name:"长葛市"}]},{name:"漯河",subs:[{name:"源汇区"},{name:"郾城区"},{name:"召陵区"},{name:"舞阳县"},{name:"临颍县"}]},{name:"三门峡",subs:[{name:"湖滨区"},{name:"渑池县"},{name:"陕　县"},{name:"卢氏县"},{name:"义马市"},{name:"灵宝市"}]},{name:"南阳",subs:[{name:"宛城区"},{name:"卧龙区"},{name:"南召县"},{name:"方城县"},{name:"西峡县"},{name:"镇平县"},{name:"内乡县"},{name:"淅川县"},{name:"社旗县"},{name:"唐河县"},{name:"新野县"},{name:"桐柏县"},{name:"邓州市"}]},{name:"商丘",subs:[{name:"梁园区"},{name:"睢阳区"},{name:"民权县"},{name:"睢　县"},{name:"宁陵县"},{name:"柘城县"},{name:"虞城县"},{name:"夏邑县"},{name:"永城市"}]},{name:"信阳",subs:[{name:"浉河区"},{name:"平桥区"},{name:"罗山县"},{name:"光山县"},{name:"新　县"},{name:"商城县"},{name:"固始县"},{name:"潢川县"},{name:"淮滨县"},{name:"息　县"}]},{name:"周口",subs:[{name:"川汇区"},{name:"扶沟县"},{name:"西华县"},{name:"商水县"},{name:"沈丘县"},{name:"郸城县"},{name:"淮阳县"},{name:"太康县"},{name:"鹿邑县"},{name:"项城市"}]},{name:"驻马店",subs:[{name:"驿城区"},{name:"西平县"},{name:"上蔡县"},{name:"平舆县"},{name:"正阳县"},{name:"确山县"},{name:"泌阳县"},{name:"汝南县"},{name:"遂平县"},{name:"新蔡县"}]},{name:"济源",subs:[{name:"驿城区"},{name:"西平县"},{name:"上蔡县"},{name:"平舆县"},{name:"正阳县"},{name:"确山县"},{name:"泌阳县"},{name:"汝南县"},{name:"遂平县"},{name:"新蔡县"}]}]},{name:"湖北",province:"湖北",subs:[{name:"武汉",subs:[{name:"江岸区"},{name:"江汉区"},{name:"硚口区"},{name:"汉阳区"},{name:"武昌区"},{name:"青山区"},{name:"洪山区"},{name:"东西湖区"},{name:"汉南区"},{name:"蔡甸区"},{name:"江夏区"},{name:"黄陂区"},{name:"新洲区"}]},{name:"黄石",subs:[{name:"黄石港区"},{name:"西塞山区"},{name:"下陆区"},{name:"铁山区"},{name:"阳新县"},{name:"大冶市"}]},{name:"十堰",subs:[{name:"茅箭区"},{name:"张湾区"},{name:"郧　县"},{name:"郧西县"},{name:"竹山县"},{name:"竹溪县"},{name:"房　县"},{name:"丹江口市"}]},{name:"宜昌",subs:[{name:"西陵区"},{name:"伍家岗区"},{name:"点军区"},{name:"猇亭区"},{name:"夷陵区"},{name:"远安县"},{name:"兴山县"},{name:"秭归县"},{name:"长阳土家族自治县"},{name:"五峰土家族自治县"},{name:"宜都市"},{name:"当阳市"},{name:"枝江市"}]},{name:"襄阳",subs:[{name:"襄城区"},{name:"樊城区"},{name:"襄州区"},{name:"南漳县"},{name:"谷城县"},{name:"保康县"},{name:"老河口市"},{name:"枣阳市"},{name:"宜城市"}]},{name:"鄂州",subs:[{name:"梁子湖区"},{name:"华容区"},{name:"鄂城区"}]},{name:"荆门",subs:[{name:"东宝区"},{name:"掇刀区"},{name:"京山县"},{name:"沙洋县"},{name:"钟祥市"}]},{name:"孝感",subs:[{name:"孝南区"},{name:"孝昌县"},{name:"大悟县"},{name:"云梦县"},{name:"应城市"},{name:"安陆市"},{name:"汉川市"}]},{name:"荆州",subs:[{name:"沙市区"},{name:"荆州区"},{name:"公安县"},{name:"监利县"},{name:"江陵县"},{name:"石首市"},{name:"洪湖市"},{name:"松滋市"}]},{name:"黄冈",subs:[{name:"黄州区"},{name:"团风县"},{name:"红安县"},{name:"罗田县"},{name:"英山县"},{name:"浠水县"},{name:"蕲春县"},{name:"黄梅县"},{name:"麻城市"},{name:"武穴市"}]},{name:"咸宁",subs:[{name:"咸安区"},{name:"嘉鱼县"},{name:"通城县"},{name:"崇阳县"},{name:"通山县"},{name:"赤壁市"}]},{name:"随州",subs:[{name:"曾都区"},{name:"随县"},{name:"广水市"}]},{name:"恩施",subs:[{name:"恩施市"},{name:"利川市"},{name:"建始县"},{name:"巴东县"},{name:"宣恩县"},{name:"咸丰县"},{name:"来凤县"},{name:"鹤峰县"}]},{name:"仙桃",subs:[{name:"恩施市"},{name:"利川市"},{name:"建始县"},{name:"巴东县"},{name:"宣恩县"},{name:"咸丰县"},{name:"来凤县"},{name:"鹤峰县"}]},{name:"潜江",subs:[{name:"恩施市"},{name:"利川市"},{name:"建始县"},{name:"巴东县"},{name:"宣恩县"},{name:"咸丰县"},{name:"来凤县"},{name:"鹤峰县"}]},{name:"天门",subs:[{name:"恩施市"},{name:"利川市"},{name:"建始县"},{name:"巴东县"},{name:"宣恩县"},{name:"咸丰县"},{name:"来凤县"},{name:"鹤峰县"}]},{name:"神农架",subs:[{name:"恩施市"},{name:"利川市"},{name:"建始县"},{name:"巴东县"},{name:"宣恩县"},{name:"咸丰县"},{name:"来凤县"},{name:"鹤峰县"}]}]},{name:"湖南",province:"湖南",subs:[{name:"长沙",subs:[{name:"芙蓉区"},{name:"天心区"},{name:"岳麓区"},{name:"开福区"},{name:"雨花区"},{name:"长沙县"},{name:"望城区"},{name:"宁乡县"},{name:"浏阳市"}]},{name:"株洲",subs:[{name:"荷塘区"},{name:"芦淞区"},{name:"石峰区"},{name:"天元区"},{name:"株洲县"},{name:"攸　县"},{name:"茶陵县"},{name:"炎陵县"},{name:"醴陵市"}]},{name:"湘潭",subs:[{name:"雨湖区"},{name:"岳塘区"},{name:"湘潭县"},{name:"湘乡市"},{name:"韶山市"}]},{name:"衡阳",subs:[{name:"珠晖区"},{name:"雁峰区"},{name:"石鼓区"},{name:"蒸湘区"},{name:"南岳区"},{name:"衡阳县"},{name:"衡南县"},{name:"衡山县"},{name:"衡东县"},{name:"祁东县"},{name:"耒阳市"},{name:"常宁市"}]},{name:"邵阳",subs:[{name:"双清区"},{name:"大祥区"},{name:"北塔区"},{name:"邵东县"},{name:"新邵县"},{name:"邵阳县"},{name:"隆回县"},{name:"洞口县"},{name:"绥宁县"},{name:"新宁县"},{name:"城步苗族自治县"},{name:"武冈市"}]},{name:"岳阳",subs:[{name:"岳阳楼区"},{name:"云溪区"},{name:"君山区"},{name:"岳阳县"},{name:"华容县"},{name:"湘阴县"},{name:"平江县"},{name:"汨罗市"},{name:"临湘市"}]},{name:"常德",subs:[{name:"武陵区"},{name:"鼎城区"},{name:"安乡县"},{name:"汉寿县"},{name:"澧　县"},{name:"临澧县"},{name:"桃源县"},{name:"石门县"},{name:"津市市"}]},{name:"张家界",subs:[{name:"永定区"},{name:"武陵源区"},{name:"慈利县"},{name:"桑植县"}]},{name:"益阳",subs:[{name:"资阳区"},{name:"赫山区"},{name:"南　县"},{name:"桃江县"},{name:"安化县"},{name:"沅江市"}]},{name:"郴州",subs:[{name:"北湖区"},{name:"苏仙区"},{name:"桂阳县"},{name:"宜章县"},{name:"永兴县"},{name:"嘉禾县"},{name:"临武县"},{name:"汝城县"},{name:"桂东县"},{name:"安仁县"},{name:"资兴市"}]},{name:"永州",subs:[{name:"零陵区"},{name:"冷水滩区"},{name:"祁阳县"},{name:"东安县"},{name:"双牌县"},{name:"道　县"},{name:"江永县"},{name:"宁远县"},{name:"蓝山县"},{name:"新田县"},{name:"江华瑶族自治县"}]},{name:"怀化",subs:[{name:"鹤城区"},{name:"中方县"},{name:"沅陵县"},{name:"辰溪县"},{name:"溆浦县"},{name:"会同县"},{name:"麻阳苗族自治县"},{name:"新晃侗族自治县"},{name:"芷江侗族自治县"},{name:"靖州苗族侗族自治县"},{name:"通道侗族自治县"},{name:"洪江市"}]},{name:"娄底",subs:[{name:"娄星区"},{name:"双峰县"},{name:"新化县"},{name:"冷水江市"},{name:"涟源市"}]},{name:"湘西",subs:[{name:"吉首市"},{name:"泸溪县"},{name:"凤凰县"},{name:"花垣县"},{name:"保靖县"},{name:"古丈县"},{name:"永顺县"},{name:"龙山县"}]}]},{name:"广东",province:"广东",subs:[{name:"广州",subs:[{name:"荔湾区"},{name:"越秀区"},{name:"海珠区"},{name:"天河区"},{name:"白云区"},{name:"黄埔区"},{name:"番禺区"},{name:"花都区"},{name:"南沙区"},{name:"萝岗区"},{name:"增城市"},{name:"从化市"}]},{name:"韶关",subs:[{name:"武江区"},{name:"浈江区"},{name:"曲江区"},{name:"始兴县"},{name:"仁化县"},{name:"翁源县"},{name:"乳源瑶族自治县"},{name:"新丰县"},{name:"乐昌市"},{name:"南雄市"}]},{name:"深圳",subs:[{name:"罗湖区"},{name:"福田区"},{name:"南山区"},{name:"宝安区"},{name:"龙岗区"},{name:"盐田区"}]},{name:"珠海",subs:[{name:"香洲区"},{name:"斗门区"},{name:"金湾区"}]},{name:"汕头",subs:[{name:"龙湖区"},{name:"金平区"},{name:"濠江区"},{name:"潮阳区"},{name:"潮南区"},{name:"澄海区"},{name:"南澳县"}]},{name:"佛山",subs:[{name:"禅城区"},{name:"南海区"},{name:"顺德区"},{name:"三水区"},{name:"高明区"}]},{name:"江门",subs:[{name:"蓬江区"},{name:"江海区"},{name:"新会区"},{name:"台山市"},{name:"开平市"},{name:"鹤山市"},{name:"恩平市"}]},{name:"湛江",subs:[{name:"赤坎区"},{name:"霞山区"},{name:"坡头区"},{name:"麻章区"},{name:"遂溪县"},{name:"徐闻县"},{name:"廉江市"},{name:"雷州市"},{name:"吴川市"}]},{name:"茂名",subs:[{name:"茂南区"},{name:"茂港区"},{name:"电白县"},{name:"高州市"},{name:"化州市"},{name:"信宜市"}]},{name:"肇庆",subs:[{name:"端州区"},{name:"鼎湖区"},{name:"广宁县"},{name:"怀集县"},{name:"封开县"},{name:"德庆县"},{name:"高要市"},{name:"四会市"}]},{name:"惠州",subs:[{name:"惠城区"},{name:"惠阳区"},{name:"博罗县"},{name:"惠东县"},{name:"龙门县"}]},{name:"梅州",subs:[{name:"梅江区"},{name:"梅　县"},{name:"大埔县"},{name:"丰顺县"},{name:"五华县"},{name:"平远县"},{name:"蕉岭县"},{name:"兴宁市"}]},{name:"汕尾",subs:[{name:"城　区"},{name:"海丰县"},{name:"陆河县"},{name:"陆丰市"}]},{name:"河源",subs:[{name:"源城区"},{name:"紫金县"},{name:"龙川县"},{name:"连平县"},{name:"和平县"},{name:"东源县"}]},{name:"阳江",subs:[{name:"江城区"},{name:"阳西县"},{name:"阳东县"},{name:"阳春市"}]},{name:"清远",subs:[{name:"清城区"},{name:"佛冈县"},{name:"阳山县"},{name:"连山壮族瑶族自治县"},{name:"连南瑶族自治县"},{name:"清新县"},{name:"英德市"},{name:"连州市"}]},{name:"东莞",subs:[{name:"清城区"},{name:"佛冈县"},{name:"阳山县"},{name:"连山壮族瑶族自治县"},{name:"连南瑶族自治县"},{name:"清新县"},{name:"英德市"},{name:"连州市"}]},{name:"中山",subs:[{name:"清城区"},{name:"佛冈县"},{name:"阳山县"},{name:"连山壮族瑶族自治县"},{name:"连南瑶族自治县"},{name:"清新县"},{name:"英德市"},{name:"连州市"}]},{name:"潮州",subs:[{name:"湘桥区"},{name:"潮安县"},{name:"饶平县"}]},{name:"揭阳",subs:[{name:"榕城区"},{name:"揭东县"},{name:"揭西县"},{name:"惠来县"},{name:"普宁市"}]},{name:"云浮",subs:[{name:"云城区"},{name:"新兴县"},{name:"郁南县"},{name:"云安县"},{name:"罗定市"}]}]},{name:"广西",province:"广西",subs:[{name:"南宁",subs:[{name:"兴宁区"},{name:"青秀区"},{name:"江南区"},{name:"西乡塘区"},{name:"良庆区"},{name:"邕宁区"},{name:"武鸣县"},{name:"隆安县"},{name:"马山县"},{name:"上林县"},{name:"宾阳县"},{name:"横　县"}]},{name:"柳州",subs:[{name:"城中区"},{name:"鱼峰区"},{name:"柳南区"},{name:"柳北区"},{name:"柳江县"},{name:"柳城县"},{name:"鹿寨县"},{name:"融安县"},{name:"融水苗族自治县"},{name:"三江侗族自治县"}]},{name:"桂林",subs:[{name:"秀峰区"},{name:"叠彩区"},{name:"象山区"},{name:"七星区"},{name:"雁山区"},{name:"阳朔县"},{name:"临桂县"},{name:"灵川县"},{name:"全州县"},{name:"兴安县"},{name:"永福县"},{name:"灌阳县"},{name:"龙胜各族自治县"},{name:"资源县"},{name:"平乐县"},{name:"荔浦县"},{name:"恭城瑶族自治县"}]},{name:"梧州",subs:[{name:"万秀区"},{name:"蝶山区"},{name:"长洲区"},{name:"苍梧县"},{name:"藤　县"},{name:"蒙山县"},{name:"岑溪市"}]},{name:"北海",subs:[{name:"海城区"},{name:"银海区"},{name:"铁山港区"},{name:"合浦县"}]},{name:"防城港",subs:[{name:"港口区"},{name:"防城区"},{name:"上思县"},{name:"东兴市"}]},{name:"钦州",subs:[{name:"钦南区"},{name:"钦北区"},{name:"灵山县"},{name:"浦北县"}]},{name:"贵港",subs:[{name:"港北区"},{name:"港南区"},{name:"覃塘区"},{name:"平南县"},{name:"桂平市"}]},{name:"玉林",subs:[{name:"玉州区"},{name:"容　县"},{name:"陆川县"},{name:"博白县"},{name:"兴业县"},{name:"北流市"}]},{name:"百色",subs:[{name:"右江区"},{name:"田阳县"},{name:"田东县"},{name:"平果县"},{name:"德保县"},{name:"靖西县"},{name:"那坡县"},{name:"凌云县"},{name:"乐业县"},{name:"田林县"},{name:"西林县"},{name:"隆林各族自治县"}]},{name:"贺州",subs:[{name:"八步区"},{name:"昭平县"},{name:"钟山县"},{name:"富川瑶族自治县"}]},{name:"河池",subs:[{name:"金城江区"},{name:"南丹县"},{name:"天峨县"},{name:"凤山县"},{name:"东兰县"},{name:"罗城仫佬族自治县"},{name:"环江毛南族自治县"},{name:"巴马瑶族自治县"},{name:"都安瑶族自治县"},{name:"大化瑶族自治县"},{name:"宜州市"}]},{name:"来宾",subs:[{name:"兴宾区"},{name:"忻城县"},{name:"象州县"},{name:"武宣县"},{name:"金秀瑶族自治县"},{name:"合山市"}]},{name:"崇左",subs:[{name:"江洲区"},{name:"扶绥县"},{name:"宁明县"},{name:"龙州县"},{name:"大新县"},{name:"天等县"},{name:"凭祥市"}]}]},{name:"海南",province:"海南",subs:[{name:"海口",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"三亚",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"三沙",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"五指山",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"琼海",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"儋州",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"文昌",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"万宁",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"东方",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"定安",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"屯昌",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"澄迈",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"临高",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"白沙",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"昌江",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"乐东",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"陵水",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"保亭",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]},{name:"琼中",subs:[{name:"秀英区"},{name:"龙华区"},{name:"琼山区"},{name:"美兰区"}]}]},{name:"重庆",province:"重庆",subs:[{name:"万州"},{name:"涪陵"},{name:"渝中"},{name:"大渡口"},{name:"江北"},{name:"沙坪坝"},{name:"九龙坡"},{name:"南岸"},{name:"北碚"},{name:"两江新区"},{name:"万盛"},{name:"双桥"},{name:"渝北"},{name:"巴南"},{name:"长寿"},{name:"綦江"},{name:"潼南"},{name:"铜梁"},{name:"大足"},{name:"荣昌"},{name:"璧山"},{name:"梁平"},{name:"城口"},{name:"丰都"},{name:"垫江"},{name:"武隆"},{name:"忠县"},{name:"开县"},{name:"云阳"},{name:"奉节"},{name:"巫山"},{name:"巫溪"},{name:"黔江"},{name:"石柱"},{name:"秀山"},{name:"酉阳"},{name:"彭水"},{name:"江津"},{name:"合川"},{name:"永川"},{name:"南川"}]},{name:"四川",province:"四川",subs:[{name:"成都",subs:[{name:"锦江区"},{name:"青羊区"},{name:"金牛区"},{name:"武侯区"},{name:"成华区"},{name:"龙泉驿区"},{name:"青白江区"},{name:"新都区"},{name:"温江区"},{name:"金堂县"},{name:"双流县"},{name:"郫　县"},{name:"大邑县"},{name:"蒲江县"},{name:"新津县"},{name:"都江堰市"},{name:"彭州市"},{name:"邛崃市"},{name:"崇州市"}]},{name:"自贡",subs:[{name:"自流井区"},{name:"贡井区"},{name:"大安区"},{name:"沿滩区"},{name:"荣　县"},{name:"富顺县"}]},{name:"攀枝花",subs:[{name:"东　区"},{name:"西　区"},{name:"仁和区"},{name:"米易县"},{name:"盐边县"}]},{name:"泸州",subs:[{name:"江阳区"},{name:"纳溪区"},{name:"龙马潭区"},{name:"泸　县"},{name:"合江县"},{name:"叙永县"},{name:"古蔺县"}]},{name:"德阳",subs:[{name:"旌阳区"},{name:"中江县"},{name:"罗江县"},{name:"广汉市"},{name:"什邡市"},{name:"绵竹市"}]},{name:"绵阳",subs:[{name:"涪城区"},{name:"游仙区"},{name:"三台县"},{name:"盐亭县"},{name:"安　县"},{name:"梓潼县"},{name:"北川羌族自治县"},{name:"平武县"},{name:"江油市"}]},{name:"广元",subs:[{name:"市中区"},{name:"元坝区"},{name:"朝天区"},{name:"旺苍县"},{name:"青川县"},{name:"剑阁县"},{name:"苍溪县"}]},{name:"遂宁",subs:[{name:"船山区"},{name:"安居区"},{name:"蓬溪县"},{name:"射洪县"},{name:"大英县"}]},{name:"内江",subs:[{name:"市中区"},{name:"东兴区"},{name:"威远县"},{name:"资中县"},{name:"隆昌县"}]},{name:"乐山",subs:[{name:"市中区"},{name:"沙湾区"},{name:"五通桥区"},{name:"金口河区"},{name:"犍为县"},{name:"井研县"},{name:"夹江县"},{name:"沐川县"},{name:"峨边彝族自治县"},{name:"马边彝族自治县"},{name:"峨眉山市"}]},{name:"南充",subs:[{name:"顺庆区"},{name:"高坪区"},{name:"嘉陵区"},{name:"南部县"},{name:"营山县"},{name:"蓬安县"},{name:"仪陇县"},{name:"西充县"},{name:"阆中市"}]},{name:"眉山",subs:[{name:"东坡区"},{name:"仁寿县"},{name:"彭山县"},{name:"洪雅县"},{name:"丹棱县"},{name:"青神县"}]},{name:"宜宾",subs:[{name:"翠屏区"},{name:"宜宾县"},{name:"南溪县"},{name:"江安县"},{name:"长宁县"},{name:"高　县"},{name:"珙　县"},{name:"筠连县"},{name:"兴文县"},{name:"屏山县"}]},{name:"广安",subs:[{name:"广安区"},{name:"岳池县"},{name:"武胜县"},{name:"邻水县"},{name:"华蓥市"}]},{name:"达州",subs:[{name:"通川区"},{name:"达　县"},{name:"宣汉县"},{name:"开江县"},{name:"大竹县"},{name:"渠　县"},{name:"万源市"}]},{name:"雅安",subs:[{name:"雨城区"},{name:"名山县"},{name:"荥经县"},{name:"汉源县"},{name:"石棉县"},{name:"天全县"},{name:"芦山县"},{name:"宝兴县"}]},{name:"巴中",subs:[{name:"巴州区"},{name:"通江县"},{name:"南江县"},{name:"平昌县"}]},{name:"资阳",subs:[{name:"雁江区"},{name:"安岳县"},{name:"乐至县"},{name:"简阳市"}]},{name:"阿坝",subs:[{name:"汶川县"},{name:"理　县"},{name:"茂　县"},{name:"松潘县"},{name:"九寨沟县"},{name:"金川县"},{name:"小金县"},{name:"黑水县"},{name:"马尔康县"},{name:"壤塘县"},{name:"阿坝县"},{name:"若尔盖县"},{name:"红原县"}]},{name:"甘孜",subs:[{name:"康定县"},{name:"泸定县"},{name:"丹巴县"},{name:"九龙县"},{name:"雅江县"},{name:"道孚县"},{name:"炉霍县"},{name:"甘孜县"},{name:"新龙县"},{name:"德格县"},{name:"白玉县"},{name:"石渠县"},{name:"色达县"},{name:"理塘县"},{name:"巴塘县"},{name:"乡城县"},{name:"稻城县"},{name:"得荣县"}]},{name:"凉山",subs:[{name:"西昌市"},{name:"木里藏族自治县"},{name:"盐源县"},{name:"德昌县"},{name:"会理县"},{name:"会东县"},{name:"宁南县"},{name:"普格县"},{name:"布拖县"},{name:"金阳县"},{name:"昭觉县"},{name:"喜德县"},{name:"冕宁县"},{name:"越西县"},{name:"甘洛县"},{name:"美姑县"},{name:"雷波县"}]}]},{name:"贵州",province:"贵州",subs:[{name:"贵阳",subs:[{name:"南明区"},{name:"云岩区"},{name:"花溪区"},{name:"乌当区"},{name:"白云区"},{name:"小河区"},{name:"开阳县"},{name:"息烽县"},{name:"修文县"},{name:"清镇市"}]},{name:"六盘水",subs:[{name:"钟山区"},{name:"六枝特区"},{name:"水城县"},{name:"盘　县"}]},{name:"遵义",subs:[{name:"红花岗区"},{name:"汇川区"},{name:"遵义县"},{name:"桐梓县"},{name:"绥阳县"},{name:"正安县"},{name:"道真仡佬族苗族自治县"},{name:"务川仡佬族苗族自治县"},{name:"凤冈县"},{name:"湄潭县"},{name:"余庆县"},{name:"习水县"},{name:"赤水市"},{name:"仁怀市"}]},{name:"安顺",subs:[{name:"西秀区"},{name:"平坝县"},{name:"普定县"},{name:"镇宁布依族苗族自治县"},{name:"关岭布依族苗族自治县"},{name:"紫云苗族布依族自治县"}]},{name:"铜仁",subs:[{name:"铜仁市"},{name:"江口县"},{name:"玉屏侗族自治县"},{name:"石阡县"},{name:"思南县"},{name:"印江土家族苗族自治县"},{name:"德江县"},{name:"沿河土家族自治县"},{name:"松桃苗族自治县"},{name:"万山特区"}]},{name:"黔西南",subs:[{name:"兴义市"},{name:"兴仁县"},{name:"普安县"},{name:"晴隆县"},{name:"贞丰县"},{name:"望谟县"},{name:"册亨县"},{name:"安龙县"}]},{name:"毕节",subs:[{name:"毕节市"},{name:"大方县"},{name:"黔西县"},{name:"金沙县"},{name:"织金县"},{name:"纳雍县"},{name:"威宁彝族回族苗族自治县"},{name:"赫章县"}]},{name:"黔东南",subs:[{name:"凯里市"},{name:"黄平县"},{name:"施秉县"},{name:"三穗县"},{name:"镇远县"},{name:"岑巩县"},{name:"天柱县"},{name:"锦屏县"},{name:"剑河县"},{name:"台江县"},{name:"黎平县"},{name:"榕江县"},{name:"从江县"},{name:"雷山县"},{name:"麻江县"},{name:"丹寨县"}]},{name:"黔南",subs:[{name:"都匀市"},{name:"福泉市"},{name:"荔波县"},{name:"贵定县"},{name:"瓮安县"},{name:"独山县"},{name:"平塘县"},{name:"罗甸县"},{name:"长顺县"},{name:"龙里县"},{name:"惠水县"},{name:"三都水族自治县"}]}]},{name:"云南",province:"云南",subs:[{name:"昆明",subs:[{name:"五华区"},{name:"盘龙区"},{name:"官渡区"},{name:"西山区"},{name:"东川区"},{name:"呈贡县"},{name:"晋宁县"},{name:"富民县"},{name:"宜良县"},{name:"石林彝族自治县"},{name:"嵩明县"},{name:"禄劝彝族苗族自治县"},{name:"寻甸回族彝族自治县"},{name:"安宁市"}]},{name:"曲靖",subs:[{name:"麒麟区"},{name:"马龙县"},{name:"陆良县"},{name:"师宗县"},{name:"罗平县"},{name:"富源县"},{name:"会泽县"},{name:"沾益县"},{name:"宣威市"}]},{name:"玉溪",subs:[{name:"红塔区"},{name:"江川县"},{name:"澄江县"},{name:"通海县"},{name:"华宁县"},{name:"易门县"},{name:"峨山彝族自治县"},{name:"新平彝族傣族自治县"},{name:"元江哈尼族彝族傣族自治县"}]},{name:"保山",subs:[{name:"隆阳区"},{name:"施甸县"},{name:"腾冲县"},{name:"龙陵县"},{name:"昌宁县"}]},{name:"昭通",subs:[{name:"昭阳区"},{name:"鲁甸县"},{name:"巧家县"},{name:"盐津县"},{name:"大关县"},{name:"永善县"},{name:"绥江县"},{name:"镇雄县"},{name:"彝良县"},{name:"威信县"},{name:"水富县"}]},{name:"丽江",subs:[{name:"古城区"},{name:"玉龙纳西族自治县"},{name:"永胜县"},{name:"华坪县"},{name:"宁蒗彝族自治县"}]},{name:"普洱",subs:[{name:"思茅区"},{name:"宁洱哈尼族彝族自治县"},{name:"墨江哈尼族自治县"},{name:"景东彝族自治县"},{name:"景谷傣族彝族自治县"},{name:"镇沅彝族哈尼族拉祜族自治县"},{name:"江城哈尼族彝族自治县"},{name:"孟连傣族拉祜族佤族自治县"},{name:"澜沧拉祜族自治县"},{name:"西盟佤族自治县"}]},{name:"临沧",subs:[{name:"临翔区"},{name:"凤庆县"},{name:"云　县"},{name:"永德县"},{name:"镇康县"},{name:"双江拉祜族佤族布朗族傣族自治县"},{name:"耿马傣族佤族自治县"},{name:"沧源佤族自治县"}]},{name:"楚雄",subs:[{name:"楚雄市"},{name:"双柏县"},{name:"牟定县"},{name:"南华县"},{name:"姚安县"},{name:"大姚县"},{name:"永仁县"},{name:"元谋县"},{name:"武定县"},{name:"禄丰县"}]},{name:"红河",subs:[{name:"个旧市"},{name:"开远市"},{name:"蒙自县"},{name:"屏边苗族自治县"},{name:"建水县"},{name:"石屏县"},{name:"弥勒县"},{name:"泸西县"},{name:"元阳县"},{name:"红河县"},{name:"金平苗族瑶族傣族自治县"},{name:"绿春县"},{name:"河口瑶族自治县"}]},{name:"文山",subs:[{name:"文山县"},{name:"砚山县"},{name:"西畴县"},{name:"麻栗坡县"},{name:"马关县"},{name:"丘北县"},{name:"广南县"},{name:"富宁县"}]},{name:"西双版纳",subs:[{name:"景洪市"},{name:"勐海县"},{name:"勐腊县"}]},{name:"大理",subs:[{name:"大理市"},{name:"漾濞彝族自治县"},{name:"祥云县"},{name:"宾川县"},{name:"弥渡县"},{name:"南涧彝族自治县"},{name:"巍山彝族回族自治县"},{name:"永平县"},{name:"云龙县"},{name:"洱源县"},{name:"剑川县"},{name:"鹤庆县"}]},{name:"德宏",subs:[{name:"瑞丽市"},{name:"潞西市"},{name:"梁河县"},{name:"盈江县"},{name:"陇川县"}]},{name:"怒江",subs:[{name:"泸水县"},{name:"福贡县"},{name:"贡山独龙族怒族自治县"},{name:"兰坪白族普米族自治县"}]},{name:"迪庆",subs:[{name:"香格里拉县"},{name:"德钦县"},{name:"维西傈僳族自治县"}]}]},{name:"西藏",province:"西藏",subs:[{name:"拉萨",subs:[{name:"城关区"},{name:"林周县"},{name:"当雄县"},{name:"尼木县"},{name:"曲水县"},{name:"堆龙德庆县"},{name:"达孜县"},{name:"墨竹工卡县"}]},{name:"昌都",subs:[{name:"昌都县"},{name:"江达县"},{name:"贡觉县"},{name:"类乌齐县"},{name:"丁青县"},{name:"察雅县"},{name:"八宿县"},{name:"左贡县"},{name:"芒康县"},{name:"洛隆县"},{name:"边坝县"}]},{name:"山南",subs:[{name:"乃东县"},{name:"扎囊县"},{name:"贡嘎县"},{name:"桑日县"},{name:"琼结县"},{name:"曲松县"},{name:"措美县"},{name:"洛扎县"},{name:"加查县"},{name:"隆子县"},{name:"错那县"},{name:"浪卡子县"}]},{name:"日喀则",subs:[{name:"日喀则市"},{name:"南木林县"},{name:"江孜县"},{name:"定日县"},{name:"萨迦县"},{name:"拉孜县"},{name:"昂仁县"},{name:"谢通门县"},{name:"白朗县"},{name:"仁布县"},{name:"康马县"},{name:"定结县"},{name:"仲巴县"},{name:"亚东县"},{name:"吉隆县"},{name:"聂拉木县"},{name:"萨嘎县"},{name:"岗巴县"}]},{name:"那曲",subs:[{name:"那曲县"},{name:"嘉黎县"},{name:"比如县"},{name:"聂荣县"},{name:"安多县"},{name:"申扎县"},{name:"索　县"},{name:"班戈县"},{name:"巴青县"},{name:"尼玛县"}]},{name:"阿里",subs:[{name:"普兰县"},{name:"札达县"},{name:"噶尔县"},{name:"日土县"},{name:"革吉县"},{name:"改则县"},{name:"措勤县"}]},{name:"林芝",subs:[{name:"林芝县"},{name:"工布江达县"},{name:"米林县"},{name:"墨脱县"},{name:"波密县"},{name:"察隅县"},{name:"朗　县"}]}]},{name:"陕西",province:"陕西",subs:[{name:"西安",subs:[{name:"新城区"},{name:"碑林区"},{name:"莲湖区"},{name:"灞桥区"},{name:"未央区"},{name:"雁塔区"},{name:"阎良区"},{name:"临潼区"},{name:"长安区"},{name:"蓝田县"},{name:"周至县"},{name:"户　县"},{name:"高陵县"}]},{name:"铜川",subs:[{name:"王益区"},{name:"印台区"},{name:"耀州区"},{name:"宜君县"}]},{name:"宝鸡",subs:[{name:"渭滨区"},{name:"金台区"},{name:"陈仓区"},{name:"凤翔县"},{name:"岐山县"},{name:"扶风县"},{name:"眉　县"},{name:"陇　县"},{name:"千阳县"},{name:"麟游县"},{name:"凤　县"},{name:"太白县"}]},{name:"咸阳",subs:[{name:"秦都区"},{name:"杨凌区"},{name:"渭城区"},{name:"三原县"},{name:"泾阳县"},{name:"乾　县"},{name:"礼泉县"},{name:"永寿县"},{name:"彬　县"},{name:"长武县"},{name:"旬邑县"},{name:"淳化县"},{name:"武功县"},{name:"兴平市"}]},{name:"渭南",subs:[{name:"临渭区"},{name:"华　县"},{name:"潼关县"},{name:"大荔县"},{name:"合阳县"},{name:"澄城县"},{name:"蒲城县"},{name:"白水县"},{name:"富平县"},{name:"韩城市"},{name:"华阴市"}]},{name:"延安",subs:[{name:"宝塔区"},{name:"延长县"},{name:"延川县"},{name:"子长县"},{name:"安塞县"},{name:"志丹县"},{name:"吴起县"},{name:"甘泉县"},{name:"富　县"},{name:"洛川县"},{name:"宜川县"},{name:"黄龙县"},{name:"黄陵县"}]},{name:"汉中",subs:[{name:"汉台区"},{name:"南郑县"},{name:"城固县"},{name:"洋　县"},{name:"西乡县"},{name:"勉　县"},{name:"宁强县"},{name:"略阳县"},{name:"镇巴县"},{name:"留坝县"},{name:"佛坪县"}]},{name:"榆林",subs:[{name:"榆阳区"},{name:"神木县"},{name:"府谷县"},{name:"横山县"},{name:"靖边县"},{name:"定边县"},{name:"绥德县"},{name:"米脂县"},{name:"佳　县"},{name:"吴堡县"},{name:"清涧县"},{name:"子洲县"}]},{name:"安康",subs:[{name:"汉滨区"},{name:"汉阴县"},{name:"石泉县"},{name:"宁陕县"},{name:"紫阳县"},{name:"岚皋县"},{name:"平利县"},{name:"镇坪县"},{name:"旬阳县"},{name:"白河县"}]},{name:"商洛",subs:[{name:"商州区"},{name:"洛南县"},{name:"丹凤县"},{name:"商南县"},{name:"山阳县"},{name:"镇安县"},{name:"柞水县"}]}]},{name:"甘肃",province:"甘肃",subs:[{name:"兰州市",subs:[{name:"城关区"},{name:"七里河区"},{name:"西固区"},{name:"安宁区"},{name:"红古区"},{name:"永登县"},{name:"皋兰县"},{name:"榆中县"}]},{name:"嘉峪关",subs:[{name:"城关区"},{name:"七里河区"},{name:"西固区"},{name:"安宁区"},{name:"红古区"},{name:"永登县"},{name:"皋兰县"},{name:"榆中县"}]},{name:"金昌",subs:[{name:"金川区"},{name:"永昌县"}]},{name:"白银",subs:[{name:"白银区"},{name:"平川区"},{name:"靖远县"},{name:"会宁县"},{name:"景泰县"}]},{name:"天水",subs:[{name:"秦州区"},{name:"麦积区"},{name:"清水县"},{name:"秦安县"},{name:"甘谷县"},{name:"武山县"},{name:"张家川回族自治县"}]},{name:"武威",subs:[{name:"凉州区"},{name:"民勤县"},{name:"古浪县"},{name:"天祝藏族自治县"}]},{name:"张掖",subs:[{name:"甘州区"},{name:"肃南裕固族自治县"},{name:"民乐县"},{name:"临泽县"},{name:"高台县"},{name:"山丹县"}]},{name:"平凉",subs:[{name:"崆峒区"},{name:"泾川县"},{name:"灵台县"},{name:"崇信县"},{name:"华亭县"},{name:"庄浪县"},{name:"静宁县"}]},{name:"酒泉",subs:[{name:"肃州区"},{name:"金塔县"},{name:"瓜州县"},{name:"肃北蒙古族自治县"},{name:"阿克塞哈萨克族自治县"},{name:"玉门市"},{name:"敦煌市"}]},{name:"庆阳",subs:[{name:"西峰区"},{name:"庆城县"},{name:"环　县"},{name:"华池县"},{name:"合水县"},{name:"正宁县"},{name:"宁　县"},{name:"镇原县"}]},{name:"定西",subs:[{name:"安定区"},{name:"通渭县"},{name:"陇西县"},{name:"渭源县"},{name:"临洮县"},{name:"漳　县"},{name:"岷　县"}]},{name:"陇南",subs:[{name:"武都区"},{name:"成　县"},{name:"文　县"},{name:"宕昌县"},{name:"康　县"},{name:"西和县"},{name:"礼　县"},{name:"徽　县"},{name:"两当县"}]},{name:"临夏",subs:[{name:"临夏市"},{name:"临夏县"},{name:"康乐县"},{name:"永靖县"},{name:"广河县"},{name:"和政县"},{name:"东乡族自治县"},{name:"积石山保安族东乡族撒拉族自治县"}]},{name:"甘南",subs:[{name:"合作市"},{name:"临潭县"},{name:"卓尼县"},{name:"舟曲县"},{name:"迭部县"},{name:"玛曲县"},{name:"碌曲县"},{name:"夏河县"}]}]},{name:"青海",province:"青海",subs:[{name:"西宁",subs:[{name:"城东区"},{name:"城中区"},{name:"城西区"},{name:"城北区"},{name:"大通回族土族自治县"},{name:"湟中县"},{name:"湟源县"}]},{name:"海东",subs:[{name:"平安县"},{name:"民和回族土族自治县"},{name:"乐都县"},{name:"互助土族自治县"},{name:"化隆回族自治县"},{name:"循化撒拉族自治县"}]},{name:"海北",subs:[{name:"门源回族自治县"},{name:"祁连县"},{name:"海晏县"},{name:"刚察县"}]},{name:"黄南",subs:[{name:"同仁县"},{name:"尖扎县"},{name:"泽库县"},{name:"河南蒙古族自治县"}]},{name:"海南",subs:[{name:"共和县"},{name:"同德县"},{name:"贵德县"},{name:"兴海县"},{name:"贵南县"}]},{name:"果洛",subs:[{name:"玛沁县"},{name:"班玛县"},{name:"甘德县"},{name:"达日县"},{name:"久治县"},{name:"玛多县"}]},{name:"玉树",subs:[{name:"玉树县"},{name:"杂多县"},{name:"称多县"},{name:"治多县"},{name:"囊谦县"},{name:"曲麻莱县"}]},{name:"海西",subs:[{name:"格尔木市"},{name:"德令哈市"},{name:"乌兰县"},{name:"都兰县"},{name:"天峻县"}]}]},{name:"宁夏",province:"宁夏",subs:[{name:"银川",subs:[{name:"兴庆区"},{name:"西夏区"},{name:"金凤区"},{name:"永宁县"},{name:"贺兰县"},{name:"灵武市"}]},{name:"石嘴山",subs:[{name:"大武口区"},{name:"惠农区"},{name:"平罗县"}]},{name:"吴忠",subs:[{name:"利通区"},{name:"红寺堡区"},{name:"盐池县"},{name:"同心县"},{name:"青铜峡市"}]},{name:"固原",subs:[{name:"原州区"},{name:"西吉县"},{name:"隆德县"},{name:"泾源县"},{name:"彭阳县"}]},{name:"中卫",subs:[{name:"沙坡头区"},{name:"中宁县"},{name:"海原县"}]}]},{name:"新疆",province:"新疆",subs:[{name:"乌鲁木齐",subs:[{name:"天山区"},{name:"沙依巴克区"},{name:"新市区"},{name:"水磨沟区"},{name:"头屯河区"},{name:"达坂城区"},{name:"米东区"},{name:"乌鲁木齐县"}]},{name:"克拉玛依",subs:[{name:"独山子区"},{name:"克拉玛依区"},{name:"白碱滩区"},{name:"乌尔禾区"}]},{name:"吐鲁番",subs:[{name:"吐鲁番市"},{name:"鄯善县"},{name:"托克逊县"}]},{name:"哈密",subs:[{name:"哈密市"},{name:"巴里坤哈萨克自治县"},{name:"伊吾县"}]},{name:"昌吉",subs:[{name:"昌吉市"},{name:"阜康市"},{name:"呼图壁县"},{name:"玛纳斯县"},{name:"奇台县"},{name:"吉木萨尔县"},{name:"木垒哈萨克自治县"}]},{name:"博尔塔拉",subs:[{name:"博乐市"},{name:"精河县"},{name:"温泉县"}]},{name:"巴音郭楞",subs:[{name:"库尔勒市"},{name:"轮台县"},{name:"尉犁县"},{name:"若羌县"},{name:"且末县"},{name:"焉耆回族自治县"},{name:"和静县"},{name:"和硕县"},{name:"博湖县"}]},{name:"阿克苏",subs:[{name:"阿克苏市"},{name:"温宿县"},{name:"库车县"},{name:"沙雅县"},{name:"新和县"},{name:"拜城县"},{name:"乌什县"},{name:"阿瓦提县"},{name:"柯坪县"}]},{name:"克孜勒苏",subs:[{name:"阿图什市"},{name:"阿克陶县"},{name:"阿合奇县"},{name:"乌恰县"}]},{name:"喀什",subs:[{name:"喀什市"},{name:"疏附县"},{name:"疏勒县"},{name:"英吉沙县"},{name:"泽普县"},{name:"莎车县"},{name:"叶城县"},{name:"麦盖提县"},{name:"岳普湖县"},{name:"伽师县"},{name:"巴楚县"},{name:"塔什库尔干塔吉克自治县"}]},{name:"和田",subs:[{name:"和田市"},{name:"和田县"},{name:"墨玉县"},{name:"皮山县"},{name:"洛浦县"},{name:"策勒县"},{name:"于田县"},{name:"民丰县"}]},{name:"伊犁",subs:[{name:"伊宁市"},{name:"奎屯市"},{name:"伊宁县"},{name:"察布查尔锡伯自治县"},{name:"霍城县"},{name:"巩留县"},{name:"新源县"},{name:"昭苏县"},{name:"特克斯县"},{name:"尼勒克县"}]},{name:"塔城",subs:[{name:"塔城市"},{name:"乌苏市"},{name:"额敏县"},{name:"沙湾县"},{name:"托里县"},{name:"裕民县"},{name:"和布克赛尔蒙古自治县"}]},{name:"阿勒泰",subs:[{name:"阿勒泰市"},{name:"布尔津县"},{name:"富蕴县"},{name:"福海县"},{name:"哈巴河县"},{name:"青河县"},{name:"吉木乃县"}]},{name:"石河子",subs:[{name:"阿勒泰市"},{name:"布尔津县"},{name:"富蕴县"},{name:"福海县"},{name:"哈巴河县"},{name:"青河县"},{name:"吉木乃县"}]},{name:"阿拉尔",subs:[{name:"阿勒泰市"},{name:"布尔津县"},{name:"富蕴县"},{name:"福海县"},{name:"哈巴河县"},{name:"青河县"},{name:"吉木乃县"}]},{name:"图木舒克",subs:[{name:"阿勒泰市"},{name:"布尔津县"},{name:"富蕴县"},{name:"福海县"},{name:"哈巴河县"},{name:"青河县"},{name:"吉木乃县"}]},{name:"五家渠",subs:[{name:"阿勒泰市"},{name:"布尔津县"},{name:"富蕴县"},{name:"福海县"},{name:"哈巴河县"},{name:"青河县"},{name:"吉木乃县"}]},{name:"北屯",subs:[{name:"阿勒泰市"},{name:"布尔津县"},{name:"富蕴县"},{name:"福海县"},{name:"哈巴河县"},{name:"青河县"},{name:"吉木乃县"}]}]},{name:"台湾",province:"台湾",subs:[{name:"台北市"},{name:"高雄市"},{name:"基隆市"},{name:"台中市"},{name:"台南市"},{name:"新竹市"},{name:"嘉义市"},{name:"台北县"},{name:"宜兰县"},{name:"桃园县"},{name:"新竹县"},{name:"苗栗县"},{name:"台中县"},{name:"彰化县"},{name:"南投县"},{name:"云林县"},{name:"嘉义县"},{name:"台南县"},{name:"高雄县"},{name:"屏东县"},{name:"台东县"},{name:"花莲县"},{name:"澎湖县"}]},{name:"香港",province:"香港",subs:[{name:"中西区"},{name:"东区"},{name:"九龙城区"},{name:"观塘区"},{name:"南区"},{name:"深水埗区"},{name:"黄大仙区"},{name:"湾仔区"},{name:"油尖旺区"},{name:"离岛区"},{name:"葵青区"},{name:"北区"},{name:"西贡区"},{name:"沙田区"},{name:"屯门区"},{name:"大埔区"},{name:"荃湾区"},{name:"元朗区"}]},{name:"澳门",province:"澳门",subs:[{name:"花地玛堂区"},{name:"圣安多尼堂区"},{name:"大堂区"},{name:"望德堂区"},{name:"风顺堂区"},{name:"氹仔"},{name:"路环"}]}];
},{isPage:false,isComponent:false,currentFile:'components/form-box/region/regionData.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("components/mp-weixin/my-player/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=function(t){this.vm=t};requirePlugin("myPlugin");t.prototype.onUpdate=function(t,e){e.trustTags["my-player"]=!0,this.videos=[]},t.prototype.onParse=function(t,e){"iframe"==t.name&&"myplayer"==t.attrs.class&&(t.name="my-player",t.attrs.class=void 0,e.expose())},t.prototype.onLoad=function(){},module.exports=t;
},{isPage:false,isComponent:false,currentFile:'components/mp-weixin/my-player/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("components/mp-weixin/parser.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function t(t){for(var i=Object.create(null),s=t.split(","),e=s.length;e--;)i[s[e]]=!0;return i}function i(t,i){for(var s=t.indexOf("&");-1!==s;){var e=t.indexOf(";",s+3),n=void 0;if(-1===e)break;"#"===t[s+1]?(n=parseInt(("x"===t[s+2]?"0":"")+t.substring(s+2,e)),isNaN(n)||(t=t.substr(0,s)+String.fromCharCode(n)+t.substr(e+1))):(n=t.substring(s+1,e),(a.entities[n]||"amp"===n&&i)&&(t=t.substr(0,s)+(a.entities[n]||"&")+t.substr(e+1))),s=t.indexOf("&",s+1)}return t}function s(t){this.options=t.data||{},this.tagStyle=Object.assign({},a.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[],this.pre=(this.options.containerStyle||"").includes("white-space")&&this.options.containerStyle.includes("pre")?2:0}function e(t){this.handler=t}require("../../@babel/runtime/helpers/Arrayincludes");var a={trustTags:t("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:t("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:t("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:t("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:" ",emsp:" ",nbsp:" ",semi:";",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…",larr:"←",uarr:"↑",rarr:"→",darr:"↓"},tagStyle:{address:"font-style:italic",big:"display:inline;font-size:1.2em",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",strike:"text-decoration:line-through",u:"text-decoration:underline"},svgDict:{animatetransform:"animateTransform",lineargradient:"linearGradient",viewbox:"viewBox",attributename:"attributeName",repeatcount:"repeatCount",repeatdur:"repeatDur"}},n={},r=wx.getSystemInfoSync(),h=r.windowWidth,o=r.system,l=t(" ,\r,\n,\t,\f"),c=0;s.prototype.parse=function(t){for(var i=this.plugins.length;i--;)this.plugins[i].onUpdate&&(t=this.plugins[i].onUpdate(t,a)||t);for(new e(this).parse(t);this.stack.length;)this.popNode();return this.nodes},s.prototype.expose=function(){for(var t=this.stack.length;t--;){var i=this.stack[t];if(i.c||"a"===i.name||"video"===i.name||"audio"===i.name)return;i.c=1}},s.prototype.hook=function(t){for(var i=this.plugins.length;i--;)if(this.plugins[i].onParse&&!1===this.plugins[i].onParse(t,this))return!1;return!0},s.prototype.getUrl=function(t){var i=this.options.domain;return"/"===t[0]?"/"===t[1]?t=(i?i.split("://")[0]:"http")+":"+t:i&&(t=i+t):!i||t.includes("data:")||t.includes("://")||(t=i+"/"+t),t},s.prototype.parseStyle=function(t){var i=t.attrs,s=(this.tagStyle[t.name]||"").split(";").concat((i.style||"").split(";")),e={},a="";i.id&&!this.xml&&(this.options.useAnchor?this.expose():"div"==t.name||"img"!==t.name&&"a"!==t.name&&"video"!==t.name&&"audio"!==t.name&&(i.id=void 0)),"my-player"==t.name?(i.width&&(e.width=parseFloat(i.width)+(i.width.includes("%")?"%":"px")),i.height&&(e.height=parseFloat(i.height)+(i.height.includes("%")?"%":"px"))):(i.width&&(e.width=parseFloat(i.width)+(i.width.includes("%")?"%":"px"),i.width=void 0),i.height&&(e.height=parseFloat(i.height)+(i.height.includes("%")?"%":"px"),i.height=void 0));for(var n=0,r=s.length;n<r;n++){var o=s[n].split(":");if(!(o.length<2)){var c=o.shift().trim().toLowerCase(),d=o.join(":").trim();if("-"===d[0]&&d.lastIndexOf("-")>0||d.includes("safe"))a+=";".concat(c,":").concat(d);else if(!e[c]||d.includes("import")||!e[c].includes("import")){if(d.includes("url")){var p=d.indexOf("(")+1;if(p){for(;'"'===d[p]||"'"===d[p]||l[d[p]];)p++;d=d.substr(0,p)+this.getUrl(d.substr(p))}}else d.includes("rpx")&&(d=d.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*h/750+"px"})));e[c]=d}}}return t.attrs.style=a,e},s.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"===this.tagName&&(this.xml=(this.xml||0)+1)},s.prototype.onAttrName=function(t){"data-"===(t=this.xml?t:t.toLowerCase()).substr(0,5)?"data-src"!==t||this.attrs.src?"img"===this.tagName||"a"===this.tagName||["data-parse","data-type","data-param"].includes(t)?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},s.prototype.onAttrVal=function(t){var s=this.attrName||"";"style"===s||"href"===s?this.attrs[s]=i(t,!0):s.includes("src")?this.attrs[s]=this.getUrl(i(t,!0)):s&&(this.attrs[s]=t)},s.prototype.onOpenTag=function(t){var i=Object.create(null);i.name=this.tagName,i.attrs=this.attrs,this.attrs=Object.create(null);var s=i.attrs,e=this.stack[this.stack.length-1],r=e?e.children:this.nodes,o=this.xml?t:a.voidTags[i.name];if(n[i.name]&&(s.class=n[i.name]+(s.class?" "+s.class:"")),"embed"===i.name){var l=s.src||"";l.includes(".mp4")||l.includes(".3gp")||l.includes(".m3u8")||(s.type||"").includes("video")?i.name="video":(l.includes(".mp3")||l.includes(".wav")||l.includes(".aac")||l.includes(".m4a")||(s.type||"").includes("audio"))&&(i.name="audio"),s.autostart&&(s.autoplay="T"),s.controls="T"}if("video"!==i.name&&"audio"!==i.name||("video"!==i.name||s.id||(s.id="v"+c++),s.controls||s.autoplay||(s.controls="T"),i.src=[],s.src&&(i.src.push(s.src),s.src=void 0),this.expose()),o){if(!this.hook(i)||a.ignoreTags[i.name])return void("base"!==i.name||this.options.domain?"source"===i.name&&e&&("video"===e.name||"audio"===e.name)&&s.src&&e.src.push(s.src):this.options.domain=s.href);var d=this.parseStyle(i);if("img"===i.name){if(s.src&&(s.src.includes("webp")&&(i.webp="T"),s.src.includes("data:")&&!s["original-src"]&&(s.ignore="T"),!s.ignore||i.webp||s.src.includes("cloud://"))){for(var p=this.stack.length;p--;){var u=this.stack[p];if("a"===u.name){i.a=u.attrs;break}var g=u.attrs.style||"";if(!g.includes("flex:")||g.includes("flex:0")||g.includes("flex: 0")||d.width&&d.width.includes("%"))if(g.includes("flex")&&"100%"===d.width)for(var f=p+1;f<this.stack.length;f++){var m=this.stack[f].attrs.style||"";if(!m.includes(";width")&&!m.includes(" width")&&0!==m.indexOf("width")){d.width="";break}}else g.includes("inline-block")&&(d.width&&"%"===d.width[d.width.length-1]?(u.attrs.style+=";max-width:"+d.width,d.width=""):u.attrs.style+=";max-width:100%");else{d.width="100% !important",d.height="";for(var v=p+1;v<this.stack.length;v++)this.stack[v].attrs.style.includes("vertical-align")&&this.stack[v].attrs.style.includes("max-width")&&this.stack[v].attrs.style.includes(";width:")?this.stack[v].attrs.style=this.stack[v].attrs.style||"":this.stack[v].attrs.style=(this.stack[v].attrs.style||"").replace("inline-","")}u.c=1}i.i=this.imgList.length;var y=s["original-src"]||s.src;if(this.imgList.includes(y)){var x=y.indexOf("://");if(-1!==x){x+=3;for(var b=y.substr(0,x);x<y.length&&"/"!==y[x];x++)b+=Math.random()>.5?y[x].toUpperCase():y[x];b+=y.substr(x),y=b}}this.imgList.push(y)}"inline"===d.display&&(d.display=""),s.ignore&&(d["max-width"]=d["max-width"]||"100%",s.style+=";-webkit-touch-callout:none"),parseInt(d.width)>h&&(d.height=void 0),isNaN(parseInt(d.width))||(i.w="T"),!isNaN(parseInt(d.height))&&(!d.height.includes("%")||e&&(e.attrs.style||"").includes("height"))&&(i.h="T")}else if("svg"===i.name)return r.push(i),this.stack.push(i),void this.popNode();for(var w in d)d[w]&&(s.style+=";".concat(w,":").concat(d[w].replace(" !important","")));s.style=s.style.substr(1)||void 0}else("pre"===i.name||(s.style||"").includes("white-space")&&s.style.includes("pre"))&&2!==this.pre&&(this.pre=i.pre=1),i.children=[],this.stack.push(i);r.push(i)},s.prototype.onCloseTag=function(t){var i;for(t=this.xml?t:t.toLowerCase(),i=this.stack.length;i--&&this.stack[i].name!==t;);if(-1!==i)for(;this.stack.length>i;)this.popNode();else if("p"===t||"br"===t){(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push({name:t,attrs:{class:n[t],style:this.tagStyle[t]}})}},s.prototype.popNode=function(){var t=this.stack.pop(),i=t.attrs,s=t.children,e=this.stack[this.stack.length-1],n=e?e.children:this.nodes;if(!this.hook(t)||a.ignoreTags[t.name])return"title"===t.name&&s.length&&"text"===s[0].type&&this.options.setTitle&&wx.setNavigationBarTitle({title:s[0].text}),void n.pop();if(t.pre&&2!==this.pre){this.pre=t.pre=void 0;for(var r=this.stack.length;r--;)this.stack[r].pre&&(this.pre=1)}if("svg"===t.name){if(this.xml>1)return void this.xml--;var o="",l=i.style;return i.style="",i.xmlns="http://www.w3.org/2000/svg",function t(i){if("text"!==i.type){var s=a.svgDict[i.name]||i.name;for(var e in o+="<"+s,i.attrs){var n=i.attrs[e];n&&(o+=" ".concat(a.svgDict[e]||e,'="').concat(n,'"'))}if(i.children){o+=">";for(var r=0;r<i.children.length;r++)t(i.children[r]);o+="</"+s+">"}else o+="/>"}else o+=i.text}(t),t.name="img",t.attrs={src:"data:image/svg+xml;utf8,"+o.replace(/#/g,"%23"),style:l,ignore:"T"},t.children=void 0,void(this.xml=!1)}var c={};if(i.align&&("table"===t.name?"center"===i.align?c["margin-inline-start"]=c["margin-inline-end"]="auto":c.float=i.align:c["text-align"]=i.align,i.align=void 0),i.dir&&(c.direction=i.dir,i.dir=void 0),"font"===t.name&&(i.color&&(c.color=i.color,i.color=void 0),i.face&&(c["font-family"]=i.face,i.face=void 0),i.size)){var d=parseInt(i.size);isNaN(d)||(d<1?d=1:d>7&&(d=7),c["font-size"]=["x-small","small","medium","large","x-large","xx-large","xxx-large"][d-1]),i.size=void 0}if((i.class||"").includes("align-center")&&(c["text-align"]="center"),Object.assign(c,this.parseStyle(t)),"table"!==t.name&&parseInt(c.width)>h&&(c.width.includes("%")?c["max-width"]=c.width:c["max-width"]="100%",c["box-sizing"]="border-box"),a.blockTags[t.name])t.name="div";else if(a.trustTags[t.name]||this.xml)if("a"===t.name||"ad"===t.name)this.expose();else if("video"===t.name||"audio"===t.name)(c.height||"").includes("auto")&&(c.height=void 0),t.children=void 0;else if("ul"!==t.name&&"ol"!==t.name||!t.c){if("table"===t.name){var p=parseFloat(i.cellpadding),u=parseFloat(i.cellspacing),g=parseFloat(i.border);if(t.c&&(isNaN(p)&&(p=2),isNaN(u)&&(u=2)),g&&(i.style+=";border:"+g+"px solid gray"),t.flag&&t.c){t.flag=void 0,c.display="grid",u?(c["grid-gap"]=u+"px",c.padding=u+"px"):g&&(i.style+=";border-left:0;border-top:0");var f=[],m=[],v=[],y={};!function t(i){for(var s=0;s<i.length;s++)"tr"===i[s].name?m.push(i[s]):t(i[s].children||[])}(s);for(var x=1;x<=m.length;x++){for(var b=1,w=0;w<m[x-1].children.length;w++){var k=m[x-1].children[w];if("td"===k.name||"th"===k.name){for(;y[x+"."+b];)b++;k.c=1;var N=k.attrs.style||"",T=N.indexOf("width")?N.indexOf(";width"):0;if(-1!==T){var O=N.indexOf(";",T+6);-1===O&&(O=N.length),k.attrs.colspan||(f[b]=N.substring(T?T+7:6,O)),N=N.substr(0,T)+N.substr(O)}if(N+=(g?";border:".concat(g,"px solid gray")+(u?"":";border-right:0;border-bottom:0"):"")+(p?";padding:".concat(p,"px"):""),k.attrs.colspan&&(N+=";grid-column-start:".concat(b,";grid-column-end:").concat(b+parseInt(k.attrs.colspan)),k.attrs.rowspan||(N+=";grid-row-start:".concat(x,";grid-row-end:").concat(x+1)),b+=parseInt(k.attrs.colspan)-1),k.attrs.rowspan){N+=";grid-row-start:".concat(x,";grid-row-end:").concat(x+parseInt(k.attrs.rowspan)),k.attrs.colspan||(N+=";grid-column-start:".concat(b,";grid-column-end:").concat(b+1));for(var C=1;C<k.attrs.rowspan;C++)for(var S=0;S<(k.attrs.colspan||1);S++)y[x+C+"."+(b-S)]=1}N&&(k.attrs.style=N),v.push(k),b++}}if(1===x){for(var I="",A=1;A<b;A++)I+=(f[A]?f[A]:"auto")+" ";c["grid-template-columns"]=I}}t.children=v}else t.c&&(c.display="table"),isNaN(u)||(c["border-spacing"]=u+"px"),(g||p||t.c)&&function i(s){for(var e=0;e<s.length;e++){var a=s[e];t.c&&(a.c=1),"th"===a.name||"td"===a.name?(g&&(a.attrs.style="border:".concat(g,"px solid gray;").concat(a.attrs.style||"")),p&&(a.attrs.style="padding:".concat(p,"px;").concat(a.attrs.style||""))):a.children&&i(a.children)}}(s);if(this.options.scrollTable&&!(i.style||"").includes("inline")){var z=Object.assign({},t);t.name="div",t.attrs={style:"overflow-x:auto;padding:1px"},t.children=[z],i=z.attrs}}else if("td"!==t.name&&"th"!==t.name||!i.colspan&&!i.rowspan){if("ruby"===t.name){t.name="span";for(var j=0;j<s.length-1;j++)"text"===s[j].type&&"rt"===s[j+1].name&&(s[j]={name:"span",attrs:{style:"display:inline-block;text-align:center"},children:[{name:"div",attrs:{style:"font-size:50%;"+(s[j+1].attrs.style||"")},children:s[j+1].children},s[j]]},s.splice(j+1,1))}}else for(var L=this.stack.length;L--;)if("table"===this.stack[L].name){this.stack[L].flag=1;break}}else{var q={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman"};q[i.type]&&(i.style+=";list-style-type:"+q[i.type],i.type=void 0),t.c=1;for(var F=s.length;F--;)"li"===s[F].name&&(s[F].c=1)}else t.name="span";if(t.attrs&&t.attrs.class&&t.attrs.class.includes("parse-node")&&this.expose(),(c.display||"").includes("flex")&&!t.c)for(var U=s.length;U--;){var V=s[U];V.f&&(V.attrs.style=(V.attrs.style||"")+V.f,V.f=void 0)}var D=e&&((e.attrs.style||"").includes("flex")||(e.attrs.style||"").includes("grid"))&&!t.c&&!(c.display||"").includes("inline");if(D&&(t.f=";max-width:100%"),s.length>=50&&t.c&&!(c.display||"").includes("flex"))for(var B=s.length-1,P=B;P>=-1;P--)(-1===P||s[P].c||!s[P].name||"div"!==s[P].name&&"p"!==s[P].name&&"h"!==s[P].name[0]||(s[P].attrs.style||"").includes("inline"))&&(B-P>=5&&s.splice(P+1,B-P,{name:"div",attrs:{},children:t.children.slice(P+1,B+1)}),B=P-1);for(var Z in c)if(c[Z]){var G=";".concat(Z,":").concat(c[Z].replace(" !important",""));D&&(Z.includes("flex")&&"flex-direction"!==Z||"align-self"===Z||Z.includes("grid")||"-"===c[Z][0]||Z.includes("width")&&G.includes("%"))?(t.f+=G,"width"===Z&&(i.style+=";width:"+"".concat(c[Z]))):i.style+=G}i.style=i.style.substr(1)||void 0},s.prototype.onText=function(t){if(!this.pre){for(var s,e="",a=0,n=t.length;a<n;a++)l[t[a]]?(" "!==e[e.length-1]&&(e+=" "),"\n"!==t[a]||s||(s=!0)):e+=t[a];if(" "===e&&s)return;t=e}var r=Object.create(null);r.type="text",r.text=i(t),this.hook(r)&&("force"===this.options.selectable&&o.includes("iOS")&&!wx.canIUse("rich-text.user-select")&&this.expose(),(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push(r))},e.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(var i=this.content.length;-1!==this.i&&this.i<i;)this.state()},e.prototype.checkClose=function(t){var i="/"===this.content[this.i];return!!(">"===this.content[this.i]||i&&">"===this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=i?2:1,this.start=this.i,this.handler.onOpenTag(i),"script"===this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!==this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},e.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1!==this.i){var t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"===t||"!"===t||"?"===t){this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i));var i=this.content[this.i+2];if("/"===t&&(i>="a"&&i<="z"||i>="A"&&i<="Z"))return this.i+=2,this.start=this.i,void(this.state=this.endTag);var s="--\x3e";"!"===t&&"-"===this.content[this.i+2]&&"-"===this.content[this.i+3]||(s=">"),this.i=this.content.indexOf(s,this.i),-1!==this.i&&(this.i+=s.length,this.start=this.i)}else this.i++}else this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length))},e.prototype.tagName=function(){if(l[this.content[this.i]]){for(this.handler.onTagName(this.content.substring(this.start,this.i));l[this.content[++this.i]];);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},e.prototype.attrName=function(){var t=this.content[this.i];if(l[t]||"="===t){this.handler.onAttrName(this.content.substring(this.start,this.i));for(var i="="===t,s=this.content.length;++this.i<s;)if(t=this.content[this.i],!l[t]){if(this.checkClose())return;if(i)return this.start=this.i,void(this.state=this.attrVal);if("="!==this.content[this.i])return this.start=this.i,void(this.state=this.attrName);i=!0}}else this.checkClose("onAttrName")||this.i++},e.prototype.attrVal=function(){var t=this.content[this.i],i=this.content.length;if('"'===t||"'"===t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1===this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<i;this.i++){if(l[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}for(;l[this.content[++this.i]];);this.i<i&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},e.prototype.endTag=function(){var t=this.content[this.i];if(l[t]||">"===t||"/"===t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!==t&&(this.i=this.content.indexOf(">",this.i),-1===this.i))return;this.start=++this.i,this.state=this.text}else this.i++},module.exports=s;
},{isPage:false,isComponent:false,currentFile:'components/mp-weixin/parser.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("components/mp-weixin/remove/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function t(t){this.vm=t}t.prototype.onUpdate=function(t,s){return t},t.prototype.onParse=function(t,s){if("div"==t.name){if(t.attrs,t.attrs.class,t.attrs&&t.attrs.class&&(t.attrs.class.split(" ").includes("onload-hidden")&&(t.attrs.style&&t.attrs.style.indexOf("display")>=0?t.attrs.style=t.attrs.style.replace(/display:.*?;/g,"display:none;"):t.attrs.style&&t.attrs.style.indexOf("display")<0?t.attrs.style="display:none;"+t.attrs.style:t.attrs.style="display:none;"),t.attrs.class.split(" ").includes("parse-hidden")))return!1;t.attrs&&"pageId"==t.attrs.id&&t.attrs.style&&t.attrs.style.indexOf("height")>=0&&(t.attrs.style=t.attrs.style.replace(/height:.*?;/g,""))}},t.prototype.onLoad=function(){},t.prototype.onDetached=function(){},module.exports=t;
},{isPage:false,isComponent:false,currentFile:'components/mp-weixin/remove/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("components/mp-weixin/style/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function t(){this.styles=[]}function e(t,e){function r(e){if("#"===e[0]){if(t.attrs.id&&t.attrs.id.trim()===e.substr(1))return 3}else if("."===e[0]){e=e.substr(1);for(var r=(t.attrs.class||"").split(" "),s=0;s<r.length;s++)if(r[s].trim()===e)return 2}else if(t.name===e)return 1;return 0}if(e instanceof Array){for(var s=0,n=0;n<e.length;n++){var i=r(e[n]);if(!i)return 0;i>s&&(s=i)}return s}return r(e)}var r=require("./parser");t.prototype.onParse=function(t,s){if("style"===t.name&&t.children.length&&"text"===t.children[0].type)this.styles=this.styles.concat((new r).parse(t.children[0].text));else if(t.name){for(var n=["","","",""],i=0,l=this.styles.length;i<l;i++){var a=this.styles[i],f=e(t,a.key||a.list[a.list.length-1]),c=void 0;if(f){if(!a.key){c=a.list.length-2;for(var o=s.stack.length;c>=0&&o--;)if(">"===a.list[c]){if(c<1||c>a.list.length-2)break;e(s.stack[o],a.list[c-1])?c-=2:c++}else e(s.stack[o],a.list[c])&&c--;f=4}if(a.key||c<0)if(a.pseudo&&t.children){var u=void 0;a.style=a.style.replace(/content:([^;]+)/,(function(e,r){return u=r.replace(/['"]/g,"").replace(/attr\((.+?)\)/,(function(e,r){return t.attrs[r.trim()]||""})).replace(/\\(\w{4})/,(function(t,e){return String.fromCharCode(parseInt(e,16))})),""}));var h={name:"span",attrs:{style:a.style},children:[{type:"text",text:u}]};"before"===a.pseudo?t.children.unshift(h):t.children.push(h)}else n[f-1]+=a.style+(";"===a.style[a.style.length-1]?"":";")}}(n=n.join("")).length>2&&(t.attrs.style=n+(t.attrs.style||""))}},module.exports=t;
},{isPage:false,isComponent:false,currentFile:'components/mp-weixin/style/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("components/mp-weixin/style/parser.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function t(){this.styles=[],this.selectors=[]}function s(t){this.selector="",this.style="",this.handler=t}require("../../../@babel/runtime/helpers/Arrayincludes");var i={" ":!0,"\n":!0,"\t":!0,"\r":!0,"\f":!0};t.prototype.parse=function(t){return new s(this).parse(t),this.styles},t.prototype.onSelector=function(t){function s(t){var s,i,e=[];for(s=1,i=0;s<t.length;s++)"."!==t[s]&&"#"!==t[s]||(e.push(t.substring(i,s)),i=s);return e.length?(e.push(t.substring(i,s)),e):t}if(!(t.includes("[")||t.includes("*")||t.includes("@"))){var i={};if(t.includes(":")){var e=t.split(":"),n=e.pop();if("before"!==n&&"after"!==n)return;i.pseudo=n,t=e[0]}if(t.includes(" ")){i.list=[];for(var h=t.split(" "),o=0;o<h.length;o++)if(h[o].length)for(var r=h[o].split(">"),l=0;l<r.length;l++)i.list.push(s(r[l])),l<r.length-1&&i.list.push(">")}else i.key=s(t);this.selectors.push(i)}},t.prototype.onContent=function(t){for(var s=0;s<this.selectors.length;s++)this.selectors[s].style=t;this.styles=this.styles.concat(this.selectors),this.selectors=[]},s.prototype.parse=function(t){this.i=0,this.content=t,this.state=this.blank;for(var s=t.length;this.i<s;this.i++)this.state(t[this.i])},s.prototype.comment=function(){this.i=this.content.indexOf("*/",this.i)+1,this.i||(this.i=this.content.length)},s.prototype.blank=function(t){if(!i[t]){if("/"===t&&"*"===this.content[this.i+1])return void this.comment();this.selector+=t,this.state=this.name}},s.prototype.name=function(t){if("/"!==t||"*"!==this.content[this.i+1])if("{"===t||","===t||";"===t){if(this.handler.onSelector(this.selector.trimEnd()),this.selector="","{"!==t)for(;i[this.content[++this.i]];);"{"===this.content[this.i]?(this.floor=1,this.state=this.val):this.selector+=this.content[this.i]}else this.selector+=i[t]?" ":t;else this.comment()},s.prototype.val=function(t){if("/"!==t||"*"!==this.content[this.i+1]){if("{"===t)this.floor++;else if("}"===t&&!--this.floor)return this.handler.onContent(this.style),this.style="",void(this.state=this.blank);this.style+=t}else this.comment()},module.exports=t;
},{isPage:false,isComponent:false,currentFile:'components/mp-weixin/style/parser.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("components/mp-weixin/txv-video/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=function(t){this.vm=t},e=requirePlugin("tencentvideo");t.prototype.onUpdate=function(t,e){e.trustTags["txv-video"]=!0,this.videos=[]},t.prototype.onParse=function(t,e){if("iframe"===t.name&&(t.attrs.src||"").includes("vid")){var o=t.attrs.src.match(/vid=([^&\s]+)/);o&&(t.name="txv-video",t.attrs.vid=o[1],this.videos.push(o[1]),t.attrs.src=void 0,e.expose())}},t.prototype.onLoad=function(){var t=this;setTimeout((function(){for(var o=0;o<t.videos.length;o++){var i=e.getTxvContext(t.videos[o]);i.id=t.videos[o],t.vm._videos.push(i)}}),50)},module.exports=t;
},{isPage:false,isComponent:false,currentFile:'components/mp-weixin/txv-video/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("config/config_saas.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={config:{appid:"wx1f718043e6351e23",tenantId:13,schemaId:1,weChatId:1,seminarId:0x77ac4b09d2296,code_version:"0.1.0",isStatic:!0,pageLimit:20,CampaignID:"9c470000-00a2-5254-304e-08d892b03163",Campaign:"Techo Park开发者大会",officialAccount:"https://mp.weixin.qq.com/s/jqpD6Q3O3q9Kk6Ccbcw7Mw",gateway:{general:"https://uat-api.smarket.net.cn",project:"https://mktsaas.tencent-cloud.com/api",jsonUrl:"https://mkttencent-1256915710.file.myqcloud.com/saas/static",icgateway:"https://api.ma.scrmtech.com"},jiatui:{general:"https://mtxjt.tencent-cloud.com"},qidian:{appkey:"72ecf27a250f2d194e6e3b3431713642",apiHost:"https://v.qidian.qq.com"},sensors:{dataUrl:"https://mtxjt.tencent-cloud.com/data-center/in/data/report/web2"},formTpl:{common:"885_75930a910e82335a",reg:"885_8a32053705c24dee"}}};
},{isPage:false,isComponent:false,currentFile:'config/config_saas.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("config/config_uat.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={config:{appid:"wx1f718043e6351e23",weChatId:1,tenantId:13,schemaId:1,seminarId:0x77ac4b09d2296,code_version:"0.3.9",isStatic:!0,pageLimit:20,CampaignID:"9c470000-00a2-5254-304e-08d892b03163",Campaign:"Techo Park开发者大会",officialAccount:"https://mp.weixin.qq.com/s/jqpD6Q3O3q9Kk6Ccbcw7Mw",gateway:{general:"https://uat-api.smarket.net.cn",project:"https://mkttest.tencent-cloud.com/api",jsonUrl:"https://mkttencent-1256915710.file.myqcloud.com/uat/static",icgateway:"https://api.ma.scrmtech.com"},jiatui:{general:"https://mtxjttest.tencent-cloud.com"},qidian:{appkey:"ef1cf2c57a5e28380bd4879dba52100c",apiHost:"https://v.qidian.qq.com"},sensors:{dataUrl:"https://mtxjttest.tencent-cloud.com/data-center/in/data/report/web2"},formTpl:{common:"560_2e17961efbcd4737",reg:"885_8a32053705c24dee"}}};
},{isPage:false,isComponent:false,currentFile:'config/config_uat.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("config/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../@babel/runtime/helpers/objectSpread2"),r={},a="saas";"release"==__wxConfig.envVersion&&(a="saas");var t=e({loadConfig:function(){return r._isLoadOver||(wx.getStorageSync("smarket_env_manual")&&"release"!=__wxConfig.envVersion&&(a=wx.getStorageSync("smarket_env_manual")),"uat"==a?e=require("./config_uat.js").config:"saas"==a&&(e=require("./config_saas.js").config),Object.assign(r,e,{_isLoadOver:!0}),wx.getStorageSync("smarket_env")?wx.getStorageSync("smarket_env")!==a&&(wx.clearStorageSync(),wx.setStorageSync("smarket_env",a)):wx.setStorageSync("smarket_env",a),(!wx.getStorageSync("smarket_version")||wx.getStorageSync("smarket_version")&&wx.getStorageSync("smarket_version")!==r.code_version)&&(wx.clearStorageSync(),wx.setStorageSync("smarket_env",a),wx.setStorageSync("smarket_version",r.code_version))),r;var e},smarket_env:a},r);exports.default=t;
},{isPage:false,isComponent:false,currentFile:'config/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/@vant/weapp/common/component.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VantComponent=void 0;var e=require("../mixins/basic");exports.VantComponent=function(s){var a,t,o,r={};a=s,t=r,o={data:"data",props:"properties",watch:"observers",mixins:"behaviors",methods:"methods",beforeCreate:"created",created:"attached",mounted:"ready",destroyed:"detached",classes:"externalClasses"},Object.keys(o).forEach((function(e){a[e]&&(t[o[e]]=a[e])})),r.externalClasses=r.externalClasses||[],r.externalClasses.push("custom-class"),r.behaviors=r.behaviors||[],r.behaviors.push(e.basic);var i=s.relation;i&&(r.relations=i.relations,r.behaviors.push(i.mixin)),s.field&&r.behaviors.push("wx://form-field"),r.options={multipleSlots:!0,addGlobalClass:!0},Component(r)};
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/@vant/weapp/common/component.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/@vant/weapp/common/relation.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useChildren=exports.useParent=void 0,exports.useParent=function(e,n){var t,i="../".concat(e,"/index");return{relations:(t={},t[i]={type:"ancestor",linked:function(){n&&n.call(this)},linkChanged:function(){n&&n.call(this)},unlinked:function(){n&&n.call(this)}},t),mixin:Behavior({created:function(){var e=this;Object.defineProperty(this,"parent",{get:function(){return e.getRelationNodes(i)[0]}}),Object.defineProperty(this,"index",{get:function(){var n,t;return null===(t=null===(n=e.parent)||void 0===n?void 0:n.children)||void 0===t?void 0:t.indexOf(e)}})}})}},exports.useChildren=function(e,n){var t,i="../".concat(e,"/index");return{relations:(t={},t[i]={type:"descendant",linked:function(e){n&&n.call(this,e)},linkChanged:function(e){n&&n.call(this,e)},unlinked:function(e){n&&n.call(this,e)}},t),mixin:Behavior({created:function(){var e=this;Object.defineProperty(this,"children",{get:function(){return e.getRelationNodes(i)||[]}})}})}};
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/@vant/weapp/common/relation.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/@vant/weapp/common/utils.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.isWxWork=exports.isPC=exports.getCurrentPage=exports.clamp=exports.addNumber=exports.toPromise=exports.groupSetData=exports.getAllRect=exports.getRect=exports.pickExclude=exports.requestAnimationFrame=exports.addUnit=exports.nextTick=exports.range=exports.getSystemInfoSync=exports.isDef=void 0;var e=require("./validator"),t=require("./version"),r=require("./validator");Object.defineProperty(exports,"isDef",{enumerable:!0,get:function(){return r.isDef}});var n=require("./version");Object.defineProperty(exports,"getSystemInfoSync",{enumerable:!0,get:function(){return n.getSystemInfoSync}}),exports.range=function(e,t,r){return Math.min(Math.max(e,t),r)},exports.nextTick=function(e){(0,t.canIUseNextTick)()?wx.nextTick(e):setTimeout((function(){e()}),1e3/30)},exports.addUnit=function(t){if((0,e.isDef)(t))return t=String(t),(0,e.isNumber)(t)?"".concat(t,"px"):t},exports.requestAnimationFrame=function(e){return setTimeout((function(){e()}),1e3/30)},exports.pickExclude=function(t,r){return(0,e.isPlainObject)(t)?Object.keys(t).reduce((function(e,n){return r.includes(n)||(e[n]=t[n]),e}),{}):{}},exports.getRect=function(e,t){return new Promise((function(r){wx.createSelectorQuery().in(e).select(t).boundingClientRect().exec((function(e){return void 0===e&&(e=[]),r(e[0])}))}))},exports.getAllRect=function(e,t){return new Promise((function(r){wx.createSelectorQuery().in(e).selectAll(t).boundingClientRect().exec((function(e){return void 0===e&&(e=[]),r(e[0])}))}))},exports.groupSetData=function(e,r){(0,t.canIUseGroupSetData)()?e.groupSetData(r):r()},exports.toPromise=function(t){return(0,e.isPromise)(t)?t:Promise.resolve(t)},exports.addNumber=function(e,t){var r=Math.pow(10,10);return Math.round((e+t)*r)/r};exports.clamp=function(e,t,r){return Math.min(Math.max(e,t),r)},exports.getCurrentPage=function(){var e=getCurrentPages();return e[e.length-1]},exports.isPC=["mac","windows"].includes((0,t.getSystemInfoSync)().platform),exports.isWxWork="wxwork"===(0,t.getSystemInfoSync)().environment;
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/@vant/weapp/common/utils.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/@vant/weapp/common/validator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/typeof");function t(e){return"function"==typeof e}function r(t){return null!==t&&"object"===e(t)&&!Array.isArray(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isVideoUrl=exports.isImageUrl=exports.isBoolean=exports.isNumber=exports.isObj=exports.isDef=exports.isPromise=exports.isPlainObject=exports.isFunction=void 0,exports.isFunction=t,exports.isPlainObject=r,exports.isPromise=function(e){return r(e)&&t(e.then)&&t(e.catch)},exports.isDef=function(e){return null!=e},exports.isObj=function(t){var r=e(t);return null!==t&&("object"===r||"function"===r)},exports.isNumber=function(e){return/^\d+(\.\d+)?$/.test(e)},exports.isBoolean=function(e){return"boolean"==typeof e};var o=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,s=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;exports.isImageUrl=function(e){return o.test(e)},exports.isVideoUrl=function(e){return s.test(e)};
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/@vant/weapp/common/validator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/@vant/weapp/common/version.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e;function t(){return null==e&&(e=wx.getSystemInfoSync()),e}function n(e){return function(e,t){e=e.split("."),t=t.split(".");for(var n=Math.max(e.length,t.length);e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(var r=0;r<n;r++){var s=parseInt(e[r],10),o=parseInt(t[r],10);if(s>o)return 1;if(s<o)return-1}return 0}(t().SDKVersion,e)>=0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.canIUseGetUserProfile=exports.canIUseCanvas2d=exports.canIUseNextTick=exports.canIUseGroupSetData=exports.canIUseAnimate=exports.canIUseFormFieldButton=exports.canIUseModel=exports.getSystemInfoSync=void 0,exports.getSystemInfoSync=t,exports.canIUseModel=function(){return n("2.9.3")},exports.canIUseFormFieldButton=function(){return n("2.10.3")},exports.canIUseAnimate=function(){return n("2.9.0")},exports.canIUseGroupSetData=function(){return n("2.4.0")},exports.canIUseNextTick=function(){try{return wx.canIUse("nextTick")}catch(e){return n("2.7.1")}},exports.canIUseCanvas2d=function(){return n("2.9.0")},exports.canIUseGetUserProfile=function(){return!!wx.getUserProfile};
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/@vant/weapp/common/version.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/@vant/weapp/field/props.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.textareaProps=exports.inputProps=exports.commonProps=void 0,exports.commonProps={value:{type:String,observer:function(e){e!==this.value&&(this.setData({innerValue:e}),this.value=e)}},placeholder:String,placeholderStyle:String,placeholderClass:String,disabled:Boolean,maxlength:{type:Number,value:-1},cursorSpacing:{type:Number,value:50},autoFocus:Boolean,focus:Boolean,cursor:{type:Number,value:-1},selectionStart:{type:Number,value:-1},selectionEnd:{type:Number,value:-1},adjustPosition:{type:Boolean,value:!0},holdKeyboard:Boolean},exports.inputProps={type:{type:String,value:"text"},password:Boolean,confirmType:String,confirmHold:Boolean,alwaysEmbed:Boolean},exports.textareaProps={autoHeight:Boolean,fixed:Boolean,showConfirmBar:{type:Boolean,value:!0},disableDefaultPadding:{type:Boolean,value:!0}};
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/@vant/weapp/field/props.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/@vant/weapp/mixins/basic.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.basic=void 0,exports.basic=Behavior({methods:{$emit:function(e,t,i){this.triggerEvent(e,t,i)},set:function(e){return this.setData(e),new Promise((function(e){return wx.nextTick(e)}))}}});
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/@vant/weapp/mixins/basic.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/@vant/weapp/mixins/link.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.link=void 0,exports.link=Behavior({properties:{url:String,linkType:{type:String,value:"navigateTo"}},methods:{jumpLink:function(e){void 0===e&&(e="url");var t=this.data[e];t&&("navigateTo"===this.data.linkType&&getCurrentPages().length>9?wx.redirectTo({url:t}):wx[this.data.linkType]({url:t}))}}});
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/@vant/weapp/mixins/link.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/@vant/weapp/mixins/transition.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.transition=void 0;var e=require("../common/utils"),t=require("../common/validator"),a=function(e){return{enter:"van-".concat(e,"-enter van-").concat(e,"-enter-active enter-class enter-active-class"),"enter-to":"van-".concat(e,"-enter-to van-").concat(e,"-enter-active enter-to-class enter-active-class"),leave:"van-".concat(e,"-leave van-").concat(e,"-leave-active leave-class leave-active-class"),"leave-to":"van-".concat(e,"-leave-to van-").concat(e,"-leave-active leave-to-class leave-active-class")}};exports.transition=function(n){return Behavior({properties:{customStyle:String,show:{type:Boolean,value:n,observer:"observeShow"},duration:{type:null,value:300,observer:"observeDuration"},name:{type:String,value:"fade"}},data:{type:"",inited:!1,display:!1},ready:function(){!0===this.data.show&&this.observeShow(!0,!1)},methods:{observeShow:function(e,t){e!==t&&(e?this.enter():this.leave())},enter:function(){var n=this;this.waitEnterEndPromise=new Promise((function(s){var i=n.data,r=i.duration,o=i.name,c=a(o),v=(0,t.isObj)(r)?r.enter:r;"enter"!==n.status&&(n.status="enter",n.$emit("before-enter"),(0,e.requestAnimationFrame)((function(){"enter"===n.status&&(n.$emit("enter"),n.setData({inited:!0,display:!0,classes:c.enter,currentDuration:v}),(0,e.requestAnimationFrame)((function(){"enter"===n.status&&(n.transitionEnded=!1,n.setData({classes:c["enter-to"]}),s())})))})))}))},leave:function(){var n=this;this.waitEnterEndPromise&&this.waitEnterEndPromise.then((function(){if(n.data.display){var s=n.data,i=s.duration,r=s.name,o=a(r),c=(0,t.isObj)(i)?i.leave:i;n.status="leave",n.$emit("before-leave"),(0,e.requestAnimationFrame)((function(){"leave"===n.status&&(n.$emit("leave"),n.setData({classes:o.leave,currentDuration:c}),(0,e.requestAnimationFrame)((function(){"leave"===n.status&&(n.transitionEnded=!1,setTimeout((function(){return n.onTransitionEnd()}),c),n.setData({classes:o["leave-to"]}))})))}))}}))},onTransitionEnd:function(){if(!this.transitionEnded){this.transitionEnded=!0,this.$emit("after-".concat(this.status));var e=this.data,t=e.show,a=e.display;!t&&a&&this.setData({display:!1})}}}})};
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/@vant/weapp/mixins/transition.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/fast-deep-equal/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var r,t,e=require("../../@babel/runtime/helpers/typeof");module.exports=(r={},t=function(t,n){if(!r[t])return require(n);if(!r[t].status){var o=r[t].m;o._exports=o._tempexports;var i=Object.getOwnPropertyDescriptor(o,"exports");i&&i.configurable&&Object.defineProperty(o,"exports",{set:function(r){"object"===e(r)&&r!==o._exports&&(o._exports.__proto__=r.__proto__,Object.keys(r).forEach((function(t){o._exports[t]=r[t]}))),o._tempexports=r},get:function(){return o._tempexports}}),r[t].status=1,r[t].func(r[t].req,o,o.exports)}return r[t].m.exports},function(t,e,n){r[t]={status:0,func:e,req:n,m:{exports:{},_tempexports:{}}}}(1705569259611,(function(r,t,n){var o=Array.isArray,i=Object.keys,u=Object.prototype.hasOwnProperty;t.exports=function r(t,n){if(t===n)return!0;if(t&&n&&"object"==e(t)&&"object"==e(n)){var f,s,p,c=o(t),a=o(n);if(c&&a){if((s=t.length)!=n.length)return!1;for(f=s;0!=f--;)if(!r(t[f],n[f]))return!1;return!0}if(c!=a)return!1;var x=t instanceof Date,_=n instanceof Date;if(x!=_)return!1;if(x&&_)return t.getTime()==n.getTime();var g=t instanceof RegExp,b=n instanceof RegExp;if(g!=b)return!1;if(g&&b)return t.toString()==n.toString();var m=i(t);if((s=m.length)!==i(n).length)return!1;for(f=s;0!=f--;)if(!u.call(n,m[f]))return!1;for(f=s;0!=f--;)if(!r(t[p=m[f]],n[p]))return!1;return!0}return t!=t&&n!=n}}),(function(r){return t({}[r],r)})),t(1705569259611));
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/fast-deep-equal/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/miniprogram-computed/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/typeof");module.exports=function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===e(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){e.exports=n(1).behavior},function(t,n,r){var o="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},a=r(2)({proto:!0}),i=r(3),u=r(4),c=r(5),f=[String,Number,Boolean,Object,Array,null],l=["",0,!1,null,[],null],s=function(e,t){var n=e;return t.forEach((function(e){n="object"!==(void 0===n?"undefined":o(n))||null===n?void 0:n[e]})),n};n.behavior=Behavior({lifetimes:{created:function(){this._initComputedWatchInfo()}},definitionFilter:function(e){var t=e.computed||{},n=e.watch||{},r=[];if(e.methods||(e.methods={}),e.data||(e.data={}),e.methods._initComputedWatchInfo)throw new Error("Please do not use this behavior more than once in a single component");var d=[];e.methods._initComputedWatchInfo=function(){var e=this;this._computedWatchInfo||(this._computedWatchInfo={computedRelatedPathValues:{},watchCurVal:{}},d.forEach((function(t){return t.call(e)})))};var h,p=[];(Object.keys(t).forEach((function(n){var r,a,i,h=u.parseSingleDataPath(n).path,v=t[n],b=[],m=(r=e.data,a=e.properties,i={},Object.keys(r).forEach((function(e){i[e]=r[e]})),a&&Object.keys(a).forEach((function(e){var t=null,n=a[e],r=f.indexOf(n);if(r>=0)t=l[r];else if(n.value)t=n.value;else{var o=f.indexOf(n.type);o>=0&&(t=l[o])}i[e]=t})),i),x=v(c.create(m,b));!function(e,t,n){for(var r=e,a=0;a<t.length-1;){var i=t[a++];"number"==typeof i?r[i]instanceof Array||(r[i]=[]):"object"===o(r[i])&&null!==r[i]||(r[i]={}),r=r[i]}r[t[a]]=n}(e.data,h,c.unwrap(x)),d.push((function(){var e=this,t=b.map((function(t){var n=t.path;return{path:n,value:s(e.data,n)}}));this._computedWatchInfo.computedRelatedPathValues[n]=t})),p.push((function(){for(var e,t=this._computedWatchInfo.computedRelatedPathValues[n],r=!1,o=0;o<t.length;o++){var a=t[o],i=a.path;if(a.value!==s(this.data,i)){r=!0;break}}if(!r)return!1;var u=[],f=v(c.create(this.data,u));return this.setData(((e={})[n]=f,e)),this._computedWatchInfo.computedRelatedPathValues[n]=u,!0}))})),p.length&&r.push({fields:"**",observer:function(){var e=this;if(this._computedWatchInfo){var t=void 0;do{t=!1,p.forEach((function(n){n.call(e)&&(t=!0)}))}while(t)}}}),Object.keys(n).forEach((function(e){var t=u.parseMultiDataPaths(e);d.push((function(){var n=this,r=t.map((function(e){var t=e.path,r=e.options,o=s(n.data,t);return r.deepCmp?a(o):o}));this._computedWatchInfo.watchCurVal[e]=r})),r.push({fields:e,observer:function(){var r=this;if(this._computedWatchInfo){var o=this._computedWatchInfo.watchCurVal[e],u=t.map((function(e){var t=e.path,n=e.options;return{val:s(r.data,t),options:n}})),c=u.map((function(e){var t=e.val;return e.options.deepCmp?a(t):t}));this._computedWatchInfo.watchCurVal[e]=c;for(var f=!1,l=0;l<c.length;l++){if(t[l].options.deepCmp?!i(o[l],c[l]):o[l]!==c[l]){f=!0;break}}f&&n[e].apply(this,u.map((function(e){return e.val})))}}})})),"object"!==o(e.observers)&&(e.observers={}),e.observers instanceof Array)?(h=e.observers).push.apply(h,r):r.forEach((function(t){var n=e.observers[t.fields];e.observers[t.fields]=n?function(){t.observer.call(this),n.call(this)}:t.observer}))}})},function(e,t){e.exports=require("rfdc")},function(e,t){e.exports=require("fast-deep-equal")},function(e,t,n){var r=/^\s/,o=function(e,t){throw new Error('Parsing data path "'+e+'" failed at char "'+e[t]+'" (index '+t+")")},a=function(e,t){for(var n=t.index;t.index<t.length;){var r=e[t.index];if(!/^[0-9]/.test(r))break;t.index++}return n===t.index&&o(e,t.index),parseInt(e.slice(n,t.index),10)},i=function(e,t){var n=t.index,r=e[n];if(/^[_a-zA-Z$]/.test(r))for(t.index++;t.index<t.length;){var a=e[t.index];if(!/^[_a-zA-Z0-9$]/.test(a))break;t.index++}else o(e,t.index);return e.slice(n,t.index)},u=function(e,t){for(var n=[i(e,t)],r={deepCmp:!1};t.index<t.length;){var u=e[t.index];if("["===u){t.index++,n.push(a(e,t)),"]"!==e[t.index]&&o(e,t.index),t.index++}else{if("."!==u)break;if(t.index++,"*"===e[t.index]){if(t.index++,"*"===e[t.index]){t.index++,r.deepCmp=!0;break}o(e,t.index)}n.push(i(e,t))}}return{path:n,options:r}},c=function(e,t){t.index<t.length&&o(e,t.index)};t.parseSingleDataPath=function(e){var t={length:e.length,index:0},n=u(e,t);return c(e,t),n},t.parseMultiDataPaths=function(e){var t={length:e.length,index:0},n=function(e,t){for(;r.test(e[t.index]);)t.index++;for(var n=[u(e,t)],a=!1;t.index<t.length;){var i=e[t.index];r.test(i)?t.index++:","===i?(a=!0,t.index++):a?(a=!1,n.push(u(e,t))):o(e,t.index)}return n}(e,t);return c(e,t),n}},function(t,n,r){var o="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)};n.create=function(e,t){return function e(t,n,r){if("object"!==(void 0===t?"undefined":o(t))||null===t)return t;var a=t instanceof Array,i={};Object.keys(t).forEach((function(o){var a=null;i[o]={get:function(){if(!a){var i=r.concat(o);n.push({path:i,value:t[o]}),a=e(t[o],n,i)}return a},set:function(){throw new Error("Setting data is not allowed")},enumerable:!0}})),a&&(i.length={value:t.length,enumerable:!1}),i.__rawObject__={get:function(){return t},set:function(){throw new Error("Setting data is not allowed")},enumerable:!1};var u=a?Array.prototype:Object.prototype;return Object.create(u,i)}(e,t,[])},n.unwrap=function(e){return"object"!==(void 0===e?"undefined":o(e))||null===e||"object"!==o(e.__rawObject__)?e:e.__rawObject__}}]);
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/miniprogram-computed/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/rfdc/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,r,t=require("../../@babel/runtime/helpers/typeof");module.exports=(e={},r=function(r,n){if(!e[r])return require(n);if(!e[r].status){var f=e[r].m;f._exports=f._tempexports;var a=Object.getOwnPropertyDescriptor(f,"exports");a&&a.configurable&&Object.defineProperty(f,"exports",{set:function(e){"object"===t(e)&&e!==f._exports&&(f._exports.__proto__=e.__proto__,Object.keys(e).forEach((function(r){f._exports[r]=e[r]}))),f._tempexports=e},get:function(){return f._tempexports}}),e[r].status=1,e[r].func(e[r].req,f,f.exports)}return e[r].m.exports},function(r,t,n){e[r]={status:0,func:t,req:n,m:{exports:{},_tempexports:{}}}}(1705569259612,(function(e,r,n){function f(e){return e instanceof Buffer?Buffer.from(e):new e.constructor(e.buffer.slice(),e.byteOffset,e.length)}r.exports=function(e){return(e=e||{}).circles?function(e){var r=[],n=[];return e.proto?function e(o){if("object"!==t(o)||null===o)return o;if(o instanceof Date)return new Date(o);if(Array.isArray(o))return a(o,e);if(o instanceof Map)return new Map(a(Array.from(o),e));if(o instanceof Set)return new Set(a(Array.from(o),e));var i={};for(var s in r.push(o),n.push(i),o){var u=o[s];if("object"!==t(u)||null===u)i[s]=u;else if(u instanceof Date)i[s]=new Date(u);else if(u instanceof Map)i[s]=new Map(a(Array.from(u),e));else if(u instanceof Set)i[s]=new Set(a(Array.from(u),e));else if(ArrayBuffer.isView(u))i[s]=f(u);else{var c=r.indexOf(u);i[s]=-1!==c?n[c]:e(u)}}return r.pop(),n.pop(),i}:function e(o){if("object"!==t(o)||null===o)return o;if(o instanceof Date)return new Date(o);if(Array.isArray(o))return a(o,e);if(o instanceof Map)return new Map(a(Array.from(o),e));if(o instanceof Set)return new Set(a(Array.from(o),e));var i={};for(var s in r.push(o),n.push(i),o)if(!1!==Object.hasOwnProperty.call(o,s)){var u=o[s];if("object"!==t(u)||null===u)i[s]=u;else if(u instanceof Date)i[s]=new Date(u);else if(u instanceof Map)i[s]=new Map(a(Array.from(u),e));else if(u instanceof Set)i[s]=new Set(a(Array.from(u),e));else if(ArrayBuffer.isView(u))i[s]=f(u);else{var c=r.indexOf(u);i[s]=-1!==c?n[c]:e(u)}}return r.pop(),n.pop(),i};function a(e,a){for(var o=Object.keys(e),i=new Array(o.length),s=0;s<o.length;s++){var u=o[s],c=e[u];if("object"!==t(c)||null===c)i[u]=c;else if(c instanceof Date)i[u]=new Date(c);else if(ArrayBuffer.isView(c))i[u]=f(c);else{var p=r.indexOf(c);i[u]=-1!==p?n[p]:a(c)}}return i}}(e):e.proto?function e(n){if("object"!==t(n)||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return r(n,e);if(n instanceof Map)return new Map(r(Array.from(n),e));if(n instanceof Set)return new Set(r(Array.from(n),e));var a={};for(var o in n){var i=n[o];"object"!==t(i)||null===i?a[o]=i:i instanceof Date?a[o]=new Date(i):i instanceof Map?a[o]=new Map(r(Array.from(i),e)):i instanceof Set?a[o]=new Set(r(Array.from(i),e)):ArrayBuffer.isView(i)?a[o]=f(i):a[o]=e(i)}return a}:function e(n){if("object"!==t(n)||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return r(n,e);if(n instanceof Map)return new Map(r(Array.from(n),e));if(n instanceof Set)return new Set(r(Array.from(n),e));var a={};for(var o in n)if(!1!==Object.hasOwnProperty.call(n,o)){var i=n[o];"object"!==t(i)||null===i?a[o]=i:i instanceof Date?a[o]=new Date(i):i instanceof Map?a[o]=new Map(r(Array.from(i),e)):i instanceof Set?a[o]=new Set(r(Array.from(i),e)):ArrayBuffer.isView(i)?a[o]=f(i):a[o]=e(i)}return a};function r(e,r){for(var n=Object.keys(e),a=new Array(n.length),o=0;o<n.length;o++){var i=n[o],s=e[i];"object"!==t(s)||null===s?a[i]=s:s instanceof Date?a[i]=new Date(s):ArrayBuffer.isView(s)?a[i]=f(s):a[i]=r(s)}return a}}}),(function(e){return r({}[e],e)})),r(1705569259612));
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/rfdc/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sdk/QD.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,n=e(require("./../utils/tool")),a=require("./../services/middleware"),s=e(require("./../services/api")),o={instance:null,saInstance:null,scene:"",sceneType:"",sceneId:0,lastMenu:"",lastLastMenu:"",lastContentId:"",lastFormPageTitle:"",lastNameOfPage:"",currentParams:{},lastCampaignUUID:"",install:function(e,t){this.instance||(this.instance=e)},installSA:function(e){this.saInstance||(this.saInstance=e)},getInstance:function(){return this.instance},getScene:function(){if(!this.scene){var e=n.default.parseScene();this.scene=e.scene,this.sceneType=e.type,this.sceneId=e.sceneId}return this.scene},getSceneType:function(){if(!this.scene){var e=n.default.parseScene();this.scene=e.scene,this.sceneType=e.type,this.sceneId=e.sceneId}return this.sceneType},getSceneId:function(){if(!this.sceneId){var e=n.default.parseScene();this.scene=e.scene,this.sceneType=e.type,this.sceneId=e.sceneId}return this.sceneId},getLastContentId:function(){return this.lastContentId?this.lastContentId:""},getLastCampaignUUID:function(){return this.lastCampaignUUID?this.lastCampaignUUID:""},getLastNameOfPage:function(){return this.lastNameOfPage?this.lastNameOfPage:""},track:function(e,t){if("contentView"==e){var n,a=getCurrentPages(),s=this.instance.getConfig("launchInfo");if(s)s.referrerInfo=null===(n=a[a.length-2])||void 0===n?void 0:n.route,s.referrerInfo||delete s.referrerInfo,t.ContentTheme=t.name_of_page,t.ContentTheme||delete t.ContentTheme,this.instance.setConfig("launchInfo",s)}var o=!1;t.referrer_menu=this.lastMenu,"form"===t.TrackEvent&&"contentView"==e&&(o=!0,delete t.TrackEvent),t.menu&&"contentView"==e&&(this.lastLastMenu=this.lastMenu,this.lastMenu=t.menu),"企点表单结果页"==t.menu&&(t.name_of_page=this.lastFormPageTitle),t.ChannelType=this.getChannelType(),t=this.staffCardViewTrackDataCook(t,e),this.instance&&this.instance.track(e,t),"contentView"==e&&(o||(this.currentParams=t),t.ContentID?(this.lastContentId=t.ContentID,this.lastNameOfPage=t.name_of_page):this.lastContentId=""),t.conferenceType&&t.CampaignID&&"contentView"==e&&(this.lastCampaignUUID=t.CampaignID)},action:function(e,t){t.referrer_menu=this.lastLastMenu,t.ChannelType=this.getChannelType(),t=this.staffCardViewTrackDataCook(t,e),this.instance.track(e,t)},event:function(e,t){t=this.staffCardViewTrackDataCook(t,e),this.instance.track(e,t)},formSubmit:function(e,t){t.ContentID=this.getLastContentId(),t.menu=this.lastMenu,t.referrer_menu=this.lastLastMenu,t.ChannelType=this.getChannelType(),this.lastFormPageTitle=t.name_of_page,t=this.staffCardViewTrackDataCook(t,e),this.qdSyncSaEvent(e,t),this.instance.track(e,t)},setCommon:function(e){e=Object.assign({Platform:"腾讯云小程序",platform_type:"小程序",data_source:"腾讯云小程序"},e),console.log("sdk qd setCommon",e),this.instance&&this.instance.setCommonData(e)},setScene:function(e){var t=this.instance.getConfig("launchInfo");t.query.scene=e,console.log(t),this.instance.setConfig("launchInfo",t)},parseAppLaunchOptions:function(e){var t="",n="",a="",s="",o="",r={};e.utm_source&&(t=e.utm_source,r.utm_source=e.utm_source),e.utm_medium&&(n=e.utm_medium,r.utm_medium=e.utm_medium),e.utm_campaign&&(a=e.utm_campaign,r.utm_campaign=e.utm_campaign),e.utm_content&&(s=e.utm_content,r.utm_content=e.utm_content),e.utm_term&&(o=e.utm_term,r.utm_term=e.utm_term),Object.keys(r).length>0&&this.setCommon(r),wx.setStorageSync("qd_utm_source",t),wx.setStorageSync("qd_utm_medium",n),wx.setStorageSync("qd_utm_campaign",a),wx.setStorageSync("qd_utm_content",s),wx.setStorageSync("qd_utm_term",o),this.setSalesShareCardParams(e)},setSalesShareCardParams:function(e){var t="";e.shareCardId&&(t=e.shareCardId),t?(console.log("🚀 ~ file: QD.js ~ line 175 ~ parseAppLaunchOptions ~ shareCardId",t),wx.setStorageSync("salesShareCardId",t),wx.setStorageSync("salesShareCardParams",{employeePosition:e.employeePosition||"",wechatId:e.wechatId||"",wechatworkId:e.wechatworkId||"",employeePhone:e.employeePhone||""})):(wx.setStorageSync("salesShareCardId",""),wx.setStorageSync("salesShareCardInfo",""))},getChannelType:function(){var e="",t="",n="",a="",s="";return wx.getStorageSync("qd_utm_campaign")&&(e=wx.getStorageSync("qd_utm_campaign")),wx.getStorageSync("qd_utm_content")&&(a=wx.getStorageSync("qd_utm_content")),wx.getStorageSync("qd_utm_term")&&(s=wx.getStorageSync("qd_utm_term")),wx.getStorageSync("qd_utm_source")&&(t=wx.getStorageSync("qd_utm_source")),wx.getStorageSync("qd_utm_medium")&&(n=wx.getStorageSync("qd_utm_medium")),null!=e&&"undefined"!=e&&null!=e&&"null"!=e||(e=""),null!=a&&"undefined"!=a&&null!=a&&"null"!=a||(a=""),null!=s&&"undefined"!=s&&null!=s&&"null"!=s||(s=""),null!=t&&"undefined"!=t&&null!=t&&"null"!=t||(t=""),null!=n&&"undefined"!=n&&null!=n&&"null"!=n||(n=""),[t,n,s,a,e].join("-")},staffCardViewTrackDataCook:function(e,t){console.log("staffCardViewTrackDataCook start",t,e);var n=wx.getStorageSync("salesShareCardId"),a=wx.getStorageSync("salesShareCardInfo"),s=wx.getStorageSync("staff_card_id");return"cardView"==t&&(e.content_id=this.lastContentId),n&&(e.employee_id=a.euserId,e.staff_id=a.staffId,e.employee_name=a.employeeName,e.staff_department=a.staffDept,e.ChannelType="助销名片-"+a.employeeName,e.card_id=n),n&&s!=n&&a&&this.qdSyncSaEvent(t,e),console.log("staffCardViewTrackDataCook end",t,e),e},saEvent:function(e,t){this.saInstance.track(e,t)},qdSyncSaEvent:function(e,t){var n=this;console.log("qdSyncSaEvent",e,t);var a=wx.getStorageSync("salesShareCardInfo");return"callPhone"==e?this.saInstance.track("callPhone",{employee_id:a.euserId,card_id:t.card_id,phone:t.phone,content_type:1}):"copyWechat"==e?this.saInstance.track("copyWechat",{employee_id:a.euserId,card_id:t.card_id,content_type:1}):"saveAddressBook"==e?this.saInstance.track("saveAddressBook",{card_id:t.card_id,phone:t.phone}):"copyEmail"==e?this.saInstance.track("copyEmail",{card_id:t.card_id,content_type:1}):"copyAddress"==e?this.saInstance.track("copyAddress",{card_id:t.card_id,content_type:1}):"copyWechatWork"==e?this.saInstance.track("copyWechatWork",{card_id:t.card_id,content_type:1}):"submit_form"==e?this.saInstance.track("leaveContent",{content_type:2,ContentType:2,employee_id:a.euserId,content_id:this.getContentIdNumber(t.SubCampaignID)}):"cardView"==e?this.saInstance.track("cardView",{card_id:t.card_id,content_type:t.content_type,content_id:this.getContentIdNumber(t.content_id),ContentID:this.getContentIdNumber(t.content_id),employee_id:a.euserId,staff_id:""+a.staffId}):"contentView"==e&&t.ContentID?this.saInstance.track("contentViewScreen",{content_type:2,content_id:this.getContentIdNumber(t.ContentID),ContentID:this.getContentIdNumber(t.ContentID),employee_id:a.euserId,staff_id:""+a.staffId}):"shareContent"==e&&s.default.getJtShareId(this.getContentIdNumber(t.ContentID),a.euserId).then((function(e){console.log("QD getJtShareId res",e),0==e.code&&n.saInstance.track("shareContent",{content_type:2,content_id:n.getContentIdNumber(t.ContentID),content_title:t.name_of_page,ContentID:n.getContentIdNumber(t.ContentID),ContentTheme:t.name_of_page,share_id:e.data.shareId,employee_id:a.euserId,staff_id:a.staffId,card_id:t.card_id})})).catch((function(e){console.log("QD getJtShareId err",e)})),!0},saRegister:function(e){console.log("saRegister",e),e.data_from="ganhuoku",e.data_source="加推助销名片小程序",e.Platform="小程序",wx.getStorageSync("salesShareCardId")&&wx.getStorageSync("salesShareCardId")!=wx.getStorageSync("staff_card_id")&&(e.ContentID=wx.getStorageSync("salesShareCardId"),e.OpenID=wx.getStorageSync("openid"),e.card_id=e.ContentID),this.saInstance.registerApp(e),this.saInstance.init()},getToolType:function(e){console.log("getToolType",e,(0,a.getCache)("allDict"));var t={"解决方案":1,"白皮书":3,"产品手册":4,"其他":9,"资讯":10},n=(0,a.getCache)("allDict").value.content.templateTypes,s=3;return n.map((function(n){n.id==e&&(s=t[n.name])})),s},getContentIdNumber:function(e){return"number"==typeof e?""+e:e}};function r(e){var n=+new Date-t;e.track("BrowseTime",Object.assign(e.currentParams,{content_view_time:""+Math.floor(n/1e3)}))}function c(e,t){var n;e.onHide?(n=e.onHide,e.onHide=function(){n.call(this),r(t)}):e.onHide=function(){r(t)}}function i(e,t,n){var a;e[t]?(a=e[t],e[t]=function(e){try{n.call(this,e,t)}catch(e){}a.call(this,e)}):e[t]=function(e){n.call(this,e,t)}}var d=Page;Page=function(e){i(e,"onShow",(function(){t=+new Date})),i(e,"onHide",c(o)),c(e,o),function(e,t){var n;e.onUnload?(n=e.onUnload,e.onUnload=function(){n.call(this),r(t)}):e.onUnload=function(){r(t)}}(e,o),d(e)};var u=o;exports.default=u;
},{isPage:false,isComponent:false,currentFile:'sdk/QD.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sdk/QDTracker.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../@babel/runtime/helpers/typeof"),e=function(){return(e=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},n={},i=n.toString,o=n.hasOwnProperty;function a(e){return null==e?e+"":"object"==t(e)||"function"==typeof e?n[i.call(e)]||"object":t(e)}function r(t){return"function"===a(t)}function s(t){return Array.isArray?Array.isArray(t):"array"===a(t)}function u(t){var e;if(!t||"object"!==a(t))return!1;try{if(t.constructor&&!o.call(t,"constructor")&&!o.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||o.call(t,e)}function f(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var i,o,a,c,g,d,p=e[0]||{},h=1,l=e.length,C=!1;for("boolean"==typeof p&&(C=p,p=e[h]||{},h++),"object"!=t(p)&&r(p)&&(p={});h<l;h++)if(null!=(g=e[h]))for(c in g)i=p[c],p!==(a=g[c])&&(C&&a&&(u(a)||(o=s(a)))?(d=o?(o=!1,i&&s(i)?i:[]):i&&u(i)?i:{},p[c]=f(C,d,a)):void 0!==a&&(p[c]=a));return p}var c,g,d={debug:!1,init:function(t){this.debug=t.config.debug},log:function(t){this.debug&&console.log(t)},info:function(t){this.debug&&console.info(t)},error:function(t){this.debug&&console.error(t)}},p={data:{openid:"",systemInfo:null,qid:""},init:function(){try{var t=wx.getStorageSync("__QDTracker__");t?function(t){try{JSON.parse(t)}catch(t){return!1}return!0}(t)&&(this.data=JSON.parse(t)):wx.setStorageSync("__QDTracker__",JSON.stringify({}))}catch(t){d.error(t)}},setValue:function(t,e){this.data[t]=e},getValue:function(t){return this.data[t]||""},getCache:function(){return this.data},save:function(){try{return wx.setStorageSync("__QDTracker__",JSON.stringify(this.data)),!0}catch(t){return d.error(t),!1}}},h={data:{queue:[],openid:"",instance:{}},init:function(t){this.data.instance=t},send:function(t){this.canSend()?(t.data.kfuin||this.data.instance.getConfig("kfuin")&&(t.data.kfuin=this.data.instance.getConfig("kfuin")),t.data.appkey||this.data.instance.getConfig("appkey")&&(t.data.appkey=this.data.instance.getConfig("appkey")),this.data.instance.send(t.url,t.data,t.callback)):this.data.queue.push(t)},push:function(t){this.data.queue.push(t)},canSend:function(){return this.data.instance.canSend()},flush:function(){if(this.canSend())for(;0<this.data.queue.length;){var t=this.data.queue.shift();this.send(t)}}},l=function(t){return t.toString(36)},C=function(){return Math.floor(2147483648*Math.random())},_=function(t){var e=l(C()^2147483647&function(t){var e=1;if(t){e=0;for(var n,i=t.length-1;0<=i;i--)e=0!=(n=266338304&(e=(e<<6&268435455)+(n=t.charCodeAt(i))+(n<<14)))?e^n>>21:e}return e}(t))+".";return l(+new Date)+"."+e+C().toString(36)};function y(t,e,n){var i;t[e]?(i=t[e],t[e]=function(t){try{n.call(this,t,e)}catch(t){console.log("qidianDA_Error","eventProxy",t)}i.call(this,t)}):t[e]=function(t){n.call(this,t,e)}}function v(){var t=getCurrentPages();if(t.length){var e=t[t.length-1],n=e.route,i=e.options||{},o="";for(var a in i)i.hasOwnProperty(a)&&(""===o?o="?"+a+"="+i[a]:o+="&"+a+"="+i[a]);return""+n+o}return""}(g=c=c||{}).PAGESHOW="$MPPageShow",g.SHARE="$MPShare",g.APPSHOW="$MPShow",g.APPHIDE="$MPHide",g.LAUNCH="$MPLaunch",g.PAGEHIDE="$MPPageHide";var m,q=0;function k(t,n){var i=v();!function(){var t=getCurrentPages();t.length&&t[t.length-1].route}(),t.setConfig("pageUrl",i);var o=t.getConfig("launchInfo");t._track(c.PAGESHOW,e({$share_oid:o&&o.query.qda_shareopenid,$page_id:m,$share_qid:o&&o.query.qda_shareqid},n))}function $(t,e,n){return-1<t.indexOf("?")?t+="&":t+="?",t+(encodeURIComponent(e)+"=")+encodeURIComponent(n.toString())}function S(t,e){for(var n,i=new RegExp("(?:&|\\?)?"+I(encodeURIComponent(e))+"=([^&]*)(?:&|$)","g"),o="";n=i.exec(t);)if(n[1]){o=decodeURIComponent(n[1]);break}return o}function w(t,e){var n=new RegExp("(&|\\?)?"+I(encodeURIComponent(e))+"=([^&]*)(?:&|$)","g");return function(t){var e=t.charAt(t.length-1);return"&"!==e&&"?"!==e||(t=t.slice(0,-1)),t}(t.replace(n,"$1"))}function I(t){return String(t).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\-])","g"),"\\$1")}function b(t){t.getConfig("autoTrack").pageHide&&P(t)}function P(t,n){var i=+new Date-q;i>Math.pow(10,12)&&(i=0);var o=t.getConfig("launchInfo"),a={$share_oid:o&&o.query.qda_shareopenid,$page_id:m,$share_qid:o&&o.query.qda_shareqid,$dr:i};t._track(c.PAGEHIDE,e(e({},a),n))}p.init();var D={initting:!1,initQue:[],config:{debug:!1,disableCache:!1,apiHost:"https://v.qidian.qq.com",version:"1.2.0",appid:"",kfuin:"",openid:"",appkey:"",isGetSystemInfoComplete:!1,useOid:0,qid:"",type:1,autoTrack:{appLaunch:!0,appShow:!0,appHide:!0,pageShow:!0,pageHide:!0,share:!0}},init:function(t){void 0===t&&(t={apiHost:"",appid:"",kfuin:"",useOpenId:!1});try{if(t.autoTrack){var e=t.autoTrack;for(var n in e)this.config.autoTrack[n]=e[n]}this.setConfig("application",t.application),this.config.useOid=Number(t.useOpenId),f(!0,this.config,t);var i=p.getCache();this.getConfig("disableCache")||f(!0,this.config,i),d.init(this),h.init(this)}catch(t){console.log("qidianDA_Error","init",t)}},_initSys:function(){var t,e=this,n=new Promise((function(e){t=e}));return this.getConfig("isGetSystemInfoComplete")&&t&&t(),this.initQue.push(t),this.initting||(this.initting=!0,wx.getNetworkType({success:function(t){e.setConfig("$network_type",t.networkType)},complete:function(){wx.getSystemInfo({success:function(t){var n,i,o={$manufacturer:t.brand,$model:t.model,$screen_width:Number(t.screenWidth),$screen_height:Number(t.screenHeight),$os:(n=t.platform,"ios"===(i=n.toLowerCase())?"iOS":"android"===i?"Android":n),$os_version:-1<t.system.indexOf(" ")?t.system.split(" ")[1]:t.system};for(var a in o)e.setConfig(a,o[a]);var r=e.getConfig("qid");r||(r=((Math.floor(10*Math.random())||1)+function(t,e){var n,i="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),o=[];for(e=e||i.length,n=0;n<3;n++)o[n]=i[0|Math.random()*e];return o.join("")}(0,10)+(new Date).getTime().toString().slice(2,13)).toString(),e.setConfig("qid",r),p.setValue("qid",r),p.save()),e.initQue.forEach((function(t){t()})),e.setConfig("isGetSystemInfoComplete",!0)},complete:function(){}})}})),n},setCommonData:function(t,n){try{var i;n&&(n.da_rpt_type&&this.setRequireData("da_rpt_type",n.da_rpt_type),n.bussid&&this.setRequireData("bussid",n.bussid),n.appkey&&this.setRequireData("appkey",n.appkey),n.unionid&&this.setRequireData("unionid",n.unionid),n.openid&&this.setRequireData("openid",n.openid),n.kfuin&&this.setRequireData("kfuin",n.kfuin),delete(i=e({},n)).openid,delete i.unionid,delete i.kfuin,delete i.appkey,delete i.bussid,delete i.da_rpt_type,this.setConfig("_outerData",i)),t&&this.setConfig("_commonData",t)}catch(t){console.log("qidianDA_Error","setCommonData",t)}},canSend:function(){return!(!this.getConfig("kfuin")&&!this.getConfig("appkey")||!this.getConfig("kfuin")&&!this.getConfig("appkey")||0!==this.getConfig("useOid")&&!this.getConfig("openid"))},setRequireData:function(t,e){this.setConfig(t,e),p.setValue(t,e),p.save(),h.flush()},setUserInfo:function(t){this.setConfig("userInfo",t)},getTimeStamp:function(){return Math.floor(new Date/1e3)},preSend:function(t,n,i){var o=e(e({},n),{event:t});h.send({url:"/events/report",data:o,callback:i})},getCommonData:function(){var t=this;return new Promise((function(n){var i=t.getConfig("pid")||"",o=t.getConfig("pageTitle")||"",a=t.getConfig("pageUrl")||"";t._initSys().then((function(){var r={};["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].forEach((function(e){r["$"+e]=t.getConfig(e),r["$latest_"+e]=t.getConfig("$latest_"+e)}));var s=t.getConfig("launchInfo"),u=t.getConfig("_commonData"),f=t.getConfig("_outerData"),c=e(e({},f),{properties:e({$page_id:i||t.getConfig("pid")||"",$appid:t.getConfig("appid"),$sdk_type:"wxminiprogram",$url:a||t.getConfig("pageUrl")||"",$title:o||t.getConfig("pageTitle")||"",$sdk_version:t.getConfig("version"),$scene:s&&s.scene,$referrer:s&&s.referrerInfo,$is_first_day:t.getConfig("$is_first_day"),$network_type:t.getConfig("$network_type"),$os_version:t.getConfig("$os_version"),$sh:t.getConfig("$screen_height"),$sw:t.getConfig("$screen_width"),$application:t.getConfig("application")},r),qid:t.getConfig("qid"),time:t.getTimeStamp()});if(t.getConfig("kfuin")&&(c.kfuin=t.getConfig("kfuin")),t.getConfig("appkey")&&(c.appkey=t.getConfig("appkey")),t.getConfig("openid")&&(c.account=JSON.stringify({bussid:t.getConfig("bussid"),wechat:{openid:t.getConfig("openid"),appid:t.getConfig("appid"),unionid:t.getConfig("unionid")}})),u)for(var g in u)c.properties[g]=u[g];n(c)}))}))},_track:function(t,n){var i=this;n=n||{},this.getCommonData().then((function(o){var a=e(e({},n),o.properties);i.preSend(t,e(e({},o),{properties:a,type:"track"}))}))},track:function(t,e){try{switch(e=e||{},t){case c.PAGEHIDE:P(this,e);break;case c.PAGESHOW:k(this,e);break;default:this._track(t,e)}}catch(t){console.log("qidianDA_Error","track",t)}},getIDs:function(){return{qid:this.getConfig("qid"),pid:this.getConfig("pid"),openid:this.getConfig("openid"),unionid:this.getConfig("unionid")}},send:function(t,n,i){var o,a=this,r=0,s={type:this.getConfig("da_rpt_type")||"track"},u=e(e(e({},n),s),{properties:JSON.stringify(e(e({},n.properties),{$application:this.getConfig("application")}))});!u.account&&this.getConfig("openid")&&(o={bussid:this.getConfig("bussid"),wechat:{appid:this.getConfig("appid"),openid:this.getConfig("openid"),unionid:this.getConfig("unionid")}},u.account=JSON.stringify(o));!function e(){wx.request({url:a.getConfig("apiHost")+t,method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},data:u,success:function(t){d.info(t),i&&i()},fail:function(t){d.error(t),r<3&&(r++,e())}})}()},getUserInfoP:function(){var t=this,e=this;return new Promise((function(n){var i=t.getConfig("userInfo");i&&n(i),wx.getUserInfo({lang:"zh_CN",success:function(t){e.setConfig("userInfo",t.userInfo),n(t.userInfo)},fail:function(){n()}})}))},getConfig:function(t){return this.config[t]},setConfig:function(t,e){this.config[t]=e}},A=App,H=Page;App=function(t){var e,n;y(t,"onLaunch",(n=D,function(t){var e=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],i=!1,o=p.getCache();e.forEach((function(e){n.setConfig(e,t.query[e]||""),n.setConfig("$latest_"+e,o["$latest_"+e]||""),t.query[e]&&(i=!0)})),i&&e.forEach((function(e){p.setValue("$latest_"+e,t.query[e]||""),n.setConfig("$latest_"+e,t.query[e]||"")})),p.save(),n.setConfig("launchInfo",t),(this.QDTracker=n).getConfig("autoTrack").appLaunch&&n._track(c.LAUNCH)})),y(t,"onShow",function(t){return function(){t.getConfig("autoTrack").appShow&&t._track(c.APPSHOW)}}(D)),y(t,"onHide",(e=D,function(){var t;e.getConfig("autoTrack").appHide&&(t=e.getConfig("launchInfo"),e._track(c.APPHIDE,{$dr:-1,$share_oid:t&&t.query.qda_shareopenid}))})),A(t)},Page=function(t){var e;y(t,"onShow",(e=D,function(){q=+new Date;var t,n=e.getConfig("autoTrack").pageShow;e.setConfig("pageTitle",this.data&&this.data.qdt&&this.data.qdt.title||""),n&&(t=e.getConfig("screenWidth")+"*"+e.getConfig("screenHeight")+e.getConfig("appid"),m=_(t),e.setConfig("pid",m),k(e))})),function(t,e){function n(t){var n,i,o,a;e.getConfig("autoTrack").share&&(e.setConfig("pageUrl",v()),n=e.getConfig("launchInfo"),i=t.path||"",o=parseInt(S(i,"qda_sharelevel")),a=S(i,"qda_shareid"),e._track(c.SHARE,{$share_oid:n&&n.query.qda_shareopenid,$share_qid:n&&n.query.qda_shareqid,$page_id:m,$share_id:a,$share_level:o,$share_url_path:i}))}function i(t){t=t||{};var n=e.getConfig("openid"),i=e.getConfig("launchInfo"),o=i&&i.query||{},a=w(a=t.path||v(),"qda_shareopenid");a=w(a,"channel");var r=parseInt(S(a,"qda_sharelevel"));a=w(a,"qda_sharelevel"),a=$(a=w(a,"qda_shareid"),"qda_shareid",_(e.getConfig("appid"))),a=$(a,"qda_sharelevel",isNaN(r)?1:r+1),a=$(a,"qda_shareqid",e.getConfig("qid")),t.path=$(a,"qda_shareopenid",n);var s=o.tar_channel;return s&&(t.path=$(t.path,"channel",s)),t}var o;t.onShareAppMessage?(o=t.onShareAppMessage,t.onShareAppMessage=function(t){var e=i(o.call(this,t));return n.call(this,e),e}):t.onShareAppMessage=function(){var t=i({});return n.call(this,t),{}}}(t,D),function(t,e){var n;t.onHide?(n=t.onHide,t.onHide=function(){n.call(this),b(e)}):t.onHide=function(){b(e)}}(t,D),function(t,e){var n;t.onUnload?(n=t.onUnload,t.onUnload=function(){n.call(this),b(e)}):t.onUnload=function(){b(e)}}(t,D),H(t)},module.exports=D;
},{isPage:false,isComponent:false,currentFile:'sdk/QDTracker.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sdk/dict.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={regionList:[{id:"1004",name:"华北区域"},{id:"1005",name:"华东区域"},{id:"1006",name:"华南区域"},{id:"1007",name:"华西区域"}],toolTypeList:[{id:"1000",name:"白皮书"},{id:"1001",name:"视频"},{id:"1002",name:"解决方案"},{id:"1003",name:"产品手册"}],shouzhongList:[{id:"38",name:"业务负责人"},{id:"39",name:"技术负责人"},{id:"40",name:"合作伙伴/渠道"}],onlineTypeList:[{id:"1",name:"会议"},{id:"2",name:"直播"}]};
},{isPage:false,isComponent:false,currentFile:'sdk/dict.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sdk/flyio.0.6.14.min.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/typeof");!function(t,n){if("object"==("undefined"==typeof exports?"undefined":e(exports))&&"object"==("undefined"==typeof module?"undefined":e(module)))module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var o in r)("object"==("undefined"==typeof exports?"undefined":e(exports))?exports:void 0)[o]=r[o]}}(0,(function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(t,n,r){var o="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)};t.exports={type:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isObject:function(e,t){return t?"object"===this.type(e):e&&"object"===(void 0===e?"undefined":o(e))},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},encode:function(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")},formatParams:function(e){var t="",n=!0,r=this;return this.isObject(e)?(function e(o,s){var a=r.encode,i=r.type(o);if("array"==i)o.forEach((function(t,n){r.isObject(t)||(n=""),e(t,s+"%5B"+n+"%5D")}));else if("object"==i)for(var u in o)e(o[u],s?s+"%5B"+a(u)+"%5D":a(u));else n||(t+="&"),n=!1,t+=s+"="+a(o)}(e,""),t):e},merge:function(e,t){for(var n in t)e.hasOwnProperty(n)?this.isObject(t[n],1)&&this.isObject(e[n],1)&&this.merge(e[n],t[n]):e[n]=t[n];return e}}},function(t,n,r){var o="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=r(0),i="undefined"!=typeof document;t.exports=function(e){return function(){function t(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),this.requestHeaders={},this.readyState=0,this.timeout=0,this.responseURL="",this.responseHeaders={}}return s(t,[{key:"_call",value:function(e){this[e]&&this[e].apply(this,[].splice.call(arguments,1))}},{key:"_changeReadyState",value:function(e){this.readyState=e,this._call("onreadystatechange")}},{key:"open",value:function(e,t){if(this.method=e,t){if(0!==(t=a.trim(t)).indexOf("http")&&i){var n=document.createElement("a");n.href=t,t=n.href}}else t=location.href;this.responseURL=t,this._changeReadyState(1)}},{key:"send",value:function(t){var n=this;t=t||null;var r=this;if(e){var s={method:r.method,url:r.responseURL,headers:r.requestHeaders||{},body:t};a.merge(s,r._options||{}),"GET"===s.method&&(s.body=null),r._changeReadyState(3);var u=void 0;r.timeout=r.timeout||0,r.timeout>0&&(u=setTimeout((function(){3===r.readyState&&(n._call("onloadend"),r._changeReadyState(0),r._call("ontimeout"))}),r.timeout)),s.timeout=r.timeout,e(s,(function(e){function t(t){var n=e[t];return delete e[t],n}if(3===r.readyState){clearTimeout(u),r.status=t("statusCode")-0;var n=t("responseText"),s=t("statusMessage");if(r.status){var a=t("headers"),c={};for(var f in a){var l=a[f],d=f.toLowerCase();"object"===(void 0===l?"undefined":o(l))?c[d]=l:(c[d]=c[d]||[],c[d].push(l))}var p=c["set-cookie"];i&&p&&p.forEach((function(e){document.cookie=e.replace(/;\s*httpOnly/gi,"")})),r.responseHeaders=c,r.statusText=s||"",r.response=r.responseText=n,r._response=e,r._changeReadyState(4),r._call("onload")}else r.statusText=n,r._call("onerror",{msg:s});r._call("onloadend")}}))}else console.error("Ajax require adapter")}},{key:"setRequestHeader",value:function(e,t){this.requestHeaders[a.trim(e)]=t}},{key:"getResponseHeader",value:function(e){return(this.responseHeaders[e.toLowerCase()]||"").toString()||null}},{key:"getAllResponseHeaders",value:function(){var e="";for(var t in this.responseHeaders)e+=t+":"+this.getResponseHeader(t)+"\r\n";return e||null}},{key:"abort",value:function(e){this._changeReadyState(0),this._call("onerror",{msg:e}),this._call("onloadend")}}],[{key:"setAdapter",value:function(t){e=t}}]),t}()}},function(e,t,n){var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),s="undefined"!=typeof document,a=function(){function e(t){function n(e){function t(){e.p=n=r=null}var n=void 0,r=void 0;o.merge(e,{lock:function(){n||(e.p=new Promise((function(e,t){n=e,r=t})))},unlock:function(){n&&(n(),t())},clear:function(){r&&(r("cancel"),t())}})}(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.engine=t||XMLHttpRequest,this.default=this;var r=this.interceptors={response:{use:function(e,t){this.handler=e,this.onerror=t}},request:{use:function(e){this.handler=e}}},s=r.request;n(r.response),n(s),this.config={method:"GET",baseURL:"",headers:{},timeout:0,params:{},parseJson:!0,withCredentials:!1}}return r(e,[{key:"request",value:function(e,t,n){var r=this,a=new this.engine,i="Content-Type",u=i.toLowerCase(),c=this.interceptors,f=c.request,l=c.response,d=f.handler,p=new Promise((function(c,p){function h(e){return e&&e.then&&e.catch}function m(e,t){e?e.then((function(){t()})):t()}function y(n){function r(e,t,r){m(l.p,(function(){if(e){r&&(t.request=n);var o=e.call(l,t,Promise);t=void 0===o?t:o}h(t)||(t=Promise[0===r?"resolve":"reject"](t)),t.then((function(e){c(e)})).catch((function(e){p(e)}))}))}function f(e){e.engine=a,r(l.onerror,e,-1)}function d(e,t){this.message=e,this.status=t}t=n.body,e=o.trim(n.url);var y=o.trim(n.baseURL||"");if(e||!s||y||(e=location.href),0!==e.indexOf("http")){var v="/"===e[0];if(!y&&s){var g=location.pathname.split("/");g.pop(),y=location.protocol+"//"+location.host+(v?"":g.join("/"))}if("/"!==y[y.length-1]&&(y+="/"),e=y+(v?e.substr(1):e),s){var b=document.createElement("a");b.href=e,e=b.href}}var x=o.trim(n.responseType||""),w=-1!==["GET","HEAD","DELETE","OPTION"].indexOf(n.method),j=o.type(t),O=n.params||{};w&&"object"===j&&(O=o.merge(t,O));var S=[];(O=o.formatParams(O))&&S.push(O),w&&t&&"string"===j&&S.push(t),S.length>0&&(e+=(-1===e.indexOf("?")?"?":"&")+S.join("&")),a.open(n.method,e);try{a.withCredentials=!!n.withCredentials,a.timeout=n.timeout||0,"stream"!==x&&(a.responseType=x)}catch(e){}var T=n.headers[i]||n.headers[u],k="application/x-www-form-urlencoded";for(var R in o.trim((T||"").toLowerCase())===k?t=o.formatParams(t):o.isFormData(t)||-1===["object","array"].indexOf(o.type(t))||(k="application/json;charset=utf-8",t=JSON.stringify(t)),T||w||(n.headers[i]=k),n.headers)if(R===i&&o.isFormData(t))delete n.headers[R];else try{a.setRequestHeader(R,n.headers[R])}catch(e){}a.onload=function(){try{var e=a.response||a.responseText;e&&n.parseJson&&-1!==(a.getResponseHeader(i)||"").indexOf("json")&&!o.isObject(e)&&(e=JSON.parse(e));var t=a.responseHeaders;if(!t){t={};var s=(a.getAllResponseHeaders()||"").split("\r\n");s.pop(),s.forEach((function(e){if(e){var n=e.split(":")[0];t[n]=a.getResponseHeader(n)}}))}var u=a.status,c=a.statusText,p={data:e,headers:t,status:u,statusText:c};if(o.merge(p,a._response),u>=200&&u<300||304===u)p.engine=a,p.request=n,r(l.handler,p,0);else{var h=new d(c,u);h.response=p,f(h)}}catch(h){f(new d(h.msg,a.status))}},a.onerror=function(e){f(new d(e.msg||"Network Error",0))},a.ontimeout=function(){f(new d("timeout [ "+a.timeout+"ms ]",1))},a._options=n,setTimeout((function(){a.send(w?null:t)}),0)}o.isObject(e)&&(e=(n=e).url),(n=n||{}).headers=n.headers||{},m(f.p,(function(){o.merge(n,JSON.parse(JSON.stringify(r.config)));var s=n.headers;s[i]=s[i]||s[u]||"",delete s[u],n.body=t||n.body,e=o.trim(e||""),n.method=n.method.toUpperCase(),n.url=e;var a=n;d&&(a=d.call(f,n,Promise)||n),h(a)||(a=Promise.resolve(a)),a.then((function(e){e===n?y(e):c(e)}),(function(e){p(e)}))}))}));return p.engine=a,p}},{key:"all",value:function(e){return Promise.all(e)}},{key:"spread",value:function(e){return function(t){return e.apply(null,t)}}}]),e}();a.default=a,["get","post","put","patch","head","delete"].forEach((function(e){a.prototype[e]=function(t,n,r){return this.request(t,n,o.merge({method:e},r))}})),["lock","unlock","clear"].forEach((function(e){a.prototype[e]=function(){this.interceptors.request[e]()}})),e.exports=a},,,,,function(e,t,n){e.exports=function(e,t){var n={method:e.method,url:e.url,dataType:e.dataType||void 0,header:e.headers,data:e.body||{},responseType:e.responseType||"text",success:function(e){t({statusCode:e.statusCode,responseText:e.data,headers:e.header,statusMessage:e.errMsg})},fail:function(e){t({statusCode:e.statusCode||0,statusMessage:e.errMsg})}};wx.request(n)}},,,,,,function(e,t,n){var r=n(2),o=n(1)(n(7));e.exports=function(e){return new r(e||o)}}])}));
},{isPage:false,isComponent:false,currentFile:'sdk/flyio.0.6.14.min.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sdk/sceneDict.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={name:{1e3:"其他",1001:"发现栏小程序主入口，「最近使用」列表",1005:"微信首页顶部搜索框的搜索结果页",1006:"发现栏小程序主入口搜索框的搜索结果页",1007:"单人聊天会话中的小程序消息卡片",1008:"群聊会话中的小程序消息卡片",1010:"收藏夹",1011:"扫描二维码",1012:"长按图片识别二维码",1013:"扫描手机相册中选取的二维码",1014:"小程序订阅消息（与1107相同）",1017:"前往小程序体验版的入口页",1019:"微信钱包（微信客户端7.0.0版本改为支付入口）",1020:"公众号 profile 页相关小程序列表（已废弃）",1022:"聊天顶部置顶小程序入口（微信客户端6.6.1版本起废弃）",1023:"安卓系统桌面图标",1024:"小程序 profile 页",1025:"扫描一维码",1026:"发现栏小程序主入口，「附近的小程序」列表",1027:"微信首页顶部搜索框搜索结果页「使用过的小程序」列表",1028:"我的卡包",1029:"小程序中的卡券详情页",1030:"自动化测试下打开小程序",1031:"长按图片识别一维码",1032:"扫描手机相册中选取的一维码",1034:"微信支付完成页",1035:"公众号自定义菜单",1036:"App 分享消息卡片",1037:"小程序打开小程序",1038:"从另一个小程序返回",1039:"摇电视",1042:"添加好友搜索框的搜索结果页",1043:"公众号模板消息",1044:"带 shareTicket 的小程序消息卡片",1045:"朋友圈广告",1046:"朋友圈广告详情页",1047:"扫描小程序码",1048:"长按图片识别小程序码",1049:"扫描手机相册中选取的小程序码",1052:"卡券的适用门店列表",1053:"搜一搜的结果页",1054:"顶部搜索框小程序快捷入口（微信客户端版本6.7.4起废弃）",1056:"聊天顶部音乐播放器右上角菜单",1057:"钱包中的银行卡详情页",1058:"公众号文章",1059:"体验版小程序绑定邀请页",1060:"微信支付完成页（与1034相同）",1064:"微信首页连Wi-Fi状态栏",1065:"URL scheme",1067:"公众号文章广告",1068:"附近小程序列表广告（已废弃）",1069:"移动应用通过openSDK进入微信，打开小程序",1071:"钱包中的银行卡列表页",1072:"二维码收款页面",1073:"客服消息列表下发的小程序消息卡片",1074:"公众号会话下发的小程序消息卡片",1077:"摇周边",1078:"微信连Wi-Fi成功提示页",1079:"微信游戏中心",1081:"客服消息下发的文字链",1082:"公众号会话下发的文字链",1084:"朋友圈广告原生页",1088:"会话中查看系统消息，打开小程序",1089:"微信聊天主界面下拉，「最近使用」栏（基础库2.2.4版本起包含「我的小程序」栏）",1090:"长按小程序右上角菜单唤出最近使用历史",1091:"公众号文章商品卡片",1092:"城市服务入口",1095:"小程序广告组件",1096:"聊天记录，打开小程序",1097:"微信支付签约原生页，打开小程序",1099:"页面内嵌插件",1100:"红包封面详情页打开小程序",1101:"远程调试热更新（开发者工具中，预览 -> 自动预览 -> 编译并预览）",1102:"公众号 profile 页服务预览",1103:"发现栏小程序主入口，「我的小程序」列表（基础库2.2.4版本起废弃）",1104:"微信聊天主界面下拉，「我的小程序」栏（基础库2.2.4版本起废弃）",1106:"聊天主界面下拉，从顶部搜索结果页，打开小程序",1107:"订阅消息，打开小程序",1113:"安卓手机负一屏，打开小程序（三星）",1114:"安卓手机侧边栏，打开小程序（三星）",1119:"【企业微信】工作台内打开小程序",1120:"【企业微信】个人资料页内打开小程序",1121:"【企业微信】聊天加号附件框内打开小程序",1124:"扫“一物一码”打开小程序",1125:"长按图片识别“一物一码”",1126:"扫描手机相册中选取的“一物一码”",1129:"微信爬虫访问",1131:"浮窗（8.0版本起仅包含被动浮窗）",1133:"硬件设备打开小程序",1135:"小程序profile页相关小程序列表，打开小程序",1144:"公众号文章 - 视频贴片",1145:"发现栏 - 发现小程序",1146:"地理位置信息打开出行类小程序",1148:"卡包-交通卡，打开小程序",1150:"扫一扫商品条码结果页打开小程序",1151:"发现栏 - 我的订单",1152:"订阅号视频打开小程序",1153:"“识物”结果页打开小程序",1154:"朋友圈内打开“单页模式”",1155:"“单页模式”打开小程序",1157:"服务号会话页打开小程序",1158:"群工具打开小程序",1160:"群待办",1167:"H5 通过开放标签打开小程序",1168:"移动应用直接运行小程序",1169:"发现栏小程序主入口，各个生活服务入口（例如快递服务、出行服务等）",1171:"微信运动记录（仅安卓）",1173:"聊天素材用小程序打开",1175:"视频号主页商店入口",1176:"视频号直播间主播打开小程序",1177:"视频号直播商品",1178:"在电脑打开手机上打开的小程序",1179:"#话题页打开小程序",1181:"网站应用打开PC小程序",1183:"PC微信 - 小程序面板 - 发现小程序 - 搜索",1185:"群公告",1186:"收藏 - 笔记",1187:"浮窗（8.0版本起）",1189:"表情雨广告",1191:"视频号活动",1192:"企业微信联系人profile页",1194:"URL Link",1195:"视频号主页商品tab",1197:"视频号主播从直播间返回小游戏",1198:"视频号开播界面打开小游戏",1203:"微信小程序压测工具的请求"},type:{1e3:"其它",1001:"快捷入口",1005:"搜索",1006:"搜索",1007:"分享",1008:"分享",1010:"快捷入口",1011:"二维码",1012:"二维码",1013:"二维码",1014:"订阅消息",1017:"测试",1019:"微信支付",1020:"公众号",1022:"快捷入口",1023:"快捷入口",1024:"快捷入口",1025:"二维码",1026:"快捷入口",1027:"搜索",1028:"卡券",1029:"卡券",1030:"测试",1031:"二维码",1032:"二维码",1034:"微信支付",1035:"公众号",1036:"分享",1037:"小程序之间跳转",1038:"小程序之间跳转",1039:"其它",1042:"搜索",1043:"公众号",1044:"分享",1045:"广告",1046:"广告",1047:"二维码",1048:"二维码",1049:"二维码",1052:"卡券",1053:"搜索",1054:"搜索",1056:"快捷入口",1057:"微信支付",1058:"公众号",1059:"测试",1060:"微信支付",1064:"快捷入口",1065:"推广",1067:"广告",1068:"广告",1069:"其它",1071:"微信支付",1072:"二维码",1073:"其它",1074:"公众号",1077:"其它",1078:"快捷入口",1079:"快捷入口",1081:"其它",1082:"公众号",1084:"广告",1088:"快捷入口",1089:"快捷入口",1090:"快捷入口",1091:"公众号",1092:"微信支付",1095:"广告",1096:"分享",1097:"微信支付",1099:"其它",1100:"微信支付",1101:"测试",1102:"公众号",1103:"快捷入口",1104:"快捷入口",1106:"搜索",1107:"订阅消息",1113:"快捷入口",1114:"快捷入口",1119:"企业微信",1120:"企业微信",1121:"企业微信",1124:"二维码",1125:"二维码",1126:"二维码",1129:"其它",1131:"快捷入口",1133:"智能终端",1135:"小程序之间跳转",1144:"公众号",1145:"快捷入口",1146:"快捷入口",1148:"卡券",1150:"二维码",1151:"快捷入口",1152:"快捷入口",1153:"快捷入口",1154:"快捷入口",1155:"快捷入口",1157:"快捷入口",1158:"分享",1160:"分享",1167:"其它",1168:"其它",1169:"快捷入口",1171:"快捷入口",1173:"快捷入口",1175:"视频号",1176:"视频号",1177:"视频号",1178:"快捷入口",1179:"快捷入口",1181:"广告",1183:"搜索",1185:"分享",1186:"快捷入口",1187:"快捷入口",1189:"广告",1191:"视频号",1192:"企业微信",1194:"推广",1195:"视频号",1197:"视频号",1198:"视频号",1203:"测试"}};exports.default=e;
},{isPage:false,isComponent:false,currentFile:'sdk/sceneDict.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sdk/sensors.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=e(require("./../utils/tool")),t={instance:null,scene:"",sceneId:0,install:function(e,n){this.instance||(this.instance=e)},getInstance:function(){return this.instance},getScene:function(){if(!this.scene){var e=n.default.parseScene();this.scene=e.scene,this.sceneId=e.sceneId}return this.scene},getSceneId:function(){if(!this.sceneId){var e=n.default.parseScene();this.scene=e.scene,this.sceneId=e.sceneId}return this.sceneId},pageShow:function(e){},pageShare:function(e){}};exports.default=t;
},{isPage:false,isComponent:false,currentFile:'sdk/sensors.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("sdk/sensorsdata.min.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/typeof"),t=require("../@babel/runtime/helpers/createForOfIteratorHelper"),i={},r=Array.isArray,n=Object.prototype,a=Array.prototype,s=a.forEach,o=a.indexOf,u=n.toString,c=n.hasOwnProperty,p=a.slice,d=function(e,t,i){if(null==e)return!1;var r={};if(s&&e.forEach===s)e.forEach(t,i);else if(e.length===+e.length){for(var n=0,a=e.length;n<a;n++)if(n in e&&t.call(i,e[n],n,e)===r)return!1}else for(var o in e)if(c.call(e,o)&&t.call(i,e[o],o,e)===r)return!1};function _(e){return null!=e&&"[object Object]"==u.call(e)}var l,f=(l=(new Date).getTime(),function(e){return Math.ceil((l=(9301*l+49297)%233280)/233280*e)});function h(){if("function"==typeof Uint32Array){var e="";if("undefined"!=typeof crypto?e=crypto:"undefined"!=typeof msCrypto&&(e=msCrypto),_(e)&&e.getRandomValues){var t=new Uint32Array(1);return e.getRandomValues(t)[0]/Math.pow(2,32)}}return f(1e19)/1e19}function g(e){return d(p.call(arguments,1),(function(t){for(var i in t)void 0!==t[i]&&(e[i]=t[i])})),e}var m=r||function(e){return"[object Array]"===u.call(e)};function y(e){return!(!e||!c.call(e,"callee"))}function v(e){var t=[];return null==e||d(e,(function(e){t[t.length]=e})),t}var b=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},S=Number.isSafeInteger||function(e){return b(e)&&Math.abs(e)<=Math.pow(2,53)-1},$={each:d,isObject:_,getRandomBasic:f,getRandom:h,extend:g,extend2Lev:function(e){return d(p.call(arguments,1),(function(t){for(var i in t)void 0!==t[i]&&null!==t[i]&&(_(t[i])&&_(e[i])?g(e[i],t[i]):e[i]=t[i])})),e},coverExtend:function(e){return d(p.call(arguments,1),(function(t){for(var i in t)void 0!==t[i]&&void 0===e[i]&&(e[i]=t[i])})),e},isArray:m,isFunction:function(e){if(!e)return!1;var t=Object.prototype.toString.call(e);return"[object Function]"==t||"[object AsyncFunction]"==t},isArguments:y,toArray:function(e){return e?e.toArray?e.toArray():m(e)||y(e)?p.call(e):v(e):[]},values:v,include:function(e,t){var i=!1;return null==e?i:o&&e.indexOf===o?-1!=e.indexOf(t):(d(e,(function(e){if(i||(i=e===t))return{}})),i)},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},isEmptyObject:function(e){if(_(e)){for(var t in e)if(c.call(e,t))return!1;return!0}return!1},deepCopy:function(e){var t={};return function e(t,i){for(var r in i){var n=i[r];m(n)?(t[r]=[],e(t[r],n)):_(n)?(t[r]={},e(t[r],n)):t[r]=n}}(t,e),t},isUndefined:function(e){return void 0===e},isString:function(e){return"[object String]"==u.call(e)},isDate:function(e){return"[object Date]"==u.call(e)},isBoolean:function(e){return"[object Boolean]"==u.call(e)},isNumber:function(e){return"[object Number]"==u.call(e)&&/[\d\.]+/.test(String(e))},isJSONString:function(e){try{JSON.parse(e)}catch(e){return!1}return!0},isInteger:b,isSafeInteger:S,slice:p},O={};function P(e){e=JSON.stringify(e);var t=i._.base64Encode(e);return encodeURIComponent(t)}O.buildData=function(e,t){var r={distinct_id:i.store.getDistinctId(),identities:i.store._state.identities,lib:{$lib:i.lib_name,$lib_method:"code",$lib_version:i.lib_version},properties:{}};return"track_id_unbind"===e.type&&"$UnbindID"===e.event&&(r.identities=$.deepCopy(e.unbind_value),delete e.unbind_value),$.isObject(t)||(t={}),$.extend(r,i.store.getUnionId(),e),$.isObject(e.properties)&&!$.isEmptyObject(e.properties)&&$.extend(r.properties,e.properties),e.type&&"profile"===e.type.slice(0,7)||(r._track_id=Number(String(h()).slice(2,5)+String(h()).slice(2,4)+String(Date.now()).slice(-4)),r.properties=$.extend({},$.info.properties,i.store.getProps(),$.info.currentProps,t,r.properties),"track"===e.type&&(r.properties.$is_first_day=$.getIsFirstDay()),function(e){if(e&&e.properties){var t=i._.getRefPage(),r=i._.getCurrentPageInfo(),n={$referrer:t.route,$referrer_title:t.title,$title:r.title,$url:r.url};for(var a in!0===i.para.preset_properties.url_path&&(n.$url_path=r.path),n)e.properties.hasOwnProperty(a)||(e.properties[a]=n[a])}}(r)),r.properties.$time&&$.isDate(r.properties.$time)?(r.time=1*r.properties.$time,delete r.properties.$time):r.time=1*new Date,$.parseSuperProperties(r.properties),$.searchObjDate(r),$.searchObjString(r),r},O.processData=function(e){return e},O.onceTrackData=function(e){return"data="+P(e)},O.batchTrackData=function(e){var t=Date.now();return e.forEach((function(e){e._flush_time=t})),"data_list="+P(e)},O.onEventSend=function(){return{}};var I={getData:function(e){wx.getStorage({key:i.para.storage_prepare_data_key,complete:function(t){var r=t.data&&i._.isArray(t.data)?t.data:[];I.deleteAesData(r),e&&e()}})},deleteAesData:function(e){var t=[],r=e.length;if(r>0){for(var n=0;n<r;n++)i._.isObject(e[n])&&t.push(e[n]);i.store.mem.mdata=t.concat(i.store.mem.mdata)}}},k={dataHasSend:!0,dataHasChange:!1,syncStorage:!1,failTime:0,init:function(){I.getData(k.syncStorageState),k.batchInterval()},syncStorageState:function(){k.syncStorage=!0},onAppHide:function(){i.para.batch_send&&this.batchSend()},send:function(e){this.dataHasChange=!0,i.store.mem.getLength()>=500&&(i._.logger.info("数据量存储过大，有异常"),i.store.mem.mdata.shift()),(e=O.processData(e))&&i.store.mem.add(e),i.store.mem.getLength()>=i.para.batch_send.max_length&&this.batchSend()},wxrequest:function(e){if(i._.isArray(e.data)&&e.data.length>0){var t=O.batchTrackData(e.data);i._.wxrequest({url:i.para.server_url,method:"POST",dataType:"text",data:t,success:function(){e.success(e.len)},fail:function(){e.fail()}})}else e.success(e.len)},batchSend:function(){if(this.dataHasSend){var e,t,r=i.store.mem.mdata;(t=(e=r.length>=100?r.slice(0,100):r).length)>0&&(this.dataHasSend=!1,this.wxrequest({data:e,len:t,success:this.batchRemove.bind(this),fail:this.sendFail.bind(this)}))}},sendFail:function(){this.dataHasSend=!0,this.failTime++},batchRemove:function(e){i.store.mem.clear(e),this.dataHasSend=!0,this.dataHasChange=!0,this.batchWrite(),this.failTime=0},is_first_batch_write:!0,batchWrite:function(){var e=this;this.dataHasChange&&(this.is_first_batch_write&&(this.is_first_batch_write=!1,setTimeout((function(){e.batchSend()}),1e3)),this.dataHasChange=!1,this.syncStorage&&i._.setStorageSync(i.para.storage_prepare_data_key,i.store.mem.mdata))},batchInterval:function(){var e=this;!function t(){setTimeout((function(){e.batchWrite(),t()}),500)}(),function t(){setTimeout((function(){e.batchSend(),t()}),i.para.batch_send.send_timeout*Math.pow(2,e.failTime))}()}};function C(e){e._flush_time=Date.now();var t=function(e,t){var i=O.onceTrackData(t);return-1!==e.indexOf("?")?e+"&"+i:e+"?"+i}(i.para.server_url,e);i._.wxrequest({url:t,method:"GET"})}var w={send:function(e,t){if(!i.para.server_url)return i._.logger.info("error: server_url 不能为空"),!1;if(i.current_scene&&1154===i.current_scene&&!i.para.preset_events.moments_page)return!1;var r=i._.deepCopy(e),n=i.kit.onEventSend(r),a=i.kit.buildData(e,n);a?(w.debug(a),i.events.emit("send",a),i.para.batch_send?k.send(a):C(a)):i._.logger.info("error: 数据异常 "+a)},debug:function(e){i._.logger.info(e)}},T={init_status:!1,life_state:{app_launched:!1},plugin:{init_list:[],uninitialized_list:[]},privacy:{enable_data_collect:!1},mp_hook:{data:1,onLoad:1,onShow:1,onReady:1,onPullDownRefresh:1,onShareAppMessage:1,onShareTimeline:1,onReachBottom:1,onPageScroll:1,onResize:1,onTabItemTap:1,onHide:1,onUnload:1},user:{LOGIN_ID_KEY:"$identity_login_id"}};i.popupEmitter={attached:function(){return!1}};function q(){var e;return global&&global.sensors_data_pre_config&&(e=!!global.sensors_data_pre_config.is_compliance_enabled&&global.sensors_data_pre_config.is_compliance_enabled),!e||!!T.init_status||!!T.privacy.enable_data_collect}function x(e,t,r){var n=i.autoTrackCustom[r];if(e[t]){var a=e[t];e[t]=function(){!i.para.autoTrackIsFirst||_(i.para.autoTrackIsFirst)&&!i.para.autoTrackIsFirst[r]?(a.apply(this,arguments),n.apply(this,arguments)):(!0===i.para.autoTrackIsFirst||_(i.para.autoTrackIsFirst)&&i.para.autoTrackIsFirst[r])&&(n.apply(this,arguments),a.apply(this,arguments))}}else e[t]=function(){n.apply(this,arguments)}}function j(e){var t,r={},n={},a=e.currentTarget||{},s=e.target||{};if(_(i.para.framework)&&_(i.para.framework.taro)&&!i.para.framework.taro.createApp&&s.id&&a.id&&s.id!==a.id)return!1;var o=a.dataset||{};if(t=e.type,r.$element_id=a.id,r.$element_type=o.type,r.$element_content=o.content,r.$element_name=o.name,_(e.event_prop)&&(n=e.event_prop),t&&A(t)){if(i.para.preset_events&&i.para.preset_events.collect_element&&!1===i.para.preset_events.collect_element(arguments[0]))return!1;r.$url_path=i._.getCurrentPath(),i._.setPageRefData(r),r=i._.extend(r,n),i.track("$MPClick",r)}}function D(e,t){var r=e[t];e[t]=function(){var e=r.apply(this,arguments),t=arguments[0];return _(t)&&(i.para.preset_events.defer_track?setTimeout((function(){j(t)}),0):j(t)),e}}function A(e){return!!{tap:1,longpress:1,longtap:1}[e]}function E(e){var t=[];if(i.para.autoTrack&&i.para.autoTrack.mpClick){t=function(e){var t=T.mp_hook,i=[];for(var r in e)"function"!=typeof e[r]||t[r]||i.push(r);return i}(e),function(e){var t=e.onTabItemTap;e.onTabItemTap=function(e){t&&t.apply(this,arguments);var r={};e&&(r.$element_content=e.text),r.$element_type="tabBar",r.$url_path=i._.getCurrentPath(),i._.setPageRefData(r),i.track("$MPClick",r)}}(e);for(var r=t.length,n=0;n<r;n++)D(e,t[n])}}function L(e){i.para.autoTrack&&i.para.autoTrack.pageLeave&&function(e){var t=e.onHide;e.onHide=function(){t&&t.apply(this,arguments),i._.sendPageLeave()};var r=e.onUnload;e.onUnload=function(){r&&r.apply(this,arguments),i._.sendPageLeave()}}(e),x(e,"onLoad","pageLoad"),x(e,"onShow","pageShow"),x(e,"onAddToFavorites","pageAddFavorites"),"function"==typeof e.onShareAppMessage&&i.autoTrackCustom.pageShare(e),"function"==typeof e.onShareTimeline&&i.autoTrackCustom.pageShareTimeline(e)}function U(e,t){return e!==i.store._state.history_login_id.name||i.store._state.history_login_id.value!==t}function F(e){var t=i.store.getFirstId(),r=i.store.getDistinctId();return t?e===t:e===r}function R(e,i){var r,n=["$identity_anonymous_id","$mp_openid","$identity_mp_openid","$identity_mp_unionid","$mp_unionid"],a=t((m(i)&&(n=n.concat(i)),n));try{for(a.s();!(r=a.n()).done;){if(r.value===e)return!0}}catch(e){a.e(e)}finally{a.f()}return!1}i.kit=O,i.mergeStorageData=I,i.saEvent=w,i.sendStrategy=k,i._=$,i.IDENTITY_KEY={EMAIL:"$identity_email",MOBILE:"$identity_mobile"},i.usePlugin=function(e,t){if(e&&e.info&&"miniprogram_abtesting"===e.info.lib_plugin_name)return"function"==typeof e.init&&e.init(i,t),!1;if(T.init_status)"function"==typeof e.init&&e.init(i,t);else{var r={target:e,para:t};T.plugin.uninitialized_list.push(r)}},i.checkPluginInitStatus=function(){if(T.plugin.uninitialized_list.length>0){for(var e in T.plugin.uninitialized_list){var t=T.plugin.uninitialized_list[e];t&&t.target&&"function"==typeof t.target.init&&t.target.init(i,t.para)}T.plugin.uninitialized_list=[]}},i.enableDataCollect=function(){T.privacy.enable_data_collect=!0},i.para={name:"sensors",server_url:"",send_timeout:1e3,show_log:!1,login_id_key:"$identity_login_id",allow_amend_share_path:!0,max_string_length:500,datasend_timeout:3e3,source_channel:[],autoTrack:{appLaunch:!0,appShow:!0,appHide:!0,pageShow:!0,pageShare:!0,mpClick:!1,mpFavorite:!0,pageLeave:!1},autotrack_exclude_page:{pageShow:[],pageLeave:[]},is_persistent_save:{share:!1,utm:!1},preset_properties:{url_path:!0},preset_events:{moments_page:!1,defer_track:!1,share_info_use_string:!1},batch_send:!0,storage_store_key:"sensorsdata2015_wechat",storage_prepare_data_key:"sensors_mp_prepare_data"};var N="object"==e(N)?N:{};N.info=function(){if(i.para.show_log&&"object"==("undefined"==typeof console?"undefined":e(console))&&console.log)try{if(3===arguments.length)return console.log(arguments[0],arguments[1],arguments[2]);if(2===arguments.length)return console.log(arguments[0],arguments[1]);if(1===arguments.length)return console.log(arguments[0])}catch(e){console.log(arguments[0])}},$.logger=N,i.setPara=function(e){i.para=$.extend2Lev(i.para,e);var t=[];if($.isArray(i.para.source_channel))for(var r=i.para.source_channel.length,n=0;n<r;n++)-1===" utm_source utm_medium utm_campaign utm_content utm_term sa_utm ".indexOf(" "+i.para.source_channel[n]+" ")&&t.push(i.para.source_channel[n]);i.para.source_channel=t,$.isObject(i.para.register)&&$.extend($.info.properties,i.para.register),i.para.openid_url||(i.para.openid_url=i.para.server_url.replace(/([^\/])\/(sa)(\.gif){0,1}/,"$1/mp_login")),"number"!=typeof i.para.send_timeout&&(i.para.send_timeout=1e3);var a={send_timeout:6e3,max_length:6};e&&e.datasend_timeout||i.para.batch_send&&(i.para.datasend_timeout=1e4),!0===i.para.batch_send?i.para.batch_send=$.extend({},a):$.isObject(i.para.batch_send)&&(i.para.batch_send=$.extend({},a,i.para.batch_send));var s={share:!1,utm:!1};!0===i.para.is_persistent_save?(i.para.is_persistent_save=$.extend({},s),i.para.is_persistent_save.utm=!0):$.isObject(i.para.is_persistent_save)&&(i.para.is_persistent_save=$.extend({},s,i.para.is_persistent_save)),i.para.server_url?(i.para.preset_properties=$.isObject(i.para.preset_properties)?i.para.preset_properties:{},$.isObject(i.para.autotrack_exclude_page)||(i.para.autotrack_exclude_page={pageShow:[],pageLeave:[]}),$.isArray(i.para.autotrack_exclude_page.pageShow)||(i.para.autotrack_exclude_page.pageShow=[]),$.isArray(i.para.autotrack_exclude_page.pageLeave)||(i.para.autotrack_exclude_page.pageLeave=[])):N.info("请使用 setPara() 方法设置 server_url 数据接收地址,详情可查看https://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0")},i.getServerUrl=function(){return i.para.server_url};var M=["$latest_utm_source","$latest_utm_medium","$latest_utm_campaign","$latest_utm_content","$latest_utm_term","$latest_sa_utm"],K=["$latest_share_distinct_id","$latest_share_url_path","$latest_share_depth","$latest_share_method"],B=["sensors_share_d","sensors_share_p","sensors_share_i","sensors_share_m"],H=Date.now(),V=null,Q=0,z="",J="",Y="",G=!1,W="";i.lib_version="1.17.10",i.lib_name="MiniProgram";var Z={},X=[];$.decodeURIComponent=function(e){var t="";try{t=decodeURIComponent(e)}catch(i){t=e}return t},$.encodeDates=function(e){return $.each(e,(function(t,i){$.isDate(t)?e[i]=$.formatDate(t):$.isObject(t)&&(e[i]=$.encodeDates(t))})),e},$.formatDate=function(e){function t(e){return e<10?"0"+e:e}return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+t(e.getMilliseconds())},$.searchObjDate=function(e){$.isObject(e)&&$.each(e,(function(t,i){$.isObject(t)?$.searchObjDate(e[i]):$.isDate(t)&&(e[i]=$.formatDate(t))}))},$.formatString=function(e){return e.length>i.para.max_string_length?(N.info("字符串长度超过限制，已经做截取--"+e),e.slice(0,i.para.max_string_length)):e},$.searchObjString=function(e){$.isObject(e)&&$.each(e,(function(t,i){$.isObject(t)?$.searchObjString(e[i]):$.isString(t)&&(e[i]=$.formatString(t))}))},$.parseSuperProperties=function(e){$.isObject(e)&&($.each(e,(function(t,i){if($.isFunction(t))try{e[i]=t(),$.isFunction(e[i])&&(N.info("您的属性- "+i+" 格式不满足要求，我们已经将其删除"),delete e[i])}catch(t){delete e[i],N.info("您的属性- "+i+" 抛出了异常，我们已经将其删除")}})),$.strip_sa_properties(e))},$.unique=function(e){for(var t,i=[],r={},n=0;n<e.length;n++)(t=e[n])in r||(r[t]=!0,i.push(t));return i},$.check={checkKeyword:function(e){return/^((?!^distinct_id$|^original_id$|^device_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_group|^user_tag)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i.test(e)},ckeckIdLength:function(e){return!(String(e).length>255&&(N.info("id 长度超过 255 个字符！"),1))}},$.strip_sa_properties=function(e){return $.isObject(e)?($.each(e,(function(t,i){if($.isArray(t)){var r=[];$.each(t,(function(e){$.isString(e)?r.push(e):N.info("您的数据-",t,"的数组里的值必须是字符串,已经将其删除")})),e[i]=r}$.isString(t)||$.isNumber(t)||$.isDate(t)||$.isBoolean(t)||$.isArray(t)||(N.info("您的数据 - "+i+":"+t+" - 格式不满足要求，已经将其删除"),delete e[i])})),e):e},$.strip_empty_properties=function(e){var t={};return $.each(e,(function(e,i){null!=e&&(t[i]=e)})),t},$.utf8Encode=function(e){var t,i,r,n,a="";for(t=i=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,n=0;n<r;n++){var s=e.charCodeAt(n),o=null;s<128?i++:o=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),null!==o&&(i>t&&(a+=e.substring(t,i)),a+=o,t=i=n+1)}return i>t&&(a+=e.substring(t,e.length)),a},$.base64Encode=function(e){var t,i,r,n,a,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=0,u=0,c="",p=[];if(!e)return e;e=$.utf8Encode(e);do{t=(a=e.charCodeAt(o++)<<16|e.charCodeAt(o++)<<8|e.charCodeAt(o++))>>18&63,i=a>>12&63,r=a>>6&63,n=63&a,p[u++]=s.charAt(t)+s.charAt(i)+s.charAt(r)+s.charAt(n)}while(o<e.length);switch(c=p.join(""),e.length%3){case 1:c=c.slice(0,-2)+"==";break;case 2:c=c.slice(0,-1)+"="}return c},$.urlSafeBase64=function(){var e={"+":"-","/":"_","=":"."},t={"-":"+",_:"/",".":"="};return{encode:function(t){return t.replace(/[+\/=]/g,(function(t){return e[t]}))},decode:function(e){return e.replace(/[-_.]/g,(function(e){return t[e]}))},trim:function(e){return e.replace(/[.=]{1,2}$/,"")},isBase64:function(e){return/^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)},isUrlSafeBase64:function(e){return/^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)}}}(),$.btoa=function(e){for(var t,i,r,n,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="",o=0,u=(e=String(e)).length%3;o<e.length;)((i=e.charCodeAt(o++))>255||(r=e.charCodeAt(o++))>255||(n=e.charCodeAt(o++))>255)&&N.info("Failed to execute 'btoa' : The string to be encoded contains characters outside of the Latin1 range."),s+=a.charAt((t=i<<16|r<<8|n)>>18&63)+a.charAt(t>>12&63)+a.charAt(t>>6&63)+a.charAt(63&t);return u?s.slice(0,u-3)+"===".substring(u):s},$.urlBase64Encode=function(e){return $.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)})))},$.rot13obfs=function(e,t){t="number"==typeof t?t:13;for(var i=(e=String(e)).split(""),r=0,n=i.length;r<n;r++)i[r].charCodeAt(0)<126&&(i[r]=String.fromCharCode((i[r].charCodeAt(0)+t)%126));return i.join("")},$.rot13defs=function(e){return e=String(e),$.rot13obfs(e,113)},$.getCurrentPage=function(){var e={};try{var t=getCurrentPages();e=t[t.length-1]}catch(e){N.info(e)}return e},$.getCurrentPath=function(){var e="未取到";try{var t=$.getCurrentPage();e=t?t.route:e}catch(e){N.info(e)}return e},$.getIsFirstDay=function(){return"object"==e(i.store._state)&&"number"==typeof i.store._state.first_visit_day_time&&i.store._state.first_visit_day_time>(new Date).getTime()},$.getCurrentUrl=function(e){var t=$.getCurrentPath(),i="";return $.isObject(e)&&e.sensors_mp_encode_url_query&&(i=e.sensors_mp_encode_url_query),t?i?t+"?"+i:t:"未取到"},$.getPath=function(e){return"string"==typeof e?e.replace(/^\//,""):"取值异常"},i.initialState={queue:[],isComplete:!1,systemIsComplete:!1,storeIsComplete:!1,checkIsComplete:function(){this.systemIsComplete&&this.storeIsComplete&&(this.isComplete=!0,this.queue.length>0&&($.each(this.queue,(function(e){"appLaunch"===e[0]?i.autoTrackCustom.appLaunch.apply(i.autoTrackCustom,$.slice.call(e[1])):i[e[0]].apply(i,$.slice.call(e[1]))})),this.queue=[]))}},$.getCustomUtmFromQuery=function(e,t,r,n){if(!$.isObject(e))return{};var a={};if(e.sa_utm)for(var s in e)"sa_utm"!==s?$.include(i.para.source_channel,s)&&(a[r+s]=e[s]):a[n+s]=e[s];else for(var s in e)-1===" utm_source utm_medium utm_campaign utm_content utm_term ".indexOf(" "+s+" ")?$.include(i.para.source_channel,s)&&(a[r+s]=e[s]):a[t+s]=e[s];return a},$.getObjFromQuery=function(e){var t=e.split("?"),i=[],r={};return t&&t[1]?($.each(t[1].split("&"),(function(e){(i=e.split("="))[0]&&i[1]&&(r[i[0]]=i[1])})),r):{}},$.setStorageSync=function(e,t){var i=function(){wx.setStorageSync(e,t)};try{i()}catch(e){N.info("set Storage fail --",e);try{i()}catch(e){N.info("set Storage fail again --",e)}}},$.getStorageSync=function(e){var t="";try{t=wx.getStorageSync(e)}catch(i){try{t=wx.getStorageSync(e)}catch(e){N.info("getStorage fail")}}return t},$.getMPScene=function(e){return"number"==typeof e||"string"==typeof e&&""!==e?e="wx-"+String(e):"未取到值"},$.objToParam=function(e,t){if("[object Object]"!==Object.prototype.toString.call(e))return N.info("请传入有效对象"),"";var i=[];for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];void 0===n?i.push(r+"="):(n=t?encodeURIComponent(n):n,i.push(r+"="+n))}return i.join("&")},$.delObjectKey=function(e){if("[object Object]"===Object.prototype.toString.call(e))for(var t=0;t<B.length;t++)delete e[B[t]];else N.info("请传入有效对象")},$.shareInfoData=function(e){var t={},r={};if(i.para.preset_events.share_info_use_string){r=e.query;for(var n=0;n<B.length;n++){if(!r.hasOwnProperty(B[n]))return{};r[B[n]]=$.decodeURIComponent(r[B[n]])}t={depth:Number(r.sensors_share_d),path:r.sensors_share_p||"",id:r.sensors_share_i||"",method:r.sensors_share_m||""}}else{if(!e.query.sampshare)return{};if(r=$.decodeURIComponent(e.query.sampshare),!$.isJSONString(r))return{};t={depth:(r=JSON.parse(r)).d,path:r.p,id:r.i,method:r.m}}return t},$.setShareInfo=function(e,t){var r={},n={},a=i.store.getDistinctId(),s=i.store.getFirstId();if(e&&$.isObject(e.query)){if(r=$.shareInfoData(e),$.isEmptyObject(r))return{};var o=r.depth,u=r.path,c=r.id,p=r.method}"string"==typeof c?(t.$share_distinct_id=c,z=c,n.$latest_share_distinct_id=c):t.$share_distinct_id="取值异常","number"==typeof o?!z||z!==a&&z!==s?!z||z===a&&z===s?t.$share_depth="-1":(t.$share_depth=o+1,Q=o+1,n.$latest_share_depth=o+1):(t.$share_depth=o,Q=o,n.$latest_share_depth=o):t.$share_depth="-1","string"==typeof u?(t.$share_url_path=u,n.$latest_share_url_path=u):t.$share_url_path="取值异常","string"==typeof p?(t.$share_method=p,n.$latest_share_method=p):t.$share_method="取值异常",$.setLatestShare(n)},$.getShareInfo=function(){if(i.para.preset_events.share_info_use_string){var e={sensors_share_i:i.store.getDistinctId()||"取值异常",sensors_share_p:$.getCurrentPath(),sensors_share_d:Q,sensors_share_m:J};return $.objToParam(e,!0)}var t=JSON.stringify({i:i.store.getDistinctId()||"取值异常",p:$.getCurrentPath(),d:Q,m:J});return"sampshare="+encodeURIComponent(t)},$.detectOptionQuery=function(e){if(!e||!$.isObject(e.query))return{};var t,r,n,a,s={};return s.query=$.extend({},e.query),"string"==typeof s.query.scene&&(t=s.query,r=["utm_source","utm_content","utm_medium","utm_campaign","utm_term","sa_utm"].concat(i.para.source_channel),n=new RegExp("("+r.join("|")+")%3D","i"),1===(a=Object.keys(t)).length&&"scene"===a[0]&&n.test(t.scene))&&(s.scene=s.query.scene,delete s.query.scene),e.query.q&&e.query.scancode_time&&"101"===String(e.scene).slice(0,3)&&(s.q=String(s.query.q),delete s.query.q,delete s.query.scancode_time),s},$.getMixedQuery=function(e){var t=$.detectOptionQuery(e),i=t.scene,r=t.q,n=t.query;for(var a in n)n[a]=$.decodeURIComponent(n[a]);return i&&(i=-1!==(i=$.decodeURIComponent(i)).indexOf("?")?"?"+i.replace(/\?/g,""):"?"+i,$.extend(n,$.getObjFromQuery(i))),r&&$.extend(n,$.getObjFromQuery($.decodeURIComponent(r))),n},$.setUtm=function(e,t){var i={},r=$.getMixedQuery(e),n=$.getCustomUtmFromQuery(r,"$","_","$"),a=$.getCustomUtmFromQuery(r,"$latest_","_latest_","$latest_");return i.pre1=n,i.pre2=a,$.extend(t,n),i},$.setSfSource=function(e,t){!$.isEmptyObject(e.query)&&e.query._sfs&&(t.$sf_source=e.query._sfs,i.registerApp({$latest_sf_source:t.$sf_source}))},$.setPageSfSource=function(e){try{var t=$.getCurrentPage(),i=t?t.options:"",r=$.deepCopy(i);for(var n in r)r[n]=$.decodeURIComponent(r[n]);!$.isEmptyObject(r)&&r._sfs&&(e.$sf_source=r._sfs)}catch(e){N.info(e)}};try{var ee=wx.setNavigationBarTitle;Object.defineProperty(wx,"setNavigationBarTitle",{get:function(){return function(e){var t=$.getCurrentPath();e=$.isObject(e)?e:{},Z[t]=e.title,ee.call(this,e)}}})}catch(l){N.info(l)}$.setRefPage=function(){var e={route:"直接打开",title:""};try{var t=$.getCurrentPage();if(t&&t.route){var i=t.sensors_mp_url_query?"?"+t.sensors_mp_url_query:"",r=t.route,n=$.getPageTitle(r);e.route=r+i,e.title=n,X.length>=2?(X.shift(),X.push(e)):X.push(e)}}catch(e){N.info(e)}},$.getRefPage=function(){var e={route:"直接打开",title:""};return X.length>1&&(e.title=X[0].title,e.route=X[0].route),e},$.getCurrentPageInfo=function(){var e=$.getCurrentPage(),t={title:"",url:"",path:"未取到"};if(e&&e.route){var i=e.sensors_mp_url_query?"?"+e.sensors_mp_url_query:"";t.title=$.getPageTitle(e.route),t.url=e.route+i,t.path=e.route}return t},$.setPageRefData=function(e,t,i){var r=$.getRefPage();$.isObject(e)&&(t?X.length>0&&t?(i=i?"?"+i:"",e.$referrer=$.getPath(t)+i,e.$referrer_title=$.getPageTitle(t)):(e.$referrer="直接打开",e.$referrer_title=""):(e.$referrer=r.route,e.$referrer_title=r.title))},$.getPageTitle=function(e){if("未取到"===e||!e)return"";var t="";try{if(__wxConfig){var i=__wxConfig,r=__wxConfig.page||{},n=r[e]||r[e+".html"],a={},s={};if(i.global&&i.global.window&&i.global.window.navigationBarTitleText&&(a.titleVal=i.global.window.navigationBarTitleText),n&&n.window&&n.window.navigationBarTitleText&&(s.titleVal=n.window.navigationBarTitleText),!s.titleVal&&__wxAppCode__){var o=__wxAppCode__[e+".json"];o&&o.navigationBarTitleText&&(s.titleVal=o.navigationBarTitleText)}if($.each(Z,(function(i,r){if(r===e)return t=i})),0===t.length){var u=$.extend(a,s);t=u.titleVal||""}}}catch(e){N.info(e)}return t},$.wxrequest=function(e){if($.compareSDKVersion(W,"2.10.0")>=0)e.timeout=i.para.datasend_timeout,wx.request(e);else{var t=wx.request(e);setTimeout((function(){$.isObject(t)&&$.isFunction(t.abort)&&t.abort()}),i.para.datasend_timeout)}},$.getAppInfoSync=function(){if(wx.getAccountInfoSync){var e=wx.getAccountInfoSync(),t=e&&e.miniProgram?e.miniProgram:{};return{appId:t.appId,appEnv:t.envVersion,appVersion:t.version}}return{}},$.getAppId=function(){var e=$.getAppInfoSync();return e&&e.appId?e.appId:""},$.validId=function(e){return"string"!=typeof e&&"number"!=typeof e||""===e?(N.info("输入 ID 类型错误"),!1):"number"!=typeof e||(e=String(e),/^\d+$/.test(e))?!!$.check.ckeckIdLength(e)&&e:(N.info("输入 ID 类型错误"),!1)},$.compareSDKVersion=function(e,t){e=e.split("."),t=t.split(".");for(var i=Math.max(e.length,t.length);e.length<i;)e.push("0");for(;t.length<i;)t.push("0");for(var r=0;r<i;r++){var n=parseInt(e[r]),a=parseInt(t[r]);if(n>a)return 1;if(n<a)return-1}return 0},$.setUpperCase=function(e){return $.isString(e)?e.toLocaleUpperCase():e},$.getOpenidNameByAppid=function(){var e=$.getAppId(),t="$identity_mp_openid";return e&&(t="$identity_mp_"+e+"_openid"),t},$.info={currentProps:{},properties:{$lib:"MiniProgram",$lib_version:String("1.17.10")},getSystem:function(){var e=this.properties;wx.getNetworkType({success:function(t){e.$network_type=$.setUpperCase(t.networkType)},complete:function(){wx.getSystemInfo({success:function(t){var i,r;e.$brand=$.setUpperCase(t.brand),e.$manufacturer=t.brand,e.$model=t.model,e.$screen_width=Number(t.screenWidth),e.$screen_height=Number(t.screenHeight),e.$os="ios"===(r=(i=t.platform).toLowerCase())?"iOS":"android"===r?"Android":i,e.$os_version=t.system.indexOf(" ")>-1?t.system.split(" ")[1]:t.system,W=t.SDKVersion,e.$mp_client_app_version=t.version,e.$mp_client_basic_library_version=W},complete:function(){var t=(new Date).getTimezoneOffset(),r=$.getAppInfoSync();$.isNumber(t)&&(e.$timezone_offset=t),r.appId&&(e.$app_id=r.appId),r.appVersion&&(e.$app_version=r.appVersion),i.initialState.systemIsComplete=!0,i.initialState.checkIsComplete()}})}})}},$.eventEmitter=function(){this.sub=[]},$.eventEmitter.prototype={add:function(e){this.sub.push(e)},emit:function(e,t){this.sub.forEach((function(i){i.on(e,t)}))}},$.eventSub=function(e){i.events.add(this),this._events=[],this.handle=e,this.ready=!1},$.eventSub.prototype={on:function(e,t){if(this.ready){if($.isFunction(this.handle))try{this.handle(e,t)}catch(e){N.info(e)}}else this._events.push({event:e,data:t})},isReady:function(){var e=this;e.ready=!0,e._events.forEach((function(t){if($.isFunction(e.handle))try{e.handle(t.event,t.data)}catch(e){N.info(e)}}))}},i.eventSub=$.eventSub,i.events=new $.eventEmitter,i.store={storageInfo:null,store_queue:[],getUUID:function(){return Date.now()+"-"+Math.floor(1e7*h())+"-"+h().toString(16).replace(".","")+"-"+String(31242*h()).replace(".","").slice(0,8)},getStorage:function(){return this.storageInfo||(this.storageInfo=i._.getStorageSync(i.para.storage_store_key)||""),this.storageInfo},_state:{},mem:{mdata:[],getLength:function(){return this.mdata.length},add:function(e){this.mdata.push(e)},clear:function(e){this.mdata.splice(0,e)}},toState:function(e){var t=null;$.isJSONString(e)?(t=JSON.parse(e)).distinct_id?this._state=t:this.set("distinct_id",this.getUUID()):$.isObject(e)&&(t=e).distinct_id?this._state=t:this.set("distinct_id",this.getUUID());var i=this._state._first_id||this._state.first_id,r=this._state._distinct_id||this._state.distinct_id,n=this._state.openid,a=(this._state.history_login_id?this._state.history_login_id:{}).name;if(this._state.identities&&$.isString(this._state.identities)){var s=JSON.parse($.rot13defs(this._state.identities));this._state.identities=s}var o,u,c=$.getOpenidNameByAppid();if(this._state.identities&&$.isObject(this._state.identities)&&!$.isEmptyObject(this._state.identities)){var p=(u="$mp_openid",(o=$.getAppId())&&(u="$mp_"+o+"_openid"),u);this._state.identities.hasOwnProperty("$mp_id")&&(this._state.identities.$identity_mp_id=this._state.identities.$mp_id,delete this._state.identities.$mp_id),this._state.identities.hasOwnProperty("$mp_unionid")&&(this._state.identities.$identity_mp_unionid=this._state.identities.$mp_unionid,delete this._state.identities.$mp_unionid),this._state.identities.hasOwnProperty(p)&&(this._state.identities[c]=this._state.identities[p],delete this._state.identities[p]),this._state.identities.hasOwnProperty("$identity_anonymous_id")&&(this._state.identities.$identity_anonymous_id=i||r)}else this._state.identities={},this._state.identities.$identity_mp_id=this.getUUID(),this._state.identities.$identity_anonymous_id=i||r;if(n&&(this._state.identities[c]=n),i)if(a&&this._state.identities.hasOwnProperty(a)){if(this._state.identities[a]!==r){for(var d in this._state.identities[a]=r,this._state.identities)this._state.identities.hasOwnProperty(d)&&"$identity_mp_id"!==d&&d!==a&&delete this._state.identities[d];this._state.history_login_id.value=r}}else{for(var d in this._state.identities[T.user.LOGIN_ID_KEY]=r,this._state.identities)this._state.identities.hasOwnProperty(d)&&"$identity_mp_id"!==d&&d!==T.user.LOGIN_ID_KEY&&delete this._state.identities[d];this._state.history_login_id={name:T.user.LOGIN_ID_KEY,value:r}}else{if(this._state.identities.hasOwnProperty("$identity_login_id")||this._state.identities.hasOwnProperty(a))for(var d in this._state.identities)this._state.identities.hasOwnProperty(d)&&"$identity_mp_id"!==d&&"$identity_anonymous_id"!==d&&delete this._state.identities[d];this._state.history_login_id={name:"",value:""}}this.save()},getFirstId:function(){return this._state._first_id||this._state.first_id},getDistinctId:function(){return this.getLoginDistinctId()||this._state._distinct_id||this._state.distinct_id},getUnionId:function(){var e={},t=this._state._first_id||this._state.first_id,i=this.getDistinctId();return t&&i?(e.login_id=i,e.anonymous_id=t):e.anonymous_id=i,e},getHistoryLoginId:function(){return _(this._state.history_login_id)?this._state.history_login_id:null},getLoginDistinctId:function(){var e=this.getHistoryLoginId();return _(e)&&e.value?e.name!==T.user.LOGIN_ID_KEY?e.name+"+"+e.value:e.value:null},getProps:function(){return this._state.props||{}},setProps:function(e,t){var i=this._state.props||{};t?this.set("props",e):($.extend(i,e),this.set("props",i))},set:function(t,r){var n={};for(var a in"string"==typeof t?n[t]=r:"object"==e(t)&&(n=t),this._state=this._state||{},n)this._state[a]=n[a],"first_id"===a?delete this._state._first_id:"distinct_id"===a&&(delete this._state._distinct_id,i.events.emit("changeDistinctId"));this.save()},identitiesSet:function(e){var t={};switch(e.type){case"login":t.$identity_mp_id=i.store._state.identities.$identity_mp_id,t[e.id_name]=e.id;break;case"logout":t.$identity_mp_id=i.store._state.identities.$identity_mp_id;break;case"identify":(t=$.deepCopy(i.store._state.identities)).$identity_anonymous_id=e.id}i.store.set("identities",t)},change:function(e,t){this._state["_"+e]=t},encryptStorage:function(){var e=this.getStorage(),t="data:enc;";$.isObject(e)?e=t+$.rot13obfs(JSON.stringify(e)):$.isString(e)&&-1===e.indexOf(t)&&(e=t+$.rot13obfs(e)),i._.setStorageSync(i.para.storage_store_key,e)},save:function(){var e=$.deepCopy(this._state),t=$.rot13obfs(JSON.stringify(e.identities));e.identities=t,delete e._first_id,delete e._distinct_id,i.para.encrypt_storage&&(e="data:enc;"+$.rot13obfs(JSON.stringify(e))),i._.setStorageSync(i.para.storage_store_key,e)},init:function(){var e=this.getStorage();if(e)$.isString(e)&&-1!==e.indexOf("data:enc;")&&(e=e.substring("data:enc;".length),e=JSON.parse($.rot13defs(e))),this.toState(e);else{G=!0;var t=new Date,r=t.getTime();t.setHours(23),t.setMinutes(59),t.setSeconds(60),i.setOnceProfile({$first_visit_time:new Date}),this.set({distinct_id:this.getUUID(),first_visit_time:r,first_visit_day_time:t.getTime(),identities:{$identity_mp_id:this.getUUID()},history_login_id:{name:"",value:""}})}i.store.checkStoreInit()},checkStoreInit:function(){T.init_status&&(this.store_queue.length>0&&$.each(this.store_queue,(function(e){i[e.method].apply(i,$.slice.call(e.params))})),this.store_queue=[])}},i.setProfile=function(e,t){i.saEvent.send({type:"profile_set",properties:e},t)},i.setOnceProfile=function(e,t){i.saEvent.send({type:"profile_set_once",properties:e},t)},i.appendProfile=function(e,t){if(!$.isObject(e))return!1;$.each(e,(function(t,i){$.isString(t)?e[i]=[t]:(delete e[i],N.info("appendProfile属性的值必须是字符串或者数组"))})),i.saEvent.send({type:"profile_append",properties:e},t)},i.incrementProfile=function(e,t){if(!$.isObject(e))return!1;var r=e;$.isString(e)&&((e={})[r]=1),i.saEvent.send({type:"profile_increment",properties:e},t)},i.track=function(e,t,i){this.saEvent.send({type:"track",event:e,properties:t},i)},i.identify=function(e,t){if(!q())return!1;if(!T.init_status)return i.store.store_queue.push({method:"identify",params:arguments}),!1;if(e=$.validId(e)){var r=i.store.getFirstId();!0===t?r?i.store.set("first_id",e):i.store.set("distinct_id",e):r?i.store.change("first_id",e):i.store.change("distinct_id",e),i.store.identitiesSet({type:"identify",id:e})}},i.trackSignup=function(e,t,r,n){var a,s,o,u;_(e)?(a=e.id,s=e.event_name,o=e.id_name):(a=e,s=t),i.store.set("distinct_id",a),u=o&&o!==T.user.LOGIN_ID_KEY?o+"+"+a:a;var c=i.store.getFirstId()||i.store.getDistinctId();i.saEvent.send({original_id:c,distinct_id:u,login_id:u,type:"track_signup",event:s,properties:r},n)},i.registerApp=function(e){$.isObject(e)&&!$.isEmptyObject(e)&&($.info.currentProps=$.extend($.info.currentProps,e))},i.register=function(e){$.isObject(e)&&!$.isEmptyObject(e)&&i.store.setProps(e)},i.clearAllRegister=function(){i.store.setProps({},!0)},i.clearAllProps=function(e){var t=i.store.getProps(),r={};$.isArray(e)&&($.each(t,(function(t,i){$.include(e,i)||(r[i]=t)})),i.store.setProps(r,!0))},i.clearAppRegister=function(e){$.isArray(e)&&$.each($.info.currentProps,(function(t,i){$.include(e,i)&&delete $.info.currentProps[i]}))},$.setLatestChannel=function(e){$.isEmptyObject(e)||(function(e,t){var i=!1;for(var r in t)e[t[r]]&&(i=!0);return i}(e,M)&&(i.clearAppRegister(M),i.clearAllProps(M)),i.para.is_persistent_save.utm?i.register(e):i.registerApp(e))},$.setLatestShare=function(e){(e.$latest_share_depth||e.$latest_share_distinct_id||e.$latest_share_url_path||e.$latest_share_method)&&(i.clearAppRegister(K),i.clearAllProps(K),i.para.is_persistent_save.share?i.register(e):i.registerApp(e))},i.login=function(e){if(!(e=$.validId(e)))return!1;if(F(e))return!1;var t=i.store.getFirstId(),r=i.store.getDistinctId(),n=T.user.LOGIN_ID_KEY;U(n,e)&&(i.store._state.identities[n]=e,i.store.set("history_login_id",{name:n,value:e}),t||i.store.set("first_id",r),i.trackSignup({id:e,event_name:"$SignUp"}),i.store.identitiesSet({type:"login",id:e,id_name:n}))},i.loginWithKey=function(e,t){if(!$.isString(e))return N.info("Key must be String"),!1;if(!$.check.checkKeyword(e)&&e.length>100)r="Key ["+e+"] is invalid",N.info(r);else if(!$.check.checkKeyword(e))return r="Key ["+e+"] is invalid",N.info(r),!1;if(R(e,["$mp_id","$identity_mp_id"])){var r="Key ["+e+"] is invalid";return N.info(r),!1}if(!(t=$.validId(t)))return!1;if(F(t))return!1;var n=i.store.getFirstId(),a=i.store.getDistinctId();U(e,t)&&(i.store._state.identities[e]=t,i.store.set("history_login_id",{name:e,value:t}),n||i.store.set("first_id",a),i.trackSignup({id:t,event_name:"$SignUp",id_name:e}),i.store.identitiesSet({type:"login",id:t,id_name:e}))},i.getAnonymousID=function(){if(!$.isEmptyObject(i.store._state))return i.store._state._first_id||i.store._state.first_id||i.store._state._distinct_id||i.store._state.distinct_id;N.info("请先初始化SDK")},i.getIdentities=function(){return $.isEmptyObject(i.store._state)?(N.info("请先初始化SDK"),null):i.store._state.identities||null},i.logout=function(e){var t=i.store.getFirstId();i.store.identitiesSet({type:"logout"}),i.store.set("history_login_id",{name:"",value:""}),t?(i.store.set("first_id",""),!0===e?i.store.set("distinct_id",i.store.getUUID()):i.store.set("distinct_id",t)):N.info("没有first_id，logout失败")},i.openid={getRequest:function(e){wx.login({success:function(t){t.code&&i.para.appid&&i.para.openid_url?$.wxrequest({url:i.para.openid_url+"&code="+t.code+"&appid="+i.para.appid,method:"GET",complete:function(t){$.isObject(t)&&$.isObject(t.data)&&t.data.openid?e(t.data.openid):e()}}):e()}})},getWXStorage:function(){var e=i.store.getStorage();if(e&&$.isObject(e))return e.openid},getOpenid:function(e){if(!i.para.appid)return e(),!1;var t=this.getWXStorage();t?e(t):this.getRequest(e)}},i.init=function(e){if(!0===T.init_status)return!1;T.init_status=!0,e&&$.isObject(e)&&i.setPara(e),i.store.init(),i._.info.getSystem(),i.checkPluginInitStatus(),i.para.batch_send&&k.init(),i.initialState.storeIsComplete=!0,i.initialState.checkIsComplete(),function(){if(!T.life_state.app_launched){var e=wx.getLaunchOptionsSync()||{};i.autoTrackCustom.appLaunch(e)}}()},i.getPresetProperties=function(){if($.info&&$.info.properties&&$.info.properties.$lib){var e={};$.each($.info.currentProps,(function(t,i){0===i.indexOf("$")&&(e[i]=t)}));var t={$url_path:$.getCurrentPath(),$is_first_day:$.getIsFirstDay(),$is_first_time:G},r=$.extend(e,t,$.info.properties,i.store.getProps());return delete r.$lib,r}return{}},i.setOpenid=function(e,t){if(!(e=$.validId(e)))return!1;if(!q())return!1;if(!T.init_status)return i.store.store_queue.push({method:"setOpenid",params:arguments}),!1;t&&console.log("%c 当前版本 setOpenid 接口 已不支持传入第二个参数","color:#F39C12;font-size: 14px;"),i.store.set("openid",e),i.identify(e,!0);var r=$.getOpenidNameByAppid();i.store._state.identities[r]=e,i.store.save()},i.unsetOpenid=function(e){var t=$.validId(e);if(!t)return!1;i.store._state.openid===t&&i.store.set("openid","");var r=$.getOpenidNameByAppid();i.store._state.identities.hasOwnProperty(r)&&t===i.store._state.identities[r]&&(delete i.store._state.identities[r],i.store.save())},i.setUnionid=function(e){var t=$.validId(e);t&&(i.store._state.identities.$identity_mp_unionid=t,i.store.save())},i.unsetUnionid=function(e){var t=$.validId(e);if(t&&i.store._state.identities.hasOwnProperty("$identity_mp_unionid")&&t===i.store._state.identities.$identity_mp_unionid){var r=$.getOpenidNameByAppid();i.store._state.identities.hasOwnProperty(r)&&(delete i.store._state.identities[r],delete i.store._state.openid,i.store.save()),delete i.store._state.identities.$identity_mp_unionid,i.store.save()}},i.initWithOpenid=function(e,t){(e=e||{}).appid&&(i.para.appid=e.appid),i.openid.getOpenid((function(r){r&&i.setOpenid(r,e.isCoverLogin),t&&$.isFunction(t)&&t(r),i.init(e)}))},i.bind=function(e,t){if($.isNumber(t)){if($.isInteger(t)&&!1===$.isSafeInteger(t))return N.info("Value must be String"),!1;t=String(t)}if(!$.isString(e))return N.info("Key must be String"),!1;var r=i.store.getHistoryLoginId(),n=r?r.name:"";if(!$.check.checkKeyword(e)||R(e,[T.user.LOGIN_ID_KEY,n,"$mp_id","$identity_mp_id"])){var a="Key ["+e+"] is invalid";return N.info(a),!1}return t&&""!==t?$.isString(t)?$.check.ckeckIdLength(t)?(i.store._state.identities[e]=t,i.store.save(),void i.saEvent.send({type:"track_id_bind",event:"$BindID"})):(a="Value ["+t+"] is beyond the maximum length 255",N.info(a),!1):(N.info("Value must be String"),!1):(N.info("Value is empty or null"),!1)},i.unbind=function(e,t){if($.isNumber(t)){if($.isInteger(t)&&!1===$.isSafeInteger(t))return N.info("Value must be String"),!1;t=String(t)}if(!$.isString(e))return N.info("Key must be String"),!1;if(!$.check.checkKeyword(e)||R(e,[T.user.LOGIN_ID_KEY])){var r="Key ["+e+"] is invalid";return N.info(r),!1}if(!t||""===t)return N.info("Value is empty or null"),!1;if(!$.isString(t))return N.info("Value must be String"),!1;if(!$.check.ckeckIdLength(t))return r="Value ["+t+"] is beyond the maximum length 255",N.info(r),!1;i.store._state.identities.hasOwnProperty(e)&&t===i.store._state.identities[e]&&("$mp_id"!==e&&"$identity_mp_id"!==e&&delete i.store._state.identities[e],i.store.save());var n=i.store.getDistinctId(),a=i.store.getFirstId();n===e+"+"+t&&(i.store.set("first_id",""),i.store.set("distinct_id",a),i.store.set("history_login_id",{name:"",value:""}));var s={};s[e]=t,i.saEvent.send({type:"track_id_unbind",event:"$UnbindID",unbind_value:s})},i.setWebViewUrl=function(e,t){if(!$.isString(e)||""===e)return N.info("error:请传入正确的 URL 格式"),!1;if(!/^http(s)?:\/\//.test(e))return N.info("warning: 请传入正确的 URL 格式"),!1;var r=/([^?#]+)(\?[^#]*)?(#.*)?/.exec(e);if(!r)return!1;var n,a=r[1]||"",s=r[2]||"",o=r[3]||"",u="",c=i.store.getDistinctId()||"",p=i.store.getFirstId()||"";$.urlSafeBase64&&$.urlSafeBase64.encode?c=c?$.urlSafeBase64.trim($.urlSafeBase64.encode($.urlBase64Encode(c))):"":this._.rot13obfs&&(c=c?$.rot13obfs(c):""),c=encodeURIComponent(c);var d=p?"f"+c:"d"+c;return t?(n=o.indexOf("_sasdk"),u=o.indexOf("?")>-1?n>-1?a+s+"#"+o.substring(1,n)+"_sasdk="+d:a+s+"#"+o.substring(1)+"&_sasdk="+d:a+s+"#"+o.substring(1)+"?_sasdk="+d):(n=s.indexOf("_sasdk"),u=/^\?(\w)+/.test(s)?n>-1?a+s.replace(/(_sasdk=)([^&]*)/gi,"_sasdk="+d)+o:a+"?"+s.substring(1)+"&_sasdk="+d+o:a+"?"+s.substring(1)+"_sasdk="+d+o),u},$.each(["setProfile","setOnceProfile","track","quick","incrementProfile","appendProfile","login","logout","registerApp","register","clearAllRegister","clearAllProps","clearAppRegister","bind","unbind","unsetOpenid","setUnionid","unsetUnionid"],(function(e){var t=i[e];i[e]=function(){if(!q())return!1;i.initialState.isComplete?t.apply(i,arguments):i.initialState.queue.push([e,arguments])}})),$.setQuery=function(e,t){if(e&&$.isObject(e)&&!$.isEmptyObject(e)){var i=[];return $.each(e,(function(e,r){"q"===r&&$.isString(e)&&0===e.indexOf("http")||(t?i.push(r+"="+e):i.push(r+"="+$.decodeURIComponent(e)))})),i.join("&")}return""},$.getUtmFromPage=function(){var e={};try{var t=$.getCurrentPage(),i=$.deepCopy(t.options);for(var r in i)i[r]=$.decodeURIComponent(i[r]);e=$.getCustomUtmFromQuery(i,"$","_","$")}catch(e){N.info(e)}return e},$.sendPageLeave=function(){var e={},t="";try{t=(e=$.getCurrentPage())?e.route:""}catch(e){N.info(e)}if(H>=0&&""!==t){var r={},n=$.getPageTitle(t),a=(Date.now()-H)/1e3;(isNaN(a)||a<0)&&(a=0),r.$url_query=e.sensors_mp_url_query?e.sensors_mp_url_query:"",r.$url_path=t,r.$title=n,r.event_duration=a,-1===i.para.autotrack_exclude_page.pageLeave.indexOf(t)&&i.track("$MPPageLeave",r),H=-1}},i.autoTrackCustom={trackCustom:function(e,t,r){var n=i.para.autoTrack[e],a="";i.para.autoTrack&&n&&("function"==typeof n?(a=n(),$.isObject(a)&&$.extend(t,a)):$.isObject(n)&&($.extend(t,n),i.para.autoTrack[e]=!0),i.track(r,t))},appLaunch:function(t,r){if("object"!=e(this)||this.trackCustom||(this[i.para.name]=i),!q())return!1;if(!i.initialState.isComplete)return i.initialState.queue.push(["appLaunch",arguments]),T.life_state.app_launched=!0,!1;T.life_state.app_launched=!0;var n={};if(t&&t.scene?(Y=t.scene,i.current_scene=Y,n.$scene=$.getMPScene(t.scene)):n.$scene="未取到值",t&&t.scene&&1010===t.scene&&t.query&&(t.query.sampshare&&delete t.query.sampshare,$.delObjectKey(t.query)),t&&t.path&&(n.$url_path=$.getPath(t.path),n.$title=$.getPageTitle(t.path),t.query&&$.isObject(t.query))){var a=$.setQuery(t.query);a=a?"?"+a:"",n.$url=n.$url_path+a}$.setShareInfo(t,n);var s=$.setUtm(t,n);G?(n.$is_first_time=!0,$.isEmptyObject(s.pre1)||i.setOnceProfile(s.pre1)):n.$is_first_time=!1,$.setLatestChannel(s.pre2),$.setSfSource(t,n),i.registerApp({$latest_scene:n.$scene}),n.$url_query=$.setQuery(t.query),$.setPageRefData(n),r?(n=$.extend(n,r),i.track("$MPLaunch",n)):i.para.autoTrack&&i.para.autoTrack.appLaunch&&i.autoTrackCustom.trackCustom("appLaunch",n,"$MPLaunch")},appShow:function(e,t){var r={};V=(new Date).getTime(),e&&e.scene?(Y=e.scene,i.current_scene=Y,r.$scene=$.getMPScene(e.scene)):r.$scene="未取到值",e&&e.scene&&1010===e.scene&&e.query&&(e.query.sampshare&&delete e.query.sampshare,$.delObjectKey(e.query)),e&&e.path&&(r.$url_path=$.getPath(e.path),r.$title=$.getPageTitle(e.path)),$.setShareInfo(e,r);var n=$.setUtm(e,r);$.setLatestChannel(n.pre2),$.setSfSource(e,r),i.registerApp({$latest_scene:r.$scene}),r.$url_query=$.setQuery(e.query),$.setPageRefData(r,e.path,r.$url_query),e&&e.path&&(r.$url=e.path+(r.$url_query?"?"+r.$url_query:"")),t?(r=$.extend(r,t),i.track("$MPShow",r)):i.para.autoTrack&&i.para.autoTrack.appShow&&i.autoTrackCustom.trackCustom("appShow",r,"$MPShow")},appHide:function(e){var t=(new Date).getTime(),r={};r.$url_path=$.getCurrentPath(),V&&t-V>0&&(t-V)/36e5<24&&(r.event_duration=(t-V)/1e3),$.setPageRefData(r),e?(r=$.extend(r,e),i.track("$MPHide",r)):i.para.autoTrack&&i.para.autoTrack.appHide&&i.autoTrackCustom.trackCustom("appHide",r,"$MPHide"),k.onAppHide()},pageLoad:function(e){Y&&1010===Y&&e&&(e.sampshare&&delete e.sampshare,$.delObjectKey(e)),e&&$.isObject(e)&&(this.sensors_mp_url_query=$.setQuery(e),this.sensors_mp_encode_url_query=$.setQuery(e,!0))},pageShow:function(){H=Date.now();var e={},t=$.getCurrentPath(),r=$.getPageTitle(t);$.setRefPage(),e.$url_path=t,e.$url_query=this.sensors_mp_url_query?this.sensors_mp_url_query:"",e=$.extend(e,$.getUtmFromPage()),$.setPageRefData(e),$.setPageSfSource(e),r&&(e.$title=r),i.para.onshow?i.para.onshow(i,t,this):-1===i.para.autotrack_exclude_page.pageShow.indexOf(t)&&i.autoTrackCustom.trackCustom("pageShow",e,"$MPViewScreen")},pageShare:function(t){var r=t.onShareAppMessage;t.onShareAppMessage=function(){J="转发消息卡片";var t=r.apply(this,arguments);if(i.para.autoTrack&&i.para.autoTrack.pageShare){var n={$url_path:$.getCurrentPath(),$share_depth:Q,$share_method:J};$.setPageRefData(n),i.autoTrackCustom.trackCustom("pageShare",n,"$MPShare")}return i.para.allow_amend_share_path&&("object"!=e(t)&&((t={}).path=$.getCurrentUrl(this)),"object"!=e(t)||void 0!==t.path&&""!==t.path||(t.path=$.getCurrentUrl(this)),"object"==e(t)&&"string"==typeof t.path&&(-1===t.path.indexOf("?")?t.path=t.path+"?":"&"!==t.path.slice(-1)&&(t.path=t.path+"&")),t.path=t.path+$.getShareInfo()),t}},pageShareTimeline:function(t){var r=t.onShareTimeline;t.onShareTimeline=function(){J="朋友圈分享";var t=r.apply(this,arguments);if(i.para.autoTrack&&i.para.autoTrack.pageShare){var n={$url_path:$.getCurrentPath(),$share_depth:Q,$share_method:J};$.setPageRefData(n),i.autoTrackCustom.trackCustom("pageShare",n,"$MPShare")}return i.para.allow_amend_share_path&&("object"!=e(t)&&(t={}),"object"==e(t)&&void 0===t.query&&(t.query=""),"object"==e(t)&&"string"==typeof t.query&&""!==t.query&&"&"!==t.query.slice(-1)&&(t.query=t.query+"&"),t.query=t.query+$.getShareInfo()),t}},pageAddFavorites:function(){var e={};e.$url_path=$.getCurrentPath(),i.para.autoTrack&&i.para.autoTrack.mpFavorite&&i.autoTrackCustom.trackCustom("mpFavorite",e,"$MPAddFavorites")}},i.quick=function(){var e=arguments[0],t=arguments[1],r=arguments[2],n=$.isObject(r)?r:{};if("getAnonymousID"===e){if(!$.isEmptyObject(i.store._state))return i.store._state._first_id||i.store._state.first_id||i.store._state._distinct_id||i.store._state.distinct_id;N.info("请先初始化SDK")}else"appLaunch"===e||"appShow"===e?t?i.autoTrackCustom[e](t,n):N.info("App的launch和show，在sensors.quick第二个参数必须传入App的options参数"):"appHide"===e&&(n=$.isObject(t)?t:{},i.autoTrackCustom[e](n))},i.appLaunch=function(e,t){var r={};e&&e.scene?(Y=e.scene,i.current_scene=Y,r.$scene=$.getMPScene(e.scene)):r.$scene="未取到值",e&&e.scene&&1010===e.scene&&e.query&&(e.query.sampshare&&delete e.query.sampshare,$.delObjectKey(e.query)),e&&e.path&&(r.$url_path=$.getPath(e.path),r.$title=$.getPageTitle(e.path)),$.setShareInfo(e,r);var n=$.setUtm(e,r);G?(r.$is_first_time=!0,$.isEmptyObject(n.pre1)||i.setOnceProfile(n.pre1)):r.$is_first_time=!1,$.setLatestChannel(n.pre2),$.setSfSource(e,r),i.registerApp({$latest_scene:r.$scene}),r.$url_query=$.setQuery(e.query),r.$url=e.path+(r.$url_query?"?"+r.$url_query:""),$.setPageRefData(t),$.isObject(t)&&(r=$.extend(r,t)),i.track("$MPLaunch",r)},i.appShow=function(e,t){var r={};V=(new Date).getTime(),e&&e.scene?(Y=e.scene,i.current_scene=Y,r.$scene=$.getMPScene(e.scene)):r.$scene="未取到值",e&&e.scene&&1010===e.scene&&e.query&&(e.query.sampshare&&delete e.query.sampshare,$.delObjectKey(e.query)),e&&e.path&&(r.$url_path=$.getPath(e.path),r.$title=$.getPageTitle(e.path)),$.setShareInfo(e,r);var n=$.setUtm(e,r);$.setLatestChannel(n.pre2),$.setSfSource(e,r),i.registerApp({$latest_scene:r.$scene}),r.$url_query=$.setQuery(e.query),e&&e.path&&(r.$url=e.path+(r.$url_query?"?"+r.$url_query:"")),$.setPageRefData(r,e.path,r.$url_query),$.isObject(t)&&(r=$.extend(r,t)),i.track("$MPShow",r)},i.appHide=function(e){var t=(new Date).getTime(),r={};r.$url_path=$.getCurrentPath(),V&&t-V>0&&(t-V)/36e5<24&&(r.event_duration=(t-V)/1e3),$.setPageRefData(r),$.isObject(e)&&(r=$.extend(r,e)),i.track("$MPHide",r),k.onAppHide()},i.pageShow=function(e){var t={},r=$.getCurrentPath(),n=$.getPageTitle(r),a=$.getCurrentPage();$.setRefPage(),n&&(t.$title=n),t.$url_path=r,t.$url_query=a.sensors_mp_url_query?a.sensors_mp_url_query:"",t=$.extend(t,$.getUtmFromPage()),$.setPageSfSource(t),$.setPageRefData(t),$.isObject(e)&&(t=$.extend(t,e)),i.track("$MPViewScreen",t)},function(){var e=App;App=function(t){t[i.para.name]=i,e.apply(this,arguments)},wx.onAppShow((function(e){if(!T.life_state.app_launched){var t=wx.getLaunchOptionsSync()||{};i.autoTrackCustom.appLaunch(t)}i.autoTrackCustom.appShow(e)})),wx.onAppHide((function(){i.autoTrackCustom.appHide()}))}(),function(){var e=Page;Page=function(t){try{t||(t={}),E(t),L(t),e.apply(this,arguments)}catch(t){e.apply(this,arguments)}};var t=Component;Component=function(e){try{e||(e={}),e.methods||(e.methods={}),E(e.methods),L(e.methods),t.apply(this,arguments)}catch(e){t.apply(this,arguments)}}}(),module.exports=i;
},{isPage:false,isComponent:false,currentFile:'sdk/sensorsdata.min.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("services/api.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../@babel/runtime/helpers/objectSpread2"),n=t(require("./../config/index")),a=t(require("apiHouse")),o=require("./middleware"),r=(t(require("./../utils/tool")),require("../utils/reTypeList")),c=(n.default.loadConfig(),{jscodeAuth:function(t){return new Promise((function(e,n){wx.login({success:function(r){t.codeStr=r.code,o.PROJECT.api({cookName:"jscodeAuthCook",apiPath:a.default.project.jscodeAuthGateway,data:Object.assign(a.default.project.jscodeAuthParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}})}))},getItoken:function(){return new Promise((function(t,e){wx.login({success:function(n){o.JIATUI.api({method:"GET",apiPath:a.default.project.getItoenGateway,data:Object.assign(a.default.project.getItokenparams(),{code:n.code})}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}})}))},getTencetStaffCardInfo:function(t){return new Promise((function(e,n){o.JIATUI.api({method:"GET",cookName:"tencentStaffCardInfoCook",cacheKey:"getTencetStaffCardInfo-"+t,cacheType:1,apiPath:a.default.project.getTencetStaffInfoGateway,data:{cardId:t||""}},{headers:{"i-token":wx.getStorageSync("i_token")||""},timeout:5e3}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getTencetStaffInfo:function(){return new Promise((function(t,e){o.JIATUI.api({method:"GET",cookName:"tencentStaffInfoCook",apiPath:a.default.project.getTencetStaffInfoGateway,data:{}},{headers:{"i-token":wx.getStorageSync("i_token")||""}}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},isTencentStaff:function(){return new Promise((function(t,e){wx.login({success:function(n){console.log("aaa",n),o.PROJECT.api({cookName:"isTencentStaffCook",apiPath:a.default.project.tencentStaffGateway,data:Object.assign(a.default.project.tencentStaffParams(),{codeStr:n.code})}).then((function(e){return t(e)})).catch((function(t){return e(t)}))},fail:function(t){console.log("fail"),e(t)}})}))},homeBnnner:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"homeBnnner",apiPath:a.default.project.homeBannerGateway,data:a.default.project.homeParams()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},homeCase:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"homeCase",apiPath:a.default.project.homeCaseGateway,data:a.default.project.homeParamsSort()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},homeScene:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"homeSceneCook",apiPath:a.default.project.homeSceneGateway,data:a.default.project.homeParamsSort()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},homeTool:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"homeTool",apiPath:a.default.project.homeToolGateway,data:a.default.project.homeParamsSort()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},homeCooper:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"homeCooper",apiPath:a.default.project.homeCooperGateway,data:a.default.project.homeParamsSort()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},homeProduct:function(){return new Promise((function(t,e){o.PROJECT.api({cacheKey:"productDict",cacheType:1,cookName:"homeProduct",apiPath:a.default.project.homeProductGateway,data:a.default.project.homeParams()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},getIndustry:function(){return new Promise((function(t,e){o.PROJECT.api({cacheKey:"industryDict",cacheType:1,cookName:"getIndustry",apiPath:a.default.project.industryGateway,data:a.default.project.homeParams()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},getIndustryLike:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"getIndustryLike",apiPath:a.default.project.industryGateway,data:Object.assign(a.default.project.homeParams(),{forInterest:1})}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},pageDict:function(){return new Promise((function(t,e){o.PROJECT.api({cacheKey:"allDict",cacheType:1,cookName:"pageDict",apiPath:a.default.project.pageDictGateway,data:a.default.project.homeParams()}).then((function(e){e.content.industry=(0,r.reWriteNameList)(e.content.industry),e.content.product=(0,r.reWriteNameList)(e.content.product),t(e)})).catch((function(t){return e(t)}))}))},getProduct:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"getProduct",apiPath:a.default.project.productGateway,data:a.default.project.homeParams()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},setIndustry:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"setIndustry",apiPath:a.default.project.setIndustryGateway,data:Object.assign(a.default.project.setIndustryParams(),{industryIdList:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},keywordRecommend:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"keywordRecommend",apiPath:a.default.project.keywordRecommendGateway,data:a.default.project.homeParams()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},keywordHistory:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"keywordHistoryCook",apiPath:a.default.project.keywordHistoryGateway,data:a.default.project.homeParams()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},keywordClear:function(){return new Promise((function(t,e){o.PROJECT.api({cookName:"keywordClear",apiPath:a.default.project.keywordClearGateway,data:a.default.project.homeParams()}).then((function(e){e.content.list=(0,r.reWriteQueryTagList)(e.content.list),t(e)})).catch((function(t){return e(t)}))}))},keywordSearch:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return new Promise((function(i,u){o.PROJECT.api({cookName:"keywordSearch",apiPath:a.default.project.keywordSearchGateway,data:Object.assign(a.default.project.keywordSearchParams(),{keyword:t,contentType:e,version:2,start:n,num:c})}).then((function(t){"activity"===e?t.content=(0,r.reWriteQueryTagList)(t.content):t.content.list=(0,r.reWriteQueryTagList)(t.content.list),i(t)})).catch((function(t){return u(t)}))}))},getBanner:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getBanner",apiPath:a.default.project.bannerGateway,data:Object.assign(a.default.project.bannerParams(),{contentType:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getCase:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({cookName:"getToolCook",apiPath:a.default.project.getCaseGateway,data:(0,r.reWriteQuery)(Object.assign(a.default.project.getCaseParams(),t))}).then((function(t){t.content=(0,r.reWriteQueryTagList)(t.content),e(t)})).catch((function(t){return n(t)}))}))},getCaseDetail:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getCaseDetailCook",apiPath:a.default.project.getCaseDetailGateway,data:Object.assign(a.default.project.getCaseDetailParams(),{id:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},activityList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({cookName:"activityListCook",apiPath:a.default.project.activityGateway,data:(0,r.reWriteQuery)(Object.assign(a.default.project.activityParams(),t))}).then((function(t){t.content.list=(0,r.reWriteQueryTagList)(t.content.list),e(t)})).catch((function(t){return n(t)}))}))},getActivityDetail:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getActivityDetailCook",apiPath:a.default.project.getActivityDetailGateway,data:Object.assign(a.default.project.getActivityDetailParams(),{id:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},downidtoid:function(t){return new Promise((function(e,n){o.PROJECT.api({apiPath:a.default.project.downidtoid,data:Object.assign(a.default.project.getdownidtoidParams(),{source_id:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getDownList:function(t){return new Promise((function(e,n){o.PROJECT.api({apiPath:a.default.project.getDownList,data:Object.assign(a.default.project.getDownListParams(),{source_data_id:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getServeTime:function(){var t=this,e=wx.getStorageSync("smarket_time_type");return new Promise((function(n){if("local"===e)return n(Math.floor((new Date).getTime()/1e3));t.serveTimeHandler().then(n)}))},serveTimeHandler:function(){return new Promise((function(t){o.PROJECT.api({cookName:"getServeTimeCook",apiPath:a.default.project.getServeTimeGateway}).then((function(e){return t(e)})).catch((function(){return t(Math.floor((new Date).getTime()/1e3))}))}))},getTool:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){t.type_id.includes(2004)&&(t.type_id=[2422,2423,2424,2425,2426,2427,2428,2429,2430,2431]),o.PROJECT.api({cookName:"getToolCook",apiPath:a.default.project.getToolGateway,data:(0,r.reWriteQuery)(Object.assign(a.default.project.getToolParams(),t))}).then((function(t){t.content=(0,r.reWriteQueryTagList)(t.content),e(t)})).catch((function(t){return n(t)}))}))},getToolDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({cookName:"getToolDetailCook",apiPath:a.default.project.getToolDetailGateway,data:Object.assign(a.default.project.getToolDetailParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getNewsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({cookName:"getNewsListCook",apiPath:a.default.project.getNewsListGateway,data:Object.assign(a.default.project.getNewsListParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getNewsDetail:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getNewsDetailCook",apiPath:a.default.project.getNewsDetailGateway,data:Object.assign(a.default.project.getNewsDetailParams(),{id:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getSceneList:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getSceneListCook",apiPath:a.default.project.getSceneListGateway,data:Object.assign(a.default.project.getSceneListParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getSceneDetail:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getSceneDetailCook",apiPath:a.default.project.getSceneDetailGateway,data:Object.assign(a.default.project.getSceneDetailParams(),{id:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getVideoInfo:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getVideoInfoCook",apiPath:a.default.project.getVideoInfoGateway,data:Object.assign(a.default.project.getVideoInfoParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getSceneDataList:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getSceneDataListCook",apiPath:a.default.project.getSceneDataListGateway,data:Object.assign(a.default.project.getSceneDataListParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},downloadDetail:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"downloadDetailCook",apiPath:a.default.project.downloadDetailGateway,data:Object.assign(a.default.project.downloadDetailParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},mySignUp:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({cookName:"mySignUpCook",apiPath:a.default.project.mySignUpGateway,data:Object.assign(a.default.project.mySignUpParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getUserReserveList:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"mySignUpCook",apiPath:a.default.project.getUserReserveList,data:t}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getUserMeetingList:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"mySignUpCook",apiPath:a.default.project.getUserMeetingList,data:t}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},refreshOrderStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({cookName:"refreshOrderStatusCook",apiPath:a.default.project.refreshOrderStatusGateway,data:Object.assign(a.default.project.refreshOrderStatusParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},checkOrderStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({cookName:"checkOrderStatusCook",apiPath:a.default.project.checkOrderStatusGateway,data:Object.assign(a.default.project.checkOrderStatusParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},orderMeet:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({cookName:"orderMeetCook",apiPath:a.default.project.orderMeetGateway,data:Object.assign(a.default.project.orderMeetParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getFormTpl:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(n,r){o.PROJECT.api({cookName:"getFormTplCook",apiPath:a.default.project.getFormTplGateway,data:Object.assign(a.default.project.getFormTplParams(),{tplId:t,refer:e})}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},downloadRecord:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({apiPath:a.default.project.downloadRecordGateway,data:Object.assign(a.default.project.recordParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},clickRecord:function(){return new Promise((function(t,e){t({code:0})}))},likeRecord:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({apiPath:a.default.project.likeRecordGateway,data:Object.assign(a.default.project.recordParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},addCollect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({apiPath:a.default.project.addCollectGateway,data:Object.assign(a.default.project.addCollectParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},juheList:function(t,e){return new Promise((function(n,c){var i=Object.assign(a.default.project.juheParams(),{juHeType:t,id:e});o.PROJECT.api({cookName:"juheListCook",apiPath:a.default.project.juheListGateway,data:i}).then((function(t){t.content.info=(0,r.reWriteJuHeTagList)(t.content.info),n(t)})).catch((function(t){return c(t)}))}))},consultDetail:function(t,e){return new Promise((function(n,r){o.PROJECT.api({apiPath:a.default.project.consultGateway,data:Object.assign(a.default.project.consultParams(),{type:t,data_id:e})}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},welfareDetail:function(t,e){return new Promise((function(n,r){o.PROJECT.api({apiPath:a.default.project.consultGateway,data:Object.assign(a.default.project.consultParams(),{type:t,data_id:e,floatType:2})}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},juheJson:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(c,i){var u=Object.assign(a.default.project.juheParams(),{juHeType:t,id:e});n?o.STATIC.api({cookName:"juheJsonCook",apiPath:"/1/".concat(u.juHeType,"/").concat(e,".json")}).then((function(t){t.isStatic=!0,c(t)})).catch((function(){o.PROJECT.api({cookName:"juheJsonCook",apiPath:a.default.project.juheJson,data:u}).then((function(t){t.isStatic=!1,t.content.info=(0,r.reWriteJuHeTagList)(t.content.info),c(t)})).catch((function(t){return i(t)}))})):o.PROJECT.api({cookName:"juheJsonCook",apiPath:a.default.project.juheJson,data:u}).then((function(t){t.content.info=(0,r.reWriteJuHeTagList)(t.content.info),c(t)})).catch((function(t){return i(t)}))}))},juheListSort:function(t,e){return new Promise((function(n,c){o.PROJECT.api({cookName:"juheListCook",apiPath:a.default.project.juheListGateway,data:Object.assign(a.default.project.juheParams(),{juHeType:t,id:e,returnSort:1})}).then((function(t){t.content.info=(0,r.reWriteJuHeTagList)(t.content.info),n(t)})).catch((function(t){return c(t)}))}))},formSendCode:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getCase",apiPath:a.default.project.formSendCodeGateway,data:Object.assign(a.default.project.formSendCodeParams(),{mobile:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},formSubmit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.data_id&&wx.setStorageSync("lastSubmitDataId",t.data_id),new Promise((function(e,n){o.PROJECT.api({cookName:"getCase",apiPath:a.default.project.formSubmitGateway,data:Object.assign(a.default.project.formSubmitParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},cpDownDetail:function(){return new Promise((function(t,e){t(!0)}))},getSceneDataDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){o.PROJECT.api({apiPath:a.default.project.getSceneDataDetailGateway,data:Object.assign(a.default.project.getSceneDataDetailParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},checkFormSubmitDownload:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5?arguments[5]:void 0;return new Promise((function(u,f){o.PROJECT.api({cookName:"checkFormSubmitCook",apiPath:a.default.project.checkFormSubmitDownloadGateway,data:Object.assign(a.default.project.checkFormSubmitDownloadParams(),{data_type:t,data_id:e,refer:n,tplId:r,vistorid:c,__isSendWxMessage:i||0})}).then((function(t){return u(t)})).catch((function(t){return f(t)}))}))},staffUpgrade:function(){return new Promise((function(t,e){o.PROJECT.api({apiPath:a.default.project.staffUpgradeGateway,data:a.default.project.staffUpgradeParams()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},paramsToUuid:function(t){return new Promise((function(e,n){o.PROJECT.api({apiPath:a.default.project.paramsToUuidGateway,data:Object.assign(a.default.project.paramsToUuidParams(),{params:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},uuidToParams:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(n,r){o.PROJECT.api({cacheKey:"uuidToParams-"+t+"-"+e,cacheType:1,cookName:"uuidToParamsCook",apiPath:a.default.project.uuidToParamsGateway,data:Object.assign(a.default.project.uuidToParamsParams(),{uuid:t,refer:e})}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},getBrandHomeJson:function(t){return new Promise((function(e,n){o.JSON.get({cacheType:0,jsonPath:"https://mkttencent-1256915710.file.myqcloud.com/saas/old-brand-json/home_id_".concat(t,".json")}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getBrandListJson:function(t){return new Promise((function(e,n){o.JSON.get({cacheType:0,jsonPath:"https://mkttencent-1256915710.file.myqcloud.com/saas/old-brand-json/columnList_column_id_".concat(t,".json")}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getBrandDetailJson:function(t){return new Promise((function(e,n){o.JSON.get({cacheType:0,jsonPath:"https://mkttencent-1256915710.file.myqcloud.com/saas/old-brand-json/detail_id_".concat(t,".json")}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getBrandList:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getBrandListCook",apiPath:a.default.project.getBrandListGateway,data:Object.assign(a.default.project.getBrandListParams(),t)}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getBrandDetail:function(t){return new Promise((function(e,n){o.PROJECT.api({cookName:"getBrandDetailCook",apiPath:a.default.project.getBrandDetailGateway,data:Object.assign(a.default.project.getBrandDetailParams(),{id:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getFormResultContentDetail:function(t){return new Promise((function(e,n){o.PROJECT.api({apiPath:a.default.project.getFormResultContentDetail,data:Object.assign(a.default.project.getFormResultContentDetailParams(),{data_id:t})}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getResourcePoster:function(t){return new Promise((function(n,r){o.PROJECT.api({apiPath:a.default.project.getResourcePosterGateway,data:Object.assign(a.default.project.getResourcePosterParams(),e({},t))}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},getSearchCompany:function(t){return new Promise((function(n,r){o.PROJECT.api({apiPath:a.default.project.getSearchCompany,data:Object.assign(a.default.project.getSearchCompanyParams(),e({},t))}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},checkSignUpStatus:function(t){return new Promise((function(n,r){o.PROJECT.api({cookName:"checkSignUpStatusCook",apiPath:a.default.project.checkSignUpStatus,data:Object.assign(a.default.project.checkSignUpStatusParams(),e({},t))}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},getWxTemplateIds:function(){return new Promise((function(t,e){o.STATIC.api({apiPath:"/mini-template-id.json"}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},getFormResRec:function(t){return new Promise((function(e,n){o.STATIC.api({apiPath:"/jh-rec/".concat(t,".json")}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},getJtShareId:function(t,e){return new Promise((function(n,r){o.JIATUI.api({method:"POST",apiPath:a.default.project.getJtShareIdGateway,data:{contentId:t,empId:e,accessWayCode:"",height:0,mediaCode:"M105",platformCode:"P102",shareMores:[],width:0}},{headers:{"i-token":wx.getStorageSync("i_token")||""},timeout:5e3}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},getJtUserInfo:function(){return new Promise((function(t,e){o.JIATUI.api({method:"GET",cookName:"getJtUserInfoCook",apiPath:a.default.project.getJtUserInfoGateway},{headers:{"i-token":wx.getStorageSync("i_token")||""}}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},sendFileByEmail:function(t){return new Promise((function(n,r){o.PROJECT.api({apiPath:a.default.project.sendFileByEmail,data:Object.assign(a.default.project.sendFileByEmailParams(),e({},t))}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},templateSubscribe:function(t,e){return new Promise((function(n,a){o.PROJECT.api({apiPath:"/wechat/template/subscribe",data:{platform:1,template_id:t,subgroupname:e,requireLogin:!0}}).then((function(t){return n(t)})).catch((function(t){return a(t)}))}))},checkGetConferenceSetting:function(){return new Promise((function(t,e){o.PROJECT.api({apiPath:a.default.project.checkGetConferenceSetting,data:a.default.project.checkGetConferenceSettingParams()}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},enrollGetDes2022JSON:function(t){return new Promise((function(e,n){o.STATIC.api({apiPath:t}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},checkCode:function(t){return new Promise((function(n,r){o.PROJECT.api({apiPath:a.default.project.checkCode,data:Object.assign(a.default.project.checkCodeParams(),e({},t))}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},getInvitationCode:function(t){return new Promise((function(n,r){o.PROJECT.api({apiPath:a.default.project.getInvitationCode,data:Object.assign(a.default.project.getInvitationCodeParams(),e({},t))}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},phoneLogin:function(t){return new Promise((function(n,r){o.PROJECT.api({apiPath:a.default.project.phoneLoginGateway,data:Object.assign(a.default.project.sendFileByEmailParams(),e({},t))}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))},getPhoneInfo:function(t){return new Promise((function(n,r){o.PROJECT.api({apiPath:a.default.project.getInformationGateway,data:Object.assign(a.default.project.sendFileByEmailParams(),e({},t))}).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))}});exports.default=c;
},{isPage:false,isComponent:false,currentFile:'services/api.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("services/apiHouse.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./../config/index")),r=(e(require("./../utils/tool")),e(require("./../sdk/QD"))),a=t.default.loadConfig(),n={json:{seminarInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?a.tenantId+"/seminar/"+e+"/info.json":a.tenantId+"/seminar/"+a.seminarId+"/info.json"},subSeminarList:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?a.tenantId+"/seminar/"+e+"/subSeminar/list.json":a.tenantId+"/seminar/"+a.seminarId+"/subSeminar/list.json"},seminarArticleList:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?a.tenantId+"/seminar/"+t+"/article/list/"+e+".json":a.tenantId+"/seminar/"+a.seminarId+"/article/list/"+e+".json"},seminarArticleInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?a.tenantId+"/seminar/"+t+"/article/"+e+".json":a.tenantId+"/seminar/"+a.seminarId+"/article/"+e+".json"},dict:function(e){return a.tenantId+"/dic/list/"+e+".json"},subSeminarDetail:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?a.tenantId+"/seminar/"+t+"/subSeminar/"+e+".json":a.tenantId+"/seminar/"+a.seminarId+"/subSeminar/"+e+".json"}},general:{seminarArticleListGateway:"/api/article/query",seminarArticleListParams:function(){return{isRecommend:-1,instanceId:a.instanceId,title:"",tenantId:a.tenantId,isStick:-1,isTop:"-1",isWithStat:"1",hasChildrenCategory:"0",tags:[],start:0,num:50,sort:6,seminarId:a.seminarId,articleCategoryId:0}}},project:{jscodeAuthGateway:"/wechat/auth-login",jscodeAuthParams:function(){return{platform:1,codeStr:"",key:"",staffID:""}},getItoenGateway:"/auth-service/official/applets/login",getItokenparams:function(){return{code:"",type:0}},getTencetStaffCardInfoGateway:"/ai-content-service/card/app/getcardInformation",getTencetStaffInfoGateway:"/ai-content-service/card/app/getInformation",tencentStaffGateway:"/wechat/isTencentStaff",tencentStaffParams:function(){return{platform:1,codeStr:""}},homeBannerGateway:"/home/banner-query",homeCaseGateway:"/home/case-query",homeSceneGateway:"/home/scene-query",homeToolGateway:"/home/tool-query",homeCooperGateway:"/home/cooper-query",homeProductGateway:"/home/product-query",pageDictGateway:"/common/dict-query",industryGateway:"/industry/query",productGateway:"/product/query",juheListGateway:"/juhe/list",consultGateway:"/common/consult/detail",juheJson:"/juhe/list",consultParams:function(){return{platform:1,requireLogin:!0,data_id:"",type:""}},juheParams:function(){return{platform:1,requireLogin:!0,id:"",juHeType:""}},homeParams:function(){return{platform:1,requireLogin:!0}},homeParamsSort:function(){return{platform:1,requireLogin:!0,returnSort:1}},setIndustryGateway:"/user/interest-set",setIndustryParams:function(){return{platform:1,requireLogin:!0,industryIdList:[]}},keywordRecommendGateway:"/search/keyword-recommend",keywordHistoryGateway:"/search/keyword-history",keywordClearGateway:"/search/keyword-clear",keywordSearchGateway:"/search/keyword-search",keywordSearchParams:function(){return{contentType:"",keyword:"",platform:1,requireLogin:!0,start:0,num:10}},bannerGateway:"/banner/query",bannerParams:function(){return{contentType:"",platform:1,requireLogin:!0}},getCaseGateway:"/case/query",getCaseParams:function(){return{industry_id:"",product_id:"",area_id:"",tag_id:"",sort:"",collect:"",platform:1,start:0,num:500,requireLogin:!0}},getCaseDetailGateway:"/case/detail",getCaseDetailParams:function(){return{platform:1,requireLogin:!0,id:""}},activityGateway:"/activity/query",activityParams:function(){return{platform:1,requireLogin:!0,start:0,num:500,industry_id:"",product_id:"",area_id:"",tag_id:"",sort:"",status:"",collect:""}},getServeTimeGateway:"/common/server-time",getActivityDetailGateway:"/activity/detail",getActivityDetailParams:function(){return{platform:1,requireLogin:!0,id:""}},getDownList:"/juhe/download-list",getDownListParams:function(){return{platform:1,source_data_id:"",requireLogin:!0}},downidtoid:"/common/source-id-to-id",getdownidtoidParams:function(){return{platform:1,source_id:"",requireLogin:!0}},getToolGateway:"/tool/query",getToolParams:function(){return{industry_id:"",product_id:"",area_id:"",tag_id:"",type_id:"",sort:"",collect:"",platform:1,start:0,num:500,requireLogin:!0}},getToolDetailGateway:"/tool/detail",getToolDetailParams:function(){return{id:"",type_id:"",platform:1,requireLogin:!0}},getNewsListGateway:"/news/query",getNewsListParams:function(){return{industry_id:"",product_id:"",area_id:"",tag_id:"",type_id:"",sort:"",collect:"",platform:1,start:0,num:500,requireLogin:!0}},getNewsDetailGateway:"/news/detail",getNewsDetailParams:function(){return{platform:1,requireLogin:!0,id:""}},getSceneListGateway:"/scene/query",getSceneListParams:function(){return{platform:1,requireLogin:!0,start:0,num:500,collect:""}},getSceneDetailGateway:"/scene/detail",getSceneDetailParams:function(){return{platform:1,requireLogin:!0,id:""}},getVideoInfoGateway:"/common/get-cloud-video",getVideoInfoParams:function(){return{platform:1,requireLogin:!0,videoId:""}},getSceneDataListGateway:"/scene/data",getSceneDataListParams:function(){return{platform:1,requireLogin:!0,id:""}},getSceneDataDetailGateway:"/scene/data-detail",getSceneDataDetailParams:function(){return{platform:1,requireLogin:!0,id:""}},downloadDetailGateway:"/common/download/detail",downloadDetailParams:function(){return{platform:1,requireLogin:!0,id:""}},mySignUpGateway:"/user/reserve",mySignUpParams:function(){return{platform:1,requireLogin:!0,start:0,num:20}},refreshOrderStatusGateway:"/user/subChang",refreshOrderStatusParams:function(){return{platform:1,requireLogin:!0,tag:"",campaignId:"",actId:""}},checkOrderStatusGateway:"/user/subChang",checkOrderStatusParams:function(){return{platform:1,requireLogin:!0,actId:"",siteId:""}},orderMeetGateway:"/user/reserveMeet",orderMeetParams:function(){return{platform:1,requireLogin:!0,tag:"",meetId:"",channelType:r.default.getChannelType(),vistorid:wx.getStorageSync("qdVisitId")}},getFormTplGateway:"/common/formTpl",getFormTplParams:function(){return{platform:1,requireLogin:!0,tplId:""}},downloadRecordGateway:"/common/download/record",recordParams:function(){return{contentType:"",id:"",requireLogin:!0}},clickRecordGateway:"/common/click/record",likeRecordGateway:"/common/like/record",addCollectGateway:"/collect/add",addCollectParams:function(){return{platform:1,requireLogin:!0,id:"",tag:""}},formSendCodeGateway:"/common/send-code",formSendCodeParams:function(){return{platform:1,requireLogin:!0,mobile:""}},formSubmitGateway:"/common/form-submit",formSubmitParams:function(){var e,t=r.default.getChannelType();if(wx.getStorageSync("salesShareCardId")){var a=wx.getStorageSync("salesShareCardInfo");a.staffId&&(e=a.staffId,t="助销名片-"+a.employeeName)}return{platform:1,requireLogin:!0,refer:"",data_type:"",data_id:"",tplId:"",vistorid:wx.getStorageSync("qdVisitId"),ChannelType:t,__version:2,staff_id:e}},checkFormSubmitDownloadGateway:"/common/form-is-submit",checkFormSubmitDownloadParams:function(){var e,t;if(wx.getStorageSync("salesShareCardId")){var a=wx.getStorageSync("salesShareCardInfo");a.staffId&&(e=a.staffId,t="助销名片-"+a.employeeName)}return{platform:1,requireLogin:!0,data_type:"",data_id:"",refer:"",returnSilence:1,ChannelType:t||r.default.getChannelType(),__version:2,__isSendWxMessage:0,staff_id:e}},staffUpgradeGateway:"/wechat/upgrade",staffUpgradeParams:function(){return{platform:1,requireLogin:!0}},paramsToUuidGateway:"/common/params-to-uuid",paramsToUuidParams:function(){return{platform:1,requireLogin:!0,params:""}},uuidToParamsGateway:"/common/uuid-to-params",uuidToParamsParams:function(){return{platform:1,requireLogin:!0,uuid:"",refer:""}},getBrandListGateway:"/brand/query",getBrandListParams:function(){return{platform:1,requireLogin:!0,start:0,num:500,collect:""}},getBrandDetailGateway:"/brand/detail",getBrandDetailParams:function(){return{platform:1,requireLogin:!0,id:""}},getResourcePosterGateway:"/poster/resource/get-poster",getResourcePosterParams:function(){return{platform:1,requireLogin:!0,type:"content",data_id:""}},getFormResultContentDetail:"/common/form-result-content/detail",getFormResultContentDetailParams:function(){return{platform:1,requireLogin:!0,data_id:""}},getSearchCompany:"/common/company-name/query",getSearchCompanyParams:function(){return{platform:1,requireLogin:!0,count:10,keywords:""}},checkSignUpStatus:"/activity/is-sign-up",checkSignUpStatusParams:function(){return{platform:1,requireLogin:!0,ids:[]}},getJtShareIdGateway:"/ai-content-service/content/share/save",getJtUserInfoGateway:"/auth-service/official/applets/getUserInfo",sendFileByEmail:"/common/send-file-to-email",phoneLoginGateway:"/wechat/phone/login",getInformationGateway:"/user/information",sendFileByEmailParams:function(){return{platform:1,requireLogin:!0,email:"",source_id:"",file_id:""}},getUserReserveList:"/user/reserve-list",getUserMeetingList:"/user/custom-meeting-list",checkGetConferenceSetting:"/activity/get-conference-setting",checkGetConferenceSettingParams:function(){return{conferenceType:"des"}},checkCode:"/common/check-phone-code",checkCodeParams:function(){return{platform:1,requireLogin:!0,phone:"",code:""}},getInvitationCode:"/activity/get-invitation-code",getInvitationCodeParams:function(){return{platform:1,requireLogin:!0,dataId:"",conferenceType:"des",staffId:"",returnType:"base64"}}}};exports.default=n;
},{isPage:false,isComponent:false,currentFile:'services/apiHouse.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("services/dataCook.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../@babel/runtime/helpers/regeneratorRuntime"),n=require("../@babel/runtime/helpers/asyncToGenerator"),a=t(require("./../utils/tool")),o=t(require("api")),r=t(require("./../config/index")),i=t(require("./../sdk/QD")),d=require("../utils/storage"),c=(r.default.loadConfig(),{articleCommon:function(t){var e;return 0==t.result&&(e=a.default.deepClone(t.content.items),e=a.default.sortKey(e,"order")),e},jscodeAuthCook:function(t){return n(e().mark((function n(){var a,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t.code){e.next=25;break}return t.content.openid&&wx.setStorageSync("openid",t.content.openid),t.content.unionid&&wx.setStorageSync("unionid",t.content.unionid),t.content.token&&wx.setStorageSync("token",t.content.token),void 0!==t.content.useUin&&wx.setStorageSync("useUin",t.content.useUin),t.content.interestIndustry?wx.setStorageSync("setInterestIndustry",!0):wx.setStorageSync("setInterestIndustry",!1),e.next=8,o.default.getItoken();case 8:return a=e.sent,wx.setStorageSync("i_token",a.data),e.next=12,o.default.getJtUserInfo();case 12:if(!t.content.staff_info){e.next=20;break}return t.content.staff_info.euserId=""+t.content.staff_info.euserId,wx.setStorageSync("isStaff",!0),wx.setStorageSync("staffInfo",t.content.staff_info||{}),e.next=18,o.default.getTencetStaffInfo();case 18:e.next=22;break;case 20:(r=wx.getStorageSync("staffInfo"))&&r.upgrade?wx.setStorageSync("isStaff",!0):wx.setStorageSync("isStaff",!1);case 22:if(!wx.getStorageSync("salesShareCardId")){e.next=25;break}return e.next=25,o.default.getTencetStaffCardInfo(wx.getStorageSync("salesShareCardId")).then().catch((function(t){return!1}));case 25:return e.abrupt("return",t);case 26:case"end":return e.stop()}}),n)})))()},tencentStaffCardInfoCook:function(t){return 0!==t.code&&1!==t.code||(t.data=t.data.replace(/\"euserId":(\d+)/,'"euserId":"$1"'),t.data=JSON.parse(t.data)[0],0===t.code?wx.setStorageSync("salesShareCardInfo",t.data):1===t.code&&wx.setStorageSync("salesShareCardId","")),t},tencentStaffInfoCook:function(t){if((0===t.code||1===t.code)&&(t.data=t.data.replace(/\"euserId":(\d+)/,'"euserId":"$1"'),t.data=JSON.parse(t.data)[0],console.log("tencentStaffInfoCook",t),0===t.code)){var e=wx.getStorageSync("staffInfo")||{};"孟小娅"===t.data.employeeName&&(t.data.name=t.data.employeeName),wx.setStorageSync("staffInfo",Object.assign(e,t.data)),wx.setStorageSync("staff_card_id",t.data.id),wx.setStorageSync("isStaff",!0),d.expiresStorage.set("staff_salas_status",1),t.data.id==wx.getStorageSync("salesShareCardId")&&wx.setStorageSync("salesShareCardId",""),i.default.saRegister({employee_id:""+t.data.euserId,loginUserId:""+t.data.euserId,userID:""+t.data.euserId,staff_id:t.data.staffId,is_staff:!0,data_from:"ganhuoku"})}return t},isTencentStaffCook:function(t){return n(e().mark((function n(){var a,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("isTencentStaffCook",t),0!=t.code){e.next=9;break}return a={},t.content.key&&(a.key=t.content.key),t.content.staffInfo&&(a.staffID=t.content.staffInfo.staffID),e.next=7,o.default.jscodeAuth(a);case 7:r=e.sent,console.log("isTencentStaffCook step 2 await",r);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),n)})))()},getCaseDetailCook:function(t){return 0==t.code&&t.content.rec&&t.content.rec.length>0&&t.content.rec.map((function(t){switch(t.type||(t.type="case"),t.type){default:t.page_url="";break;case"activity":t.page_url="pages/activity/act_detail/index?id="+t.id;break;case"case":t.page_url="pages/case/case_detail/index?id="+t.id;break;case"tool":t.page_url="pages/case/tool_detail/index?id="+t.id;break;case"news":t.page_url="pages/activity/news_detail/index?id"+t.id}})),console.log("getCaseDetailCook step 2",t),t},getActivityDetailCook:function(t){return 0==t.code&&t.content.rec&&t.content.rec.length>0&&(t.content.rec.map((function(e){switch(e.type||1!=t.content.info.type||(e.type="activity"),e.type||2!=t.content.info.type||(e.type="online"),e.data_type){case"online":e.page_url="pages/online/detail/index?id="+e.data_id;break;case"activity":e.page_url="pages/activity/act_detail/index?id="+e.data_id;break;case"case":e.page_url="pages/case/case_detail/index?id="+e.data_id;break;case"scene":e.page_url="pages/scene/detail/index?id="+e.data_id;break;case"tool-whitePaper":case"tool-solution":case"tool-manual":case"tool-other":case"tool-brand":case"tool-video":e.page_url="pages/case/tool_detail/index?id="+e.data_id;break;case"news":e.page_url="pages/activity/news_detail/index?id="+e.data_id;break;case"juhe":e.page_url="pages/juhe/index?id="+e.data_id;break;default:e.page_url=""}})),t.content.info.registStatus||(t.content.info.registStatus=1)),console.log("getCaseDetailCook step 2",t),t},getToolDetailCook:function(t){return 0==t.code&&t.content.rec&&t.content.rec.length>0&&(t.content.rec.map((function(t){switch(t.type||(t.type="tool"),t.type){default:t.page_url="";break;case"activity":t.page_url="pages/activity/act_detail/index?id="+t.id;break;case"case":t.page_url="pages/case/case_detail/index?id="+t.id;break;case"tool":t.page_url="pages/case/tool_detail/index?id="+t.id;break;case"news":t.page_url="pages/activity/news_detail/index?id"+t.id}})),t.content.info.addTime&&(t.content.info.addTimeStr=a.default.timestampToTime(t.content.info.addTime))),console.log("getCaseDetailCook step 2",t),t},activityListCook:function(t){return 0==t.code&&t.content.list.map((function(t){t.tag||(t.tag=[]),1==t.type?t.tag.unshift({id:-1,name:"会议"}):t.tag.unshift({id:-1,name:"直播"});var e=[];t.tag.map((function(t){e.push(t.id)})),t.industry_id&&-1==e.indexOf(t.industry_id)&&t.industry_name&&t.tag.push({id:t.industry_id,name:t.industry_name}),t.product_id&&-1==e.indexOf(t.product_id)&&t.product_name&&t.tag.push({id:t.product_id,name:t.product_name})})),t},getToolCook:function(t){return 0==t.code&&t.content.map((function(t){t.logo=t.banner;var e=[];t.tag.map((function(t){e.push(t.id)})),t.industry_id&&-1==e.indexOf(t.industry_id)&&t.industry_name&&t.tag.push({id:t.industry_id,name:t.industry_name}),t.product_id&&-1==e.indexOf(t.product_id)&&t.product_name&&t.tag.push({id:t.product_id,name:t.product_name})})),t},keywordHistoryCook:function(t){if(0==t.code){var e=[],n=[];t.content.list.map((function(t){-1==n.indexOf(t.name)&&(e.push(t),n.push(t.name))})),t.content.list=e.slice(-8).reverse()}return t},homeBnnner:function(t){return 0==t.code&&(t.content=t.content.slice(0,5)),t},homeSceneCook:function(t){return 0==t.code&&t.content.length>0&&(t.content=t.content.slice(-5)),t},keywordSearch:function(t){return 0==t.code&&(t.content.list?t.content.list.map((function(t){t.logo||(t.logo=t.banner),t.tag||(t.tag=[]),1==t.type?t.tag.unshift({id:-1,name:"会议"}):2==t.type&&t.tag.unshift({id:-1,name:"直播"});var e=[];t.tag.map((function(t){e.push(t.id)})),t.industry_id&&-1==e.indexOf(t.industry_id)&&t.industry_name&&t.tag.push({id:t.industry_id,name:t.industry_name}),t.product_id&&-1==e.indexOf(t.product_id)&&t.product_name&&t.tag.push({id:t.product_id,name:t.product_name})})):t.content.map((function(t){t.tag||(t.tag=[]),1==t.type?t.tag.unshift({id:-1,name:"会议"}):2==t.type&&t.tag.unshift({id:-1,name:"直播"});var e=[];t.tag.map((function(t){e.push(t.id)})),t.industry_id&&-1==e.indexOf(t.industry_id)&&t.industry_name&&t.tag.push({id:t.industry_id,name:t.industry_name}),t.product_id&&-1==e.indexOf(t.product_id)&&t.product_name&&t.tag.push({id:t.product_id,name:t.product_name})}))),t},mySignUpCook:function(t){return 0==t.code&&t.content.list.map((function(t){t.tag||(t.tag=[]),1==t.type?t.tag.unshift({id:-1,name:"会议"}):2==t.type&&t.tag.unshift({id:-1,name:"直播"});var e=[];t.tag.map((function(t){e.push(t.id)})),t.industry_id&&-1==e.indexOf(t.industry_id)&&t.industry_name&&t.tag.push({id:t.industry_id,name:t.industry_name}),t.product_id&&-1==e.indexOf(t.product_id)&&t.product_name&&t.tag.push({id:t.product_id,name:t.product_name})})),t},juheListCook:function(t){return 0!=t.code&&200!=t.code||!t.content.info||t.content.info.map((function(t){"BRAND"==t.code&&console.log("BRAND juhe",t),"SIGNUP"==t.code&&t.jhd.map((function(t){1==t.type?t.tag.unshift({id:-1,name:"会议"}):2==t.type&&t.tag.unshift({id:-1,name:"直播"})})),"BANNER"==t.code&&t.jhd&&t.jhd.length>0&&t.jhd.map((function(t){if("OUTLINK"==t.data_type&&(t.jump_url="",t.dataParse={},t.outlink))try{var e=JSON.parse(t.outlink);e&&(t.dataParse=e,2==e.jump_type&&!e.outUrl&&e.url&&(e.outUrl=e.url)),e&&e.outUrl&&2==e.jump_type&&(t.jump_url=e.outUrl),1==e.jump_type&&(t.data_type="none"),3==e.jump_type&&e.appId&&e.pageUrl&&(t.data_type="MINIAPP")}catch(t){}}))})),t},juheJsonCook:function(t){return 0!=t.code&&200!=t.code||!t.content.info||t.content.info.map((function(t){"BRAND"==t.code&&console.log("BRAND juhe",t),("BANNER"==t.code||"CUSTOM_IMG"==t.code)&&t.jhd&&t.jhd.length>0&&t.jhd.map((function(t){if("OUTLINK"==t.data_type&&(t.jump_url="",t.dataParse={},t.outlink))try{var e=JSON.parse(t.outlink);e&&(t.dataParse=e,2==e.jump_type&&!e.outUrl&&e.url&&(e.outUrl=e.url)),e&&e.outUrl&&2==e.jump_type&&(t.jump_url=e.outUrl),1==e.jump_type&&(t.data_type="none"),3==e.jump_type&&e.appId&&e.pageUrl&&(t.data_type="MINIAPP")}catch(t){}}))})),t},uuidToParamsCook:function(t,e){if(0==t.code&&t.content.params){t.content.paramsObj=a.default.parseUrlParams(t.content.params);var n={};t.content.paramsObj.utm_source&&(n.$utm_source=t.content.paramsObj.utm_source,wx.setStorageSync("qd_utm_source",t.content.paramsObj.utm_source)),t.content.paramsObj.utm_medium&&(n.$utm_medium=t.content.paramsObj.utm_medium,wx.setStorageSync("qd_utm_medium",t.content.paramsObj.utm_medium)),t.content.paramsObj.utm_campaign&&(n.$utm_campaign=t.content.paramsObj.utm_campaign,wx.setStorageSync("qd_utm_campaign",t.content.paramsObj.utm_campaign)),t.content.paramsObj.utm_content&&(n.$utm_content=t.content.paramsObj.utm_content,wx.setStorageSync("qd_utm_content",t.content.paramsObj.utm_content)),t.content.paramsObj.utm_term&&(n.$utm_term=t.content.paramsObj.utm_term,wx.setStorageSync("qd_utm_term",t.content.paramsObj.utm_term)),Object.keys(n).length>0&&i.default.setCommon(n),t.content.paramsObj.shareCardId&&i.default.parseAppLaunchOptions(t.content.paramsObj)}return t},getFormTplCook:function(t){return 0==t.code&&t.content&&t.content.itemList&&t.content.itemList.map((function(t){t.enums&&t.historyData&&-1==Object.keys(t.enums).indexOf(t.historyData)&&(t.historyData="")})),t},checkFormSubmitCook:function(t,e){if(console.log("checkFormSubmitCook",t,e),0==t.code&&1==e.data.returnSilence&&1==t.content.isSilenceSubmit){var n="";switch(e.data.refer){default:break;case 3:n="资料下载";break;case 4:n="云上直播 - 预约报名"}i.default.formSubmit("submit_form",{name_of_page:n,SubCampaign:i.default.getLastNameOfPage(),SubCampaignID:i.default.getLastContentId(),CampaignID:i.default.currentParams.CampaignID||"",NameOfCampaign:i.default.currentParams.NameOfCampaign||""})}return t.content.jumpPath||(t.isSubscribed=t.content.isSubscribed,t.isSilenceSubmit=t.content.isSilenceSubmit,t.otherFieldList=t.content.otherFieldList||[],t.content=t.content.isSubmit),t},getServeTimeCook:function(t){return t.content},checkSignUpStatusCook:function(t){return t.content.signUpIds},getJtUserInfoCook:function(t){return 0==t.code&&(wx.setStorageSync("jtUserId",t.data.loginUserId),i.default.saRegister({loginUserId:t.data.loginUserId,userID:t.data.loginUserId})),t}});exports.default=c;
},{isPage:false,isComponent:false,currentFile:'services/dataCook.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("services/middleware.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCache=exports.STATIC=exports.PROJECT=exports.JSON=exports.JIATUI=exports.GENERAL=void 0;var a=require("../@babel/runtime/helpers/objectSpread2"),t=require("request"),c=e(require("./../config/index")),n=e(require("dataCook")),o=new Map,r=c.default.loadConfig(),i=function(){return{baseURL:r.gateway.general,method:"GET",timeout:3e4}},s=function(e){return!!o.has(e)&&o.get(e)};exports.getCache=s;var u=function(e,a){var t;if(n.default.hasOwnProperty(e.cookName))if(e.cookName)try{t=n.default[e.cookName](a,e)}catch(t){console.log("responseCook fail",t,e,a)}else t=a;return e.cacheType>0&&function(e,a,t){o.set(e,{reponse:a,value:t||a})}(e.cacheKey,a,t),t||a},h={get:function(e,c){return new Promise((function(n,o){var h,p=Object.assign({cacheKey:"",cacheType:1,jsonType:0,cookName:"",jsonPath:"",apiPath:"",data:{}},e);if(p.cacheType>0&&(h=s(p.cacheKey)),h)1==p.cacheType?n(h.value):2==p.cacheType&&n(u(p,h.reponse));else if(r.isStatic&&0==p.jsonType){var y=a({baseURL:r.gateway.jsonUrl,url:p.jsonPath,body:p.data},c),d=Object.assign(i(),y);t.getJson.request(p.jsonPath,{},c).request(d).then((function(e){n(u(p,e))})).catch((function(e){o(e)}))}else if(r.isStatic&&1==p.jsonType){var f=a({baseURL:r.gateway.jsonUrl,url:p.apiPath,body:p.data},c),l=Object.assign(i(),f);t.getJson.request(p.jsonPath,{},c).request(l).then((function(e){n(u(p,e))})).catch((function(e){var r=a({url:p.apiPath,body:p.data},c),s=Object.assign(i(),r);t.apiGet.request(p.apiPath,p.data,c).request(s).then((function(e){n(u(p,e))})).catch((function(e){o(e)}))}))}else{var T=a({url:p.apiPath,body:p.data},c),P=Object.assign(i(),T);t.apiGet.request(p.apiPath,p.data,c).request(P).then((function(e){n(u(p,e))})).catch((function(e){o(e)}))}}))},api:function(e,c){return new Promise((function(n,o){var r,h=Object.assign({cacheKey:"",cacheType:1,jsonType:0,cookName:"",jsonPath:"",apiPath:"",data:{}},e);if(h.cacheType>0&&(r=s(h.cacheKey)),r)1==h.cacheType?n(r.value):2==h.cacheType&&n(u(h,r.reponse));else{var p=a({url:h.apiPath,body:h.data},c),y=Object.assign(i(),p);t.apiGet.request(h.apiPath,h.data,c).request(y).then((function(e){n(u(h,e))})).catch((function(e){o(e)}))}}))},post:function(e,c){return new Promise((function(n,o){var r,h=Object.assign({cacheKey:"",cacheType:1,jsonType:0,cookName:"",jsonPath:"",apiPath:"",data:{}},e);if(h.cacheType>0&&(r=s(h.cacheKey)),r)1==h.cacheType?n(r.value):2==h.cacheType&&n(u(h,r.reponse));else{var p=a({method:"POST",url:h.apiPath,body:h.data},c),y=Object.assign(i(),p);t.apiPost.request(h.apiPath,h.data,c).request(y).then((function(e){n(u(h,e))})).catch((function(e){o(e)}))}}))}};exports.JSON=h;var p={post:function(e,c){return new Promise((function(n,o){var r,h=Object.assign({cacheKey:"",cacheType:0,cookName:"",requireLogin:!1,apiPath:"",data:{}},e);if(h.cacheType>0&&(r=s(h.cacheKey)),r)1==h.cacheType?n(r.value):2==h.cacheType&&n(u(h,r.reponse));else{var p=a({method:"POST",url:h.apiPath,body:h.data},c),y=Object.assign(i(),p);t.apiPost.request(h.apiPath,h.data,c).request(y).then((function(e){n(u(h,e))})).catch((function(e){o(e)}))}}))}};exports.GENERAL=p;var y={api:function(e,c){return new Promise((function(n,o){var h,p=Object.assign({cacheKey:"",cacheType:0,cookName:"",requireLogin:!1,apiPath:"",data:{}},e);if(p.cacheType>0&&(h=s(p.cacheKey)),h)1==p.cacheType?n(h.value):2==p.cacheType&&n(u(p,h.reponse));else{var y=a({method:"POST",baseURL:r.gateway.project,url:p.apiPath,body:a(a({},p.data),{},{__env:__wxConfig.envVersion,__version:"1.0.0"})},c),d=Object.assign(i(),y);t.projectPost.request(p.apiPath,p.data,c).request(d).then((function(e){n(u(p,e))})).catch((function(e){99==e.result&&wx.redirectTo({url:"/pages/index/index"}),o(e)}))}}))}};exports.PROJECT=y;var d={api:function(e,c){return new Promise((function(n,o){var i,h=Object.assign({cacheKey:"",cacheType:0,cookName:"",requireLogin:!1,apiPath:"",data:{}},e);if(h.cacheType>0&&(i=s(h.cacheKey)),i)1==h.cacheType?n(i.value):2==h.cacheType&&n(u(h,i.reponse));else{var p=a({method:h.method||"POST",baseURL:r.jiatui.general,url:h.apiPath,body:a({},h.data)},c),y=Object.assign({baseURL:r.jiatui.general,method:"GET",timeout:3e4},p);t.projectPost.request(h.apiPath,h.data,c).request(y).then((function(e){n(u(h,e))})).catch((function(e){99==e.result&&wx.redirectTo({url:"/pages/index/index"}),o(e)}))}}))}};exports.JIATUI=d;var f={api:function(e,c){return new Promise((function(n,o){var i,h=Object.assign({cacheKey:"",cacheType:0,cookName:"",requireLogin:!1,apiPath:"",data:{}},e);if(h.cacheType>0&&(i=s(h.cacheKey)),i)1==h.cacheType?n(i.value):2==h.cacheType&&n(u(h,i.reponse));else{var p=a({method:"get",url:h.apiPath,body:h.data},c),y=Object.assign({baseURL:r.gateway.jsonUrl,method:"GET",timeout:3e4},p);t.getJson.request(h.apiPath,h.data,c).request(y).then((function(e){n(u(h,e))})).catch((function(e){99==e.result&&wx.redirectTo({url:"/pages/index/index"}),o(e)}))}}))}};exports.STATIC=f;
},{isPage:false,isComponent:false,currentFile:'services/middleware.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("services/request.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.projectPost=exports.projectGet=exports.http=exports.getJson=exports.apiPost=exports.apiGet=exports.JiaTuiPost=exports.JiaTuiGet=void 0;var t=require("../@babel/runtime/helpers/classCallCheck"),r=require("../@babel/runtime/helpers/createClass"),s=e(require("./../config/index.js")),o=(e(require("./../utils/tool")),require("../utils/update")),a=!1,n=require("./../sdk/flyio.0.6.14.min.js"),i=s.default.loadConfig(),p=function(){function e(r){t(this,e),this.setRequestInterceptorsProject=function(e,t){e.interceptors.request.use((function(e){if(e.body.hasOwnProperty("requireLogin")&&e.body.requireLogin){var t=wx.getStorageSync("token");t?e.body.token=t:Promise.reject({result:99,desc:"no login",errorType:"login"})}return e}),(function(e){return Promise.reject(e)}))},this.setResponseInterceptorsProject=function(e,t){e.interceptors.response.use((function(e){return 0==e.data.code||250003==e.data.code&&(a||(a=!0,(0,o.updateWechatMiniprogram)((function(){a=!1})))),e.data}),(function(e){var t={result:-1,errorType:"interface",errObj:e};if(e.response)switch(e.response.status){case 401:wx.removeStorageSync("token"),Object.assign(t,{result:99,desc:"no login",errorType:"login"})}return Promise.reject(t)}))},this.setResponseInterceptorsJson=function(e,t){e.interceptors.response.use((function(e){return-1==Object.keys(e.data).indexOf("body")?e.data:(e.data.body.result,e.data.body)}),(function(e){var t={result:-1,errorType:"interface",errObj:e};return e.response&&e.response.status,Promise.reject(t)}))},this.params=Object.assign({baseURL:i.gateway.general,method:"GET",timeout:3e4},r)}return r(e,[{key:"request",value:function(e,t,r){this.params.url=e,this.params.body=t,this.params=Object.assign(this.params,r);var s=new n;return this.params.baseURL==i.gateway.project?(this.setRequestInterceptorsProject(s,this.params),this.setResponseInterceptorsProject(s,this.params)):this.setResponseInterceptorsJson(s,this.params),s}}]),e}(),u=new p;exports.http=u;var c=new p({baseURL:i.gateway.jsonUrl,method:"GET"});exports.getJson=c;var d=new p({baseURL:i.gateway.general,method:"GET"});exports.apiGet=d;var l=new p({baseURL:i.gateway.general,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}});exports.apiPost=l;var h=new p({baseURL:i.gateway.project,method:"GET"});exports.projectGet=h;var b=new p({baseURL:i.gateway.project,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"}});exports.projectPost=b;var g=new p({baseURL:i.jiatui.general,method:"GET"});exports.JiaTuiGet=g;var j=new p({baseURL:i.jiatui.general,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"}});exports.JiaTuiPost=j;
},{isPage:false,isComponent:false,currentFile:'services/request.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/event.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e){return{all:e=e||new Map,on:function(t,n){var i=e.get(t);i?i.push(n):e.set(t,[n])},off:function(t,n){var i=e.get(t);i&&(n?i.splice(i.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var i=e.get(t);i&&i.slice().map((function(e){e(n)})),(i=e.get("*"))&&i.slice().map((function(e){e(t,n)}))}}};
},{isPage:false,isComponent:false,currentFile:'utils/event.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/phoneLogin.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.goLogin=function(n,e){return new Promise((function(o){0==wx.getStorageSync("useUin")?"handleTap"==n?wx.navigateTo({url:"/pages/login/index?action=".concat(n,"&handleTapType=").concat(e)}):wx.navigateTo({url:"/pages/login/index?action=".concat(n)}):o(!0)}))},exports.phoneLogin=function(e,o){n.API.phoneLogin({platform:1,code:e.detail.code,minaOpenId:wx.getStorageSync("openid"),unionId:wx.getStorageSync("unionid")}).then((function(n){0==n.code&&(wx.setStorageSync("token",n.content.token),wx.setStorageSync("useUin",n.content.useUin),wx.setStorageSync("phone",n.content.phone),o(n.content.useUin))}))};var n=getApp();
},{isPage:false,isComponent:false,currentFile:'utils/phoneLogin.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/reTypeList.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.reWriteJuHeTagList=function(e){var a,t,r=[];if(!e.length)return r;return e.forEach((function(e){t=[],e.jhd.length&&(e.jhd.forEach((function(e){e.tag&&(a=[],e.tag.forEach((function(e){switch(e.name){case"地产":e.name="建筑",a.push(e);break;case"腾讯千帆":case"腾讯云应用连接器":e.name="腾讯轻联",a.push(e);break;default:a.push(e)}})),e.tag=a),t.push(e)})),e.jhd=t,r.push(e))})),r},exports.reWriteJuHeTitleList=function(e){var a=[];return e.forEach((function(e){switch(e.title){case"地产":e.title="建筑",a.push(e);break;case"腾讯千帆":case"其他":case"SaaS产品":break;case"腾讯云应用连接器":e.title="腾讯轻联",a.push(e);break;default:a.push(e)}})),a},exports.reWriteNameList=function(e){var a=[];return e.forEach((function(e){switch(e.name){case"地产":e.name="建筑",a.push(e);break;case"腾讯千帆":case"其他":case"SaaS产品":break;case"腾讯云应用连接器":e.name="腾讯轻联",a.push(e);break;default:a.push(e)}})),a},exports.reWriteQuery=function(e){3456===e.product_id&&(e.product_id="3456,3454");return e},exports.reWriteQueryTagList=function(e){var a=[];return e.forEach((function(e){var t=[];e.tag.forEach((function(e){switch(e.name){case"地产":e.name="建筑",t.push(e);break;case"腾讯千帆":case"腾讯云应用连接器":e.name="腾讯轻联",t.push(e);break;default:t.push(e)}})),e.tag=t,a.push(e)})),a};
},{isPage:false,isComponent:false,currentFile:'utils/reTypeList.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/storage.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.expiresStorage=void 0;var e=require("../@babel/runtime/helpers/classCallCheck"),r=require("../@babel/runtime/helpers/createClass"),t=new(function(){function t(){e(this,t)}return r(t,[{key:"set",value:function(e,r,t){var a=+new Date,n=0;t&&0!==t&&(n=a+t),wx.setStorageSync(e,{value:r,expires:n})}},{key:"get",value:function(e){var r=+new Date,t=wx.getStorageSync(e);if(t){var a=t.value,n=t.expires;if(0===n||!n)return a;if(!(n<r))return a;this.remove(e)}}},{key:"remove",value:function(e){wx.removeStorageSync(e)}}]),t}());exports.expiresStorage=t;
},{isPage:false,isComponent:false,currentFile:'utils/storage.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/tool.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../@babel/runtime/helpers/toConsumableArray"),n=require("../@babel/runtime/helpers/typeof"),a=e(require("../sdk/sceneDict")),r=require("./storage"),i=require("./reTypeList"),o={getTime:function(){},getTimeOffsetNextDay:function(e){var t=e||new Date;return 864e5+ +new Date(t.toLocaleString().split(" ")[0]+" 00:00:00")-+t},sortKey:function(e,t){return e.sort((function(e,n){var a=e[t],r=n[t];return a>r?-1:a<r?1:0}))},sortKeyReverse:function(e,t){return e.sort((function(e,n){var a=e[t],r=n[t];return a<r?-1:a>r?1:0}))},isNumber:function(e){return!(!/^\d+(\.\d+)?$/.test(e)&&!/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(e))},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},deepClone:function(e){if("string"==typeof e)return new String(e.valueOf());if("number"==typeof e)return new Number(e.valueOf());if("boolean"==typeof e||void 0===e)return e;if(Array.isArray(e)){var t=[];return e.forEach((function(e){t.push(e)})),t}return"object"===n(e)?JSON.parse(JSON.stringify(e)):void 0},constructArrayByNum:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;e=(0,i.reWriteNameList)(e);for(var n=0,a=[],r=0;r<e.length;r++)r>=n*t&&r<(n+1)*t&&(a.length==n?a[n]=[e[r]]:a[n].push(e[r])),(r+1)%t==0&&n++;return a},constructArrayByField:function(e,t){var n={},a=[];for(var r in e.map((function(e,a){n[e[t]]?n[e[t]].list.push(e):n[e[t]]={field:e[t],list:[e]}})),n)a.push(n[r]);return a},arrayFieldValue:function(e,t){return e.map((function(e){e[t+"Value"]=[],e.list.map((function(n){-1==e[t+"Value"].indexOf(n[t])&&e[t+"Value"].push(n[t])}))})),e},timestampToTime:function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+((t.getDate()<10?"0"+t.getDate():t.getDate())+" ")+((t.getHours()<10?"0"+t.getHours():t.getHours())+":")+((t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":")+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},timestampToYear:function(e){return new Date(1e3*e).getFullYear()},timestampToMonth:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new Date(1e3*e);return t?n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1:(n.getMonth(),n.getMonth()+1)},timestampToDay:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new Date(1e3*e);return t?n.getDate()<10?"0"+n.getDate():n.getDate():(n.getDate(),n.getDate())},HourMinuteToStr:function(e){var t=e.substring(0,2);return e.substring(0,5)+(e=t>12?"PM":"AM")},verifyEmail:function(e){return!!/^([A-Za-z0-9_|\\\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(e)},verifyPhone:function(e){return null!=e.match(/^1(3|4|5|6|7|8|9)\d{9}$/)},isNormalWord:function(e){return!e||(null==e.match(/^[\u4e00-\u9fa5\s()_a-zA-Z0-9]+$/)?(console.log("match isNormalWord",!1),!1):(console.log("match isNormalWord",!0),!0))},stripEmoji:function(e){return e.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,"")},maskPhone:function(e){return e.length<14?e.substr(0,4)+"".padEnd(e.length-6,"*")+e.substr(e.length-2):e.substr(0,6)+"".padEnd(e.length-10,"*")+e.substr(e.length-4)},maskEmail:function(e){var t=e.split("@")[0];return(t=t.substr(0,2)+"".padEnd(t.length-4,"*")+t.substr(t.length-2))+"@"+e.split("@")[1]},stripHtmlTags:function(e){return e.replace(/<\/?.+?>/g,"").trim()},verifyUrl:function(e){return-1==(e=e.toString()).indexOf("javascript:")&&!!e.match(/(http|https):\/\/([\w.]+\/?)\S*/gi)},arrayIntersection:function(e,t){var n=new Set(t);return e.filter((function(e){return n.has(e)}))},arrayIntersectionLength:function(e,t){return this.arrayIntersection(e,t).length},arrayUnique:function(e){return t(new Set(e))},objectToUrlParams:function(e){var t=JSON.stringify(e);console.log("1",t);var n=t.replace(/:/g,"=");return console.log("2",n),n.replace(/"/g,"").replace(/,/g,"&").match(/\{([^)]*)\}/)[1]},redirect:function(e,t){var n=getApp();switch(console.log("tool redirect",e,t),e){default:console.log("tool redirect not match",e,t);break;case"OUTLINK":2==t.jump_type?wx.navigateTo({url:"/pages/common/webview/index?url="+encodeURIComponent(t.outUrl),fail:function(){n.onPageNotFound()}}):3!=t.jump_type||t.appId||(-1!=t.pageUrl.indexOf("pages/index/index")||-1!=t.pageUrl.indexOf("pages/case/list/index")||-1!=t.pageUrl.indexOf("pages/warehouse/list/index")||-1!=t.pageUrl.indexOf("pages/activity/list/index")||-1!=t.pageUrl.indexOf("pages/mine/index/index")?wx.switchTab({url:t.pageUrl}):wx.navigateTo({url:t.pageUrl,fail:function(){n.onPageNotFound()}}));break;case"MINIAPP":wx.navigateToMiniProgram({appId:t.appId,path:t.pageUrl});break;case"MEET":break;case"TOOLS":wx.navigateTo({url:"/pages/case/tool_detail/index?id="+t,fail:function(){n.onPageNotFound()}});break;case"CASES":wx.navigateTo({url:"/pages/case/case_detail/index?id="+t,fail:function(){n.onPageNotFound()}});break;case"NEWS":wx.navigateTo({url:"/pages/activity/news_detail/index?id="+t,fail:function(){n.onPageNotFound()}});break;case"SIGNUP":wx.navigateTo({url:"/pages/activity/act_detail/index?id="+t,fail:function(){n.onPageNotFound()}});break;case"ONLINE":wx.navigateTo({url:"/pages/online/detail/index?id="+t,fail:function(){n.onPageNotFound()}})}},parseMiniAppUrl:function(e){return{appId:e.substr(6,18),path:e.substr(24)}},unique:function(e){for(var t=[],n=[],a=e.length,r=0;r<a;r++){for(var i=r+1;i<a;i++)e[r]===e[i]&&(i=++r);t.push(e[r]),n.push(r)}return t},parseScene:function(){var e=wx.getLaunchOptionsSync();console.log("tool parseScene options",e);var t=a.default.name[e.scene],n=a.default.type[e.scene];return null!=t&&"undefined"!=t||(t=""),null!=n&&"undefined"!=n||(n=""),{scene:t,type:n,sceneId:e.scene}},parseUrlParams:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0==t?e.split("?")[1].split("&"):e.split("&"),a={};return n.map((function(e){return a[e.split("=")[0]]=e.split("=")[1]})),a},randomId:function(){return(Math.floor(10*Math.random())||1)+function(e,t){var n,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];for(t=t||a.length,n=0;n<3;n++)r[n]=a[0|Math.random()*t];return r.join("")}(0,10)+(new Date).getTime().toString().slice(2,13)},formatDateTime:function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return t},getShareCardPremise:function(){var e=wx.getStorageSync("isStaff"),t=r.expiresStorage.get("staff_salas_status");return!(!e||1!==t)},getCardShareInfo:function(e){var t=e.shareCardInfo,n=e.path,a=e.id,r=e.title,i=e.imageUrl,o=e.cid,s=e.isShareMyInfo;if(this.getShareCardPremise()&&s){var u=wx.getStorageSync("staff_card_id"),c="";if(t){for(var l in t)t[l]&&(c+="&".concat(l,"=").concat(+t[l]));return u&&(c+="&shareCardId=".concat(+u)),{title:r,imageUrl:i,path:"".concat(n,"?id=").concat(a).concat(c)+(o?"&cid="+o:"")}}}else if(!s&&wx.getStorageSync("salesShareCardId")){var d=wx.getStorageSync("salesShareCardId"),g="",f=wx.getStorageSync("salesShareCardParams");if(f){for(var p in f)f[p]&&(g+="&".concat(p,"=").concat(+f[p]));return d&&(g+="&shareCardId=".concat(+d)),{title:r,imageUrl:i,path:"".concat(n,"?id=").concat(a).concat(g)+(o?"&cid="+o:"")}}}},onShareAppMessage:function(e){var t=e.shareCardInfo,n=e.path,a=e.id,r=e.title,i=e.imageUrl,o=e.isShareCard,s=e.isShareMyInfo,u=e.cid;return this.getShareCardPremise()?o?!s&&wx.getStorageSync("salesShareCardId")||s?this.getCardShareInfo({path:n,title:r,imageUrl:i,shareCardInfo:t,id:a,cid:u,isShareMyInfo:s}):{title:r,imageUrl:i}:{title:r,imageUrl:i,path:"".concat(n,"?id=")+a+(u?"&cid="+u:"")}:{title:r,imageUrl:i}},pathGetRefer:function(e){var t="";return-1!==e.indexOf("pages/case/tool_detail/index")?t="tool":-1!==e.indexOf("pages/activity/act_detail/index")?t="activity":-1!==e.indexOf("pages/activity/news_detail/index")?t="news":-1!==e.indexOf("pages/brand/detail/index")||-1!==e.indexOf("pages/brand/index/index")?t="brand":-1!==e.indexOf("pages/case/case_detail/index")?t="case":-1!==e.indexOf("pages/cooperation/index")?t="cooperation":-1!==e.indexOf("pages/industry/index")?t="industry":-1!==e.indexOf("pages/juhe/index")?t="juhe":-1!==e.indexOf("pages/online/detail/index")?t="online":-1!==e.indexOf("pages/product/index")?t="product":-1!==e.indexOf("pages/scene/detail/index")&&(t="scene"),t},getDetailUrl:function(e,t){var n="";switch(e||(e="1"),e){case"online":case"6":n="pages/online/detail/index?id="+t;break;case"7":n="pages/activity/act_detail/index?id="+t;break;case"2":n="pages/case/case_detail/index?id="+t;break;case"8":n="pages/scene/detail/index?id="+t;break;case"3":case"1":case"4":case"5":case"999":case"tool-video":n="pages/case/tool_detail/index?id="+t;break;case"9":n="pages/activity/news_detail/index?id="+t;break;case"juhe":n="pages/juhe/index?id="+t;break;default:n=""}return n}};exports.default=o;
},{isPage:false,isComponent:false,currentFile:'utils/tool.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/update.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateWechatMiniprogram=function(e){wx.canIUse("getUpdateManager")&&function(e){var t=wx.getUpdateManager();t.onCheckForUpdate((function(n){n.hasUpdate&&(t.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",showCancel:!1,success:function(n){n.confirm&&(wx.removeStorage("token"),t.applyUpdate()),e()},fail:function(){e()}})})),t.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"为了更好的体验，请删除当前小程序，重新搜索打开",showCancel:!1,success:function(){e()},fail:function(){e()}})})))}))}(e)};
},{isPage:false,isComponent:false,currentFile:'utils/update.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/util.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/toConsumableArray"),t=function(e){return(e=e.toString())[1]?e:"0".concat(e)};module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,a=e.getDate(),o=e.getHours(),u=e.getMinutes(),i=e.getSeconds();return"".concat([n,r,a].map(t).join("/")," ").concat([o,u,i].map(t).join(":"))},_saveStorageData:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e5;wx.setStorageSync(e,{expr:-1==n?-1:(new Date).getTime()+n,value:t})},_getStorageData:function(e){var t=wx.getStorageSync(e),n=t.expr,r=void 0===n?0:n,a=t.value,o=void 0===a?"":a;debugger;var u=(new Date).getTime();return-1==r||u<r?o:(wx.removeStorageSync(e),!1)},throttle:function(e,t){var n=null;return function(){var r=this,a=arguments;n||(n=setTimeout((function(){e.apply(r,a),n=null}),t))}},debounce:function(t,n){var r=null;return function(){var a=this,o=arguments;null!==r&&clearTimeout(r),r=setTimeout(t.bind.apply(t,[a].concat(e(o))),n)}}};
},{isPage:false,isComponent:false,currentFile:'utils/util.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("app.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault").default,t=require("@babel/runtime/helpers/regeneratorRuntime"),a=require("@babel/runtime/helpers/asyncToGenerator"),n=e(require("./config/index")),r=e(require("./services/api")),o=e(require("./utils/tool")),i=e(require("./sdk/dict")),s=e(require("./sdk/QDTracker")),l=e(require("./sdk/sensors")),c=e(require("./sdk/QD")),u=e(require("./utils/event")),d=require("./sdk/sensorsdata.min.js"),g=!1,p=!1,f=n.default.loadConfig(),S={subscribePick:function(e,t){if(0==e||-1=="praise,share,download,collection".indexOf(t))return!1;var a=(new Date).toLocaleDateString(),n=[],o=!1,i=wx.getStorageSync("subscribed");if(i){var s=i.split(",");if(s.length>0)s.forEach((function(e){var t=e.split(" "),r=t[t.length-1].length;e.slice(0,e.length-r-1)==a&&e.length>1&&n.push(e.slice(e.length-r,e.length))}))}if((0==n.length||n.length<3&&-1==n.indexOf(e.toString()))&&(n.push(e),o=!0),o){var l,u,d,g=getCurrentPages(),p=c.default.getChannelType(),f=null===(l=g[g.length-1])||void 0===l||null===(u=l.__data__)||void 0===u||null===(d=u.info)||void 0===d?void 0:d.title;c.default.track("miniprogram_auth",{ChannelType:p,ContentTheme:f}),wx.requestSubscribeMessage({tmplIds:["l2ASFwhS9nUE1hNl942-LL1JHOqbLp5KqNilvdowQKM"],success:function(t){"accept"==t["l2ASFwhS9nUE1hNl942-LL1JHOqbLp5KqNilvdowQKM"]?(i?wx.setStorageSync("subscribed","".concat(i,",").concat(a," ").concat(e.toString())):wx.setStorageSync("subscribed","".concat(a," ").concat(e.toString())),r.default.templateSubscribe("l2ASFwhS9nUE1hNl942-LL1JHOqbLp5KqNilvdowQKM",e),c.default.track("official_button_click",{button_name:"订阅推送",button_position:"页面内部",ContentTheme:f,ChannelType:p})):"reject"==t["l2ASFwhS9nUE1hNl942-LL1JHOqbLp5KqNilvdowQKM"]&&c.default.track("official_button_click",{button_name:"取消订阅推送",button_position:"页面内部",ContentTheme:f,ChannelType:p})}})}return o}};try{s.default.init({appid:f.appid,kfuin:"",appkey:f.qidian.appkey,apiHost:f.qidian.apiHost,useOpenId:!0,autoTrack:{appLaunch:!0,appShow:!0,appHide:!0,pageShow:!0,pageHide:!0,pageShare:!0,share:!0}}),s.default.setCommonData({Platform:"腾讯云小程序",platform_type:"小程序",data_source:"腾讯云小程序"})}catch(e){console.log("qidianDA_Error",e)}try{if(wx.getStorageSync("firstVisit")?wx.setStorageSync("firstVisit",!1):(console.log("首次进入"),wx.setStorageSync("firstVisit",!0)),d.setPara({name:"sensors",server_url:f.sensors.dataUrl,autoTrack:{appLaunch:!0,appShow:!0,appHide:!0,pageShow:!0,pageShare:!0,mpClick:!0,mpFavorite:!0,pageLeave:!0},source_channel:[],show_log:!0,allow_amend_share_path:!0}),wx.getStorageSync("staffInfo")){var h=wx.getStorageSync("staffInfo");d.registerApp({employee_id:""+h.euserId,loginUserId:""+h.euserId,userID:""+h.euserId,staff_id:h.staffId,is_staff:!0,data_from:"ganhuoku"})}wx.getStorageSync("openid")&&d.setOpenid(wx.getStorageSync("openid")),d.init(),p=!0,c.default.installSA(d)}catch(e){console.log("sensors sdk init error",e)}App({onLaunch:function(e){wx.setStorageSync("salesShareCardId",""),wx.setStorageSync("salesShareCardInfo",""),wx.setStorageSync("token",""),wx.setStorageSync("i_token",""),wx.setStorageSync("mpSub",!1),this.setCustomNavbar(),this.setUserInfo(),wx.cloud.init({}),this.onAppInit(),-1!==e.path.indexOf("jiatui/pages/")&&e.query.id&&(e.query.shareCardId=e.query.id),c.default.parseAppLaunchOptions(e.query),this.launchOptions=e,console.log("app onLaunch options",e)},onAppInit:function(){this.appInit=!0,this.waitInit=!1,this.initCallback()},checkAppInit:function(e){this.appInit?e():this.initCallback=e},initCallback:function(){},setCustomNavbar:function(){var e=wx.getSystemInfoSync(),t=e.statusBarHeight||20,a=/ios/i.test(e.system)?44:48;this.globalData.sysInfo=e,this.globalData.statusBarHeight=t,this.globalData.navbarHeight=a,this.globalData.topHeight=a+t,this.globalData.isIos="ios"===e.platform},setUserInfo:function(){this.globalData.userInfo||(this.globalData.userInfo={}),wx.getStorageSync("userInfoNickname")&&(this.globalData.userInfo.nickname=wx.getStorageSync("userInfoNickname")),wx.getStorageSync("userInfoAvatarUrl")&&(this.globalData.userInfo.avatar=wx.getStorageSync("userInfoAvatarUrl"))},loginCallback:function(){var e=this;return new Promise(function(){var n=a(t().mark((function a(n,i){var s;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.initTemplateIds(),wx.getStorageSync("token")&&wx.getStorageSync("i_token")){t.next=17;break}return t.next=4,r.default.isTencentStaff();case 4:if(s=t.sent,console.log("loginCallback success",s),e.getOpenidCallback(),!e.launchOptions||!e.launchOptions.query.scene){t.next=10;break}return t.next=10,r.default.uuidToParams(e.launchOptions.query.scene,o.default.pathGetRefer(e.launchOptions.path));case 10:if(r.default.pageDict(),!wx.getStorageSync("salesShareCardId")){t.next=14;break}return t.next=14,r.default.getTencetStaffCardInfo(wx.getStorageSync("salesShareCardId"));case 14:n(),t.next=36;break;case 17:if(!e.launchOptions||!e.launchOptions.query.scene){t.next=20;break}return t.next=20,r.default.uuidToParams(e.launchOptions.query.scene,o.default.pathGetRefer(e.launchOptions.path));case 20:if(r.default.pageDict(),e.getOpenidCallback(),!wx.getStorageSync("salesShareCardId")||wx.getStorageSync("jtUserId")){t.next=27;break}return t.next=25,r.default.getJtUserInfo();case 25:t.next=28;break;case 27:wx.getStorageSync("jtUserId")&&c.default.saRegister({loginUserId:""+wx.getStorageSync("jtUserId"),userID:""+wx.getStorageSync("jtUserId")});case 28:if(!wx.getStorageSync("salesShareCardId")||wx.getStorageSync("staff_card_id")==wx.getStorageSync("salesShareCardId")){t.next=31;break}return t.next=31,r.default.getTencetStaffCardInfo(wx.getStorageSync("salesShareCardId")).then().catch((function(e){return!1}));case 31:if(wx.getStorageSync("isStaff")&&wx.getStorageSync("staffInfo").id==wx.getStorageSync("salesShareCardId")&&wx.setStorageSync("salesShareCardId",""),!wx.getStorageSync("salesShareCardId")){t.next=35;break}return t.next=35,r.default.getTencetStaffCardInfo(wx.getStorageSync("salesShareCardId"));case 35:n();case 36:case"end":return t.stop()}}),a)})));return function(e,t){return n.apply(this,arguments)}}())},getOpenidCallback:function(){if(!g||!p){var e=wx.getStorageSync("openid"),t=wx.getStorageSync("unionid"),a=wx.getStorageSync("uin");if(console.log("getOpenidCallback openid",e),console.log("getOpenidCallback unionid",t),console.log("getOpenidCallback uin",a),!g){var n={};e&&(n.openid=e),t&&(n.unionid=t),a&&(n.bussid=a),s.default.setCommonData({Platform:"腾讯云小程序",platform_type:"小程序",data_source:"腾讯云小程序"},n);var r=s.default.getIDs();console.log("app.js getOpenidCallback initQD visitId",r),wx.setStorageSync("qdVisitId",r.qid),c.default.install(s.default),g=!0}}},setDownloadParams:function(e){this.globalData.downloadFileParams=e},jumpSharePoster:function(e){var t=e.data_id,a=e.cover_img,n=e.title,r=e.pageId,o=e.type,i=void 0===o?"":o,s=e.cid,l=void 0===s?"":s;wx.navigateTo({url:"/pages/share/poster/index?cid=".concat(l,"&type=").concat(i,"&pageId=").concat(r,"&data_id=").concat(t,"&cover_img=").concat(encodeURIComponent(a),"&title=").concat(encodeURIComponent(n))})},initTemplateIds:function(){var e=this,t=this.globalData.activityTemplateIds;t&&t.length>0||this.loadingTemplate||(this.loadingTemplate=!0,r.default.getWxTemplateIds().then((function(t){e.globalData.activityTemplateIds=t.templateIds,e.loadingTemplate=!1})))},onPageNotFound:function(e){wx.redirectTo({url:"/pages/common/not_found/index"})},globalData:{config:f,userInfo:null,statusBarHeight:20,navbarHeight:48,isIos:!1,fileCollect:{},juheFilter:{},commonTitle:"腾讯产业互联网干货库",commonImageUrl:"https://mkttencent-1256915710.file.myqcloud.com/saas/2021/10/27/f12de5e218857ce9d5b5feb18c766ddc.jpg",currentTab:"其他",downloadFileParams:{},juheReserverIds:[],activityTemplateIds:[],enrollFormData:{}},cEvent:(0,u.default)(),appInit:!1,waitInit:!0,API:r.default,tool:o.default,dict:i.default,sa:l.default,QD:c.default,sp:S});
},{isPage:false,isComponent:false,currentFile:'app.js'});require("app.js");