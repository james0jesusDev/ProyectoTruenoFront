using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Proyecto10AbrilFront.Startup))]
namespace Proyecto10AbrilFront
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
