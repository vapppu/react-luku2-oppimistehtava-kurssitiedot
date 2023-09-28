import Course from './components/Course'

const App = ({notes}) => {

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      }
    ],
  };

  return (
    <Course course={course} />
  );
};

export default App;
