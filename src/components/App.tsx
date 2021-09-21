import 'twin.macro';
import { useState } from 'react';
import Select from 'react-select';

import { StackedBarChart } from './Chart';
import { days, incidentsByDay, legend, selectCategories, uniqueCategories } from '../lib/transformIncidentsByDay';
import { useBreakpoint } from '../lib/useBreakpoint';

import { VictoryLegendProps } from 'victory';
import { xor } from 'lodash';

export const App = () => {
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

  // const legendEvents: VictoryLegendProps['events'] = [
  //   {
  //     target: 'data',
  //     eventHandlers: {
  //       onClick: (e) => {         
  //         return [
  //           {
  //             target: 'data',
  //             mutation: (props) => {
  //               console.log({props});                
  //               setCategoryFilter(state => xor(state, [props.datum.name]));

  //               return {
  //                 style: {
  //                   ...props.style,
  //                   opacity: !categoryFilter.includes(props.datum.name) ? 1 : 0.5,
  //                 }
  //               }
  //             }
  //           }
  //         ];
  //       }
  //     }
  //   }
  // ];

  return (
    <div>
      <div tw="container mx-auto px-5 sm:pt-32 pt-16">
        <div tw="space-y-3">
          <div tw="flex items-end justify-between px-3">
            <h1 tw="text-4xl font-bold text-gray-700">Incidents</h1>
            <h2 tw="text-2xl font-bold text-gray-700">Last {nDays} days</h2>
          </div>
          <div tw="border border-gray-200 rounded-lg">
            {/* <Select
              options={selectCategories}
            /> */}
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
          </div>
        </div>
      </div>
    </div>
  )
};
