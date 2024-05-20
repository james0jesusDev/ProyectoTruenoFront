using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proyecto10AbrilFront.Controllers
{
   
    public class TecnicoController : Controller
    {
        // GET: Tecnico
        [Authorize(Roles = "Entrenador")]
        public ActionResult Index()
        {
            return View();
        }

        [Authorize(Roles = "Entrenador")]
        public ActionResult JugadoresTecnico()
        {
            return View();

        }
        [Authorize(Roles = "Entrenador,Admin")]
        public ActionResult CuerpoTecnico()
        {
            return View();

        }



    }
}