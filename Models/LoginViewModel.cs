using System.ComponentModel.DataAnnotations;

namespace Multiverse.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Authority is required")]
        public string Authority { get; set; }

        [Required(ErrorMessage = "User ID is required")]
        public string UserId { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        public string? ErrorMessage { get; set; }
    }

}
