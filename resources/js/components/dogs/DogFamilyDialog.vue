<template>
  <v-dialog v-model="showDialog" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" elevation="0" width="100%" align="left"
             v-on="on">
        <v-icon>mdi-account-group</v-icon>
        Add Family...
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Add Family</v-card-title>
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
        showDialog: false
      };
    }
  };
</script>
