<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="js/play.js"></script>
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
			<br />
			<br />
			<div id="playArea">
				<center>
					<table id="playTable"></table>
				</center>
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