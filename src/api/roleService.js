import axios from "axios";

export const getRoles = async () => {
  try {
    const response = await axios.get("/api/Roles?identifier=yassine_essebbar");
    return response.data;
  } catch (err) {
    console.error("Error fetching roles:", err);
    throw err;
  }
};

export const addRole = async (newRole) => {
  try {
    const response = await axios.post(
      "/api/AddRole?identifier=yassine_essebbar",
      newRole
    );
    return response.data;
  } catch (err) {
    console.error("Error adding role:", err);
    throw err;
  }
};

export const deleteRole = async (id) => {
  try {
    await axios.delete(`/api/DeleteRole/${id}?identifier=yassine_essebbar`);
    return id;
  } catch (err) {
    console.error("Error deleting role:", err);
    throw err;
  }
};

export const getRoleById = async (id) => {
  try {
    const response = await axios.get(
      `/api/Roles/${id}?identifier=yassine_essebbar`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching role:", err);
    throw err;
  }
};

export const updateRole = async (role) => {
  try {
    await axios.put(`/api/UpdateRole?identifier=yassine_essebbar`, role);
  } catch (err) {
    console.error("Error updating role:", err);
    throw err;
  }
};
