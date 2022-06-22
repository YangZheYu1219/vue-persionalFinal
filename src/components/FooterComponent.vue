<template>
	 <div class="footer">
        <div class="address">
            <div class="footer-head">
                <p>Address</p>
            </div>
            <div class="footer-body">
                <p>      
                500 Terry Francois Street
                <br>
                San Francisco, CA 94158
                <br>
                Tel: 1234567890
            </p>
            </div>
        </div>
        <div class="footer-product">
            <div class="footer-head">
                <p>Products</p>
            </div>
            <div class="footer-body">
                <p>
                    Dogs
                    <br>
                    Cats
                    <br>
                    Birds
                    <br>
                    Small animals
                </p>
            </div>
        </div>
        <div class="info">
            <div class="footer-head">
                <p>Info</p>
            </div>
            <div class="footer-body">
                <p>
                    Our story
                    <br>
                    Contact
                    <br>
                    Shopping & Returns
                    <br>
                    F&Q
                </p>
            </div>
        </div>
        <div class="media">
            <i class="fa-brands fa-instagram"></i>
            <br>
            <i class="fa-brands fa-youtube"></i>
            <br>
            <i class="fa-brands fa-facebook-f"></i>
        </div>
    </div>
</template>

<style scoped>
	.footer {
    display: flex;
    background-color: rgb(252, 105, 48);
    width: 90%;
    height: 400px;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    justify-content: space-around;
}
.footer-head p {
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: 20px;
}
.footer-body p {
    font-size: 1.3rem;
    line-height: 40px;
}
.media i {
    font-size: 2rem;
    line-height: 50px;
}

@media screen and (max-width:768px) {
    .footer {
        height: 250px;
        padding: 20px;
        margin-top: 20px;
        justify-content:space-evenly;
        line-height: 2rem;
    }
    .footer-product {
        display: none
    }
    .footer-head p {
        font-size: 1.5rem;
        font-weight: bolder;
        margin-bottom: 0px;
    }
    .footer-body p {
        font-size: 1rem;
        line-height: 30px;
    }
    .address {
        border-right: 1px black solid;
        padding: 10px;
    }
    .info {
        border-right: 1px black solid;
        padding: 10px;
    }
    .media {
        padding: 10px
    }

}
</style>