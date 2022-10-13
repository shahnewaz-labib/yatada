import React from "react";

const tasks = [
  { title: "title1", desc: "desc1" },
  { title: "title2", desc: "desc2" },
  { title: "title3", desc: "desc3" },
  { title: "title4", desc: "desc4" },
];

const TaskBoard = () => {
  return (
    <>
      <div>Task title</div>
      <div>Task Description</div>
      <div>
        {tasks.map((data, key) => {
          return <div key={key}>{data.title + " " + data.desc}</div>;
        })}
      </div>
    </>
  );
};

export default TaskBoard;
