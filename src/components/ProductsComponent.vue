<template>
	<div class="products">
            <ul class="products-container">
                <li class="product product1" :key="product" v-for="product in products">
                    <img :src="product.imgUrl">
                    <p class="product-head">{{ product.title }}</p>
                        <hr class="line">
                    <p>{{ product.price }}</p>
                    <button @click="addCart(product)" class="add-cart">Add to Cart</button>
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        data(){
            return {
                products:[
                    {
                        title: '狗狗小碗',
                        imgUrl: 'https://static.wixstatic.com/media/84770f_6264810d5d5149f5843345861de980dc~mv2_d_1920_1920_s_2.jpg/v1/fill/w_372,h_372,al_c,q_80,usm_0.66_1.00_0.01/84770f_6264810d5d5149f5843345861de980dc~mv2_d_1920_1920_s_2.webp',
                        price: 'NT $300',
                        id: 0
                    },
                    {
                        title: '球球玩具',
                        imgUrl: 'https://static.wixstatic.com/media/84770f_27102e864f2544e2b22efc83a096eede~mv2_d_1920_1920_s_2.jpg/v1/fill/w_372,h_372,al_c,q_80,usm_0.66_1.00_0.01/84770f_27102e864f2544e2b22efc83a096eede~mv2_d_1920_1920_s_2.webp',
                        price: 'NT $300',
                        id: 1
                    },
                    {
                        title: '狗狗骨頭',
                        imgUrl: 'https://static.wixstatic.com/media/82fcd3_53b45a3597d34ef48b288c386a81b3a0~mv2_d_1920_1920_s_2.jpg/v1/fill/w_372,h_372,al_c,q_80,usm_0.66_1.00_0.01/82fcd3_53b45a3597d34ef48b288c386a81b3a0~mv2_d_1920_1920_s_2.webp',
                        price: 'NT $300',
                        id: 2
                    },
                    {
                        title: '老鼠玩具',
                        imgUrl: 'https://static.wixstatic.com/media/82fcd3_270fc58ffa4f4ecb9e6b91ee2958f619~mv2_d_1920_1920_s_2.jpg/v1/fill/w_372,h_372,al_c,q_80,usm_0.66_1.00_0.01/82fcd3_270fc58ffa4f4ecb9e6b91ee2958f619~mv2_d_1920_1920_s_2.webp',
                        price: 'NT $300',
                        id: 3
                    },
                ]
            }

        },
        methods: {
            addCart(product) {
                this.$store.commit("addCart", product)
                alert('已成功加入購物車！')
            }
        }
    }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: rgba(243, 243, 243, 0.747);
}
ul li{
	list-style-type:none;
}
a {
    text-decoration: none;
    color: black;
}
.hr {
    width:90%;
    margin: auto;
    margin-bottom: 20px;
}
.products-container {
    display: flex;
    justify-content: space-evenly;
}
.back {
    background-color: #ccc; 
    width: 100%;
    height: 100%;
}
.product {
    text-align: center;
    margin: auto;
    margin-bottom: 50px;
}
.product-head {
    font-weight: bolder;
    font-size: 1.3rem;
}
.line {
    width:30px;
    margin: auto;
    background-color: black;
    border: none;
    height: 1.5px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.product img {
    width:80%;
    border: 1px black solid;
}

.product img:hover {
    cursor: pointer;
}


.add-cart {
    width:150px;
    height: 35px;
    background-color: black;
    color: white;
    margin-top: 10px;
}
.add-cart:hover {
    cursor: pointer;
}

@media screen and (max-width:768px) {
    .products-container {
        display: flex;
        flex-wrap: wrap;
    }
    .product {
        width: 50vw;
    }
}
</style>