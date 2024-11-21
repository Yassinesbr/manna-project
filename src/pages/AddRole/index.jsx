import TextField from "../../components/TextField";
import "./AddRole.css";
import roleIcons from "../../enum/roleIcon";
import SwitchButton from "../../components/SwitchButton";
import Button from "../../components/Button";
import { AccessLevel } from "../../enum/accessLevel";
import useAddRole from "../../hooks/useAddRole";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PermissionType } from "../../enum/permissionTypes";
import Typography from "../../components/Typography";
import { useEffect } from "react";
import { rolesRoute } from "../../App";

const AddRole = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    value,
    setValue,
    selectedIcon,
    setSelectedIcon,
    permissions,
    setPermissions,
    handleSwitchChange,
    handleSave,
  } = useAddRole();

  useEffect(() => {
    if (location.state && location.state.permissions) {
      setPermissions(location.state.permissions);
    }
  }, [location.state, setPermissions]);

  const title = id ? "Edit Role" : "Add Custom Role";
  return (
    <>
      <div className="header-container">
        <Typography variant="heading1" className="color-black">
          {title}
        </Typography>

        <Typography variant="body2" className="color-gray-2">
          Configure general information and permissions below. Don’t forget to
          save the Custom Role.
        </Typography>
        <div className="add-role-input-container">
          <TextField
            label="Custom Role Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Input Custom Role Name"
          />
        </div>
        <div className="role-icons-container">
          <Typography variant="caption" className="color-gray-3">
            Select Role Icon
          </Typography>
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
      <Typography variant="subheading1" className="color-black" gutterBottom>
        Permissions
      </Typography>
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
          onClick={() => navigate(rolesRoute)}
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
