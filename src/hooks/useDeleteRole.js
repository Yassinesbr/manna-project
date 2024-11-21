import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { deleteRole } from "../api/roleService";
import { LoaderContext } from "../context/LoaderContext";

const useDeleteRole = () => {
  const showNotification = useContext(NotificationContext);
  const { showLoader, hideLoader } = useContext(LoaderContext);

  const handleDelete = async (roleToDelete, onSuccess = () => {}) => {
    showLoader();
    try {
      const deletedId = await deleteRole(roleToDelete.id);
      onSuccess(deletedId);
      showNotification("Custom Role Deleted.", "error");
    } catch (err) {
      console.error("Error deleting role:", err);
      hideLoader();
      showNotification("Failed to delete role.", "error");
    } finally {
      hideLoader();
    }
  };

  return { handleDelete };
};

export default useDeleteRole;
