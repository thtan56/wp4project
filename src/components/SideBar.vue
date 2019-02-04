<template>
  <div>
    <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app dark class="primary lighten-3">
      <v-layout row>
        <v-flex xs12 sm12 offset-sm1>
          <v-card>
            <v-toolbar color="teal" dark>
              <v-toolbar-side-icon></v-toolbar-side-icon>
              <v-toolbar-title>How to play</v-toolbar-title><v-spacer></v-spacer><v-btn icon><v-icon>more_vert</v-icon></v-btn>
            </v-toolbar>
            <v-list>
              <div v-for="(item, index) in chapters" :key="index">
                <div v-if="item.items">
                  <v-list-group v-model="item.active" :key="item.title" :prepend-icon="item.action" no-action>
                    <v-list-tile slot="activator">
                      <v-list-tile-content><v-list-tile-title>{{ item.title }}</v-list-tile-title></v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.path">
                      <v-list-tile-content><v-list-tile-title>{{ subItem.title }}</v-list-tile-title></v-list-tile-content>
                      <v-list-tile-action><v-icon>{{ subItem.action }}</v-icon></v-list-tile-action>
                    </v-list-tile>
                  </v-list-group>
                </div>
                <div v-else>
                  <v-list-tile :to="item.path">
                    <v-list-tile-action><v-icon>{{ item.action}}</v-icon></v-list-tile-action>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </div>
              </div>
            </v-list>
          </v-card>  
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <!--  disable push sidebar with hamburger button --> 
      <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
              <h3>My simple Vue SPA</h3><br>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to='/basketballNBA'><v-img :src="require('@/assets/images/NBA2.png')"></v-img></v-btn>
        <v-btn to='/basketballNBL'><v-img :src="require('@/assets/images/NBL2.png')"></v-img></v-btn>
        <v-btn to='/gameAFL'><v-img :src="require('@/assets/images/afl.png')"></v-img></v-btn>
        <v-btn to='/gameNRL'><v-img :src="require('@/assets/images/NRL2.png')" aspect-ratio="0.7" contain></v-img></v-btn>   
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn icon><v-icon>more_vert</v-icon></v-btn>

        <v-btn icon>
          <v-icon>dashboard</v-icon>
        </v-btn>        
        <v-btn icon>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/1.jpg">
          </v-avatar>
        </v-btn>
        <v-btn icon>
          <v-icon>menu</v-icon>
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  data () {
    return {
      clipped: false,
      drawer: true,
      menuItems: [
        { icon: 'face', title: 'Sign up', path: '/signup'},
        { icon: 'lock_open', title: 'Sign in', path: '/login' }
      ],
      chapters: [
        { action: 'local_activity', title: '1 Introduction - Home Page', path: '/faqs/10_homepage.md' },
        { action: 'local_offer', title: '2 Open account / Sign-up', path: '/faqs/20_registration.md' },
        { action: 'directions_run', title: '3 Login / Sign-in', path: '/faqs/30_login.md' },
        { action: 'restaurant', title: '4 Deposit cash', path: '/faqs/40_deposit_cash.md' },
        { action: 'help_outline', title: '5 Buy virtual currency', path: '/faqs/50_buy_vcash.md' },
        { action: 'face', title: '6 Select a game plan', path: '/faqs/60_select_plan.md' },
        { action: 'restaurant', title: '6.1 Buy ticket', path: '/faqs/61_buy_ticket.md' },
        { action: 'help_outline', title: '6.2 Place bet', path: '/faqs/62_place_bet.md' },
        { action: 'face', title: '7 View my games result', path: '/basketballNBL' },
        { action: 'lock_open', title: 'A. Appendix', active: true, items: [ 
              { title: 'A1. Pool Summary', path: '/faqs/A1_pool_summary.md' },
              { title: 'A2. Game Summary', path: '/faqs/A2_game_summary.md' },
              { title: 'A3. Ticket Summary', path: '/faqs/A3_ticket_summary.md' },
              { title: 'A4. Player Summary', path: '/faqs/A4_user_summary.md' },
              { title: 'i. Test css', path: '/faqs/testcss.md' },
              { title: 'ii. Markdown examples', path: '/faqs/99_samples.md' }        
        ] }
      ],
      items: [
        { action: 'help_outline', title: 'Documentations', items: [
              { title: 'User Guide', path: '/userguide' },
              { title: 'Exchange Rate Conversion', path: '/rateguide' } ]},
        { action: 'local_activity', title: 'Basketballs', items: [
              { title: 'Asia Games 2018 Basketball', path: '/AG2018Bas' },
              { title: 'NBA 2018 Basketball', path: '/basketballNBA' },
              { title: 'NBL 2018 Basketball', path: '/basketballNBL' } ]},
        { action: 'restaurant', title: 'Select a game plan', active: true, items: [
              { title: '6.1 Buy Ticket', path: '/newsNBA' },
              { title: '6.2 Place Bet', path: '/newsAFL' } ]}
      ]
    }
  }
};
</script>