/* eslint no-unused-vars: "off" */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

function Pagination() {
  const [active, setActive] = useState(1);
  const [apiData, setApiData] = useState([]);
  const itemsPerPage = 10; // Number of items to show per page

  function Pagination() {
    const [active, setActive] = useState(1);
    const [apiData, setApiData] = useState([]);
    const itemsPerPage = 10; // Number of items to show per page

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=type:user&page=1&per_page=${itemsPerPage}`,
        );
        const data = await response.json();
        setApiData(data.items);
        console.log(data.items);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const nextPage = () => {
      if (active < apiData.length / itemsPerPage) {
        setActive(active + 1);
      }
    };

    const prevPage = () => {
      if (active > 1) {
        setActive(active - 1);
      }
    };

    const currentPageData = apiData.slice(
      (active - 1) * itemsPerPage,
      active * itemsPerPage,
    );
    console.log(currentPageData);

    return (
      <div className="flex items-center gap-8">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={prevPage}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="gray" className="font-normal">
          Page <strong className="text-gray-900">{active}</strong> of{" "}
          <strong className="text-gray-900">
            {Math.ceil(apiData.length / itemsPerPage)}
          </strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={nextPage}
          disabled={active === Math.ceil(apiData.length / itemsPerPage)}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    );
  }

  const nextPage = () => {
    if (active < apiData.length / itemsPerPage) {
      console.log("Active +1", active);
      setActive(active + 1);
    }
  };
  console.log("NextPage: ", nextPage());

  const prevPage = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  console.log("Previous Page: ", prevPage());

  // Get the current page's data based on active page and itemsPerPage
  const currentPageData = apiData.slice(
    (active - 1) * itemsPerPage,
    active * itemsPerPage,
  );
  console.log(currentPageData);

  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prevPage}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">
          {Math.ceil(apiData.length / itemsPerPage)}
        </strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={nextPage}
        disabled={active === Math.ceil(apiData.length / itemsPerPage)}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
export default Pagination;
