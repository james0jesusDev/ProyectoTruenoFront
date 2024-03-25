using System.Web.Mvc;
using System.Web.Routing;

namespace Proyecto10AbrilFront
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            // Ruta específica para Admin/Index
            routes.MapRoute(
                name: "Admin",
                url: "Admin/Index",
                defaults: new { controller = "Admin", action = "Index" }
            );

            // Otras rutas pueden estar definidas aquí...

            // Ruta predeterminada para otras acciones y controladores
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
