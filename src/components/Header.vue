<template>
  <div class="header">
    <img class="logo" src="~@/assets/logo.svg"/>
    <router-link to="/"><span class="home">HOME</span></router-link>
    <router-link to="/"><span class="about">ABOUT</span></router-link>
    <router-link to="/team"><span class="team">TEAM</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: absolute;
  width: 100%;
  height: 60px;
  left: 0px;
  top: 0px;
  background: #90E0EF;
}
.header:hover{
  transition: background-color 2s;
  background-color: #4acde4;
}
.logo{
position: absolute;
width: 100px;
height: 60px;
left: 2px;
top: 0px;
}

.home{
  position: absolute;
width: 91px;
height: 55px;
top: 5px;
left: 109px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: #444444;
}

.about{
  position: absolute;
width: 91px;
height: 55px;

left: 200px;

top: 5px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: #444444;
}
.team{
position: absolute;
width: 103px;
height: 55px;
left: 291px;
top: 5px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: #444444;

}
</style>
