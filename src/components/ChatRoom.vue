<template>
  <div class="rectangle18">
    <div class="title18">COMMENT ROOM</div>
    <div class="overflow">
    <!-- Chat Part -->
    <div v-for="chat in chats" :key="chat.id" class="chat">
      <span class="you">
        <span class="username"> {{chat.guestName}}</span>
        <div class="triangle"></div>
        <div class="message">
        {{chat.chatMessage}}
        </div>
      </span>
    </div>

    <!-- <div class="chat">
      <span class="you">
       <span class="username"> Vincent</span>
        <div class="triangle"></div>
        <div class="message">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </span>
    </div>

    <div class="chat">
      <span class="you">
       <span class="username"> Vincent</span>
        <div class="triangle"></div>
        <div class="message">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </span>
    </div>

    <div class="chat">
        <span class="username"> Vincent</span>
        <div class="triangle"></div>
        <div class="message">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
    </div>
    <div class="chat">
        <span class="username"> Vincent</span>
        <div class="triangle"></div>
        <div class="message">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
    </div> -->
    </div>
    <!-- Type Box -->
    <div class="typebox">
      <div class="type"><input type="text" placeholder="Send Message ..." v-model="text"/></div>
      <button class="send" @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
// import router from '../router'

import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'
import api from '../connections/api.js'
import axios from 'axios'
export default {
  name: 'ChatRoom',
  data () {
    return {
      text: '',
      chats: [],
      stompClient: '',
      socket: ''
    }
  },
  mounted () {
    this.socket = new SockJS(api.SOCKET_PATH)
    this.stompClient = Stomp.over(this.socket)
    this.stompClient.connect({}, this.chatCallback)
    axios.get(api.SERVER_PATH + '/getChats/' + sessionStorage.getItem('roomId'))
      .then(res => {
        this.chats = res.data.data
      })
  },
  methods: {
    chatCallback () {
      const path = '/topic/chat'
      this.stompClient.subscribe(path, (res) => {
        console.log(JSON.parse(res.body))
        this.chats.push(JSON.parse(res.body))
      })
    },
    sendMessage () {
      if (this.text === '') {
        return ''
      }
      const data = {
        roomId: sessionStorage.getItem('roomId'),
        guestId: sessionStorage.getItem('guestId'),
        guestName: sessionStorage.getItem('guestName'),
        chatMessage: this.text
      }
      this.stompClient.send('/app/chat-send', JSON.stringify(data), {})
      this.text = ''
    }
  }
}
</script>

<style scoped>
.overflow{
  overflow-y: scroll;
  background: #F8F9F9;
  backdrop-filter: blur( 50.0px );
  height: 80%;
}
.typebox{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin-left: 15px;
}
.type{
 align-content: center;
 width: 70%;
 height: 100%;
}
.type input{
  padding: 5px;
  margin-top:5.3%;
  margin-left:5%;
  width: 88%;
  height: 45%;
  border-radius: 10px;
  border: none;
}
.send{
  padding: 5px;
  width: 20%;
  height: 60%;
  margin-top:4%;
  border-radius: 10px;
  border-color: white;
  background-color: rgb(115, 200, 233);
  border-style: outset;
  text-align: center;
  opacity: 0.9;
}
.send:active{
  transform:  scale(0.98);
  opacity: 1;
}
.overflow{
  overflow-y: scroll;
  background: #F8F9F9;
  backdrop-filter: blur( 50.0px );
  height: 80%;
}

.triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 10px 10px 10px;
    border-color: transparent transparent #59a765 transparent;
    margin-left: 15px;
}

.message {
    padding: 15px;
    color: #fff;
    width: 94%;
    display: inline-block;
    text-align: left;
    border-radius: 5px;
    background-color: #59a765;
    font-size: small;
    height: auto;
    overflow-wrap: break-word;

}
.chat {
  padding: 10px 30px;
}

.container{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.rectangle18{
display: flex;
flex-direction: column;
width: 23%;
height: auto;
background-color: rgb(188, 161, 219);
backdrop-filter: blur( 15.0px );
box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
}

.title18{
margin-top:20px;
margin-left:16%;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
margin-bottom: 30px;
color: #4e4d4d;
letter-spacing: 0.08em;
}
.username{
  font-weight:bold;
  font-size:15px;
  color: #4e4d4d;
}
</style>
