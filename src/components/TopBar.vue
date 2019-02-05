<template>
  <div>
    <!--  disable push sidebar with hamburger button --> 
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="setToggled()"></v-toolbar-side-icon>
      <v-toolbar-title><img src='../assets/nfl2.png' /></v-toolbar-title>
      <hmenubar2></hmenubar2>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- v-btn v-for="item in menu2Items" :key="item.title" :to="item.path"><v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}</v-btn>
        <v-spacer></v-spacer -->  
        <v-btn to='/basketballNBA'><v-img :src="require('@/assets/images/NBA2.png')"></v-img></v-btn>
        <v-btn to='/basketballNBL'><v-img :src="require('@/assets/images/NBL2.png')"></v-img></v-btn>
        <v-btn to='/gameAFL'><v-img :src="require('@/assets/images/afl.png')"></v-img></v-btn>
        <v-btn to='/gameNRL'><v-img :src="require('@/assets/images/NRL2.png')" aspect-ratio="0.7" contain></v-img></v-btn>   
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.path"><v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn icon><v-icon>more_vert</v-icon></v-btn>
        <v-btn icon><v-icon>dashboard</v-icon></v-btn>        
        <v-btn icon><v-avatar><img src="https://randomuser.me/api/portraits/men/1.jpg"></v-avatar></v-btn>
        <v-btn icon><v-icon>menu</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
import hmenubar2 from '@/components/HmenuBar2';
export default {
  name: 'topbar',
  props: { 'drawer': {type: Boolean, default: true} },
  components: { hmenubar2 }, 
  data () {
    return {
      clipped: false,
      menuItems: [ { icon: 'face', title: 'Sign up', path: '/register'},{ icon: 'lock_open', title: 'Sign in', path: '/login' }],
    }
  },
  methods: {
    setToggled() { this.$emit('clicked-childhamburger'); }
  }
};
</script>