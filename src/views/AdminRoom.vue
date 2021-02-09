<template>
<div class="container">
  <div><Header></Header></div>
  <div class="cards">
    <Statements></Statements>
  <div class="rectangle17">
  <div class="inherit">
  <div class="statement">
    <ul><h3>Statement :</h3><li>{{statement}}</li></ul>
    <button>Create Statement</button>
  </div>
  <div class="container17">
    <ul class="users line-height"> <h3> Guest Joined </h3>
      <li>Guest1</li>
      <li>Guest2</li>
      <li>Guest3</li>
      <li>Guest4</li>
    </ul>
  <ul class="stats line-height"> <h3> Statistics </h3>
    <li>Average:</li>
    <li>Median:</li>
    <li>Mode:</li>
  </ul>
  </div>
  <button class="end-room">End Room</button>
  </div>
  </div>
  <div class="rectangle18">
    <div class="title18">CHAT ROOM</div>
    <div class="overflow">
    <!-- Chat Part -->
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
    </div>
    <!-- Type Box -->
    <div class="typebox">
      <div class="type"><input type="text" placeholder="type text here ..."/></div>
      <button class="send">Send</button>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Statements from '../components/Statements.vue'
export default {
  name: 'AdminRoom',
  data () {
    return {
      user: 'Abhi',
      chatText: 'Hey Dude, my chat-box is working good !!',
      statement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    }
  },
  components: { Header, Statements }
}
</script>

<style scoped>
*{
  outline: none;
  list-style-type: none;
}
.inherit{
  height: 82%;
}
.username{
  font-weight: bolder;
  font-size: 110%;
}
.end-room{
  margin-left: 33%;
  border-radius: 10px;
  border-color: white;
  background-color: rgb(231, 118, 118);
  width: 260px;
  height: 50px;
  font-size: 110%;
}
.end-room:active{
  transform:  scale(0.98);
}
.line-height{
  line-height: 0.2em;
}
.users{
 height: 70%;
 width: 400px;
 justify-content: space-between;
}
.stats{
 height: 70%;
 width: 300px;
 border-left: 1px solid black;
}
.container17{
  display: flex;
  flex-direction: row;
  height: 80%;
}
.statement{
 height: auto;
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
}
.statement button{
  margin-top:4%;
  margin-right: 2%;
  border-radius: 10px;
  border-color: white;
  background-color: skyblue;
  width: 260px;
  height: 50px;
  font-size: 110%;
}
.statement button:active{
  transform:  scale(0.98);
}
.statement h3{
  margin-top:2%;
}
h3{
  color: rgb(44, 41, 41);
  letter-spacing: 0.05em;
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
  margin-top:5.3%;
  margin-left:5%;
  width: 90%;
  height: 60%;
  border-radius: 10px;
  border: none;
}
.send{
  width: 20%;
  height: 60%;
  margin-top:4%;
  border-radius: 10px;
  border-color: white;
  background-color: skyblue;
  border-style: outset;
  text-align: center;
}
.send:active{
  transform:  scale(0.98);
}
.overflow{
  overflow-y: scroll;
  background-color:  rgb(236, 235, 235);
  backdrop-filter: blur( 50.0px );
  height: 80%;
}

.triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 10px 10px 10px;
    border-color: transparent transparent #58b666 transparent;
    margin-left: 15px;
}

.message {
    padding: 15px;
    color: #fff;
    max-width: 100%;
    display: inline-block;
    text-align: left;
    border-radius: 5px;
    background-color: #59a765;
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
.cards{
  position: absolute;
  margin-top:70px;
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.rectangle16{
  display: flex;
  flex-direction: column;
width: 23%;
height: auto;
background-color: rgb(188, 161, 219);
backdrop-filter: blur( 15.0px );
box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 24px;
}
.rectangle17{
width: 48%;
height: 100%;
background: rgb(236, 235, 235);
box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 26px;
}
.rectangle17  li{
  line-height: 25px;
  letter-spacing: 0.1em;
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
.title16{
margin-top:20px;
margin-left:25%;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
margin-bottom: 30px;
color: #4e4d4d;
letter-spacing: 0.08em;
}
.title18{
margin-top:20px;
margin-left:26%;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
margin-bottom: 30px;
color: #4e4d4d;
letter-spacing: 0.08em;
}
.history{
margin: 10px;
padding: 15px;
height: auto;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #7B7B7B;
box-shadow: 0px 4px 4px rgba(35, 57, 70, 0.25);
background-color: rgb(245, 230, 208);
border-bottom-left-radius: 30px;
border-top-right-radius: 30px;
}
.history:hover{
transition: transform 1s,background-color 1s;
transform: scale(1.06);
background-color: rgb(171, 248, 223);
}

</style>
