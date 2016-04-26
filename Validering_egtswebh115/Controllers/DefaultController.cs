using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Validering_egtswebh115.Models;

namespace Validering_egtswebh115.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Gem(person p)
        {
            if (ModelState.IsValid)
            {
                return View();

            }

            return View("index");
        }
    }
}