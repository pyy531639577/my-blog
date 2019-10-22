<template>
  <div class="archive">
    <Banner/>
    <v-row class="content">
      <v-col cols="8">
        <v-hover #default="{ hover }">
          <v-card :elevation="hover ? 12 : 4" style="border-radius: 6px">
          <v-row>
            <v-col cols="5">
              <v-card-title>标题</v-card-title>
              <v-card-actions>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-text style="text-align: justify;letter-spacing: 2px;">sdsadkDJIOWQDMKLKJODCASJDCKQdkjl;sajkldjkaDL;ldsaDLKJAsdfjhSDJKaldcjlafcjksaCLHaxdjsajc</v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon class="display-2">mdi-dots-horizontal </v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="7" class="pa-0">
              <div style="width: 100%;height: 300px;background: #2c3e50;border-radius: 0 6px 6px 0"></div>
            </v-col>
          </v-row>
        </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-card>你好</v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import Banner from '@/components/Banner/Index.vue'
@Component({
  components: {
    Banner
  }
})
export default class Index extends Vue {
}
</script>

<style scoped lang="less">
  .archive{
    display: flex;
    flex-direction: column;
    align-items: center;
    .content{
      width: 70%;
      margin-top: 40px;
    }
  }
</style>
