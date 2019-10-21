<template>
  <div class="footer">
    <div class="footer-content">
      <h3>Write By Mr.Peng <i class="el-icon-apple" style="color: red"></i> JC</h3>
      <div class="copyright">
        <span>Copyright @ 2019 Mr.Peng Inc.All right reserved.</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
@Component({})
export default class Index extends Vue {
}
</script>

<style scoped lang="less">
  .footer{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .footer-content{
     width: 40%;
      height: 5rem;
      text-align: left;
      .copyright{
        padding: 1rem 0;
        border-top: 1px solid black;
        margin-top: .2rem;

      }
    }

  }
</style>
