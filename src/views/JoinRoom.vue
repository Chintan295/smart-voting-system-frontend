<template>
<div>
  <Header></Header>
  <div class='join_room_cont'>
    <h2>Join Room</h2>
    <div class="form_data">
      <label>Room Id</label>
      <input type="text" v-model="roomId"/>
    </div>
    <div class="form_data">
      <label>Select</label>
      <select @change="select">
        <option>Admin</option>
        <option>Guest</option>
      </select>
    </div>
    <div class="form_data" v-show="guestSelected">
      <label>Guest Name</label>
      <input type="text" v-model="guestName"/>
    </div>
    <div class="form_data" v-show="!guestSelected">
      <label>Password</label>
      <input type="password" v-model="password"/>
    </div>
    <div class="btn-position" >
      <button class="green btn" @click="joinRoom">Join</button>
    </div>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import '../assets/util.css'
import router from '../router/index.js'
import axios from 'axios'
import api from '../connections/api'
export default {
  components: { Header },
  name: 'JoinRoom',
  data: () => {
    return {
      guestSelected: false,
      roomId: '',
      guestName: '',
      password: ''
    }
  },
  methods: {
    select (event) {
      // console.log(event.target.value)
      if (event.target.value === 'Guest') {
        this.guestSelected = true
      } else {
        this.guestSelected = false
      }
    },
    joinRoom () {
      if (this.roomName === '' || (this.guestSelected && this.guestName === '') || (!this.guestSelected && this.password === '')) {
        alert('Empty Fields..')
        return
      }
      if (this.guestName !== '') {
        sessionStorage.setItem('guestName', this.guestName)
      } else {
        this.guestName = 'admin'
        sessionStorage.setItem('guestName', 'admin')
      }
      // if (this.password !== '') {
      //   sessionStorage.setItem('password', this.password)
      // }
      if (this.guestName === 'guest') {
        const joinData = {
        roomId: this.roomId,
        roomName: localStorage.getItem('roomId'),
        guestName: this.guestName
      }
      axios.post(api.SERVER_PATH+'/svs/joinRoomAsGuest', joinData)
        .then(res => {
          
          router.push('/admin')
        })
      
      }
      
    }
  }
}
</script>

<style lang='scss' scoped>
.join_room_cont{
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 40%;
  height: 620px;
  padding: 20px;
  margin: auto;
  top:80px;
}
h2{
  text-align: center;
  color: #03045E;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
}
label{
  font-family: Roboto;
  font-size: 25px;
  line-height: 37px;
  color: #494949;
}
label::after{
  content: '*';
  color: red;
}
input[type='text'], input[type='password'],select{
  width: 55%;
  border: 0px;
  padding: 10px;
  border-bottom: 1px solid #A2A2A2;
  font-size: 17px;
}
select{
  font-size: 15px;
}
.form_data{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 90%;
  margin: auto;
  flex-wrap: wrap;
}
p{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
}
.btn-position{
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
