using Microsoft.AspNetCore.Authentication.Cookies;
using Multiverse.Domain.Repository;
using Multiverse.Domain.Services;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddScoped<ILoginRepository, LoginRepository>();
builder.Services.AddScoped<ILoginService, LoginService>();

//builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
        .AddCookie(options =>
        {
            options.LoginPath = "/Account/Login"; // Redirect here if not authenticated
        });
// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddHttpContextAccessor();

// Add session services
builder.Services.AddDistributedMemoryCache();  // In-memory cache for session storage
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30); // Session timeout duration
    options.Cookie.HttpOnly = true; // Prevent client-side access to the cookie
    options.Cookie.IsEssential = true; // Ensure the cookie is essential for GDPR compliance
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
// Enable session handling middleware
app.UseSession();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Account}/{action=Login}/{id?}");

app.Run();
