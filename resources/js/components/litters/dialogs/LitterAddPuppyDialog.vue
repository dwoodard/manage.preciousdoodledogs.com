<template>
  <v-dialog v-model="showDialog" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" elevation="0" width="100%" align="left"
             v-on="on">
        <v-icon>mdi-plus</v-icon>
        Add Puppy...
      </v-btn>
    </template>

    <v-card outlined>
      <v-card-title>
        <span class="headline">Add Puppy</span>
      </v-card-title>

      <v-card-text>
        <!--
          'litter_id',
          'name',
          'gender',
          'adult_name',
          'collar_color'
          'birthday',
          'price',
          'paid'
        -->


        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4">
              <v-text-field v-model="form.name" label="Puppy Name"/>
            </v-col>
            <!--            <v-col>-->
            <!--              <v-text-field v-model="form.adult_name" label="Adult Name"/>-->
            <!--            </v-col>-->
            <v-col
              cols="12"
              sm="6"
              md="4">
              <v-select v-model="form.gender" label="Gender" :items="['male','female']"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <InputDate v-model="form.birthday" type="datetime-local" label="Birthday"/>
            </v-col>
            <v-col>
              <v-select v-model="form.collar_color" label="Collar Color" :items="collorColors">
                <template #selection="{ item }">
                  <v-chip
                    :color="item"
                    text-color="black"
                    label>
                    {{ item }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <!--format as dollar sign-->
              <v-text-field v-model="form.price" label="Price" prefix="$" type="currecy"/>
            </v-col>
            <v-col>
              <v-checkbox v-model="form.paid" label="Paid"/>
            </v-col>
          </v-row>
          <v-row>
            <pre>{{ form.data() }}</pre>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn text @click="showDialog = false">Cancel</v-btn>
        <v-btn text @click="submit">Save</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="4000">
      {{ snackbarText }}
    </v-snackbar>
  </v-dialog>
</template>

<script>
  import axios from 'axios';
  import InputDate from '@/components/InputDate';

  export default {
    props: {
      litter: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        showDialog: false,
        collorColors: [
          'red',
          'pink',
          'purple',
          'deep-purple',
          'indigo',
          'blue',
          'light-blue',
          'cyan',
          'teal',
          'green',
          'light-green',
          'lime',
          'yellow',
          'amber',
          'orange',
          'deep-orange',
          'brown',
          'blue-grey',
          'grey'
        ],
        snackbar: false,
        snackbarText: '',

        form: this.$inertia.form({
          litter_id: this.litter.id,
          name: `Pup ${this.litter.puppies.length + 1}`,
          gender: '',
          adult_name: '',
          collar_color: '',
          birthday: '',
          price: '',
          paid: false
        })
      };
    },
    computed: { },
    methods: {
      submit() {
        axios.post('/admin/puppies', this.form.data())
          // eslint-disable-next-line promise/always-return
          .then(() => {
            this.showDialog = false;
            this.snackbar = true;
            this.snackbarText = 'Puppy added';
            this.$inertia.reload();
            this.form.reset();
          })
          .catch((result) => {
            console.log(result);
            this.snackbar = true;
            this.snackbarText = 'There was an error saving the puppy.';
          });
      }

    },
    components: {
      InputDate
    }
  };
</script>

<style scoped>

</style>
