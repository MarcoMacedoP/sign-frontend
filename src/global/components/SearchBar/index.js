import React, {useState} from "react";
import {Container, Input, SearchIcon} from "./styles";
export const SearchBar = ({placeholder}) => {
  const [isActive, setActive] = useState(false);
  return (
    <Container isActive={isActive}>
      <Input
        type="text"
        placeholder={placeholder || "search..."}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        isActive={isActive}
      />
      <SearchIcon isActive={isActive}>search</SearchIcon>
    </Container>
  );
};
