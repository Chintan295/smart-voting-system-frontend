<template>
<div>
  <Header></Header>
  <div class="room_info_cont">
    <img src='@/assets/check.png'/>
    <h2>Room has been created successfully</h2>
    <div class="room">
      <div class="label">Room ID: </div>
      <div class="info" id='roomId'>{{roomId}}</div>
      <i class="fas fa-copy copy_icon"></i>
      <div class="tooltip">
        <span class="tooltiptext" @click="copyRoomId" @mouseout="setCopyToClipboard">{{ tooltiptext }}</span>
      </div>
    </div>
    <div class="room">
      <div class="label">Room URL: </div>
      <div class="info" id='roomUrl'>http://10.177.68.61:8080/join?roomId={{roomId}}</div>
      <i class="fas fa-copy copy_icon"></i>
      <div class="tooltip">
        <span class="tooltiptext" @click="copyRoomUrl" @mouseout="setCopyToClipboard">{{ tooltiptext }}</span>
      </div>
    </div>
    <button class="green btn join" @click="routeToJoinRoom()">Join</button>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import '../assets/util.css'
import router from '../router'
export default {
  components: { Header },
  name: 'RoomCreated',
  data () {
    return {
      roomId: '',
      tooltiptext: 'Copy to clipboard'
    }
  },
  methods: {
    copyRoomId () {
      const roomId = document.getElementById('roomId')
      this.copyStrFunction(roomId.innerText)
      this.setCopied()
    },
    copyRoomUrl () {
      const roomUrl = document.getElementById('roomUrl')
      this.copyStrFunction(roomUrl.innerText)
      this.setCopied()
    },
    setCopied () {
      this.tooltiptext = 'Copied'
    },
    setCopyToClipboard () {
      this.tooltiptext = 'Copy to clipboard'
    },
    copyStrFunction (copyStr) {
      const el = document.createElement('textarea')
      el.value = copyStr
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    },
    routeToJoinRoom () {
      router.push('/join?roomId=' + this.roomId)
    }
  },
  created () {
    const url = window.location.href.split('/')
    this.roomId = url[url.length - 1]
  }
}
</script>

<style lang='scss' scoped>
.room_info_cont{
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width:40%;
  height: 620px;
  text-align: center;
  margin: auto;
  padding: 20px;
  top:80px;
}
img{
  margin: 20px 0px 20px;
  width: 300px;
  height: 300px;
}
h2{
  margin: 0px 0px 20px;
  color: #369BE4;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
}
.room{
  display: flex;
  justify-content: space-between;
  width:90%;
  margin: auto;
  .label{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #797979;
    margin: 10px;
  }
  .info{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #0167B0;
    margin: 10px;
  }
  .copy_icon{
    color: #86BEFF;
    cursor: pointer;
    font-size: 25px;
    margin: 10px;
  }
}
.join{
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.tooltip{
  position: absolute;
  text-align: center;
  right:35px;
}
.tooltiptext{
  background: #000;
  padding: 5px;
  color: white;
  border-radius: 5px;
  opacity: 0;
}
.tooltiptext::after{
  content: '';
  position: relative;
  top: 28px;
  right: 22px;
  border: 5px solid black;
  border-color: black transparent transparent transparent;
}
.tooltiptext:hover{
  opacity: 1;
  cursor: pointer;
}
</style>
