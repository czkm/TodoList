<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="chartData" :scale="scale">
      <v-tooltip :showTitle="false" data-key="item*percent" />
      <!-- <v-axis /> -->
      <v-legend data-key="item" />
      <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig" />
      <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
    </v-chart>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set')

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}]

export default {
  props: {
    chart_config: {
      default: () => [],
      type: Array
    }
  },
  data () {
    return {
      chartData: null,
      scale,
      height: 400,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      labelConfig: ['percent', {
        formatter: (val, item) => {
          return val
        }
      }]

    }
  },
  mounted () {
    this.Data_set()
  },
  methods: {
    Data_set () {
      const dv = new DataSet.View().source(this.chart_config)
      dv.transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      })
      this.chartData = dv.rows
    }

  }
}

</script>
