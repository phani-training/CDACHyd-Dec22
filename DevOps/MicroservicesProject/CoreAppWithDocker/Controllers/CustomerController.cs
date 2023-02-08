using CoreAppWithDocker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreAppWithDocker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerContext _context;
        public CustomerController(CustomerContext context)
        {
            _context = context; 
        }

        [HttpGet]
        public ActionResult<IEnumerable<Customer>> GetCustomers() => _context.Customers;

        [HttpGet("{customerId:int}")]
        public async Task<ActionResult<Customer>> GetById(int customerId)
        {
            return await _context.Customers.FindAsync(customerId);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Customer cst)
        {
            await _context.Customers.AddAsync(cst);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(Customer cst)
        {
            _context.Customers.Update(cst);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{customerId:int}")]
        public async Task<ActionResult> Delete(int customerId)
        {
            var cst = await _context.Customers.FindAsync(customerId);
            if(cst == null)
            {
                return BadRequest("Customer not found to delete");
            }
            _context.Customers.Remove(cst);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
