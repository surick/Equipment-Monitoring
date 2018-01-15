<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@page import="com.google.gson.JsonArray"%>  
<%@page import="com.google.gson.JsonObject"%> 
<%
	Map<String,Integer> map = new HashMap<String,Integer>();
	
	map.put("设备20", 1);
	map.put("设备25",1);
	map.put("设备32",1);
	map.put("设备19",1);
	
	JsonArray data = new JsonArray();
	
	for(String name : map.keySet()){
		JsonObject jo = new JsonObject();
		jo.addProperty("name",name);
		jo.addProperty("value", map.get(name));
		data.add(jo);
	}
	
	JsonObject res = new JsonObject();
	res.add("data", data);
	
	out.print(res.toString());
%>