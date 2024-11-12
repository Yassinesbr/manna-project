import { useEffect, useState, useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { getRoles } from "../api/roleService";
import useDeleteRole from "./useDeleteRole";

const useRoles = () => {
  const showNotification = useContext(NotificationContext);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);

  const { handleDelete, loading: deleting } = useDeleteRole();

  const handleDeleteClick = (role) => {
    if (!role.isCustom) {
      showNotification("Cannot delete default role.", "error");
      return;
    }
    setRoleToDelete(role);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (roleToDelete) {
      handleDelete(roleToDelete, setRoles, setIsModalOpen);
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setRoleToDelete(null);
  };

  useEffect(() => {
    getRoles()
      .then((response) => {
        setRoles(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
        setError("Failed to load roles.");
        setLoading(false);
      });
  }, []);

  return {
    roles,
    loading: loading || deleting,
    error,
    isModalOpen,
    roleToDelete,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
  };
};

export default useRoles;
