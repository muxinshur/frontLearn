import portalTitle from "./components/portalTitle.js"
import portalContext1 from "./components/portalContext1.js";
import portalContext2 from "./components/portalContext2.js";
import portalBottom from "./components/portalBottom.js";

export default {
    components:{ portalTitle, portalContext1, portalContext2, portalBottom },
    template:`  
        <portal-title></portal-title>
        <portal-context1></portal-context1>
        <portal-context2></portal-context2>
        <portal-bottom></portal-bottom>
    `
}