<template>
<div>
  <h1>
    {{sailings}}
    {{cruises}}
  </h1>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('loadSailings')
  },
  computed: mapState([
    'sailings',
    'cruises'
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