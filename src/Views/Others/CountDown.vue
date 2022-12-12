<template>
  <div id="timer" style="text-align: center">
    <div class="timer">
      <div class="time">
        {{ formatTime }}
      </div>
      <button v-on:click="start" v-if="!timeOn">Start</button>
      <button v-on:click="stop" v-if="timeOn">Stop</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "countDownTest",
  data() {
    return {
      timeOn: false,
      sec: 59,
      min: 59,
      Obj: null,
    }
  },
  methods: {
    count: function () {
      if (this.sec <= 0 && this.min >= 1) {
        this.sec = 59
        this.min--
      } else if (this.sec <= 0 && this.min <= 0) {
        this.complete()
      } else {
        this.sec--
      }
    },
    start() {
      let self = this

      this.Obj = setInterval(function () {
        self.count()
      }, 1000)
      this.timeOn = true
    },
    stop() {
      clearInterval(this.Obj)
      this.timeOn = false
    },
    complete() {
      clearInterval(this.Obj)
    },
  },
  computed: {
    formatTime: function () {
      let timeStrings = [this.min.toString(), this.sec.toString()].map(
        function (str) {
          if (str.length < 2) {
            return "0" + str
          } else {
            return str
          }
        }
      )

      return timeStrings[0] + ":" + timeStrings[1]
    },
  },
}
</script>
