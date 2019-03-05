<template>
  <div class="contributor">
    <p class="contributor-title">主要贡献者名单</p>
    <template v-for="(contributor, index) in contributors">
      <div class="contributor-info" :key="index">
        <figure class="contributor-avatar">
          <img :src="contributor.avatar"/>
          <figcaption>作者</figcaption>
        </figure>
        <div class="contributor-detail">
          <p><span>姓名：</span>{{contributor.name}}</p>
          <p><span>网名：</span>{{contributor.nickname}}</p>
          <p><span>职业：</span>{{contributor.career}}</p>
          <ul>
            <template v-for="(link, key) in contributor.links">
              <li :key="key"><a :href="link.url" target="_blank" rel="noopener noreferrer">{{link.name}}</a></li>
            </template>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'about-container',
  data() {
    return {
      contributors: [
        {
          avatar: '//avatars2.githubusercontent.com/u/8049878',
          name: 'liuliangsir',
          nickname: '流浪大法师',
          career: 'web 前端开发工程师',
          links: [
            {
              name: 'Github',
              url: '//github.com/liuliangsir'
            },
            {
              name: '博客',
              url: '//webfrontend.dev'
            },
            {
              name: '知乎',
              url: '//www.zhihu.com/people/liu-liang-77-21'
            },
            {
              name: '微博',
              url: '//weibo.com/u/3582863145'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.contributor
  padding 40px 20px
  max-width 960px
  margin 0 auto
  &-title
    margin-bottom 40px
  &-avatar
    width 100px
    margin-right 20px
    padding 20px
    text-align center
    border-right 1px solid #e4e4e4
    img
      width 40px
      height 40px
      border-radius 20px
    figcaption
      margin 0
  &-detail
    p,
    ul
      margin 5px
    ul
      padding-left 0
      list-style-type none
      li
        display inline-block
        line-height initial
        &:not(:last-child)
          margin-right 10px
          border-right 1px solid #e5e5e5
    a
      padding-right 10px
  &-info
    display flex
    align-items center
    padding 20px
    box-shadow 0 2px 6px 0 #e3e7f6
    border-radius 4px
    &:not(:last-child)
      margin-bottom 40px
</style>
