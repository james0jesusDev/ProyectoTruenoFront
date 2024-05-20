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
        [Authorize(Roles = "Entrenador,Admin,Jugador,Visitante,Abonado")]
        public ActionResult Index()
        {
            return View();
        }

        [Authorize(Roles = "Entrenador,Admin,Jugador,Visitante,Abonado")]
        public ActionResult ProductosEquipaciones()
        {
            return View();
        }
        [Authorize(Roles = "Entrenador,Admin,Jugador,Visitante,Abonado")]
        public ActionResult ProductosEntrenamiento()
        {
            return View();
        }
        [Authorize(Roles = "Entrenador,Admin,Jugador,Visitante,Abonado")]
        public ActionResult ProductosTotal()
        {
            return View();
        }
        [Authorize(Roles = ",Admin")]
        public ActionResult ProductosAdmin()
        {
            return View();
        }

    }
}