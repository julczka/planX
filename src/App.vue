<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/choose-planet">PLANET</router-link>
      <router-link to="/choose-ship">SHIP</router-link>
      <router-link to="/trip-summary">YOUR TRIP</router-link>
    </div> -->

  
    <ResponsiveNavigation
		:nav-links="navLinks"
		:image-path="require('./assets/logo white.svg')"
		background="rgba(0,0,21,1)"
		link-color="rgba(255,255,242,1)"
    />

		<!-- hoverBackground="red"
    " -->


    <router-view/>
  </div>
</template>

<script>
import ResponsiveNavigation from '@/components/ResponsiveNavigation'

export default {

  components: {
    ResponsiveNavigation
  },

  data: () => ({
    navLinks: [
      {
        text: 'Home',
		path: '/',
		icon: 'ion-ios-home'
      },
      {
        text: 'About',
		path: '/about',
		icon: 'ion-ios-at'
      },
      {
        text: 'Choose planet',
		path: '/choose-planet',
		icon: 'ion-ios-planet'
      },
      {
        text: 'Choose ship',
		path: '/choose-ship',
		icon: 'ion-ios-rocket'
      },

      {
        text: 'Your trip',
		path: '/trip-summary',
		icon: 'ion-ios-compass'
      },

      {
        text: 'Extraterrestial Life',
		path: '/trip-summary',
		icon: 'ion-ios-paw'
      },
    ]
  })
  
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Tomorrow&display=swap');
@import 'https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css';

#app {
 font-family: 'Tomorrow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  background: $bgcolor;

  //height: 1980px;
}

figure {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 40px;
	margin-inline-end: 0;
}
body {
  margin: 0;
}


// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: white;
//     padding: 10px;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

@media screen and (max-width: 1120px) {

body {
  font-size: 12px;
}


}

@media screen and (max-width: 759px) {

body {
  font-size: 16px;
}


}

</style>
