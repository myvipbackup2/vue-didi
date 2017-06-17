<template>
  <div class="mf-wrap">
    <header></header>
    <div class="mf-dialog">
      <span class="mf-dialog-close">
        <i class="mfic-narrow-cancel"></i>
      </span>
      <div class="confirm">
        <!---->
        <h2 class="mf-dialog-title">您确定要取消？</h2>
        <div class="mf-dialog-tip">
          <div>司机可能已经在路上了，取消前请确认已与师傅
            <span class="highlight">充分沟通</span>
          </div>
        </div>
        <!---->
        <div class="mf-dialog-btns border-right-1px">
          <a href="javascript:;" class="border-top-1px">取消行程</a>
          <a href="tel:" class="border-top-1px mf-dialog-btn-active">联系师傅</a>
        </div>
        <!---->
      </div>
      <div class="back">
        <button @click="goBack">
          返回
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .mf-wrap, .mf-dialog {
    margin: 100px auto;
  }

  button {
    font-size: 18px;
    background: #4A4C5B;
    border: none;
    width: 90%;
    padding: 10px;
    color: #fff;
    letter-spacing: 2px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  .back {
    margin-top: 30px;
  }
</style>

<script>
  import header from '../home/header.vue'
  export default {
    data(){
      return {}
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      }
    },
    components: {
      header
    }
  }
</script>
