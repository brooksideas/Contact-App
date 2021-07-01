<template>
  <div id="contact-form">
    <h2>Contact Form</h2>
    <p>{{$store.state}}</p>
    <form id="app" @submit.prevent="submitContactForm" action="/thanks" method="post">
    <p>EMAIL: {{email}} </p>
      Email : <input v-model="email"  placeholder="Email"
      
      
       /><br />
      First Name : <input v-model="firstName" placeholder="firstName" readonly /> <br />
      Last Name: <input v-model="lastName" placeholder="lastName" readonly /><br />
      <br />
      Job Title: <input v-model="jobTitle" placeholder="job title" type="text"  @change="jobChange(jobTitle)" /><br />
       <br />
     Bio:  <textarea v-model="bio" placeholder="Biography" type="text"  @change="bioChange(bio)" /><br /><br />
    <input  type="submit" value="submit"  @click="submitContactForm()"/>
     <input type="" hidden v-if="email === ''?initialValues:''"> 
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: "contact-form",
  created(){
    console.log('Email IN ->',this.$store.state); 
    this.populateUser();
  },
  computed: {
    ...mapGetters(['initialValues']),
    ...mapState({
       emailAddress: state => state.email,
       firstNameState: state => state.firstName,
       lastNameState: state => state.lastName,

    }),
    initialValues () {
        console.log('initialValues called');
    return this.$store.getters.initialValues
  }
  },
  data:()=>({
    email: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    bio: '',
  }),
  methods: {
    ...mapActions(['changeEmailAddress', 'changeJobTitle', 'changeBio']),
    populateUser(){
      console.log('Email POP', this.emailAddress,  this.firstNameState,  this.lastNameState);
      if(this.emailAddress === ''){
        this.changeEmailAddress(this.email);
      }else {
      this.email = this.emailAddress;
      }
      this.firstName = this.firstNameState;
      this.lastName = this.lastNameState;

    },
    emailChange(email){
      alert('key UP');
      console.log('passing comp', email);
      
      this.changeEmailAddress(email);
    },
    jobChange(jobTitle){
      this.changeJobTitle(jobTitle);

    },
    bioChange(bio){
      this.changeBio(bio);

    },
    submitContactForm() {
      console.log('This submit->', this.email, this.firstName, this.lastName,  this.jobTitle, this.bio  );
    },
  },
};
</script>