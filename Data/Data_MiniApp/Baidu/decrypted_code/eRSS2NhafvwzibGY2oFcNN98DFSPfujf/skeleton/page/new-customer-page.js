"use strict";window.skeleton.tpl='<style >\n    .sekleton-container {\n        overflow: auto;\n        position: absolute;\n        height: 100vh;\n        width: 100vw;\n        background-color: #F5F5F5;\n        z-index: 2000;\n        touch-action: none;\n    }\n    .mip-bdxd-head {\n        height: 42.7vw;\n        background-color: #fff;\n        padding: 11.5vw 0 2.1vw;\n        box-sizing: border-box;\n    }\n    .mip-bdxd-nav {\n        height: 4.8vw;\n        width: 30.6vw;\n        background-color: #F5F5F5;\n        margin: 0 auto;\n    }\n    .mip-bdxd-rights {\n        display: flex;\n        justify-content: center;\n        margin: 4.8vw 0;\n    }\n    .mip-bdxd-rights-item {\n        width: 22.2vw;\n        height: 2.8vw;\n        background-color: #F5F5F5;\n        margin-right: 1.9vw;\n    }\n    .mip-bdxd-coupon-list {\n        display: flex;\n        margin-left: 2.4vw;\n    }\n    .mip-bdxd-coupon-item {\n        width: 25.1vw;\n        height: 11.5vw;\n        background-color: #F5F5F5;\n        margin-right: 0.9vw;\n    }\n    .mip-bdxd-coupon-collect {\n        width: 19.5vw;\n        height: 11.5vw;\n        background-color: #F5F5F5;\n    }\n    .mip-bdxd-goods-container {\n        width: 95.1vw;\n        margin: 2.4vw auto;\n        background-color: #fff;\n        padding: 3.6vw 3.1vw;\n        box-sizing: border-box;\n        border-radius: 2.8vw;\n    }\n    .mip-bdxd-goods-title {\n        width: 24.9vw;\n        height: 4.3vw;\n        background-color: #F5F5F5;\n        margin-bottom: 3.6vw;\n    }\n    .mip-bdxd-goods-list {\n        display: flex;\n    }\n    .mip-bdxd-goods-card {\n        margin-bottom: 1.9vw;\n        margin-right: 1.9vw;\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n    .mip-bdxd-c-goods-image {\n        width: 28.3vw;\n        height: 28.3vw;\n        background-color: #F5F5F5;\n    }\n    .mip-bdxd-c-goods-name {\n        width: 28.3vw;\n        height: 3.6vw;\n        background-color: #F5F5F5;\n        margin: 1.6vw 0;\n    }\n    .mip-bdxd-c-goods-price {\n        width: 28.3vw;\n        height: 7.6vw;\n        background-color: #F5F5F5;\n    }\n    .mip-bdxd-goods-feed {\n        background-color: #fff;\n        padding: 4.1vw 2.4vw;\n    }\n    .mip-bdxd-goods-image {\n        width: 46.6vw;\n        height: 46.6vw;\n        background-color: #F5F5F5;\n    }\n    .mip-bdxd-goods-name {\n        width: 46.6vw;\n        height: 3.6vw;\n        background-color: #F5F5F5;\n        margin-top: 2.2vw;\n    }\n    .mip-bdxd-goods-point {\n        display: flex;\n        margin: 2.4vw 0;\n    }\n    .mip-bdxd-goods-point-item {\n        width: 18.3vw;\n        height: 3.6vw;\n        background-color: #F5F5F5;\n        margin-right: 1.2vw;\n    }\n    .mip-bdxd-goods-price {\n        display: flex;\n    }\n    .mip-bdxd-goods-point-price {\n        width: 14.5vw;\n        height: 3.6vw;\n        background-color: #F5F5F5;\n        margin-right: 1.2vw;\n    }\n</style>\n\n<div class="sekleton-container">\n    <div class="mip-bdxd-head">\n        <div class="mip-bdxd-nav"></div>\n        <div class="mip-bdxd-rights">\n            <div class="mip-bdxd-rights-item"></div>\n            <div class="mip-bdxd-rights-item"></div>\n            <div class="mip-bdxd-rights-item"></div>\n        </div>\n        <div class="mip-bdxd-coupon-list">\n            <div class="mip-bdxd-coupon-item"></div>\n            <div class="mip-bdxd-coupon-item"></div>\n            <div class="mip-bdxd-coupon-item"></div>\n            <div class="mip-bdxd-coupon-collect"></div>\n        </div>\n    </div>\n    <div class="mip-bdxd-goods-container">\n        <div class="mip-bdxd-goods-title"></div>\n        <div class="mip-bdxd-goods-list">\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-c-goods-image"></div>\n                <div class="mip-bdxd-c-goods-name"></div>\n                <div class="mip-bdxd-c-goods-price"></div>\n            </div>\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-c-goods-image"></div>\n                <div class="mip-bdxd-c-goods-name"></div>\n                <div class="mip-bdxd-c-goods-price"></div>\n            </div>\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-c-goods-image"></div>\n                <div class="mip-bdxd-c-goods-name"></div>\n                <div class="mip-bdxd-c-goods-price"></div>\n            </div>\n        </div>\n        <div class="mip-bdxd-goods-list">\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-c-goods-image"></div>\n                <div class="mip-bdxd-c-goods-name"></div>\n                <div class="mip-bdxd-c-goods-price"></div>\n            </div>\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-c-goods-image"></div>\n                <div class="mip-bdxd-c-goods-name"></div>\n                <div class="mip-bdxd-c-goods-price"></div>\n            </div>\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-c-goods-image"></div>\n                <div class="mip-bdxd-c-goods-name"></div>\n                <div class="mip-bdxd-c-goods-price"></div>\n            </div>\n        </div>\n    </div>\n    <div class="mip-bdxd-goods-feed">\n        <div class="mip-bdxd-goods-title"></div>\n        <div class="mip-bdxd-goods-list">\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-goods-image"></div>\n                <div class="mip-bdxd-goods-name"></div>\n                <div class="mip-bdxd-goods-point">\n                    <div class="mip-bdxd-goods-point-item"></div>\n                    <div class="mip-bdxd-goods-point-item"></div>\n                </div>\n                <div class="mip-bdxd-goods-price">\n                    <div class="mip-bdxd-goods-price-item"></div>\n                    <div class="mip-bdxd-goods-price-item"></div>\n                </div>\n            </div>\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-goods-image"></div>\n                <div class="mip-bdxd-goods-name"></div>\n                <div class="mip-bdxd-goods-point">\n                    <div class="mip-bdxd-goods-point-item"></div>\n                    <div class="mip-bdxd-goods-point-item"></div>\n                </div>\n                <div class="mip-bdxd-goods-price">\n                    <div class="mip-bdxd-goods-price-item"></div>\n                    <div class="mip-bdxd-goods-price-item"></div>\n                </div>\n            </div>\n        </div>\n        <div class="mip-bdxd-goods-list">\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-goods-image"></div>\n                <div class="mip-bdxd-goods-name"></div>\n                <div class="mip-bdxd-goods-point">\n                    <div class="mip-bdxd-goods-point-item"></div>\n                    <div class="mip-bdxd-goods-point-item"></div>\n                </div>\n                <div class="mip-bdxd-goods-price">\n                    <div class="mip-bdxd-goods-price-item"></div>\n                    <div class="mip-bdxd-goods-price-item"></div>\n                </div>\n            </div>\n            <div class="mip-bdxd-goods-card">\n                <div class="mip-bdxd-goods-image"></div>\n                <div class="mip-bdxd-goods-name"></div>\n                <div class="mip-bdxd-goods-point">\n                    <div class="mip-bdxd-goods-point-item"></div>\n                    <div class="mip-bdxd-goods-point-item"></div>\n                </div>\n                <div class="mip-bdxd-goods-price">\n                    <div class="mip-bdxd-goods-price-item"></div>\n                    <div class="mip-bdxd-goods-price-item"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';