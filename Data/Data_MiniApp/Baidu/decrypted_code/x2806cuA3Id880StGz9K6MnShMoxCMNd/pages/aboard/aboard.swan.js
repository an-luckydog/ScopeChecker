var _sjsSupporter={compiler:!1};window.define("pages/aboard/aboard.swan",(function(e,a){a.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view class="page"><view class="page_title"><view class="page_input"><image src="/images/bm/search.png"></image><input type="text" placeholder-style="color:#999;font-size:28rpx" placeholder="请输入您的出发地址" confirm-type="search" on-bindinput="eventHappen(\'input\', $event, \'bindKeyInput\', \'\', \'bind\')" /></view></view><view class="page_content"><scroll-view scroll-y=\'true\'><template s-if="{{address}}"><view class="page_item swan-spider-tap" data-lat="{{lat}}" data-lng="{{lng}}" data-address="{{address}}" on-bindtap="eventHappen(\'tap\', $event, \'switchLocation\', \'\', \'bind\')"><view class="page_img"><image src="/images/locate.png"></image></view><view class="page_address1"><view >(当前位置){{address}}</view><text >{{address}}</text></view></view></template><template s-for="item, index in sugData" s-key="{{index}}"><view class="page_item swan-spider-tap" data-lat="{{item.location.lat}}" data-lng="{{item.location.lng}}" data-address="{{item.name}}" on-bindtap="eventHappen(\'tap\', $event, \'switchLocation\', \'\', \'bind\')"><view class="page_img"><image src="/images/locate.png"></image></view><view class="page_address"><view >{{item.name}}</view><text >{{item.city}}{{item.district}}</text></view></view></template></scroll-view></view></view>',isComponent:!1,componentPath:"pages/aboard/aboard.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));