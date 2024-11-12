import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getRoles = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/Roles?identifier=yassine_essebbar`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching roles:", err);
    throw err;
  }
};

export const addRole = async (newRole) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/AddRole?identifier=yassine_essebbar`,
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
    await axios.delete(
      `${API_BASE_URL}/api/DeleteRole/${id}?identifier=yassine_essebbar`
    );
    return id;
  } catch (err) {
    console.error("Error deleting role:", err);
    throw err;
  }
};

export const getRoleById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/Roles/${id}?identifier=yassine_essebbar`
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
