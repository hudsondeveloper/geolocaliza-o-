import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  Box,
  Typography,
  ListSubheader,
  Hidden,
  Switch,
  InputBase,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import TheatersIcon from "@material-ui/icons/Theaters";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    border: "none",
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    paddingRight: theme.spacing(2),
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(3),
  },
  logo: {
    height: 26,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  buttonLateral: {
    marginLeft: 5,
  },
  subheader: {
    textTransform: "uppercase",
    fontWeight: "bolder",
  },
  search: {
    borderRadius: theme.shape.borderRadius,

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",

    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const videos = [
  {
    id: 1,
    title:
      "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
    channel: "Lucas Nhimi",
    views: "11 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb1.png",
  },
  {
    id: 2,
    title:
      "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02",
    channel: "Lucas Nhimi",
    views: "957 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb2.png",
  },
  {
    id: 3,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Lucas Nhimi",
    views: "106 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb3.png",
  },
  {
    id: 4,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Lucas Nhimi",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb4.png",
  },
  {
    id: 5,
    title:
      "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
    channel: "Lucas Nhimi",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb5.png",
  },
  {
    id: 6,
    title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
    channel: "Lucas Nhimi",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb6.png",
  },
  {
    id: 7,
    title:
      "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
    channel: "Lucas Nhimi",
    views: "118 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb7.png",
  },
  {
    id: 8,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
  {
    id: 9,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
  {
    id: 10,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
  {
    id: 11,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
  {
    id: 12,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
  {
    id: 9,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
  {
    id: 10,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
  {
    id: 11,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
  {
    id: 12,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
];
export default function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === "dark"
                ? "/images/branco.png"
                : "/images/preto.png"
            }
            alt="logo"
            className={classes.logo}
          ></img>

          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow}></div>
          <Switch
            value={props.darkMode}
            onChange={() => props.setDarkMode(!props.darkMode)}
          ></Switch>
          <IconButton className={classes.icons}>
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVertIcon />
          </IconButton>
          <Button
            startIcon={<AccountCircleIcon />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden xsDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem key="1" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Inicio"}
                  />
                </ListItem>
                <ListItem key="2" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Em alta"}
                  />
                </ListItem>
                <ListItem key="3" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Inscrições"}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem key="4" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Biblioteca"}
                  />
                </ListItem>
                <ListItem key="5" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Histórico"}
                  />
                </ListItem>
              </List>
              <Divider />
              <Box p={2}>
                <Typography variant="body2" component="h2">
                  Faça login para curtir videos, comentar e se inscrever
                </Typography>
              </Box>
              <Box paddingLeft={2} paddingBottom={2}>
                <Button
                  startIcon={<AccountCircleIcon />}
                  variant="outlined"
                  color="secondary"
                >
                  Fazer Login
                </Button>
              </Box>
              <Divider />
              <List
                component="nav"
                arial-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    INSCRIÇÕES
                  </ListSubheader>
                }
              >
                <ListItem key="6" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Gabriela batista"}
                  />
                </ListItem>
                <ListItem key="7" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Hudson Luis"}
                  />
                </ListItem>
                <ListItem key="8" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Música"}
                  />
                </ListItem>
                <ListItem key="9" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Jogos"}
                  />
                </ListItem>
                <ListItem key="10" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Esportes"}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem key="11" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Procurar Canais"}
                  />
                </ListItem>
              </List>
              <Divider />
              <List
                component="nav"
                arial-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    MAIS DO YOUTUBE
                  </ListSubheader>
                }
              >
                <ListItem key="12" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<PlayCircleFilledIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"YouTube Premium"}
                  />
                </ListItem>
                <ListItem key="13" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<TheatersIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Filmes"}
                  />
                </ListItem>
                <ListItem key="14" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Jogos"}
                  />
                </ListItem>
                <ListItem key="15" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<LiveTvIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Ao vivo"}
                  />
                </ListItem>
                <ListItem key="16" button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<WbIncandescentIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={"Aprender"}
                  />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Box p={4}>
          <Toolbar></Toolbar>
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 545 }}
          >
            Recomendados
          </Typography>
          <Grid container spacing={3}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  ></img>
                </Box>
                <Typography
                  style={{ fontWeight: 550, fontSize: 15 }}
                  variant="body1"
                  gutterBottom
                  color="textPrimary"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textPrimary" display="block">
                  {item.channel}
                </Typography>
                <Typography variant="body2" color="textPrimary" display="block">
                  {item.views} • {item.date}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
