import { useState, useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { deleteRole } from "../api/roleService";

const useDeleteRole = () => {
  const showNotification = useContext(NotificationContext);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (roleToDelete, setRoles, setIsModalOpen) => {
    setLoading(true);
    try {
      const deletedId = await deleteRole(roleToDelete.id);
      setRoles((prevRoles) =>
        prevRoles.filter((role) => role.id !== deletedId)
      );
      showNotification("Role deleted successfully!", "success");
    } catch (err) {
      console.error("Error deleting role:", err);
      showNotification("Failed to delete role.", "error");
    } finally {
      setIsModalOpen(false);
      setLoading(false);
    }
  };

  return { handleDelete, loading };
};

export default useDeleteRole;
