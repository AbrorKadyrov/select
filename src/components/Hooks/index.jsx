import { useContext } from "react";
import { StudentContext } from "../../context";

const Hooks = () => {
  const [data, dispatch] = useContext(StudentContext);

  return (
    <div>
      <h1>Student List {data.student.length} </h1>
      <hr />

      {data.student.map((value) => {
        return (
          <h1 key={value.id}>
            id: {value.id}- Name:{value.name}{" "}
            <button
              onClick={() => dispatch({ type: "delete", payload: value.id })}
            >
              delete
            </button>
          </h1>
        );
      })}
    </div>
  );
};

export default Hooks;
