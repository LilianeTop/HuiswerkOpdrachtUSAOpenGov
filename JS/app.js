new Vue({
  el: '#app',
  
  data () { 
    
	return {
    info: null,

    readMore: false,
    
    sortKey: 'Name of Senator',
    reverse: false,

    search: '',

    columns: ['Name of Senator', 'State', 'Seniority','Party Votes'],
    
	}
  },
  mounted () {
    axios
      .get('https://api.propublica.org/congress/v1/116/senate/members.json', {
			headers: {
			'X-API-Key': '5adoFTbZ7YXNQhwpoHFTzptavCFlqKYGfwSQlbO0'
				}
		})
      .then(response => (this.info = response))
  },
  methods: {
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

      this.sortKey = sortKey;
    }
  }
  
})


