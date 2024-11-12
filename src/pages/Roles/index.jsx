import RoleCard from "../../components/RolesCard";
import ConfirmationModal from "../../components/ConfirmationModal";
import "./Roles.css";
import AddCostumeRoleCard from "../../components/AddCostumeRoleCard";
import roleIcons from "../../enum/roleIcon";
import useRoles from "../../hooks/useRoles";

const Roles = () => {
  const {
    roles,
    loading,
    error,
    isModalOpen,
    roleToDelete,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
  } = useRoles();

  if (loading) {
    return <div className="title">Loading roles...</div>;
  }

  if (error) {
    return <div className="title">{error}</div>;
  }

  return (
    <div>
      <h1 className="title">User Roles</h1>
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
        <AddCostumeRoleCard />
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
