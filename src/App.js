import "./styles.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
//import MappingStrings from "./LessonOne/MappingStrings.js";
//import Form from "./LessonTwo/Form";
import StoringData from "./LessonTwo/StoringData";
import Calculator from "./LessonTwo/Calculator";
import UserLogIn from "./LessonTwo/ClientLogIn";
import UserSignUp from "./LessonTwo/ClientSignUp";
//import UserInfo from "./LessonTwo/ClientInfoForm";
//import SingleFunction from "./LessonTwo/SingleFunction";
import DataManagement from "./LessonThree/DataManagement";
import ArrayOfCars from "./LessonThree/ArrayOfCars";
import VideoUpload from "./LessonThree/VideoUpload";
import Redirection from "./LessonFour/Redirection";
import SignIn from "./LessonFour/SignIn";
import TreasurePage from "./LessonFour/TreasurePage";
import LogIn from "./LessonFour/LogIn";
import Welcome from "./LessonFour/Welcome";
import AxiosLearn from "./LessonFive/AxiosLearn";
import pushUser from "./LessonFive/pushUser";

export default function App() {
  const allPaths = [
    { name: "StoringData", path: "/StoringData", component: StoringData },
    { name: "Calculator", path: "/Calculator", component: Calculator },
    { name: "UserLogIn", path: "/UserLogIn", component: UserLogIn },
    { name: "UserSignUp", path: "/UserSignUp", component: UserSignUp },
    {
      name: "DataManagement",
      path: "/DataManagement",
      component: DataManagement
    },
    { name: "ArrayOfCars", path: "/ArrayOfCars", component: ArrayOfCars },
    { name: "VideoUpload", path: "/VideoUpload", component: VideoUpload },
    { name: "Redirection", path: "/Redirection", component: Redirection },
    { name: "SignIn", path: "/SignIn", component: SignIn },
    { name: "TreasurePage", path: "/TreasurePage", component: TreasurePage },
    { name: "LogIn", path: "/LogIn", component: LogIn },
    { name: "Welcome", path: "/Welcome", component: Welcome },
    { name: "AxiosLearn", path: "/AxiosLearn", component: AxiosLearn },
    { name: "pushUser", path: "/pushUser", component: pushUser }
  ];

  return (
    <Router>
      {allPaths.map((e) => {
        return (
          <nav>
            <li>
              <Link to={e.path}>{e.name}</Link>
            </li>
          </nav>
        );
      })}

      {allPaths.map((e) => (
        <Route path={e.path} component={e.component} />
      ))}
    </Router>
  );
}

//<LINK to="/"> <LINK>
