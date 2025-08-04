import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";
import BookingConfirmation from "./BookingConfirm/BookingConfirmation";
import { useDispatch, useSelector } from "react-redux";
import { AddAlldata } from "../Store/DataSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  AddrewardsPoints,
  fetchRewardData,
  rewardData,
} from "../Store/RewardSlice";
import { addData } from "../Store/UserdataSlice";
import { span } from "framer-motion/client";

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

const services = [
  "Classic Haircut",
  "Beard Trim",
  "Hot Towel Shave",
  "Haircut & Beard",
  "Hair Styling",
  "Kids Haircut",
];

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [status, Setstatus] = useState("pending");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [showEarned, setShowEarned] = useState(false);
  const [promoCode, setPromocode] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [activeRewardIndex, setActiveRewardIndex] = useState(null);

  const dispatch = useDispatch();
  const handleNext = () => {
    if (step === 1 && (!date || !timeSlot)) {
      alert("Please select date and time.");
      return;
    }
    if (step === 2 && !service) {
      alert("Please select a service.");
      return;
    }
    setStep(step + 1);
  };

  const auth = getAuth();
  useEffect(() => {
    dispatch(fetchRewardData());
    const data = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    });
    return () => data();
  }, []);

  const data = useSelector(rewardData);
  const matchedId = data
    .filter((elem) => elem.auth === email)
    .map((elem) => elem.docId);

  var handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill out all contact fields.");
      return;
    }
    const isReferralValid = data.find(
      (elem) => Number(elem.ReferralCode) === Number(code)
    );
    if (email) {
      dispatch(AddrewardsPoints({ newPoints: 50, userId: matchedId[0] }));
    }
    // console.log(isReferralValid);
    if (isReferralValid) {
      if (email) {
        dispatch(AddrewardsPoints({ newPoints: 100, userId: matchedId[0] }));
      }
      console.log("Referral code matched!");
      if (isReferralValid.docId) {
        dispatch(
          AddrewardsPoints({ newPoints: 200, userId: isReferralValid.docId })
        );

        // console.log(isReferralValid.docId);
      }
    } else {
      setError("Invalid referral code");
      return;
    }

    dispatch(
      AddAlldata({
        id: Date.now(),
        date,
        timeSlot,
        service,
        name,
        email,
        phone,
        notes,
        status,
      })
    );
    dispatch(
      addData({
        id: Date.now(),
        date,
        timeSlot,
        service,
        name,
        email,
        phone,
        notes,
        status,
      })
    );

    setIsComplete(true);
    // console.log(appointment.id);
  };
  const resetForm = () => {
    setStep(1);
    setDate("");
    setTimeSlot("");
    setService("");
    setName("");
    setEmail("");
    setPhone("");
    setCode("");
    setIsComplete(false);
  };
  const handleClick = () => {
    const promocode = Math.floor(Math.random() * 9000) + 1000;
    setShowInput;
    setPromocode(promocode);
    console.log(promoCode);
  };
  if (isComplete) {
    return (
      <div>
        <BookingConfirmation
          date={date}
          timeSlot={timeSlot}
          service={service}
          name={name}
          email={email}
          phone={phone}
          resetForm={resetForm}
        />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-200 shadow-2xl rounded-xl mt-10 space-y-6 "
    >
      <Typography variant="h5" className="text-center text-gray-700">
        Book Your Appointment
      </Typography>

      {step === 1 && (
        <>
          <TextField
            label="Select Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <FormControl fullWidth>
            <FormLabel className="text-gray-700 mb-2">
              Choose Time Slot
            </FormLabel>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setTimeSlot(time)}
                  className={`py-2 px-4 rounded-md border transition-all duration-200 ${
                    timeSlot === time
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-400"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </FormControl>
        </>
      )}

      {step === 2 && (
        <FormControl component="fieldset">
          <FormLabel component="legend">Select a Service</FormLabel>
          <RadioGroup
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {services.map((s, i) => (
              <FormControlLabel
                key={i}
                value={s}
                control={<Radio />}
                label={s}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}

      {step === 3 && (
        <>
          <TextField
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField label="Email" type="email" value={email} fullWidth />
          <TextField
            label="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />
          <TextField
            label="voucher num"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            fullWidth
          />
          <span className="text-sm text-red-600 ">{error}</span>
          <div
            onClick={() => setShowEarned(!showEarned)}
            className="w-full p-4 rounded-xl cursor-pointer bg-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <p className="font-semibold text-lg">
              Click to view earned rewards
            </p>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                showEarned ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {(() => {
                const earnedRewards = data
                  .filter((elem) => elem.auth === email)
                  .flatMap((elem, index) => {
                    const rewards = [
                      {
                        earned: elem.isRewardEarned,
                        label: "🔒 Private VIP Tool Access",
                      },
                      {
                        earned: elem.isRewardEarned2,
                        label: "🎁 Bonus Gift Pack",
                      },
                      {
                        earned: elem.isRewardEarned3,
                        label: "👑 Crown Membership",
                      },
                    ];
                    return rewards
                      .map((reward, i) =>
                        reward.earned
                          ? { ...reward, key: `${index}-${i}` }
                          : null
                      )
                      .filter(Boolean);
                  });

                if (earnedRewards.length === 0) {
                  return (
                    <div className="text-center text-gray-500 font-medium mt-4">
                      No rewards available.
                    </div>
                  );
                }

                return earnedRewards.map((reward) => (
                  <div key={reward.key} className="flex flex-col gap-2">
                    <div
                      className="flex items-center justify-between mt-2 px-5 py-3 rounded-md shadow-md bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveRewardIndex(reward.key);
                      }}
                    >
                      <h1 className="text-gray-800 text-base font-medium tracking-wide">
                        {reward.label}
                      </h1>
                      <span
                        onClick={handleClick}
                        className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full hover:bg-red-200 transition duration-200"
                      >
                        Use
                      </span>
                    </div>

                    {activeRewardIndex === reward.key && (
                      <TextField
                        onClick={(e) => e.stopPropagation()}
                        label="Promo Code"
                        value={promocode}
                        onChange={(e) => setPromocode(e.target.value)}
                        fullWidth
                      />
                    )}
                  </div>
                ));
              })()}
            </div>
          </div>
        </>
      )}

      <div className="flex justify-between">
        {step > 1 && (
          <Button variant="outlined" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        )}
      </div>
    </form>
  );
}
