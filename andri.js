<script type="text/javascript">var speed=1;
	var disp=0;
	var handle;
	var currentspeed=0;
	var status=1;
	var currentpos=0,alt=1,curpos1=0,curpos2=-1;
	var color=new Array();
	color[1] = "#ddd";
	color[2] = "#ccc";
	color[3] = "#bbb";
	color[4] = "#aaa";
	color[5] = "#999";
	var interval=new Array(400,300,200,100,30);

function scrollwindow(){
	if (status==1){
		if (document.all && !document.getElementById) temp=document.body.scrollTop;
		else temp=window.pageYOffset;

		if (alt==0) alt=2;
		else alt=1;

		if (curpos1!=curpos2){
			if (document.all) currentpos=document.body.scrollTop+speed;
			else currentpos=window.pageYOffset+speed;
			window.scroll(0,currentpos);
		}
		else{
			currentpos=0;
			window.scroll(0,currentpos);
		}
	}
}

function startit(s){
	status=1;
	currentspeed=s;
    clearInterval(handle);
    handle = setInterval("scrollwindow()",interval[s]);
}

function stopit(){
  currentspeed=0;
  for (i=1;i<=5;i++) {
	document.getElementById('speed'+i).style.backgroundColor=color[i];
  }
  status=0;
}

function resetBg(n) {
  for (i=1;i<=5;i++) {
	document.getElementById('speed'+i).style.backgroundColor=color[i];
  }
  for (i=1;i<=currentspeed;i++) {
	document.getElementById('speed'+i).style.backgroundColor="#00cc00";
  }	
}

function changeBg(n) {
  for (i=1;i<=5;i++) {
	document.getElementById('speed'+i).style.backgroundColor=color[i];
  }
  for (i=1;i<=n;i++) {
	document.getElementById('speed'+i).style.backgroundColor="#00cc00";
  }
}

function tooglespeed() {
  if (disp==0) {
	disp=1;
	document.getElementById('speednav').style.display='';
	document.getElementById('speedtoogle').innerHTML='<img src="https://1.bp.blogspot.com/-diU7KestWAY/XT7XZwOVZyI/AAAAAAAAAiM/iCad8UBThTcw8A5TFm1aLgX3YNHACuMEgCLcBGAs/s1600/telascrl%2B%25281%2529.png" style="border-right:1px solid #AAA;"/>';
	document.getElementById('speedtoogle');
  }
  else {
	disp=0;
	document.getElementById('speednav').style.display='none';
	document.getElementById('speedtoogle').innerHTML='<img src="https://1.bp.blogspot.com/-m2ytOUkrXF0/W2F0sgIiaBI/AAAAAAAAA4o/zSJQDYZjrAkkiLqqhjdADN2V_GKuFA6YQCLcBGAs/s1600/telascrl.png" style="border-right:1px solid #AAA;"/>';	
	document.getElementById('speedtoogle');
  }
}


function calcHeight()
{
  var the_height=
    document.getElementById('chord_frame').contentWindow.
      document.body.scrollHeight;

  document.getElementById('chord_frame').height=
      the_height;
}</script>
