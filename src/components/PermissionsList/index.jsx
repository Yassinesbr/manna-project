import SwitchButton from "../../components/SwitchButton";
import { PermissionType } from "../../enum/permissionTypes";
import { AccessLevel } from "../../enum/accessLevel";
import PropTypes from "prop-types";

const PermissionsList = ({ permissions, onSwitchChange }) => (
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
      )?.accessLevel;

      return (
        <SwitchButton
          key={permission.id}
          label={permission.label}
          options={options}
          onChange={(value) => onSwitchChange(value, permission.id)}
          selected={selectedValue}
        />
      );
    })}
  </div>
);

export default PermissionsList;

PermissionsList.propTypes = {
  permissions: PropTypes.array.isRequired,
  onSwitchChange: PropTypes.func.isRequired,
};
