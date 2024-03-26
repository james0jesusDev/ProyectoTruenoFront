using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto10AbrilFront.Controllers
{
    public class JugadoresController : Controller
    {
        // GET: Jugadores
        [Authorize(Roles = "Jugador")]
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult JugadoresAdmin()
        {
            return View();
        }
    }
}