<template>
  <v-dialog v-model="showDialog" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" elevation="0" width="100%" align="left"
             v-on="on">
        <v-icon>mdi-dna</v-icon>
        Add Breeding/Litters...
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Add Breeding/Litters
      </v-card-title>
      <v-card-subtitle>
        <div>Breeding for dame and stud. Litters will later be added to the breeding.</div>
        <div>If no puppies, mark breeding as not pregnant</div>
      </v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="4">
            <div>Dame:</div>
            <DogSelectListItem :dog="dog"/>
          </v-col>

          <v-col cols="4" offset="4">
            <div>Stud:</div>
            <v-select v-model="form.stud_id" :items="studs"
                      :item-value="'id'"
                      :item-text="'name'">
              <template slot="item" slot-scope="data">
                <DogSelectListItem :dog="data.item"/>
              </template>

              <template slot="selection" slot-scope="data">
                <DogSelectListItem :dog="data.item"/>
              </template>
            </v-select>
          </v-col>
        </v-row>


        <v-container>
          <div v-for="(date,i) in form.dates_mated_at" :key="`date_${i}`">
            <v-row>
              <v-col cols="11" sm="11">
                <InputDate v-model="form.dates_mated_at[i]" :value.sync="form.dates_mated_at[i]" :label="`Breeding Date ${i+1}`" :required="i == 0"/>
              </v-col>
              <v-col cols="1" sm="1">
                <v-btn v-if="i > 0" icon @click="removeDate(i)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-container>

        <div>
          <v-icon @click="addDate">mdi-plus</v-icon>
        </div>


        <!--Notes-->
        <v-row>
          <v-col>
            <v-textarea v-model="form.notes" label="Notes" clear/>
          </v-col>

          <!--        <pre>{{ dog }}</pre>-->
        </v-row>
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
  import moment from 'moment';
  import InputDate from '@/components/InputDate';
  import DogSelectListItem from '@/components/dogs/lists/DogSelectListItem';

  export default {
    props: {
      dog: {}
    },
    data() {
      return {
        snackbar: false,
        snackbarText: '',
        showDialog: false,
        form: this.$inertia.form({
          dame_id: this.dog.id,
          stud_id: '',
          dates_mated_at: [moment().format('MM/DD/YYYY')],
          archive_reason: '',
          got_pregnant: true,
          notes: '',
          archived_at: ''


        })
      };
    },
    computed: {
      studs() {
        const studs = this.$page.props.dogs.filter((dog) => dog.gender === 'male');

        // Add a blank other to the end
        studs.push({
          name: 'other',
          media: [],
          id: null
        });
        return studs;
      }
    },
    methods: {
      addDate() {
        this.form.dates_mated_at.push(moment().format('MM/DD/YYYY'));
      },
      removeDate(i) {
        this.form.dates_mated_at.splice(i, 1);
      },
      submit() {
        axios.post('/admin/litters', this.form.data())
          // eslint-disable-next-line promise/always-return
          .then(() => {
            this.showDialog = false;
            this.snackbar = true;
            this.snackbarText = 'Litter added';
            this.$inertia.reload();
            this.form.reset();
          })
          .catch((result) => {
            console.log(result);
            this.snackbar = true;
            this.snackbarText = 'There was an error saving the litter.';
          });
      }
    },
    components: {
      InputDate,
      DogSelectListItem
    }
  };
</script>
