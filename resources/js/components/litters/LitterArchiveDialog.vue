<template>
  <v-dialog v-model="showDialog" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn color="error" v-bind="attrs" width="100%" elevation="0" align="left" v-on="on">
        <v-icon>mdi-delete-circle</v-icon>
        Archive...
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Archive Litter</v-card-title>
      <v-card-text>
        <pre>{{ litter }}</pre>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>

  export default {
    props: {
      litter: {}
    },
    data() {
      return {
        showDialog: false
      };
    }
  };
</script>
