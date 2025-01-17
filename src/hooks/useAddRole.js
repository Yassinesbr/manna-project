import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";
import { addRole, getRoleById } from "../api/roleService";
import { PermissionType } from "../enum/permissionTypes";
import useModifyRole from "./useModifyRole";
import { rolesRoute } from "../App";
import { LoaderContext } from "../context/LoaderContext";

const useAddRole = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const showNotification = useContext(NotificationContext);
  const { showLoader, hideLoader } = useContext(LoaderContext);

  const { modifyRole } = useModifyRole();

  const [value, setValue] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [permissions, setPermissions] = useState(
    PermissionType.map((permission) => ({
      id: permission.id,
      accessLevel: 1,
    }))
  );

  const fetchRole = async () => {
    if (id) {
      showLoader();
      try {
        const role = await getRoleById(id);
        setValue(role.name);
        setSelectedIcon(role.roleIcon);
        setPermissions(role.permissions);
      } catch (error) {
        console.error("Error fetching role:", error);
        showNotification("Failed to load role.", "error");
      } finally {
        hideLoader();
      }
    }
  };

  useEffect(() => {
    fetchRole();
  }, [id]);

  const handleSwitchChange = (selectedValue, permissionId) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((perm) =>
        perm.id === permissionId
          ? { ...perm, accessLevel: selectedValue }
          : perm
      )
    );
  };

  const handleSave = async () => {
    if (!value.trim()) {
      showNotification("Role name cannot be empty.", "error");
      return;
    }

    const roleData = { name: value, roleIcon: selectedIcon, permissions };

    try {
      if (id) {
        await modifyRole(id, roleData);
      } else {
        await addRole(roleData);
        showNotification("Role added successfully!", "success");
        navigate(rolesRoute);
      }
    } catch (error) {
      console.error("Error saving role:", error);
      showNotification("An error has occurred.", "error");
    }
  };

  return {
    value,
    setValue,
    selectedIcon,
    setSelectedIcon,
    permissions,
    setPermissions,
    handleSwitchChange,
    handleSave,
  };
};

export default useAddRole;
