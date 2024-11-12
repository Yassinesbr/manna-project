import usersIcon from "../../assets/users.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import "./RoleCard.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const RoleCard = ({ id, role, users, isDefault = false, icon, onDelete }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/roles/edit-role/${id}`);
  };
  return (
    <div className="role-card">
      <div className="role-card-header">
        <div className="role-card-edit">
          <p className="role-card-header-text">
            {isDefault ? "Default Role" : "Custom Role"}
          </p>
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
          <h3>{role}</h3>
        </div>
      </div>
      <div className="role-card-body">
        <div className="role-card-body-item">
          <img src={usersIcon} alt="users" className="users-icon" />
          <p className="role-card-body-item-text">{users}</p>
        </div>
        <p className="role-card-body-item-text">Users assigned</p>
      </div>
      <div className="role-card-link">Use as template</div>
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
