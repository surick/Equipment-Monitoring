using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Text;

public partial class _Default : System.Web.UI.Page
{
    public void Page_Load(object sender, EventArgs e)
    {
        string userid = string.Empty;
        string userpwd = string.Empty;
        string sessionid = string.Empty;
        string strResult = string.Empty;
       
        try
        {
            string result="";
            //userid = Request.Form["user_id"].ToString().Trim();
            //userpwd = Request.Form["user_pwd"].ToString().Trim();
            //strLine = Request.QueryString["Line"];
            userid = Request.QueryString["user_id"];
            userpwd = Request.QueryString["user_pwd"];

            if (userid == string.Empty || userpwd == string.Empty)
            {
                result = "Result:Fail;UserName:;Sessionid:;FunctionList:;Message:User_id or user_pwd was not posted.";
            }
            else
            {
                if (ComUser.Login(userid,userpwd,out result))
                {
                    //將登錄信息放入Session內容中，以隔離不同登錄用於的信息
                    Session["SessionID"] = ComUser.SessionID;
                    Session["UserName"] = ComUser.UserName;
                    Session["Group"] = ComUser.Group;
                    Session["Functions"] = ComUser.Functions;
                    strResult = "Result:Pass;UserName:" + ComUser.UserName + ";Sessionid:" + ComUser.SessionID + "FunctionList:" + ComUser.Functions + ";Message:";
                }
                else
                {
                    strResult = "Result:Fail;UserName:;Sessionid:;FunctionList:;Message:User ID or Password is error.";
                }
            }
        }
        catch(Exception err)
        {
            strResult = "Result:Fail;UserName:;Sessionid:;FunctionList:;Message:" + err.ToString();
        }
        Response.Write(ComGZipHandle.GZipCompressString(strResult));
    }
}