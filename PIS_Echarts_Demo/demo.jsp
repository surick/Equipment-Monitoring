<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@page import="com.google.gson.JsonArray"%>  
<%@page import="com.google.gson.JsonObject"%> 
<%
	Map<String,Integer> map = new HashMap<String,Integer>();
	//添加数据到map
	map.put("设备20", 1);
	map.put("设备25",4);
	map.put("设备32",2);
	map.put("设备19",1);
	map.put("设备1",2);
	map.put("设备6",3);
	map.put("设备8",4);
	map.put("设备15",3);
	
	JsonArray data = new JsonArray();
	//将map中数据添加到json数组
	for(String name : map.keySet()){
		JsonObject jo = new JsonObject();
		jo.addProperty("name",name);
		jo.addProperty("value", map.get(name));
		data.add(jo);
	}
	//json数组转化为json对象输出到页面
	JsonObject res = new JsonObject();
	res.add("data", data);
	
	out.print(res.toString());
%>