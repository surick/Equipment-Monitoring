using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.IO;

/// <summary>
/// ErrorHandle 的摘要說明
/// </summary>

    // Error type for Console
    public enum erroType
    {
        //型態分為 DB, AP, EXT
        AP = 1, DB, EXT
    }


    public class ComLogHandle
    {
        static private String strPath = String.Empty;
                
        public ComLogHandle()
        {
            
        }        
        // 記錄 Log資訊
        public static void RecordtoLog(string message, erroType etype)
        {                                   
            strPath = strPath.Replace("[Timestamp]", DateTime.Now.ToString("yyyyMMdd"));
            if (System.IO.Directory.Exists(strPath))
            {

            }
            else
            {
                char[] delimiterChars = {'\\'};
                string[] words = strPath.Split(delimiterChars);
               
                System.IO.Directory.CreateDirectory(String.Format(@"{0}\\{1}", words[0], words[1]));
                //ComLogHandle.RecordtoLog("Create Directory: " + String.Format(@"{0}\\{1}", words[0], words[1]), erroType.AP);
            }

            message ="DateTime:"+ DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss") + " - Type:" + etype.ToString() + " - " + message;

            if (File.Exists(strPath))
            {
                using (StreamWriter SW = new StreamWriter(strPath, true))
                {
                    SW.WriteLine(message);
                }
            }
            else
            {
                using (FileStream fsStream = File.Create(strPath))
                {
                    fsStream.Close();
                }

                using (StreamWriter SW = File.CreateText(strPath))
                {
                    SW.WriteLine(message);
                }
            }
        }
    }
