<template>
  <div id="contact-form">
    <h2>Contact Form</h2>
    <p>{{ $store.state }}</p>
    <form id="app" @submit.stop="submitContactForm">
      <p>EMAIL: {{ email }}</p>
      Email :
      <input
        v-model="email"
        placeholder="Email"
        @input="changeEvent('email', email)"
        @keyup.enter="commitEmail(email)"
      /><br />
      First Name :
      <input
        v-model="firstName"
        placeholder="firstName"
        @input="changeEvent('firstName', firstName)"
        @keyup.enter="commitFirst(firstName)"
      />
      <br />
      Last Name:
      <input
        v-model="lastName"
        placeholder="lastName"
        @input="changeEvent('lastName', lastName)"
        @keyup.enter="commitLast(lastName)"
      /><br />
      <br />
      Job Title:
      <input
        v-model="jobTitle"
        placeholder="job title"
        type="text"
        @input="changeEvent('job', job)"
        @keyup.enter="commitJob(jobTitle)"
      /><br />
      <br />
      Bio:
      <textarea
        v-model="bio"
        placeholder="Biography"
        type="text"
        @input="changeEvent('bio', bio)"
      /><br /><br />
      <input type="button" @click="submitContactForm"  value="Submit"/> 
      <input type="" hidden v-if="email === '' ? initialValues : ''" />
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "contact-form",
  created() {
    console.log("Email IN ->", this.$store.state);
    this.populateUser();
  },
  computed: {
    ...mapGetters(["initialValues"]),
    ...mapState({
      emailAddress: (state) => state.email,
      firstNameState: (state) => state.firstName,
      lastNameState: (state) => state.lastName,
    }),
    initialValues() {
      console.log("initialValues called");
      return this.$store.getters.initialValues;
    },
  },
  data: () => ({
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    bio: "",
  }),
  methods: {
    ...mapActions([
      "changeEmailAddress",
      "changeJobTitle",
      "changeBio",
      "changeEmail",
      "changeFirstName",
      "changeLastName",
      "changeJobTitle"
    ]),
    changeEvent(evtName, value) {
      console.log("evet", evtName, value);
      this.$emit("childChangeEvent", evtName, value);
    },
    commitEmail(value) {
      this.changeEmail(value);
    },
    commitFirst(value) {
      this.changeFirstName(value);
    },
    commitLast(value) {
      this.changeLastName(value);
    },
    commitJob(value) {
      this.changeJobTitle(value);
    },
     commitBio(bio) {
      this.changeBio(bio);
    },
    populateUser() {
      console.log(
        "Email POP",
        this.emailAddress,
        this.firstNameState,
        this.lastNameState
      );
      if (this.emailAddress === "") {
        this.changeEmailAddress(this.email);
      } else {
        this.email = this.emailAddress;
      }
      this.firstName = this.firstNameState;
      this.lastName = this.lastNameState;
    },
    emailChange(email) {
      alert("key UP");
      console.log("passing comp", email);

      this.changeEmailAddress(email);
    },
    jobChange(jobTitle) {
      this.changeJobTitle(jobTitle);
    },
   
    submitContactForm() {
      console.log(
        "This submit->",
        this.email,
        this.firstName,
        this.lastName,
        this.jobTitle,
        this.bio
      );
      //handle bio only textarea
      this.$router.push({ name: "FinishPage" });
    },
  },
};
</script>