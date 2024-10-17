import resumeTitle from "./components/resumeTitle.js";
import resumeInfo from "./components/resumeInfo.js";

export default {
    components:{ resumeTitle, resumeInfo },
    template:`
        <resume-title></resume-title>
        <resume-info></resume-info>
    `,
}