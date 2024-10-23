import Skill from "./skill";
function SkillList(){
    return (
        <div className="skill-list">
          <Skill skill="React" emoji="💪" color="blue" />
          <Skill skill="Java" emoji="💪" color="orange" />
          <Skill skill="SQL" emoji="💪" color="yellow" />
          <Skill skill="Go" emoji="👶" color="orangered" />
        </div>
      );
}

export default SkillList;