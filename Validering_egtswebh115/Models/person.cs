using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Validering_egtswebh115.Models
{
    public class person
    {
        [Required]
        public string navn { get; set; }

        [Required]
        public string email { get; set; }

    }
}