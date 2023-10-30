import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Counter from "./Counter";

const TeamSkills = () => {
  return (
    <div className="row pt-35 justify-content-between">
      <div className="col-xl-3 col-sm-4">
        <div className="circle-progress-item">
          <div className="progress-content one">
            <div style={{ width: "120px", margin: "0 auto" }}>
              <CircularProgressbar
                width={120}
                value={89}
                strokeWidth={20}
                styles={buildStyles({
                  pathColor: "#55E6A5",
                  trailColor: "#fff",
                })}
              />
            </div>
            <h5>Web Design</h5>
            <Counter end={89} extraClass={"percent"} />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-4">
        <div className="circle-progress-item">
          <div className="progress-content two">
            <div style={{ width: "120px", margin: "0 auto" }}>
              <CircularProgressbar
                width={120}
                value={93}
                strokeWidth={20}
                styles={buildStyles({
                  pathColor: "#55E6A5",
                  trailColor: "#fff",
                })}
              />
            </div>
            <h5>Development</h5>
            <Counter end={93} extraClass={"percent"} />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-4">
        <div className="circle-progress-item">
          <div className="progress-content three">
            <div style={{ width: "120px", margin: "0 auto" }}>
              <CircularProgressbar
                width={120}
                value={75}
                strokeWidth={20}
                styles={buildStyles({
                  pathColor: "#55E6A5",
                  trailColor: "#fff",
                })}
              />
            </div>
            <h5>Marketing</h5>
            <Counter end={75} extraClass={"percent"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamSkills;
