using Microsoft.AspNetCore.Mvc;

namespace Multiverse.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
