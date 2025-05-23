using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace Multiverse.Domain.Repository
{
    public class LoginRepository : ILoginRepository
    {
        private readonly string _connectionString;

        public LoginRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public DataSet GetUserData(string userId, string password, string authority)
        {
            using SqlConnection con = new SqlConnection(_connectionString);
            using SqlCommand cmd = new SqlCommand("sp_LoginUser", con)
            {
                CommandType = CommandType.StoredProcedure
            };

            cmd.Parameters.AddWithValue("@userid", userId);
            cmd.Parameters.AddWithValue("@pwd", password);
            cmd.Parameters.AddWithValue("@usertype", authority);

            using SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            da.Fill(ds);
            return ds;
        }

        public void InsertLoginHistory(string username, string authority, string userid, string pwd)
        {
            using SqlConnection con = new SqlConnection(_connectionString);
            using SqlCommand cmd = new SqlCommand("sp_InsertLoginHistory", con)
            {
                CommandType = CommandType.StoredProcedure
            };

            cmd.Parameters.AddWithValue("@username", username);
            cmd.Parameters.AddWithValue("@usertype", authority);
            cmd.Parameters.AddWithValue("@userid", userid);
            cmd.Parameters.AddWithValue("@pwd", pwd);
            cmd.Parameters.AddWithValue("@ip", "127.0.0.1"); // Replace with actual IP if needed

            con.Open();
            cmd.ExecuteNonQuery();
        }
    }
}
