import TextField from "../../components/TextField";
import "./AddRole.css";
import roleIcons from "../../enum/roleIcon";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { rolesRoute } from "../../App";
import useAddRole from "../../hooks/useAddRole";
import RoleIconsSelector from "../../components/RoleIconsSelector";
import PermissionsList from "../../components/PermissionsList";

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
  } = useAddRole();

  const title = id ? "Edit Role" : "Add Custom Role";

  return (
    <div className="add-role-container">
      <div className="header-container">
        <Typography variant="heading1" className="color-black">
          {title}
        </Typography>
        <Typography variant="body2" className="color-gray-2">
          Configure general information and permissions below. Don’t forget to
          save the Custom Role.
        </Typography>
        <TextField
          label="Custom Role Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Input Custom Role Name"
        />
      </div>

      <RoleIconsSelector
        roleIcons={roleIcons}
        selectedIcon={selectedIcon}
        onIconSelect={setSelectedIcon}
      />

      <Typography variant="subheading1" className="color-black" gutterBottom>
        Permissions
      </Typography>

      <PermissionsList
        permissions={permissions}
        onSwitchChange={handleSwitchChange}
      />

      <div className="button-container">
        <Button
          label="Cancel"
          variant="secondary"
          onClick={() => navigate(rolesRoute)}
        />
        <Button
          label={id ? "Update Role" : "Save Changes"}
          variant="primary"
          onClick={handleSave}
        />
      </div>
    </div>
  );
};

export default AddRole;
