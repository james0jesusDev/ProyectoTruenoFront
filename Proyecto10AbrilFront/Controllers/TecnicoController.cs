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
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult JugadoresTecnico()
        {
            return View();

        }

        public ActionResult CuerpoTecnico()
        {
            return View();

        }



    }
}