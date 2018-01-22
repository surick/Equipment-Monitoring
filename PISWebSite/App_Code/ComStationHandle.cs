using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.IO;
using System.Text;
using System.Collections.Generic;
using Newtonsoft.Json;

/// <summary>
/// ErrorHandle 的摘要說明
/// </summary>


    public class ComStation
    {
        
                
        public ComStation()
        {
            //机台状态定义： 0->IDEL,1->RUN,2->Warrning,3->Error Stop
        }
        public static bool CheckLine(String strLine)
        { //檢查線的名稱是否存在
            String strSql = string.Format(" SELECT LINE_ID FROM PIS_LINE_NAMES WHERE LINE_NAME='{0}'", strLine);
            DataSet dsLine = ComDBHandle.ExecuteReturnDataSet(strSql, SystemType.MES);
            if (dsLine == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public static string GetStationListJson(string strLine)
        {
            string strResult = string.Empty;

            try
            {
                string strSql = string.Format("select station_name,max((case when variable='System' then value  end)) System,max((case when variable='Status' then value  end)) Status,max((case when variable='Visible' then value  end)) Visible,max((case when variable='XTOP' then value  end)) XTOP,max((case when variable='YTOP' then value  end)) YTOP,max((case when variable='Lengh' then value  end)) Lengh,max((case when variable='Width' then value  end)) Width,max((case when variable='Alias' then value  end)) Alias,max((case when variable='Yield' then value  end)) Yield ,max((case when variable='PickError' then value  end)) PickError,max((case when variable='Type' then value  end)) Type  FROM pis_line_names l, pis_station_names s, pis_station_setting c WHERE l.line_id = s.line_id   AND s.station_id = c.station_id   AND l.line_name = 'SMT'   group by s.station_name   order by s.station_name,type", strLine);

                DataSet dsStation = ComDBHandle.ExecuteReturnDataSet(strSql, SystemType.MES);

               
                if (!(dsStation == null))
                {
                    //List<Station> StationList = new List<Station>();
                    //foreach (DataRow dr in dsStation.Tables[0].Rows)
                    //{
                    //    Station tempStation = new Station();
                    //    tempStation.StationName = dr["station_name"].ToString();
                    //    tempStation.System = dr["System"].ToString();
                    //    tempStation.Status = dr["Status"].ToString();
                    //    tempStation.Visible = dr["Visible"].ToString();
                    //    tempStation.XTOP = int.Parse(dr["XTOP"].ToString());
                    //    tempStation.YTOP = int.Parse(dr["YTOP"].ToString());
                    //    tempStation.Lengh = int.Parse(dr["Lengh"].ToString());
                    //    tempStation.Width = int.Parse(dr["Width"].ToString());
                    //    tempStation.Alias = dr["Alias"].ToString();
                    //    tempStation.Yield = dr["Yield"].ToString();
                    //    tempStation.PickError = dr["PickError"].ToString();
                    //    tempStation.Type = dr["Type"].ToString();
                    //    StationList.Add(tempStation);
                    //}

                    strResult = JsonConvert.SerializeObject(dsStation).Replace("Table","Data"); //DataSet默認轉換Json開頭的Table換成baidu echart的的Data
                }
                else
                {
                    strResult = "@No data found";
                }

                return strResult;
            }
            catch (Exception err)
            {
                return err.ToString();
                throw err;
            }
        }

        public static DataSet GetMESStationStatus(string strLine)
        {
            try
            {
                string strSql = string.Format(@"select ss.station_name as name,(case when aa.status in('0') then 1 when aa.status in('1') then 3 end ) as value from (select station_name,max((case when variable='System' then value  end)) System,max((case when variable='value' then value  end)) value,max((case when variable='Visible' then value  end)) Visible,max((case when variable='XTOP' then value  end)) XTOP,max((case when variable='YTOP' then value  end)) YTOP,max((case when variable='Lengh' then value  end)) Lengh,max((case when variable='Width' then value  end)) Width,max((case when variable='PickError' then value  end)) PickError,max((case when variable='Type' then value  end)) Type  FROM pis_line_names l, pis_station_names s, pis_station_setting c WHERE l.line_id = s.line_id AND s.station_id = c.station_id AND l.line_name = '{0}' group by s.station_name) ss,GLB_ATS_ALM_STATION aa where ss.station_name=aa.name and ss.System='MES' and ss.Visible='Yes' and aa.total_qty >0  union all select ss.station_name,(case when aa.status in('0') then 0 when aa.status in('1') then 3 end ) from (select station_name,max((case when variable='System' then value  end)) System,max((case when variable='value' then value  end)) Status,max((case when variable='Visible' then value  end)) Visible,max((case when variable='XTOP' then value  end)) XTOP,max((case when variable='YTOP' then value  end)) YTOP,max((case when variable='Lengh' then value  end)) Lengh,max((case when variable='Width' then value  end)) Width,max((case when variable='PickError' then value  end)) PickError,max((case when variable='Type' then value  end)) Type  FROM pis_line_names l, pis_station_names s, pis_station_setting c  WHERE l.line_id = s.line_id AND s.station_id = c.station_id AND l.line_name = '{1}'  group by s.station_name) ss,GLB_ATS_ALM_STATION aa where ss.station_name=aa.name and ss.System='MES' and ss.Visible='Yes' and aa.total_qty =0 ", strLine, strLine);

                DataSet dsStation = ComDBHandle.ExecuteReturnDataSet(strSql, SystemType.MES);
                return dsStation;
            }
            catch (Exception err)
            {
                throw err;
            }

        }

        public static DataSet GetPPStationStatus(string strLine)
        {
            try
            {
                string strSql = string.Format(@"SELECT ss.station_name as name, (CASE WHEN vs.statusid IN (2, 0, 4, 11)  THEN 0 WHEN vs.statusid IN (1) THEN 1 WHEN vs.statusid IN (5, 6, 7, 8, 9, 10)  THEN 2  WHEN vs.statusid IN (3) THEN 3  END) AS value FROM (SELECT   station_name, MAX ((CASE WHEN VARIABLE = 'System' THEN VALUE  END)) System,  MAX ((CASE WHEN VARIABLE = 'Status' THEN VALUE   END)) status, MAX ((CASE WHEN VARIABLE = 'Visible'  THEN VALUE  END)) visible, MAX ((CASE  WHEN VARIABLE = 'XTOP' THEN VALUE  END)) xtop,  MAX ((CASE  WHEN VARIABLE = 'YTOP' THEN VALUE END)) ytop, MAX ((CASE  WHEN VARIABLE = 'Lengh' THEN VALUE END)) lengh, MAX ((CASE WHEN VARIABLE = 'Width' THEN VALUE  END)) width,  MAX ((CASE  WHEN VARIABLE = 'PickError' THEN VALUE  END) ) pickerror, MAX ((CASE  WHEN VARIABLE = 'Type'  THEN VALUE  END)) TYPE   FROM pis_line_names l, pis_station_names s, pis_station_setting c WHERE l.line_id = s.line_id AND s.station_id = c.station_id    AND l.line_name = '{0}'  GROUP BY s.station_name) ss,  mccurstatus@vmanage vs,""Equipment""@vmanage vm   WHERE ss.System = 'VALOR'  AND ss.visible = 'Yes'  AND ss.station_name = vm.""Name""   AND vs.mcid = vm.""AssetNumber"" " , strLine);

                DataSet dsStation = ComDBHandle.ExecuteReturnDataSet(strSql, SystemType.MES);
                return dsStation;
            }
            catch (Exception err)
            {
                throw err;
            }

        }


    }
