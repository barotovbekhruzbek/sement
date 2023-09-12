<template>
  <div class="lab-about">
    <div class="title">
        Qurilish Kompaniyalari Uchun Raqobatbardosh Mahsulotlar
    </div>
    <div class="title-lab">
        Laboratoriya sinovi EN 197
    </div>
    <div class="gost">
        Islab chikarilayotgan sement mahsoloti O`zDst 761-96, GOST 31108-2020, GOST 30515-2015 meyoriy hujjatlarga mos keladi.
    </div>
  </div>

  <div class="container">
    <div class="lab-about-title">
    <div class="left-content">
        <p>Sement zavodida texnalogig jarayanlar  yoqori darajada avtomatlashtirilgan zamonaviy jixozlar
ornatilgan.</p>
        <p>Sement zavodida texnalogig jarayanlar  yoqori darajada avtomatlashtirilgan zamonaviy jixozlar
ornatilgan.</p>
        <p>Sement zavodida texnalogig jarayanlar  yoqori darajada avtomatlashtirilgan zamonaviy jixozlar
ornatilgan.</p>
        <p>Sement zavodida texnalogig jarayanlar  yoqori darajada avtomatlashtirilgan zamonaviy jixozlar
ornatilgan.</p>
        <p>Sement zavodida texnalogig jarayanlar  yoqori darajada avtomatlashtirilgan zamonaviy jixozlar
ornatilgan.</p>
        <p>Sement zavodida texnalogig jarayanlar  yoqori darajada avtomatlashtirilgan zamonaviy jixozlar
ornatilgan.</p>
    </div>
    <div class="right-content">
        <img src="../../../assets/images/card-sement/lab.jpg" alt="">
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .lab-about {
        padding-top: 50px;
        color: #28211A;
        text-align: center;
        font-family: Nunito;
        font-size: 14px;
        font-style: normal;
        font-weight: 800;
        line-height: 14px; /* 100% */
        letter-spacing: 4px;
        text-transform: uppercase;
    }
    .title-lab {
        padding-top: 30px;
        color: #28211A;
        text-align: center;
        font-family: Nunito Sans;
        font-size: 23.8px;
        font-style: normal;
        font-weight: 800;
        line-height: 23.8px; /* 100% */
    }
    .gost {
        padding-top: 30px;
        padding-bottom: 50px;
        color: #000;
        text-align: center;
        font-family: Nunito Sans;
        font-size: 15.4px;
        font-style: normal;
        font-weight: 400;
        line-height: 26.18px; /* 170% */
    }
    .container{
        max-width: 1440px;
        margin: 0 auto;

        .lab-about-title {
            display: flex;
            justify-content: space-around;
            align-items: center;
            .left-content {
                padding: 4rem;
                color: #000;
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 29.4px; 
            }
            .right-content {
                padding: 2rem;
                width: 400px;
                height: 400px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
     
}
</style>