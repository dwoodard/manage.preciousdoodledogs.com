<template>
  <v-container>
    <!--tabs-->
    <v-tabs v-model="tab">
      <v-tabs-slider color="primary"/>

      <!--      different view -->
      <v-tab>
        <v-icon>mdi-view-dashboard</v-icon>
        cards
      </v-tab>

      <v-tab>
        <v-icon>mdi-view-list</v-icon>
        table
      </v-tab>

      <v-spacer/>

      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-icon fab
                  v-bind="attrs"
                  v-on="on">
            mdi-dots-vertical
          </v-icon>
        </template>
        <v-list min-width="250" max-width="300">
          <v-list-item ripple>
            <v-list-item-title>
              <inertia-link v-ripple href="/admin/dogs/create" as="v-list-item">
                <v-icon>mdi-plus</v-icon> Add New Dog
              </inertia-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tabs>
    <!-- end tabs -->

    <!-- Header -->
    <v-row justify="space-around">
      <v-col>
        <h1>My Dogs</h1>
      </v-col>
    </v-row>


    <v-tabs-items v-model="tab">
      <!--  Card view    -->
      <v-tab-item>
        <v-container class="pa-0">
          <v-row>
            <v-col v-for="(dog, index) in dogs" :key="index" xs="12" sm="6" md="4">
              <v-hover
                v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  class="mx-auto"
                  max-width="350">
                  <template slot="progress">
                    <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate/>
                  </template>

                  <v-img
                    :src="getImage(dog)"
                    aspect-ratio="1.1"
                    contain/>

                  <v-row no-gutters>
                    <v-col cols="11">
                      <v-card-title class="text-lg-h6">
                        {{ dog.name }}
                      </v-card-title>
                    </v-col>
                    <v-spacer/>
                    <v-col cols="1" align-self="center">
                      <v-menu offset-y>
                        <template #activator="{ on, attrs }">
                          <v-icon fab
                                  v-bind="attrs"
                                  v-on="on">
                            mdi-dots-vertical
                          </v-icon>
                        </template>
                        <v-list>
                          <v-list-item>
                            <inertia-link v-ripple :href="route('admin.dogs.edit', {dog:dog.id})" as="v-list-item">
                              <v-icon>mdi-circle-edit-outline</v-icon> Edit
                            </inertia-link>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-col>
                  </v-row>


                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        Genetics
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        {{ dog }}
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <!--  Table view    -->
      <v-tab-item>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          clearable
          single-line
          hide-details/>

        <v-data-table
          :search="search"
          multi-sort
          :headers="[
            { text: 'Name', value: 'name' },
            { text: 'Gender', value: 'gender' },
            { text: 'Breed', value: 'breed' },
            { text: 'Generation', value: 'generation' },
            { text: 'Size', value: 'size' },
            { text: 'Age (months)', value: 'age.months' },
            { text: 'Weight (ounces)', value: 'weight.ounces' },
            { text: 'Outside stud', value: 'outside_stud' },

          ]"
          :items="dogs"
          :items-per-page="100"
          class="elevation-1">
          <!-- -->
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>
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
        tab: 0,
        search: '',
        dialog: false,
        showAddDog: false
      };
    },
    methods: {
      getImage(dog) {
        return dog.media.length > 0 ? dog.media[0].original_url : null;
      },
      toggleAll() {
        Object.keys(this.$refs).forEach((k) => {
          console.log(this.$refs[k]);
          this.$refs[k].$el.click();
        });
      }
    }
  };
</script>

<style scoped>

</style>
