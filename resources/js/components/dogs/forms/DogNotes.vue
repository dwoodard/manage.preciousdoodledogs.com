<template>
  <v-textarea v-model="notes" label="Notes" @input="update"/>
</template>
<script>
  import axios from 'axios';

  // lodash debounce
  import debounce from 'lodash/debounce';

  export default {
    props: {
      dog: {}
    },
    data() {
      return {
        notes: this.dog.notes
      };
    },
    methods: {
      updateDog() {
        axios.post(`/admin/dogs/${this.dog.id}`, {
            ...this.dog,
            notes: this.notes,
            _method: 'PUT'
        });
      }

    },
    created() {
      this.update = debounce(this.updateDog, 1000);
    }
  };
</script>
