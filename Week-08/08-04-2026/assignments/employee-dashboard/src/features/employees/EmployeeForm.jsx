import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "./employeeSlice";
import { setLoading } from "../ui/uiSlice";

function EmployeeForm({ editData, setEditData }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const dispatch = useDispatch();
  const isEditing = Boolean(editData);

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setPosition(editData.position);
    } else {
      setName("");
      setPosition("");
    }
  }, [editData]);

  const handleSubmit = () => {
    if (!name.trim() || !position.trim()) {
      return;
    }

    dispatch(setLoading(true));

    setTimeout(() => {
      if (isEditing) {
        dispatch(
          updateEmployee({
            id: editData.id,
            name: name.trim(),
            position: position.trim(),
          })
        );
        setEditData(null);
      } else {
        dispatch(
          addEmployee({
            id: Date.now(),
            name: name.trim(),
            position: position.trim(),
          })
        );
      }

      setName("");
      setPosition("");
      dispatch(setLoading(false));
    }, 500);
  };

  return (
    <div className="card employee-form">
      <h3>{isEditing ? "Edit Employee Details" : "Add New Employee"}</h3>
      <div className="form-group">
        <label htmlFor="name">Employee Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter employee name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Job Position</label>
        <input
          id="position"
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Enter job position"
        />
      </div>
      <div className="form-actions">
        <button onClick={handleSubmit} disabled={!name.trim() || !position.trim()}>
          {isEditing ? "Update Employee" : "Add Employee"}
        </button>
        {isEditing && (
          <button onClick={() => setEditData(null)} className="cancel-btn">
            Cancel Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default EmployeeForm;