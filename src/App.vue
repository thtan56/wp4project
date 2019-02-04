// call from main.js
<template>
<v-app>
  <v-container fluid>
    <sidebar></sidebar>
    <v-navigation-drawer :width="width" :value="true" stateless>
      <h3>My simple Vue SPA</h3><br>
      <v-img :src="require('@/assets/nfl2.png')"></v-img>
      <v-layout pa-2 column fill-height class="lightbox white--text">
      <v-spacer></v-spacer>
        <v-flex shrink>
          <div class="subheading">Jonathan Lee</div>
          <div class="body-1">heyfromjonathan@gmail.com</div>
        </v-flex>
      </v-layout>
      

      <img src="./assets/logo.png">

      <v-btn fab dark color="teal">
        <v-icon dark>list</v-icon>
      </v-btn>

      <v-btn fab dark large color="cyan">
        <v-icon dark>edit</v-icon>
      </v-btn>
   
      <button class="btn btn-warning"><span class="glyphicon glyphicon-trash"></span> Delete</button> <!-- test bstrap3 -->
      <button class="btn btn-danger"><span class="glyphicon glyphicon-user"></span> User</button>
    </v-navigation-drawer>
  </v-container>
    <!-- convert & transfer image to folder 'dist' 
      file-loader outputs image files and 
      returns paths to them instead of inlining. 
      This technique works with other assets types, such as fonts,
    -->
    <span>{{ Date.now() | moment().format("dddd, MMMM Do YYYY") }}</span>
    Another:
    <span>{{ new Date() | myDate }}</span>    
    <p>Welcome to my simple Vue Single Page Application. Click register and Login button.</p>
    <p>
      <router-link class="btn btn-danger" to="/">Home</router-link>
      <router-link class="btn btn-danger" to="/register">Register</router-link>
      <router-link class="btn btn-danger" to="/login">Login</router-link>
      <!-- router-link class="btn btn-danger" to="/viewPools">Show Plans</router-link -->      
    </p>
    <br>
    <h3>Table 1</h3><gametable></gametable>
    <h3>Table 2</h3><gametable2></gametable2>
    <div class="container"><router-view/></div>
  </v-app>
</template>

<script>
import sidebar from '@/components/SideBar';
import gametable from '@/components/GameTable';
import gametable2 from '@/components/GameTable2';
export default { 
  name: 'app',
  components: { sidebar, gametable, gametable2 },
  data () {
    return {
      width: 325,
      pictures: [
        { src: require('@/assets/nfl2.png') }
      ],
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
      console.log("11) getItems:"+organiser);
      var result = 'Getting data from server...';
      var postdata = { op: "getOrgGames", id: organiser };
      this.axios.post('/php/apiGame.php', JSON.stringify(postdata), { headers: { 'Content-Type': 'application/json' } })
        .then(response => {  
          console.log("12) response", response);
          this.games = response.data.data;     
          console.log("13) link this.games to vuetable", this.games);
        },      response => { result = 'Failed to load data to server.'; }
        );
    },
  },   // end of methods
  created() { 
    this.getGames("NBA"); 
  },      
}
</script>
