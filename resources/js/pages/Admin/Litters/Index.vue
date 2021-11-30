<template>
  <v-container fluid>
    <h1>Litters</h1>

    <div>
      <pre>{{ litters }}</pre>
    </div>
  </v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';

  export default {
    layout: Layout,
    props: ['litters'],
    data() {
      return {
        valid: false,
        showCreateModal: false,
        form: this.$inertia.form({
          name: '',
          errors: []
        })
      };
    }
  };
</script>

<style scoped>

</style>
