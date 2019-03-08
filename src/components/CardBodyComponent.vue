<template>
<div>
 <RadioButtonComponent />

</div>
</template>

<script>
import RadioButtonComponent from "./RadioButtonComponent";
import { mapState } from 'vuex'

export default {
  data () {
    return {
   
    }
  },
  components:{
      RadioButtonComponent
  },
   mounted () {
    this.$store.dispatch('loadSailings')
  },
  computed: mapState([
    'sailings'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>