<template>
  <nav>
    <div class="container">
        <div class="menu-link">
            <ul>
                <li><a href="">{{$t('home')}}</a></li>
                <li><a href="">{{ $t('product') }}</a></li>
                <li><a href="">{{ $t('curier') }}</a></li>
                <li><a href="">{{ $t('about') }}</a></li>
                <li><a href="">{{ $t('elon') }}</a></li>
                <li><a href="">{{ $t('contact') }}</a></li>
            </ul>
        </div>
        <div class="btn" @click="isOpen =true"><i class="fas fa-bars"></i></div>
      
    </div>
    <div class="mobile-menu" :class="{ active : isOpen }">
        <button @click="isOpen =false"><i class="fas fa-xmark"></i></button>
            <ul>
                <li><a href="">{{$t('home')}}</a></li>
                <li><a href="">{{ $t('product') }}</a></li>
                <li><a href="">{{ $t('curier') }}</a></li>
                <li><a href="">{{ $t('about') }}</a></li>
                <li><a href="">{{ $t('elon') }}</a></li>
                <li><a href="">{{ $t('contact') }}</a></li>
            </ul> 
        </div>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        max-width: 1440px;
        margin: 0 auto;
        @media (max-width:1400px) {
            max-width: 900px;
    }

    }
    nav {
        width: 100%;
        height: 70px;
        @media(max-width:1400px) {
            height: 40px;
        }
    }
    .menu-link {
        @media (max-width:1400px) {
            display: none;
    }
        ul {
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            list-style: none;
            li {
                a {
            color: #437E4A;
            font-size: 1.3rem;
            text-decoration: none;
            margin-top: 1em;
            display: inline-block;
            font-weight: bold;
            padding: .5em;
            margin-left: -.5em;
            position: relative;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    &:before, &:after {
        position: absolute;
        content: '';
        border-bottom: 3px solid #437E4A;
        border-radius: 1em;
        bottom: .3em;
        transition: transform .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:before {
        width: 1em;
        transform-origin: left;
    }

    &:after {
        width: 82%;
        left: 1em;
        transform: translateX(110%);
    }

    &:hover:before {
        transform: scaleX(0.3);
    }

    &:hover:after {
        transform: translateX(0);
    }

}
            }
        }
    }

    .mobile-menu {
        position: absolute;
        z-index: 11;
        top:0px;
        background: #437E4A;
        padding: 4rem;
        transition-duration: 2s;
        
        transform: translateX(-1000px);
        &.active {
            transition: 1s linear;
            transform: translateX(0px);
        }
        button{
            background: transparent;
            color: white;
            border: none;
            float: right;
            font-size: 18px;
        }
        ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 30px;
            li{
                a{
                    text-decoration: none;
                    color: white;
                    font-size: 20px;
                }
            }
        }
    }
    .btn {
        padding-top: 20px;
        font-size: 22px;
    }
</style>