
<template>
     <button :class="['main-button', color, animation]">
       <slot></slot>
     </button>
</template>


<script>
export default{

name: 'b-button',

  props: {
    color: String,
    animation: Boolean
  }
   
};
</script>


<style lang="scss" scoped>


.main-button {
  
  display: flex;
  align-items: center;
  justify-content: center;
  height:2.5em;
  border: 0;
  font-size:1rem;
  padding: .5em 1.5em;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  position:relative;
  
  
}

.animation {
&:after {
    
    content: '';
    display:block;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    border-radius:3px;
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    // animation-timing-function: cubic-bezier(1, 0, 0, 1);
    animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
}

@keyframes blink {
  0% {
    transform:scale3d(1,1,1);
    opacity: 0.8;
  }
  100% {
    transform:scale3d(1.1,1.3,1.1);
    opacity:0;
  }
}

.purple {
text-shadow:1px 1px 0 #2D2273;
  background: linear-gradient(#5F49F2 30%,#4B39BF);

  &:after {
    background-color:#A093F4;
  }
}

.red {
  text-shadow:1px 1px 0 #731007;
  background: linear-gradient(#F2220F 30%,#BF1A0B);

  &:after {
    background-color:#F46558;
  }
}

.green {
  text-shadow:1px 1px 0 #197349;
  background: linear-gradient(#35F29A 30%,#2ABF7A);

  &:after {
    background-color:#7FF4BE;
  }
}

.blue {
  text-shadow:1px 1px 0 #124B63;
  background: linear-gradient(#29ABE2 30%,#2085B0);

  &:after {
    background-color:#6FC3E8;
  }
}

.yellow {
  text-shadow:1px 1px 0 #735703;
  background: linear-gradient(#F2B807 30%,#BF9106);

  &:after {
    background-color:#F4CB51;
  }
}

</style>