import IntroSection1 from "./IntroSections/IntroSection1/IntroSection1";
import IntroSection3 from "./IntroSections/IntroSection3/IntroSection3";
import IntroSection4 from "./IntroSections/IntroSection4/IntroSection4";
import IntroSection5 from "./IntroSections/IntroSection5/IntroSection5";
import IntroSection6 from "./IntroSections/IntroSection6/IntroSection6";
import IntroSection7 from "./IntroSections/IntroSection7/IntroSection7";
import "./StyledIntroPage.css";

export default function IntroPage() {
    /*
    <IntroSection2/>
                <IntroSection3/>
                <IntroSection4/>
                */
    return (
        <div id="intro-page">
            <IntroSection1 />
            <IntroSection3 />
            <IntroSection4 />
            <IntroSection5 />
            <IntroSection6 />
            <IntroSection7 />
        </div>
    )
}