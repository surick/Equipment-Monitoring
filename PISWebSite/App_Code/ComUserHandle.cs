using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Security.Cryptography;



  public  class ComUser
    {
        public static string UserID;
        public static string Password;
        public static string UserName;
        public static string Group;
        public static string SessionID;
        public static List<string> Role;
        public static List<string> Functions;

        public ComUser()
        {
        }

        public static string MD5Convert(string PassWord)
        {
            System.Security.Cryptography.MD5CryptoServiceProvider x = new System.Security.Cryptography.MD5CryptoServiceProvider();
            byte[] bs = System.Text.Encoding.UTF8.GetBytes(PassWord);
            bs = x.ComputeHash(bs);
            System.Text.StringBuilder s = new System.Text.StringBuilder();
            foreach (byte b in bs)
            {
                s.Append(b.ToString("x2").ToLower());
            }
            PassWord = s.ToString();
            return PassWord;
        }

        public static bool Login(string UserName, string PassWord, out string strResult)
        {
            try
            {
                MESExecutive.Executive wsExecutive = new MESExecutive.Executive(); // For MES Rev.10

                //string strResult = "";
                string strSessionId = wsExecutive.LoginUser(UserName, PassWord, out strResult);


                if ((strSessionId == string.Empty) || (strSessionId.IndexOf("00000000000") != -1))
                {
                    return false;
                }

                ComUser.SessionID = strSessionId;
                //ToolsSetup.SessionID = strSessionId;

                string strSql = "select t.user_id from ct_users t where t.username ='" + UserName + "'";
                string strUserID = ComDBHandle.ExecuteReturnSingle(strSql, SystemType.MES);
                

                if (strUserID == string.Empty)
                {
                    return false;
                }
                else
                {
                    ComUser.UserName = UserName;
                    ComUser.UserID = strUserID;
                    ComUser.Password = PassWord;
                    ComUser.Group = string.Empty;

                    // 使用ugs的用戶ID
                    strSql = "select glb_role.rolename from glb_userrole,glb_role where glb_userrole.userid='" + ComUser.UserID + "' And glb_userrole.roleid=glb_role.roleid";

                    DataSet dsRole = ComDBHandle.ExecuteReturnDataSet(strSql, SystemType.MES);

                    if (dsRole != null)
                    {
                        List<string> sta = new List<string>();
                        int i = 0;
                        foreach (DataRow dr in dsRole.Tables[0].Rows)
                        {
                            sta.Add(dr[0].ToString());
                            i++;
                        }
                        ComUser.Role = sta;
                    }

                    //串聯獲得function列表
                    strSql = "select unique functionname from glb_userrole,glb_role,glb_rolefunction,glb_function where glb_userrole.userid='" + strUserID + "' and glb_userrole.roleid=glb_rolefunction.roleid and glb_rolefunction.functionid = glb_function.functionid";

                    DataSet ds = ComDBHandle.ExecuteReturnDataSet(strSql, SystemType.MES);
                    if (ds != null)
                    {
                        List<string> sta = new List<string>();
                        int i = 0;
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            sta.Add(dr[0].ToString());
                            i++;
                        }
                        ComUser.Functions = sta;
                    }

                    //set system static User
                    //ToolsSetup.myUser = myUser;

                    return true;
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
                strResult = ex.Message;
                return false;
            }
        }

        public static bool Logout()
        {
            //ToolsSetup.myUser = null;
            return true;
        }
    }



