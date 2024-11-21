# leaflet-challenge

## Instruction

The instructions for this activity are broken into two parts:<br>
Part 1: Create the Earthquake Visualization<br>
![Alt text](https://static.bc-edx.com/data/dl-1-2/m15/lms/img/2-BasicMap.jpg)

The first task is to visualize an earthquake dataset. Complete the following steps:<br>
Get your dataset. To do so, follow these steps:<br>
The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed Links to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:<br>
![Alt text](https://static.bc-edx.com/data/dl-1-2/m15/lms/img/3-Data.jpg)
When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:<br>
![Alt text](https://static.bc-edx.com/data/dl-1-2/m15/lms/img/4-JSON.jpg)

2.Import and visualize the data by doing the following:<br>
Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.<br>
Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.<br>
Hint: The depth of the earth can be found as the third coordinate for each earthquake.<br>
Include popups that provide additional information about the earthquake when its associated marker is clicked.<br>
Create a legend that will provide context for your map data.<br>
Your visualization should look something like the preceding map.<br>
