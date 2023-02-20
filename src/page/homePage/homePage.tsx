//import "./App.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useMemo, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { getCharacter } from "../../api/characterApi/index";
import { ArticleWrapper, ContentWrapper } from "./styles";
import { AsideWrapper } from "./styles";
import SimpleAccordion from "../../Components/accordion/accordion";
import Burger from "../../Components/burger/burger";
import Menu from "./../../Components/menu/menu";
import WebworkerButton from "../../Components/button/button";
import ArticleFirst, {
  ArticleSecond,
  ArticleThird,
} from "../../Components/article/article";
import { Autocomplete, TextField } from "@mui/material";

const HomePage = () => {
  const [cards, setCards] = useState([]);
  console.log(cards);

  useEffect(() => {
    getCharacter().then((data: any) => {
      setCards(data.results);
    });
  }, []);

  const memoCards = useMemo(() => {
    return cards.map((card: any) => {
      return (
        <Card sx={{ minWidth: 300 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="character"
              ></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={card.name}
            subheader={card.species}
          />
          <CardMedia
            component="img"
            height="300"
            image={card.image}
            alt="character"
          />
        </Card>
      );
    });
  }, [cards]);

  const [open, setOpen] = useState(false);

  return (
    <>
      <ContentWrapper>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <ArticleWrapper>
          <ArticleWrapper>
            <ArticleFirst></ArticleFirst>
            <ArticleSecond></ArticleSecond>
            <ArticleThird></ArticleThird>
          </ArticleWrapper>
          {cards.length ? memoCards : "Ups..."}
        </ArticleWrapper>
        <AsideWrapper>
          <SimpleAccordion></SimpleAccordion>
          <WebworkerButton></WebworkerButton>
          <Autocomplete
            disablePortal
            options={cards}
            sx={{ width: 150 }}
            getOptionLabel={(option: any) => option.name || ""}
            renderInput={(params) => <TextField {...params} label="Character" />}
            filterOptions={(options, state) => {
              console.log(options);
              if (state.inputValue.length > 2) {
                return options.filter((item) =>
                  String(item.name)
                    .toLowerCase()
                    .includes(state.inputValue.toLowerCase())
                );
              }
              return options;
            }}
          />
        </AsideWrapper>
      </ContentWrapper>
    </>
  );
};

export default HomePage;