<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@page import="com.google.gson.JsonArray"%>  
<%@page import="com.google.gson.JsonObject"%> 
<% 
String sql = "SELECT * FROM ";  
Connection conn = null;  
Statement st = null;  
ResultSet rs = null;  
String url = "jdbc:oracle:thin:@192.168.126.246:1521:MTIMES";  
String user = "mes";  
String pass = "111"; 
try {  
    Class.forName("oracle.jdbc.driver.oracleDriver").newInstance();  
    //数据库的地址，密码，用户名  
    conn = DriverManager.getConnection(url, user, pass);  
    st = conn.createStatement();  
    rs = st.executeQuery(sql); 
	JsonObject object = new JsonObject();  
	JsonArray array = new JsonArray(); 
	while (rs.next()) { 
		JsonObject ob = new JsonObject();  
    	ob.addProperty("name", rs.getString("id"));  
    	ob.addProperty("value", rs.getInt("flag"));  
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