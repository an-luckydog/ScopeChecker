var _sjsSupporter={compiler:!1};window.define("pages/car/index.swan",(function(e,a){a.exports={componentUsingComponentMap:{"components/v-tabs/v-tabs.swan":["v-tabs"],"components/uni-search-bar/uni-search-bar.swan":["uni-search-bar"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view class="data-v-90c361a4"><view class="wh data-v-90c361a4"><image class="imgwh data-v-90c361a4" src="/static/xlogo.png" mode></image></view><view style="margin-top:1.3333333333333333vw;" class="data-v-90c361a4"><v-tabs vue-id="3c2a40e9-1" scroll="{{false}}" tabs="{{tabs}}" value="{{current}}" data-event-opts="{{[[\'^change\',[[\'changeTab\']]],[\'^input\',[[\'__set_model\',[\'\',\'current\',\'$event\',[]]]]]]}}" class="data-v-90c361a4 swan-spider-tap" on-bindchange="eventHappen(\'change\', $event, \'__e\', \'\', \'bind\')" on-bindinput="eventHappen(\'input\', $event, \'__e\', \'\', \'bind\')"></v-tabs></view><view style="margin-top:1.3333333333333333vw;" class="data-v-90c361a4"><uni-search-bar style="padding:8vw 4vw;" vue-id="3c2a40e9-2" cancelButton="none" placeholder="{{placeholder}}" data-event-opts="{{[[\'^confirm\',[[\'search\']]],[\'^input\',[[\'input\']]]]}}" class="data-v-90c361a4 swan-spider-tap" on-bindconfirm="eventHappen(\'confirm\', $event, \'__e\', \'\', \'bind\')" on-bindinput="eventHappen(\'input\', $event, \'__e\', \'\', \'bind\')"></uni-search-bar></view><view class="data-v-90c361a4"><button style="background-color:#1587fa;color:#fff;margin:4vw;" type="default" data-event-opts="{{[[\'tap\',[[\'inquire\',[\'$event\']]]]]}}" class="data-v-90c361a4 swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'__e\', \'\', \'bind\')">立即查询</button></view><view style="padding:4vw;color:#8b8b8b;" class="data-v-90c361a4"><view class="data-v-90c361a4"><text class="data-v-90c361a4">大家都在查：</text></view><view class="data-v-90c361a4"><template s-for="item, index in chalist" s-for-item="item" s-for-index="index" s-key="index"><text style="margin-right:4vw;" class="data-v-90c361a4">{{item}}</text></template></view></view></view>',isComponent:!0,componentPath:"pages/car/index.swan",customComponentCss:[[1],"swan-page",".",[0],"data-v-90c361a4","{width: 100%; height: 100%; }",".",[0],"wh",".",[0],"data-v-90c361a4","{height: 45.333333333333336vw; }"],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));