<template>
  <button @click="grtUser">run</button>
  <div>
    <h2>user list</h2>
    <p v-if="isLodeng">loading ...</p>
    <p v-if="error">{{ error }}</p>
    <ul v-show="!isLodeng && !error">
      <li v-for="user in usersr" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "../api";

export default {
  data() {
    return {
      usersrr: [],
      isLodeng: true,
      error: null,
      getU: "",
    };
  },
  methods: {
    async grtUser() {
      try {
        this.getU = await axios.get("/users");
        this.usersr = this.getU.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLodeng = false;
      }
    },
  },
};
</script>

<style></style>
