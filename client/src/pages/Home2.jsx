import Clients from '../components/Clients';
import Projects from '../components/Projects';
// import AddClientModal from '../components/AddClientModal';
// import AddProjectModal from '../components/AddProjectModal';
// import Addnew from '../components/Addnew';

export default function Home2() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        {/* <AddClientModal />
        <AddProjectModal /> */}
        {/* <Addnew/> */}
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
