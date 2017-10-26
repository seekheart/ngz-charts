# ngz-charts
##### A simple angular 4+ charting library powered by d3!
[![Build Status](https://travis-ci.org/seekheart/ngz-charts.svg?branch=master)](https://travis-ci.org/seekheart/ngz-charts)

### Author
* [Mike Tung](https://github.com/seekheart) - Main Developer / Author

### About the Project
ngz-charts is an Angular 2/4+ charting library powered by Mike Bostock's [D3].
The hope is that Angular developers who want high quality yet simple charts can
worry about the data and not the implementation of the chart to present the
data.

### Status of Project
Currently ngz-charts is in alpha and thus will be a work in progress.
For the 1.0.0 [release] a handful of components will be readily available and contributions
are welcome.

### Status of Components

**Component**|**Status**|**Release**
:-----:|:-----:|:-----:
Bar Chart|WIP|1.0.0
Histogram|Not Started|TBD
Horizontal Bar Chart|Not Started|1.0.0
Stacked Bar Chart|Not Started|TBD
Horizontal Stacked Bar Chart|Not Started|TBD
Scatter Plot|WIP|1.0.0
Pie Chart|Not Started|TBD
Line Chart|Not Started|TBD
Time Line|Not Started|1.0.0

### The Components

#### Bar Chart
To use the bar chart component, simply import the `BarChartModule` into your `app.module.ts`
file.

The component requires the user to property bind the following:
```angular2html
<ngz-charts-barchart
[data] - array of objects.
[x] - key of object to plot on x axis.
[y] - key of object to plot on y axis.
>
</ngz-charts-barchart>
```

Additionally users can change the following properties:
```angular2html
<ngz-charts-barchart
[width] - width of the chart in px
[height] - height of the chart in px
[margins] - an object representing padding with css margin properties (top,right,etc)
></ngz-charts-barchart>
```

#### Horizontal Bar Chart
To use the horizontal bar chart component, simply import the `HorizontalBarChartModule` into your 
`app.module.ts` file.

The component requires the user to property bind the following:
```angular2html
<ngz-charts-horizontal-bar-chart
[data] - array of objects.
[x] - key of object to plot on x axis.
[y] - key of object to plot on y axis.
>
</ngz-charts-horizontal-bar-chart>
```

Additionally users can change the following properties:
```angular2html
<ngz-charts-horizontal-bar-chart
[width] - width of the chart in px
[height] - height of the chart in px
[margins] - an object representing padding with css margin properties (top,right,etc)
></ngz-charts-horizontal-bar-chart>
```

#### Scatter Plot
To use the scatter plot component, simply import the `ScatterPlotModule` into your `app.module.ts`
file.

The component requires the user to property bind the following:
```angular2html
<ngz-charts-scatterplot
[data] - array of objects.
[x] - key of object to plot on x axis.
[y] - key of object to plot on y axis.
[dotShape] - shape to represent datum (circle)
></ngz-charts-scatterplot>
```

Additionally users can change the following properties:
```angular2html
<ngz-chart-scatterplot
[width] - width of the chart in px.
[height] - height of the chart in px.
[margins] - an object representing padding with css margin properties.
[dotSize] - size of data point.
></ngz-chart-scatterplot>
```

### Timeline
To use the time line component, import `TimelineModule` into your `app.module.ts` file.

The component requires the user to property bind the following:
```angular2html
<ngz-charts-timeline
[data] - this is an array of objects with at least one property of date type.
[dateLabel] - this is the key that points to a date to plot on time line.
[dateEvent] - this is the key that provides the event name on that date.
></ngz-charts-timeline>

```

Additionally users can change the following:
```angular2html
<ngz-charts-timeline
[width] - width of the chart in px
[height] - height of the chart in px
[margins] - an object representing the padding using css margin properties.
></ngz-charts-timeline>
```

### Contributing
If you would like to contribute, please adhere to the following rules.

1. Show respect and courtesy to everyone.
2. For every Pull Request (PR) please link to corresponding git issue and assign to proper reviewer.
3. Code must follow the [Google Angular Coding Standards].
4. Code Reviews will happen with each PR between the author and the reviewer.

### Feature Request and Support
For features and support please file a git [issue] 

### Browser Support
Currently ngz-charts supports Chrome, Firefox, Safari.

[D3]: https://github.com/d3/d3
[Google Angular Coding Standards]: https://github.com/angular/material2/blob/master/CODING_STANDARDS.md
[release]: https://github.com/seekheart/ngz-charts/projects/1
[issue]: https://github.com/seekheart/ngz-charts/issues

