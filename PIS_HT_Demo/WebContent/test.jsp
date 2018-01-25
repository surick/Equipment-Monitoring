<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@page import="com.google.gson.JsonArray"%>  
<%@page import="com.google.gson.JsonObject"%> 
<% 
String sql = "SELECT * FROM wp_users";  
Connection conn = null;  
Statement st = null;  
ResultSet rs = null;  
String url = "jdbc:mysql://106.15.183.84:3306/web_blog";  
String user = "root";  
String pass = "ljgzmy==1314"; 
try {  
    Class.forName("com.mysql.jdbc.Driver");  
    conn = DriverManager.getConnection(url, user, pass);  
    st = conn.createStatement();  
    rs = st.executeQuery(sql); 
 		out.print(11); 
} catch (Exception e) {  
	out.print(e);
	e.printStackTrace();
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