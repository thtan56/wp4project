<template>
  <div>
    <v-card>
      <v-data-table :pagination.sync="pagination" :headers="headers" :items="games">         
        <template slot="items" slot-scope="props">
          <td>{{ props.item.organiser}} / {{ props.item.round}}</td>
          <td>{{ props.item.home_team}} vs {{ props.item.away_team}}</td>                  
          <td>{{ props.item.start | myDate }}</td>  
        </template>         
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default { 
  name: 'gametable',
  data () {
    return {
      games: [],
      headers: [ 
        { text: 'Organiser/Round', value: 'orgweek' }     
        ,{ text: 'Home Team vs Away Team', value: 'home_team' }
        ,{ text: 'Date', value: 'start' }  ],
      pagination: {  rowsPerPage: 10 }        
    }
  },
  methods: {  
    getGames(organiser) {
      var result = 'Getting data from server...';
      var postdata = { op: "getOrgGames", id: organiser };
      this.axios.post('/php/apiGame.php', JSON.stringify(postdata), { headers: { 'Content-Type': 'application/json' } })
        .then(response => { this.games = response.data.data;     
        },    response => { result = 'Failed to load data to server.'; }
        );
    },
  },   // end of methods
  created() { this.getGames("NBA") }      
}
</script>
