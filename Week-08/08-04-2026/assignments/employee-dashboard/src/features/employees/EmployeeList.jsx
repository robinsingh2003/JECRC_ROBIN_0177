import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "./employeeSlice";

function EmployeeList({ setEditData }) {
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();

  if (!employees.length) {
    return (
      <div className="card empty-state">
        <h4>No Employees Yet</h4>
        <p>Add your first employee using the form above.</p>
      </div>
    );
  }

  return (
    <div className="employee-list">
      <h3>Employee Directory</h3>
      <div className="grid">
        {employees.map((e) => (
          <div className="card employee-card" key={e.id}>
            <h4>{e.name}</h4>
            <p><strong>Position:</strong> {e.position}</p>
            <div className="card-actions">
              <button onClick={() => setEditData(e)} className="edit-btn">
                Edit Details
              </button>
              <button onClick={() => dispatch(deleteEmployee(e.id))} className="delete-btn">
                Remove Employee
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;