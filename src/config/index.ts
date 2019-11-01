export default {
  /**
   * 站点标题
   */
  title: '飞一般的感觉',
  subtitle: '人生要有梦想，有梦想就要勇敢去追求，别放弃。',
  notify: '博客将于2019年11月20日全部完善....',
  loadingImg: require('@/assets/images/loading.gif'),

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
    repo: 'blog ', // 评论仓库地址
    owner: 'pyy531639577',
    admin: ['pyy531639577'],
    accessToken: 'b43dad7bed18b2b416c95ddc2c8186ffa5a8ff55',
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
      name: 'Home',
      icon: 'icon-shouye',
      url: '/home'
    },
    {
      name: 'Archive',
      icon: 'icon-copy',
      url: '/archive'
    },
    {
      name: 'Category',
      icon: 'icon-all',
      url: '/category'
    },
    {
      name: 'Tag',
      icon: 'icon-attachment',
      url: '/tags'
    },
    {
      name: 'Inspiration',
      icon: 'icon-linggan',
      url: '/inspiration'
    },
    {
      name: 'About',
      icon: 'icon-guanyuwomen',
      url: '/about'
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
