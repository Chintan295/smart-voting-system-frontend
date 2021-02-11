<template>
<div class="container">
  <Header></Header>

    <div class="cards">
      <Statements></Statements>
    <div class="rectangle17">
    <div class="inherit">
    <div class="statement">
      <div class="padding w8"><h3>Statement :</h3><p>{{statement}}</p></div>
      <button class="w2" @click="showPopup" v-show="isAdmin">Create Statement</button>
    </div>
    <div class="container17">
      <div class="inherit"> <h3> Guest Joined </h3>
      <ul class="users line-height">
        <li>Guestkbbkbk <span class="light green"></span></li>
        <li>Guest2 <span class="light red"></span></li>
        <li>Guest3 <span class="light green"></span></li>
        <li>Guest4 <span class="light red"></span></li>
        <li>Guest4 <span class="light green"></span></li>
        <li>Guest4 <span class="light red"></span></li>
        <li>Guest4 <span class="light red"></span></li>
        <li>Guest4 <span class="light green"></span></li>
      </ul>
      </div>
    <div class="stats inherit"> <h3> Statistics </h3>
      <li>Average:</li>
      <li>Median:</li>
      <li>Mode:</li>
    </div>
    <button class="end-room" @click="exit">{{buttonName}}</button>
    </div>
    </div>
    <CreateStatement v-show="visiblePopup" @hide="removePopup"></CreateStatement>
    </div>

  <ChatRoom></ChatRoom>
  </div>
</div>
</template>

<script>
import ChatRoom from '../components/ChatRoom.vue'
import CreateStatement from '../components/CreateStatement.vue'
import Header from '../components/Header.vue'
import Statements from '../components/Statements.vue'
import router from '../router'
export default {
  name: 'AdminRoom',
  data () {
    return {
      user: 'Abhi',
      isAdmin: false,
      buttonName: 'Leave Room',
      visiblePopup: false,
      chatText: 'Hey Dude, my chat-box is working good !!',
      statement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    }
  },
  methods: {
    showPopup () {
      this.visiblePopup = true
    },
    removePopup () {
      this.visiblePopup = false
    },
    exit () {
      if (this.isAdmin) {
        // Remove Every Guest From Room
      } else {
        // Method to remove Guest
        sessionStorage.clear('guestName')
        router.push('/join')
      }
    }
  },
  components: { Header, Statements, ChatRoom, CreateStatement },
  created () {
    const name = sessionStorage.getItem('guestName')
    if (name === null) {
      router.push('/join')
    } else if (name === 'admin') {
      this.isAdmin = true
      this.buttonName = 'End Room'
    }
  }
}
</script>
<style scoped>
.padding{padding: 35px;}
.w8{
  width: 80%;
}
.w2{
  width: 20%;
}
.inherit{
  height:auto;
}

.end-room{
  position: absolute;
  right: 6%;
  bottom: 7%;
  border-radius: 10px;
  border-color: white;
  background-color: rgb(231, 118, 118);
  width: 200px;
  height: 50px;
  font-size: 110%;
  opacity: 0.9;
}
.end-room:active{
  transform:  scale(0.98);
  opacity: 1;
}
.light{
  margin-right: 0px;
  height: 20px;
  width: 20px;
  align-content: center;
  border-radius: 50%;
  border-bottom: 2px solid rgb(44, 41, 41);
  border-right: 2px solid rgb(44, 41, 41);
}
.red{
  background-color: red;
}
.green{
  background-color: rgb(42, 230, 57);
}
.users{
 height: 70%;
 width: 400px;
 justify-content: space-between;
 overflow-y: scroll;
}
.users li{
  margin-top: 5px;
  box-shadow: 0px 0px 0px white,0px 0px 0px white,0px 0px 4px black,0px 0px 0px white;

}
.stats{
 height: 70%;
 max-width: 100%;
}
.container17{
  position: relative;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  max-height: auto;
  bottom: 50px;
}
.statement{
 height: auto;
 max-width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
}
.statement button{
  position: absolute;
  margin-top:4%;
  right:10px;
  border-radius: 10px;
  border-color: white;
  background-color: skyblue;
  width: 150px;
  height: 50px;
  margin-left: 5px;
  font-size: 15px;
  opacity: 0.8;
}
.statement button:active{
  transform:  scale(0.98);
  opacity: 1;
}
.statement h3{
  margin-top:2%;
}
.container17 h3{
  margin-left: 9%;
  text-align:inherit;
  color: rgb(44, 41, 41);
  letter-spacing: 0.05em;
  line-height: 50px;
}
.container17 li{
  padding: 10px;
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
}
ul{
  list-style-type: disc;
}
.cards{
  position: absolute;
  margin-top:70px;
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.rectangle17{
position: relative;
width: 48%;
height: 100%;
background: rgb(236, 235, 235);
box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 26px;
}
</style>
