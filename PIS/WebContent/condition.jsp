<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="toCondition.jsp" %>
<!DOCTYPE html>
<html>
<head>
<title>Blue</title>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="5"> 
<style>
html, body {
	padding: 0px;
	margin: 0px;
}

.main {
	margin: 0px;
	padding: 0px;
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
}
</style>
<script src="js\ht.js"></script>
<script src="js\jquery.js"></script>
<script>
        function init(){
            dataModel = new ht.DataModel();                   
            graphView = new ht.graph.GraphView(dataModel);              
            view = graphView.getView();
            
            view.className = 'main';
            document.body.appendChild(view);    
            window.addEventListener('resize', function (e) {
            	graphView.invalidate();
            }, false);                                                  
        }
            $.ajax({  
                type:"GET",  
                url: "json.jsp",  
                dataType:"json",  
                success:function(data){  
                	/* alert($("#err").text()); */
             		data.err = $("#err").text();
             		if(data.err != null){
                		for(var i=0;i<20;i++){
                			if(data.d[i].p.name == data.err){
                				data.d[i].p.image = "json/computer1.json";
                			}
                		} 
             		}
             		/* data.err = $("#err").text(); */
             	/* 	if(data.err2 != null){
                		for(var i=0;i<20;i++){
                			if(data.d[i].p.name == data.err2){
                				data.d[i].p.image = "json/computer1.json";
                			}
                		} 
             		} */
                    dataModel.clear();
                    dataModel.deserialize(data);
                }  
            }); 
        </script>
</head>
<body onload="init();">
	<div id="err" style="display:none;"><%=request.getSession().getAttribute("err") %></div>
</body>
</html>
