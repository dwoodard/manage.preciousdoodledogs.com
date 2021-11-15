<template>
<v-container>
  <h1>todo</h1>
</v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';

  export default {
    layout: Layout,
    data: () => ({
      todos: [],
    })
  };
</script>

<style scoped>

</style>
