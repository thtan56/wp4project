<template>
  <div>
    <v-card>
      <v-data-table :pagination.sync="pagination" :headers="headers" :items="users">         
        <template slot="items" slot-scope="props">
          <td>{{ props.item.username}}</td>      
          <td>{{ props.item.lastname}} {{ props.item.firstname}}</td>
          <td>{{ props.item.email }}</td>  
          <td>{{ props.item.role }}</td>                  
        </template>         
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default { 
  name: 'usertable',
  data () {
    return {
      users: [],
      headers: [ 
        { text: 'Username', value: 'username' }     
        ,{ text: 'Full Name', value: 'firstname' }
        ,{ text: 'Email', value: 'email' }    
        ,{ text: 'Role', value: 'role' } ],
      pagination: {  rowsPerPage: 10 }        
    }
},
  methods: {  
    getUsers() {
      var result = 'Getting data from server...';
      var postdata = { op: "getUsers" };
      this.axios.post('/php/apiUser.php', JSON.stringify(postdata), { headers: { 'Content-Type': 'application/json' } })
        .then(response => { this.users = response.data.data;     
        },    response => { result = 'Failed to load data to server.'; }
        );
    },
  },   // end of methods
  created() { this.getUsers() }      
}
</script>
