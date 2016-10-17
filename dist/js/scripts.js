// // window.onload = function(){
//      var ctx = document.getElementById("myChart").getContext("2d");
//
// window.onload = function() { init() };
//
// var agents = [];
// //agents.push("x");
// var call_counts = [];
// //call_counts.push("Call Count");
//  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1lvQ3NGvU7PGbPWwuYzccblFPCnY-ln00EJO0IO1Bacc/pubhtml?gid=1925952226&single=true';
// //var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1hriSgPMcEnjEOaAZ3d0gGMPtkt_dUU1edTkspvoveDk/pubhtml?gid=0&single=true';
//
//
// function showInfo(data, tabletop) {
// //alert("Successfully processed!")
// //console.log(data);
//
// for (var i = 0; i < data.length; i++) {
//     agents.push(data[i].Agent);
//     call_counts.push(parseInt(data[i]['Call Count']));
// }
//
// console.log(agents);
// console.log(call_counts);
//
// var callData = {
//     labels: agents,
//     datasets: [
//         {
//             label: "My First dataset",
//             backgroundColor: "rgba(255,99,132,0.2)",
//             borderColor: "rgba(255,99,132,1)",
//             borderWidth: 1,
//             hoverBackgroundColor: "rgba(255,99,132,0.4)",
//             hoverBorderColor: "rgba(255,99,132,1)",
//             data: call_counts
//         }
//     ]
// };
// var myBarChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: callData,
//     options: {
//         //responsive : false,
//         maintainAspectRatio: false
//     }
// });
//
// }
//
// // Refresh page automatically
// // setTimeout(function(){
// //    window.location.href=window.location.href;
// // }, 600000);
//
//
// function init() {
//   Tabletop.init( { key: public_spreadsheet_url, callback: showInfo, simpleSheet: true } )
//
//
// }
//
// // Dynamically resize window
// // $(window).resize(function() {
// //     $('html').height($(window).height() - 46);
// // });
// //
// // $(window).trigger('resize');
//
// // $(window).load(function() {
// //     setTimeout(function() {
// //         $.AdminLTE.layout.fix();
// //         $.AdminLTE.layout.fixSidebar();
// //     }, 250);
// // });
//
// // Responsive chart height fix -
// // var pixelRatio = window.devicePixelRatio || 1;
// // var width = $($("#myChart").parent().width());
// // var height = $($("#myChart").parent().height());
// // ctx.width = width / pixelRatio;
// // ctx.height = (1.5 * height) / pixelRatio;
//
// // (function(){
// // // set up the timeout variable
// // var t;
// // // setup the sizing function,
// // // with an argument that tells the chart to animate or not
// // function size(animate){
// //     // If we are resizing, we don't want the charts drawing on every resize event.
// //     // This clears the timeout so that we only run the sizing function
// //     // when we are done resizing the window
// //     clearTimeout(t);
// //     // This will reset the timeout right after clearing it.
// //     t = setTimeout(function(){
// //         $("canvas").each(function(i,el){
// //             // Set the canvas element's height and width to it's parent's height and width.
// //             // The parent element is the div.canvas-container
// //             $(el).attr({
// //                 "width":$(el).parent().width(),
// //                 "height":$(el).parent().outerHeight()
// //             });
// //         });
// //         // kickoff the redraw function, which builds all of the charts.
// //         redraw(animate);
// //
// //         // loop through the widgets and find the tallest one, and set all of them to that height.
// //         var m = 0;
// //         // we have to remove any inline height setting first so that we get the automatic height.
// //         $(".widget").height("");
// //         $(".widget").each(function(i,el){ m = Math.max(m,$(el).height()); });
// //         $(".widget").height(m);
// //
// //     }, 100); // the timeout should run after 100 milliseconds
// // }
// // $(window).on('resize', size);
// // function redraw(animation){
// //     var options = {};
// //     if (!animation){
// //         options.animation = false;
// //     } else {
// //         options.animation = true;
// //     }
// //     // ....
// //         // the rest of our chart drawing will happen here
// //     // ....
// // }
// // size(); // this kicks off the first drawing; note that the first call to size will animate the charts in.
// // })
//
//
//  // };

// var data = {
//   // A labels array that can contain any sort of values
//   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//   // Our series array that contains series objects or in this case series data arrays
//   series: [
//     [5, 2, 4, 2, 0]
//   ]
// };
//
// // As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// // as you saw in the previous example
// var options = {
//   width: 300,
//   height: 200
// };
//
// // Create a new line chart object where as first parameter we pass in a selector
// // that is resolving to our chart container element. The Second parameter
// // is the actual data object. As a third parameter we pass in our custom options.
// new Chartist.Line('.ct-chart', data, options);
