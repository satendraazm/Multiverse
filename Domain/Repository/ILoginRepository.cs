using System.Data;

namespace Multiverse.Domain.Repository
{
    public interface ILoginRepository
    {
        DataSet GetUserData(string userId, string password, string authority);
        void InsertLoginHistory(string username, string authority, string userid, string pwd);
    }
}
