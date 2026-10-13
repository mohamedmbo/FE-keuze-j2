<script setup>
const top = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <footer id="contact" class="position-relative bg-dark text-secondary pt-5 pb-3 mt-4">
    <div class="container small">
      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-4"><h3 class="h6 text-white text-uppercase">BuildIcon</h3><p class="mb-0">Construction company building projects that last.</p></div>
        <div class="col-12 col-md-6 col-lg-4"><h3 class="h6 text-white text-uppercase">Contact</h3><p class="mb-0">Bouwstraat 12, Utrecht<br />+31 6 1234 5678<br />info@buildicon.example</p></div>
        <div class="col-12 col-lg-4"><h3 class="h6 text-white text-uppercase">Hours</h3><p class="mb-0">Mon–Sat: 08:00–18:00</p></div>
      </div>
      <p class="text-center mt-4 mb-0">© 2026 BuildIcon. School project.</p>
    </div>
    <button class="btn btn-accent position-absolute end-0 me-3 top-top" @click="top">↑ Top</button>
  </footer>
</template>

<style scoped>
footer { background: var(--dark) !important; }
.top-top { top: -32px; padding: .5rem 1rem; }
</style>
