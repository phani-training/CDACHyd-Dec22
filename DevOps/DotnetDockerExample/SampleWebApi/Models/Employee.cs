namespace SampleWebApi.Models
{
    public class Employee
    {
        public int EmpId { get; set; }
        public string EmpName { get; set; } = string.Empty;
        public string EmpAddress { get; set; } = string.Empty;
        public int EmpSalary { get; set; }
    }
}
