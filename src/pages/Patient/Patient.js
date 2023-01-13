import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/user.service";
import { utilService } from "../../services/util.service";
import { login } from "../../store/actions/userActions";


export const Patient = () => {
  const { loggedInUser } = useSelector((state) => state.userModule);
  const [value, setValue] = useState(0);
  const options = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5];
  const strings = ["Manic", "Very Happy", "Happy", "Very Good", "Good", "Stable", "Sad", "Very Sad", "Depressed", "Very Depressed", "Suicidal"];
  const [showOptions, setShowOptions] = useState(false);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  async function handleState(option) {
    
    utilService.debounce(async () => {
      try {
        
        setValue(option);
        setShowOptions(false);
        await dispatch(login(loggedInUser,option))
      } catch (error) {
        
      }
      
    },500)
    

  }

  return (
    <main className="patient-container">
      <label className="label" >How do you feel?</label>
      <div className="clock-dropdown">
        <ul className="options">
          {options && options.map((option, index) => (
            <li
              key={index}
              className={`option ${value === option ? 'selected' : ''}`}
              onClick={() => { handleState(option); }}
            >
              <span className="option-text">{strings[index]}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

