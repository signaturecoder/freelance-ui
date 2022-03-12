import React, { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./ScreenPlayAnalytics.css";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import {
  DoughnutChart,
  StrokeLine,
  StyledButton,
  StyledFileInput,
  Header,
  ContactUs,
  Footer,
} from "../../components";
import SceneAttributes from "./SceneAttributes";
import CharacterAttributes from "./CharacterAttributes";
import {getScreenAttributes,getCharacterAttributes,uploadAnalysis} from "../../services/screenplay-analytics-service";

import Axios from "axios";

const startAnalysisUrl =
  "http://ec2-65-1-203-34.ap-south-1.compute.amazonaws.com:8000/api/v1/upload-batch";

function ScreenPlayAnalytics() {
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState(0);
  const [filename, setFilename] = useState("");
  const [base64, setBase64] = useState(null);
  const [isAnalytic,setAnalytic]=useState(false)
  const [screenPlayUid,setScreenPlayUid]=useState(null)

  const [sceneAttribute,setSceneAttribute]=useState({
    total_scenes:'10',
    int_scenes:'70',
    ext_scenes:'70',
    perc_day:'70',
  })



  const [characterAttribute,setCahracterAttribute]=useState({
    dominate_character:70,
    total_character:80,
    male:50,
    female:40,
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFileInputChange = (e, type) => {
    if (type === "file") {
      const [file] = e.target.files;
      const { name: fileName } = file;
      const FileList = e.target.files;
      if (FileList && FileList.length > 0) {
        var fileToLoad = FileList[0];
        var fileReader = new FileReader();
        var base64;
        fileReader.onload = function (fileLoadedEvent) {
          base64 = fileLoadedEvent.target.result;
          setBase64(base64);
        };
        fileReader.readAsDataURL(fileToLoad);
      }
      setFilename(fileName);
    } else {
      console.log(e.target.value);
      const isText = e && e.target ? e.target.value : null;
      if (isText) {
        const encodeString = btoa(isText);
        setBase64(encodeString);
      }
    }
  };

  const startAnalysis = () => {
    if (base64) {
      const splitPdf = base64.split(";");
      const splitPdfA = splitPdf[1].split(",");
      const payload = { body: splitPdf ? splitPdfA[1] : null, username: "" };
      const isNullish = Object.values(payload).find(
        (value) => value === null || value === "" || value === undefined
      );
      if (isNullish === null || (isNullish === "" && isNullish === undefined)) {


        enqueueSnackbar("file or input is missing", { variant: "error" });
      } else {
        console.log(payload);
        uploadAnalysis(payload)
          .then((res) => {
            console.log(res);
            if (res) {
              sessionStorage.setItem("screenplayuid", res.data.screenplayuid);
              setScreenPlayUid(res.data.screenplayuid)
              getScreenAnalyticData(res.data.screenplayuid)
              getSCharcterAnalyticData(res.data.screenplayuid)
              enqueueSnackbar("success", { variant: "success" });
              setAnalytic(true)

            }
          })
          .catch((err) => {
            console.log(err);


            // debugger;
            // enqueueSnackbar(err, { variant: "success" });
          });
      }
    } else {
      enqueueSnackbar("file or input is missing", { variant: "error" });
    }
  };

  function getScreenAnalyticData(uid){
    getScreenAttributes(uid).then((res)=>{
      setSceneAttribute(res.data)
    }).catch((err)=>{
      // error operation 
    })
  }

  function getSCharcterAnalyticData(uid){
    getCharacterAttributes(uid).then((res)=>{
      setCahracterAttribute(res.data)
    }).catch((err)=>{
      // error operation 
    })
  }

  return (
    <div className="screenplay__analytics">
      <Header />
      <h1> Screenplay Analytics placeholder </h1>
      <Typography variant="body2" gutterBottom>
        Helps writers and production houses know the comparable success % of the
        screenplay
      </Typography>

      <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="primary"
        >
          <Tab label="Movies" />
          <Tab label="Web Series" />
          <Tab label="Short Films" />
          <Tab label="Documentries" />
          <Tab label="Advertisments" />
        </Tabs>
      </Box>
      <div className="movies__wrapper">
        <div className="movies__wrapper--inner">
          <div className="movies__top--section">
            <p>Paste your script or upload a document:</p>
            {/* <StyledButton variant="outlined" btnName="Upload a pdf/doc/text" /> */}
            <StyledFileInput
              color="primary"
              inputLabel="Upload a pdf/doc/text"
              onChange={(e) => handleFileInputChange(e, "file")}
              filename={filename}
            />
          </div>
          <div>
            {" "}
            <TextareaAutosize
              aria-label="empty textarea"
              minRows={15}
              onChange={(e) => handleFileInputChange(e, "text")}
              placeholder="Paste your script here..."
              style={{ width: "95%", background: "#6B7C98", padding: "0.5em" }}
            />
          </div>
          <div onClick={startAnalysis} style={{ margin: "1em auto" }}>
            <StyledButton variant="outlined" btnName="Start Analysis" />
          </div>
        </div>
      </div>
      {isAnalytic && <div>
      <h3>
        --------------- <span style={{ padding: "0 1em " }}>Free Report </span>
        ---------------
      </h3>
      <p>Success Percentage Of The Screenplay</p>
      {/* <DoughnutChart /> */}
      <div className="report__description">
        <div className="report__description--section">
          <p>Scene Attributes:</p>
          <SceneAttributes attribute={sceneAttribute}/>
        </div>
        <div className="report__description--section">
          <p>Character Attributes:</p>
          <CharacterAttributes attribute={characterAttribute}/>
        </div>
      </div>

      <div className="screenplay__analytics--bottom">
        <div className="bottom__wrapper">
          <Typography
            variant="h6"
            component="div"
            color="secondary"
            gutterBottom
          >
            <strong>Get Certified</strong>
          </Typography>
          <Button variant="contained" className="primary-btn">
            Get Certified Now!
          </Button>
        </div>
        <div className="bottom__wrapper">
          <Typography
            variant="h6"
            component="div"
            color="secondary"
            gutterBottom
          >
            <strong>Try our Detailed Analysis</strong>
          </Typography>
          <Button variant="contained" className="primary-btn">
            Try Now!
          </Button>
        </div>
      </div>
      </div>}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default ScreenPlayAnalytics;
