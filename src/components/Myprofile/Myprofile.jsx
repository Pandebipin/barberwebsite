import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import MembershipTiers from "../Membership-Tiers/MembershipTiers";
import RedeemCard from "../Redeem-Card/RedeemCard";
import { FiScissors } from "react-icons/fi";
import { TfiTimer } from "react-icons/tfi";
import { RiVipCrownLine } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import {
  AddRewardData,
  AddrewardsPoints,
  fetchRewardData,
  rewardData,
} from "../../Store/RewardSlice";

function Myprofile() {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRewardData());
  }, [dispatch]);
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const currentEmail = currentUser?.email;
  const data = useSelector(rewardData);
  const matchedId = data
    .filter((elem) => elem.auth === currentEmail)
    .map((elem) => elem.docId);

  const generateCode = () => {
    console.log("loaded");
    const Generatedcode = Math.floor(Math.random() * 9000) + 1000;
    dispatch(
      AddrewardsPoints({
        userId: matchedId[0],
        ReferralCode: Generatedcode,
      })
    );
    setStep(1);
  };

  const getProgressWidth = (points) => {
    if (points <= 999) return (points / 1999) * 100;
    if (points <= 1999) return ((points - 1000) / 1000) * 100;
    return ((points - 2000) / 1000) * 100;
  };

  return (
    // <div className="w-full  bg-gray-900 text-gray-100 p-4 flex items-center justify-center">
    //   {isAuth ? (
    //     <div className="card bg-gray-800 shadow-lg rounded-lg p-6 w-[90vw] md:w-[30vw]">
    //       <div className="flex gap-4 items-center mb-6">
    //         <img
    //           className="logo w-16 md:w-20 md:h-20 object-cover border-4 border-gray-100 rounded-full"
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybJSVgHqJemIZHKYL6gpCo2O1tIhclTMB8Q&s"
    //           alt="Profile"
    //         />
    //         <div>
    //           <span className="text-lg md:text-xl font-semibold">
    //             Welcome Back!
    //           </span>
    //           <p className="text-sm text-gray-400">
    //             Check your progress and tasks
    //           </p>
    //         </div>
    //       </div>

    //       <div className="tabs p-2 flex justify-between items-center border-b border-gray-700 mb-4">
    //         <button
    //           className={`text-lg px-4 py-2 rounded-md ${
    //             buttonIndex === 0 ? "bg-gray-700 text-white" : "text-gray-400"
    //           }`}
    //           onClick={() => setbuttonIndex(0)}
    //         >
    //           History
    //         </button>
    //         <button
    //           className={`text-lg px-4 py-2 rounded-md ${
    //             buttonIndex === 1 ? "bg-gray-700 text-white" : "text-gray-400"
    //           }`}
    //           onClick={() => setbuttonIndex(1)}
    //         >
    //           Task
    //         </button>
    //       </div>

    //       {buttonIndex === 1 ? (
    //         <div>
    //           <h1 className="text-2xl font-bold text-center mb-2">
    //             Get Rewarded 🎉🏆
    //           </h1>
    //           <p className="text-center text-gray-400 mb-4">
    //             Complete 10 haircuts to earn a reward!
    //           </p>

    //           <div className="progress-bar mb-4">
    //             <div className="flex justify-between items-center mb-2">
    //               <span className="text-sm">Progress</span>
    //               <span className="font-semibold text-lg">{points}/10</span>
    //             </div>
    //             <input
    //               className="w-full h-2 bg-gray-700 rounded-full cursor-pointer"
    //               type="range"
    //               name="range"
    //               min="0"
    //               max="10"
    //               value={points}
    //               onChange={(e) => setPoints(e.target.value)}
    //             />
    //           </div>

    //           <button
    //             className={`w-full py-3 rounded-lg font-medium text-lg transition ${
    //               points >= 10
    //                 ? "bg-green-500 text-white hover:bg-green-600"
    //                 : "bg-gray-600 text-gray-400 cursor-not-allowed"
    //             }`}
    //             disabled={points < 10}
    //           >
    //             {points >= 10 ? "Claim Reward 🎁" : "Keep Going 💪"}
    //           </button>
    //         </div>
    //       ) : (
    //         <div>
    //           {userAppointments.length > 0 ? (
    //             userAppointments.map((elem, index) => (
    //               <div
    //                 key={index}
    //                 className="flex gap-6 px-1 justify-between py-1"
    //               >
    //                 <span>{elem.service}</span>
    //                 <span>{elem.date}</span>
    //               </div>
    //             ))
    //           ) : (
    //             <p className="text-gray-400 text-center">No data available.</p>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //   ) : (
    //     <Signup />
    //   )}
    // </div>
    <div className="w-full min-h-screen flex flex-col gap-6 p-4">
      {currentEmail &&
        data
          .filter((elem) => elem.auth === currentEmail)
          .map((elem, i) => {
            return (
              <>
                <div key={i} className="w-[250px] pt-4 flex flex-col gap-2">
                  <button
                    disabled={step > 0}
                    onClick={generateCode}
                    className="text-lg text-white rounded-md bg-yellow-600 px-4 py-2"
                  >
                    Generate referral code
                  </button>
                  <span className="text-white text-center">
                    {elem.ReferralCode}
                  </span>
                </div>
                <div className="profile bg-[#251E18] border border-amber-700 mt-4 p-2">
                  <div className="first-section flex flex-col md:flex-row items-center gap-8 p-8">
                    <div className="logo rounded-full bg-amber-900 p-2 border-yellow-500 shadow-[0_0_15px_rgba(255,255,0,0.3)] transition-all duration-300 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-crown w-8 h-8 text-yellow-500"
                        data-lov-id="src/components/BarberRewards.tsx:87:15"
                        data-lov-name="Crown"
                        data-component-path="src/components/BarberRewards.tsx"
                        data-component-line="87"
                        data-component-file="BarberRewards.tsx"
                        data-component-name="Crown"
                        data-component-content="%7B%22className%22%3A%22w-8%20h-8%20text-barber-gold%22%7D"
                      >
                        <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                        <path d="M5 21h14"></path>
                      </svg>
                    </div>
                    <div className="text ">
                      <h1 className="text-white text-xl md:text-xl lg:text-3xl py-5 font-bold">
                        Welcome back,{currentEmail}
                      </h1>
                      <span className="text-semibold text-xl text-white bg-yellow-500 rounded-lg p-3">
                        {elem.points <= 999
                          ? "Bronze member"
                          : elem.points > 999 && elem.points <= 1999
                          ? "Gold member"
                          : elem.points > 1999
                          ? "Platinium"
                          : ""}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 pt-4 md:px-4">
                      <div className="flex justify-between gap-7 md:gap-0 md:w-[300px] xl:w-[500px]">
                        <h1 className="text-gray-300 text-sm">
                          Progress to Next Tier
                        </h1>
                        <span className="text-gray-400 text-sm">
                          {elem.points}/{elem.points <= 999 ? "1999" : "2999"}{" "}
                          points
                        </span>
                      </div>

                      <div className="w-full h-3 bg-[#2F2723] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                          style={{ width: `${getProgressWidth(elem.points)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="text-white font-bold text-xl text-center pt-6">
                  Available rewards
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <RedeemCard
                    id="1"
                    reedemAmt={"500"}
                    service={"Premium Haircut"}
                    feature={"Signature cut with hot towel treatment"}
                    icon={
                      <FiScissors className="text-3xl text-white group-hover:text-yellow-400 transition duration-300" />
                    }
                  />
                  <RedeemCard
                    id="2"
                    reedemAmt={"750"}
                    service={"Beard Grooming Kit"}
                    feature={"Professional-grade beard oil and balm"}
                    icon={
                      <GoGift className="text-3xl text-white group-hover:text-yellow-400 transition duration-300" />
                    }
                  />
                  <RedeemCard
                    id="3"
                    reedemAmt={"1200"}
                    service={"VIP Experience"}
                    feature={"Private suite with complimentary drinks"}
                    icon={
                      <RiVipCrownLine className="text-3xl text-white group-hover:text-yellow-400 transition duration-300" />
                    }
                  />
                  <RedeemCard
                    id="4"
                    reedemAmt={"300"}
                    service={"Quick Trim"}
                    feature={"Express haircut service"}
                    icon={
                      <TfiTimer className="text-3xl text-white group-hover:text-yellow-400 transition duration-300" />
                    }
                  />
                </div>
                <div className="px-4 pt-4">
                  <MembershipTiers stage={elem.stage} />
                </div>
              </>
            );
          })}
    </div>
  );
}

export default Myprofile;
