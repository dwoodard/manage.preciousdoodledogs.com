<template>
  <v-container px-5 fluid>
    <!--tabs-->
    <v-tabs v-model="tab" sl>
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
          <v-icon
            v-bind="attrs"
            icon=""
            v-on="on">
            mdi-dots-vertical
          </v-icon>
        </template>
        <v-list min-width="250" max-width="300">
          <v-list-item ripple>
            <v-list-item-title>
              <inertia-link v-ripple href="/admin/dogs/create" as="v-list-item">
                <v-icon>mdi-plus</v-icon>
                Add New Dog
              </inertia-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tabs>
    <!-- end tabs -->

    <!-- Header -->
    <v-row justify="space-around" no-gutters>
      <v-col>
        <h1>My Dogs</h1>
      </v-col>

      <v-col>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          clearable
          single-line
          hide-details/>
      </v-col>
    </v-row>

    <!-- Search Results-->
    <v-row v-if="search" no-gutters>
      <v-col>
        <v-alert dense class="mt-2 pa-0">
          <span>
            Showing {{ filterDogs.length }} of {{ dogs.length }} results
          </span>
        </v-alert>
      </v-col>
    </v-row>


    <v-tabs-items v-model="tab">
      <!--  Card view    -->
      <v-tab-item>
        <v-container pa-0 fluid>
          <v-row>
            <v-col v-for="(dog, index) in filterDogs" :key="index" cols="12" sm="6" md="4" lg="3" xl="2">
              <v-hover v-slot="{ hover }">
                <v-card
                  :class="{'card-male': dog.gender === 'male', 'card-female': dog.gender == 'female'}"
                  :elevation="hover ? 12 : 0"
                  outlined
                  class="mx-auto"
                  max-width="350"
                  height="100%">
                  <template slot="progress">
                    <v-progress-linear
                      height="10"
                      indeterminate/>
                  </template>
                  <v-row no-gutters>
                    <v-col cols="11">
                      <div class="pa-4 justify-space-between bg-red">
                        <div class="d-flex column">
                          <span>{{ dog.name }} ({{ ouncesToLbs(dog.weight) }} lbs )</span>
                        </div>
                        <v-spacer/>
                        <div>
                          <span>{{ age(dog.birthday) }}</span>
                        </div>
                      </div>
                    </v-col>

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
                              <v-icon>mdi-circle-edit-outline</v-icon>
                              Edit
                            </inertia-link>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <v-img
                    :src="getImage(dog)"
                    aspect-ratio="1.61"
                    contain/>
                  <v-row class="pa-4">
                    <v-col v-if="dog.traits" cols="12">
                      <span v-for="(trait, index) in dog.traits" :key="index" class="mr-2">
                        <v-chip v-if="trait">{{ trait }}</v-chip>
                      </span>
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <!--  Table view    -->
      <v-tab-item>
        <v-data-table
          :search="search"
          multi-sort
          :single-expand="singleExpand"
          show-expand
          :expanded.sync="expanded"
          :headers="[
            { text: 'id', value: 'id' },
            { text: 'Name', value: 'name' },
            { text: 'Gender', value: 'gender' },
            { text: 'Outside stud', value: 'outside_stud' },
            { text: 'Breed', value: 'breed' },
            { text: 'Generation', value: 'generation' },
            { text: 'Size', value: 'size' },
            { text: 'Age (months)', value: 'age.months' },
            { text: 'Weight (ounces)', value: 'weight.ounces' },
          ]"
          :items="dogs"
          :items-per-page="100"
          class="elevation-1">
          <!-- -->
          <template #expanded-item="{ headers, item, }">
            <td :colspan="headers.length" class="pa-0 rounded-0">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Traits
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <pre>{{ item.traits }}</pre>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </td>
          </template>
          <!-- -->
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';
  import {ouncesToLbs, age} from '@/helper';


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
        showAddDog: false,
        singleExpand: true,
        expanded: []
      };
    },
    computed: {
      filterDogs() {
        if (this.search) {
          return this.dogs.filter((dog) => {
            return dog.name?.toLowerCase()
              .includes(this.search.toLowerCase());
          });
        }

        return this.dogs;
      }
    },
    methods: {
      age,
      ouncesToLbs,
      traits(traits) {
        // keep everything but the keys dog_id and id
        return Object.keys(traits).reduce((acc, key) => {
          if (key !== 'dog_id' && key !== 'id') {
            acc[key] = traits[key];
          }

          return acc;
        }, {});
      },
      traitsCount(traits) {
        // if traits is null, empty string, or undefined
        if (!traits) { return 0; }

        let i = 0;

        // loop through traits and if trait is not null, empty string, or undefined, increment i
        Object.keys(traits).forEach((trait) => {
          // if key is id or dog_id, skip
          if (trait === 'id' || trait === 'dog_id') { return; }

          if (traits[trait]) {
            i++;
          }
        });

        return i;
      },

      getImage(dog) {
        return dog.media.length > 0 ? dog.media[0].original_url : '/images/defaults/no-dog.png';
      }
    }

  };
</script>

<style scoped>
.card-male {
  border: 2px solid rgba(0, 0, 255, 0.8)
}
.card-female {
  border: 2px solid hotpink;
}
/*
.container{
  outline: 2px solid green;
}
.row{
  outline: 2px solid red;
}
.col{
  outline: 2px solid blue;
}*/
</style>
