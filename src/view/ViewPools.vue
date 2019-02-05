<template>
  <div>
    <h3>View Pools</h3><br>
    <v-layout pa-2 column fill-height class="lightbox white--text">
      <v-spacer></v-spacer>
      <v-flex shrink>
        <div class="subheading">Jonathan Lee</div>
        <div class="body-1">heyfromjonathan@gmail.com</div>
      </v-flex>
    </v-layout>   
    <img src="../assets/logo.png" />
    <v-btn fab dark color="teal"><v-icon dark>list</v-icon></v-btn>
    <v-btn fab dark large color="cyan"><v-icon dark>edit</v-icon></v-btn>
    <button class="btn btn-warning"><span class="glyphicon glyphicon-trash"></span> Delete</button> <!-- test bstrap3 -->
    <button class="btn btn-danger"><span class="glyphicon glyphicon-user"></span> User</button>
      <!-- convert & transfer image to folder 'dist' 
        file-loader outputs image files and 
        returns paths to them instead of inlining. 
        This technique works with other assets types, such as fonts,
      -->
    <span>{{ Date.now() | moment().format("dddd, MMMM Do YYYY") }}</span>
    Another:
    <span>{{ new Date() | myDate }}</span>    
    <p>Welcome to my simple Vue Single Page Application. Click register and Login button.</p>
    <br>
    <h3>Table 1</h3><gametable></gametable>
    <h3>Table 2</h3><gametable2></gametable2>
  </div>
</template>
<script>
import gametable from '@/components/GameTable';
import gametable2 from '@/components/GameTable2';
export default { 
  name: 'ViewPools',
  components: { gametable, gametable2 }  
}
</script>
