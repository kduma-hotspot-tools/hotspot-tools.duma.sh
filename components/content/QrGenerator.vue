<template>
    <div style="margin-bottom: 16px">
      <ButtonLink @click="() => current_view = 'code'" v-if="current_view != 'code'">Show Code</ButtonLink>
      <ButtonLink @click="() => current_view = 'qr'" v-if="current_view != 'qr'">Show animated QR</ButtonLink>
    </div>
    <div v-if="current_view == 'code'">
      <textarea style="border-radius: 8px; padding: 8px 16px; resize: none; width: 100%" :rows='contents.toString().split("\n").length' v-model="contents"></textarea>
    </div>
    <div v-if="current_view == 'qr'">
<!--      {{ current_config_num }}/{{ parts.length }}-->
      <qrcode-vue :value="qr_content" :size="300" level="L" :margin="5" render-as="svg" v-if="qr_content != ''" />
    </div>
</template>

<script type="ts">
import QrcodeVue from 'qrcode.vue'

export default {
  name: "QrGenerator",
  components: {
    QrcodeVue,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    view: {
      type: String,
      default: "code",
    },
  },
  data() {
    return {
      current_view: this.view,
      qr_content: "",
      contents: this.value,
      config_timer: null,
      current_config_num: 0,
      parts: [],
    };
  },
  methods: {
    refresh() {
      if(this.parts.length > 1) {
        this.qr_content = `PART-${this.current_config_num + 1}/${this.parts.length}=${this.parts[this.current_config_num]}`;

        this.current_config_num++;
        if (this.current_config_num >= this.parts.length) {
          this.current_config_num = 0;
        }
      } else {
        this.qr_content = this.parts[0];
        clearInterval(this.config_timer);
      }
    },
    stop() {
      this.parts = [];
      this.qr_content = "";
      this.current_config_num = 0;
      clearInterval(this.config_timer);
    },
    start() {
      if(this.contents == "") return;


      this.parts = this.contents.match(/[\s\S]{1,75}/g) || [];
      this.config_timer = setInterval(this.refresh, 250);

      this.refresh();
    },
  },
  mounted() {
    if (this.view == "qr")
      this.start();
  },
  watch: {
    current_view: function (val) {
      if (val == "code") {
        this.stop();
      } else {
        this.start();
      }
    },
  },
}
</script>

<style scoped>

</style>