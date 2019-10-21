export default {
  /**
   * 站点标题
   */
  title: '我的博客',
  subtitle: '好好学习 天天向上',
  notify: '博客将于2019年11月20日全部完善....',

  /**
   * Github Issues 配置【文章、说说、书单、友链】
   */
  username: 'pyy531639577', // github 用户名
  repository: 'blog', // 文章仓库地址
  // token 从中间任意位置拆开成两部分，避免 github 代码检测失效
  token: ['b43dad7bed18b2b416c', '95ddc2c8186ffa5a8ff55'],

  /**
   * Gitalk 配置【评论功能】，详细文档参见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: '1a406e7403a3e357cf7c',
    clientSecret: 'fb91b2632df77393ba5a08c510380b0236f4af89',
    repo: 'comment', // 评论仓库地址
    owner: 'pyy531639577',
    admin: ['pyy531639577'],
    distractionFreeMode: false // 是否开始无干扰模式【背景遮罩】
  },

  defaultCover: require('@/assets/images/defaultCover.jpg'),

  /**
   * leancloud 配置 【文章浏览次数】
   */
  leancloud: {
    appId: 'HtW4QAwRumoyflMiuo9tjTGm-gzGzoHsz',
    appKey: 'kTqchYgkwivtaDIo1ImbGHNk'
  },

  // 菜单
  menu: [
    {
      name: '首页',
      icon: 'icon-shouye',
      url: ''
    },
    {
      name: '归档',
      icon: 'icon-copy',
      url: ''
    },
    {
      name: '分类',
      icon: 'icon-all',
      url: ''
    },
    {
      name: '标签',
      icon: 'icon-attachment',
      url: ''
    },
    {
      name: '灵感',
      icon: 'icon-linggan',
      url: ''
    },
    {
      name: '关于我',
      icon: 'icon-guanyuwomen',
      url: ''
    }
  ],

  // 联系方式
  contact: [
    {
      icon: require('@/assets/code/github.png'),
      name: 'github',
      link: 'https://github.com/pyy531639577'
    },
    {
      icon: require('@/assets/code/码云.png'),
      name: '码云',
      link: 'https://gitee.com/JuWaiRenDian'
    },
    {
      icon: require('@/assets/code/csdn.png'),
      name: 'CSDN',
      link: 'https://blog.csdn.net/pengyangyan'
    },
    {
      icon: require('@/assets/code/微信.png'),
      name: '微信',
      img: require('@/assets/images/wx.jpg')
    },
    {
      icon: require('@/assets/code/微博.png'),
      name: '微博',
      link: '#'
    },
    {
      icon: require('@/assets/code/支付宝.png'),
      name: '支付宝',
      img: require('@/assets/images/zfb.jpg')
    },
    {
      icon: require('@/assets/code/邮箱.png'),
      name: '邮箱',
      link: 'mailto:531639577@qq.com'
    },
    {
      icon: require('@/assets/code/tim.png'),
      name: 'QQ',
      img: require('@/assets/images/qq.jpg')
    }
  ]

}
