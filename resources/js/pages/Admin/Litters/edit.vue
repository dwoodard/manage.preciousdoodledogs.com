<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-breadcrumbs :items="items">
          <template #item="{ item }">
            <inertia-link :href="item.href">
              {{ item.text }}
            </inertia-link>
          </template>
        </v-breadcrumbs>
      </v-col>

      <v-spacer/>
      <v-col align="right">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs"
                   v-on="on">
              <v-icon dark>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-btn icon class="blue--text" @click="$inertia.visit('/admin/litters')">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';

  export default {
    layout: Layout,
    props: {
      litter: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        items: [
          {
            text: 'Litters',
            href: '/admin/litters'
          },
          {
            text: 'Edit',
            href: ''
          }
        ]
      };
    },
    created() {}

  };
</script>

<style scoped>

</style>
