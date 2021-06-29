<template>
  <div>
    <p class="errorClass">{{ errors[0] }}</p>
    <input v-model="email" placeholder="Email" /><br />
    <input v-model="password" placeholder="Password" /><br />
    <button @click="checkForm()">submit</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    email: "",
    password: "",
    errors: [],
  }),
  methods: {
      ...mapActions(['loggedInAction']),
    checkForm() {
      if (this.email !== "" && this.password !== "") { 
          const payload = {
              email: this.email,
              firstName: 'Brook',
              lastName: 'Tarekegn'
          };
          this.loggedInAction({payload});
        this.$router.push({ name: "ContactPage" }); 
      }

      this.errors = [];

      if (this.email === "") {
        this.errors.push("Email is required.");
      }
      if (this.password === "") {
        this.errors.push("password is required.");
      } 
    },
  },
};
</script>
<style scoped>
.errorClass {
  color: red;
}
</style>