import { useEffect, useState, useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { getRoles } from "../api/roleService";
import useDeleteRole from "./useDeleteRole";
import { LoaderContext } from "../context/LoaderContext";

const useRoles = () => {
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const showNotification = useContext(NotificationContext);
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);

  const { handleDelete } = useDeleteRole();

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
      setIsModalOpen(false);
      showLoader();
      handleDelete(roleToDelete, setRoles, setIsModalOpen).finally(() => {
        hideLoader();
      });
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setRoleToDelete(null);
  };

  useEffect(() => {
    showLoader();
    getRoles()
      .then((response) => {
        setRoles(response);
        hideLoader();
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
        setError("Failed to load roles.");
        hideLoader();
      });
  }, []);

  return {
    roles,
    error,
    isModalOpen,
    roleToDelete,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
  };
};

export default useRoles;
