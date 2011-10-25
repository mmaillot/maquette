
var PageName = 'triangle_survmail2';
var PageId = 'p9f82bf19f3c146c89d3592a09233bfa5'
var PageUrl = 'triangle_survmail2.html'
document.title = 'triangle_survmail2';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	self.location.href="mail_2_convers.html" + GetQuerystring();

}

}

if (bIE) u2.attachEvent("onmouseout", MouseOutu2);
else u2.addEventListener("mouseout", MouseOutu2, true);
function MouseOutu2(e)
{
if (!IsTrueMouseOut('u2',e)) return;
if (true) {

	self.location.href="triangle_mail_1.html" + GetQuerystring();

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();
