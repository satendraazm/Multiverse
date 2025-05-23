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
            using SqlCommand cmd = new SqlCommand(@"SELECT * FROM login 
                                                WHERE userid = @userid 
                                                  AND pwd = @pwd 
                                                  AND usertype = @usertype", con);
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
            using SqlCommand cmd = new SqlCommand(@"INSERT INTO LoginHistory 
            (username, usertype, userid, pwd, date, time, ip)
            VALUES (@username, @usertype, @userid, @pwd, @date, @time, @ip)", con);

            cmd.Parameters.AddWithValue("@username", username);
            cmd.Parameters.AddWithValue("@usertype", authority);
            cmd.Parameters.AddWithValue("@userid", userid);
            cmd.Parameters.AddWithValue("@pwd", pwd);
            cmd.Parameters.AddWithValue("@date", DateTime.Now.Date);
            cmd.Parameters.AddWithValue("@time", DateTime.Now.TimeOfDay);
            cmd.Parameters.AddWithValue("@ip", "127.0.0.1"); // Optional: replace with actual IP if available

            con.Open();
            cmd.ExecuteNonQuery();
        }
    }
}
