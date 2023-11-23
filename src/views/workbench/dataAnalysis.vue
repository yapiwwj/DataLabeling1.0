<template>
  <div>
    <headerNav></headerNav>
    <sidebarWork></sidebarWork>
    <div class="analysisBox">
      <header class="top">
        <div class="img-box">
          <img
            class="img1"
            src="../../assets/back.png"
            alt=""
          >
          <span>返回</span>
        </div>
        <div class="img-box">
          <img
            class="img2"
            src="../../assets/file-plus.png"
            alt=""
          >
          <span>导入</span>
        </div>
        <div class="img-box">
          <img
            class="img3"
            src="../../assets/target.png"
            alt=""
          >
          <span>统计&分析</span>
        </div>
        <div class="img-box">
          <img
            class="img4"
            src="../../assets/next.png"
            alt=""
          >
          <span>继续</span>
        </div>
      </header>
      <div class="flexbox">
        <div class="analysisbox">
          <header class="titlebox">
            <h2 class="title">分析表</h2>
          </header>
          <!-- 存放图表 -->
          <div class="echartsbox">
            <p>统计&分析--折线图</p>
            <!-- 折线图 -->
            <div id="container1">
              <div id="newCharts1"></div>
            </div>
            <p>统计&分析--饼状图</p>
            <div id="container2">
              <div id="newCharts2"></div>
            </div>
          </div>
        </div>
        <div class="auditbox">
          <header class="titlebox">
            <h2 class="title">二审台</h2>
          </header>
          <div class="audit">
            <header class="frequency">频率</header>
            <div class="dataFrequency">
              <p>{{ name.n1 }} 出现频率: {{dataFrequency.object  }}%</p>
              <p>{{ name.n2 }} 出现频率: {{dataFrequency.time  }}%</p>
              <p style="color: red;">{{ name.n3 }}
                出现频率:{{dataFrequency.address }}%</p>
              <p>{{ name.n4 }} 出现频率: {{dataFrequency.event }}%</p>
              <p>{{ name.n5 }} 出现频率: {{dataFrequency.terminology }}%</p>
              <p>{{ name.n6 }} 出现频率: {{dataFrequency.o1 }}%</p>
              <p>{{ name.n7 }} 出现频率: {{dataFrequency.o2 }}%</p>
              <p>{{ name.n8 }} 出现频率: {{dataFrequency.o3 }}%</p>
              <p>{{ name.n9 }} 出现频率: {{dataFrequency.o4 }}%</p>
            </div>
          </div>
          <div class="audit">
            <header class="frequency">分析建议</header>
            <p>Tagster建议您删除 <span style="color: #3977F1;">#地点</span> 标签
            </p>
          </div>

        </div>
      </div>
      <footer>
        <van-button
          type="info"
          round
          style="padding: 1px 30px;background-color: #0f6fde;"
          @click="toBench"
        >返回工作台</van-button>
      </footer>
    </div>
  </div>
</template>

<script>
import headerNav from '@/components/headerNav.vue'
import sidebarWork from '@/components/sidebarWork.vue'
export default {
  data () {
    return {
      name: {
        n1: 'object',
        n2: 'time',
        n3: 'address',
        n4: 'event',
        n5: 'terminology',
        n6: 'o1',
        n7: 'o2',
        n8: 'o3',
        n9: 'o4'

      },
      dataFrequency: {
        object: 7.29,
        time: 20.42,
        address: 0.072,
        event: 21.15,
        terminology: 9.12,
        o1: 10.94,
        o2: 16.41,
        o3: 10.94,
        o4: 3.64
      }
    }
  },
  methods: {
    lineCharts () {
      const myChart1 = this.$echarts.init(document.getElementById('newCharts1'))// 也可以通过$refs.newCharts的方式去获取到dom实例。
      myChart1.setOption({
        // 无障碍花纹
        aria: {
          enabled: true,
          decal: {
            show: true
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%']
        },
        visualMap: {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 1,
              lt: 3,
              color: 'rgba(0, 0, 180, 0.4)'
            },
            {
              gt: 5,
              lt: 7,
              color: 'rgba(0, 0, 180, 0.4)'
            }
          ]
        },
        series: [
          {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#5470C6',
              width: 5
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: true },
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
            },
            areaStyle: {},
            data: [
              ['对象', 200],
              ['时间', 560],
              ['地点', 2],
              ['事件', 580],
              ['术语', 250],
              ['标签1', 300],
              ['标签2', 450],
              ['标签3', 300],
              ['标签4', 100]
            ]
          }
        ]
      })
    },
    pieChartS () {
      const myChart2 = this.$echarts.init(document.getElementById('newCharts2'))// 也可以通过$refs.newCharts的方式去获取到dom实例。
      myChart2.setOption({
        // 无障碍花纹
        aria: {
          enabled: true,
          decal: {
            show: true
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '数据源自',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold',
                color: '#3977f1'

              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 200, name: '对象' },
              { value: 560, name: '时间' },
              { value: 2, name: '地点' },
              { value: 580, name: '事件' },
              { value: 250, name: '术语' },
              { value: 300, name: '标注1' },
              { value: 450, name: '标注2' },
              { value: 300, name: '标注3' },
              { value: 100, name: '标注4' }
            ]
          }
        ]
      })
    },
    toBench () {
      this.$router.push('/workbench/workBench')
    }
  },
  mounted () {
    this.lineCharts()
    this.pieChartS()
  },
  components: {
    headerNav,
    sidebarWork
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:#E9F0FE')
  }
}
</script>

<style lang="less" scoped>
// @import "../../styles/common.less";
.analysisBox {
  position: relative;
  width: 78%;
  height: 1900px;
  box-shadow: #525457 0rem 0rem 0.625rem;
  border-radius: 1rem;
  background-color: #fff;
  margin: 1.875rem 0 0 17.8125rem;
  .top {
    border-bottom: 0.125rem solid #0f6fde;
    display: flex;
    justify-content: flex-start;
    div {
      cursor: pointer;
      padding: 0.625rem 0.625rem;
      border-radius: 2rem;
      img {
        width: 1.5625rem;
        height: 1.5625rem;
        vertical-align: middle;
        margin: 0 0.3125rem 0 0;
      }
    }
    div:hover {
      background-color: #cce8ff;
      span {
        color: #0f6fde;
      }
      .img1 {
        content: url(../../assets/back-blue.png);
      }
      .img2 {
        content: url(../../assets/file-plus-blue.png);
      }
      .img3 {
        content: url(../../assets/target-blue.png);
      }
      .img4 {
        content: url(../../assets/next-blue.png);
      }
    }
  }
  .flexbox {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 10%;
    .analysisbox {
      width: 90%;
      border-radius: 1rem;
      border: 0.125rem solid #1c69ff;
      margin-bottom: 2%;
      .echartsbox {
        position: relative;
        // height: 80%;
        text-align: center;
        p {
          text-align: center;
          font-size: 24px;
        }
        .pieChart {
          height: 650px;
        }
      }
    }
    .auditbox {
      width: 90%;
      border-radius: 1rem;
      border: 0.125rem solid #1c69ff;
      .audit {
        width: 90%;
        padding-left: 5%;
        margin: 30px 0 30px 2%;
        border-radius: 16px;
        border: 2px solid #0f6fde;
        header {
          font-size: 20px;
          font-weight: bold;
          padding-top: 10px;
        }
        .dataFrequency {
          display: flex;
          flex-wrap: wrap;
          p {
            padding: 0 100px 10px 0;
          }
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: end;
    padding-right: 30px;
    margin: 50px;
  }
}
.titlebox {
  padding: 0.625rem 0 0.125rem 0;
  padding-left: 2.5rem;
  .title {
    width: 5rem;
    margin: 0.3125rem 0.3125rem;
    border-radius: 1rem;
    background-color: #9dbff1;
  }
}
// echarts样式
#container1 {
  width: 100%;
  height: 500px;
  #newCharts1 {
    margin: 0 auto;
    width: 80%;
    height: 500px;
  }
}
#container2 {
  width: 100%;
  height: 500px;
  #newCharts2 {
    margin: 0 auto;
    width: 80%;
    height: 500px;
  }
}
</style>
