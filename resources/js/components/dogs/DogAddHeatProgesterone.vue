<template>
  <v-dialog v-model="showModal" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" elevation="0" width="100%" v-on="on">
        <v-icon>mdi-clipboard-plus-outline</v-icon>
        Add Progesterone...
      </v-btn>
    </template>
    <v-sheet>
      <v-card>
        <v-card-title>
          <span class="headline">Add Progesterone</span>
          <v-spacer/>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="addHeatProgesteroneSubmit">
            <v-row>
              <v-col cols="12" xs="12" sm="6">
                <v-text-field v-model="newProgesterone.value" label="Progesterone" type="number" required>
                  <template #append>ng/mL</template>
                </v-text-field>
              </v-col>

              <v-col cols="12" xs="12" sm="6">
                <InputDate :value.sync="newProgesterone.measured_at" label="Date"/>
              </v-col>

              <v-col cols="12" offset="7">
                <v-btn color="green white--text" type="submit"> Add Progesterone</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>


      <v-container fluid>
        <form v-for="(measurement, index) in measurementProgesterones" :key="index" @submit.prevent="update(measurement)">
          <v-card elevation="0" class="rounded-0">
            <v-container fluid>
              <v-row style="border-top: 1px solid #e2e2e2;">
                <v-col cols="6" xs="6">
                  <v-text-field v-model="measurement.value" label="Progesterone" required @change="update(measurement)">
                    <template #append>{{ measurement.unit }}</template>
                  </v-text-field>
                </v-col>
                <v-col cols="5" xs="5">
                  <InputDate :value.sync="measurement.measured_at" label="Date" @change="update(measurement)"/>
                </v-col>
                <v-col cols="1" xs="1" align-self="center">
                  <v-btn icon @click="removeMeasurement(measurements)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
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
  import InputDate from '@/components/InputDate';

  export default {
    props: {
      heat: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        showModal: false,
        showSnackbar: false,
        snackbarText: '',
        newProgesterone: this.$inertia.form(`EditDogHeats:${this.heat.id}`, {
          heat_id: this.heat.id,
          measured_at: (new Date()).toISOString().substring(0, 10),
          value: 0
        })

      };
    },
    computed: {
      measurementProgesterones() {
        return this.heat.measurements;
      }
    },
    methods: {
      addHeatProgesteroneSubmit() {},
      update(measurement) {
        this.$inertia.post(`/admin/measurements/progesterone/${measurement.id}`, {
          measured_at: measurement.measured_at,
          value: measurement.value
        });
      },
      removeMeasurement(measurement) {
        axios.post(`/admin/measuement/${measurement.id}`, {
          _method: 'DELETE'
        })
          .then(() => {
            this.showSnackbar = true;
            this.snackbarText = 'Measurement deleted';
          })
          .catch(() => {
            this.showSnackbar = true;
            this.snackbarText = 'Error deleting measurement';
          });
      }

    },
    components: {InputDate}
  };
</script>
