// useAddRole.js
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";
import { addRole, getRoleById } from "../api/roleService";
import { PermissionType } from "../enum/permissionTypes";
import useModifyRole from "./useModifyRole";

const useAddRole = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const showNotification = useContext(NotificationContext);
  const { modifyRole, loading: modifying } = useModifyRole();

  const [value, setValue] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [permissions, setPermissions] = useState(
    PermissionType.map((permission) => ({
      id: permission.id,
      accessLevel: 1,
    }))
  );
  const [loading, setLoading] = useState(!!id);

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

    const roleData = {
      name: value,
      roleIcon: selectedIcon,
      permissions,
    };

    if (id) {
      modifyRole(id, roleData);
    } else {
      try {
        await addRole(roleData);
        showNotification("Role added successfully!", "success");
        navigate("/roles");
      } catch (error) {
        console.error("Error saving role:", error);
        showNotification("An error has occurred.", "error");
      }
    }
  };

  useEffect(() => {
    if (id) {
      getRoleById(id)
        .then((role) => {
          setValue(role.name);
          setSelectedIcon(role.roleIcon);
          setPermissions(role.permissions);
        })
        .catch((error) => {
          console.error("Error fetching role:", error);
          showNotification("Failed to load role.", "error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, showNotification]);

  return {
    value,
    setValue,
    selectedIcon,
    setSelectedIcon,
    permissions,
    handleSwitchChange,
    handleSave,
    loading: loading || modifying,
  };
};

export default useAddRole;
