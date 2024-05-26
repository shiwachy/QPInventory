using InventoryManagement.Models;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "allowInventoryCors",
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200")
                          .AllowAnyHeader().AllowAnyMethod()
                          .SetIsOriginAllowedToAllowWildcardSubdomains();
                      });
});

// Add services to the container.
builder.Services.AddControllersWithViews();

//Register db set
builder.Services.AddDbContext<QpinventoryDbContext>
            (options => options.UseSqlServer(builder.Configuration.GetConnectionString("con_str")));



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
app.UseCors("allowInventoryCors");
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
