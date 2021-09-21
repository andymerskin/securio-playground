import 'twin.macro';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryLegend, VictoryLegendProps } from 'victory';
import MaterialTheme from '../lib/victoryTheme';

type Props = {
  data: Array<
    Array<{
      x: number,
      y?: number
    }>
  >;
  legend: VictoryLegendProps;
  xAxis: Array<number>;
  [rest: string]: any;
};

export const StackedBarChart = ({ data, xAxis, legend, barWidth, ...props }: Props) => {
  const { width, padding } = props;

  return (
    <div>
      <VictoryChart
        height={400}
        theme={MaterialTheme}
        {...props}
      >
        <VictoryAxis
          tickValues={xAxis}
          style={{
            grid: {
              stroke: 'none'
            }
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: {
              stroke: 'none'
            }
          }}
        />
        <VictoryStack>
          { data.map((data, i) => (
            <VictoryBar
              key={i}
              data={data}
              barWidth={barWidth}
            />
          )) }
        </VictoryStack>
      </VictoryChart>
      <div tw="px-12">
        <VictoryLegend
          orientation="horizontal"
          gutter={20}
          width={width}
          theme={MaterialTheme}
          {...legend}
        />
      </div>
    </div>
  );
};
