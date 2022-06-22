<template>
	<div class="brands">
        <div class="brands-top">
            <p>Best Brands at Lowest Prices</p>
        </div>
        <div class="brands-bottom">
            <div class="items">
                <img src="https://static.wixstatic.com/media/82fcd3_d1a50a604e7746409627375577693ebd~mv2.png/v1/crop/x_0,y_13,w_300,h_132/fill/w_211,h_90,al_c,usm_0.66_1.00_0.01,enc_auto/82fcd3_d1a50a604e7746409627375577693ebd~mv2.png" alt="">
            </div>
            <div class="items">
                <img src="https://static.wixstatic.com/media/82fcd3_7f2a74423be748dca8cab8d905b857b0~mv2.png/v1/crop/x_0,y_13,w_300,h_132/fill/w_243,h_110,al_c,usm_0.66_1.00_0.01,enc_auto/82fcd3_7f2a74423be748dca8cab8d905b857b0~mv2.png" alt="">
            </div>
            <div class="items">
                <img src="https://static.wixstatic.com/media/82fcd3_5d50420463db42c9924cb2c11a194935~mv2.png/v1/crop/x_0,y_13,w_300,h_132/fill/w_283,h_123,al_c,usm_0.66_1.00_0.01,enc_auto/82fcd3_5d50420463db42c9924cb2c11a194935~mv2.png" alt="">
            </div>
            <div class="items">
                <img src="https://static.wixstatic.com/media/82fcd3_9c64adc8c55e4de695315a7a25c41f15~mv2.png/v1/fill/w_328,h_172,al_c,lg_1,enc_auto/82fcd3_9c64adc8c55e4de695315a7a25c41f15~mv2.png" alt="">
            </div>
            <div class="items">
                <img src="https://static.wixstatic.com/media/82fcd3_ae955c036e724d64b58f25347ca6daa0~mv2.png/v1/fill/w_300,h_160,al_c,lg_1,enc_auto/82fcd3_ae955c036e724d64b58f25347ca6daa0~mv2.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
	.brands-top {
    background-color: rgb(230, 230, 230);
    text-align: center;
    line-height: 200px;
    width: 90%;
    margin: auto;
    height: 200px;
    margin-bottom: 2px;
}
.brands-top p {
    color:rgb(252, 105, 48);
    font-weight: bolder;
    font-size: 3rem;
}
.brands-bottom {
    background-color: rgb(230, 230, 230);
    display: flex;
    width: 90%;
    margin: auto;
    height: 300px;
    justify-content:space-around;
    line-height: 400px;
}

@media screen and (max-width:768px) {
    .brands-top  {
        height: 150px;
        line-height: 150px;
    }
    .brands-top p {
        font-size: 1.5rem;
    }
    .brands-bottom {
      height: 200px;
      flex-wrap: wrap;
      line-height: 20px;
    }
    .brands-bottom img {
        width:20vw;
    }
}
</style>