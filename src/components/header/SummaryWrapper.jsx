import { useSelector } from "react-redux";
import {
  totalProjects,
  totalTasks,
  totalDays,
  totalMembers,
  totalHours,
} from "../table/tableComponents/tableDataSlice";
import { getTotalTime } from "../../helpers";

export default function SummaryWrapper() {
  const posts = useSelector(totalProjects);
  const tasks = useSelector(totalTasks);
  const days = useSelector(totalDays);
  const members = useSelector(totalMembers);
  const hours = useSelector(totalHours);

  return (
    <div className="summary-wrapper">
      <div>
        <div className="brand-wrapper">
          <div className="logo-wrapper">
            <img
              src="../public/reuters-logo.png"
              alt="reuters-logo"
              width="30px"
              height="auto"
            />
          </div>
          <p>Reuters.com</p>
        </div>
        <div className="contact-data-wrapper">
          <p>
            <span className="material-symbols-outlined">mail</span>
            bailee.king@reuters.com
          </p>
          <p>
            <span className="material-symbols-outlined">phone_in_talk</span>
            453-693-2885
          </p>
          <p>
            <span className="material-symbols-outlined">public</span>
            www.reuters.com
          </p>
        </div>
        <div className="summary-data-wrapper">
          <p>
            <span>{posts}</span> projects
          </p>
          <div className="data-delimiter">&#x2022;</div>
          <p>
            <span>{tasks}</span> tasks
          </p>
          <div className="data-delimiter">&#x2022;</div>
          <p>
            <span>{days}</span> days
          </p>
          <div className="data-delimiter">&#x2022;</div>
          <p>
            <span>{members}</span> members
          </p>
        </div>
      </div>
      <div>
        <p>Total Hours</p>
        <p>{getTotalTime(hours)}</p>
      </div>
    </div>
  );
}
