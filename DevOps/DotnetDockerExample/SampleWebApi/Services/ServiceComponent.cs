namespace SampleWebApi.Services
{
    using SampleWebApi.Models;
    public interface IServiceComponent
    {
        List<Employee> GetAllEmployees();
        Employee GetEmployee(int id);
        void AddNewEmployee(Employee emp);
        void UpdateEmployee(Employee emp);
        void DeleteEmployee(int id);
    }
    public class ServiceComponent : IServiceComponent
    {
        private static List<Employee> _employees = new();//new Syntax of C# 11..
        public ServiceComponent()
        {
            _employees.Add(new Employee { EmpId =111, EmpAddress ="Hyderabad", EmpName ="Sharan", EmpSalary = 45000 });
            _employees.Add(new Employee { EmpId =112, EmpAddress ="Bangalore", EmpName ="Phaniraj", EmpSalary = 40000 });
            _employees.Add(new Employee { EmpId =113, EmpAddress ="Pune", EmpName ="Sachin Talpade", EmpSalary = 35000 });
            _employees.Add(new Employee { EmpId =114, EmpAddress ="Chennai", EmpName ="Sriharan", EmpSalary = 40000 });
        }
        public void AddNewEmployee(Employee emp) => _employees.Add(emp);
        

        public void DeleteEmployee(int id)
        {
            var selected = _employees.Find((e) => e.EmpId == id);
            if (selected == null) throw new Exception("Employee not found!!!");
            _employees.Remove(selected);
        }

        public List<Employee> GetAllEmployees() => _employees;

        public Employee GetEmployee(int id)
        {
            var selected = _employees.Find((e) => e.EmpId == id);
            if (selected == null) throw new Exception("Employee not found!!!");
            return selected;
        }

        public void UpdateEmployee(Employee emp)
        {
            var selected = _employees.Find((e) => e.EmpId == emp.EmpId);
            if (selected == null) throw new Exception("Employee not found to update!!!");
            selected.EmpAddress = emp.EmpAddress;
            selected.EmpSalary = emp.EmpSalary;
            selected.EmpName = emp.EmpName;
        }
    }
}
