<template>
  <div class="ui container">
    <h2>Vuetable-2 Game Table</h2>   
    <vuetable ref="vuetable" :api-mode="false" :fields="fields" 
          :data-total="dataCount" 
          :data-manager="dataManager"
          data-path="data" pagination-path="pagination" 
          :per-page="perPage"
          :css="css.table" 
          @vuetable:pagination-data="onPaginationData">
    </vuetable>
    <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>  
    <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>   
  </div>
</template>

<script>
import CssConfig from '@/assets/js/VuetableCssConfig.js';
// import FieldDef from '@/assets/js/GameFieldDefs.js';

import _ from 'lodash';  // * 1) must have this, otherwise problems
import Vuetable from 'vuetable-2/src/components/Vuetable';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';

export default {
  name: 'gametable2',
  components:{ Vuetable, VuetablePagination, VuetablePaginationInfo },
  data () {
    return {
      organiser: "NBA",  // temporary
      games: [],           // define in dataManager function (no action required in html)
      localData: [],
      dataCount: 0,   // numer of data row
      perPage: 10,
      css: CssConfig,
      fields: [
        { name: 'start', sortField: 'start', title: '<span class="orange glyphicon glyphicon-user"></span> Week No',
          callback: this.formatDate },
        { name: 'start', sortField: 'start', title: 'Date', titleClass: 'center aligned', dataClass: 'center aligned',
          callback: this.format2Date },
        { name: 'home_team',sortField: 'home_team', title: 'Home Team',
          callback: this.allCap },
        { name: 'away_team', sortField: 'away_team', title: 'Away Team' },
        { name: 'round',   sortField: 'round' },
        { name: 'venue',sortField: 'venue', titleClass: 'text-center', dataClass: 'center aligned' },
        { name: 'home_score', title: 'Home Score' },
        { name: 'away_score', title: 'Away Score' },
        { name: 'status', title: 'Status' },
        { name: 'entrants', title: 'Entrants'},
        { name: 'pool_id', title: 'Pool#' },
        { name: 'id', title: 'Game#' }
      ]
    }
  },
  //=========================================================================================
  watch: {
    games(newVal, oldVal) { this.$refs.vuetable.refresh(); }  // * 2) problem without this
  },
  methods: {
    // 1) callbacks
    // gameName(value) { return this.rowData.home_team + this.rowData.away_team },
    allCap(value) { return value.toUpperCase() },
    weekNo(date) {  return this.$moment(date, "YYYY-MM-DD").week(); },  // ip=<string>, op=weeknumber
    formatDate (value, fmt = 'D MMM YYYY') {   // output as 16 Oct 2018
      return (value == null) ? '' : this.$moment(value, 'YYYY-MM-DD').format(fmt)   // input string: 2018-10-16 00:00:00
    },
    format2Date (value, fmt = 'YYYY-MM-DD') {   // output as 2018-10-16
      return (value == null) ? '' : this.$moment(value, 'YYYY-MM-DD').format(fmt)   // input string: 2018-10-16 00:00:00
    },
    //==3) vuetable2 =================================
    onPaginationData(paginationData) { // event 1
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) { this.$refs.vuetable.changePage(page) },   // event 2
    dataManager(sortOrder, pagination) {
      if (this.localData.length < 1) return;    // 1st time, skip
      let data = this.localData;                // data 1
      pagination = this.$refs.vuetable.makePagination(data.length);
      return {
        pagination: pagination,
        data: _.slice(data, pagination.from - 1, pagination.to)
      };
    },   // dataManager
    getItems(organiser) {
      var result = 'Getting data from server...';
      var postdata = { op: "getOrgGames", id: organiser };
      this.axios.post('/php/apiGame.php', JSON.stringify(postdata), { headers: { 'Content-Type': 'application/json' } })
        .then(response => { 
            this.games = response.data.data;
            this.localData = this.games;   // 1    
        },  response => { result = 'Failed to load data to server.'; }
        );
    },
  },   // end of methods
  created() { this.getItems(this.organiser); },
};
</script>
