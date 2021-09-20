import 'twin.macro';
import { useState } from 'react';
import { StackedBarChart } from './Chart';
import { days, incidentsByDay, legend } from '../lib/transformIncidentsByDay';
import { useBreakpoint } from '../lib/useBreakpoint';

import { VictoryLegendProps } from 'victory';

export const App = () => {
  const [nDays, setNDays] = useState(30);
  const [legendProps, setLegendProps] = useState<VictoryLegendProps>();

  const mdDefaultFn = () => {
    setNDays(7);
    setLegendProps(props => ({
      ...props,
      height: 180,
      orientation: 'vertical',
      style: {
        labels: {
          fontSize: 14
        }
      }
    }));
  };

  const [, width] = useBreakpoint({
    lg: () => {
      setNDays(30);
      setLegendProps(props => ({
        ...props,
        height: 40,
        orientation: 'horizontal',
      }));
    },
    md: mdDefaultFn,
    default: mdDefaultFn,
  });  

  const xAxis = days(nDays);
  const data = incidentsByDay(nDays);

  return (
    <div>
      <div tw="container mx-auto px-5 sm:pt-32 pt-16">
        <div tw="space-y-3">
          <div tw="flex items-end justify-between px-3">
            <h1 tw="text-4xl font-bold text-gray-900">Incidents</h1>
            <h2 tw="text-2xl font-bold text-gray-900">Last {nDays} days</h2>
          </div>
          <div tw="border border-gray-200 rounded-lg">
            <StackedBarChart
              xAxis={xAxis}
              data={data}
              legend={{
                data: legend,
                width: width,
                ...legendProps,
              }}
              width={width}
              padding={{
                top: 50,
                bottom: 50,
                left: 50,
                right: 50,
              }}
              domainPadding={40}
            />
          </div>
        </div>
      </div>
    </div>
  )
};
