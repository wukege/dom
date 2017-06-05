## 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + fetch + sass + flex + svg



# 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 ，node 7 是先行版，有可能会出问题，建议使用 node 6 稳定版

```
git clone https://github.com/bailicangdu/vue2-elm.git  

cd vue2-elm

npm install

```

### 编译环境
```
npm run dev

访问 http://localhost:8088
```


### 生产环境
```
npm run build

```



# 关于 demo 与 数据 的说明

1、下载代码运行后，因为开启了反向代理，可以获取真实的官方数据，最终可以进行下单(真实的下单，而不是模拟，下单后可以在官方App中查看并付款，亲自试过，且成功付款点餐)，但是为了安全起见，登录的帐号为固定的帐号，以免泄露个人信息，不过照样可以点餐。

2、demo的数据为模拟的固定数据，只做为效果演示，因为反向代理必须在PC端运行代码才行。



# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── elm                                         // 上线项目文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── common                              // 公共组件
│   │   │   └── alertTip.vue                    // 弹出框组件
│   │   ├── footer
│   │   │   └── footGuide.vue                   // 底部公共组件
│   │   └── header
│   │       └── head.vue                        // 头部公共组件
│   ├── config                                  // 基本配置
│   │   ├── env.js                              // 环境切换配置
│   │   ├── fetch.js                            // 获取数据
│   │   └── mUtils.js                           // 常用的js方法
│   ├── images                                  // 公共图片
│   ├── page
│   │   ├── home
│   │   │   └── home.vue                        // 首页
│   │   └── login
│   │       └── login.vue                       // 登录注册页
│   ├── plugins                                 // 引用的插件
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   │   └── tempdata                            // 开发阶段的临时数据
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   └── style
│       ├── common.scss                         // 公共样式文件
│       ├── mixin.scss                          // 样式配置文件
│       └── swiper.min.css
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
.

56 directories, 203 files
```
