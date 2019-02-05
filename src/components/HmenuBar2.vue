<template>
  <div>
    <v-toolbar-items class="hidden-sm-and-down">
      <div v-for="(item, index) in menuItems" :key="index">
        <div v-if="item.path">
          <v-btn flat :to="item.path"><v-icon>{{ item.icon }}</v-icon>{{ item.title }}</v-btn>
        </div>        
        <div v-else-if="item.subMenus">
          <v-menu offset-y open-on-hover>
            <v-btn flat primary slot="activator">
              <v-icon>{{ item.icon }}</v-icon>
              {{item.title}}<v-icon>arrow_drop_down</v-icon></v-btn>
            <v-list>
              <v-list-tile v-for="(item, i) in item.subMenus" :key="i" @click="$router.push(item.link)">
                <v-divider v-if="item.divider" :inset="item.inset" :key="i"></v-divider>
                <v-list-tile-title v-else><v-icon>{{ item.icon }}</v-icon>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
        <div v-else><v-btn flat primary slot="activator">{{item.title}}</v-btn></div>
      </div>
    </v-toolbar-items>
  </div>
</template>

<script>
export default {
  name: 'hmenubar2',
  data () {
    return {
      menuItems: [
        { title: 'Home', icon: 'face', path: '/'}
        ,{ title: 'Show Plans', icon: 'attach_money', path: '/viewPools' } 
        ,{ title: 'Show Users', icon: 'people', path: '/viewUsers' }       
        ,{ title: 'Report Card', icon: 'settings_voice', link:'', subMenus: [
              { title: 'Register',    icon: 'rowing'     , link: '/register' },
              { title: 'My Game Result',    icon: 'rowing'     , link: '/bet/myResults' },
              { title: 'Leadership Ladder' ,icon: 'euro_symbol', link: '/bet/leaders' },
              { divider: true, inset: true },
              { title: 'Pool Result'       ,icon: 'rowing'     , link: '/poolResults'},
              { title: 'Game Result'       ,icon: 'rowing'     , link: '/gameResults'},
              { divider: true, inset: true },
              { title: 'Game Summary'      ,icon: 'rowing'     , link: '/gameSummary'},   // format same as pool result                
              { title: 'Pool Summary'      ,icon: 'rowing'     , link: '/poolSummary'},
              { title: 'User Summary2'      ,icon: 'rowing'     , link: '/userSummary2'},
              ]}
        ,{ title: 'My Account', icon: 'account_circle', link: '', subMenus: [
            { title: 'Customer Info', icon: 'account_circle', link: '/user' },
            { title: 'Change Password', icon: 'lock', link: '/password/change' },
            { title: 'Reset Password', icon: 'lock', link: '/password/reset' },
            { title: 'Statement of Account', icon: 'lock', link: '/statement' },
            { title: 'How to play', icon: 'help', link: '/howtoplay'},
            { title: 'Log Out', icon: 'logout', link: '/login' }
            ]}
      ],

    }
  }
}
</script>
