//========== React =========//
import { useEffect, useMemo, useState } from "react";

//=========== Material UI ============//
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { Autocomplete, TextField } from "@mui/material";

//========== Components ============//
import ArticleFirst, {
  ArticleSecond,
  ArticleThird,
} from "../../Components/article/article";
import Menu from "./../../Components/menu/menu";
import Burger from "../../Components/burger/burger";
import SimpleAccordion from "../../Components/accordion/accordion";
import WebworkerButton from "../../Components/button/button";
import { getCharacter } from "../../api/characterApi/index";

//============= Styles ==============//
import { ArticleWrapper, ContentWrapper } from "./styles";
import { AsideWrapper } from "./styles";

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchCharacter, setSearchCharacter] = useState<ICharacter | null>(
    null
  );

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
          <div>
            {searchCharacter ? (
              <Card sx={{ minWidth: 300 }}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={searchCharacter?.name}
                  subheader={searchCharacter?.species}
                />
                <CardMedia
                  component="img"
                  height="300"
                  image={searchCharacter?.image}
                  alt="character"
                />
              </Card>
            ) : (
              ""
            )}
          </div>
          {cards.length ? memoCards : "Ups..."}
        </ArticleWrapper>
        <AsideWrapper>
          <SimpleAccordion></SimpleAccordion>
          <WebworkerButton></WebworkerButton>
          <Autocomplete
            disablePortal
            options={cards}
            sx={{ width: 150 }}
            onChange={(e, value) => setSearchCharacter(value)}
            getOptionLabel={(option: any) => option.name || ""}
            renderInput={(params) => (
              <TextField {...params} label="Character" />
            )}
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
