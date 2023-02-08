using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SampleWebApi.Models;
using SampleWebApi.Services;

namespace SampleWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IServiceComponent component ;
        
        public CustomerController(IServiceComponent component)
        {
            this.component = component;
        }

        [HttpGet]
        public List<Employee> GetAllEmployees() => component.GetAllEmployees();

        [HttpGet("{id:int}")]
        public Employee GetEmployee(int id) =>component.GetEmployee(id);

        [HttpPost]
        public void AddEmployee(Employee emp) =>component.AddNewEmployee(emp);

        [HttpPut]
        public void UpdateEmployee(Employee emp) =>component.UpdateEmployee(emp);

        [HttpDelete("{id:int}")]
        public void DeleteEmployee(int id) =>component.DeleteEmployee(id);
    }
}
