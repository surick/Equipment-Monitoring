<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %> 
<%
String name = request.getParameter("name");
String x = request.getParameter("x");
String y = request.getParameter("y");
if(name == null||x == null||y == null){
	out.print("非法操作！");
}
else{
Connection conn = null;   
String url = "jdbc:mysql://192.168.126.242:3306/proc_sop";  
String user = "iot";  
String pass = "Iot85228800#1"; 
try {  
    Class.forName("com.mysql.jdbc.Driver").newInstance();  
    conn = DriverManager.getConnection(url, user, pass);  
	String sql = "insert into point(name,x,y) values(?,?,?)";
    PreparedStatement ps = conn.prepareStatement(sql);
    ps.setString(1, name);
    ps.setString(2, x);
    ps.setString(3, y);
    ps.executeUpdate();
	
} catch (Exception e) {  
	  
} finally {  
    try {  
        conn.close();  
    } catch (Exception e) {  
    }  
} 
}

%>