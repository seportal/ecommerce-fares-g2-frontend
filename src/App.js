import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Container,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Container>
      <Box m={[3]}>
        <InputGroup ml={[10]}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="blue" />}
          />
          <Input
            type="lupa"
            placeholder="Search"
            width="250px"
            border="1px"
            size="sm"
          />
        </InputGroup>
      </Box>
      <Box>
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />} />
          </Routes>
        </Router>
      </Box>
    </Container>
  );
};

export default App;
