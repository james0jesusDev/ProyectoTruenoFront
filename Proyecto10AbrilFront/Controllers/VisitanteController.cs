using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto10AbrilFront.Controllers
{
    public class VisitanteController : Controller
    {

        //vistas para los visitantes: tienda , productos 

        // GET: Visitante
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult ProductosEquipaciones()
        {
            return View();
        }

        public ActionResult ProductosEntrenamiento()
        {
            return View();
        }

    }
}