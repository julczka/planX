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
		path: '/life',
		icon: 'ion-ios-paw'
      },

       {
        text: 'About',
		path: '/about',
		icon: 'ion-ios-at'
      },

    ]
  })
  
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Tomorrow&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates&display=swap');
@import 'https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css';

#app {
 font-family: 'Tomorrow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  background: $bgcolor;

  
  
}

h1 h2 h3 h4 h5 h6 {
  font-family: 'Tomorrow', sans-serif;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1rem;
}

p {
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 1em;
  line-height: 1.6;
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
