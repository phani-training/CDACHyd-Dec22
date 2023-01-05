import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEmp , deleteEmp } from '../actions'
export class DataList extends Component {
  constructor(props){
    super(props)
        if(this.props.items.length == 0){
            const items = [
                { empId : 1, empName : "Phaniraj", empAddress : 'Bangalore' },
				{ empId : 2, empName : "Suresh", empAddress : 'Pune' },
				{ empId : 3, empName : "Gopi", empAddress : 'Madras' },
				{ empId : 4, empName : "Shital", empAddress : 'Bombay' },
				{ empId : 5, empName : "Suraj", empAddress : 'Calcutta' }
            ]

            items.forEach((rec)=>{
                this.props.onAddEmp({
                    empId : rec.empId,
                    empName : rec.empName,
                    empAddress: rec.empAddress
                });
            })
        }
    }

    handleDelete = (id, e) =>{
        e.preventDefault();
        this.props.onDelete(id);
    }
    render() {

        const list = this.props.items.map((rec)=>(
            <tr>
                <td>{rec.empId}</td>
                <td>{rec.empName}</td>
                <td>{rec.empAddress}</td>
                <td><a href='#' onClick={(e) => this.handleDelete(rec.empId, e)}>Remove</a></td>
            </tr>
        ))

    return (
      <div>
        <table border="1">
            <tr>
                <th>EmpID </th>
                <th>EmpName</th>
                <th>EmpAddress</th>
                <th>Options</th>
            </tr>
            <tbody>
                {list}
            </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps = state =>{return { items : state} }
const mapDispatchToProps = dispatch =>{ return{
    onAddEmp : rec =>{ dispatch(addEmp(rec));},
    onDelete : id =>{ dispatch(deleteEmp(id));}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(DataList)
