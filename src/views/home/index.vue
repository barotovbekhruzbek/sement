<template>
  <Carusel />
  <SementAbout />
  <contact-info />
  <LabVue/>
</template>

<script>
import Carusel from './componenets/Carusel.vue'
import ContactInfo from './componenets/Contact-info.vue'
import SementAbout from './componenets/SementAbout.vue'
import LabVue from './componenets/Lab.vue'
export default {
    components:{
        Carusel,
        SementAbout,
        ContactInfo,
        LabVue
    }
}
</script>

<style>

</style>