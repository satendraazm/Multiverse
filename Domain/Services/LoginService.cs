using Multiverse.Domain.Repository;
using System.Data;

namespace Multiverse.Domain.Services
{
    public class LoginService : ILoginService
    {
        private readonly ILoginRepository _loginRepository;

        public LoginService(ILoginRepository loginRepository)
        {
            _loginRepository = loginRepository;
        }

        public DataSet GetUserData(string userId, string password, string authority)
        {
            return _loginRepository.GetUserData(userId, password, authority);
        }

        public void InsertLoginHistory(string username, string authority, string userid, string pwd)
        {
            _loginRepository.InsertLoginHistory(username, authority, userid, pwd);
        }
    }

}
