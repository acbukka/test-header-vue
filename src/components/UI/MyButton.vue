<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style lang="scss" scoped>
.btn {
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border-radius: 5px;
  padding: 9px 10px;
  color: gray;
  border: 1px solid gray;
  transition: all .2s;
  z-index: 3;
  &:hover {
    border: 1px solid black;
    color: black;
  }
}
</style>