<template>
  <v-container>
    <h1>My Dogs</h1>

    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
      </v-col>
    </v-row>

    <v-flex>
      <v-card>
        <v-card-title>
          <span class="headline">Dogs</span>
        </v-card-title>
        <v-card-text>

        </v-card-text>
      </v-card>
    </v-flex>

  </v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';

  export default {
    layout: Layout,
    props: {
      dogs: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        //
      };
    },
    methods: {
      //
    }
  };
</script>

<style scoped>

</style>
