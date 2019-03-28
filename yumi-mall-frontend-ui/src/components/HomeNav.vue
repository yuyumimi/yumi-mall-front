<template>
  <div class="nav-container">
    <div class="nav-item">
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="nav-body">
      <!-- 侧边导航 -->
      <div class="nav-side" ref="navSide">
        <ul>
          <li v-for="(item,index) in category" :key="index" @mouseenter="showChildren(item.children)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">{{item.name}}</span>
          </li>
          <!-- <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">手机</span> /
            <span class="nav-side-item">运营商</span> /
            <span class="nav-side-item">数码</span>
          </li> -->
          
          
        </ul>
      </div>
      <div class="nav-content">
        <!-- 幻灯片 -->
        <div>
          
        </div>
        <div class="nav-show">
          
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="detail-item-panel panel-1" :duration="{ enter: 100, leave: 100 }" v-show="panel1" @mouseenter="showDetail(1)" ref="itemPanel1" @mouseleave="hideDetail(1)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData1.navTags" :key="index">{{item}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in children" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.name}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
      <div class="detail-item-panel panel-2" :duration="{ enter: 100, leave: 100 }" v-show="panel2" @mouseenter="showDetail(2)" ref="itemPanel2" @mouseleave="hideDetail(2)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData2.navTags" :key="index">{{item}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData2.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { productCategory } from '/api/index.js'

export default {
  name: 'HomeNav',
  data () {
    return {
      category: [],
      panel1: false,
      panel2: false,
      nav: [],
      panelData1: {
        navTags: [ ],
        classNav: [
          {
            title: '面部护肤',
            tags: [ '补水保湿', '卸妆', '洁面', '爽肤水', '乳液面霜', '精华', '眼霜', '防晒', '面膜', '剃须', '套装' ]
          },
          {
            title: '洗发护发',
            tags: [ '洗发', '护发', '染发', '造型', '假发', '美发工具', '套装' ]
          }
        ]
      },
      panelData2: {
        navTags: [ '赛事', '运动城', '户外馆', '健身房', '骑行馆', '钟表城' ],
        classNav: [
          {
            title: '2017新品',
            tags: [ '休闲鞋', '商务休闲鞋', '正装鞋', '帆布鞋', '凉鞋', '拖鞋', '功能鞋', '增高鞋', '工装鞋', '雨鞋' ]
          },
          {
            title: '运动鞋包',
            tags: [ '跑步鞋', '休闲鞋', '篮球鞋', '帆布鞋', '板鞋', '拖鞋', '运动包' ]
          }
        ]
      },
      children: []
    };
  },
  computed: {
  },
  methods: {
    showDetail (index) {
      index === 1 ? (this.panel1 = true) : (this.panel2 = true);
    },
    hideDetail (index) {
      index === 1 ? (this.panel1 = false) : (this.panel2 = false);
    },
    showChildren(children){
      this.children=children;
      this.panel1 = true;
    }
  },
  mounted () {
    productCategory().then(res => {
      if (res.success === false) {
        this.error = true
        return
      }
      this.category=res.data
    })
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  updated () {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
  }
};
</script>

<style scoped>
.nav-container{
  float: left;
}
.nav-item {
  width: 680px;
  height: 36px;
  margin: 0px auto;
}
.nav-item ul {
  list-style: none;
  margin-left: 15px;
}
.nav-item li {
  float: left;
  font-size: 16px;
  font-weight: bold;

  margin-left: 30px;
}
.nav-item a {
  text-decoration: none;
  color: #555555;
}
.nav-item a:hover {
  color: #d9534f;
}
/*大的导航信息，包含导航，幻灯片等*/
.nav-body {
  width: 1220px;
  height: 500px;
  margin: 0px auto;
}
.nav-side {
  text-align: left;
  width: 200px;
  height: 100%;
  padding: 0px;
  color: #fff;
  /* color: #636363; */
  float: left;
  /* background-color: #fefefe; */
  background-color: rgba(0,0,0,0.6);
}
.nav-side ul {
  width: 100%;
  padding: 0px;
  padding-top: 15px;
  list-style: none;
}
.nav-side li {
  padding: 7.5px;
  padding-left: 15px;
  font-size: 14px;
  line-height: 18px;
}
.nav-side li:hover {
  background: #999395;
}
.nav-side-item:hover {
  cursor: pointer;
  color: #c81623;
}

/*导航内容*/
.nav-content {
  width: 792px;
  margin-left: 15px;
  overflow: hidden;
  float: left;
}
/*导航图片*/
.nav-show-img {
  margin-top: 10px;
  float: left;
}
.nav-show-img:nth-child(2) {
  margin-left: 12px;
}
/*显示商品*/
.content {
  width: 100%;
}
/*显示商品详细信息*/
.detail-item-panel {
  text-align: left;
  width: 1020px;
  height: 500px;
  background-color: #fff;
  position: absolute;
  top: 168px;
  left: 389px;
  z-index: 999;
}
.nav-detail-item {
  margin-left: 26px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #eee;
}
.nav-detail-item span {
  padding: 6px;
  padding-left: 12px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6e6568;
}
.nav-detail-item span:hover {
  margin-left: 15px;
  background-color: #f44336;
}
.detail-item-panel ul {
  list-style: none;
}
.detail-item-panel li {
  line-height: 38px;
  margin-left: 40px;
}
.detail-item-title {
  padding-right: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: #555555;
}
.detail-item-title:hover {
  color: #d9534f;
}
.detail-item-row a {
  color: #555555;
}
.detail-item{
  font-size: 14px;
  padding-left: 12px;
  padding-right: 8px;
  cursor: pointer;
  border-left: 1px solid #ccc;
}
.detail-item:hover {
  color: #d9534f;
}
.thumb {
    margin-right: 12px;
    vertical-align: middle;
}
</style>
