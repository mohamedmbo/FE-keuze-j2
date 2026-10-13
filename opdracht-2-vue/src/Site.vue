<script setup>
import SiteHeader from './site/SiteHeader.vue'
import HeroSlider from './site/HeroSlider.vue'
import CtaBar from './site/CtaBar.vue'
import WhoWeAre from './site/WhoWeAre.vue'
import FeaturedProjects from './site/FeaturedProjects.vue'
import SiteFooter from './site/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSlider />
    <CtaBar />
    <WhoWeAre />
    <FeaturedProjects />
  </main>
  <SiteFooter />
</template>
