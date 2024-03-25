using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto10AbrilFront.Controllers
{
    public class AbonadosController : Controller
    {
        // GET: Abonados
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AbonadosAdmin() 
        {
            return View();
        }
    }
}