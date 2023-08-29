import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


function PieChartComponent(props) {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    let chart = root.container.children.push( 
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout
      }) 
    );
    
    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "percent",
        categoryField: "type",
        fillField: "color",
        alignLabels: false
      })
    );
    
    series.slices.template.set("templateField", "sliceSettings");
    series.labels.template.set("radius", 30);
    
    // Set up click events
    series.slices.template.events.on("click", function(event) {
      console.log(event.target.dataItem.dataContext)
      if (event.target.dataItem.dataContext.id !== undefined) {
        selected = event.target.dataItem.dataContext.id;
      } else {
        selected = undefined;
      }
      series.data.setAll(generateChartData());
    });
    
    // Define data
    let selected;
    let types = [{
      type: "Completed",
      percent: 100,
      // color: series.get("colors").getIndex(0),
      color: am5.color("#01a2ff"),
      subs: [{
        type: "Home",
        percent: 25
      }, {
        type: "Work",
        percent: 25
      }, {
        type: "Personal",
        percent: 25
      },{
        type:"Event",
        percent: 25
      }]
    }, {
      type: "Pending",
      percent: 100,
      // color: series.get("colors").getIndex(1),
      color: am5.color("#ff387b"),
      subs: [{
        type: "Home",
        percent: 25
      }, {
        type: "Work",
        percent: 25
      }, {
        type: "Personal",
        percent: 25
      },{
        type:"Event",
        percent: 25
      }]
    }];
    series.data.setAll(generateChartData());
    
    
    function generateChartData() {
      let chartData = [];
      for (var i = 0; i < types.length; i++) {
        if (i === selected) {
          for (var x = 0; x < types[i].subs.length; x++) {
            chartData.push({
              type: types[i].subs[x].type,
              percent: types[i].subs[x].percent,
              color: types[i].color,
              pulled: true,
              sliceSettings: {
                active: true
              }
            });
          }
        } else {
          chartData.push({
            type: types[i].type,
            percent: types[i].percent,
            color: types[i].color,
            id: i
          });
        }
      }
      return chartData;
    }
  return () => {
      root.dispose();
    };
  }, []);

  

  return (
    <div id="chartdiv" style={{ width: "100%", height: "100%"}}></div>
  );
}
export default PieChartComponent;