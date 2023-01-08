const Total = ({parts}) => (
    <>
      <p>Number of exercises {parts.reduce(((prev, curr) => prev + curr.exercises), 0)}</p>
    </>
  )

  export default Total