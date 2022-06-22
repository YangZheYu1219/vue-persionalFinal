<template>
  <Navbar/>
  <Carousel/>
  <Container/>
  <Products/>
  <Brands/>
  <Footer/>
</template>

<script>
  import Navbar from '../components/NavbarComponent.vue'; 
  import Carousel from '../components/CarouselComponent.vue'
  import Container from '../components/ContainerComponent.vue'
  import Products from '../components/ProductsComponent.vue'
  import Brands from '../components/BrandsComponent.vue'
  import Footer from '../components/FooterComponent.vue'
  

  export default {
    name: 'HomeView',
    components: {
      Navbar,
      Carousel,
      Container,
      Products,
      Brands,
      Footer,
    }
  }
</script>
