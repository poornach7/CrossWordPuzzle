<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Crossword</title>

<link rel="stylesheet" type="text/css" href="css/style.css" />

<!--[if lt IE 7]>
		<style type="text/css">
			#wrapper { height:100%; }
		</style>
	<![endif]-->

</head>

<body>

	<div id="wrapper">

		<div id="header">
			<%@ include file="header.jsp"%>
		</div>
		<!-- #header -->

		<div id="content">
		<a href="#" class="myButton">turquoise</a>
		<div class="MyTable" >
                <table >
                    <tr>
                        <td>
                            Title 1
                        </td>
                        <td >
                            Title 2
                        </td>
                        <td>
                            Title 3
                        </td>
                    </tr>
                    <tr>
                        <td >
                            Row 1
                        </td>
                        <td>
                            Row 1
                        </td>
                        <td>
                            Row 1
                        </td>
                    </tr>
                    <tr>
                        <td >
                            Row 2
                        </td>
                        <td>
                            Row 2
                        </td>
                        <td>
                            Row 2
                        </td>
                    </tr>
                    <tr>
                        <td >
                            Row 2
                        </td>
                        <td>
                            Row 2
                        </td>
                        <td>
                            Row 2
                        </td>
                    </tr>
                    <tr>
                        <td >
                            Row 3
                        </td>
                        <td>
                            Row 3
                        </td>
                        <td>
                            Row 3
                        </td>
                    </tr>
                </table>
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