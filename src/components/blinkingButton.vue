<template>
  <button :class="['main-button', color, animation]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "b-button",

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
  height: 2.5em;
  border: 0;
  font-size: 1.2rem;
  padding: 0.5em 1.5em;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  position: relative;
}

.animation {
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
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
    transform: scale3d(1, 1, 1);
    opacity: 0.8;
  }
  100% {
    transform: scale3d(1.1, 1.3, 1.1);
    opacity: 0;
  }
}

.purple {
  text-shadow: 1px 1px 0 #2d2273;
  background: linear-gradient(#5f49f2 30%, #4b39bf);

  &:after {
    background-color: #a093f4;
  }
}

.red {
  text-shadow: 1px 1px 0 #731007;
  background: linear-gradient(#f2220f 30%, #bf1a0b);

  &:after {
    background-color: #f46558;
  }
}

.green {
  text-shadow: 1px 1px 0 #197349;
  background: linear-gradient(#35f29a 30%, #2abf7a);

  &:after {
    background-color: #7ff4be;
  }
}

.blue {
  text-shadow: 1px 1px 0 #124b63;
  background: linear-gradient(#29abe2 30%, #2085b0);

  &:after {
    background-color: #6fc3e8;
  }
}

.yellow {
  text-shadow: 1px 1px 0 #735703;
  background: linear-gradient(#f2b807 30%, #bf9106);

  &:after {
    background-color: #f4cb51;
  }
}

.purple_hover {
  text-shadow: 1px 1px 0 #2d2273;
  background: linear-gradient(#5f49f2 30%, #4b39bf);
  border-radius: 30px;

  &:after {
    background-color: #4b39bf;
  }

  &:hover {
    background: rgb(95, 73, 242);
    background: radial-gradient(
      circle,
      rgba(95, 73, 242, 1) 24%,
      rgba(75, 57, 191, 1) 100%
    );
    color: white;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.3s ease 0.1s;
    transform: scale(1.1);
    box-shadow: black 10px 10px 10px;
    transition-timing-function: ease-out;
  }
}

@media screen and (max-width: 759px) {
  .main-button {
    font-size: 1rem;
  }
}

@media screen and (max-width: 400px) {
  .main-button {
    font-size: 0.7rem;
  }
}
</style>
