<template>
  <div
    class="card text-bg-info shadow-lg carf"
    v-for="(plan, index) in plans"
    :key="index"
  >
    <h5 class="card-header">
      {{ plan.title }}
    </h5>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p class="d-inline capshin">
          {{ plan.description }}
        </p>
        <button
          type="button"
          class="btn btn-outline-danger d-inline btns"
          @click="deleteplan(index)"
        >
          Delete
        </button>
        <footer class="blockquote-footer time">Day {{ plan.time }}</footer>
      </blockquote>

      <div class="form-check d-inline">
        <input
          class="check form-check-input"
          type="checkbox"
          id="checkChecked"
          checked
          v-model="plan.workDone"
        />
        <label for="checkChecked"> Work Done </label>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  data() {
    return {
      plans: computed(() => JSON.parse(localStorage.getItem("myPlans"))),
    };
  },
  methods: {
    deleteplan(index) {
      this.plans.splice(index, 2);
      console.log(this.plans);
      localStorage.setItem("myPlans", JSON.stringify(this.plans));
      window.location.reload();
    },
  },
};
</script>

<style>
body {
  color: #fff;
}
.time {
  margin: 0.5px;
}
.btns {
  position: absolute;
  right: 20px;
}
.check {
  position: absolute;
  left: 42px;
  display: inline;
  width: 1rem;
  margin-bottom: 125rem;
  border-radius: 50%;
}
.carf {
  margin-bottom: 20px;
}
</style>
