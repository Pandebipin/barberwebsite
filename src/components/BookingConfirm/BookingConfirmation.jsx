import React from "react";
import { Typography, Button, Divider } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BuildIcon from "@mui/icons-material/Build";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function BookingConfirmation({
  date,
  timeSlot,
  service,
  name,
  email,
  phone,
  resetForm,
}) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10 border border-gray-100">
      <Typography
        variant="h5"
        className="mb-2 font-semibold text-center text-green-600"
      >
        🎉 Booking Confirmed!
      </Typography>
      <Typography className="text-center text-gray-500 py-2 mb-4">
        Thank you for your appointment
      </Typography>

      <Divider className="mb-4" />

      <div className="space-y-3 text-sm md:text-md py-2">
        <div className="flex items-center gap-2 text-gray-700">
          <CalendarTodayIcon fontSize="small" />
          <span>
            <strong>Date:</strong> {date}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <AccessTimeIcon fontSize="small" />
          <span>
            <strong>Time:</strong> {timeSlot}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <BuildIcon fontSize="small" />
          <span>
            <strong>Service:</strong> {service}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <PersonIcon fontSize="small" />
          <span>
            <strong>Name:</strong> {name}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <EmailIcon fontSize="small" />
          <span>
            <strong>Email:</strong> {email}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <PhoneIcon fontSize="small" />
          <span>
            <strong>Phone:</strong> {phone}
          </span>
        </div>
      </div>

      <Divider className="my-4" />
      <br />
      <Button
        onClick={resetForm}
        variant="contained"
        color="warning"
        fullWidth
        style={{ borderRadius: 8, fontWeight: 600, padding: "10px 0" }}
      >
        Book Another Appointment
      </Button>
    </div>
  );
}
