import 'twin.macro';
import { useState } from 'react';

// Lib
import { useBreakpoint } from '../lib/useBreakpoint';
import { linkCss } from './styles';
import { days, incidentsByDay, legend, uniqueCategories, incidentsCount } from '../lib/transformIncidentsByDay';

import { StackedBarChart } from "./StackedBarChart";
import { VictoryLegendProps } from 'victory';
import { Card } from './Card';

type Props = {
  className?: string;
};

export const IncidentsChart = ({className}: Props) => {
  const [nDays, setNDays] = useState(30);
  const [legendProps, setLegendProps] = useState<VictoryLegendProps>();
  const [barWidth, setBarWidth] = useState(25);
  const [categoryFilter, setCategoryFilter] = useState(uniqueCategories);

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
    setBarWidth(60);
  };

  const [, width] = useBreakpoint({
    xl: () => {
      setNDays(30);
      setLegendProps(props => ({
        ...props,
        height: 40,
        orientation: 'horizontal',
      }));
      setBarWidth(30);
    },
    lg: () => {
      setNDays(30);
      setLegendProps(props => ({
        ...props,
        height: 40,
        orientation: 'horizontal',
      }));
      setBarWidth(25);
    },
    md: mdDefaultFn,
    default: mdDefaultFn,
  });  

  const xAxis = days(nDays);
  const data = incidentsByDay(nDays, categoryFilter);

  return (
    <div tw="space-y-3" className={className}>
      <div tw="flex items-end justify-between px-3">
        <div tw="inline-flex items-center space-x-5">
          <h2 tw="text-6xl">{incidentsCount(nDays)}</h2>
          <div>
            <div tw="text-xl">Incidents</div>
            <div>
              <a href="javascript:void(0)" css={linkCss}>View all</a>
            </div>
          </div>
        </div>
        <h3 tw="md:text-2xl text-xl">Last {nDays} days</h3>
      </div>
      <Card>
        <StackedBarChart
          xAxis={xAxis}
          data={data}
          legend={{
            ...legendProps,
            data: legend,
            width: width,
            gutter: 20,
            symbolSpacer: 10,
            style: {
              data: {
                size: 8
              },
              labels: {
                fontSize: 16
              }
            },
          }}
          width={width}
          barWidth={barWidth}
          padding={{
            top: 0,
            bottom: 50,
            left: 50,
            right: 50,
          }}
          domainPadding={40}
        />
      </Card>
      <div tw="
        flex
        justify-end
        px-3
        text-sm
        text-gray-400
      ">
        Data prototyped with Mockaroo (<a href="https://www.mockaroo.com/schemas/343388" css={linkCss}>Schema</a>)
      </div>
    </div>    
  )
};
