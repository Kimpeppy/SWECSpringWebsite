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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check out our latest events
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="First GBM"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Our coding circle"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Our coding workshop"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Guest Speaker"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
