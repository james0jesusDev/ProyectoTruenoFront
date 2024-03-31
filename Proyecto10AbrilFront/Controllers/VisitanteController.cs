using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto10AbrilFront.Controllers
{
    [Authorize(Roles = "Entrenador,Admin,Jugador")]
    public class VisitanteController : Controller
    {

        //vistas para los visitantes: tienda , productos 

        // GET: Visitante
        [Authorize(Roles = "Entrenador,Admin,Jugador")]
        public ActionResult Index()
        {
            return View();
        }

        [Authorize(Roles = "Entrenador,Admin,Jugador")]
        public ActionResult ProductosEquipaciones()
        {
            return View();
        }
        [Authorize(Roles = "Entrenador,Admin,Jugador")]
        public ActionResult ProductosEntrenamiento()
        {
            return View();
        }
        [Authorize(Roles = "Admin")]
        public ActionResult ProductosTotal()
        {
            return View();
        }

    }
}