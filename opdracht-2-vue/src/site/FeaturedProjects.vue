<script setup>
import { ref, computed } from 'vue'

const filters = ['All', 'Exterior', 'Interior']
const active = ref('All')
const projects = [
  { cat: 'Exterior', title: 'Amstelveen, Villa Park', img: 'proj1' },
  { cat: 'Exterior', title: 'Utrecht, Urban Villa', img: 'proj2' },
  { cat: 'Exterior', title: 'Rotterdam, Pool Villa', img: 'proj3' },
  { cat: 'Interior', title: 'Zeist, Open Living Room', img: 'proj4' },
  { cat: 'Interior', title: 'Haarlem, Kitchen Renovation', img: 'proj5' },
  { cat: 'Exterior', title: 'Almere, Modern Townhouse', img: 'proj6' },
]
const shown = computed(() => active.value === 'All' ? projects : projects.filter(p => p.cat === active.value))
</script>

<template>
  <section class="projects">
    <h2 class="h6 text-center text-uppercase pt-4 pb-2 mb-0">Featured Projects</h2>
    <ul class="nav justify-content-center pb-3">
      <li v-for="f in filters" :key="f" class="nav-item">
        <button class="btn btn-link filter" :class="{ on: f === active }" @click="active = f">{{ f }}</button>
      </li>
    </ul>

    <div class="row g-0">
      <a v-for="p in shown" :key="p.img" href="#" class="item col-6 col-lg-4 position-relative overflow-hidden d-block">
        <img :src="`/img/${p.img}.jpg`" :alt="p.title" loading="lazy" class="w-100" />
        <div class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center text-white p-2 p-md-4">
          <h3 class="h6 text-white">{{ p.title }}</h3>
          <p class="small d-none d-md-block my-2">This modern project combines quality materials, smart planning and safe execution, delivered on time…</p>
          <span class="more text-accent fw-bold">LEARN MORE ›</span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.projects { background: var(--light); }
.filter { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; color: var(--dark); }
.filter.on, .filter:hover { color: var(--accent); }
.item img { aspect-ratio: 7 / 5; object-fit: cover; transition: transform .6s; }
.item:hover img { transform: scale(1.08); }
.overlay { background: rgba(31,42,48,.88); opacity: 0; transition: opacity .35s; }
.item:hover .overlay, .item:focus-visible .overlay { opacity: 1; }
.more { font-size: 10px; }
</style>
