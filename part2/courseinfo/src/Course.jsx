const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Header = ({courseName}) => {
    return <h1>{courseName}</h1>
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  const Footer = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <p>total of {total} exercises</p>
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header courseName = {course.name} />
        <Content parts = {course.parts} />
        <Footer parts = {course.parts}/>
      </div>
    )
  }
  
  export default Course