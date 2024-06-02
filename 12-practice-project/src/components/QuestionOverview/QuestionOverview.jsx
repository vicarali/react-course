import "./QuestionOverview.css";
import { useEffect, useState } from "react";

export function QuestionOverview({
	children,
	currentStep,
	goToNextStepAfterTimeRanOut
}) {
	const [timerProgress, setTimerProgress] = useState(100);

	useEffect(() => {
		const timerInterval = setInterval(updateTimer, 100);

		return () => {
			clearInterval(timerInterval);
			setTimerProgress(100);
		};
	}, [currentStep]);

	function updateTimer() {
		setTimerProgress((previousProgress) => {
			if (previousProgress === 0) {
				goToNextStepAfterTimeRanOut();
			}

			return previousProgress - 4;
		});
	}

	return (
		<div className="question-overview">
			<progress
				className="question-overview__progress-bar"
				max="100"
				value={timerProgress}
			></progress>
			<label className="question-overview__title">{children}</label>
		</div>
	);
}
