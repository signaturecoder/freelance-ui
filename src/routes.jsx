import { HomePage, Dashboard, ScreenPlayAnalytics } from "./containers";
import locationIcon from "./images/noun_Location.svg";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import DialogueAnalytics from "./components/DialogueAnalytics/DialogueAnalytics";
import GenrePredicted from "./components/LocationAnalytics/GenrePredicted";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AssistantIcon from "@mui/icons-material/Assistant";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import InsightsIcon from "@mui/icons-material/Insights";
import TransgenderIcon from "@mui/icons-material/Transgender";
import CompareIcon from "@mui/icons-material/Compare";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ScreenplayStats from "./components/ScreenpalyStats/ScreenplayStats"
import AuthRoute from "./components/Login/AuthRoute";
import RootNode from "./RootNode";

export const routes = [
  {
    path: "/dashboard",
    title: "dashboard",
    component: Dashboard,
    Icon: "",
    children: null,
  },
  {
    path: "/GenrePredicted&MPAARating",
    title: "Genre Predicted & MPAA Rating",
    component: GenrePredicted,
    Icon: StarHalfIcon,
    children: null,
  },
  {
    path: "/screenplaystats",
    title: "Screenplay Stats",
    component: ScreenplayStats,
    children: null,
    Icon: AnalyticsIcon,
  },
  // {
  //   path: "/Dialogueanalytics",
  //   title: "Dialogue Analytics",
  //   component: DialogueAnalytics,
  //   children: null,
  // },

  {
    path: "/ScriptAnalysis",
    title: "Script Analysis",
    Icon: ManageSearchIcon,
    children: [
      {
        path: "/ScriptAnalysis/Characteranalytics",
        title: "Character Analytics",
        component: null,
        Icon: EmojiObjectsIcon,
      },
      {
        path: "/ScriptAnalysis/Dialogueanalytics",
        title: "Dialogue Analytics",
        component: DialogueAnalytics,
        Icon: AssistantIcon,
      },
      {
        path: "/ScriptAnalysis/Emotionanalytics",
        title: "Emotion Analytics",
        component: null,
        Icon: EmojiEmotionsIcon,
      },
      {
        path: "/ScriptAnalysis/Locationanalytics",
        title: "Location Analytics",
        component: null,
        Icon: AddLocationIcon,
      },
    ],
  },
  {
    path: "/Marketanalysis",
    title: "Market Analysis",
    component: null,
    Icon: AcUnitIcon,
    children: [
      {
        path: "/Marketanalysis/Audiencelikeability",
        title: "Character Analytics",
        component: null,
        Icon: EmojiObjectsIcon,
      },
    ]
  },
  {
    path: "/Financialanalysis",
    title: "Financial Analysis",
    component: null,
    Icon: InsightsIcon,
    children: null,
  },
  {
    path: "/Genderequalityratio",
    title: "Gender Equality Ratio",
    component: null,
    Icon: TransgenderIcon,
    children: null,
  },
  {
    path: "/Comparablesuccessratio",
    title: "Comparable Success Ratio",
    component: null,
    Icon: CompareIcon,
    children: null,
  },
  {
    path: "/Report",
    title: "Report",
    component: null,
    Icon: SummarizeIcon,
    children: null,
  },
];
