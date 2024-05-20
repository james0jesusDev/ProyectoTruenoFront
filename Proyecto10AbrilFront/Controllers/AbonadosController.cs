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
        [Authorize(Roles = "Abonado")]
        public ActionResult Index()
        {
            return View();
        }
        [Authorize(Roles = "Admin")]
        public ActionResult AbonadosAdmin() 
        {
            return View();
        }
        [Authorize(Roles = "Abonado,Entrenador")]
        public ActionResult Calendario()
        {
            return View();
        }
    }
}