# ngz-charts
##### A simple angular 4+ charting library powered by d3!

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
To use the barchart component, simply import the `BarchartModule` into your `app.module.ts`
file.

The component requires the user to property bind the following:
```
[data] - array of objects.
[x] - key of object to plot on x axis.
[y] - key of object to plot on y axis.
```

Additionally users can change the following properties:
```
[width] - width of the chart in px
[height] - height of the chart in px
[margins] - an object representing padding with css margin properties (top,right,etc)
```

#### Scatter Plot
To use the barchart component, simply import the `ScatterplotModule` into your `app.module.ts`
file.

The component requires the user to property bind the following:
```
[data] - array of objects.
[x] - key of object to plot on x axis.
[y] - key of object to plot on y axis.
[dotShape] - shape to represent datum (circle/rect)
```

Additionally users can change the following properties:
```
[width] - width of the chart in px
[height] - height of the chart in px
[margins] - an object representing padding with css margin properties (top,right,etc)
[dotSize] - size of data point
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

