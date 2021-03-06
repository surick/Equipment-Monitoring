using System;
using System.Collections.Generic;
using System.Text;
using System.IO;            
using System.Data;
using System.Data.OracleClient;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Drawing;


    public enum SystemType
    {
        //型態分為 DB, AP, EXT
        MES = 1, EPR, PLM, RMA, VALOR,Other
    }
    public class ComDBHandle
    {
        private static String strConn = String.Empty;
        private static String strMESConn = "Data Source=MTIMES;Password=111;User ID=mes";
        private static String strERPConn = String.Empty;
        private static String strPLMConn = "Data Source=PLM-DB93;Password=tartan;User ID=agile";
        private static String strVALORConn = "Data Source=VMANAGE;Password=vmanage;User ID=vmanage";
        private static String strRMAConn = String.Empty;
        private static String strOtherConn = String.Empty;
        private static String GetConnectionString(SystemType SysType)
        {
            switch (SysType)
            {
                case SystemType.MES:
                    strConn = strMESConn;
                    break;
                case SystemType.EPR:
                    strConn = strERPConn;
                    break;
                case SystemType.PLM:
                    strConn = strPLMConn;
                    break;
                case SystemType.RMA:
                    strConn = strRMAConn;
                    break;
                case SystemType.VALOR:
                    strConn = strVALORConn;
                    break;
                case SystemType.Other:
                    strConn = strOtherConn;
                    break;
                default:
                    strConn = String.Empty;
                    break;
            }
            return strConn;
        }   

        public static bool TestConnection(SystemType SysType)
        {
            GetConnectionString(SysType);

            using (OracleConnection myConnection = new OracleConnection(strConn))
            {
                try
                {                    
                    myConnection.Open();                                                         
                    myConnection.Close();                                   
                    return true;
                }
                catch (Exception err)
                {
                    throw err;
                    //myConnection.Close();
                    //myConnection.Dispose();                                                        
                    //return false;
                }
                finally
                {
                    myConnection.Close();
                    myConnection.Dispose();
                }
            }
        }

        public static DataSet ExecuteReturnDataSet(String strSQL, SystemType SysType)
        {
            GetConnectionString(SysType);
            
            using(DataSet dsData = new DataSet())
            {
                using (OracleCommand myCommand = new OracleCommand())
                {
                    using (myCommand.Connection = new OracleConnection(strConn))
                    {
                        myCommand.CommandText = strSQL;

                        using (OracleDataAdapter myDA = new OracleDataAdapter())
                        {
                            try
                            {
                                myCommand.Connection.Open();
                                myDA.SelectCommand = myCommand;
                                myDA.Fill(dsData);
                                if (dsData.Tables[0].Rows.Count.Equals(0))
                                {
                                    return (DataSet)null;
                                }
                                else 
                                {
                                    return dsData;
                                }                                
                            }
                            catch (Exception err)
                            {    
                                throw err;                            
                            }
                            finally
                            {
                                myCommand.Connection.Close();
                                myCommand.Dispose();
                            }
                        }
                    }
                }
            }
        }

        public static string ExecuteReturnSingle(string sSql, SystemType SysType)
        {
            GetConnectionString(SysType);

            OracleConnection myConnection = new OracleConnection(strConn);
            string t_sn=string.Empty;

            OracleCommand myCommand = null;
            OracleDataReader myReader = null;

            try
            {
                myConnection.Open();
                myCommand = new OracleCommand(sSql, myConnection);
                myReader = myCommand.ExecuteReader();

                if (myReader.Read())
                {
                    if (myReader.HasRows)
                    {
                        t_sn = myReader[0].ToString();
                        return t_sn;
                    }
                }

                return "Error";
            }
            catch (Exception err)
            {
                throw err;
            }
            finally
            {
                if (null != myReader) myReader.Dispose();
                if (null != myCommand) myCommand.Dispose();
                if (myConnection.State == ConnectionState.Open) myConnection.Close();
                myConnection.Dispose();
            }
        }

        public static void ExecuteNoReturn(string sSql, SystemType SysType)
        {
            GetConnectionString(SysType);
            OracleConnection myConnection = new OracleConnection(strConn);
            OracleCommand myCommand = null;
            OracleTransaction myTrans = null;

            try
            {
                myConnection.Open();
                //myTrans = myConnection.BeginTransaction(IsolationLevel.Serializable);
                //myCommand = new OracleCommand(sSql, myConnection, myTrans);
                myCommand = new OracleCommand(sSql, myConnection);
                myCommand.ExecuteNonQuery();
                
               
                //myTrans.Commit();
            }
            catch (OracleException ex)
            {
                //if (null != myTrans) myTrans.Rollback();
                throw ex;
            }
            catch (Exception err)
            {
                throw err;
            }
            finally
            {
                if (null != myCommand)
                {
                    myCommand.Dispose();
                    myCommand = null;
                }
                if (null != myTrans)
                {
                    myTrans.Dispose();
                    myTrans = null;
                }
                if (null != myConnection)
                {
                    if (myConnection.State == ConnectionState.Open) myConnection.Close();
                    myConnection.Dispose();
                    myConnection = null;
                }
            }
        }

        public static string[] ExecuteReturnSingleColumn(string sSql, SystemType SysType)
        {
              
            //返回查詢的结果集中的第一行數據的所有列
            GetConnectionString(SysType);
            OracleCommand myCommand = new OracleCommand();
            DataSet ds = new DataSet();
            OracleDataAdapter myDA = new OracleDataAdapter();

            try
            {
                myCommand.Connection = new OracleConnection(strConn);
                myCommand.CommandText = sSql;
                myCommand.Connection.Open();
                myDA.SelectCommand = myCommand;
                myDA.Fill(ds);
            }
            catch (Exception)
            {
                
                return null;
            }
            finally
            {
                myCommand.Connection.Close();
                myCommand.Dispose();
            }

            //DataSet填充String[]
            string[] list = null;
            if (ds != null && ds.Tables[0].Rows.Count != 0)
            {
                list = new string[ds.Tables[0].Rows.Count];
                int i = 0;
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    list[i] = dr[0].ToString();
                    i++;
                }
            }

            return list;
            

        }
        //执行带参数的SQL命令
        public static void ExecuteParaNoReturn(string sql, string paraName, OracleType type, byte[] paraValue, SystemType SysType)
        {
            GetConnectionString(SysType);
            OracleConnection myConnection = new OracleConnection(strConn);
            OracleCommand myCommand = null;
            OracleTransaction myTrans = null;
            try
            {
                myConnection.Open();
                myCommand = new OracleCommand(sql, myConnection);
                //myCommand.CommandType = CommandType.Text;
                //myCommand.CommandText = sql;
                
                //設置數據庫中的Blob字段值為圖片字節數組imgByte
                //myCommand.Parameters.Add(paraName, OracleType.Blob, paraValue.Length);
                //myCommand.Parameters[0].Value = paraValue;
                myCommand.Parameters.Add(new OracleParameter(paraName, type)).Value = paraValue;
                myCommand.ExecuteNonQuery();
            }
            catch (OracleException ex)
            {
                throw ex;
            }
            finally
            {
                if (null != myCommand)
                {
                    myCommand.Dispose();
                    myCommand = null;
                }
                if (null != myTrans)
                {
                    myTrans.Dispose();
                    myTrans = null;
                }
                if (null != myConnection)
                {
                    if (myConnection.State == ConnectionState.Open) myConnection.Close();
                    myConnection.Dispose();
                    myConnection = null;
                }
            }
        }

        public static MemoryStream GetPicStream(string sSql, SystemType SysType)
        {
            //從數據庫中讀取圖片記錄到MemoryStream
            GetConnectionString(SysType);
            OracleCommand myCommand = new OracleCommand();
            DataSet ds = new DataSet();
            OracleDataAdapter myDA = new OracleDataAdapter();
           
            try
            {
                //Open();
                //MySqlCommand comm = new MySqlCommand(sql, sqlconn);
                //MySqlDataReader dr = comm.ExecuteReader();
                //if (dr.Read())
                
                myCommand.Connection = new OracleConnection(strConn);
                myCommand.CommandText = sSql;
                myCommand.Connection.Open();
                OracleDataReader dr = myCommand.ExecuteReader();
                if (dr.Read())
                {
                    ////读取图片字节数组至byte[]
                    //byte[] imgByte = new byte[dr.GetBytes(0, 0, null, 0, int.MaxValue)];
                    //dr.GetBytes(0, 0, imgByte, 0, imgByte.Length);
                    ////将图片字节数组载入缓冲流
                    //MemoryStream imgStream = new MemoryStream(imgByte);
                    MemoryStream imgStream = new MemoryStream((byte[])dr["bgimage"]);

                    return imgStream;
                }
                else
                {
                    MemoryStream mstream = new MemoryStream();
                    return mstream;
                }
            }
            catch
            {
                MemoryStream mstream = new MemoryStream();
                return mstream;
            }
            finally
            {
                myCommand.Connection.Close();
                myCommand.Dispose();
            }
        }
        public static string GetSystemTime(SystemType SysType)
        {
            GetConnectionString(SysType);

            OracleConnection myConnection = new OracleConnection(strConn);
            string t_sn = string.Empty;

            OracleCommand myCommand = null;
            OracleDataReader myReader = null;
            String sSql = string.Format(" select to_char(sysdate,'yyyy/mm/dd hh24:mi:ss') from dual ");

            try
            {
                myConnection.Open();
                myCommand = new OracleCommand(sSql, myConnection);
                myReader = myCommand.ExecuteReader();

                if (myReader.Read())
                {
                    if (myReader.HasRows)
                    {
                        t_sn = myReader[0].ToString();
                        return t_sn;
                    }
                }

                return "Error";
            }
            catch (Exception err)
            {
                //ComErrorHandle.RecordtoLog(sSql + "\r\n" + err.Message, erroType.DB);
                throw err;
            }
            finally
            {
                if (null != myReader) myReader.Dispose();
                if (null != myCommand) myCommand.Dispose();
                if (myConnection.State == ConnectionState.Open) myConnection.Close();
                myConnection.Dispose();
            }
        }
        public static MemoryStream AdjustPhoto(int toWidth, int toHeight, MemoryStream stream, int maxWidth, int maxHeight)
        {
            Image originalImage = Image.FromStream(stream);

            //根据图片大小获取新图片从原图片截取的区域  
            int x, y, w, h;
            if (toHeight > 0)
            {
                if (toWidth > 0)
                {
                    if (originalImage.Width > toWidth && originalImage.Height > toHeight)
                    {
                        w = toWidth;
                        h = toWidth * originalImage.Height / originalImage.Width;

                        if (h > toHeight)
                        {
                            h = toHeight;
                            w = toHeight * originalImage.Width / originalImage.Height;
                            x = (toWidth - w) / 2;
                            y = 0;
                        }
                        else
                        {
                            x = 0;
                            y = (toHeight - h) / 2;
                        }
                    }
                    else if (originalImage.Width > toWidth)
                    {
                        w = toWidth;
                        h = toWidth * originalImage.Height / originalImage.Width;
                        x = 0;
                        y = (toHeight - h) / 2;
                    }
                    else if (originalImage.Height > toHeight)
                    {
                        h = toHeight;
                        w = toHeight * originalImage.Width / originalImage.Height;
                        x = (toWidth - w) / 2;
                        y = 0;
                    }
                    else
                    {
                        w = originalImage.Width;
                        h = originalImage.Height;
                        x = (toWidth - w) / 2;
                        y = (toHeight - h) / 2;
                    }
                }
                else
                {
                    if (originalImage.Height > maxHeight)
                    {
                        toWidth = toHeight * originalImage.Width / originalImage.Height;
                        x = 0;
                        y = 0;
                        w = toWidth;
                        h = toHeight;

                    }
                    else
                    {
                        x = 0;
                        y = 0;
                        w = originalImage.Width;
                        h = originalImage.Height;
                        toWidth = originalImage.Width;
                        toHeight = originalImage.Height;
                    }
                }
            }
            else
            {
                if (originalImage.Width > maxWidth)
                {
                    toHeight = toWidth * originalImage.Height / originalImage.Width;
                    x = 0;
                    y = 0;
                    w = toWidth;
                    h = toHeight;

                }
                else
                {
                    x = 0;
                    y = 0;
                    w = originalImage.Width;
                    h = originalImage.Height;
                    toWidth = originalImage.Width;
                    toHeight = originalImage.Height;
                }
            }
            Bitmap bm = new Bitmap(toWidth, toHeight);
            Graphics g = Graphics.FromImage(bm);

            g.SmoothingMode = SmoothingMode.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;

            g.Clear(Color.White);
            g.DrawImage(originalImage, new Rectangle(x, y, w, h), 0, 0, originalImage.Width, originalImage.Height, GraphicsUnit.Pixel);

            long[] quality = new long[1];
            quality[0] = 80;

            EncoderParameters encoderParams = new EncoderParameters();
            EncoderParameter encoderParam = new EncoderParameter(System.Drawing.Imaging.Encoder.Quality, quality);
            encoderParams.Param[0] = encoderParam;
            ImageCodecInfo[] arrayICI = ImageCodecInfo.GetImageEncoders();//获得包含有关内置图像编码解码器的信息的ImageCodecInfo 对象。  
            ImageCodecInfo jpegICI = null;
            for (int i = 0; i < arrayICI.Length; i++)
            {
                if (arrayICI[i].FormatDescription.Equals("JPEG"))
                {
                    jpegICI = arrayICI[i];//设置JPEG编码  
                    break;
                }
            }
            MemoryStream ms = new MemoryStream();
            if (jpegICI != null)
            {
                bm.Save(ms, jpegICI, encoderParams);
            }

            bm.Dispose();
            originalImage.Dispose();
            g.Dispose();
            return ms;
        }
    }

    

