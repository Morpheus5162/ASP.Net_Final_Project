﻿using System.Web;
using System.Web.Mvc;

namespace ASP.Net_Final_Project
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
