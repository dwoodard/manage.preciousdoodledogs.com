<template>
  <v-dialog v-model="showModal" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" elevation="0" width="100%" v-on="on">
        <v-icon>mdi-calendar</v-icon>
        Add Heat...
      </v-btn>
    </template>

    <v-sheet>
      <v-card>
        <v-card-title>
          <span class="headline">Add Heat for {{ dog.name }} ({{ ageOld }}) </span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="addHeatSubmit">
            <v-row no-gutters>
              <v-col cols="6">
                <input v-model="newHeat.heat_at" type="date" required/>
              </v-col>
              <v-col offset="3" cols="2">
                <v-btn color="green white--text" type="submit"> Add Heat</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>

      <v-container>
        <span>
          <b>Next Est Heat ({{ toOrdinal(dogHeats.length + 1 ) }}):</b>
          {{ dog.heats.next_est_heat_date }} ( {{ moment(dog.heats.next_est_heat_date).fromNow() }})
        </span>
      </v-container>

      <v-container>
        <form v-for="(heat, index) in dogHeats" :key="index" @submit.prevent="update(heat)">
          <v-card elevation="0">
            <v-row no-gutters>
              <v-col cols="2">{{ toOrdinal(dogHeats.length - index) }} Heat</v-col>
              <v-col cols="6"><input v-model="heat.heat_at" type="date" @change="update(heat)"/></v-col>
              <v-col cols="1" offset="3">
                <v-btn icon @click="removeHeat(heat)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </form>
      </v-container>
    </v-sheet>

    <v-snackbar v-model="showSnackbar">
      {{ snackbarText }}
      <template #action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="showSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-dialog>
</template>
<script>
  import axios from 'axios';
  import moment from 'moment';

  const converter = require('number-to-words-en');

  export default {
    props: {
      dog: {}
    },
    data() {
      return {
        fromDateMenu: null,
        fromDateVal: new Date(),
        showModal: false,
        newHeat: this.$inertia.form(`EditDogHeats:${this.dog.id}`, {
          dog_id: this.dog.id,
          heat_at: (new Date()).toISOString().substring(0, 10)
        }),
        showSnackbar: false,
        snackbarText: '',
        form: this.$inertia.form(`EditDogHeats:${this.dog.id}`, {...this.dog.heats.all})

      };
    },
    computed: {
      dogHeats() {
        return this.dog.heats.all;
      },
      ageOld() {
        // check if dog age is a year or more
        const hasYears = moment().diff(this.dog.birthday, 'years') > 0;

        if (hasYears) {
          const years = moment().diff(this.dog.birthday, 'years');
          return `${years} years`;
        }

        // if not, return the difference in months
        if (hasYears === false) {
          const months = moment().diff(this.dog.birthday, 'months');
          return `${months} months`;
        }

        return 'Unknown';
      }
    },
    methods: {

      moment,
      toOrdinal: converter.toOrdinal,
      addHeatSubmit() {
        this.showSnackbar = true;
        this.snackbarText = 'Processing';

        this.newHeat.post('/admin/heats', {
          dog_id: this.dog.id,
          heat_at: this.newHeat.heat_at,
          onSuccess() {
            this.showSnackbar = true;
            this.snackbarText = 'Heat Added';
          }

        });
      },

      update(heat) {
        const that = this;
        that.showSnackbar = true;
        that.snackbarText = 'Heat updating';

        axios.post(`/admin/heats/${heat.id}`, {
          ...heat,
          _method: 'PUT'
        })
          // eslint-disable-next-line promise/always-return
          .then((response) => {
            that.showSnackbar = true;
            that.snackbarText = 'Heat updated';
          })
          .catch((error) => {
          });
      },
      removeHeat(heat) {
        const that = this;
        that.showSnackbar = true;
        that.snackbarText = 'Processing';

        axios.post(`/admin/heats/${heat.id}`, {
          _method: 'DELETE'
        })
          // eslint-disable-next-line promise/always-return
          .then((response) => {
            // remove from array
            this.dog.heats.all.splice(this.dog.heats.all.indexOf(heat), 1);

            that.showSnackbar = true;
            that.snackbarText = 'Heat removed';
          })
          .catch((error) => {
          });
      }
    }
  };
</script>
