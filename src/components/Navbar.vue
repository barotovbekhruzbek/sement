<template>
<header>
    <div class="container">
          <div class="navbar">
    <div class="logo">
        <h1>Buxoro Euro Sement</h1>
    </div>
    <div class="menu-link">
        <div>
            <h5> <i class="fas fa-location-arrow"></i> {{$t('location')}}</h5>
            <h5><i class="fas fa-envelope"></i>info@buxorosement.uz</h5>
        </div>
        <div>
            <h5><i class="fas fa-phone"></i> 24/7  {{$t('contact')}} +998991234567</h5>
            <h5><i class="fa-brands fa-telegram"></i> {{$t('contact')}} +9981234567</h5>
        </div>
    </div>
    <div class="social-icons">
        <ul>
            <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-whatsapp"></i></a></li>
            <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
    </div>
    <div class="languages">
        <button @click="$i18n.locale ='uz'">Uzbek</button>
       <button @click="$i18n.locale ='ru'">Russian</button>
    </div>
  </div>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 105px;
    background: #437E4A;
}
.container {
    max-width: 1440px;
    margin: 0 auto;
    @media (max-width:1400px) {
            max-width: 900px;
    }
}
.navbar {
    padding-top: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    @media (max-width:1400px) {

    }
    .menu-link {
        color: #FFF;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px;
        @media (max-width:1400px) {
            display: none;
        }
        div {
            display: flex;
            gap: 25px;
            h5 {
                i{
                   margin-right: 10px;
                }
            }
        }
    }
    .social-icons {
        ul {
            display: flex;
            list-style: none;
            gap: 15px;
            li {
                a {
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
    .languages {
        display: flex;
        gap: 10px;
        button {
            color: white;
            background-color: transparent;
            border: 1px solid;
            border-radius: 8px;
            padding: 4px 8px;
        }
    }
}

</style>