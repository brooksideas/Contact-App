<template>
<div>  
  <div>
    <h2 >Parent Data </h2>
     <p>EMAIL: {{parentEmail}} </p>
     <p>First Name : {{parentFirstName}} </p>
     <p>lastName: {{parentLastName}} </p>
     <p>Job Title: {{parentJob}} </p>
     <p>Bio : {{parentBio}} </p>

  </div>
  <br>
  <hr>
  <ContactForm @childChangeEvent="updateParent" />
</div>
  
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
export default {
    name: "contact-form",
    created(){
     this.parentEmail = this.$store.state.email;
     this.parentFirstName = this.$store.state.firstName;
      this.parentLastName = this.$store.state.lastName;
      this.parentJob = this.$store.state.jobTitle;
      this.parentBio = this.$store.state.bio;
    },
    components:  {
        ContactForm
    },
    data:()=> ({
     parentEmail: '',
     parentFirstName: '',
     parentLastName: '',
     parentJob: '',
     parentBio: '',
    }),
    methods: {
      updateParent(evtName , value){
        console.log('from child' , evtName , value);
        switch(evtName) {
          case 'email':
          return  this.parentEmail = value; 
          case 'firstName':
            return this.parentFirstName = value;
            case 'lastName':
            return this.parentLastName = value;
              case 'job':
            return this.parentJob = value;
              case 'bio':
            return this.parentBio = value;
        }
      }
    }
}
</script>