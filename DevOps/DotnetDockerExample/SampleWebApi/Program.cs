using SampleWebApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<IServiceComponent, ServiceComponent>();//Tell the system that whenever an inteface called IServiceComponent is requried in the program, the System must provide a single instance of the implementor class called ServiceComponent. 
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
