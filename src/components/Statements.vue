<template>
  <div class="rectangle16">
      <div class="title16">STATEMENTS</div>
      <div class="overflow">
        <div v-for="statement in statements" :key="statement.id" class="history">{{statement.statementText}}
        <h3> Score: {{statement.avgScore}}</h3>
        </div>
        <!-- <div class="history">{{content}}
        <h3> Score: {{avg}}</h3>
        </div>
        <div class="history">{{content}}
        <h3> Score: {{avg}}</h3>
        </div>
        <div class="history">{{content}}
        <h3> Score: {{avg}}</h3>
        </div> -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'Statements',
  props: {
    statements: {
      type: Array
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h3{
  color: rgb(44, 41, 41);
  letter-spacing: 0.05em;
}
.overflow{
  overflow-y: auto;
  background: #F8F9F9;
  backdrop-filter: blur( 50.0px );
  height: 80%;
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
.history:hover{
transition: transform 1s,background-color 1s;
transform: scale(1.06);
background-color: rgb(171, 248, 223);
}
</style>
