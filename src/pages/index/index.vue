<template>
    <view class="content">
        <img class="logo" src="../../static/logo.png" />
        <view>
            <text class="title">{{ title }}</text>
        </view>
        <uni-ec-canvas class="uni-ec-canvas" canvas-id="multi-charts-line" :ec="ec" />
        <uni-ec-canvas class="uni-ec-canvas" canvas-id="multi-charts-pie" :ec="ec2" />
    </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            title: 'Hello',
            ec: {
                // option: {
                //     title: {
                //         text: ''
                //     },
                //     tooltip: {
                //         trigger: 'axis',
                //         formatter: '{b}\r\n{c0}人',
                //         axisPointer: {
                //             type: 'line',
                //             axis: 'x',
                //             label: {
                //                 backgroundColor: '#000000'
                //             }
                //         }
                //     },
                //     grid: {
                //         left: '6%',
                //         right: '6%',
                //         top: '6%',
                //         bottom: '6%',
                //         containLabel: true
                //     },
                //     xAxis: {
                //         type: 'category',
                //         boundaryGap: false,
                //         data: ['2-12', '2-14', '2-16', '2-18', '2-20', '2-22', '2-24'],
                //         axisLine: {
                //             // y轴
                //             show: false
                //         },
                //         axisTick: {
                //             // y轴刻度线
                //             show: false
                //         },
                //         splitLine: {
                //             // 网格线
                //             show: false
                //         }
                //     },
                //     yAxis: {
                //         type: 'value',
                //         axisLine: {
                //             // y轴
                //             show: false
                //         },
                //         axisTick: {
                //             // y轴刻度线
                //             show: false
                //         },
                //         splitLine: {
                //             // 网格线
                //             show: false
                //         }
                //     },
                //     series: [
                //         {
                //             name: '浏览量',
                //             type: 'line',
                //             smooth: true,
                //             areaStyle: {
                //                 color: {
                //                     type: 'linear',
                //                     x: 0,
                //                     y: 0,
                //                     x2: 0,
                //                     y2: 1,
                //                     colorStops: [
                //                         {
                //                             offset: 0,
                //                             color: '#E50113' // 0% 处的颜色
                //                         },
                //                         {
                //                             offset: 1,
                //                             color: '#fff' // 100% 处的颜色
                //                         }
                //                     ],
                //                     global: false // 缺省为 false
                //                 }
                //             },
                //             lineStyle: {
                //                 color: '#EF5959'
                //             },
                //             data: [120, 132, 101, 134, 90, 230, 210]
                //         }
                //     ]
                // }
                option: {
                    // title: {
                    //     text: '折线图堆叠'
                    // },
                    tooltip: {
                        trigger: 'axis',
                        formatter: '{b0}: {c0}%<br />{b1}: {c1}%'

                        // axisPointer: {
                        //     type: 'line',
                        //     axis: 'x',
                        //     label: {
                        //         backgroundColor: '#f00'
                        //     }
                        // }
                    },
                    legend: {
                        data: ['我的酒店', '附近5公里']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['近7天', '近30天', '近60天', '近90天', '未来7天']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}%'
                        }
                    },
                    series: [
                        {
                            name: '我的酒店',
                            type: 'line',
                            data: [33, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '附近5公里',
                            type: 'line',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        }
                    ]
                }
            },
            ec2: {
                option: {
                    title: {
                        text: '7,5950',
                        left: 'center',
                        top: '40%',
                        subtext: '客户总数',
                        subtextStyle: {
                            color: '#959595',
                            fontSize: 12,
                            align: 'center'
                        },
                        textStyle: {
                            color: '#19193E',
                            fontSize: 23,
                            align: 'center'
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            label: {
                                position: 'outside',
                                color: '#19193E',
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                },
                                fontSize: 10
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {
                                    value: 3321,
                                    name: '直销中心',
                                    itemStyle: {
                                        normal: { color: '#EF5959' },
                                        emphasis: { color: '#EF5959' }
                                    }
                                },
                                {
                                    value: 1148,
                                    name: '手动录入',
                                    itemStyle: {
                                        normal: { color: '#ffa974' },
                                        emphasis: { color: '#ffa974' }
                                    }
                                },
                                {
                                    value: 2532,
                                    name: '线上访客',
                                    itemStyle: {
                                        normal: { color: '#ffc68a' },
                                        emphasis: { color: '#ffc68a' }
                                    }
                                },
                                {
                                    value: 1148,
                                    name: '线下拓客',
                                    itemStyle: { color: '#F0DD93' }
                                },
                                {
                                    value: 1148,
                                    name: '名片海报',
                                    itemStyle: { color: '#E7CB84' }
                                },
                                {
                                    value: 1148,
                                    name: '自然来访',
                                    itemStyle: { color: '#7EBD95' }
                                },
                                { value: 1148, name: '分享家', itemStyle: { color: '#687793' } }
                            ]
                        }
                    ]
                }
            }
        }
    },
    methods: {}
})
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
        height: 200rpx;
        width: 200rpx;
        margin: 200rpx auto 50rpx auto;
    }
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}

.uni-ec-canvas {
    width: 750upx;
    height: 750upx;
    display: block;
}
</style>
