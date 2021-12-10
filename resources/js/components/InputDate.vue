<template>
  <div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted">
    <div class="v-input__control">
      <div class="v-input__slot">
        <div class="v-text-field__slot">
          <label class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">
            <!-- slot label -->
            <slot name="label">{{ label }}</slot>
          </label>
          <input v-model="inputValue" :type="type" required style="font-size: 1rem"/>
        </div>
      </div>
      <div class="v-text-field__details">
        <div class="v-messages theme--light">
          <div class="v-messages__wrapper">
            <!-- slot -->
            <slot name="message" class="v-messages__message"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // <InputDate :value.sync="SomeValue"/>
  // <InputDate v-model="form.someValue" :value.sync="form.someValue" label="Date" @input="update(arg)"/>

  export default {
    props: {
      value: {},
      type: {
        type: String,
        default: 'date'
      },
      label: {
        type: String,
        default: ''
      }
    },
    computed: {
      inputValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    }

  };
</script>
