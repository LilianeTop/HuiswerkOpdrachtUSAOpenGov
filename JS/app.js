import Vue from 'vue';
const apiUrl = 'https://api.propublica.org/congress/v1/116/senate/members.json'; 
const apiKey = 'cHWA0cyVrIeIZHFmZyrlp3UBNFO1aqLn7LsYLij2';
window.axios = require('axios');

//GET request via axios?
/*
axios.get(apiUrl)
.then(function (response){
  console.log(response);
})
.catch(function (error){
  console.log(error);
});*/

new Vue({
  el: '#app',

  components:{

  },
  mounted: function (){
    axios.get(apiUrl, {headers: {"X-API-KEY": apiKey}})
    .then(response => console.log(response));
  },

  data: {                  
      
      readMore: false
  }
});