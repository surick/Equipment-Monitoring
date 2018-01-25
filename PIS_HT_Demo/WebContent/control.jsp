<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@page import="com.google.gson.JsonArray"%>  
<%@page import="com.google.gson.JsonObject"%> 
<% 
String sql = "SELECT * FROM pis";  
Connection conn = null;  
Statement st = null;  
ResultSet rs = null;  
String url = "jdbc:mysql://192.168.126.242:3306/proc_sop";  
String user = "iot";  
String pass = "Iot85228800#1"; 
try {  
    Class.forName("com.mysql.jdbc.Driver");  
    //数据库的地址，密码，用户名  
    conn = DriverManager.getConnection(url, user, pass);  
    st = conn.createStatement();  
    rs = st.executeQuery(sql); 
	JsonObject object = new JsonObject();  
	JsonArray array = new JsonArray(); 
	while (rs.next()) { 
	JsonObject ob = new JsonObject();  
	
    	ob.addProperty("id", rs.getString("id"));  
    	ob.addProperty("flag", rs.getInt("flag"));  
    	ob.addProperty("time", rs.getTime("time").toString());
    	
   		array.add(ob);    
	}
 		object.add("Tips", array);  
 		out.print(object.toString()); 
} catch (Exception e) {  
	  
} finally {  
    try {  
        rs.close();  
    } catch (Exception e) {  
    }  
    try {  
        st.close();  
    } catch (Exception e) {  
    }  
    try {  
        conn.close();  
    } catch (Exception e) {  
    }  
}  
	
    
%>