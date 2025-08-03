import React, { useEffect } from "react";
import MembershipTiersCard from "../MembershipTiersCard/MembershipTiersCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRewardData, rewardData } from "../../Store/RewardSlice";
import { getAuth } from "firebase/auth";

function MembershipTiers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRewardData());
  }, [dispatch]);

  const Data = useSelector(rewardData);
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const currentEmail = currentUser?.email;

  const matchedPoints = Data.filter((elem) => elem.auth === currentEmail).map(
    (elem) => elem.points
  );

  const points = matchedPoints[0] || 0;
  const stage = points <= 999 ? "Bronze" : points <= 1999 ? "Gold" : "Platinum";

  return (
    <div className="w-full bg-[#251E18] p-6 border-2 rounded-md border-gray-700 ">
      <h1 className="text-white font-bold text-2xl text-center">
        Membership Tiers
      </h1>

      <div className="flex flex-col justify-center items-center md:flex-row gap-4 p-6">
        {/* Bronze */}
        <MembershipTiersCard
          code={stage === "Bronze"}
          img="https://preview--sharp-rewards-hub.lovable.app/assets/bronze-badge-DNhjZTNh.png"
          position="Bronze"
          points="0-999"
          color="#B26834"
          features1="Priority booking"
          features2="Birthday discount"
          icon1={
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
              className="lucide lucide-calendar w-4 h-4 text-barber-bronze"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
          }
          icon2={
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
              className="lucide lucide-gift w-4 h-4 text-slate-300"
            >
              <rect x="3" y="8" width="18" height="4" rx="1"></rect>
              <path d="M12 8v13"></path>
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
            </svg>
          }
        />

        {/* Gold */}
        <MembershipTiersCard
          code={stage === "Gold"}
          img="https://cdn-icons-png.flaticon.com/512/616/616490.png"
          position="Gold"
          points="1000-1999"
          color="#F9C02F"
          features1="Free hot towel service"
          features2="Complimentary beard oil"
          icon1={
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
              className="lucide lucide-trophy w-4 h-4 text-barber-gold"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
          }
          icon2={
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
              className="lucide lucide-gift w-4 h-4 text-barber-gold"
            >
              <rect x="3" y="8" width="18" height="4" rx="1"></rect>
              <path d="M12 8v13"></path>
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
            </svg>
          }
        />

        {/* Platinum */}
        <MembershipTiersCard
          code={stage === "Platinum"}
          img="https://preview--sharp-rewards-hub.lovable.app/assets/vip-crown-DaPwL_Xr.png"
          position="Platinum"
          points="2000-2999"
          color="#85898D"
          features1="VIP private suite access"
          features2="Monthly grooming kit"
          icon1={
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
              className="lucide lucide-crown w-4 h-4 text-slate-300"
            >
              <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
              <path d="M5 21h14"></path>
            </svg>
          }
          icon2={
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
              className="lucide lucide-gift w-4 h-4 text-slate-300"
            >
              <rect x="3" y="8" width="18" height="4" rx="1"></rect>
              <path d="M12 8v13"></path>
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default MembershipTiers;
