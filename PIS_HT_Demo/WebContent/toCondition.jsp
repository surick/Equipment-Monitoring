<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	request.getSession().setAttribute("err", "node"+(1+Math.round(11 * Math.random())));
%>