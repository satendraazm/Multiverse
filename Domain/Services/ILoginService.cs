using System.Data;

namespace Multiverse.Domain.Services
{
    public interface ILoginService
    {
        DataSet GetUserData(string userId, string password, string authority);
        void InsertLoginHistory(string username, string authority, string userid, string pwd);
    }
}
