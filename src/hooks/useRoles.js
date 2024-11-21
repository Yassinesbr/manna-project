import { useEffect, useState, useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { getRoles } from "../api/roleService";
import useDeleteRole from "./useDeleteRole";
import { LoaderContext } from "../context/LoaderContext";

const useRoles = () => {
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const showNotification = useContext(NotificationContext);

  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);
  const [error, setError] = useState(null);

  const { handleDelete } = useDeleteRole();

  const handleDeleteClick = (role) => {
    if (!role.isCustom) {
      showNotification("Cannot delete default role.", "error");
      return;
    }
    setRoleToDelete(role);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (roleToDelete) {
      setIsModalOpen(false);
      await handleDelete(roleToDelete, (deletedId) => {
        setRoles((prevRoles) =>
          prevRoles.filter((role) => role.id !== deletedId)
        );
      });
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setRoleToDelete(null);
  };

  const fetchRoles = async () => {
    showLoader();
    try {
      const fetchedRoles = await getRoles();
      setRoles(fetchedRoles);
    } catch (error) {
      console.error("Error fetching roles:", error);
      setError("Failed to load roles.");
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return {
    roles,
    isModalOpen,
    roleToDelete,
    error,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
  };
};

export default useRoles;
