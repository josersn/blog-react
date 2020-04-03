import React from "react";
import { Switch, Route  } from "react-router-dom";

import Index from "./pages/index"

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Index} />
        </Switch>
    )
}