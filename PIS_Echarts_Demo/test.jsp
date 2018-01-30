<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.net.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.zip.*" %>
<%@page import="com.google.gson.JsonArray"%>  
<%@page import="com.google.gson.JsonObject"%> 
<%
	URL imp = new URL("http://192.168.123.30/PIS/GetStationStatus.aspx?Line=SMT");
	BufferedReader in = new BufferedReader(  
        new InputStreamReader(  
        imp.openStream()));  

	String inputLine;  
	final Base64.Decoder decoder = Base64.getDecoder();
	
	while ((inputLine = in.readLine()) != null){  
		//String str = inputLine;
		//out.printlninputLiner); 
		String str1 = new String(decoder.decode(inputLine));
		out.print(str1);
		/* ByteArrayOutputStream out1 = new ByteArrayOutputStream();
        // 创建一个 ByteArrayInputStream，使用 buf 作为其缓冲区数组
        ByteArrayInputStream in1 = new ByteArrayInputStream(str1
                .getBytes("UTF-8"));
        // 使用默认缓冲区大小创建新的输入流
        GZIPInputStream gzip = new GZIPInputStream(in1);
        byte[] buffer = new byte[256];
        int n = 0;
        while ((n = gzip.read(buffer)) >= 0) {// 将未压缩数据读入字节数组
            // 将指定 byte 数组中从偏移量 off 开始的 len 个字节写入此 byte数组输出流
            out1.write(buffer, 0, n);
        }
        // 使用指定的 charsetName，通过解码字节将缓冲区内容转换为字符串
        out.print(out1.toString("GBK")); */
		
	}
	in.close();
	
%>