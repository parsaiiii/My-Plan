<template>
  <form @submit.prevent="createPlan">
    <label>Title :</label>
    <input v-model="title" type="text" required />
    <label>Description :</label>
    <textarea v-model="description"></textarea>
    <label>Time :</label>
    <input type="tel" class="tel" v-model="time" />
    <button class="btn btn-outline-success">Create Plan</button>
  </form>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      title: "",
      description: "",
      workDone: false,
      time: null,
      router: useRouter(),
      newPlans: "",
    };
  },
  methods: {
    createPlan() {
      this.newPlans = JSON.parse(localStorage.getItem("myPlans")) || [];
      this.newPlans.push({
        title: this.title,
        description: this.description,
        workDone: false,
        time: this.time,
      });
      localStorage.setItem("myPlans", JSON.stringify(this.newPlans));
      alert("Create Plan !");
      this.router.push("/home");
    },
  },
};
</script>

<style>
form {
  background: transparent;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  background: transparent;
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-shadow: border-box;
}
.tel {
  width: 20%;
}
textarea {
  background: transparent;
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-shadow: border-box;
  height: 100px;
}
</style>
