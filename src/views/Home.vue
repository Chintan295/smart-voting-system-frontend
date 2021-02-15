<template>
<div>
  <Header></Header>
  <div class="rectangle4">
    <div class="title4">SVS</div>
    <div class="rectangle3"><img src="~@/assets/logo.svg" height=116% width=88%/></div>
    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  </div>
    <div class="title" >WELCOME TO SMART VOTING ROOM</div>
    <router-link to="/create"><button class="rectangle6 text6">CREATE ROOM</button></router-link>
    <router-link to="/join"><button class="rectangle5 text5">JOIN ROOM</button></router-link>
</div>
</template>

<script>
import Header from '../components/Header.vue'
// import router from '../router/index.js'
export default {
  components: { Header },
  name: 'Home',
  methods: {
  }
}
</script>

<style scoped>
button{
  border: white;
  outline: none;
  letter-spacing: 2px;
}
.rectangle4{
position: absolute;
width: 635px;
height: 660px;
left: 2%;
top: 80px;
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
border-radius: 21px;
}
.title4{
position: absolute;
width: 666px;
height: 77px;
left: 38px;
top: 10px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 37px;
display: flex;
align-items: center;

color: #000000;
}
.rectangle3{
position: absolute;
width: 625px;
height: 350px;
left: 33px;
top: 90px;
background-repeat: no-repeat;
background-size: cover;
}
.text{
position: absolute;
right: 14px;
height: 89px;
left: 5%;
top: 540px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 21px;

color: #000000;
}
.title{
position: absolute;
left: 49%;
top: 25%;
right:2%;
font-family: Roboto;
font-style: normal;
font-weight: 900;
font-size: 48px;
line-height: 56px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 2px;
color: #FFFFFF;

text-shadow: 0px 0px 10px #5a7377;
}
.rectangle5{
position: absolute;
width: 502px;
height: 69px;
left: 817px;
top: 471px;
display: flex;
align-items: center;
justify-content: center;
background: #A8DADC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}
.rectangle6{
position: absolute;
width: 502px;
height: 69px;
left: 817px;
top: 358px;
display: flex;
align-items: center;
justify-content: center;
background: #BDE0FE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}
button:hover{
  transition: transform 1s;
  transform: scale(0.95);
  /* transform-origin: top left; */
}
.text5 , .text6{
position: absolute;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #1C9A9F;
}

</style>
