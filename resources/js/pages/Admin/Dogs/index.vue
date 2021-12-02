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
              <DogCard :dog="dog"/>
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
            { text: 'Weight (lbs)', value: 'weight' },
            { text: 'Next Est Xray', value: 'calculations.xray_est_at' },
            { text: 'Traits' , value: 'traits' },
            { text: 'Actions', value: 'actions' }
          ]"
          :items="dogs"
          class="elevation-1">
          <!-- -->


          <template #item.gender="{ item }">
            <span v-if="item.gender === 'female'" style="color: deeppink">
              {{ item.gender }}
            </span>

            <span v-if="item.gender === 'male'" style="color: blue">
              {{ item.gender }}
            </span>
          </template>

          <template #item.weight="{ item }">
            <span>
              {{ ouncesToLbs(item.weight) }}
            </span>
            </span>
          </template>

          <template #item.traits="{ item }">
            <span>
              {{ traitsCount(item.traits) }}
            </span>
          </template>

          <template #item.actions="{ item }">
            <div class="d-flex col">
              <inertia-link :href="route('admin.dogs.edit', {dog:item.id})" as="v-list-item">
                <v-icon>mdi-circle-edit-outline</v-icon>
              </inertia-link>
              <inertia-link :href="route('admin.dogs.destroy', {dog:item.id})" as="v-list-item">
                <v-icon>mdi-delete</v-icon>
              </inertia-link>
            </div>
          </template>


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

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Heats
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <pre>{{ item.heats }}</pre>
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
  import {age, ouncesToLbs} from '@/helper';
  import DogCard from '@/components/dogs/DogCard';


  export default {
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
      }


    },
    components: {
      DogCard
    },
    layout: Layout

  };
</script>
