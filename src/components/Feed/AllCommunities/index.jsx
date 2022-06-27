import React, { useEffect } from "react";

const Index = ({ tag }) => {
  let myFilter = [];

  const myData = [
    {
      tagName: "Node 1",
      tag: 1,
    },
    {
      tagName: "Node 2",
      tag: 1,
    },
    {
      tagName: "Node 3",
      tag: 1,
    },
    {
      tagName: "React",
      tag: 2,
    },
  ];

  useEffect(() => {
    return () => {
      myFilter.push(tag);
    };
  }, [tag]);

  return (
    <div>
      {tag == 3 ? (
        <> All </>
      ) : (
        myData.map((element, i) => {
          return tag == element.tag && <div key={i}>{element.tagName}</div>;
        })
      )}
    </div>
  );
};

export default Index;
