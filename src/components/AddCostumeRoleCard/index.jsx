import { useNavigate } from "react-router-dom";
import addIcon from "../../assets/add.svg";
import "./AddCostumeRoleCard.css";

const AddCostumeRoleCard = () => {
  const navigate = useNavigate();

  return (
    <div className="add-role-card" onClick={() => navigate("/roles/add-role")}>
      <img src={addIcon} alt="add" className="add-icon" />
      <div className="role-card-link">Add Custom Role</div>
    </div>
  );
};

export default AddCostumeRoleCard;
