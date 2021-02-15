<template>
  <div class="popup" @click="hide" id='popup'>
    <div class="popup_content">
      <h2>Create statement</h2>
      <textarea placeholder="Write your statement" v-model="statement"></textarea>
      <button class="green btn btn_pos" @click="createStatement">Create</button>
    </div>
  </div>
</template>

<script>
import '../assets/util.css'
export default {
  name: 'CreateStatement',
  data () {
    return {
      visible: 'invisible',
      statement: ''
    }
  },
  methods: {
    hide (event) {
      if (event.target.id.toString() === 'popup') {
        this.$emit('hide')
      }
    },
    createStatement () {
      if (this.statement !== '') {
        this.$emit('addStatement', this.statement)
        this.statement = ''
      } else {
        alert('Empty Feild of Statement !!')
      }
    }
  },
  created () {
    console.log(this.visible)
    this.visible = 'visible'
  }
}
</script>

<style lang='scss'>
.popup{
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
.popup_content{
  position: relative;
  height: 50vh;
  width: 40%;
  border-radius: 20px;
  background: white;
  text-align: center;
  animation-name: example;
  animation-duration: 1s;
}

@keyframes example {
  from { opacity: 0; height: 10vh; width: 10%; }
  to {opacity: 1; height: 50vh; width: 40%;}
}

h2{
  color: #959595;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
}
textarea{
  resize: none;
  width: 90%;
  height: 20vh;
  border-radius: 15px;
  padding: 10px;
  border: 1px solid #959595;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
}
textarea::placeholder{
  color: rgb(197, 195, 195);
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
}
.btn_pos{
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
