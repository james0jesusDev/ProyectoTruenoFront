using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto10AbrilFront.Controllers
{
    [Authorize(Roles = "Admin")]
    public class GastosController : Controller
    {
        // GET: Gastos
        public ActionResult Index()
        {
            return View();
        }
    }
}