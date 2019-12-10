<template>
  <div id="app">
   
   

  
    <ResponsiveNavigation
		:nav-links="navLinks"
		:image-path="require('./assets/logo white.svg')"
		background="rgba(0,0,21,1)"
		link-color="rgba(255,255,242,1)"
    />

	

<transition name="page" mode="out-in">
    <router-view/>
     </transition>
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


// .page-enter-active, .page-leave-active {
//   transition: opacity 1s, transform 1s;
// }
// .page-enter, .page-leave-to {
//   opacity: 0;
//   transform: translateX(-30%);
// }

.page-enter-active, .page-leave-active  {
	animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}

.page-enter, .page-leave-to {
animation: slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

@keyframes slide-in-blurred-left {
  0% {
    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}


@keyframes slide-out-blurred-right {
  0% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1000px) scaleX(2) scaleY(0.2);
    transform-origin: 0% 50%;
    filter: blur(40px);
    opacity: 0;
  }
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
