import React, { useState, useEffect } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Avatar,
  Collapse,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";

import { withRouter, useLocation } from "react-router-dom";
import { routes } from "../../routes";
import { Typography } from "@mui/material";
import "./main.css";

export const MenuSettings = withRouter((props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const user = sessionStorage.getItem("user")
  const handleClick = () => {
    setOpen(!open);
  };
  //   console.log(location.pathname );
  return (
    <>
     {!user? <List className="remove_extar_padding">
        {routes.map((item, index) => {
          const selected = location.pathname === item.path;
          const activBgColor = selected ? "actve_color" : "";
          const activeColor = selected ? "all_Icons" : "not_active";
          const Icon = item && item.Icon ? item.Icon : null;
          return (
            <div key={index}>
              {!item.children ? (
                <ListItem
                  className={activBgColor}
                  button
                  key={item.title}
                  onClick={() => props.history.push(item.path)}
                >
                  <ListItemIcon>
                    {item && item.Icon ? (
                      <Icon className={activeColor} />
                    ) : (
                      <MailIcon className={activeColor} />
                    )}
                  </ListItemIcon>
                  <ListItemText className="side_bar_text">
                    <Typography>{item.title}</Typography>
                  </ListItemText>
                </ListItem>
              ) : (
                <>
                  <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                      {item && item.Icon ? (
                        <Icon className={activeColor} />
                      ) : (
                        <MailIcon className={activeColor} />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                    {open ? <RemoveIcon /> : <AddIcon />}
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((ele, i) => {
                        const selected = location.pathname === ele.path;
                        const childBgcolor = selected ? "actve_color" : "";
                        const activeColor = selected
                          ? "all_Icons"
                          : "not_active";
                        const Icon = ele && ele.Icon ? ele.Icon : null;
                        return (
                          <ListItem
                            key={i}
                            className={childBgcolor}
                            button
                            onClick={() => props.history.push(ele.path)}
                          >
                            <ListItemIcon>
                              {item && ele.Icon ? (
                                <Icon className={activeColor} />
                              ) : (
                                <MailIcon className={activeColor} />
                              )}
                            </ListItemIcon>
                            <ListItemText className="side_bar_text">
                              <Typography>{ele.title}</Typography>
                            </ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              )}
            </div>
          );
        })}
      </List>:null}
    </>
  );
});




// import React, { useState } from "react";
// import { List, ListItem, ListItemText, Collapse } from "@mui/material";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { Link } from "react-router-dom";

// import { routes } from "../../routes";
// import "./main.css";

// const MenuItem = ({ item }) => {
//   const Component = hasChildren(item) ? MultiLevel : SingleLevel;
//   return <Component item={item} />;
// };

// const MultiLevel = ({ item }) => {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <React.Fragment>
//       <ListItem
//         className={item.path !== item.path ? "actve_color" : "not_active"}
//         onClick={handleClick}
//       >
//         <Link to={item.path}>
//           <ListItemText style={{ color: "#424242" }} primary={item.title} />
//         </Link>
//         {open ? <ExpandLessIcon /> : <ChevronRightIcon />}
//       </ListItem>
//       {item && item.children
//         ? item.children.map((ele,key) => {
//             return (
//               <Collapse
//                 in={open}
//                 orientation={"horizontal"}
//                 timeout="auto"
//                 unmountOnExit
//                 key={key}
//               >
//                 {open ? (
//                   <List component="div" disablePadding>
//                     <MenuItem item={ele} />
//                   </List>
//                 ) : null}
//               </Collapse>
//             );
//           })
//         : null}

//       <Collapse
//         in={open}
//         orientation={"horizontal"}
//         timeout="auto"
//         unmountOnExit
//       >
//         <List component="div" disablePadding>
//           {item && item.length > 0
//             ? item.map((child, key) => {
//                 return <MenuItem key={key} item={child} />;
//               })
//             : null}
//         </List>
//       </Collapse>
//     </React.Fragment>
//   );
// };

// const SingleLevel = ({ item }) => {
//   return (
//     <ListItem button>
//       <Link to={item.path}>
//         <ListItemText style={{ color: "#424242" }} primary={item.title} />
//       </Link>
//     </ListItem>
//   );
// };

// function hasChildren(item) {
//   // console.log(item.children);
//   if (item.children && item.children.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// export const MenuSettings = () => {
//   return (
//     <>
//       <MultiLevel item={routes} />{" "}
//     </>
//   );
// };
