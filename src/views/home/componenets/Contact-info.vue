<template>
   <div class="contact-info">
  
    <div class="container">
        <aos-vue animation="fade-up" :duration="500">
        <div class="title">
            Bizning ustunliklarimiz
        </div>
        <div class="wrapper">
            <div class="box">
                <div class="logo">
                    <img src="../../../assets/images/card-sement/person.png" alt="">
                </div>
                <div class="content">
                    <h3>О'z sohasidagi
mutaxassislar</h3>
                </div>
            </div>
            <div class="box">
                <div class="logo">
                    <img src="../../../assets/images/card-sement/cars.png" alt="">
                </div>
                <div class="content">
                    <h3>Yetkazib berish xizmati</h3>
                </div>
            </div>
            <div class="box">
                <div class="logo">
                    <img src="../../../assets/images/card-sement/xodim.png" alt="">
                </div>
                <div class="content">
                    <h3>600 dan ortiq xodimlar</h3>
                </div>
            </div>
        </div>
    </aos-vue>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container{
        max-width: 1440px;
        margin: 0 auto;
     
}
.title {
    padding-top: 50px;
    text-align: center;
    font-size: 30px;
    padding-bottom: 25px;
}
.wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;
}
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:8px;
}
</style>