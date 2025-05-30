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
import { useDispatch } from "react-redux";
import { AddAlldata } from "../Store/DataSlice";
import { addData } from "../Store/UserdataSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
    const data = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    });
    return () => data();
  }, []);

  var handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill out all contact fields.");
      return;
    }

    // console.log(auth);
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
        name,
        phone,
        timeSlot,
        date,
        service,
        email,
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
    setNotes("");
    setIsComplete(false);
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
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />
          <TextField
            label="Notes (Optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            fullWidth
            multiline
            rows={3}
          />
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
