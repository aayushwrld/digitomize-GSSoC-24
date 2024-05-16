import { useMemo } from "react";
import Card from "./globals/Card";
import "./css/Contests.css";

function Contests({ contests, range }) {
  const contentDescription =
    "Discover upcoming coding contests on Digitomize and stay in the loop with the latest challenges. Join us, take part, and put your coding skills to the test!".toLowerCase();
  const queryData = useMemo(() => {
    return contests?.filter((data) => {
      if (data.duration >= range[0] && data.duration <= range[1]) return true;
    });
  }, [range, contests]);

  return (
    <>
      <div className="allContests scroll-smooth">
        <div
          className="allContests lg:justify-evenly md:justify-evenly sm:justify-center px-4"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {queryData.length == 0 ? (
            <>
              <h2 className="lg:text-3xl lg:my-16 md:text-2xl md:my-12 text-xl text-center my-10 mx-auto">
                No Contests Found
              </h2>
            </>
          ) : (
            <>
              {queryData.map((contest) => (
                <Card key={contest.vanity} contest={contest} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Contests;
