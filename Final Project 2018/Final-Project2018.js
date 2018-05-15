// data from The Guardian stating that in Jan. 2017, "the city’s 1.6 million residents 
// were heavily outnumbered by an estimated 32 million visitors, about half of them day-trippers."//


var data= [
  [1600000, 32000000],
];


// STEP TWO: DEFINE MARGINS, RADIUS, ETC (Like a color scale)

var m =  15, // margin
  r = 100, // radius 
  z = d3.scaleOrdinal(d3.schemeCategory20); // color scale  


// STEP THREE: 

var svg = d3.select("body").selectAll("svg")
      .data(data)
      .enter()
      .append("svg")  
      .attr("width", (r + m) * 2)   
      .attr("height", (r + m) * 2)
      .append("g")
      .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

// STEP FOUR: DRAWING THE CHART

svg.selectAll("path")
    .data(d3.pie())
    .enter()
    .append("path")
    .attr("d", d3.arc() 
    .innerRadius(r/2) 
    .outerRadius(r))
    .style("fill", function(d,i){return z(i);});

</script>

</body>
</html>

