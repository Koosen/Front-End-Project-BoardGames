import AdvancedSearch from "./AdvancedSearch";

function Landing() {
  return (
    <div className="LandingBodyText">
      <h2>Take a seat at our table</h2>
      <p>
        Welcome to Board Game Review, or BGR for short. Around here, we like to
        roll with the dice rather than the punches. Whether its becoming the
        traitor in House on the Haunted Hill or being a silent ghost in
        mysterium, BGR has you covered for the best reviews on the web!. <br />
        <br />
        What?! No we dont want any sheep for your wood, but maybe you could find
        someone who does below with our search function.
      </p>
      <AdvancedSearch/>
    </div>
  );
}

export default Landing;
