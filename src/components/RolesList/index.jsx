import RoleCard from "../../components/RolesCard";
import roleIcons from "../../enum/roleIcon";
import PropTypes from "prop-types";

const RolesList = ({ roles, onDelete }) =>
  roles.map((role) => (
    <RoleCard
      key={role.id}
      id={role.id}
      role={role.name}
      users={role.usersAssigned}
      isDefault={!role.isCustom}
      icon={roleIcons[role.roleIcon]?.disabled}
      onDelete={() => onDelete(role)}
    />
  ));

export default RolesList;

RolesList.propTypes = {
  roles: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
