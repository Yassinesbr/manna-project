import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";
import { updateRole } from "../api/roleService";
import { rolesRoute } from "../App";

const useModifyRole = () => {
  const navigate = useNavigate();
  const showNotification = useContext(NotificationContext);
  const [loading, setLoading] = useState(false);

  const modifyRole = async (id, roleData) => {
    setLoading(true);
    try {
      await updateRole({ id, ...roleData });
      showNotification("Role updated successfully!", "success");
      navigate(rolesRoute);
    } catch (error) {
      console.error("Error saving role:", error);
      showNotification("An error has occurred.", "error");
    } finally {
      setLoading(false);
    }
  };

  return { modifyRole, loading };
};

export default useModifyRole;
