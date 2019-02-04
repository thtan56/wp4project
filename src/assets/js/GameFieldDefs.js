export default [
  { name: 'start', sortField: 'start', title: '<span class="orange glyphicon glyphicon-user"></span> Week No',
    callback: this.formatDate },
  { name: 'start', sortField: 'start', title: 'Date', titleClass: 'center aligned', dataClass: 'center aligned' },
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
];
