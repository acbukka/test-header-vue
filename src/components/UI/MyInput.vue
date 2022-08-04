<template>
<!-- на события инпута мы имитим значения value родителю (он его получает в виде onUpdate:modelValue и вставляет в нужные переменные), плюс биндим значение modelValue на :value и кидаем в пропсы, чтобы была связь значений (например при обнулении инпута) -->
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  .input {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 15px;
  background: transparent;
}

</style>