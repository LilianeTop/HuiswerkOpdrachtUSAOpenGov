new Vue({
  el: '#app',
  
  data () { 
    
	return {
    info: null,
    readMore: false,
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
  
})


