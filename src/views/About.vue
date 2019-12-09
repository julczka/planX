<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>

       <b-button
       class="blue animation"
       >Hello how are you</b-button>

      <!-- <v-button bText="go home" bColor="aqua"></v-button>
      <v-button bText="dog is cute" bColor="yellow"></v-button>
      <v-button bText="i love Pindsvin" bColor="red"></v-button> -->
     
    </div>
  </div>
</template>


<script>


import blinkingButton from '@/components/blinkingButton.vue'


export default {
  components: { 
    
     'b-button':blinkingButton
    }
}
</script>



<style lang="scss" scoped>

.about {
  height: 100%;
  
  
}

h1:hover {
  color:green
}


</style>
