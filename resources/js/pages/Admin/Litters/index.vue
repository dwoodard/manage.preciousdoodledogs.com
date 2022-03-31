<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>
          Litters <span v-if="showArchive">(Archived)</span>
        </h1>
      </v-col>

      <v-spacer/>
      <v-col align="right">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-icon fab
                    v-bind="attrs"
                    v-on="on">
              mdi-dots-vertical
            </v-icon>
          </template>


          <v-list class="pa-0">
            <inertia-link as="v-list-item"
                          class="pa-2"
                          dark
                          :href="litterIndexLink"
                          :class="{
                            'danger': !showArchive,
                            'success': showArchive
                          }">
              <span v-if="showArchive">
                <v-icon>mdi-folder</v-icon>
                Show Active
              </span>
              <span v-else>
                <v-icon>mdi-delete</v-icon>
                Show Archived
              </span>
            </inertia-link>
          </v-list>
        </v-menu>
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
    computed: {
      showArchive() {
        return this.$page.url.includes('showArchived');
      },

      litterIndexLink() {
        return this.showArchive ? '/admin/litters' : '/admin/litters?showArchived';
      }
    },
    components: {
      LitterCard
    }
  };
</script>
