import { withRouter } from "react-router-dom";
import { useStyles } from "../../SidebarStyles";
import Header from "../Header/Header"

export const Body = withRouter(({Screen}) => {
  // console.log(typeof(Screen))
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {/* <Header/> */}
      {/* </div> */}
      {Screen?<Screen/>:""}
    </main>
  );
});
