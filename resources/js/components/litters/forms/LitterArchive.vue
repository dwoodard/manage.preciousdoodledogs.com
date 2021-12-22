<template>
  <v-card outlined class="pa-2">
    <v-row>
      <v-col cols="12">
        <v-select v-model="archive_reason" label="Reason"
                  :items="items"
                  hide-details
                  dense outlined
                  @change="setArchivedAt"/>
      </v-col>

      <v-col cols="6">
        <v-btn dark :class="{
          'danger': archive_reason,
          'success': !archive_reason
        }" @click="update">
          <span v-if="processing">Updating</span>
          <span v-else-if="archive_reason == ''">Unarchive</span>
          <span v-else>Archive</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
  import axios from 'axios';

  // lodash debounce
  import debounce from 'lodash/debounce';

  export default {
    props: {
      litter: {}
    },
    data() {
      return {
        ...this.litter,
        archive_reason: this.litter.archive_reason,
        archived_at: this.litter.archived_at,
        items: [
          {text: 'None', value: ''},
          {text: 'Grown/Gone', value: 'Grown/Gone'},
          {text: 'No Puppies', value: 'No Puppies'}
        ],
        processing: false
      };
    },

    methods: {

      setArchivedAt() {
        this.archived_at = !!this.archive_reason;
      },

      updateLitter() {
        this.processing = true;


        axios.post(`/admin/litters/${this.litter.id}`, {
          ...this.$data,
          _method: 'PUT'
        })
          .then((response) => {
            this.processing = false;
            this.$emit('archived', this.litter);
          });
      }

    },
    created() {
      this.update = debounce(this.updateLitter, 1000);
    }

  };
</script>
