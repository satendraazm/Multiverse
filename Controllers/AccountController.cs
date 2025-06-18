using Microsoft.AspNetCore.Mvc;
using Multiverse.Domain.Services;
using Multiverse.Models;
using System.Data;

namespace Multiverse.Controllers
{

        public class AccountController : Controller
        {
            private readonly ILoginService _mflameService;

            public AccountController(ILoginService mflameService)
            {
                _mflameService = mflameService;
            }

            [HttpGet]
            public IActionResult Login()
            {
                return View(new LoginViewModel());
            }

           [HttpPost]
            public IActionResult Login(LoginViewModel model)
            {
                if (!ModelState.IsValid)
                    return View(model);

                DataSet ds = _mflameService.GetUserData(model.UserId, model.Password, model.Authority);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    var row = ds.Tables[0].Rows[0];
                    HttpContext.Session.SetString("name", row["username"].ToString());
                    HttpContext.Session.SetString("uid", row["userid"].ToString());
                    HttpContext.Session.SetString("authority", row["usertype"].ToString());

                    _mflameService.InsertLoginHistory(row["username"].ToString(), model.Authority, model.UserId, model.Password);

                    return RedirectToAction("Index", "Dashboard");
                }

                // Super Admin check
                if (model.UserId == "mflame" && model.Password == "ilove8me" && model.Authority == "Admin")
                {
                    HttpContext.Session.SetString("name", "iadmin");
                    HttpContext.Session.SetString("uid", "admin@admin");
                    HttpContext.Session.SetString("authority", "SuperAdmin");
                    return RedirectToAction("Index", "Dashboard");
                }

                model.ErrorMessage = "USER ID AND PASSWORD DON'T MATCH";
                return View(model);
            }
        }
}
