import TextField from "../../components/TextField";
import "./AddRole.css";
import roleIcons from "../../enum/roleIcon";
import SwitchButton from "../../components/SwitchButton";
import Button from "../../components/Button";
import { AccessLevel } from "../../enum/accessLevel";
import useAddRole from "../../hooks/useAddRole";
import { PermissionType } from "../../enum/PermissionType";
import { useNavigate, useParams } from "react-router-dom";

const AddRole = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    value,
    setValue,
    selectedIcon,
    setSelectedIcon,
    permissions,
    handleSwitchChange,
    handleSave,
    loading,
  } = useAddRole();

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <>
      <div className="header-container">
        <h1 className="add-role-title">
          {id ? "Edit Role" : "Add Custom Role"}
        </h1>
        <p className="subtitle">
          Configure general information and permissions below. Don’t forget to
          save the Custom Role.
        </p>
        <div className="add-role-input-container">
          <TextField
            label="Custom Role Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Input Custom Role Name"
          />
        </div>
        <div className="role-icons-container">
          <p className="select-icon-title">Select Role Icon</p>
          <div className="icons-container">
            {roleIcons.map((icon, index) => (
              <div
                key={index}
                className="role-icon"
                onClick={() => setSelectedIcon(index)}
              >
                <img
                  src={selectedIcon === index ? icon.enabled : icon.disabled}
                  alt="role icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="add-role-title">Permissions</h1>
      <div className="permissions-container">
        {PermissionType.map((permission) => {
          const options =
            permission.label === "Transfer Facilities" ||
            permission.label === "Edit Admins"
              ? [
                  { id: 1, value: "Yes" },
                  { id: 0, value: "No" },
                ]
              : AccessLevel.map((level) => ({
                  id: level.value,
                  value: level.label,
                }));
          const selectedValue = permissions.find(
            (perm) => perm.id === permission.id
          ).accessLevel;

          return (
            <SwitchButton
              key={permission.id}
              label={permission.label}
              options={options}
              onChange={(selectedValue) =>
                handleSwitchChange(selectedValue, permission.id)
              }
              selected={selectedValue}
            />
          );
        })}
      </div>
      <div className="button-container">
        <Button
          label="Cancel"
          variant="secondary"
          onClick={() => navigate("/roles")}
          style={{ width: "375px" }}
        />
        <Button
          label={id ? "Update Role" : "Save Changes"}
          variant="primary"
          onClick={handleSave}
          style={{ width: "375px" }}
        />
      </div>
    </>
  );
};

export default AddRole;
