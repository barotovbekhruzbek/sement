<template>
<div class="slider">
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
     <div class="logo">
      
       <aos-vue animation="fade-up" :duration="800">
        <div class="title">
        <h1> Biz Sanoatga inovatsiya va osishda yordam beramiz</h1>
       </div>
        </aos-vue>
     </div>
    </SplideSlide>
    <SplideSlide>
       <div class="logo2">
        <aos-vue animation="fade-up" :duration="2000">
        <div class="title">
        <h1> Biz Sanoatga inovatsiya va osishda yordam beramiz</h1>
       </div>
        </aos-vue>
       </div>
    </SplideSlide>
    <SplideSlide>
       <div class="logo3">
        <aos-vue >
        <div class="title">
        <h1> Biz Sanoatga inovatsiya va osishda yordam beramiz</h1>
       </div>
        </aos-vue>
       </div>
    </SplideSlide>
  </Splide>
</div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    components: {
        Splide,
    SplideSlide,
    }
}
</script>

<style lang="scss" scoped>
.slider {
    padding-top: 35px;
}
    .logo {
        width: 100%;
        height: 100%;
        background: url("../../../assets/images/slider/slider1\ \(2\).jpg");
        min-height: 90vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    .logo2 {
        width: 100%;
        background: url("../../../assets/images/slider/img5.png");
        height: 90vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        
    }
    .logo3 {
        width: 100%;
        background: url("../../../assets/images/slider/slider1\ \(1\).jpg");
        height: 90vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      
        
    }
    .title {
        padding-top: 60vh;
        
        h1 {
            background: #000;
            opacity: 0.7;
             color: white;
             padding-left: 5rem;
             padding-top: 1rem;
             padding-bottom: 1rem;
             
   }
    }

</style>