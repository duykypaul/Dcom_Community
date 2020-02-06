<template>
    <div class="loading">
        <div class="loadingio-spinner-double-ring-0a1a7xstz96v">
            <div class="ldio-w1o03bfraqd">
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-loading",
        data() {
            return {};
        }
    };
</script>

<style>
    .loading{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 100001;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
        background: #212529c7;
    }
    .loading .loadingio-spinner-double-ring-0a1a7xstz96v {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .loading.show {
        opacity: 0.5;
        visibility: visible;
    }
    @keyframes ldio-w1o03bfraqd {
        0% {
            transform: rotate(0)
        }
        100% {
            transform: rotate(360deg)
        }
    }
    
    .ldio-w1o03bfraqd div {
        box-sizing: border-box !important
    }
    
    .ldio-w1o03bfraqd > div {
        position: absolute;
        width: 74.88px;
        height: 74.88px;
        top: 14.56px;
        left: 14.56px;
        border-radius: 50%;
        border: 8.32px solid #000;
        border-color: #b3c430 transparent #b3c430 transparent;
        animation: ldio-w1o03bfraqd 1s linear infinite;
    }
    
    .ldio-w1o03bfraqd > div:nth-child(2), .ldio-w1o03bfraqd > div:nth-child(4) {
        width: 56.160000000000004px;
        height: 56.160000000000004px;
        top: 23.92px;
        left: 23.92px;
        animation: ldio-w1o03bfraqd 1s linear infinite reverse;
    }
    
    .ldio-w1o03bfraqd > div:nth-child(2) {
        border-color: transparent #4c5630 transparent #4c5630
    }
    
    .ldio-w1o03bfraqd > div:nth-child(3) {
        border-color: transparent
    }
    
    .ldio-w1o03bfraqd > div:nth-child(3) div {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
    }
    
    .ldio-w1o03bfraqd > div:nth-child(3) div:before, .ldio-w1o03bfraqd > div:nth-child(3) div:after {
        content: "";
        display: block;
        position: absolute;
        width: 8.32px;
        height: 8.32px;
        top: -8.32px;
        left: 24.96px;
        background: #b3c430;
        border-radius: 50%;
        box-shadow: 0 66.56px 0 0 #b3c430;
    }
    
    .ldio-w1o03bfraqd > div:nth-child(3) div:after {
        left: -8.32px;
        top: 24.96px;
        box-shadow: 66.56px 0 0 0 #b3c430;
    }
    
    .ldio-w1o03bfraqd > div:nth-child(4) {
        border-color: transparent;
    }
    
    .ldio-w1o03bfraqd > div:nth-child(4) div {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
    }
    
    .ldio-w1o03bfraqd > div:nth-child(4) div:before, .ldio-w1o03bfraqd > div:nth-child(4) div:after {
        content: "";
        display: block;
        position: absolute;
        width: 8.32px;
        height: 8.32px;
        top: -8.32px;
        left: 15.600000000000001px;
        background: #4c5630;
        border-radius: 50%;
        box-shadow: 0 47.84px 0 0 #4c5630;
    }
    
    .ldio-w1o03bfraqd > div:nth-child(4) div:after {
        left: -8.32px;
        top: 15.600000000000001px;
        box-shadow: 47.84px 0 0 0 #4c5630;
    }
    
    .loadingio-spinner-double-ring-0a1a7xstz96v {
        width: 104px;
        height: 104px;
        display: inline-block;
        overflow: hidden;
        background: none;
    }
    
    .ldio-w1o03bfraqd {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }
    
    .ldio-w1o03bfraqd div {
        box-sizing: content-box;
    }
</style>
