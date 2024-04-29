import { useState } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

const App = () => {
	const [votes, setVotes] = useState({
	  good: 0,
	  neutral: 0,
	  bad: 0
	});
  
	return (
	  <>
		<Description />
		<Options onUpdate={setVotes} />
		<Feedback votes={votes} />
	  </>
	);
  };

export default App;