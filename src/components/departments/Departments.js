import departmentStyle from "./departments.module.css";

const Departments = ({ item }) => {
  return (
    <div className={departmentStyle["container"]}>
      <img src={item.img} alt="" />
      <h5>{item.title}</h5>
    </div>
  );
};

export default Departments;
