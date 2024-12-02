import React from "react";
import { Grid } from "@radix-ui/themes";
import Card from "@/app/components/card/Card";
import Search from "@/app/components/search/Search";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = {
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: "waseem javed" },
    description: "here will be tested!",
    image: "/sc.png",
    category: "Robots",
    title: "we Robots",
  };
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches, and Get Noticed in virtual
          Competitions.
        </p>

        <Search query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semi-bold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <Grid columns={{ sm: "2", md: "3", lg: "4" }} gap={"2"} width="auto">
          {Object.keys(posts).length > 0 ? (
            <>
              {Array(6)
                .fill(posts)
                .map((card, idx) => {
                  return <Card key={idx} {...card} />;
                })}
            </>
          ) : (
            <p>No Startups found!</p>
          )}
        </Grid>
      </section>
    </>
  );
};

export default Home;
