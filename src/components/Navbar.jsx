import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" ,paddingLeft:"10px" }}>
      <img src={process.env.PUBLIC_URL+"logo-rembg.png"} alt="logo" height={65} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
