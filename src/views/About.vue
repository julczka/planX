<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>

       <b-button
       class="animation"
       >Hello how are you</b-button>

      <v-button bText="go home" bColor="aqua"></v-button>
      <v-button bText="dog is cute" bColor="yellow"></v-button>
      <v-button bText="i love Pindsvin" bColor="red"></v-button>
     
    </div>
  </div>
</template>


<script>

import Button from '@/components/Button.vue'
import blinking_button from '@/components/blinking_button.vue'


export default {
  components: { 
    'v-button': Button,
    'b-button': blinking_button
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
