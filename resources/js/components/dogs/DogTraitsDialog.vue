<template>
  <v-dialog v-model="showAddHeat" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" elevation="0" width="100%" align="left"
             v-on="on">
        <v-icon>mdi-dna</v-icon>
        Add Traits
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Add Traits</v-card-title>
      <v-card-text>
        <pre>{{ dog }}</pre>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props: {
      dog: {}
    },
    data() {
      return {
        showAddHeat: false
      };
    }
  };
</script>
