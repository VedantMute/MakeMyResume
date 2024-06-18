import Header from './Header';
import Title from './Title';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import List from './List';
import Certifications from './Certifications';
import Interst from './Interst';
import Volunteer from './Volunteer';
import TechnicalSkills from './TechnicalSkills';

export default function BasicDocument() {
  
  return (
    <div className="max-w-3xl mx-auto f12" id="pdfContent">
      <Header />
      <Title titleName="EDUCATION" />
      <Education />
      <Title titleName="EXPERIENCE" />
      <Experience />
      <Title titleName="TECHNICAL SKILLS" />
      <TechnicalSkills />
      <Title titleName="PROJECTS" />
      <Projects />
      <Title titleName="TRAININGS/WORKSHOPS" />
      <List />
      <Title titleName="CERTIFICATIONS" />
      <Certifications />
      <Volunteer />
      <Title titleName="INTEREST / COURSEWORK" />
      <Interst />
    </div>
  );
}
