<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <!--header-->
        <h1>
          Litters
        </h1>
      </v-col>
    </v-row>

    <v-row v-for="(litter, index) in litters" :key="index">
      <v-col cols="12" sm="12" md="12" lg="12">
        <LitterCard :litter="litter"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';
  import LitterCard from '@/components/litters/LitterCard';

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
    },
    components: {
      LitterCard
    }
  };
</script>

<style scoped>

</style>
