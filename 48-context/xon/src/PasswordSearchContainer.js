import React from "react";

function PasswordSearchContainer({
  password,
  setPassword,
  passwordList,
  handleCheck,
}) {
  return (
    <div style={{ marginTop: "20px" }}>
      <label htmlFor="password">password:</label>
      <input
        id="password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select onChange={(e) => setPassword(e.target.value)}>
        <option>-- select password --</option>
        {passwordList.map((password) => {
          return (
            <option key={password} value={password}>
              {password}
            </option>
          );
        })}
      </select>
      <button onClick={() => handleCheck(password)}>check breach count</button>
    </div>
  );
}

export default PasswordSearchContainer;
