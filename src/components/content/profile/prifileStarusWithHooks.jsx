import React, { useState } from "react";
// import s from "./profile.module.css";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
  
    let activateMood = () => {
        setEditMode(true);
    }
    let deactivateMood = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
      <div>
        {!editMode && 
          <div>
            <span onDoubleClick={activateMood}>
              {props.status || "-------"}
            </span>
          </div>
        }
        {editMode && 
          <div>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateMood}
              value={status}
            />
          </div>
        }
      </div>
    );
  
}

export default ProfileStatusWithHooks;
