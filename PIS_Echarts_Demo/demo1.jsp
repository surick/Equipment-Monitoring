<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.net.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.zip.*" %>
<%@page import="com.google.gson.JsonArray"%>  
<%@page import="com.google.gson.JsonObject"%> 
<%
	URL imp = new URL("http://localhost:3596/PISWebSite/GetStationStatus.aspx?Line=SMT");
	BufferedReader in = new BufferedReader(  
        new InputStreamReader(  
        imp.openStream()));  

	String inputLine;  
	
	while ((inputLine = in.readLine()) != null){  
		String str = inputLine;
		out.print(str);
		
		
	}
	in.close();
	
%>