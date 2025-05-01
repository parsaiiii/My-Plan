<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid sticky-to">
      <a class="navbar-brand" href="#">My Plans</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/home" class="nav-link">Go to Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/create" class="nav-link"
              >Go to Create Tab</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br />
  <section>
    <RouterView />
  </section>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1020;
  width: 100%;
  background-color: #0dcaf0;
  color: white;
  padding: 10px;
  text-align: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  opacity: 0.98;
}
</style>
