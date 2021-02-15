<template>
  <div class="popup1">
    <div class="popup_content1">
      <h2>The Room has been ended</h2>
      <button class="green btn btn_pos1" @click="goToHome">Ok</button>
    </div>
  </div>
</template>
<script>
import '../assets/util.css'
import router from '../router/index'
export default {
  name: 'RoomEnded',
  methods: {
    goToHome () {
      router.push('/')
    }
  }
}
</script>
<style scoped>
.popup1{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(58, 57, 57, 0.438);
  height: 100vh;
  width: 100vw;
  z-index: 2;
}
.popup_content1{
  position: relative;
  height: 25vh;
  width: 25%;
  padding: 20px;
  border-radius: 20px;
  background: white;
  text-align: center;
  animation-name: example;
  animation-duration: 1s;
}
@keyframes example {
  from { opacity: 0;}
  to {opacity: 1;}
}
h2{
  color: #959595;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
}
.btn_pos1{
  margin-top: 40px;
}
</style>
