﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto10AbrilFront.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        // GET: Admin

        [Authorize(Roles = "Admin")]
        public ActionResult Index()
        {
            return View();
        }
        [Authorize(Roles = "Admin")]
        public ActionResult CalendarioAdmin()
        {
            return View();
        }
    }
}