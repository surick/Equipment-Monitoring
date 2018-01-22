using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Drawing;
using System.Data;
using Newtonsoft.Json;


public partial class GetLineStationList : System.Web.UI.Page
{
    
    string strLine = string.Empty;
    string strResult = string.Empty;

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        { 
            //if (Session["SessionID"] == null)
            //{
            //    //沒有登錄Session的請求不回復任何信息
            //    return;
            //}
            //獲取參數
            //strLine = Request.Form["LINE"];
            strLine = Request.QueryString["Line"];
            if (string.IsNullOrEmpty(strLine))
            {
                return;
            }

            if (ComStation.CheckLine(strLine))
            {
                //strResult = ComStation.GetStationListJson(strLine);
                strResult = ComStation.GetStationListJson(strLine);
            }
            else
            {
                strResult = "Line:" + strLine + " does not exist. ";
            }
            
            
        }
        catch (Exception err)
        { throw err; }

        Response.Write(ComGZipHandle.GZipCompressString(strResult)); //返回GZIP壓縮后的base64編碼
    }

  
}