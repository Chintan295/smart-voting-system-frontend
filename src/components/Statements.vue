<template>
  <div class="rectangle16">
      <div class="title16">STATEMENTS</div>
      <div class="overflow">
        <div class="history">{{content}}
        <h3> Score: {{avg}}</h3>
        </div>
        <div class="history">{{content}}
        <h3> Score: {{avg}}</h3>
        </div>
        <div class="history">{{content}}
        <h3> Score: {{avg}}</h3>
        </div>
        <div class="history">{{content}}
        <h3> Score: {{avg}}</h3>
        </div>
        <div class="history">{{content}}
        <h3> Score: {{avg}}</h3>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Statements',
  data () {
    return {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      avg: '5'
    }
  }
}
</script>

<style scoped>

</style>
