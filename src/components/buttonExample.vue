<template>
  <div class="Button" :style="{ background: bColor }">
    <p>{{ bText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    bText: {
      type: String,
      default: "I am a button"
    },

    bColor: {
      type: String,
      default: "red"
    }
  }
};
</script>

<style lang="scss" scoped>
.Button {
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(2);
  }
}
</style>
