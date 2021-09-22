import { assign } from "lodash";
import { theme } from "twin.macro";

// *
// * Colors
// *
const colorScale = [
  theme`colors.blueGray.700`,
  theme`colors.purple.500`,
  theme`colors.pink.600`,
  theme`colors.orange.500`,
  theme`colors.yellow.400`,
];

// *
// * Typography
// *
const sansSerif = theme<any>('fontFamily').sans.join(', ');
const letterSpacing = "normal";
const fontSize = 12;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: theme`colors.gray.400`,
  stroke: "transparent",
  strokeWidth: 0
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);
// *
// * Strokes
// *
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

export default {
  area: assign(
    {
      style: {
        data: {
          fill: theme`colors.gray.900`
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: theme`colors.gray.900`,
          strokeWidth: 2,
          strokeLinecap,
          strokeLinejoin
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding,
          stroke: "transparent"
        }),
        grid: {
          fill: "none",
          stroke: theme`colors.gray.200`,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: "painted"
        },
        ticks: {
          fill: "transparent",
          size: 0,
          stroke: theme`colors.gray.300`,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: theme`colors.gray.700`
        })
      }
    },
    baseProps
  ),
  polarDependentAxis: assign({
    style: {
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      }
    }
  }),
  bar: assign(
    {
      style: {
        data: {
          fill: theme`colors.gray.700`,
          padding,
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  boxplot: assign(
    {
      style: {
        max: { padding, stroke: theme`colors.gray.700`, strokeWidth: 1 },
        maxLabels: assign({}, baseLabelStyles, { padding: 3 }),
        median: { padding, stroke: theme`colors.gray.700`, strokeWidth: 1 },
        medianLabels: assign({}, baseLabelStyles, { padding: 3 }),
        min: { padding, stroke: theme`colors.gray.700`, strokeWidth: 1 },
        minLabels: assign({}, baseLabelStyles, { padding: 3 }),
        q1: { padding, fill: theme`colors.gray.700` },
        q1Labels: assign({}, baseLabelStyles, { padding: 3 }),
        q3: { padding, fill: theme`colors.gray.700` },
        q3Labels: assign({}, baseLabelStyles, { padding: 3 })
      },
      boxWidth: 20
    },
    baseProps
  ),
  candlestick: assign(
    {
      style: {
        data: {
          stroke: theme`colors.gray.700`
        },
        labels: assign({}, baseLabelStyles, { padding: 5 })
      },
      candleColors: {
        positive: "#ffffff",
        negative: theme`colors.gray.700`
      }
    },
    baseProps
  ),
  chart: baseProps,
  errorbar: assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: theme`colors.gray.700`,
          strokeWidth: 2
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  group: assign(
    {
      colorScale: colorScale
    },
    baseProps
  ),
  histogram: assign(
    {
      style: {
        data: {
          fill: theme`colors.gray.700`,
          stroke: theme`colors.gray.900`,
          strokeWidth: 2
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  legend: {
    colorScale: colorScale,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle",
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 }),
    }
  },
  line: assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: theme`colors.gray.700`,
          strokeWidth: 2
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  pie: assign(
    {
      colorScale: colorScale,
      style: {
        data: {
          padding,
          stroke: theme`colors.gray.100`,
          strokeWidth: 1
        },
        labels: assign({}, baseLabelStyles, { padding: 20 })
      }
    },
    baseProps
  ),
  scatter: assign(
    {
      style: {
        data: {
          fill: theme`colors.gray.700`,
          opacity: 1,
          stroke: "transparent",
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  stack: assign(
    {
      colorScale: colorScale
    },
    baseProps
  ),
  tooltip: {
    style: assign({}, baseLabelStyles, { 
      padding: 0,
      pointerEvents: "none",
      fill: theme`colors.blueGray.900` as string,
    }),
    flyoutStyle: {
      stroke: theme`colors.blueGray.300`,
      strokeWidth: 1,
      fill: theme`colors.blueGray.100`,
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
      pointerEvents: "none"
    },
    flyoutPadding: {
      top: 10,
      bottom: 10,
      left: 20,
      right: 20,
    },
    cornerRadius: 4,
    pointerLength: 8
  },
  voronoi: assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 0
        },
        labels: assign({}, baseLabelStyles, {
          padding: 5,
          pointerEvents: "none"
        }),
        flyout: {
          stroke: theme`colors.gray.900`,
          strokeWidth: 1,
          fill: "#f0f0f0",
          pointerEvents: "none"
        }
      }
    },
    baseProps
  )
};
