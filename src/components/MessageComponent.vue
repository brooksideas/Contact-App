<template>
<div>
    <h1>{{header}}</h1>

</div>
</template>


<script>
export default {
 name:'Message Component',
 props: {
     header: {
         type: String,
         requried: false,
         default: ''
     }
 } 
}
</script> 