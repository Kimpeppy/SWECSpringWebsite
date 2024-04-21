/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={70}
              suffix="+"
              title="Members"
              description="In our diverse community"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <DefaultCounterCard
              count={15}
              suffix="+"
              title="Projects"
              description="Completed within our club"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <DefaultCounterCard
              count={12}
              suffix="+"
              title="GBMs"
              description="Held so far for our members"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
