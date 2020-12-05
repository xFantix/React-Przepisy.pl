import React from "react";
import * as style from "../style/navigationStyle";
const Navigation = () => {
  return (
      <style.NavContainer>
        <style.StyleHeader exact to="/">
          BestRecipe
        </style.StyleHeader>
        <style.NavigationList>
          <style.ElementOfList>
            <style.LinkList to="/kuchnie">Kitchen</style.LinkList>
          </style.ElementOfList>
          <style.ElementOfList>
            <style.LinkList to="/przepisy">Recipe</style.LinkList>
          </style.ElementOfList>
          <style.ElementOfList>
            <style.LinkList to="/wlasciwosci-produktow">Właściwości produktów</style.LinkList>
          </style.ElementOfList>
          <style.ElementOfList>
            <style.LinkList to="/wina"><i className="far fa-heart"></i></style.LinkList>
          </style.ElementOfList>
        </style.NavigationList>
      </style.NavContainer>
  );
};

export default Navigation;
