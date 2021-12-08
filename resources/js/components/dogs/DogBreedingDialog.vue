<template>
  <v-dialog v-model="showAddBreeding" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" elevation="0" width="100%"
             v-on="on">
        <v-icon>mdi-dna</v-icon>
        Add Breeding...
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Add Breeding</v-card-title>
      <v-card-text>
        <pre>{{ dog }}</pre>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    name: 'DogBreedingDialog',
    props: {
      dog: {}
    },

    data() {
      return {
        showAddBreeding: false
      };
    }
  };
</script>
