import usersIcon from "../../assets/users.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import "./RoleCard.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Typography from "../Typography";

const RoleCard = ({ id, role, users, isDefault = false, icon, onDelete }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/roles/edit-role/${id}`);
  };
  const cardTitle = isDefault ? "Default Role" : "Custom Role";
  return (
    <div className="role-card">
      <div className="role-card-header">
        <div className="role-card-edit">
          <Typography variant="caption" className="color-gray-1">
            {cardTitle}
          </Typography>
          <div className="role-card-edit-icons-container">
            <img
              src={editIcon}
              alt="edit"
              className="edit-icons"
              onClick={handleEdit}
            />
            <img
              src={deleteIcon}
              alt="delete"
              className="edit-icons"
              onClick={onDelete}
            />
          </div>
        </div>
        <div className="role-card-avatar">
          <img src={icon} alt="profile" className="role-card-profile-icon" />
          <Typography variant="subheading1" className="color-black">
            {role}
          </Typography>
        </div>
      </div>
      <div className="role-card-body">
        <div className="role-card-body-item">
          <img src={usersIcon} alt="users" className="users-icon" />
          <Typography variant="subheading2" className="color-gray-1">
            {users}
          </Typography>
        </div>
        <Typography variant="body1" className="color-gray-1">
          Users assigned
        </Typography>
      </div>
      <Typography variant="underline" className="color-primary">
        Use as template
      </Typography>
    </div>
  );
};

RoleCard.propTypes = {
  id: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  users: PropTypes.number.isRequired,
  isDefault: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default RoleCard;
