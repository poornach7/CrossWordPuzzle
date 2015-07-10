<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="js/play.js"></script>
<script language="JavaScript">
	//TargetDate = "12/31/2020 5:00 AM";
	var d = new Date();
	var hours = d.getHours();
	var hours = (hours + 24 - 2) % 24;
	var mid = '';
	if (hours == 0) { //At 00 hours we need to show 12 am
		hours = 12;
		mid = 'AM';
	} else if (hours > 12) {
		hours = hours % 12;
		mid = 'PM';
	}
	//TargetDate = d.getDay()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.toLocaleTimeString('en-us');
	TargetDate = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " "
			+ ((d.getHours() + 1) % 24) + ":" + d.getMinutes() + " " + mid;
	BackColor = "palegreen";
	ForeColor = "navy";
	CountActive = true;
	CountStepper = -1;
	LeadingZero = true;
	DisplayFormat = "%%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
	FinishMessage = "Time Up!";
</script>
<title>Crossword</title>

<link rel="stylesheet" type="text/css" href="css/style.css" />

<!--[if lt IE 7]>
		<style type="text/css">
			#wrapper { height:100%; }
		</style>
	<![endif]-->

</head>

<body onload="Init()">

	<div id="wrapper">

		<div id="header">
			<%@ include file="header.jsp"%>
		</div>
		<!-- #header -->

		<div id="content">
			<br />
			<div>
				<span>
					<div style="width: 49%; float: left;">User Name</div>
					<div style="width: 20%; float: right">
						Timer :
						<script language="JavaScript" src="js/countdown.js"></script>
					</div>
				</span>
			</div>

			<div id="playArea">
				<table id ="palyTable"></table>
				<script type="text/javascript">
				

				</script>
			</div>

		</div>
		<!-- #content -->

		<div id="footer">
			<%@ include file="footer.jsp"%>
		</div>
		<!-- #footer -->

	</div>
	<!-- #wrapper -->

</body>

</html>