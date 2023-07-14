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
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .container {
        max-width: 1440px;
        margin: 0 auto;

    }
    nav {
        width: 100%;
        height: 70px;
    }
    .menu-link {
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
</style>