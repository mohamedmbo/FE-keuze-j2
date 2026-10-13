<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Carousel } from 'bootstrap'

const slides = [
  { img: '/img/hero1.jpg', kicker: 'High quality guaranteed', title: 'Constructing\nIs Our Life Business' },
  { img: '/img/hero2.jpg', kicker: 'Safe & reliable', title: 'Building Tomorrow\nWith Precision' },
  { img: '/img/hero3.jpg', kicker: 'Experts since 1998', title: 'Solid Work\nFrom Ground Up' },
  { img: '/img/hero4.jpg', kicker: 'On time, every time', title: 'Teamwork\nBuilds Results' },
]

// Bootstrap carousel is standaard oneindig (wrap: true)
const el = ref(null)
let carousel
onMounted(() => {
  carousel = new Carousel(el.value, { interval: 6000, ride: 'carousel', wrap: true })
})
onBeforeUnmount(() => carousel?.dispose())
</script>

<template>
  <section id="heroCarousel" ref="el" class="carousel slide carousel-fade">
    <div class="carousel-indicators">
      <button v-for="(s, i) in slides" :key="i" type="button" data-bs-target="#heroCarousel"
        :data-bs-slide-to="i" :class="{ active: i === 0 }" :aria-label="`Slide ${i + 1}`"></button>
    </div>

    <div class="carousel-inner">
      <div v-for="(s, i) in slides" :key="i" class="carousel-item" :class="{ active: i === 0 }"
        :style="{ backgroundImage: `url(${s.img})` }">
        <div class="slide d-flex align-items-center">
          <div class="container">
            <span class="dash"></span>
            <p class="kicker text-uppercase fw-semibold small mb-0">{{ s.kicker }}</p>
            <h1 class="display-5 fw-normal my-3">{{ s.title }}</h1>
            <div class="d-flex flex-wrap gap-1">
              <a href="#" class="btn btn-accent">Our services ›</a>
              <a href="#" class="btn btn-dark">About us ›</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev arrow" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" aria-label="Previous">‹</button>
    <button class="carousel-control-next arrow" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" aria-label="Next">›</button>
  </section>
</template>

<style scoped>
.carousel-item { background-size: cover; background-position: center; }
.slide { min-height: 380px; position: relative; }
.slide::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(255,255,255,.92) 0%, rgba(255,255,255,.55) 55%, rgba(255,255,255,0) 100%); }
.slide .container { position: relative; padding-top: 40px; padding-bottom: 50px; }
.kicker { color: var(--dark); }
h1 { white-space: pre-line; }
.arrow { width: 32px; height: 44px; top: 50%; bottom: auto; transform: translateY(-50%); opacity: 1; background: rgba(31,42,48,.6); color: #fff; font-size: 24px; border: 0; transition: background .25s; }
.arrow:hover { background: var(--accent); }
.carousel-control-prev { left: 0; }
.carousel-control-next { right: 0; }
.carousel-indicators [data-bs-target] { width: 10px; height: 10px; border-radius: 50%; border: 0; background-color: var(--dark); margin: 0 4px; }
.carousel-indicators .active { background-color: var(--accent); }

@media (min-width: 768px) { .slide { min-height: 480px; } .carousel-control-prev { left: 15px; } .carousel-control-next { right: 15px; } }
@media (min-width: 992px) { .slide { min-height: 620px; } h1 { font-size: 3.5rem; } }
</style>
