<template>
  <v-container fluid>
    <v-card>
      <v-row>
        <v-col cols="3">
          <v-row>
            <v-col data-dog="mom">
              <v-img
                :src="getImage(litter.dame)"
                aspect-ratio="1.61"
                contain/>
            </v-col>
            <v-col data-dog="dad">
              <v-img
                :src="getImage(litter.stud)"
                aspect-ratio="1.61"
                contain/>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          details
        </v-col>
        <v-spacer/>
        <v-col cols="1">
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
                <v-btn>
                  <v-icon small>mdi-pencil</v-icon>
                  Edit
                </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        </v-spacer>
      </v-row>
      {{ litter }}
      <v-card-text>
        <v-row>
          <v-col/>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <!-- Add Puppy-->
        <v-btn color="primary"><v-icon>mdi-plus</v-icon> Add Puppy</v-btn>
        <v-spacer/>
        <v-btn color="error"><v-icon>mdi-delete</v-icon>Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

  export default {
    props: {
      litter: {
        type: Object,
        required: true
      }
    },
    methods: {
      getImage(dog) {
        // check if dog.media exists
        if (!dog?.media) {
          return '/images/defaults/no-dog.png';
        }

        return dog.media.length > 0 ? dog.media[0].original_url : '/images/defaults/no-dog.png';
      }

    }

  };
</script>

<style scoped>

</style>
