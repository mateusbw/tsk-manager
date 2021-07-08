import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
