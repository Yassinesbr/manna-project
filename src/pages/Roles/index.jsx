import RoleCard from "../../components/RolesCard";
import ConfirmationModal from "../../components/ConfirmationModal";
import "./Roles.css";
import AddCostumeRoleCard from "../../components/AddCostumeRoleCard";
import roleIcons from "../../enum/roleIcon";
import useRoles from "../../hooks/useRoles";
import Typography from "../../components/Typography";
import { useContext } from "react";
import { LoaderContext } from "../../context/LoaderContext";

const Roles = () => {
  const {
    roles,
    isModalOpen,
    roleToDelete,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
  } = useRoles();
  const { isLoading } = useContext(LoaderContext);

  return (
    <div>
      <Typography
        variant="heading1"
        style={{ marginBottom: "24px" }}
        className="color-black"
      >
        User Roles
      </Typography>
      <div className="cards-container">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            id={role.id}
            role={role.name}
            users={role.usersAssigned}
            isDefault={!role.isCustom}
            icon={roleIcons[role.roleIcon].disabled}
            onDelete={() => handleDeleteClick(role)}
          />
        ))}
        {!isLoading && <AddCostumeRoleCard />}
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        title="Confirm Deletion"
        message={`Are you sure you want to delete the role "${roleToDelete?.name}"?`}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default Roles;
