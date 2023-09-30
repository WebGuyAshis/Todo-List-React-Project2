import React, { useContext, useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { FetchedContext } from '../../../../App';

function PieChartComponent(props) {
  const { tasks } = useContext(FetchedContext);

  useEffect(() => {
        // Check if tasks data is available before rendering the chart
    if (tasks) {
      let root = am5.Root.new("chartdiv");

      // Set themes
      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      // Create chart
      let chart = root.container.children.push(am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50)
      }));

      // Create series
      let series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false
      }));

      series.labels.template.setAll({
        textType: "circular",
        centerX: 0,
        centerY: 0
      });

      // Set data
      series.data.setAll([
        { value: tasks.filter(task => task.completed).length, category: "Completed", },
        { value: tasks.filter(task => !task.completed).length, category: "Pending",}
      ]);

      // Create legend
      let legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      }));

      legend.data.setAll(series.dataItems);

      return () => {
        root.dispose();
      };
    }
  }, [tasks]);

  // Conditionally render the chart based on tasks availability
  return (
    <div id="chartdiv" style={{ width: "100%", height: "100%" }}>
    </div>
  );
}

export default PieChartComponent;