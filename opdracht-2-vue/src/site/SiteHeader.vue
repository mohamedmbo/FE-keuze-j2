<script setup>
const links = ['Home', 'About', 'Services', 'Projects', 'News', 'Contact']
</script>

<template>
  <header>
    <div class="container">
      <div class="row align-items-center g-3 py-3">
        <a href="#" class="col-12 col-md-4 logo fs-2 fw-normal text-dark">
          <span class="text-accent">▥</span> Build<b class="text-accent">Icon</b>
          <small class="d-block text-uppercase text-body">Construction company</small>
        </a>
        <div class="col-6 col-md-3 d-flex align-items-center gap-2 small text-uppercase info">
          <span class="text-accent fs-2">☎</span>
          <div>Custom support &amp; sale<strong class="d-block text-dark">+31 6 1234 5678</strong></div>
        </div>
        <div class="col-6 col-md-3 d-flex align-items-center gap-2 small text-uppercase info">
          <span class="text-accent fs-2">◷</span>
          <div>Working time<strong class="d-block text-dark">Mon–Sat: 08:00–18:00</strong></div>
        </div>
        <div class="col-12 col-md-2 text-md-end">
          <a href="#contact" class="btn btn-dark">✉ Request a quote</a>
        </div>
      </div>

      <nav class="navbar navbar-expand-md bg-accent p-0">
        <button class="navbar-toggler text-white fw-bold border-0 rounded-0" type="button"
          data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-label="Menu">
          ☰ Menu
        </button>
        <div id="mainNav" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li v-for="(l, i) in links" :key="l" class="nav-item">
              <a href="#" class="nav-link px-3 text-white text-uppercase fw-bold" :class="{ active: i === 0 }">{{ l }}</a>
            </li>
          </ul>
        </div>
        <span class="text-white fs-4 px-3 ms-auto">⌕</span>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.logo small { font-size: 9px; letter-spacing: .15em; }
.info { font-size: 11px !important; }
.nav-link { font-size: 11px; letter-spacing: .05em; transition: background .25s; }
.nav-link:hover, .nav-link.active { background: var(--dark); color: #fff; }
</style>
