<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-btn absolute dark fab top right small color='red' to='/internments/create'>
            <v-icon>add</v-icon>
          </v-btn>
          <v-list two-line v-if="internments.length > 0">
            <v-list-tile avatar v-for="internment in internments" :key="internment.id">
              <v-list-tile-avatar>
                <list-initial-letter :word="Alexandre"></list-initial-letter>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ 'Internamento' }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ 'Animal' }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple @click="show(internment)">
                  <v-icon color='grey lighten-1'>info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider inset />
          </v-list>
          <p class='grey--text pa-5' v-if="internments.length == 0">Nenhum internamento encontrado</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import InternmentsService from "./InternmentsService";
import ListInitialLetter from "@core/components/ListInitialLetter";

export default {
  components: { ListInitialLetter },
  data() {
    return {
      internments: []
    };
  },
  mounted() {
    InternmentsService.getInternments(allInternaments => {
      this.internments = allInternaments;
    });
  },
  methods: {
    show(internment) {
      this.$router.push(`/internments/${internment.id}`);
    }
  }
};
</script>
