import React from "react"
import { Switch, Route} from "react-router-dom";
import Paginations from "../pages/Paginations"

const Section = () =>{
  return(
    <section >
      <Switch>

        <Route exact path="/" component={Paginations}/>

      </Switch>
    </section>
  )
}

export default Section
