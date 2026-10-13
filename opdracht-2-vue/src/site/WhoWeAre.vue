<script setup>
const cards = [
  { img: '/img/card1.jpg', title: 'Construction', text: 'We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.' },
  { img: '/img/card2.jpg', title: 'About us', text: 'BuildIcon is a completely client-oriented company. We are able to meet schedule deadlines with top quality.' },
  { img: '/img/card3.jpg', title: 'Effective teamwork', text: 'We have a very good team-based and teamwork attitude, working together to find the best solutions.' },
]
</script>

<template>
  <section class="who py-5">
    <div class="container">
      <div class="row g-4">
        <div v-for="c in cards" :key="c.title" class="col-12 col-md-4">
          <article class="card h-100 border-0 rounded-0">
            <div class="pic overflow-hidden">
              <img :src="c.img" :alt="c.title" loading="lazy" class="card-img-top rounded-0" />
            </div>
            <div class="card-body p-4">
              <h3 class="h5 text-uppercase">{{ c.title }}</h3>
              <span class="dash"></span>
              <p class="small">{{ c.text }}</p>
              <a href="#" class="btn btn-accent">Learn more ›</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.who { background: var(--light) repeating-linear-gradient(135deg, transparent 0 8px, rgba(0,0,0,.02) 8px 10px); }
.pic img { aspect-ratio: 4 / 3; object-fit: cover; object-position: center 20%; transition: transform .5s; }
.card:hover .pic img { transform: scale(1.06); }
</style>
