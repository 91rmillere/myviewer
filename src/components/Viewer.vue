

<template>
  <div id="viewer">
      <app-header></app-header>
      <app-top-bar></app-top-bar>
      <app-videos></app-videos>
      <ul>
        <li v-for="event in allEvents" >{{event.id}}</li>
      </ul>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'


import Header from './Header'
import TopBar from './TopBar'
import Videos from './Videos'

export default {
  components: {
    'app-header': Header,
    'app-top-bar': TopBar,
    'app-videos': Videos
  },
  methods: {
    ...mapActions([
    ])
  },
  created(){
    
    this.$store.dispatch('getAllEvents')
    console.log(this.allEvents)
  },
  computed: {
    ...mapGetters([
      'allEvents',
      'selectedEvent'
    ])
  }

}
</script>

<style>

</style>
