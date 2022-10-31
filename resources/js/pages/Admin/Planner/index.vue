<template>
  <v-container>
    <v-row>
      <v-col>
        <svg>
          <!--  -->
        </svg>
      </v-col>
      <v-col>
        <v-container>
          <v-card v-if="selectedDog">
            <v-card-title>
              <h3 class="headline mb-0">{{ selectedDog.name }}</h3>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="selectedDog.name" label="Dog Name"/>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="selectedDog.breed" label="Dog Breed"/>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="selectedDog.stud" label="Stud"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import * as d3 from 'd3';
  import Layout from '@/layouts/Admin/Layout';

  export default {
    props: {
      dogs: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        w: 500,
        h: 800,
        selectedDog: null,
        dataset: null
      };
    },
    methods: {
      draw() {
        // create svg
        const { w, h, dataset } = this;

        const svg = d3.select('svg')
          .attr('width', w)
          .attr('height', h);

        // create defs for arrowhead
        const defs = svg.append('defs')
          .append('marker')
          .attr('id', 'arrowhead')
          .attr('markerWidth', 7)
          .attr('markerHeight', 6)
          .attr('refX', 0)
          .attr('refY', 2.5)
          .attr('orient', 'auto')
          .append('polygon')
          // points is x,y points for the path of the arrowhead
          .attr('points', '0 0, 5 2.5, 0 5');


        // create a vertical axis using Date in weeks as the scale
        const weekYScale = d3.scaleTime()
          .domain([
            // 8 weeks before the first min date
            d3.min(dataset, d => d.heat),
            d3.max(dataset, d => d3.timeWeek.offset(d.heat, 8))
          ])
          .range([0, h - 100]);

        const weekXScale = d3.scaleBand()
          .domain([
            d3.min(dataset, d => d.heat),
            d3.max(dataset, d => d3.timeWeek.offset(d.heat, 8))
          ])

          .range([0, w]);


        const yAxis = d3.axisRight(weekYScale)
          .ticks(d3.timeWeek.every(4)) // show every week

          // format as 2000 Jul/03
          .tickFormat(d3.timeFormat('%Y %b/%d'));


        // const dogLines =
        svg
          .append('g')
          .attr('transform', (d, i) => 'translate(60, 0)')
          .selectAll('line')
          .data(dataset)
          .enter()
          .append('line')
          .attr('x1', (d, i) => i * 10)
          .attr('x2', (d, i) => i * 10)
          .attr('y1', (d, i) => weekYScale(d.heat))
          .attr('y2', (d, i) => weekYScale(d3.timeWeek.offset(d.heat, 8)))
          .attr('stroke', (d, i) => d3.schemeCategory10[i])
          .attr('stroke-width', 10)

          .on('click', (e, d) => {
            this.selectedDog = d;
          });

        // const dogLabels =
        svg
          .append('g')
          .attr('transform', (d, i) => 'rotate(90) translate(0, -56)')
          .selectAll('text')
          .data(dataset)
          .enter()
          .append('text')
          .attr('font-size', 9)
          //   .attr('transform', '0,0')
          // because we rotated the text,we use the y attribute to position the text
          .attr('x', (d, i) => weekYScale(d.heat) + 20)
          // find the center of the line and place the label there
          .attr('y', (d, i) => i * -10)
          .style('text-anchor', 'middle')
          // color of the text
          .attr('fill', 'white')
          .text(d => d.name);

        svg.append('g')
          .attr('transform', 'translate(0, 0)')
          .call(yAxis);
      }
    },
    mounted() {
      console.log(this.dogs);


      const ds = this.dogs;

      this.dataset = ds.map(d => {
        return {
                ...d,
            heat: new Date(d.get_next_est_heat_date_attribute)
        };
      })
        .sort((a, b) => a.heat - b.heat);

      this.draw();
    },
    layout: Layout
  };
</script>

<style lang="scss" scoped>

</style>
