var CANVAS_WIDTH = 720;
var CANVAS_HEIGHT = 1120;

var BG_COLOR = '#703020';

var BG_X = 0;
var BG_Y = 0;

var ONE_WIDTH = 120
var ONE_HEIGHT = 120
var FIELD_OFS_X = 100
var FIELD_OFS_Y = 200

var LOADER_X = (CANVAS_WIDTH/2 - 64)
var LOADER_Y = (CANVAS_HEIGHT/2 - 64)

// はじめからボタン
var RESTART_X = 94
var RESTART_Y = 10
// 自力で脱出ボタン
var ESCAPE_X = 284
var ESCAPE_Y = 10
// リタイアボタン
var RETIRE_X = 470
var RETIRE_Y = 10

var OFS_PANEL_TO_PANEL = 12

var STAGE1_DATA  = '{"framesize":{"w":4,"h":5},"endpoint":{"x":3,"y":5},"panels":[{"x":0,"y":0,"w":1,"h":2,"type":"common"},{"x":1,"y":0,"w":2,"h":2,"type":"target"},{"x":3,"y":0,"w":1,"h":2,"type":"common"},{"x":0,"y":2,"w":1,"h":2,"type":"common"},{"x":1,"y":2,"w":1,"h":1,"type":"common"},{"x":2,"y":2,"w":1,"h":1,"type":"common"},{"x":3,"y":2,"w":1,"h":2,"type":"common"},{"x":1,"y":3,"w":1,"h":1,"type":"common"},{"x":2,"y":3,"w":1,"h":1,"type":"common"},{"x":0,"y":4,"w":1,"h":1,"type":"common"},{"x":3,"y":4,"w":1,"h":1,"type":"common"}]}';
var STAGE2_DATA  = '{"framesize":{"w":4,"h":5},"endpoint":{"x":3,"y":5},"panels":[{"x":0,"y":0,"w":1,"h":1,"type":"common"},{"x":1,"y":0,"w":2,"h":2,"type":"target"},{"x":3,"y":0,"w":1,"h":1,"type":"common"},{"x":0,"y":1,"w":1,"h":1,"type":"common"},{"x":3,"y":1,"w":1,"h":1,"type":"common"},{"x":0,"y":2,"w":2,"h":1,"type":"common"},{"x":2,"y":2,"w":2,"h":1,"type":"common"},{"x":0,"y":3,"w":2,"h":1,"type":"common"},{"x":2,"y":3,"w":2,"h":1,"type":"common"},{"x":0,"y":4,"w":1,"h":1,"type":"common"},{"x":3,"y":4,"w":1,"h":1,"type":"common"}]}';
var STAGE3_DATA  = '{"framesize":{"w":4,"h":5},"endpoint":{"x":3,"y":5},"panels":[{"x":0,"y":0,"w":1,"h":2,"type":"common"},{"x":1,"y":0,"w":2,"h":2,"type":"target"},{"x":3,"y":0,"w":1,"h":2,"type":"common"},{"x":0,"y":2,"w":1,"h":1,"type":"common"},{"x":1,"y":2,"w":1,"h":1,"type":"common"},{"x":2,"y":2,"w":1,"h":1,"type":"common"},{"x":3,"y":2,"w":1,"h":1,"type":"common"},{"x":0,"y":3,"w":2,"h":1,"type":"common"},{"x":2,"y":3,"w":2,"h":1,"type":"common"},{"x":0,"y":4,"w":1,"h":1,"type":"common"},{"x":3,"y":4,"w":1,"h":1,"type":"common"}]}';
