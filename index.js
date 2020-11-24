var ffmpeg = require("fluent-ffmpeg");
var probe = require("node-ffprobe");

console.log("starting...");

var proc = new ffmpeg("./RPReplay_Final1576501712_Trim.mp4"); // Input File

proc
  .screenshots({
    timestamps: ["50%", "80%"],
    folder: "./thumbnails", // Thumbnail Location
  })
  .on("end", function () {
    console.log("Screenshots taken");
  });

// probe("./RPReplay_Final1576501712_Trim.mp4", function (err, probeData) {
//   console.log("===>>> going on");
//   if (err) {
//     console.log("===>>> error: ", err);
//     return;
//   }

//   console.log("===>>> probeData: ", probeData);

//   var proc = new ffmpeg("./RPReplay_Final1576501712_Trim.mp4"); // Input File

//   proc
//     .screenshots({
//       timestamps: ["50%", "80%"],
//       folder: "./thumbnails", // Thumbnail Location
//       size: "392x220",
//     })
//     .on("end", function () {
//       console.log("Screenshots taken");
//     });
// });
