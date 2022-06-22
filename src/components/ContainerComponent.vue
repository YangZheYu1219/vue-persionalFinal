<template>
	<div class="containerA container1">
        <div class="cardA card1">
            <img src="https://i.natgeofe.com/n/3faa2b6a-f351-4995-8fff-36d145116882/domestic-dog_16x9.jpg" alt="dogs">
            <div class="linkA">
                <p class="link-head">Dogs</p>
                <p>I'm a title. Click here to edit me.</p>
                <br>
                <a href="" class="shop a">Shop Now</a>
            </div>
        </div>  
        <div class="cardA card2">
            <img src="http://images.contentful.com/e43mbx7oxv8s/dTeQVZbR72uiYkEAYKyUS/bd3825a93aace2c7b368a7a742b1000f/000122_ZV_SCSW_HeroImages_1900x1024_D1.jpg" alt="">
            <div class="linkA">
                <p class="link-head">Cats</p>
                <p>I'm a title. ​Click here to edit me.</p>
                <br>
                <a href="" class="shop a">Shop Now</a>
            </div>
        </div>
    </div>
    <div class="containerA">
        <div class="cardA card3">
            <img src="https://static.parade.com/wp-content/uploads/2020/06/iStock-983291292.jpg" alt="dogs">
            <div class="linkA">
                <p class="link-head">Birds</p>
                <p>I'm a title. ​Click here to edit me.</p>
                <br>
                <a href="" class="shop a">Shop Now</a>
            </div>
        </div>  
        <div class="cardA card4">
            <img src="https://img.alicdn.com/imgextra/i2/3020390975/TB2zj8PFk9WBuNjSspeXXaz5VXa_!!3020390975-0-daren.jpg" alt="">
            <div class="linkA">
                <p class="link-head">Small animals</p>
                <p>I'm a title. ​Click here to edit me.</p>
                <br>
                <a href="" class="shop a">Shop Now</a>
            </div>
        </div>
    </div>

    <hr class="hr">
</template>

<style scoped>

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		background-color: rgba(243, 243, 243, 0.747);
	}
	.a {
		text-decoration: none;
		color: black;
	}
	.hr {
		width:90%;
		margin: auto;
		margin-bottom: 20px;
	}
	@media screen and (max-width:768px) {
    .containerA {
        display: flex;
        flex-direction: column;
    }
    .cardA img {
        width: 100vw !important;
    }
    .container2 {
        margin-top: -50px;;
    }
    .hamburger {
        display: block;
    }
    .hamburgerContainer {
        display: none;
    }
    .hamburger:hover  .hamburgerContainer{
        display: block;
    }

}


.containerA {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
}
.container1 {
    margin-top: 50px;
}

.cardA {
    position: relative;
}
.cardA img {
    box-shadow: rgba(0, 0, 0, 0.25) 5px 5px 15px;
    opacity: 0.9;
    object-fit: cover;
    transition: 0.5s;
}

.cardA img:hover {
    transform: scale(1.1, 1.1);
}
.linkA {
    position: absolute;
    padding: 15px;
    margin-top: -250px;
    margin-left: 30px;
}
.link-head {
    font-size: 3rem;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgb(40, 214, 185);
}
.shop {
    background-color: rgb(252, 105, 48);
    padding: 15px;
}
.shop:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: rgb(206, 65, 0);
    color: white;
}
.card1 img {
    height: 400px;
    width: 45vw
}
.card2 img {
    height: 400px;
    width: 45vw
}
.card3 img {
    height: 450px;
    width: 55vw
}
.card4 img {
    height: 450px;
    width: 35vw
}

</style>