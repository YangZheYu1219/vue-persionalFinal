<template>
  <div class="navbar1 dropdowns navFixed shadow">
    <div class="navbar-top">
      <div class="left-nav1">
        <a href="#"><i class="fa-solid fa-paw"></i></a
        ><a class="a" href="">PETS</a>
      </div>
      <div class="right-nav1">
        <input type="text" placeholder="Search" class="search" />
        <div class="call">
          <strong>Call Us</strong>
          <br />
          123-456-7890
        </div>
        <div class="hamburger">
          <ul class="fa-solid fa-burger">
            <div class="hamburgerContainer">
              <a class="a" href="#"><li>Dogs</li></a>
              <a href=""><li>Cats</li></a>
              <a href=""><li>Birds</li></a>
              <a href=""><li>Smalls</li></a>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div class="navbar-bottom">
      <div class="left-nav2">
        <a class="a" href="">Dogs</a>
        <a class="a" href="">Cats</a>
        <a class="a" href="">Birds</a>
        <a class="a" href="">Small animals</a>
      </div>
      <div class="right-nav2">
        <router-link to="/login" class="a" href=""
          ><i class="fa-solid fa-circle-user"></i
          ><span class="log"> Log in</span></router-link
        >
        <router-link to="/signup" class="a" href=""
          ><span class="log">Sign up</span></router-link
        >
        <span class="showCartContainer">
          <div class="cartValueContainer">
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="showCartValue">{{ cart.length }}</div>
          </div>
          <div class="cart-style">
            <div class="cart-head">Cart</div>

            <ul class="showCartList">
              <ul class="products-container">
                <li
                  class="product product1"
                  :key="index"
                  v-for="(data, index) in cart"
                >
                  <img :src="data.imgUrl" />
                  <p class="product-head">{{ data.title }}</p>
                  <hr class="line" />
                  <p>{{ data.price }}</p>
                  <button @click="remove(data)" class="add-cart">
                    Remove to Cart
                  </button>
                </li>
              </ul>
            </ul>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      remove(data) {
          console.log(data)
          for(let i=0; i<this.cart.length; i++) {
              if(this.cart[i].id == data.id) {
                  this.$store.commit('remove', i)
              }
          }
      }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
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
.a {
  text-decoration: none;
  color: black;
}
.hr {
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
}
.shadow {
  box-shadow: 0 2px rgba(0, 0, 0, 0.3);
}
ul {
  list-style: none;
}

.navbar1 {
  background-color: #fff;
}
.navFixed {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 0;
  min-width: 100%;
  opacity: 0.94;
}
.left-nav1 {
  margin-top: 10px;
}
.left-nav1 a {
  font-size: 2.5rem;
  color: rgb(252, 105, 48);
}
.navbar-top {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.right-nav1 {
  display: flex;
}
.search {
  border-radius: 20px;
  height: 40px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px;
}
.call {
  background-color: rgb(252, 105, 48);
  padding: 10px;
  text-align: center;
}
.navbar-bottom {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.left-nav2 {
  padding: 10px;
}
.left-nav2 a {
  font-size: 1.4rem;
  font-weight: bolder;
  color: black;
  margin: 0 40px 0px 20px;
}
.left-nav2 a:hover {
  color: rgb(40, 214, 185);
}
.right-nav2 {
  padding: 10px;
  display: flex;
}
.right-nav2 a {
  font-size: 1.5rem;
  font-weight: bolder;
  color: black;
  margin: 0 30px 0px 10px;
}
.log {
  color: rgb(252, 105, 48);
}
.fa-cart-shopping {
  font-size: 1.5rem;
}
.cartValueContainer {
  display: flex;
  margin-top: 5px
}
.showCartValue {
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  background: rgb(248, 70, 70);
  text-align: center;
  line-height: 1.2rem;
  color: #fff;
}
.cart-style {
  display: none;
  background: white;
  position: absolute;
  top: 30px;
  right: 0;
  width: 300px;
  max-height: 70vh;
  /*不知為甚麼會被壓在下面*/
  z-index: 10;
  overflow: scroll;
  margin-top: 100px;
}
.cart-head {
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 2rem;
  margin-bottom: 10px;
}
.showCartContainer:hover .cart-style {
  display: block;
}
.showCartContainer:hover .cart-head {
  display: block;
}
.hamburger {
  display: none;
  font-size: 3rem;
  color: rgb(226, 156, 72);
}
.hamburger li {
  font-size: 1rem;
  color: burlywood;
  margin-bottom: 20px;
}

.hamburgerContainer {
  display: none;
  background-color: rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 80px;
  right: 0;
  height: 150px;
  width: 100px;
  /*不知為甚麼會被壓在下面*/
  z-index: 10;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .navbar-top .search {
    display: none;
  }
  .navbar-top .call {
    display: none;
  }
  .hamburger {
    display: block;
  }
  .left-nav2 {
    display: none;
  }
  .cart-style {
    width: 180px;
  }
  .cart-head {
    display: block;
  }
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
</style>