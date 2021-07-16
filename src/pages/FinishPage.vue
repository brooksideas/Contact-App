<template>
<div>  
  <div>
     <MessageComponent :header="message"/>
    <h2> Submitted Data </h2>
     <p>EMAIL: {{$store.state.email}} </p>
     <p @childChangeEvent="updateParent" >First Name : {{$store.state.firstName}} </p>
     <p>lastName: {{$store.state.lastName}} </p>
     <p> Job Title:  {{$store.state.jobTitle}}</p> 
      <p> Bio: {{$store.state.bio}} </p>    
  </div>
 
</div>
  
</template> 

<script>
import MessageComponent from '@/components/MessageComponent';
export default {
    name: 'finish',
    components: {
        MessageComponent
    },
    data:()=> ({
        message: 'Thank you'
    }),
}
</script>