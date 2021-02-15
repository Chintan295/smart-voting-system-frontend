<template>
<div>
  <Header></Header>
  <div class="create-room-cont">
    <div>
      <h2>Create Your Room</h2>
    </div>
    <div>
      <div class="form_data">
        <label>Room name</label>
        <input type="text" v-model="roomName"/>
      </div>
      <div class="form_data">
        <label>Room description</label>
        <input type="text" v-model="description"/>
      </div>
      <div class="form_data">
        <label>Password</label>
        <input type="password" v-model="password"/>
      </div>
      <div class="form_data">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <input type="checkbox" v-model="rules"/></p>
      </div>
    </div>
    <div class="btn-position">
      <button class="red btn" @click="clearData">Clear</button>
      <button class="green btn" @click="createRoom">Create</button>
    </div>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import '../assets/util.css'
import router from '../router'
import axios from 'axios'
import api from '../connections/api'
export default {
  components: { Header },
  name: 'CreateRoom',
  data () {
    return {
      roomName: '',
      password: '',
      description: '',
      rules: false
    }
  },
  methods: {
    clearData () {
      this.roomName = ''
      this.description = ''
      this.rules = false
      this.password = ''
    },
    createRoom () {
      console.log(this.password)
      if (this.password === '' || this.roomName === '' || this.description === '') {
        alert('Empty Fields..')
        return
      }
      if (this.rules === false) {
        alert('Please Select Terms & Condition..')
        return
      }
      const roomData = {
        roomName: this.roomName,
        roomDescription: this.description,
        password: this.password
      }
      axios.post(api.SERVER_PATH + '/createRoom', roomData)
        .then(res => {
          localStorage.setItem('roomName', this.roomName)
          localStorage.setItem('roomId', res.roomId)
          router.push('/create/sucess/' + res.data.data.roomId)
        })
        .catch(e => { console.log(e) })
    }
  }
}
</script>

<style lang='scss' scoped>
.create-room-cont{
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
  line-height: 37px;
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
input[type='text'], input[type='password']{
  width: 55%;
  border: 0px;
  padding: 5px;
  border-bottom: 1px solid #A2A2A2;
  font-size: 17px;
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
  font-size: 17px;
}
.btn-position{
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
