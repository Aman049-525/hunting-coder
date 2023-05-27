import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter;
  const slug = router.query;

  return (
    <>
      <div className="d-flex justify-content-center m-3">
        <h1>Heading of the Blog {slug} </h1>
      </div>
      <div className="width">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          magni facere reprehenderit consequuntur quaerat asperiores! Tempora
          aliquam maiores eos nihil minus cumque quis sint eveniet sit
          voluptatum sunt quae mollitia illum commodi et ut, unde facere quod
          consequuntur! Ullam commodi nemo quas repellat eligendi voluptas!
        </p>
      </div>
    </>
  );
};

export default slug;
