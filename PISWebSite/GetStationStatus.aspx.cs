using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Drawing;
using System.Data;
using Newtonsoft.Json;

public partial class GetStationStatus : System.Web.UI.Page
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

            if (ComStation.CheckLine( strLine))
            {
                DataSet dsMES = ComStation.GetMESStationStatus(strLine);
                DataSet dsPP = ComStation.GetPPStationStatus(strLine);
                dsMES.Merge(dsPP);
                strResult = JsonConvert.SerializeObject(dsMES).Replace("Table", "data").Replace("NAME", "name").Replace("VALUE", "value");//DataSet默認轉換Json開頭的Table換成baidu echart的的Data
               
            }
            else
            {
                strResult = "Line:" + strLine + " does not exist. ";
            }

           
        }
        catch (Exception err)
        { throw err; }

        //Response.Write(ComGZipHandle.GZipCompressString(strResult));//返回GZIP壓縮后的base64編碼
        Response.Write(strResult);

    }
}