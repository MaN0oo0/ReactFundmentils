const person = {
  name: "Gregorio Y. Zara",
  age: 36,
  occupation: "Software Engineer",
  hobbies: ["reading", "hiking", "coding"],
  website:'https://www.google.com'
};
function welcome(Name){

        alert(`Hello ${Name}`);
}
function About() {
  return (
    <>
      <div className="container">About Component</div>
      <div className="container border-1 border bg-dark text-white">
        <label>Name: {person.name}</label>
        <br />
        <label>Age: {person.age}</label>
        <br />
        <label>Job: {person.occupation}</label>
        <br />
        <ul>
          hobbies:
          {person.hobbies.map((hobby, index) => {
            return <li key={index}>{hobby}</li>;
          })}
        </ul>
        <label>Website: <a href={person.website}>Go</a></label><br/>
        <input className="form-control"  onChange={(e)=>{person['name']=e.nativeEvent.target.value}}/>
        <button className="btn btn-primary" onClick={()=>{welcome(person.name)}}>Welcome</button>
      </div>
    </>
  );
}

export default About;
