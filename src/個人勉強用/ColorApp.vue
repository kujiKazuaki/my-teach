<template>
  <!-- 予定の背景の色を変化...クリックした色を表示させる -->
  <div class="output" :style="bgColor"></div>
  <!-- Paletteを作る -->
  <!-- デフォルトカラー14色 -->
  <section class="colorArea">
    <div class="DefaultPalette">
      <div
        v-for="(defaultColor, defaultColorIndex) in defaultColors"
        :key="defaultColorIndex"
        @click="defaultColorBtn(defaultColor.id)"
      >
        <div :class="defaultColor.colorid">{{ defaultColor.color }}</div>
      </div>
    </div>
    <!-- パステルカラー12色 -->
    <div class="PastelPalette">
      <div
        v-for="(pastelColor, pastelColorIndex) in pastelColors"
        :key="pastelColorIndex"
        @click="pastelColorBtn(pastelColor.id)"
      >
        <div :class="pastelColor.colorid">{{ pastelColor.color }}</div>
      </div>

      <!-- グラデーション11色 -->
      <div class="GradationColor">
        <div
          v-for="(Gcolor, GcolorIndex) in Gcolors"
          :key="GcolorIndex"
          @click="GcolorBtn(Gcolor.id)"
        >
          <div :class="Gcolor.colorid">{{ Gcolor.color }}</div>
        </div>
      </div>

      <!-- ミックス6色 -->
      <div class="MixColor">
        <div
          v-for="(mixColor, mixColorIndex) in mixColors"
          :key="mixColorIndex"
          @click="mixColorBtn(mixColor.id)"
        >
          <div :class="mixColor.colorid">{{ mixColor.color }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      defaultColors: [
        { id: 0, colorid: "color1", cl: "rgb(233, 37, 37)" },
        { id: 1, colorid: "color2", cl: "#ff007f" },
        { id: 2, colorid: "color3", cl: "#ff00ff" },
        { id: 3, colorid: "color4", cl: "#7f00ff" },
        { id: 4, colorid: "color5", cl: "purple" },
        { id: 5, colorid: "color6", cl: "#0000ff" },
        { id: 6, colorid: "color7", cl: "#00ffff" },
        { id: 7, colorid: "color8", cl: "#007fff" },
        { id: 8, colorid: "color9", cl: "#00ff7f" },
        { id: 9, colorid: "color10", cl: "#00ff00" },
        { id: 10, colorid: "color11", cl: "greenyellow" },
        { id: 11, colorid: "color12", cl: "#ffff00" },
        { id: 12, colorid: "color13", cl: "#ff7f00" },
        { id: 13, colorid: "color14", cl: "#a19e9ea7" },
      ],
      pastelColors: [
        { id: 0, colorid: "Pcolor1", cl: "#ff7f7f" },
        { id: 1, colorid: "Pcolor2", cl: "#ff7fbf" },
        { id: 2, colorid: "Pcolor3", cl: "#ff7fff" },
        { id: 3, colorid: "Pcolor4", cl: "#bf7fff" },
        { id: 4, colorid: "Pcolor5", cl: "#7f7fff" },
        { id: 5, colorid: "Pcolor6", cl: "#7fbfff" },
        { id: 6, colorid: "Pcolor7", cl: "#7fffff" },
        { id: 7, colorid: "Pcolor8", cl: "#84ffc1" },
        { id: 8, colorid: "Pcolor9", cl: "#7fff7f" },
        { id: 9, colorid: "Pcolor10", cl: "#bfff7f" },
        { id: 10, colorid: "Pcolor11", cl: "#ffff6f" },
        { id: 11, colorid: "Pcolor12", cl: "#ffbf7f" },
      ],
      Gcolors: [
        {
          id: 0,
          colorid: "Gcolor1",
          cl: "linear-gradient(to right, red, #ffb7b7)",
        },
        {
          id: 1,
          colorid: "Gcolor2",
          cl: "linear-gradient(to right, #ff007f, #ffb7db)",
        },
        {
          id: 2,
          colorid: "Gcolor3",
          cl: "linear-gradient(to right, #7f00ff, #ffb7ff)",
        },
        {
          id: 3,
          colorid: "Gcolor4",
          cl: "linear-gradient(to right, #0000ff, #cab7ff)",
        },
        {
          id: 4,
          colorid: "Gcolor5",
          cl: "linear-gradient(to right, #007fff, #b7dbff)",
        },
        {
          id: 5,
          colorid: "Gcolor6",
          cl: "linear-gradient(to right, #00ffff, #b7ffff)",
        },
        {
          id: 6,
          colorid: "Gcolor7",
          cl: "linear-gradient(to right, #00ff7f, #b7ffdb)",
        },
        {
          id: 7,
          colorid: "Gcolor8",
          cl: "linear-gradient(to right, #00ff00, #b7ffb7)",
        },
        {
          id: 8,
          colorid: "Gcolor9",
          cl: "linear-gradient(to right, #7fff00, #dbffb7)",
        },
        {
          id: 9,
          colorid: "Gcolor10",
          cl: "linear-gradient(to right, #ffff00, #ffffb7)",
        },
        {
          id: 10,
          colorid: "Gcolor11",
          cl: "linear-gradient(to right, #ff7f00, #ffdbb7)",
        },
      ],
      mixColors: [
        {
          id: 0,
          colorid: "Mcolor1",
          cl: "linear-gradient(to right, red, yellow)",
        },
        {
          id: 1,
          colorid: "Mcolor2",
          cl: "linear-gradient(to right, yellow, rgb(54, 127, 54))",
        },
        {
          id: 2,
          colorid: "Mcolor3",
          cl: "linear-gradient(to right, blue, green)",
        },
        {
          id: 3,
          colorid: "Mcolor4",
          cl: "linear-gradient(to right, purple, rgb(40, 40, 255))",
        },
        {
          id: 4,
          colorid: "Mcolor5",
          cl: "linear-gradient(to right, #ff7f00, rgb(250, 250, 29))",
        },
        {
          id: 5,
          colorid: "Mcolor6",
          cl: "linear-gradient(to right, green, rgb(70, 242, 251))",
        },
      ],
      bgColor: {
        backgroundColor: "",
        backgroundImage: "",
      },
    }
  },
  methods: {
    defaultColorBtn(defaultColorId) {
      const targetDefaultColorIndex = this.defaultColors.findIndex(
        (defaultColor) => defaultColor.id === defaultColorId
      )
      console.log(targetDefaultColorIndex)
      this.bgColor.backgroundColor =
        this.defaultColors[targetDefaultColorIndex].cl
    },
    pastelColorBtn(pastelColorId) {
      const targetPastelColorIndex = this.pastelColors.findIndex(
        (pastelColor) => pastelColor.id === pastelColorId
      )
      console.log(targetPastelColorIndex)
      this.bgColor.backgroundColor =
        this.pastelColors[targetPastelColorIndex].cl
    },
    GcolorBtn(GcolorId) {
      const targetGcolorIndex = this.Gcolors.findIndex(
        (Gcolor) => Gcolor.id === GcolorId
      )
      console.log(targetGcolorIndex)
      this.bgColor.backgroundImage = this.Gcolors[targetGcolorIndex].cl
    },
    mixColorBtn(mixColorId) {
      const targetmixColorIndex = this.mixColors.findIndex(
        (mixColor) => mixColor.id === mixColorId
      )
      console.log(targetmixColorIndex)
      this.bgColor.backgroundImage = this.mixColors[targetmixColorIndex].cl
    },
  },
}
</script>

<style>
.output {
  width: 100px;
  height: 100px;
  border: 2px solid black;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.colorArea {
  display: block;
  margin: 0 auto;
  /* border: 2px solid red; */
}

.DefaultPalette {
  display: flex;
  margin: 3%;
}

.PastelPalette {
  display: flex;
  margin: 3%;
}

.GradationColor {
  display: flex;
  margin: 5%;
}

.MixColor {
  display: flex;
  margin: 5%;
}

/* デフォルトカラー */
.color1 {
  width: 40px;
  height: 40px;
  background-color: rgb(233, 37, 37);
  border-radius: 50% 50% 0 50%;
}

.color2 {
  width: 40px;
  height: 40px;
  background-color: #ff007f;
  border-radius: 50% 50% 0 50%;
}

.color3 {
  width: 40px;
  height: 40px;
  background-color: #ff00ff;
  border-radius: 50% 50% 0 50%;
}

.color4 {
  width: 40px;
  height: 40px;
  background-color: #7f00ff;
  border-radius: 50% 50% 0 50%;
}

.color5 {
  width: 40px;
  height: 40px;
  background-color: purple;
  border-radius: 50% 50% 0 50%;
}

.color6 {
  width: 40px;
  height: 40px;
  background-color: #0000ff;
  border-radius: 50% 50% 0 50%;
}

.color8 {
  width: 40px;
  height: 40px;
  background-color: #007fff;
  border-radius: 50% 50% 0 50%;
}

.color7 {
  width: 40px;
  height: 40px;
  background-color: #00ffff;
  border-radius: 50% 50% 0 50%;
}

.color9 {
  width: 40px;
  height: 40px;
  background-color: #00ff7f;
  border-radius: 50% 50% 0 50%;
}

.color10 {
  width: 40px;
  height: 40px;
  background-color: #00ff00;
  border-radius: 50% 50% 0 50%;
}

.color11 {
  width: 40px;
  height: 40px;
  background-color: greenyellow;
  border-radius: 50% 50% 0 50%;
}

.color12 {
  width: 40px;
  height: 40px;
  background-color: #ffff00;
  border-radius: 50% 50% 0 50%;
}

.color13 {
  width: 40px;
  height: 40px;
  background-color: #ff7f00;
  border-radius: 50% 50% 0 50%;
}

.color14 {
  width: 40px;
  height: 40px;
  background-color: #a19e9ea7;
  border-radius: 50% 50% 0 50%;
}

/* パステルカラー */
.Pcolor1 {
  width: 40px;
  height: 40px;
  background-color: #ff7f7f;
  border-radius: 50% 50% 0 50%;
}

.Pcolor2 {
  width: 40px;
  height: 40px;
  background-color: #ff7fbf;
  border-radius: 50% 50% 0 50%;
}

.Pcolor3 {
  width: 40px;
  height: 40px;
  background-color: #ff7fff;
  border-radius: 50% 50% 0 50%;
}

.Pcolor4 {
  width: 40px;
  height: 40px;
  background-color: #bf7fff;
  border-radius: 50% 50% 0 50%;
}

.Pcolor5 {
  width: 40px;
  height: 40px;
  background-color: #7f7fff;
  border-radius: 50% 50% 0 50%;
}

.Pcolor6 {
  width: 40px;
  height: 40px;
  background-color: #7fbfff;
  border-radius: 50% 50% 0 50%;
}

.Pcolor7 {
  width: 40px;
  height: 40px;
  background-color: #7fffff;
  border-radius: 50% 50% 0 50%;
}

.Pcolor8 {
  width: 40px;
  height: 40px;
  background-color: #84ffc1;
  border-radius: 50% 50% 0 50%;
}

.Pcolor9 {
  width: 40px;
  height: 40px;
  background-color: #7fff7f;
  border-radius: 50% 50% 0 50%;
}

.Pcolor10 {
  width: 40px;
  height: 40px;
  background-color: #bfff7f;
  border-radius: 50% 50% 0 50%;
}

.Pcolor11 {
  width: 40px;
  height: 40px;
  background-color: #ffff6f;
  border-radius: 50% 50% 0 50%;
}

.Pcolor12 {
  width: 40px;
  height: 40px;
  background-color: #ffbf7f;
  border-radius: 50% 50% 0 50%;
}

/* グラデーション */
.Gcolor1 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, red, #ffb7b7);
  border-radius: 50% 50% 0 50%;
}

.Gcolor2 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #ff007f, #ffb7db);
  border-radius: 50% 50% 0 50%;
}

.Gcolor3 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #7f00ff, #ffb7ff);
  border-radius: 50% 50% 0 50%;
}

.Gcolor4 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #0000ff, #cab7ff);
  border-radius: 50% 50% 0 50%;
}

.Gcolor5 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #007fff, #b7dbff);
  border-radius: 50% 50% 0 50%;
}

.Gcolor6 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #00ffff, #b7ffff);
  border-radius: 50% 50% 0 50%;
}

.Gcolor7 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #00ff7f, #b7ffdb);
  border-radius: 50% 50% 0 50%;
}

.Gcolor8 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #00ff00, #b7ffb7);
  border-radius: 50% 50% 0 50%;
}

.Gcolor9 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #7fff00, #dbffb7);
  border-radius: 50% 50% 0 50%;
}

.Gcolor10 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #ffff00, #ffffb7);
  border-radius: 50% 50% 0 50%;
}

.Gcolor11 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #ff7f00, #ffdbb7);
  border-radius: 50% 50% 0 50%;
}

/* ミックスカラー */
.Mcolor1 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, red, yellow);
  border-radius: 50% 50% 0 50%;
}

.Mcolor2 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, yellow, rgb(54, 127, 54));
  border-radius: 50% 50% 0 50%;
}

.Mcolor3 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, blue, green);
  border-radius: 50% 50% 0 50%;
}

.Mcolor4 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, purple, rgb(40, 40, 255));
  border-radius: 50% 50% 0 50%;
}

.Mcolor5 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #ff7f00, rgb(250, 250, 29));
  border-radius: 50% 50% 0 50%;
}

.Mcolor6 {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, green, rgb(70, 242, 251));
  border-radius: 50% 50% 0 50%;
}
</style>
