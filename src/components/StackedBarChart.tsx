import { theme } from 'twin.macro';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryLegend, VictoryLegendProps, VictoryTooltip, VictoryLabel } from 'victory';
import victoryTheme from '../lib/victoryTheme';

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
  const { width } = props;

  return (
    <div>
      <VictoryChart
        height={400}
        theme={victoryTheme}
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
          { data.map((days, i) => (
            <VictoryBar
              key={i}
              data={days}
              barWidth={barWidth}
              labels={({datum}) => `${datum.y} · ${datum.category}`}
              labelComponent={
                <VictoryTooltip />
              }
            />
          )) }
        </VictoryStack>
      </VictoryChart>
      <div tw="px-12">
        <VictoryLegend
          orientation="horizontal"
          gutter={20}
          width={width}
          theme={victoryTheme}
          {...legend}
        />
      </div>
    </div>
  );
};
