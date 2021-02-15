<template>
<div class="container">
  <Header></Header>

    <div class="cards">
      <Statements :statements="statements"></Statements>
    <div class="rectangle17">
    <div class="inherit">
    <div class="statement">
      <div class="padding w8"><h3>Statement :</h3><p>{{statementToDisplay.statementText}}</p></div>
      <button class="w2" @click="showPopup" v-show="isAdmin">Create Statement</button>
    </div>
    <div class="container17">
      <div class="inherit">
        <div class="flex">
          <h3> Guest Joined </h3>
          <h3 class="label" v-show="isVoted">Your Score: {{score}}</h3>
          <select v-show="!isVoted" v-model="selectedVote">
            <option v-for="value in 10" :key="value.id">{{value}}</option>
          </select>
          <button class="green btn" v-show="!isVoted" @click="submitVote">Submit</button>
        </div>
      <ul class="users line-height">
        <li v-for="guest in guests" :key="guest.id">{{guest.guestName}} <span v-show="isAdmin">{{guest.guestScore}}</span><span :class="`light ${guest.voted?'green':'red'}`"></span></li>
      </ul>
      </div>
    <div class="stats inherit"> <h3> Statistics </h3>
      <li>Mean: {{this.statistics.mean}}</li>
      <li>Median: {{this.statistics.median}}</li>
      <li>Mode: {{this.statistics.mode}}</li>
    </div>
    <button class="end-room" @click="exit">{{buttonName}}</button>
    </div>
    </div>
    <CreateStatement v-show="visiblePopup" @hide="removePopup" @addStatement="addStatement"></CreateStatement>
    </div>

  <ChatRoom></ChatRoom>
  <RoomEnded v-show="roomEnded"></RoomEnded>
  </div>
</div>
</template>

<script>
import ChatRoom from '../components/ChatRoom.vue'
import CreateStatement from '../components/CreateStatement.vue'
import Header from '../components/Header.vue'
import Statements from '../components/Statements.vue'
import router from '../router'
import api from '../connections/api'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'
import axios from 'axios'
import '../assets/util.css'
import RoomEnded from '../components/RoomEnded.vue'
export default {
  name: 'AdminRoom',
  data () {
    return {
      user: 'Abhi',
      guests: [],
      isAdmin: false,
      roomId: '',
      buttonName: 'Leave Room',
      visiblePopup: false,
      chatText: 'Hey Dude, my chat-box is working good !!',
      statements: [],
      statementToDisplay: '',
      selectedVote: 1,
      isVoted: true,
      roomEnded: false,
      score: 0,
      statistics: {
        mean: 0.0,
        median: 0.0,
        mode: 0.0
      }
    }
  },
  async mounted () {
    const url = new URL(window.location.href)
    this.roomId = url.searchParams.get('roomId')
    if (this.roomId === null) {
      router.push('/join')
    }
    axios.get(api.SERVER_PATH + '/findGuestById/' + sessionStorage.getItem('guestId'))
      .then(res => {
        this.score = res.data.data.guestScore
      })
    const guestList = await axios.get(api.SERVER_PATH + '/getGuests/' + this.roomId)
    this.guests = guestList.data.data
    axios.get(api.SERVER_PATH + '/getCurrentStatement/' + this.roomId)
      .then(res => {
        console.log(res.data.data)
        this.statementToDisplay = res.data.data
        this.guests.forEach(guest => {
          if (guest.guestId === sessionStorage.guestId) {
            this.isVoted = guest.voted
          }
        })
        this.getStatistics()
      })
      .catch(() => { this.isVoted = true })
    axios.get(api.SERVER_PATH + '/getStatements/' + sessionStorage.roomId)
      .then(res => {
        this.statements = res.data.data
      })
    const name = sessionStorage.getItem('guestName')
    console.log(name)
    if (name === null) {
      router.push('/join')
    } else if (name === 'admin') {
      this.isAdmin = true
      this.buttonName = 'End Room'
    }
    this.socket = new SockJS(api.SOCKET_PATH)
    this.stompClient = Stomp.over(this.socket)
    this.stompClient.connect({}, () => {
      this.removeGuestCallback()
      this.guestCallback()
      this.removeAdminCallback()
      this.statementCallback()
      this.scoreCallback()
    })
  },
  methods: {
    addStatement (statementToBeAdded) {
      const obj = {
        statementText: statementToBeAdded,
        roomId: sessionStorage.roomId
      }
      axios.post(api.SERVER_PATH + '/createStatement', obj)
        .then(res => {
          this.stompClient.send('/app/statement', JSON.stringify(res.data.data), {})
          this.visiblePopup = false
        })
    },
    submitVote () {
      const scoreData = {
        roomId: sessionStorage.roomId,
        guestId: sessionStorage.guestId,
        guestName: sessionStorage.guestName,
        statementId: this.statementToDisplay.statementId,
        score: this.selectedVote
      }
      this.stompClient.send('/app/addScoreSocket', JSON.stringify(scoreData), {})
      this.isVoted = true
      this.score = this.selectedVote
    },
    scoreCallback () {
      const path = '/topic/addScoreSocket'
      this.stompClient.subscribe(path, (res) => {
        const guestRes = JSON.parse(res.body).data
        console.log(guestRes)
        this.guests.map(guest => {
          if (guest.guestId === guestRes.guestId) {
            guest.voted = true
            guest.guestScore = guestRes.guestScore
          }
        })
        this.getStatistics()
      })
    },
    getStatistics () {
      axios.get(api.SERVER_PATH + '/getStatistics/' + this.statementToDisplay.statementId)
        .then(res => {
          this.statistics = res.data
        })
        .catch(() => {
          this.statistics = {
            mean: 0.0,
            median: 0.0,
            mode: 0.0
          }
        })
    },
    statementCallback () {
      const path = '/topic/statement'
      this.stompClient.subscribe(path, (res) => {
        if (this.statementToDisplay !== '') {
          this.statementToDisplay.avgScore = this.statistics.mean
          this.statements.push(this.statementToDisplay)
        }
        this.statementToDisplay = JSON.parse(res.body)
        this.isVoted = false
        this.guests.map(guest => {
          guest.guestScore = 0
          guest.voted = false
        })
        this.getStatistics()
      })
    },
    guestCallback () {
      const path = '/topic/joinRoomSocket'
      console.log('guestCallback')
      this.stompClient.subscribe(path, (res) => {
        console.log(JSON.parse(res.body))
        this.guests.push(JSON.parse(res.body))
      })
    },
    removeGuestCallback () {
      console.log('removeGuest')
      const path = '/topic/removeGuestSocket'
      this.stompClient.subscribe(path, (res) => {
        this.guests = this.guests.filter(guest => {
          return res.body !== guest.guestId
        })
      })
    },
    removeAdminCallback () {
      console.log('removeAdmin')
      const path = '/topic/removeAdminSocket'
      this.stompClient.subscribe(path, (res) => {
        console.log(sessionStorage.guestName + 'jkkdjk')
        if (sessionStorage.guestName !== 'admin') {
          this.roomEnded = true
        } else {
          router.push('/')
        }
        sessionStorage.removeItem('guestName')
        sessionStorage.removeItem('guestId')
        sessionStorage.removeItem('roomId')
      })
    },
    showPopup () {
      this.visiblePopup = true
    },
    removePopup () {
      this.visiblePopup = false
    },
    exit () {
      if (!this.isAdmin) {
        // Remove Every Guest From Room
        const obj = {
          guestId: sessionStorage.getItem('guestId')
        }
        this.stompClient.send('/app/removeGuestSocket', JSON.stringify(obj), {})
        sessionStorage.removeItem('guestName')
        sessionStorage.removeItem('guestId')
        sessionStorage.removeItem('roomId')
        router.push('/')
      } else {
        // Method to remove Guest
        const obj = {
          roomId: this.roomId
        }
        this.stompClient.send('/app/removeAdminSocket', JSON.stringify(obj), {})
      }
    }
  },
  components: { Header, Statements, ChatRoom, CreateStatement, RoomEnded }
}
</script>
<style lang='scss' scoped>
.label{
  margin-left:7%;
}
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
ul{
  max-height: 300px;
  min-height: 300px;
}
.end-room{
  position: absolute;
  bottom: 20px;
  right: 30px;
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
  background: #F8F9F9;
  justify-content: space-evenly;
}

.rectangle17{
position: relative;
width: 48%;
height: 100%;
background: #F8F9F9;
box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 26px;
}
.flex{
  display: flex;
  align-items: center;
  select{
    text-align: center;
    margin: 0px 10px;
    width: 20%;
    height: 30px;
    border-radius: 10px;
    padding:0px 25px;
  }
  button{
    background: rgb(145, 199, 145);
    font-size:18px;
    padding: 5px 10px;
  }
}
</style>
