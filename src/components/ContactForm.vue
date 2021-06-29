<template>
  <div id="contact-form">
    <h2>Contact Form</h2>
    <form id="app" @submit="submitContactForm" action="/thanks" method="post">
      Email : <input v-model="email" placeholder="Email" readonly /><br />
      First Name : <input v-model="firstName" placeholder="firstName" readonly /> <br />
      Last Name: <input v-model="lastName" placeholder="lastName" readonly /><br />
      <br />
      Job Title: <input v-model="jobTitle" placeholder="job title" type="text" /><br />
       <br />
     Bio:  <input v-model="bio" placeholder="Biography" type="text" /><br /><br />
    <input  type="submit" value="submit"/>

    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "contact-form",
  created(){
    console.log('Email IN ->', this.$store.state);
    this.populateUser();
  },
  computed: {
    ...mapState({
       emailAddress: state => state.email,
       firstNameState: state => state.firstName,
       lastNameState: state => state.lastName,

    }),
  },
  data:()=>({
    email: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    bio: '',
  }),
  methods: {
    populateUser(){
      this.email = this.emailAddress;
      this.firstName = this.firstNameState;
      this.lastName = this.lastNameState;

    },
    submitContactForm() {

    },
  },
};
</script>