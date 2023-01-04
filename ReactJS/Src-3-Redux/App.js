import React, { Component } from 'react'
import { getEmployees, addEmployee, deleteEmployee } from './Redux/action';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : 0, empName : "", empDept : ""
        };
    }
    //This function is like onReady of jQuery that will be called immediatly when the Cmponent is loaded to the DOM. 
    componentDidMount(){
        this.props.getEmployees();
    }

    static propTypes ={
        employees: PropTypes.array.isRequired,
        getEmployees : PropTypes.func.isRequired,
        addEmployee : PropTypes.func.isRequired,
        deleteEmployees : PropTypes.func.isRequired
    };

    addRec = () =>{
        const rec = {
            id : this.state.id,
            empName : this.state.empName,
            empDept : this.state.empDept
        }
        this.props.addEmployee(rec);
    }

    handleIdChange = (e) =>{
        this.setState({
            id : e.target.value
        })
    }

    handleNameChange = (e) =>{
        this.setState({
            empName : e.target.value
        })
    }

    handleDeptChange = (e) =>{
        this.setState({
            empDept : e.target.value
        })
    }
  render() {
    return (
      <div className='container'>
        <h1>All CRUD operations of the Employee App</h1>
        <hr />
        <div className="row">
            <div className="col-md-6">
                <table className='table table-bordered table-stripped table-hover'>
                    <tr>
                        <th>ID</th><th>Name</th><th>Dept</th>    
                    </tr>
                    {this.props.employees && this.props.employees.map((emp)=>{
                        return (
                        <tr>
                            <td>{emp.id}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empDept}</td>
                        </tr>                            
                        )
                    })}
                </table>
            </div>
            <div className='col-md-6'>
                <p>EmpID: <input type="number" onChange={this.handleIdChange} value={this.state.id} /></p>
                <p>EmpName: <input type="text" value ={this.state.empName} onChange={this.handleNameChange}/></p>
                <p>EmpDept: <input type="text" value ={this.state.empDept} onChange={this.handleDeptChange}/></p>
                <p>
                    <button className='btn btn-success'>Update</button>
                    <button className='btn btn-danger' onClick={this.addRec}>Add</button>
                </p>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
    employees : state.employees
})

export default connect(mapStateToProps, { getEmployees, addEmployee, deleteEmployee})(App);
