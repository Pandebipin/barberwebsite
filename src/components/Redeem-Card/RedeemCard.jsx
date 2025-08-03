import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  AddrewardsPoints,
  fetchRewardData,
  rewardData,
} from "../../Store/RewardSlice";
import { getAuth } from "firebase/auth";

function RedeemCard({ service, feature, reedemAmt, icon, id }) {
  // if user claims reward then the tag of service should be turned into earned and disable the button
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRewardData());
  }, [dispatch]);

  const data = useSelector(rewardData);

  const auth = getAuth();
  const currentUser = auth.currentUser;
  const currentEmail = currentUser?.email;

  const matchedId = data
    .filter((elem) => elem.auth === currentEmail)
    .map((elem) => elem.docId);
  const Matchpoints = data
    .filter((elem) => elem.auth === currentEmail)
    .map((elem) => elem.points);
  const points = Matchpoints[0];

  const handlereedem = (id) => {
    console.log("id", typeof id);
    if (id == 1) {
      console.log("dispatched", id);
      if (points >= 500) {
        dispatch(
          AddrewardsPoints({
            userId: matchedId[0],
            isRewardEarned: true,
          })
        );
      }
    } else if (id == 2) {
      if (points >= 750) {
        dispatch(
          AddrewardsPoints({
            userId: matchedId[0],
            isRewardEarned2: true,
          })
        );
      }
    } else if (id == 3) {
      if (points >= 1200) {
        console.log("done");
        dispatch(
          AddrewardsPoints({
            userId: matchedId[0],
            isRewardEarned3: true,
          })
        );
      }
    } else {
      if (points >= 1750) {
        dispatch(
          AddrewardsPoints({
            userId: matchedId[0],
            isRewardEarned: true,
          })
        );
      }
    }
  };

  return (
    <div className="group md:w-[310px] bg-[#251E18] p-4 rounded-lg hover:-translate-y-2 border border-transparent hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(255,255,0,0.3)] transition-all duration-300 ease-in-out">
      <div className="flex w-full justify-between items-center pb-3">
        <div className="p-2 rounded-full bg-yellow-600/20 group-hover:bg-yellow-500/20 transition duration-300">
          {icon}
        </div>{" "}
        {data
          .filter((elem) => elem.auth === currentEmail)
          .map((elem) => {
            let isEarned = false;
            if (id == 1) isEarned = elem.isRewardEarned;
            if (id == 2) isEarned = elem.isRewardEarned2;
            if (id == 3) isEarned = elem.isRewardEarned3;
            if (id == 4) isEarned = elem.isRewardEarned4;

            return (
              <span
                key={elem.docId}
                className={`text-sm px-2 rounded-lg ${
                  isEarned ? "bg-green-600" : "bg-[#CC4619]"
                }`}
              >
                {isEarned ? "earned" : "service"}
              </span>
            );
          })}
      </div>

      <div className="sec flex flex-col gap-2 py-4">
        <h4 className="text-lg text-white">{service}</h4>
        <p className="text-gray-400 md:text-nowrap">{feature}</p>
      </div>

      <div className="flex justify-between p-2 items-center">
        <div className="flex gap-1 items-center">
          <BsStarFill className="text-yellow-400 text-semibold" />
          <p className="text-yellow-500 font-semibold">{reedemAmt}</p>
        </div>
        {data
          .filter((elem) => elem.auth === currentEmail)
          .map((elem) => {
            let isEarned = false;
            if (id == 1) isEarned = elem.isRewardEarned;
            if (id == 2) isEarned = elem.isRewardEarned2;
            if (id == 3) isEarned = elem.isRewardEarned3;
            if (id == 4) isEarned = elem.isRewardEarned4;

            return (
              <button
                key={elem.docId}
                onClick={() => handlereedem(id)}
                disabled={isEarned}
                className={`rounded-md px-4 py-2 shadow-lg transition-all ${
                  isEarned
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-[#db771f] hover:bg-[#e0882f]"
                }`}
              >
                {isEarned ? "Reward Claimed" : "Click"}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default RedeemCard;
