<template>
  <div class="base-input">
    <label> {{ label }}</label>
    <div class="base-input__action">
      <input 
      :value="value"
      :placeholder="label"
      :type="type"
      @input="updateValue($event.target.value)"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  methods: {
    updateValue(newValue) {
      this.$emit('input', newValue);
    }
  }
}
</script>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    color: #7a7777;
    padding-bottom: 0.5rem;
  }

  .base-input__action {
    padding-bottom: 0.75rem;
    
    input {
      width: 100%;
      height: 2.75rem;
      border: 1px solid #E1E1E1;
      border-radius: 5px;
      padding: 0.75rem;
      outline-color: #c00020;
    }
  }


}
</style>