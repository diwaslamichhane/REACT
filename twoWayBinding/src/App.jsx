import React, { useState } from "react";

// form ko default behaviour xa, submit garda page reload huney. This is a issue.
// so to prevent reloading the page and submit the form, we use .preventDefault().

// yaha maile function ma e pass garey ani onclick ma e.preventDefault() garey.

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
  };

  const [username, setUsername] = useState("");

  return (
    <div className="p-3 h-screen w-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);

          setUsername('')
        }}
        className="flex flex-col gap-6 w-1/4"
      >
        <input
        value={username}
          onChange={(e) => {
            setUsername(e.target.value) //update state when input changes
          }}
          className="border-2 p-2 rounded-lg border-slate-600 font-semibold text-slate-600"
          type="text"
          placeholder="UserName"
        />
        <button
          className="text-white bg-slate-600 p-2 rounded-xl font-semibold"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default App;
