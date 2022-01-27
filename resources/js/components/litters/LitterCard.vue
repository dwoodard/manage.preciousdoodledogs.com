<template>
  <v-container fluid>
    <v-card outlined>
      <v-row no-gutters>
        <v-col cols="4">
          <v-row no-gutters>
            <v-col cols="6" data-dog="mom" align="center">
              <v-img :src="getImage(litter.dame)" aspect-ratio="1.61" contain/>

              <span v-if="litter.dame">
                {{ litter.dame.name }}
              </span>
            </v-col>

            <v-col cols="6" data-dog="dad" align="center">
              <v-img :src="getImage(litter.stud)" aspect-ratio="1.61" contain/>
              <span v-if="litter.stud">
                {{ litter.stud.name }}
              </span>
              <span v-else>
                <small>(<a href="#">add a stud</a>)</small>
              </span>
            </v-col>
          </v-row>
        </v-col>

        <v-col>
          <v-container>
            <div v-if="litter.archive_reason">
              Archived: {{ litter.archive_reason }} @ {{ formatDate(litter.archived_at) }}
            </div>

            <div>
              Breed Date: {{ breedDate }}
            </div>

            <div>
              Due Date: {{ dueDate }}
            </div>
            <div v-if="puppiesBirthdate">
              Born:
              {{ formatDate(puppiesBirthdate) }}  ({{ moment(puppiesBirthdate).fromNow() }})
            </div>
          </v-container>
        </v-col>

        <v-col cols="1" align="right" class="pa-2">
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-icon fab
                      v-bind="attrs"
                      v-on="on">
                mdi-dots-vertical
              </v-icon>
            </template>
            <v-list>
              <inertia-link :href="`/admin/litters/${litter.id}/edit`" as="v-list-item">
                <v-btn width="100%" align="left">
                  <v-icon small>mdi-pencil</v-icon>
                  Edit
                </v-btn>
              </inertia-link>

              <v-list-item>
                <v-btn width="100%" color="primary"><v-icon>mdi-plus</v-icon> Add Puppy</v-btn>
              </v-list-item>

              <v-list-item>
                <LitterArchiveDialog :litter="litter"/>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>

      <v-card-text>
        <div v-if="litter.puppies.length">
          <v-data-table :headers="puppyHeaders"
                        :items="litter.puppies"
                        hide-default-footer
                        dense>
            #
            <template #item.gender="{ item }">
              <div :class="[
                {'pink lighten-3 white--text': item.gender === 'female'},
                {'blue lighten-3 white--text': item.gender === 'male'}
              ]">
                {{ item.gender === 'female' ? 'f' : 'm' }}
              </div>
            </template>

            <template #item.collar_color="{ item }">
              <div :class="[ `${item.collar_color}  white--text` ]">
                {{ item.collar_color }}
              </div>
            </template>

            <template #item.birthday="{ item }">
              <div>
                {{ formatDate(item.birthday, 'numeric time') }}
              </div>
            </template>

            <!-- Actions-->
            <template #item.actions="{ item }">
              <inertia-link :href="`/admin/puppies/${item.id}/edit`" as="v-list-item">
                <v-icon small>mdi-pencil</v-icon>
              </inertia-link>
            </template>
          </v-data-table>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

  import moment from 'moment';
  import LitterArchiveDialog from '@/components/litters/LitterArchiveDialog';
  import {formatDate} from '@/helper';

  export default {
    props: {
      litter: {
        type: Object,
        required: true
      }
    },
    computed: {
      breedDate() {
        console.log(this.litter.dates_mated_at);

        if (this.litter.dates_mated_at === null) {
          return null;
        }

        return this.litter.dates_mated_at;

        // return ` ${formatDate(latestDateFromArray(this.litter.dates_mated_at))} ( ${moment(latestDateFromArray(this.litter.dates_mated_at)).fromNow()})`;
      },

      dueDate() {
        return `${formatDate(this.litter.dame.calculations.next_due_date)} (${moment(this.litter.dame.calculations.next_due_date).fromNow()})`;
      },

      puppiesBirthdate() {
        // if no puppies, return empty string
        if (!this.litter.puppies.length) {
          return '';
        }


        return moment(this.litter.puppies[0].birthday);
      },
      // eslint-disable-next-line vue/return-in-computed-property
      puppyHeaders() {
        const headers = [
          {text: 'Name', value: 'name'},
          {text: 'Gender', value: 'gender'},
          {text: 'Collar Color', value: 'collar_color'},
          {text: 'Birthday', value: 'birthday'},
          {text: 'Actions', value: 'actions'}
        ];

        const hasAdultName = this.litter.puppies.some((obj) => !!obj.adult_name);

        if (hasAdultName) {
          headers.splice(2, 0, {text: 'Adult Name', value: 'adult_name'});
        }


        return headers;
      }
    },
    methods: {
      moment,
      formatDate,


      getImage(dog) {
        // check if dog.media exists
        if (!dog?.media) {
          return '/images/defaults/no-dog.png';
        }

        return dog.media.length > 0 ? dog.media[0].original_url : '/images/defaults/no-dog.png';
      }


    },
    components: {LitterArchiveDialog}

  };
</script>

<style scoped>

</style>
