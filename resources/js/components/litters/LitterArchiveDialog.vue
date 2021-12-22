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
        <LitterArchive :litter="litter" @archived="archived"/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>

  import LitterArchive from '@/components/litters/forms/LitterArchive';
  import {formatDate} from '@/helper';

  export default {
    props: {
      litter: {}
    },
    data() {
      return {
        showDialog: false
      };
    },
    methods: {
      archived() {
        this.showDialog = false;
      }
    },
    components: {
      LitterArchive
    }
  };
</script>
