 <template>

 <div class="landing_page">

  <div class="bgVideo_container">
      <video autoplay muted loop id="bgVideo">
        <source src="../assets/bgVideos/bgV2.mp4" type="video/mp4">
      </video>
  </div>  

  <div class="content_container">
    <img class="logo" src="../assets/logo/logoWhite.svg" alt=""  width="500" height="250">
      <div class="text_container">
        <h1>Interstellar Space Travel Agency</h1>
        <p>
          Get the acces to the interactive cosmos, explore planets, learn about space and even more!
          Get the acces to the interactive cosmos, explore planets, learn about space and even more!
        </p>
      </div>
  
      <router-link class="button_container" to="/planet_page">
        <button class="main-button">Enter</button>
      </router-link>
  </div>

 </div> 
       
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Tomorrow:400,500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates&display=swap');


*{
  overflow: hidden;
}

body{
  background-color:#1A1A1A;
  margin:0;
  padding:0;
   overflow: hidden;
}

.landing_page{
  width:100%;
  height:100vh;
  justify-content:center;
  align-items:center;
  display:flex;
}

.bgVideo_container{
  position:absolute;
  top:10;
  left:0;
  z-index:-1;
}


#bgVideo{
  width:100%;
  height:100%;
  filter:opacity(0.9);

  
}


.content_container{
  width:100vh;
  height:80vh;
  flex-direction:column;
  display:flex;
  align-items:center;
  z-index:1;
  // border-radius:10000px;
}

.text_container{
  width:65%;
  height:25%;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
}

h1{
margin:0;
font-size:30px;
color:white;
font-family: 'Montserrat Alternates', sans-serif;
font-family: 'Tomorrow', sans-serif;
}

p{
  margin:5;
   font-size:18px;
   color:white;
   font-family: 'Montserrat Alternates', sans-serif;
}


.button_container{
  display:flex;
  text-decoration:none;
  justify-content:center;
  align-items:flex-start;
  width:100%;
  height:20%;
}


.main-button {
  text-shadow:1.5px 2px 0 #2D2273;
  background: linear-gradient(#5F49F2 30%,#4B39BF);
  width:25%;
  height:40%;
  border: 0;
  font-size:18px;
  font-family: 'Tomorrow', sans-serif;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  position:relative;
  
  &:after {
    background-color:#A093F4;
    content: '';
    display:block;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    border-radius:3px;
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    // animation-timing-function: cubic-bezier(1, 0, 0, 1);
    animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
}

@keyframes blink {
  0% {
    transform:scale3d(1,1,1);
    opacity: 0.8;
  }
  100% {
    transform:scale3d(1.1,1.3,1.1);
    opacity:0;
  }
}

</style>
