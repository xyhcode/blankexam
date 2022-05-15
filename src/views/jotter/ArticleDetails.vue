<template>
  <div class="articles-area">
    <el-card style="text-align: left;width: 990px;margin: 35px auto 0 auto">
      <div>
        <span style="font-size: 20px"><strong>{{article.article_title}}</strong></span>
        <el-divider content-position="left">{{article.create_time | create_time}}</el-divider>
        <div class="markdown-body">
          <div v-html="article.article_content_html"></div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'ArticleDetails',
    data () {
      return {
        article: []
      }
    },
    mounted () {
      this.loadArticle()
    },
    methods: {
      loadArticle () {
        var _this = this
        this.$axios.get('/article/' + this.$route.query.id).then(resp => {
          if (resp && resp.data.code === 200) {
            _this.article = resp.data.data
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/markdown.css";
</style>
