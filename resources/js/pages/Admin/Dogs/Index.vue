<template>
  <v-container>
    <!--    tabs-->
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
        <v-list>
          <v-list-item>
            <v-list-item-title>
              Add New Dog
            </v-list-item-title>
            <v-list-item-action>
              <v-btn color="primary"
                     @click="foo = 'bar'">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tabs>

    <v-row justify="space-between">
      <v-col>
        <h1>My Dogs</h1>
      </v-col>
      <v-col cols="1"/>
    </v-row>

    <v-tabs-items v-model="tab" grow>
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
                    height="250"
                    src="https://placedog.net/500?random"/>

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
                            <v-list-item-title>edit</v-list-item-title>
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
                        Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor et door magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <!--  Table view    -->
      <v-tab-item>
        <v-btn @click="toggleAll()">Toggle Groups</v-btn>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
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
            { text: 'Outside stud', value: 'outside_stud' },
            { text: 'Age (months)', value: 'age.months' },
            { text: 'Weight (ounces)', value: 'weight.ounces' }
          ]"
          :items="dogs"
          :items-per-page="5"
          class="elevation-1"/>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>
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
        search: ''
      };
    },
    methods: {
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
