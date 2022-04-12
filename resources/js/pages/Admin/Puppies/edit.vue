<template>
  <v-container fluid class="pa-8">
    <v-card outlined>
      <v-card-title>
        <v-row class="justify-space-between">
          <v-col>
            <inertia-link :href="`/admin/litters/${puppy.litter.id}/edit`" as="span">
              <v-icon>mdi-arrow-left</v-icon>
            </inertia-link>
            <span class="headline">Edit Puppy</span>
          </v-col>
          <v-col class="text-end">
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
                  <div>do puppy actinos here</div>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-card-title>
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
            <v-select v-model="form.collar_color" label="Collar Color" :items="collarColors">
              <template #item="{ item }">
                <v-chip
                  :color="item"
                  text-color="black"
                  label>
                  {{ item }}
                </v-chip>
              </template>

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
      </v-container>
      <v-card-text/>
      <v-card-actions>
        <v-spacer/>
        <inertia-link :href="`/admin/litters/${puppy.litter.id}/edit`" class="v-btn v-btn--text theme--light v-size--default ">Cancel</inertia-link>
        <v-btn text @click="submit">Save</v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar" right color="green" :timeout="4000">
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import InputDate from '@/components/InputDate';

  import Layout from '@/layouts/Admin/Layout';

  export default {
    props: {
      puppy: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        showDialog: false,
        collarColors: [
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
          litter_id: this.puppy.litter.id,
          name: this.puppy.name,
          gender: this.puppy.gender,
          adult_name: this.puppy.adult_name,
          collar_color: this.puppy.collar_color,
          birthday: this.puppy.birthday,
          price: this.puppy.price,
          paid: this.puppy.paid
        })

      };
    },
    methods: {
      submit() {
        axios.put(`/admin/puppies/${this.puppy.id}`, this.form.data())
          // eslint-disable-next-line promise/always-return
          .then(() => {
            this.showDialog = false;
            this.snackbar = true;
            this.snackbarText = 'Puppy Saved';
            this.$inertia.reload();
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
    },
    layout: Layout
  };
</script>

<style scoped>

</style>
