import ProjectView from "./components/ProjectView/ProjectView";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState, useRef } from "react";
import StartView from "./components/StartView/StartView";
import NewProjectForm from "./components/NewProjectForm/NewProjectForm";

function App() {
	const [projects, setProjects] = useState([]);
	const newProjectForm = useRef();

	function addProject(project) {
		let listOfProjects = [];
		if (projects.length > 0) listOfProjects.push(...projects);

		listOfProjects.push(project);
		setProjects(listOfProjects);
		newProjectForm.current.toggle();
	}

	return (
		<>
			<Sidebar newProjectForm={newProjectForm} projectsListing={projects} />

			{projects.length > 0 ? (
				<ProjectView />
			) : (
				<StartView newProjectForm={newProjectForm} />
			)}

			<NewProjectForm ref={newProjectForm} onSaveForm={addProject} />
		</>
	);
}

export default App;
