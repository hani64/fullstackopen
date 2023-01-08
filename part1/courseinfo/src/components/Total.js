const Total = ({parts}) => <strong>Number of exercises {parts.reduce(((prev, curr) => prev + curr.exercises), 0)}</strong>

  export default Total